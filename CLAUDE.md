# CLAUDE.md — Reglas locales del proyecto Sitio Barrera Global

> **Este archivo es leido automaticamente por Claude Code al iniciar cada sesion.**
> Tambien sirve como referencia rapida para cualquier sesion de chat (Claude.ai).
> NO editar sin actualizar la version y la fecha al final.

**Version:** 2.5
**Ultima actualizacion:** lunes 10 de agosto de 2026 (Sesion 14: **DIA 1 DEL SITIO PUBLICO**)
**Cubre el estado del proyecto hasta:** Sesion 14 cerrada (10/08). **EL SITIO ES PUBLICO Y YA NO TIENE NINGUN GATE DE LANZAMIENTO ABIERTO.** Cayo el ultimo: **P-51 probado** (Cloudflare 1 recibido / 1 entregado, el correo llego al Gmail de Francisco a las 11:53, en Spam, se aplico «No es spam») y cerro como **R-19**. Tambien cerraron **P-55** como **R-20** (fondo oscuro del `logo.svg`, commit `fd8316b`) y **P-56** como **R-21** (mision/vision/valores aprobados; Manual de Marca **v3.1 FINAL** entregado al manager de marketing). **P-54 F1 esta CONSTRUIDA en `main` pero NO desplegada**: el 10/08 rigio veda de infraestructura compartida por la ventana de promocion a produccion de Aurora.

---

## 🚨 LECTURA OBLIGATORIA ANTES DE ACTUAR

Antes de proponer cualquier accion tecnica, Claude Code debe leer estos archivos en este orden:

1. **`docs/ERRORES-Y-APRENDIZAJES.md`** — 28 errores (E-01 a E-28) + 11 near-miss (NM-01 a NM-11) + 50 reglas operativas (R-01 a R-50). NO repetir errores ya documentados.
2. **`docs/PLAN-MAESTRO-v2.md`** — documento maestro con decisiones tecnicas firmes (D-01 a D-29), bitacora de sesiones (la ultima entrada es **Sesion 14**), hallazgos legales. Ojo con la numeracion D-XX: la seccion 10 lista D-18 a D-24 y D-29; D-25 a D-28 viven en la bitacora (Sesiones 6 y 8).
3. **`docs/PENDIENTES.md`** — **56 items (P-01 a P-56) + 21 resueltos historicos (R-01 a R-21)**. Numeracion verificada contra el archivo el 10/08/2026.
4. **`docs/ESTADO-GENERAL-PROYECTO.md`** — estado consolidado del proyecto al cierre de Sesion 5.
5. **`docs/DIAGRAMA-FLUJO-PROYECTO.md`** — visualizacion completa de fases y dependencias.
6. **`docs/REPORTE-SESION-10.md`** — bitacora de la jornada estructural (Bloques A-B) + decisiones D1 a D6 + QA pre-merge.

Si una propuesta tuya contradice algo de estos documentos, PARAR y discutirlo con Francisco con cita exacta del documento contradicho.

---

## Identidad

- **Proyecto:** Sitio web publico de Barrera Global (asesoria de seguros, Ecuador).
- **Dominio:** barreraglobal.com y www.barreraglobal.com — **PUBLICOS desde el 09/08/2026**, sirviendo el sitio real via `reverse_proxy sitio-bg-web:8080`. Staging sigue vivo y protegido en staging.barreraglobal.com (basicauth + noindex).
- **Marca:** Barrera Global (marca personal de Francisco Javier Barrera Bonilla).
- **Vinculacion legal:** Francisco opera como APS bajo paraguas de Insurance Trust (Cred. SCVS Nro 572619).
- **Slug interno:** sitio-bg
- **Carpeta local:** `C:\Users\panch\projects\sitio-bg-infra\`
- **Carpeta VPS:** `/opt/sitio-bg/` (creada en HITO 01)
- **Repo GitHub:** `fbarrerainversiones/sitio-bg-infra` (publico, D-21)
- **Fase actual:** **SITIO PUBLICO Y EN LINEA** desde el 09/08/2026 con 12 paginas y **simbolo propio**. El switch se ejecuto (Sesion 13) y el dia 1 (Sesion 14) cerro los tres items que quedaban del lanzamiento. Staging se mantiene con candado como ambiente de revision. Lo que sigue ya no es lanzamiento sino producto: **desplegar lo que espera en `main`** (P-54 F1 + P-55), la papeleria de **P-52** fase 2, y la deuda tecnica ya catalogada.
- **HAY TRABAJO CONSTRUIDO SIN DESPLEGAR.** `main` tiene P-54 F1 (la seccion «El portico que se construye») y P-55 (fondo oscuro del `logo.svg`) **verificados en build pero NO en produccion**. Los dos viven en archivos que se hornean en la imagen Docker, asi que **un `git pull` en el VPS no alcanza: exigen rebuild** (R-44). No asumir que el sitio publico ya los muestra.

---

## Que NO es este proyecto

- **No es Aurora** (agente WhatsApp con RAG) — proyecto separado en `/opt/stack/` del VPS.
- **No es FBE Sport** (sitio WordPress) — proyecto separado en `/opt/fbesport/` del VPS.
- **No usa WordPress, WooCommerce, ni CMS grafico** en ninguna fase.
- **No procesa pagos.** El cliente paga directo al carrier.
- **No publica primas especificas** (viola Art. 11.6 SCVS).
- **No usa "el mejor precio" ni "hasta X% de descuento"** (viola Art. 12.12 SCVS).

---

## Stack tecnico CONFIRMADO

- **Frontend:** Astro 6.3.8 + Tailwind v4.3.0 + React 19.2.6 (decision D-18, NO Astro 5)
- **Tipografias:** Cormorant Garamond + Outfit + JetBrains Mono Variable (self-hosted via Fontsource)
- **Build:** Docker multi-stage (Astro build a nginx alpine) — pendiente Fase 2
- **Hosting:** VPS Hostinger 212.85.14.172 (compartido con Aurora y FBE Sport)
- **Red Docker:** `sitio_bg_net` (172.22.10.0/24) — con `sitio-bg-web` (172.22.10.10) healthy. El `caddy` compartido esta en DOS redes: `stack_net` (default gateway) + `sitio_bg_net` (con `--gw-priority=-100`, ver R-41/E-24)
- **Reverse proxy:** Caddy compartido (NO se toca sin flujo de 7 pasos del Plan Maestro §2)
- **DNS:** Cloudflare (barreraglobal.com proxied; staging.barreraglobal.com creado para el deploy)
- **SSL:** Let's Encrypt automatico via Caddy

---

## Identidad de marca (Brand Book V17)

- **Paleta:** `#08080d` (base) + `#c9a84c` (gold) + `#fafaf7` (off-white)
- **Tagline:** "Patrimonio que crece. Capital protegido."
- **Descriptor:** "Arquitectura Financiera"
- **Hook redes:** "Disena arquitectura financiera para tu futuro."
- **Logo:** tipografico en Cormorant Garamond (D-23, placeholder hasta diseno vectorial)
- **Foto Francisco:** IA aprobada provisional (D-24)

---

## Productos (estructura definitiva)

Home muestra 3 grupos: Vida, Salud, Inversion.

Paginas de producto YA CREADAS (en `main` desde el merge del 28/07):
1. `/seguros/vida-termino`
2. `/seguros/vida-indexada`
3. `/seguros/salud-nacional`
4. `/seguros/salud-internacional`
5. `/inversion`

Las 5 usan `ProductLayout.astro`. **Los marcadores `[PENDIENTE: ...]` YA SE
RETIRARON** el 03/08/2026 (commit `b485140`): ese gate pre-PUBLICO esta
cerrado. Verificado el 05/08 sobre fuente y build: **cero** apariciones.
El componente `web/src/components/Pendiente.astro` sigue en el repo pero ya
**no lo usa ninguna pagina**; si vuelve a usarse, retirar los marcadores
vuelve a ser gate antes de publicar.

- `/seguros/auto` fue **retirada** (decision **D1**, 25/07, commit `96f629c`).
  La decision de Sesion 2 de "6 productos" queda SUPERADA. Nunca estuvo
  enlazada; solo era accesible por URL directa.
- `/aprende` (blog) sigue **pendiente**, sin pagina creada.

---

## REGLAS DURAS INVIOLABLES (resumen de las 50 reglas)

### Herramientas
- **R-01:** SIEMPRE pwsh 7 en Windows. NUNCA Windows PowerShell 5.1 ni ISE.
- **R-02:** Verificar `$PSVersionTable.PSVersion` al inicio de cada sesion.
- **R-03:** Claude Code: Shift+Tab al abrir. Verificar "accept edits off" visualmente.

### SSH al VPS
- **R-05:** Copiar SOLO el bloque entre triple-backtick. UN bloque a la vez.
- **R-06:** NUNCA copiar texto del chat anterior junto con el bloque actual.
- **R-08:** Validar `whoami && hostname` despues de SSH al VPS antes de operar.

### Git
- **R-09:** SIEMPRE `git pull origin main` al inicio de cada sesion Claude Code.
- **R-10:** `git status` debe estar "working tree clean" antes de empezar.
- **R-11:** Si subiste algo via GitHub web, el pull es OBLIGATORIO.
- **R-13:** `--force` solo con `--force-with-lease` y solo confirmado con Francisco.
- **R-39:** Antes de `git add .`, revisar `git status --short` y excluir manualmente archivos `.bak` o backups timestamped.

### Documentacion y archivos
- **R-14:** Una informacion, un lugar. La bitacora vive en `PLAN-MAESTRO-v2.md` seccion 12.
- **R-15:** NO subir snapshots de bitacora al knowledge como archivos separados.
- **R-17:** Al cierre de sesion, revisar knowledge: sin duplicados, sin obsoletos.
- **R-18:** Archivos `.md` largos (mas de 300 lineas): VS Code, NO here-strings en terminal.
- **R-19:** Verificar UTF-8 sin BOM con `Get-Content -AsByteStream -TotalCount 3`.

### Comunicacion
- **R-22:** Verificar que el contenido a modificar realmente exista (no asumir).
- **R-23:** Aurora viva = proyecto avanza. Aurora rota = nada importa mas.

### Estimaciones
- **R-24:** Reboot Hostinger compartido: estimar 5-10 min, no 2-3.
- **R-25:** HITO operativo: estimar 25-35 min + 10-15 min de auditoria chat.

### Regulatorias
- **R-27:** Insurance Trust = broker. Investors Trust = carrier. NO confundir.
- **R-28:** Validar siempre estatus regulatorio antes de planificar producto financiero.
- **R-29:** SCVS Art. 11.6 + 12.12: NO publicar primas ni "el mejor precio".
- **R-30:** LOPDP Art. 4: consentimiento separado para datos de salud.

### Docker en VPS compartido (CRITICO)
- **R-31:** `docker network prune` PROHIBIDO sin revision explicita.
- **R-32:** `docker system prune` PROHIBIDO sin revision explicita.
- **R-33:** `docker container prune` PROHIBIDO sin revision explicita.
- **R-34:** Nunca renombrar, detener ni reiniciar containers de Aurora o FBE Sport.
- **R-35:** Cualquier reboot del VPS se coordina con Aurora y horario de bajo trafico.
- **R-41:** `docker network connect` sobre un container con trafico productivo (p.ej. el `caddy` compartido) SIEMPRE con `--gw-priority` NEGATIVO (`--gw-priority=-100`) + verificar `ip route` justo despues (la linea `default via ...` NO debe cambiar), antes incluso del Gate 0. Origen: E-24 (flip del default gateway, degradacion parcial ~5 min, 19/07).

### Secretos
- **R-36:** `.env`, `*.env`, `secrets/`, `*.key`, `*.pem` siempre en `.gitignore` desde dia 0.
- **R-37:** Secretos en `/opt/sitio-bg/.env` con `chmod 600`. NUNCA en el repo.

### Compliance (Sesion 5)
- **R-38:** Cruzar analisis legal con fuentes independientes antes de cerrar compliance. Cualquier afirmacion regulatoria importante (atribucion de credenciales, base legal LOPDP, decisiones SCVS) debe validarse con al menos 2 fuentes: documentacion oficial del organismo + analisis legal IA o humano externo.

### Metodo de trabajo y frontend (Sesion 10)
- **R-42:** Los prompts a Claude Code en este proyecto se escriben en **CoT + XML** (`<rol>`, `<contexto>`, `<objetivo>`, `<reglas_duras>`, `<razonamiento_inicial>`, `<pasos>` numerados con su mensaje de commit). El `<razonamiento_inicial>` es OBLIGATORIO: diagnostico con numeros de linea reales reportado a Francisco ANTES de editar. Un prompt sin diagnostico previo produce parches a sintomas.
- **R-43:** **Deuda de capas CSS (hallazgo D6).** Las reglas base de enlaces de `web/src/styles/global.css` viven FUERA de toda `@layer`, asi que ganan a cualquier utilidad `text-*` de Tailwind v4 sobre un `<a>`, sin importar la especificidad. Mitigacion vigente y obligatoria: en botones con fondo dorado el color del texto va **inline** (`style="color:#08080d"`), nunca con utilidad Tailwind; para `:hover` se usa regla propia sin capa (patron `.btn-outline`). El fix de raiz esta DIFERIDO a sesion post-lanzamiento (P-47): **NO tocar las capas** hasta entonces.

### Operacion y deploy (Sesion 12) — las tres escritas con sangre

- **R-44:** todo nginx detras de un reverse proxy emite redirecciones **relativas** (`absolute_redirect off;` + `port_in_redirect off;`). Con los defaults, el 301 de barra final filtra el puerto interno 8080 al navegador y la navegacion muere con `ERR_CONNECTION_RESET` (E-25). **Corolario:** `infra/nginx.conf` y los hashes CSP viven DENTRO de la imagen Docker; ningun cambio suyo llega al VPS con un `git pull`. **Exigen rebuild.**
- **R-45:** **las salidas de terminal jamas vuelven a una terminal.** A la terminal entran solo los bloques del auditor, uno a la vez; lo que la terminal devuelve va UNICAMENTE al archivo `.txt` de reporte. Pegar una salida de vuelta al shell re-ejecuta comandos con las variables ya perdidas y puede escribir basura en archivos criticos **sin arrojar error** (E-26: asi se corrompio la linea de basicauth del Caddyfile).
- **R-46:** **tests de credenciales por terminal RETIRADOS.** El juez oficial de una credencial es el **navegador**. Los `curl` dieron falsos negativos toda la Sesion 12 mientras el navegador entraba sin problema.
- **R-47:** **Claude Code pushea PRIMERO, el VPS jala DESPUES.** Nunca al reves. Senal de que se violo: `git pull` responde `Already up to date` y el build sale todo `CACHED` — el VPS esta reconstruyendo la version vieja. Guardian: tras el pull y ANTES del rebuild, `git log` y confirmar por hash que el commit esperado llego.

### Operacion en el VPS (Sesion 13) — las tres del switch

- **R-48:** **`sed -i` y `mv` PROHIBIDOS sobre archivos bind-monteados.** Docker resuelve un bind-mount de ARCHIVO por **inodo**; `sed -i` escribe un temporal y lo renombra encima, asi que el host queda con un inodo nuevo y el container **sigue leyendo el viejo**. Todo dentro del container —`validate`, `reload`— opera sobre el archivo viejo **reportando exito**. Editar solo con metodos que preserven el inodo (`tee`, o `sed` a temporal + `cp` encima). Ante duda, comparar `ls -i` del host contra `docker exec <c> ls -i`: si difieren, el container lee un fantasma y hace falta `docker restart`. Amplia la regla de mayo "nunca `mv` sobre el Caddyfile" (Plan Maestro §2, Regla 5): **`sed -i` es un `mv` disfrazado** (E-27).
- **R-49:** **los bloques condicionales de un runbook se ejecutan UNICAMENTE si su condicion se cumple.** Antes de pegar un bloque marcado "solo si falla", el operador **confirma la condicion en voz alta**. Un runbook no se pega de corrido: la mitad de sus bloques existen para el caso que no ocurrio, y los de rollback tocan el Caddyfile compartido (NM-11).
- **R-50:** **`caddy validate` sobre un archivo que no se llame `Caddyfile` va SIEMPRE con `--adapter caddyfile`** (Caddy infiere el adaptador por el nombre y si no, asume JSON). Corolario, que es la mitad importante: **una validacion que falla DETIENE el runbook**; nunca se pasa al restart "porque el error parecia del comando" (E-28).

**Chequeo barato que vale por diez:** despues de tocar el proxy, pedir **una URL inventada**. Si `/no-existe` devuelve **200**, no estas mirando el sitio real. Ese 200 fue lo que desenmascaro el switch v1.

**Lista completa de las 50 reglas:** ver `docs/ERRORES-Y-APRENDIZAJES.md` seccion "Reglas operativas consolidadas".

### PROTOCOLO DE VEDA (practica establecida en Sesion 14, 10/08/2026)

> **Todavia NO es una regla numerada.** Las reglas siguen siendo **50** (R-01 a
> R-50) en `docs/ERRORES-Y-APRENDIZAJES.md`. Esto es practica confirmada por uso,
> y se numera el dia que se formalice ahi. No inventar un "R-51" mientras tanto.

El VPS es compartido con **Aurora** y **FBE Sport**. Cuando cualquiera de esos
proyectos abre una **ventana de promocion a produccion**, avisa y queda declarada
**VEDA TOTAL de infraestructura compartida**: ni reinicios ni ediciones de Caddy,
red Docker, Postgres, Redis ni del VPS, hasta que el dueno de la ventana declare
el cierre. Como funciono en Sesion 14, que es como debe volver a funcionar:

1. **El aviso llega y se acusa recibo con alcance explicito.** No basta con
   entenderlo: se dice en voz alta que trabajo de esta sesion cae dentro y cual
   fuera de la veda.
2. **El trabajo local NO se detiene.** Componente, CSS, build, commits y push a
   GitHub no tocan infraestructura compartida. Sesion 14 construyo P-54 F1 entera
   y ejecuto P-55 con la veda activa, sin rozar el VPS.
3. **El deploy se pone EN COLA, no se negocia.** Y se dice desde el principio,
   no al final: todo lo que vive horneado en la imagen (`infra/nginx.conf`,
   `web/src/**`, `web/public/**`) necesita rebuild, y el rebuild es VPS.
4. **La cola se documenta donde se va a leer.** `PENDIENTES.md`, la bitacora y
   el snapshot de continuidad dicen que quedo sin desplegar y por que. Un cambio
   verificado en build y no desplegado es exactamente el tipo de cosa que a los
   tres dias alguien da por publicada.
5. **La veda la levanta Francisco, nadie mas**, y recien ahi corre el deploy.

**Reciprocidad:** este proyecto recibio de Aurora la adopcion de la leccion del
inodo (R-48) en su propio runbook. El canal funciona en los dos sentidos.

### CSP (hashes horneados en la imagen)
`infra/nginx.conf` autoriza por hash los **2 unicos `<script>` inline** del build
(toggle del menu movil + scroll-reveal). Si se toca el contenido de cualquiera de
los dos, hay que **regenerar el hash** siguiendo `infra/README-hashes.md` y
reconstruir la imagen Docker. Si el hash no cuadra, el navegador bloquea el script
y la interaccion se rompe **en silencio**.

---

## Hallazgos criticos pendientes (H-01 a H-05)

Detectados en analisis legal IA externo de Sesion 5. **Ya NO son gate de nada: el
sitio se publico el 09/08/2026.** Los que sigan abiertos son ahora exposicion viva,
no trabajo previo al lanzamiento — y eso los hace mas urgentes, no menos:

- **H-01:** ✅ **RESUELTO el 09/08/2026.** Los 7 huecos LOPDP se cerraron en la v2 (Sesion 8), la v3 los supero transcribiendo **verbatim** el dictamen del abogado (04/08, commit `65b3dd4`) y el **abogado aprobo las tres paginas legales** el 09/08 sobre las paginas renderizadas. Cerro **P-39** como **R-18**. Cabo administrativo abierto, no bloqueante: el respaldo escrito de una linea, solicitado por WhatsApp.
- **H-02:** DPD no registrado ante SPDP (bloqueado hasta SCVS personal de Francisco, P-06). ABIERTO **con el sitio ya publico**.
- **H-03:** Sitio antiguo con Meta Pixel — decision aun no tomada (P-38, 3 opciones sobre la mesa). ABIERTO.
- **H-04:** Aurora no declarada como decision automatizada (Art. 12.4 LOPDP) — cubierto por el alcance de P-35. Verificar contra el texto vigente de `/privacidad`, que ya esta publico.
- **H-05:** ✅ RESUELTO — credencial 572619 removida del sitio (E-23).

---

## Estructura de archivos relevante

```
sitio-bg-infra/
├── CLAUDE.md (este archivo)
├── .gitignore (endurecido con *.bak.*)
├── docs/
│   ├── PLAN-MAESTRO-v2.md          ← doc maestro (LEER PRIMERO)
│   ├── PENDIENTES.md                ← 53 items (P-01 a P-53) + 18 resueltos
│   ├── ERRORES-Y-APRENDIZAJES.md    ← 28 errores + 11 NM + 50 reglas
│   ├── ESTADO-GENERAL-PROYECTO.md   ← estado consolidado Sesion 5
│   ├── DIAGRAMA-FLUJO-PROYECTO.md   ← visualizacion completa
│   ├── IDENTIDAD-MARCA.md           ← Brand Book extraido
│   ├── REPORTE-SESION-10.md         ← bitacora Sesion 10-11 + D1..D6 + QA
│   ├── INVENTARIO-TILDES_2026-07-25.md ← auditoria D3 (419 correcciones)
│   ├── DEPLOY-STAGING-runbook.md    ← runbook del deploy a staging
│   ├── legal/POLITICA-PRIVACIDAD-V3-2026-08-03.md ← FUENTE de /privacidad
│   │                                  (se transcribe verbatim; su seccion
│   │                                   final «NOTAS — DELTA» es interna y
│   │                                   NUNCA se publica)
│   ├── continuidad/                 ← informes ejecutivos fechados
│   ├── hitos/HITO-00-setup-local.md ← historico setup local
│   └── prompts/HITO-01-runbook-vps.md ← historico HITO 01
├── infra/                            (paquete de deploy, horneado en la imagen)
│   ├── Dockerfile + docker-compose.yml
│   ├── nginx.conf                   ← CSP con los 2 hashes sha256
│   │                                  + absolute_redirect/port_in_redirect off
│   ├── README-hashes.md             ← como regenerar los hashes CSP
│   └── caddyfile-snippet.txt
└── web/                              (Astro 6 — 12 paginas)
    ├── package.json
    ├── astro.config.mjs
    ├── public/
    │   ├── images/francisco-barrera.jpg (foto IA D-24, 54.8 KB tras P-44)
    │   ├── og-default.png           ← vista previa al compartir (P-48/R-16)
    │   ├── logo.svg                 ← FUENTE de la geometria: los 9 trazos
    │   │                              del portico. Con fondo oscuro desde
    │   │                              P-55/R-20. Lo declara el JSON-LD.
    │   ├── favicon.svg              ← version simplificada de 6 trazos para
    │   │                              16-32 px (P-52). NO es la fuente.
    │   ├── robots.txt
    │   └── sitemap.xml              ← a mano, ver P-50
    └── src/
        ├── styles/ (tokens.css, global.css con animations + dinamismo
        │            + el dibujado por etapas de P-54 F1)
        ├── layouts/ (Layout.astro con SEO + 3 JSON-LD + el unico
        │             IntersectionObserver del sitio, ProductLayout.astro)
        ├── components/ (Logo, Portico ← simbolo de header y footer,
        │                PorticoConstruye ← seccion #metodo del home (P-54
        │                F1), Header sticky con dropdown, Footer,
        │                Pendiente ← huerfano: ya no lo usa ninguna pagina)
        └── pages/ (index, sobre-mi, contacto, privacidad, terminos,
                    cookies, inversion, 404,
                    seguros/{vida-termino, vida-indexada,
                             salud-nacional, salud-internacional})
```

> Nota: en `docs/` hay archivos `*.bak.*` en disco. **No estan en el repo**:
> los ignora `.gitignore:42` por R-39. No commitearlos nunca.

---

## Estado actual (10/08/2026 — Sesion 14: DIA 1 DEL SITIO PUBLICO)

- **EL SITIO ESTA EN LINEA Y SIN GATES.** `barreraglobal.com` y `www.barreraglobal.com` sirven las 12 paginas reales via `reverse_proxy sitio-bg-web:8080`. Al cierre de Sesion 13 se verifico: **Gate 0 5/5**, HTML del sitio real en el raiz, `/no-existe` devolviendo un **404 de verdad** y **staging respondiendo 401**. En Sesion 14 cayo el ultimo item abierto del lanzamiento.
- **LO QUE ESPERA EN `main` SIN DESPLEGAR (lo primero que hay que saber):** **P-54 F1** (seccion «El portico que se construye» del home) y **P-55** (fondo oscuro del `logo.svg`). Verificados en build, **no en produccion**. Ambos viven en archivos horneados en la imagen: **exigen rebuild, el pull no alcanza (R-44)**. Salen juntos en el mismo deploy.
- **HEAD de `main`:** los commits del cierre documental de Sesion 14, sobre `fd8316b` (P-55) y los **8** de P-54 F1 (`be196c5..69f83bd`). Base previa: `be196c5`. **Confirmar siempre por `git log`, no por este archivo.**
- **Paginas: 12** — `/`, `/sobre-mi`, `/contacto`, `/privacidad`, `/terminos`, `/cookies`, `/inversion`, `/404` y las 4 de `/seguros/`. Build verificado: **12/12** sin errores.
- **CSP:** los 2 hashes de `infra/nginx.conf` cuadran con los 2 scripts inline del build en las 12 paginas (cruce bidireccional, cero huerfanos). **Ningun hash cambio en Sesion 13 ni en Sesion 14** — y F1 se diseno justamente para eso: cero JavaScript nuevo, el dibujado por scroll sale de `:has()` mas el `IntersectionObserver` que ya existia en `Layout.astro`. Los 3 bloques JSON-LD son `application/ld+json`: no ejecutables, no requieren hash.
- **404 propia:** `error_page 404 /404.html;` en `infra/nginx.conf` (sin `=`, para conservar el status 404 y no generar un soft-404). Cerro **P-42** como **R-17**.
- **VPS:** `caddy` en dos redes (stack_net con default gateway + sitio_bg_net con `--gw-priority=-100`); `sitio-bg-web` healthy en 172.22.10.10.
- **Incidentes acumulados:** 1 que toco Aurora (Sesion 9, ~5 min, E-24) + 2 solo-staging en Sesion 12 (E-25, E-26) + **2 nuevos en Sesion 13**: **E-27** (el `sed -i` que reemplazo el inodo y dejo al caddy validando y recargando la config vieja) y **E-28** (validacion sin `--adapter caddyfile`, que dejo pasar el restart sin red de seguridad). Mas el near-miss **NM-11**: el bloque de rollback pegado despues de un switch exitoso, **~10 min de cartel viejo** en el sitio ya publico.
- **Aurora downtime real acumulado:** ~5 minutos (sigue siendo el unico, de Sesion 9). **Ningun incidente de Sesion 13 ni de Sesion 14 la toco** — Sesion 14 no toco infraestructura en absoluto.
- **CERO items abiertos del lanzamiento.** **P-51 cerro como R-19 el 10/08:** la casilla `privacidad@barreraglobal.com` quedo **PROBADA** (Cloudflare 1 recibido / 1 entregado; el correo llego al Gmail de Francisco a las 11:53). Cabo operativo, no bloqueante: **aterrizo en Spam**, se aplico «No es spam»; conviene revisar SPF/DKIM/DMARC del dominio antes de que un ejercicio de derechos real se pierda ahi.
- **Marca:** **P-56 cerro como R-21** — mision, vision y valores **aprobados**, Manual de Marca **v3.1 FINAL** entregado al manager de marketing. De ahi sale la **capa comercial del simbolo**, que ahora es narrativa **oficial**: **basamento = metodo**, **columnas = vida y salud**, **fronton = inversion**. Cualquier pieza futura la respeta. **P-55 cerro como R-20** (`fd8316b`).
- **Pendientes vivos del post-lanzamiento:** **desplegar F1 + P-55** (lo primero de la fila), **P-52** fase 2 (papeleria y mockups, corrigiendo "Quito" por **Ambato** y el CTA viejo por el del manual), **P-53** (`basicauth` a `basic_auth`, con metodo inode-safe), **P-04** (unificar la direccion de contacto entre paginas), baseline nuevo del Caddyfile pendiente de registrar, y el espejo del knowledge.

---

## Que NO hace Claude (chat ni Code) en este proyecto

- Recomendar WordPress, WooCommerce ni CMS grafico.
- Modificar Aurora o FBE Sport para "hacer espacio" al sitio.
- Inventar precios, leyes ecuatorianas, cifras de mercado o nombres de aseguradoras.
- Empujar Meta Ads tradicional como motor de crecimiento (Special Ad Category Financial Products desde 21 enero 2025 lo restringe).
- Prometer rich results de FAQ en Google (Google los restringio en agosto 2023).
- Tomar decisiones de negocio que son de Francisco (que carriers presentar, copy, precios, comisiones).
- Felicitar por las preguntas ("excelente pregunta") ni usar emojis excesivos.

---

## Tono y comunicacion

- Espanol ecuatoriano. Tildes, "n con virgulilla", parrafos correctos. Sin jerga argentina ni espanola.
- Prosa directa, sin felicitaciones, sin rodeos.
- Bullets y headers solo cuando aportan claridad real, no por defecto.
- Comandos copiables en bloques de codigo separados del texto explicativo.
- Diagramas de flujo cuando un proceso tiene 3+ pasos secuenciales o ramificaciones.
- Acciones mas que teoria. Lo que se hace manana antes que la filosofia detras.
- Cero alucinacion: si no se sabe un dato 2026 concreto, decirlo y buscar en web.

---

## Cuando Francisco diga algo que no cuadra

Contradecirlo con argumento citando documento exacto:
- "Eso viola el Art. 12.7 SCVS porque..."
- "Eso te puede romper Aurora por la Regla R-34 de coexistencia..."
- "Investors Trust es carrier, no broker. La cadena correcta es..."
- "Eso esta documentado como error E-XX en ERRORES-Y-APRENDIZAJES.md..."

NO diplomacia, NO rodeo. Argumento tecnico con cita de la regla o documento.

---

## Sincronizacion knowledge / repo / infraestructura

**ESTOS DOCUMENTOS DEBEN ESTAR SINCRONIZADOS EN 3 LUGARES:**

1. **Knowledge Claude.ai** (este chat) — al cierre de sesion, eliminar viejos y subir nuevos
2. **Repo local Windows** (`C:\Users\panch\projects\sitio-bg-infra\docs\`)
3. **GitHub** (`origin/main`)

Si Claude detecta desincronizacion entre estos 3 lugares, ALERTAR a Francisco antes de actuar.

**Frecuencia de sincronizacion:** al final de cada sesion que modifique alguno de los 5 documentos clave.

---

## Politica de errores y near-miss

**Cuando Claude detecta un error nuevo:**

1. Documentarlo en `docs/ERRORES-Y-APRENDIZAJES.md` con la estructura estandar (ID E-XX, fecha, sesion, categoria, severidad, dano real, causa raiz, como se resolvio, regla operativa para no repetir).
2. Si genera una nueva regla operativa, agregarla a la lista R-XX consolidada.
3. Sincronizar a los 3 lugares (knowledge + repo + GitHub) en el commit de cierre de sesion.

**Cuando Claude detecta un near-miss (algo que casi sale mal pero se ataja):**

1. Documentarlo como NM-XX en la misma forma que un error.
2. Incluir "Por que pudo ser grave" y "Aprendizaje".

**Cuando Francisco menciona un error o pregunta por uno:**

1. Buscar en `docs/ERRORES-Y-APRENDIZAJES.md` antes de responder.
2. Citar el ID exacto del error o regla relevante.
3. NO improvisar respuesta si la informacion existe documentada.

---

## Checklist al iniciar cada sesion

```
[ ] Leer ERRORES-Y-APRENDIZAJES.md (al menos las reglas R-01 a R-50)
[ ] Leer ESTADO-GENERAL-PROYECTO.md (saber donde estamos)
[ ] Confirmar pwsh 7 activo ($PSVersionTable.PSVersion)
[ ] cd al repo + git pull origin main
[ ] git status debe estar working tree clean
[ ] Si hay cambios sin commit, preguntar a Francisco que hacer
[ ] Confirmar Aurora viva (curl a 5 dominios HTTP 200)
[ ] Proponer plan del dia con tiempo estimado
[ ] Esperar aprobacion de Francisco antes de ejecutar
```

**Si la sesion toca el VPS, sumar (Sesion 12):**

```
[ ] Claude Code pushea PRIMERO; el VPS jala DESPUES (R-47)
[ ] Tras el git pull del VPS: git log y confirmar por HASH que el
    commit esperado llego, ANTES del rebuild (R-47)
[ ] "Already up to date" + build todo CACHED = se violo la secuencia
[ ] Cambio en infra/nginx.conf o en los hashes CSP => REBUILD, no
    basta el pull: esa config vive dentro de la imagen (R-44)
[ ] Las salidas de terminal van al .txt de reporte, NUNCA de vuelta
    a una terminal (R-45)
[ ] Credenciales se prueban en el NAVEGADOR, no con curl (R-46)
[ ] NUNCA sed -i ni mv sobre un archivo bind-monteado: reemplazan el
    inodo y el container sigue leyendo el viejo (R-48). Editar
    preservando inodo; ante duda, comparar ls -i host vs container
[ ] Bloques marcados "solo si falla" NO se pegan salvo que su condicion
    se cumpla; confirmarla en voz alta antes (R-49)
[ ] caddy validate sobre archivos que no se llamen Caddyfile SIEMPRE
    con --adapter caddyfile; si la validacion falla, el runbook PARA (R-50)
[ ] Tras tocar el proxy, pedir una URL inventada: si /no-existe da 200,
    no estas mirando el sitio real
```

---

**Fin del CLAUDE.md.**

**Proxima revision:** cuando se **despliegue** lo que espera en `main` (P-54 F1 + P-55) y el sitio publico deje de estar desfasado del repo, cuando **P-52** entregue la papeleria de fase 2, o cuando se modifique cualquiera de los 5 documentos clave del knowledge.
