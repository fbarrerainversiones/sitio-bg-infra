# CLAUDE.md — Reglas locales del proyecto Sitio Barrera Global

> **Este archivo es leido automaticamente por Claude Code al iniciar cada sesion.**
> Tambien sirve como referencia rapida para cualquier sesion de chat (Claude.ai).
> NO editar sin actualizar la version y la fecha al final.

**Version:** 2.3
**Ultima actualizacion:** miercoles 5 de agosto de 2026 (Sesion 12: merge de `publicacion-v1` a `main` + staging completo)
**Cubre el estado del proyecto hasta:** Sesion 12 cerrada (03-05/08: rama `publicacion-v1`, politica de privacidad v3 con dictamen legal, merge a `main`, deploy y **staging COMPLETO y navegable** con 12 paginas). Sitio aun NO publico: los gates son P-39 (visto bueno ESCRITO del abogado) y P-51 (correo `privacidad@` probado).

---

## 🚨 LECTURA OBLIGATORIA ANTES DE ACTUAR

Antes de proponer cualquier accion tecnica, Claude Code debe leer estos archivos en este orden:

1. **`docs/ERRORES-Y-APRENDIZAJES.md`** — 26 errores (E-01 a E-26) + 10 near-miss (NM-01 a NM-10) + 47 reglas operativas (R-01 a R-47). NO repetir errores ya documentados.
2. **`docs/PLAN-MAESTRO-v2.md`** — documento maestro con decisiones tecnicas firmes (D-01 a D-28), bitacora de sesiones (la ultima entrada es Sesion 12), hallazgos legales.
3. **`docs/PENDIENTES.md`** — 51 items (P-01 a P-51) + 16 resueltos historicos (R-01 a R-16).
4. **`docs/ESTADO-GENERAL-PROYECTO.md`** — estado consolidado del proyecto al cierre de Sesion 5.
5. **`docs/DIAGRAMA-FLUJO-PROYECTO.md`** — visualizacion completa de fases y dependencias.
6. **`docs/REPORTE-SESION-10.md`** — bitacora de la jornada estructural (Bloques A-B) + decisiones D1 a D6 + QA pre-merge.

Si una propuesta tuya contradice algo de estos documentos, PARAR y discutirlo con Francisco con cita exacta del documento contradicho.

---

## Identidad

- **Proyecto:** Sitio web publico de Barrera Global (asesoria de seguros, Ecuador).
- **Dominio:** barreraglobal.com y www.barreraglobal.com (staging desplegado en staging.barreraglobal.com; produccion publica pendiente de P-39).
- **Marca:** Barrera Global (marca personal de Francisco Javier Barrera Bonilla).
- **Vinculacion legal:** Francisco opera como APS bajo paraguas de Insurance Trust (Cred. SCVS Nro 572619).
- **Slug interno:** sitio-bg
- **Carpeta local:** `C:\Users\panch\projects\sitio-bg-infra\`
- **Carpeta VPS:** `/opt/sitio-bg/` (creada en HITO 01)
- **Repo GitHub:** `fbarrerainversiones/sitio-bg-infra` (publico, D-21)
- **Fase actual:** Fase 1 al 100% + Fase 3 estructural + **publicacion fusionada en `main`** (12 paginas). **STAGING COMPLETO Y NAVEGABLE** en staging.barreraglobal.com (basicauth + noindex), sirviendo ya las 12 paginas reales. Sitio aun **NO publico**: el switch no se ha tocado.

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

## REGLAS DURAS INVIOLABLES (resumen de las 47 reglas)

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

**Lista completa de las 47 reglas:** ver `docs/ERRORES-Y-APRENDIZAJES.md` seccion "Reglas operativas consolidadas".

### CSP (hashes horneados en la imagen)
`infra/nginx.conf` autoriza por hash los **2 unicos `<script>` inline** del build
(toggle del menu movil + scroll-reveal). Si se toca el contenido de cualquiera de
los dos, hay que **regenerar el hash** siguiendo `infra/README-hashes.md` y
reconstruir la imagen Docker. Si el hash no cuadra, el navegador bloquea el script
y la interaccion se rompe **en silencio**.

---

## Hallazgos criticos pendientes (H-01 a H-05)

Detectados en analisis legal IA externo de Sesion 5. Cuatro de los cinco siguen
abiertos y son gate del pase a PUBLICO (no del staging protegido):

- **H-01:** 7 huecos LOPDP en la politica de privacidad — cerrados tecnicamente en la v2 (Sesion 8) y **superados por la v3** (04/08/2026, commit `65b3dd4`), que transcribe **verbatim** el dictamen **verbal** del abogado humano. Falta unicamente el **visto bueno ESCRITO** (P-39). ABIERTO, pero mucho mas cerca.
- **H-02:** DPD no registrado ante SPDP (bloqueado hasta SCVS personal de Francisco, P-06). ABIERTO.
- **H-03:** Sitio antiguo con Meta Pixel — decision aun no tomada (P-38, 3 opciones sobre la mesa). ABIERTO.
- **H-04:** Aurora no declarada como decision automatizada (Art. 12.4 LOPDP) — cubierto por el alcance de P-35. Verificar en el texto vigente antes del pase a publico.
- **H-05:** ✅ RESUELTO — credencial 572619 removida del sitio (E-23).

---

## Estructura de archivos relevante

```
sitio-bg-infra/
├── CLAUDE.md (este archivo)
├── .gitignore (endurecido con *.bak.*)
├── docs/
│   ├── PLAN-MAESTRO-v2.md          ← doc maestro (LEER PRIMERO)
│   ├── PENDIENTES.md                ← 51 items (P-01 a P-51) + 16 resueltos
│   ├── ERRORES-Y-APRENDIZAJES.md    ← 26 errores + 10 NM + 47 reglas
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
    │   ├── robots.txt
    │   └── sitemap.xml              ← a mano, ver P-50
    └── src/
        ├── styles/ (tokens.css, global.css con animations + dinamismo)
        ├── layouts/ (Layout.astro con SEO + 3 JSON-LD, ProductLayout.astro)
        ├── components/ (Logo, Header sticky con dropdown, Footer,
        │                Pendiente ← huerfano: ya no lo usa ninguna pagina)
        └── pages/ (index, sobre-mi, contacto, privacidad, terminos,
                    cookies, inversion, 404,
                    seguros/{vida-termino, vida-indexada,
                             salud-nacional, salud-internacional})
```

> Nota: en `docs/` hay archivos `*.bak.*` en disco. **No estan en el repo**:
> los ignora `.gitignore:42` por R-39. No commitearlos nunca.

---

## Estado actual (05/08/2026 — Sesion 12: merge de `publicacion-v1` + staging completo)

- **HEAD de `main`:** `e921dc8` (`fix(footer)`), sobre el merge `340c6cb` (`--no-ff` de `publicacion-v1`) y el fix `68f5e7b` (`fix(nginx)`), mas los commits del cierre documental de esta sesion. Base previa: `ffcf293`.
- **Lo que entro en el merge:** 15 commits, 17 archivos, +1437 / -247 lineas, sin conflictos. Rama `publicacion-v1` **conservada** (se borra cuando el staging quede aprobado).
- **Paginas: 12** — `/`, `/sobre-mi`, `/contacto`, `/privacidad`, `/terminos`, `/cookies`, `/inversion`, `/404` y las 4 de `/seguros/`. Build verificado: **12/12** sin errores.
- **CSP:** los 2 hashes de `infra/nginx.conf` coinciden con los 2 scripts inline del build **en las 12 paginas** (cruce bidireccional, cero huerfanos). Ningun hash cambio en Sesion 12. Los 3 bloques JSON-LD son `application/ld+json`: no ejecutables, no requieren hash.
- **Deploy:** **STAGING COMPLETO Y NAVEGABLE** en `https://staging.barreraglobal.com` (basicauth + `X-Robots-Tag: noindex`), sirviendo las 12 paginas reales. El VPS venia de `b09b10e`: el pull fue de **50 commits** hasta `340c6cb`, con rebuild de imagen.
- **VPS:** `caddy` en dos redes (stack_net con default gateway + sitio_bg_net con `--gw-priority=-100`); `sitio-bg-web` healthy en 172.22.10.10. **Gate 0 verde durante toda la Sesion 12.**
- **Contenido:** los marcadores `[PENDIENTE: ...]` ya **no existen** (cero en fuente y en build). Ese gate esta cerrado.
- **Incidentes acumulados:** 1 que toco Aurora (Sesion 9, ~5 min, E-24 — primer y unico rollback del proyecto) + 2 **solo-staging** en Sesion 12 (**E-26** candado basicauth corrupto, **E-25** navegacion rota por el puerto 8080), ambos resueltos el mismo dia y sin impacto en Aurora.
- **Aurora downtime real acumulado:** ~5 minutos (sigue siendo el unico, de Sesion 9).
- **Los DOS gates que faltan para el switch a PUBLICO:**
  1. **P-39 — visto bueno ESCRITO del abogado.** El dictamen verbal ya esta implementado en la v3; falta el respaldo escrito. Revisara las **paginas renderizadas en staging**, no el markdown. Dentro del mismo gate quedan la pregunta del aviso de cookies y la **inconsistencia del "tramite"**: las paginas de presentacion ya no lo mencionan, `/privacidad` y `/terminos` si. **Esas dos NO se tocan sin el abogado.**
  2. **P-51 — correo `privacidad@barreraglobal.com`.** La v3 lo publica 4 veces como canal de derechos con plazo de 15 dias y **la casilla no existe**. Tarea manual de Francisco en Cloudflare Email Routing. **Configurar sin probar recepcion NO cuenta como cerrado.**
- **Ademas, antes o junto al switch:** visto visual final de Francisco sobre el staging completo y aprobacion de la `og-image` (P-48, ya desplegada).

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
[ ] Leer ERRORES-Y-APRENDIZAJES.md (al menos las reglas R-01 a R-47)
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
```

---

**Fin del CLAUDE.md.**

**Proxima revision:** al pase a PUBLICO (gates P-39 y P-51) o cuando se modifique cualquiera de los 5 documentos clave del knowledge.
