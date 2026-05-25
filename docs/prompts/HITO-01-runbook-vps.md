# HITO 01 — Crear infraestructura base del sitio en el VPS

> **Runbook paso a paso.** Esta guía se ejecuta cuando Francisco decida arrancar HITO 01. Cada paso tiene pre-check, ejecución y post-check. NO ejecutar todavía.

**Versión:** 1.0
**Fecha:** 25 de mayo de 2026
**Modalidad:** manual via SSH, NO Claude Code en VPS
**Tiempo estimado:** 25-35 minutos (sin contar pausa para auditoría externa)
**Riesgo:** bajo (solo creamos cosas nuevas aisladas, no tocamos Aurora ni FBE Sport)

---

## Pre-requisitos

Antes de arrancar este runbook, confirmar:

```
[ ] HITO 00 cerrado (24/05/2026) ✓ ya hecho
[ ] Plan Maestro v2 leído (sección "Reglas duras inviolables")
[ ] Sesión SSH al VPS Hostinger disponible
[ ] Francisco tiene 30-45 min sin interrupciones
[ ] Aurora está en estado VERDE (5 dominios HTTP 200)
[ ] Ventana de baja actividad (idealmente noche o madrugada Ecuador)
```

Si CUALQUIER pre-requisito falla, posponer HITO 01.

---

## Objetivo del HITO 01

Dejar la infraestructura base del sitio web lista en el VPS:

```
1. Carpeta /opt/sitio-bg/ creada con estructura mínima
2. Red Docker sitio_bg_net (172.22.10.0/24) creada y aislada
3. Archivo CLAUDE.md operativo en /opt/sitio-bg/ (para futuras sesiones de Claude Code en VPS)
4. .env vacío con permisos restrictivos
5. Gate 0 sigue VERDE después de los cambios
```

**Lo que NO se hace en este HITO (queda para Fase 1):**

```
- NO se crea el container sitio-bg-web todavía
- NO se modifica el Caddyfile de Aurora
- NO se tocan dominios
- NO se hace deploy de código
```

---

## Diagrama del estado final

```
VPS Hostinger 212.85.14.172
│
├── /opt/stack/                    PROYECTO AURORA (NO TOCAR)
├── /opt/fbesport/                 PROYECTO FBE SPORT (NO TOCAR)
│
└── /opt/sitio-bg/                 NUEVO (este HITO)
    ├── CLAUDE.md                  ← reglas operativas para Claude Code
    ├── .env                       ← variables sensibles (chmod 600)
    ├── compose/                   ← (vacío, se llena en Fase 1)
    ├── web/                       ← (vacío)
    ├── nginx/                     ← (vacío)
    ├── logs/                      ← (vacío)
    └── backups/
        ├── scripts/               ← (vacío)
        └── daily/                 ← (vacío)

Docker networks:
├── stack_net    172.20.10.0/24   (Aurora)
├── fbe_net      172.21.10.0/24   (FBE Sport)
└── sitio_bg_net 172.22.10.0/24   ← NUEVA (este HITO)
```

---

## Modalidad de ejecución

```
┌─────────────────────────────────────────────────────────────┐
│ Vos (Francisco): SSH al VPS desde pwsh 7 en la laptop.      │
│ Ejecutás cada bloque de comandos uno por uno.               │
│ Después de cada paso, pegás la salida acá al chat.          │
│ Yo (Claude del chat) audito antes de dar luz verde al       │
│ siguiente paso.                                             │
└─────────────────────────────────────────────────────────────┘

NO se usa Claude Code en el VPS.
NO se ejecuta el runbook entero de golpe.
SÍ se hace paso a paso con validación humana.
```

---

## PASO 0 — Conectarse al VPS

### Comandos

En tu laptop, abrí **pwsh 7** (NO ISE):

```powershell
ssh hostinger
# o ssh <user>@212.85.14.172 -p 58291 según tu config
```

Una vez dentro:

```bash
# Verificar que estás en el VPS correcto
hostname
whoami
pwd
```

### Salida esperada

```
hostname: <el nombre del VPS Hostinger>
whoami:   <tu usuario, ej. panch o root>
pwd:      /home/<usuario>
```

### Auditoría externa

Pegá la salida al chat. Yo confirmo que estás en el VPS correcto antes de continuar.

---

## PASO 1 — Gate 0 (validación PRE)

Antes de tocar nada, confirmar que Aurora está sana. Este es el chequeo más importante del runbook.

### Comandos

```bash
# 1.1 — Validar HEAD del repo Aurora
cd /opt/stack && git log --oneline -1
# Esperado: 4eee736 (o un commit posterior estable)

# 1.2 — Containers de Aurora Up
sudo docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "caddy|n8n|postgres|redis|chatwoot|beszel"
# Esperado: 9 containers de Aurora todos "Up"
# (caddy, n8n, n8n-worker, postgres, redis, chatwoot-rails, chatwoot-sidekiq, beszel, beszel-agent)

# 1.3 — Caddy SOLO en stack_net (172.20.10.10)
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado: stack_net=172.20.10.10
# Si aparece OTRA red conectada al caddy: ABORTAR este HITO

# 1.4 — Los 5 dominios productivos en HTTP 200
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
# Esperado: TODOS en 200

# 1.5 — Backup del día existe
ls -lh /opt/stack/backups/daily/ | grep "$(date +%Y%m%d)" | grep -E "postgres_|chatwoot_|rag_"
# Esperado: 3 archivos con la fecha de hoy

# 1.6 — Espacio disponible >50GB
df -h / | tail -1
# Esperado: columna Use% < 70%
```

### Si CUALQUIER chequeo falla

**Abortar HITO 01.** Pegar la salida al chat. Diagnosticamos antes de seguir.

### Si todo está VERDE

Pegá la salida al chat. Confirmo y pasamos al PASO 2.

---

## PASO 2 — Crear estructura `/opt/sitio-bg/`

### Pre-check

Verificar que la carpeta NO existe todavía:

```bash
ls -la /opt/sitio-bg 2>&1 | head -3
# Esperado: "No such file or directory"
```

Si la carpeta YA existe, ABORTAR y reportar al chat.

### Comandos

```bash
# 2.1 — Crear carpeta raíz con sudo (requiere /opt/)
sudo mkdir -p /opt/sitio-bg

# 2.2 — Asignar ownership a tu usuario (NO root)
# Reemplazar 'panch' por tu usuario real si es distinto
sudo chown -R $USER:$USER /opt/sitio-bg
chmod 755 /opt/sitio-bg

# 2.3 — Crear subcarpetas
mkdir -p /opt/sitio-bg/compose
mkdir -p /opt/sitio-bg/web
mkdir -p /opt/sitio-bg/nginx
mkdir -p /opt/sitio-bg/logs
mkdir -p /opt/sitio-bg/backups/scripts
mkdir -p /opt/sitio-bg/backups/daily

# 2.4 — Permisos de logs (writable por el container futuro)
chmod 775 /opt/sitio-bg/logs
```

### Post-check

```bash
# Verificar estructura creada
tree /opt/sitio-bg/ 2>/dev/null || find /opt/sitio-bg -type d | sort
# Esperado:
# /opt/sitio-bg
# /opt/sitio-bg/backups
# /opt/sitio-bg/backups/daily
# /opt/sitio-bg/backups/scripts
# /opt/sitio-bg/compose
# /opt/sitio-bg/logs
# /opt/sitio-bg/nginx
# /opt/sitio-bg/web

# Verificar ownership
ls -la /opt/sitio-bg/
# Esperado: todas las carpetas con tu usuario como owner, NO root
```

Pegá la salida al chat. Yo valido antes de continuar.

---

## PASO 3 — Crear red Docker `sitio_bg_net`

### Pre-check

Verificar que la red NO existe:

```bash
sudo docker network ls | grep sitio_bg
# Esperado: salida VACÍA
```

Verificar que la subnet `172.22.10.0/24` NO está en uso:

```bash
sudo docker network ls --format '{{.Name}}' | xargs -I {} sudo docker network inspect {} --format '{{.Name}}: {{range .IPAM.Config}}{{.Subnet}}{{end}}'
# Esperado: ninguna red usando 172.22.10.0/24
# Aurora usa 172.20.10.0/24 (stack_net)
# FBE Sport usa 172.21.10.0/24 (fbe_net)
# Si CUALQUIERA usa 172.22.10.0/24: ABORTAR
```

### Comandos

```bash
# 3.1 — Crear la red con subnet específica
sudo docker network create \
  --driver bridge \
  --subnet 172.22.10.0/24 \
  --gateway 172.22.10.1 \
  --label proyecto=sitio-bg \
  --label propietario=barreraglobal \
  sitio_bg_net
```

### Post-check

```bash
# 3.2 — Verificar que la red existe
sudo docker network ls | grep sitio_bg_net
# Esperado: sitio_bg_net    bridge    local

# 3.3 — Inspeccionar la red creada
sudo docker network inspect sitio_bg_net --format '
Name:    {{.Name}}
Driver:  {{.Driver}}
Scope:   {{.Scope}}
Subnet:  {{range .IPAM.Config}}{{.Subnet}}{{end}}
Gateway: {{range .IPAM.Config}}{{.Gateway}}{{end}}
Labels:  {{.Labels}}
'
# Esperado:
# Name:    sitio_bg_net
# Driver:  bridge
# Scope:   local
# Subnet:  172.22.10.0/24
# Gateway: 172.22.10.1
# Labels:  map[propietario:barreraglobal proyecto:sitio-bg]

# 3.4 — Confirmar que las redes de Aurora y FBE Sport NO se vieron afectadas
sudo docker network ls
# Esperado: stack_net, fbe_net, sitio_bg_net, todas presentes
```

Pegá la salida al chat. Validación crítica antes del PASO 4.

---

## PASO 4 — Crear `CLAUDE.md` operativo en VPS

Este archivo es el equivalente al `CLAUDE.md` de la laptop, pero adaptado al contexto del VPS. Sirve para futuras sesiones de Claude Code que se conecten al VPS (si alguna vez se hace).

### Comandos

```bash
# 4.1 — Crear el archivo con heredoc (cuidado con expansión de variables)
cat > /opt/sitio-bg/CLAUDE.md << 'CLAUDE_EOF'
# CLAUDE.md — Sitio Barrera Global (VPS)

> Reglas operativas para Claude Code en `/opt/sitio-bg/` (VPS Hostinger).

**Proyecto:** Sitio Barrera Global
**Slug:** sitio-bg
**Documento maestro:** ver repo `github.com/fbarrerainversiones/sitio-bg-infra/docs/PLAN-MAESTRO-v2.md`

## Reglas duras (NO NEGOCIAR)

1. **El proyecto vive SOLO en `/opt/sitio-bg/`.**
   - NO tocar `/opt/stack/` (Aurora)
   - NO tocar `/opt/fbesport/` (FBE Sport)
   - NO leer `.env`, certs ni llaves de los otros proyectos

2. **Red Docker propia: `sitio_bg_net` (subnet 172.22.10.0/24).**
   - NO conectar containers a `stack_net` (172.20.10.0/24)
   - NO conectar containers a `fbe_net` (172.21.10.0/24)

3. **Prefijo de containers: `sitio-bg-*` (ejemplo: `sitio-bg-web`).**
   - NUNCA renombrar, detener ni reiniciar containers de otros proyectos
   - Lista de containers protegidos: caddy, n8n, n8n-worker, postgres, redis,
     chatwoot-rails, chatwoot-sidekiq, beszel, beszel-agent, fbesport-*

4. **Puertos del host (NO abrir nuevos):**
   - 80/tcp ocupado por Caddy Aurora
   - 443/tcp ocupado por Caddy Aurora
   - 8443/tcp ocupado por Caddy FBE Sport
   - 58291/tcp SSH

5. **Caddyfile compartido (`/opt/stack/caddy/Caddyfile`):**
   - Cualquier modificación sigue el flujo de 7 pasos del Plan Maestro v2.
   - Backup timestamped → validar HTTP 200 PRE → editar con tee/nano → validar
     sintaxis → reload sin downtime → validar HTTP 200 POST → restaurar si falla.

6. **SIN Postgres propio.**
   - El sitio NO tiene base de datos.
   - Comunicación con Aurora vía webhook público:
     `POST https://n8n.barreraglobal.com/webhook/lead-form`
   - NO leer las bases `n8n`, `chatwoot_production`, `barreraglobal_rag` de Aurora.

7. **Validar HTTP 200 de los 5 dominios Aurora antes y después de cualquier cambio.**

```bash
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
```

8. **Backups propios. NO MODIFICAR `/opt/stack/backups/scripts/backup.sh` (es de Aurora).**

9. **No tocar UFW sin coordinación explícita con Francisco.**

10. **Bitácora obligatoria.** Al cierre de cada sesión, actualizar la sección 10
    del `PLAN-MAESTRO-v2.md` en el repo `sitio-bg-infra`.

## Estructura del proyecto en este VPS

```
/opt/sitio-bg/
├── CLAUDE.md          ← este archivo
├── .env               ← variables sensibles (chmod 600)
├── compose/           ← docker-compose.yml (Fase 1)
├── web/               ← código Astro build (Fase 1)
├── nginx/             ← nginx.conf (Fase 1)
├── logs/              ← logs operativos
└── backups/
    ├── scripts/       ← backup-sitio.sh (Fase 1)
    └── daily/         ← snapshots
```

## Lo que existe HOY (post-HITO 01)

- Carpeta `/opt/sitio-bg/` con subcarpetas vacías
- Red Docker `sitio_bg_net` creada
- Este archivo `CLAUDE.md`
- `.env` vacío con chmod 600

**Próximo paso operativo:** Fase 1 (deploy del container `sitio-bg-web`).

## Versión

Última actualización: 25 de mayo de 2026 (HITO 01).
CLAUDE_EOF

# 4.2 — Verificar el archivo creado
ls -la /opt/sitio-bg/CLAUDE.md
cat /opt/sitio-bg/CLAUDE.md | head -10
```

### Post-check

```bash
# 4.3 — Validar que el archivo es UTF-8 sin BOM
file /opt/sitio-bg/CLAUDE.md
# Esperado: "UTF-8 Unicode text" (NO debe decir "with BOM")

head -c 3 /opt/sitio-bg/CLAUDE.md | od -c | head -1
# Esperado: NO empezar con \357 \273 \277 (eso sería BOM)
# Si los primeros 3 bytes son "# C" entonces está OK

# 4.4 — Tamaño esperado
wc -l /opt/sitio-bg/CLAUDE.md
# Esperado: ~90-100 líneas
```

Pegá salida al chat.

---

## PASO 5 — Crear `.env` vacío con permisos restrictivos

### Comandos

```bash
# 5.1 — Crear .env vacío con header
cat > /opt/sitio-bg/.env << 'ENV_EOF'
# /opt/sitio-bg/.env
# Variables sensibles del sitio web Barrera Global.
# NUNCA committear este archivo al repo Git.
# chmod 600 obligatorio.
#
# Última actualización: HITO 01 (25/05/2026)
# Estado: vacío, se llena en Fase 1 cuando se necesiten secrets.

# === Webhook Aurora (Fase 3) ===
# SITIO_AURORA_WEBHOOK_TOKEN=

# === Backblaze B2 (Fase 1) ===
# B2_KEY_ID=
# B2_APPLICATION_KEY=
# B2_BUCKET_NAME=sitio-bg-backups

# === Email transaccional (Fase 1) ===
# SMTP_HOST=
# SMTP_USER=
# SMTP_PASS=

ENV_EOF

# 5.2 — Permisos restrictivos (solo el owner puede leer/escribir)
chmod 600 /opt/sitio-bg/.env
```

### Post-check

```bash
# 5.3 — Verificar permisos
ls -la /opt/sitio-bg/.env
# Esperado: -rw------- (600), owner = tu usuario
```

Pegá salida al chat.

---

## PASO 6 — Gate 0 POST (validación final)

Repetir Gate 0 para confirmar que NADA de lo que hicimos afectó a Aurora.

### Comandos

```bash
# Mismo bloque que el PASO 1
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done

# Verificar que los containers de Aurora siguen Up
sudo docker ps --format "table {{.Names}}\t{{.Status}}" | grep -E "caddy|n8n|postgres|redis|chatwoot|beszel"

# Verificar que la red sitio_bg_net no se conectó accidentalmente al caddy
sudo docker inspect caddy --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'
# Esperado: stack_net=172.20.10.10 (NO debe aparecer sitio_bg_net)
```

### Salida esperada

```
barreraglobal.com:         200
www.barreraglobal.com:     200
n8n.barreraglobal.com:     200
chat.barreraglobal.com:    200
beszel.barreraglobal.com:  200

caddy        Up X hours
n8n          Up X hours
n8n-worker   Up X hours
postgres     Up X hours
redis        Up X hours
chatwoot-rails    Up X hours
chatwoot-sidekiq  Up X hours
beszel       Up X hours
beszel-agent Up X hours

stack_net=172.20.10.10
```

Si CUALQUIER cosa cambió respecto al Gate 0 PRE: **ROLLBACK INMEDIATO** (ver sección de Rollback abajo).

Si todo VERDE: el HITO 01 está cerrado técnicamente.

---

## PASO 7 — Actualizar la bitácora del Plan Maestro v2

### En tu laptop (NO en el VPS)

Salir del SSH y volver a tu laptop:

```bash
exit  # cerrar la sesión SSH
```

En pwsh 7:

```powershell
cd C:\Users\panch\projects\sitio-bg-infra
code docs/PLAN-MAESTRO-v2.md
```

En VS Code, ir a la sección **10. Bitácora viva** y AGREGAR ARRIBA (encima de la Sesión 2 del 25/05/2026) un nuevo bloque:

```markdown
### Sesión 3 — <FECHA> (HITO 01 ejecutado)

**Quién:** Francisco (operación) + Claude (auditoría chat)

**Qué se hizo:**

- Ejecutado runbook `docs/prompts/HITO-01-runbook-vps.md` completo.
- Gate 0 PRE: VERDE (5 dominios HTTP 200, 9 containers Aurora Up).
- Creada estructura `/opt/sitio-bg/` con subcarpetas: compose/, web/, nginx/, logs/, backups/scripts/, backups/daily/.
- Ownership asignado a usuario `panch`.
- Creada red Docker `sitio_bg_net` con subnet 172.22.10.0/24, gateway 172.22.10.1, labels (proyecto=sitio-bg, propietario=barreraglobal).
- Creado `/opt/sitio-bg/CLAUDE.md` con reglas operativas para Claude Code en VPS (~95 líneas, UTF-8 sin BOM).
- Creado `/opt/sitio-bg/.env` vacío con chmod 600.
- Gate 0 POST: VERDE (sin afectación a Aurora).

**Qué quedó pendiente:**

- Crear bucket Backblaze B2 `sitio-bg-backups` (puede ser al inicio de Fase 1).
- Arrancar Fase 1 (MVP diseño + stack).

**Próximo paso concreto:**

- Decidir arranque de Fase 1: scaffolding del proyecto Astro 5.x en `/web/` del repo local.
```

Reemplazar `<FECHA>` por la fecha real del día que se ejecute. Después:

```powershell
cd C:\Users\panch\projects\sitio-bg-infra
git add docs/PLAN-MAESTRO-v2.md
git commit -m "actualiza bitácora con cierre del HITO 01"
git push origin main
```

---

## Rollback (si algo sale mal)

Si en cualquier paso algo falla, **ABORTAR** y ejecutar este rollback. El HITO 01 solo crea cosas nuevas aisladas, así que el rollback es seguro.

```bash
# Si la red Docker se creó pero algo más falló:
sudo docker network rm sitio_bg_net

# Si la carpeta /opt/sitio-bg/ se creó:
sudo rm -rf /opt/sitio-bg

# Volver a estado anterior. Validar Gate 0 inmediatamente.
```

**Casos en que NO hacer rollback automático:**

- Si Gate 0 POST falla y Aurora bajó: detener TODO y consultar a Francisco/Claude antes de ejecutar más comandos. La causa raíz hay que entender primero.
- Si los 5 dominios siguen en HTTP 200 pero algún container de Aurora se reinició solo: no es por el HITO 01 (este HITO no toca containers existentes). Diagnosticar aparte.

---

## Checklist de cierre del HITO 01

```
[ ] PASO 0 — Conectado al VPS
[ ] PASO 1 — Gate 0 PRE: VERDE
[ ] PASO 2 — /opt/sitio-bg/ creada con subcarpetas
[ ] PASO 3 — Red sitio_bg_net creada (172.22.10.0/24)
[ ] PASO 4 — CLAUDE.md operativo en VPS validado
[ ] PASO 5 — .env vacío con chmod 600
[ ] PASO 6 — Gate 0 POST: VERDE (sin cambios en Aurora)
[ ] PASO 7 — Bitácora actualizada en PLAN-MAESTRO-v2.md + push a GitHub
```

Si los 8 ítems están marcados, **HITO 01 cerrado oficialmente**.

---

## Lo que sigue después del HITO 01

Próximo entregable: **HITO 02 / Fase 1 — MVP del sitio**.

- Scaffolding Astro 5.x en `/web/` del repo local.
- Implementar sistema de diseño V17 con tokens del Brand Book.
- Construir 4 páginas base: `/`, `/sobre-mi`, `/contacto`, `/privacidad`.
- Dockerfile multi-stage.
- Modificar Caddyfile compartido (con flujo de 7 pasos).
- Build + deploy del primer container `sitio-bg-web`.

Eso es otro runbook aparte (HITO-02-fase1-mvp.md) que se generará cuando se cierre el HITO 01.

---

**Fin del runbook HITO 01.**

**Versión:** 1.0
**Estado:** listo para ejecutar cuando Francisco decida arrancar.
**Tiempo esperado de ejecución:** 25-35 minutos.
