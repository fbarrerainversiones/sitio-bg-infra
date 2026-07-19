# DEPLOY A STAGING — Runbook VPS (sitio-bg-web)

> **Runbook paso a paso.** Lo ejecuta Francisco por SSH, **bloque por bloque**,
> pegando la salida al chat entre bloques para auditoría. NO ejecutar el runbook
> entero de golpe. Cada bloque tiene pre-check, comandos, post-check y rollback.

**Versión:** 1.0
**Fecha:** 19 de julio de 2026 (Sesión de deploy a staging)
**Modalidad:** manual vía SSH, NO Claude Code en el VPS
**Objetivo:** publicar el sitio en `https://staging.barreraglobal.com`, protegido
con basicauth + `X-Robots-Tag: noindex`, sirviendo el build de producción.
**Riesgo:** medio. Toca el Caddy compartido de Aurora (B4 y B5). Gate 0 antes y
después de cada bloque sensible. Rollback explícito en cada bloque.

---

## ⚠️ Nota de estado: el post-deploy supersede a HITO-01

Este deploy cambia el estado esperado de la red del container `caddy`:

- **Estado pre-deploy (HITO-01 / PENDIENTES):** `caddy` **SOLO** en `stack_net`
  (`172.20.10.10`). El Gate 0 POST de `docs/prompts/HITO-01-runbook-vps.md` y el
  chequeo de `PENDIENTES.md` que exigen *"Caddy SOLO en stack_net"* eran
  correctos **para esa etapa** (aún no había sitio que enrutar).
- **Estado post-deploy (este runbook, decisión D1):** `caddy` queda en **DOS
  redes** — `stack_net` **Y** `sitio_bg_net` — por una operación **aditiva y
  reversible** (`docker network connect`). Caddy **no sale** de `stack_net`.

A partir de este deploy, el estado sano de `caddy` es **dos redes**. Los chequeos
antiguos de "una sola red" quedan **supersedidos** por esta decisión. NO se editan
los docs históricos (HITO-01 no se toca); esta nota es la que rige.

> **Precedente crítico — incidente 522 v2.0** (`PLAN-MAESTRO-v2.md:158`):
> *"El incidente 522 v2.0 fue exactamente esto: conectar un Caddy a una red que no
> era la suya."* Fueron **45,5 h de downtime** (19–21 mayo 2026). El bloque **B4**
> de este runbook es de esa misma familia de operación. La diferencia deliberada:
> aquí es **aditiva** (no se mueve ni reconfigura la red existente de caddy), **en
> caliente** (sin restart) y **reversible en un comando**. Aun así: **máxima
> cautela**, Gate 0 inmediato tras conectar, y `disconnect` al primer síntoma.

---

## Pre-requisitos (antes de B0)

```
[ ] Verificación post-reinicio VERDE ya hecha (Aurora 200, repo limpio, HEAD publicado).
[ ] Registro DNS staging.barreraglobal.com -> A 212.85.14.172 creado en Cloudflare.
    (Necesario para que Caddy emita el certificado en B5. Ver contingencia TLS D2.)
[ ] Sesión SSH al VPS disponible (pwsh 7 -> ssh hostinger).
[ ] Ventana de baja actividad; Aurora sin operaciones críticas en curso.
[ ] Credencial de staging DECIDIDA (usuario + clave). La clave se hashea en el
    VPS (B5); nunca se escribe en el repo ni en el chat.
```

Tras `ssh hostinger`, confirmar el VPS correcto **antes de operar** (Regla R-08):

```bash
whoami && hostname && pwd
```

---

## B0 — Gate 0 PRE (Aurora sana post-reboot)

Chequeo más importante del runbook. Si algo aquí no está VERDE, **NO arrancar**.

```bash
# B0.1 — Los 5 dominios productivos en HTTP 200
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
# Esperado: TODOS 200

# B0.2 — Containers de Aurora Up tras el reboot del VPS
sudo docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "caddy|n8n|postgres|redis|chatwoot|beszel"
# Esperado: 9 containers (caddy, n8n, n8n-worker, postgres, redis,
#           chatwoot-rails, chatwoot-sidekiq, beszel, beszel-agent) todos "Up"

# B0.3 — Estado de red del caddy ANTES del deploy
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado AHORA: stack_net=172.20.10.10   (sitio_bg_net se agrega recién en B4)

# B0.4 — La red sitio_bg_net sigue existiendo tras el reboot (creada en HITO-01)
sudo docker network ls | grep sitio_bg_net
# Esperado: sitio_bg_net  bridge  local
```

**Post-check:** los 5 dominios en 200, 9 containers Up, caddy solo en stack_net,
`sitio_bg_net` presente.
**Rollback B0:** ninguno (solo lectura). Si algo falla → **ABORTAR** y diagnosticar
(si Aurora no está sana, es problema del proyecto Aurora, no de este deploy).

---

## B1 — Repo del sitio en el VPS (`/opt/sitio-bg/src`)

La imagen se construye desde el repo (contexto de build = raíz del repo). Se
clona/actualiza en un subdirectorio propio para no colisionar con la estructura
que creó HITO-01 en `/opt/sitio-bg/`.

```bash
# B1 — Clonar si no existe; si existe, actualizar main
REPO=/opt/sitio-bg/src
if [ -d "$REPO/.git" ]; then
  cd "$REPO" && git fetch origin && git checkout main && git pull origin main
else
  git clone https://github.com/fbarrerainversiones/sitio-bg-infra.git "$REPO" && cd "$REPO"
fi

# Confirmar el HEAD que se va a desplegar
git log --oneline -1
# Esperado: el commit feat(deploy) de esta sesión (o posterior) en origin/main
```

**Post-check:** `git log --oneline -1` muestra el HEAD esperado; working tree limpio.
**Rollback B1:** no destructivo. Si el clone/pull falla, corregir y reintentar. Para
descartar el checkout: `rm -rf /opt/sitio-bg/src` (solo borra la copia de trabajo).

---

## B2 — Build de la imagen Docker (primera construcción real)

La validación previa fue **estática** (sin Docker). Esta es la primera build real.

```bash
cd /opt/sitio-bg/src

# B2 — Construir la imagen (multi-stage: Astro build -> nginx unprivileged)
sudo docker compose -f infra/docker-compose.yml build
```

**Post-check:**

```bash
sudo docker images | grep sitio-bg-web
# Esperado: sitio-bg-web  latest  <id>  ...  (imagen recién creada)
```

**Rollback B2:** `sudo docker rmi sitio-bg-web:latest` (borra solo esta imagen; no
afecta a Aurora). Si la build falla, leer el log del stage que reventó.

---

## B3 — Levantar el container (`docker compose up -d`)

```bash
cd /opt/sitio-bg/src

# B3.1 — Levantar el service (red sitio_bg_net external, SIN ports al host)
sudo docker compose -f infra/docker-compose.yml up -d

# B3.2 — Estado del container
sudo docker ps --filter "name=sitio-bg-web" --format "table {{.Names}}\t{{.Status}}"
# Esperado: sitio-bg-web  Up (health: starting) -> luego "healthy"

# B3.3 — Esperar el healthcheck (corre cada 30s; dar ~40s)
sudo docker inspect --format '{{.State.Health.Status}}' sitio-bg-web
# Esperado: healthy

# B3.4 — Confirmar la red e IP del container
sudo docker inspect sitio-bg-web --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado: sitio_bg_net=172.22.10.10   (SOLO su red propia; SIN puerto al host)
```

**Post-check:** container `healthy`, en `sitio_bg_net` con IP `172.22.10.10`, sin
`ports` publicados (verificable con `sudo docker port sitio-bg-web` -> vacío).
**Rollback B3:** `sudo docker compose -f infra/docker-compose.yml down` (baja SOLO
el sitio; la red es `external`, no se elimina; Aurora intacta).

---

## B4 — Conectar `caddy` a `sitio_bg_net` (decisión D1) + verificar alcance

> **Bloque sensible — releer la nota del incidente 522 arriba.** Operación
> **aditiva**: caddy mantiene `stack_net` y suma `sitio_bg_net`. Sin restart.

```bash
# B4.1 — Conectar el container caddy TAMBIÉN a sitio_bg_net
sudo docker network connect sitio_bg_net caddy

# B4.2 — GATE 0 INMEDIATO: confirmar que Aurora no se inmutó por el connect
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
# Esperado: TODOS siguen 200. Si CUALQUIERA cae -> ROLLBACK B4 YA.

# B4.3 — Confirmar que caddy quedó en LAS DOS redes
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado: stack_net=172.20.10.10 sitio_bg_net=172.22.10.x   (LAS DOS)

# B4.4 — Verificar alcance por DNS interno DESDE caddy hacia el sitio
sudo docker exec caddy wget -qO- http://sitio-bg-web:8080/ | head -20
# Esperado: HTML del sitio (<!DOCTYPE html> ... "Barrera Global" ...)
# Si 'wget' no está en la imagen caddy, alternativa desde la red:
#   sudo docker run --rm --network sitio_bg_net alpine:latest wget -qO- http://sitio-bg-web:8080/ | head -20
```

**Post-check:** los 5 dominios en 200, caddy en las dos redes, y `wget` a
`sitio-bg-web:8080` devuelve el HTML del sitio.
**Rollback B4:**

```bash
sudo docker network disconnect sitio_bg_net caddy
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado tras rollback: stack_net=172.20.10.10 (solo)
# Revalidar Gate 0 (5 dominios 200).
```

---

## B5 — Caddyfile compartido (flujo de 7 pasos, Regla 5)

Agrega el bloque `staging.barreraglobal.com` (de `infra/caddyfile-snippet.txt`).

```bash
# Paso 1 — Backup timestamped del Caddyfile actual
cd /opt/stack/caddy
sudo cp Caddyfile Caddyfile.bak.sitio-bg.$(date +%Y%m%d-%H%M%S)
ls -lh Caddyfile.bak.sitio-bg.*   # confirmar que el backup existe

# Paso 2 — Gate 0 PRE (5 dominios 200)
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "; curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
# Esperado: TODOS 200

# Paso 3a — Generar el hash bcrypt de la clave EN EL VPS (interactivo, no queda en history)
sudo docker exec -it caddy caddy hash-password
# Escribir la clave en el prompt. Copiar el hash $2a$14$... que devuelve.

# Paso 3b — Editar el Caddyfile: pegar el bloque del snippet reemplazando
#           {STAGING_USER} (usuario en texto plano) y {BCRYPT_HASH} (el hash de 3a).
#           NUNCA con 'mv' (rompe el bind-mount): editar in-place con nano.
sudo nano /opt/stack/caddy/Caddyfile
# Contenido a agregar (de infra/caddyfile-snippet.txt):
#   staging.barreraglobal.com {
#       basicauth {
#           staging  $2a$14$....
#       }
#       header X-Robots-Tag "noindex, nofollow"
#       reverse_proxy sitio-bg-web:8080
#   }

# Paso 4 — Validar sintaxis ANTES de recargar
sudo docker exec caddy caddy validate --config /etc/caddy/Caddyfile
# Esperado: "Valid configuration". Si marca 'basicauth' deprecado -> cambiar a
# 'basic_auth' (misma sintaxis) y re-validar.

# Paso 5 — Recargar sin downtime (NO reiniciar el container)
sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile

# Paso 6 — Gate 0 POST (5 dominios 200)
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "; curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
# Esperado: TODOS 200
```

**Contingencia TLS (D2):** si al recargar, Caddy no emite el certificado de
`staging.barreraglobal.com` (el registro está *proxied* en Cloudflare y falla el
challenge), pasar el registro a **DNS-only** (nube gris) en Cloudflare, esperar
propagación y recargar de nuevo. Con el cert emitido se puede reactivar el proxy.

**Rollback B5 (Paso 7):**

```bash
cd /opt/stack/caddy
sudo cp Caddyfile.bak.sitio-bg.<TIMESTAMP> Caddyfile
sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile
# Revalidar Gate 0 (5 dominios 200).
```

---

## B6 — Verificación externa de staging

Desde tu laptop (o cualquier red), NO desde el VPS:

```bash
# B6.1 — Sin credenciales: debe EXIGIR autenticación
curl -s -o /dev/null -w "%{http_code}\n" https://staging.barreraglobal.com
# Esperado: 401

# B6.2 — Con credenciales: debe servir el sitio
curl -s -o /dev/null -w "%{http_code}\n" -u "staging:LACLAVE" https://staging.barreraglobal.com
# Esperado: 200

# B6.3 — Cabecera noindex presente
curl -sI -u "staging:LACLAVE" https://staging.barreraglobal.com | grep -i x-robots-tag
# Esperado: X-Robots-Tag: noindex, nofollow
```

**Post-check:** 401 sin credenciales, 200 con credenciales, header noindex presente.
**Rollback B6:** no aplica (verificación). Si falla, el problema está en B4 (alcance)
o B5 (Caddyfile) -> aplicar el rollback del bloque correspondiente.

---

## B7 — Gate 0 POST completo + visto visual

```bash
# B7.1 — 5 dominios PRODUCTIVOS en 200 (staging es adicional, no cuenta para el Gate 0 de Aurora)
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "; curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done

# B7.2 — Containers de Aurora todos Up
sudo docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "caddy|n8n|postgres|redis|chatwoot|beszel"

# B7.3 — Estado de red del caddy ESPERADO post-deploy (supersede a HITO-01)
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado AHORA (post-deploy): stack_net=172.20.10.10 sitio_bg_net=172.22.10.x   (DOS redes)
```

**Visto visual de Francisco:** abrir `https://staging.barreraglobal.com` en el
navegador, ingresar las credenciales, y revisar las 4 páginas (`/`, `/sobre-mi`,
`/privacidad`, `/contacto`): render correcto, menú móvil y scroll-reveal
funcionando (valida la CSP), sin errores en la consola.

---

## Rollback total (abortar todo el deploy)

En orden inverso. Deja el VPS exactamente como estaba antes de B1:

```bash
# 1. Restaurar el Caddyfile (deshace B5)
cd /opt/stack/caddy
sudo cp Caddyfile.bak.sitio-bg.<TIMESTAMP> Caddyfile
sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile

# 2. Desconectar caddy de sitio_bg_net (deshace B4)
sudo docker network disconnect sitio_bg_net caddy

# 3. Bajar el container del sitio (deshace B3)
cd /opt/sitio-bg/src && sudo docker compose -f infra/docker-compose.yml down

# 4. Gate 0 final: confirmar Aurora intacta (5 dominios 200, caddy solo en stack_net)
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "; curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
```

---

## Checklist de cierre

```
[ ] B0 — Gate 0 PRE VERDE (5 dominios 200, 9 containers Up, caddy solo stack_net, red presente)
[ ] B1 — Repo en /opt/sitio-bg/src con el HEAD correcto
[ ] B2 — Imagen sitio-bg-web:latest construida
[ ] B3 — Container healthy en sitio_bg_net (172.22.10.10), sin ports al host
[ ] B4 — caddy en DOS redes + wget interno devuelve el HTML + Gate 0 OK
[ ] B5 — Bloque staging en el Caddyfile, validate OK, reload OK, Gate 0 POST OK
[ ] B6 — 401 sin credenciales / 200 con credenciales / header noindex
[ ] B7 — Gate 0 POST completo + visto visual de Francisco
```

Si los 8 bloques están OK, **staging cerrado**. Próximo hito: revisión legal
humana (P-39) antes de cualquier deploy PÚBLICO (quitar basicauth/noindex).

---

**Fin del runbook de deploy a staging.**
