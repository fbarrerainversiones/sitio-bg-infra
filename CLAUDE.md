# CLAUDE.md — Reglas locales del proyecto Sitio Barrera Global

> **Este archivo es leido automaticamente por Claude Code al iniciar cada sesion.**
> Tambien sirve como referencia rapida para cualquier sesion de chat (Claude.ai).
> NO editar sin actualizar la version y la fecha al final.

**Version:** 2.6
**Ultima actualizacion:** lunes 17 de agosto de 2026 (Sesion 19: **PRIMERA SESION CORRIDA DENTRO DEL VPS**)
**Cubre el estado del proyecto hasta:** Sesion 19 (17/08). **EL DEPLOY QUE ESPERABA BAJO VEDA SE EJECUTO**: P-54 F1 y P-55 estan en produccion y el sitio publico ya NO esta desfasado del repo. El sitio sirve **13 paginas**: volvio `/seguros/auto` (Sesion 16, decision de Francisco que **SUPERA a D1**). Las Sesiones 15 a 18 sumaron los fondos de video F2/F3, la pagina de seguro vehicular, el sistema de atribucion de leads de `web/src/lib/whatsapp.ts` y la accesibilidad del footer a **100**. La Sesion 19 agrego el **selector de contacto**, la **barra fija de WhatsApp en movil**, el **correo del dominio** y la **dieta de fuentes**.

> **ESTADO ANTERIOR, conservado por trazabilidad:** hasta la v2.5 este archivo cerraba en la Sesion 14 (10/08). **EL SITIO ES PUBLICO Y YA NO TIENE NINGUN GATE DE LANZAMIENTO ABIERTO.** Cayo el ultimo: **P-51 probado** (Cloudflare 1 recibido / 1 entregado, el correo llego al Gmail de Francisco a las 11:53, en Spam, se aplico «No es spam») y cerro como **R-19**. Tambien cerraron **P-55** como **R-20** (fondo oscuro del `logo.svg`, commit `fd8316b`) y **P-56** como **R-21** (mision/vision/valores aprobados; Manual de Marca **v3.1 FINAL** entregado al manager de marketing). **P-54 F1 esta CONSTRUIDA en `main` pero NO desplegada**: el 10/08 rigio veda de infraestructura compartida por la ventana de promocion a produccion de Aurora.

---

## 🚨 LECTURA OBLIGATORIA ANTES DE ACTUAR

Antes de proponer cualquier accion tecnica, Claude Code debe leer estos archivos en este orden:

1. **`docs/ERRORES-Y-APRENDIZAJES.md`** — 28 errores (E-01 a E-28) + **15 near-miss (NM-01 a NM-15)** + **55 reglas operativas (R-01 a R-55)**. NO repetir errores ya documentados. Los cuatro near-miss nuevos son de la familia «falla en silencio»: dos del `.reveal` que deja bloques invisibles para siempre (NM-12, NM-13) y dos que habrian dejado los videos muertos en produccion (NM-14, NM-15).
2. **`docs/PLAN-MAESTRO-v2.md`** — documento maestro con decisiones tecnicas firmes (D-01 a D-29), bitacora de sesiones (la ultima entrada es **Sesion 14**), hallazgos legales. Ojo con la numeracion D-XX: la seccion 10 lista D-18 a D-24 y D-29; D-25 a D-28 viven en la bitacora (Sesiones 6 y 8).
3. **`docs/PENDIENTES.md`** — **62 items (P-01 a P-62) + 24 resueltos historicos (R-01 a R-24)**. Numeracion verificada contra el archivo el 17/08/2026. Ojo: los `R-XX` de PENDIENTES son **resueltos** y los `R-XX` de ERRORES son **reglas**. Son dos numeraciones distintas que conviven.
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
- **Fase actual:** **SITIO PUBLICO Y EN LINEA** desde el 09/08/2026, con **13 paginas** y **simbolo propio**. El deploy que esperaba bajo veda se ejecuto el **17/08/2026**: P-54 F1 y P-55 estan en produccion. Staging se mantiene con candado como ambiente de revision. Lo que sigue es producto y deuda: la papeleria de **P-52** fase 2, el arreglo de raiz del observer (**P-58**), Google Search Console (**P-62**) y la medicion de la dieta de fuentes (**P-57**).
- **HAY TRABAJO COMMITEADO EN LOCAL Y SIN PUBLICAR.** La Sesion 19 corrio **dentro del VPS** con el usuario `web`, que **no puede pushear**. Sus tres commits de codigo viven solo en el clon `/home/web/sitio-bg-infra` hasta que Francisco los publique. **R-55: un commit local no es un respaldo.** Los hashes estan en `REPORTE-SESION-19.txt`.

---

## Que NO es este proyecto

- **No es Aurora** (agente WhatsApp con RAG) — proyecto separado en `/opt/stack/` del VPS.
- **No es FBE Sport** (sitio WordPress) — proyecto separado en `/opt/fbesport/` del VPS.
- **No usa WordPress, WooCommerce, ni CMS grafico** en ninguna fase.
- **No procesa pagos.** El cliente paga directo al carrier.
- **No publica primas especificas** (viola Art. 11.6 SCVS).
- **No usa "el mejor precio" ni "hasta X% de descuento"** (viola Art. 12.12 SCVS).

---

## Entorno de trabajo dentro del VPS (Sesion 19)

Desde el 17/08/2026 este proyecto tambien se trabaja **dentro del servidor**,
con el usuario Linux `web`. Lo que la proxima sesion en el VPS necesita saber
antes de perder media hora averiguandolo:

- **Clon:** `/home/web/sitio-bg-infra`. **NO** es `/opt/sitio-bg/src`, que es el
  clon de despliegue y esta fuera del perimetro del usuario `web`.
- **El `node` del sistema NO SIRVE y NO HAY `npm`.** `/usr/bin/node` es
  **v18.19.1**, y tanto `web/package.json` como el propio `astro@6.3.8` exigen
  **`node >=22.12.0`**. El paquete de Ubuntu vino sin `npm`, `npx`, `pnpm`,
  `yarn` ni `corepack`.
- **La solucion instalada:** **Node 22.23.2 (LTS «Jod») con npm 10.9.8**,
  tarball oficial de nodejs.org **verificado por SHA256** contra su
  `SHASUMS256.txt`, extraido en `~/.local/opt/node-v22.23.2-linux-x64` con el
  enlace estable `~/.local/opt/node22` y los binarios en `~/.local/bin`, que ya
  esta primero en el `PATH`. Todo dentro del home: **cero sudo, cero zona
  compartida**, y se revierte con un `rm -rf` de un solo directorio.
- **Por que la linea 22 y no la 24:** `infra/Dockerfile:10` compila con
  `FROM node:22-alpine`. Construir con la misma linea mayor que hornea la
  imagen es lo que hace que el build local signifique algo.
- **NO hay Chrome ni Lighthouse en el VPS.** Las mediciones de rendimiento las
  corre Francisco en su laptop, **siempre por `127.0.0.1`** (R-53). Una sesion
  en el servidor **no puede** verificar Performance, LCP ni accesibilidad con
  Lighthouse: lo declara y entrega el guion.
- **El usuario `web` no pushea.** Sus commits quedan locales hasta que Francisco
  los publique (R-55).
- Herramientas disponibles verificadas: `rg` 14.1.1, `jq`, `curl`, `git`, `tar`,
  `xz`. Hay egreso de red a nodejs.org, registry.npmjs.org y github.com.

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

- `/seguros/auto` **VOLVIO** (Sesion 16, 11/08/2026, commit `28441c0`), con el
  alcance acotado a «cobertura unicamente en el Ecuador» y copy aprobado por
  Francisco. Esa decision **SUPERA a D1** (25/07, commit `96f629c`), que la
  habia retirado. Hoy esta enlazada desde el desplegable «Productos» del
  Header. **Son 6 paginas de producto y 13 paginas en total.**
- `/aprende` (blog) sigue **pendiente**, sin pagina creada.

---

## REGLAS DURAS INVIOLABLES (resumen de las 55 reglas)

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

### Contenido, verificacion y respaldo (Sesiones 16 a 19)

- **R-51:** **ninguna animacion de aparicion dependiente de JavaScript sobre un contenedor de contenido largo o de altura sin techo.** `.reveal` deja el elemento en `opacity: 0` hasta que el observer le ponga `.visible`, y con `threshold: 0.15` un elemento mas alto que `(alto_del_viewport - 50) / 0,15` **nunca** alcanza ese ratio: queda invisible para siempre, sin un error en consola. Prohibido envolver cuerpos de pagina, `<slot />`, listas con `map()` o cualquier bloque que crezca con los datos. **Corolario, que es la mitad importante:** lo que tiene que poder extraer un buscador o un asistente **no depende de JavaScript para ser visible**. (NM-12, NM-13.)
- **R-52:** **toda verificacion de altura se mide en TRES condiciones, o no es una verificacion:** (1) 360x640 al 100 % de texto, (2) 150 % de escala de texto, (3) 320x256 CSS px, que es la condicion de WCAG 2.1 SC 1.4.10 Reflow, o sea zoom al 400 %. Medir una sola **no verifica: tranquiliza**. NM-13 pasaba la primera con margen de 2,5x y fallaba en las otras dos. (NM-13.)
- **R-53:** **Lighthouse local SIEMPRE por `127.0.0.1`, nunca por `localhost`.** Con IPv6 activo, `localhost` resuelve primero a `::1`, la latencia se cuadruplica y el Performance se hunde: se persiguen cuellos que no existen. Una cifra de un reporte solo vale si vino de una corrida por `127.0.0.1`.
- **R-54:** **los centinelas de datos personales se DESCRIBEN, no se transcriben.** Un barrido se reporta diciendo que dio cero y como se busco, nunca escribiendo los valores buscados. El repo es publico: un informe que dice «esto no esta en el repo» no puede lograrlo escribiendolo.
- **R-55:** **push al cierre de cada jornada: un commit local NO es un respaldo.** En este proyecto el push lo ejecuta **Francisco** — los agentes no pushean. Si una jornada cierra con commits locales sin publicar, se dice explicitamente en el reporte y en el snapshot de continuidad, con los hashes, para que nadie lo de por respaldado.

**Chequeo barato que vale por diez:** despues de tocar el proxy, pedir **una URL inventada**. Si `/no-existe` devuelve **200**, no estas mirando el sitio real. Ese 200 fue lo que desenmascaro el switch v1.

**Lista completa de las 55 reglas:** ver `docs/ERRORES-Y-APRENDIZAJES.md` seccion "Reglas operativas consolidadas".

### PROTOCOLO DE VEDA (practica establecida en Sesion 14, 10/08/2026)

> **Todavia NO es una regla numerada.** Las reglas son **55** (R-01 a R-55) en
> `docs/ERRORES-Y-APRENDIZAJES.md`, y ninguna es la veda. Esto sigue siendo
> practica confirmada por uso, y se numera el dia que se formalice ahi: le
> tocaria **R-56**. No inventarle numero mientras tanto.
>
> **La veda funciono y se levanto.** La ventana de Aurora cerro y el deploy en
> cola (P-54 F1 + P-55) se ejecuto el 17/08/2026. El protocolo hizo exactamente
> lo que prometia: el trabajo local no se detuvo, el deploy no se negocio, la
> cola quedo escrita en tres lugares y la veda la levanto Francisco.

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
│   ├── PENDIENTES.md                ← 62 items (P-01 a P-62) + 24 resueltos
│   ├── ERRORES-Y-APRENDIZAJES.md    ← 28 errores + 15 NM + 55 reglas
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
└── web/                              (Astro 6 — 13 paginas)
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
        ├── lib/whatsapp.ts  ← FUENTE UNICA del numero de WhatsApp y de
        │                       los marcadores de atribucion. Dos juegos
        │                       de tipos que NO se mezclan: TokenBG (de que
        │                       PAGINA vino el lead, 8 marcadores) y
        │                       TokenCTA (que ELIGIO en el selector, 5).
        ├── components/ (Logo, Portico ← simbolo de header y footer,
        │                SelectorContacto ← «¿Por donde empezamos?»: 4
        │                tarjetas + la del indeciso + «que pasa despues».
        │                Va en el home y en /contacto. Cero JS.
        │                BloqueFAQ, TarjetaAseguradora, LetraPequena,
        │                FondoVideo ← fondos de video F2/F3,
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

## Estado actual (17/08/2026 — Sesion 19: primera sesion corrida dentro del VPS)

- **EL SITIO ESTA EN LINEA, SIN GATES Y YA NO ESTA DESFASADO DEL REPO.** `barreraglobal.com` y `www.barreraglobal.com` sirven **13 paginas** reales via `reverse_proxy sitio-bg-web:8080`. El deploy que esperaba bajo veda desde el 10/08 (**P-54 F1** + **P-55**) **se ejecuto el 17/08/2026**. Procedencia: lo reporta Francisco — **ningun agente puede verificarlo por su cuenta**, porque `/opt/sitio-bg` esta fuera del perimetro de todos ellos.
- **LO QUE AHORA ESPERA SIN PUBLICAR ES OTRA COSA, y hay que saberlo:** la Sesion 19 corrio dentro del VPS con el usuario `web`, que **no puede pushear**. Sus **tres commits de codigo** —correo del dominio, selector de contacto + barra fija, dieta de fuentes— viven **solo en el clon local** hasta que Francisco los publique. **R-55: un commit local no es un respaldo.** Hashes en `REPORTE-SESION-19.txt`.
- **Paginas: 13** — `/`, `/sobre-mi`, `/contacto`, `/privacidad`, `/terminos`, `/cookies`, `/inversion`, `/404` y las **5** de `/seguros/` (vida-termino, vida-indexada, salud-nacional, salud-internacional y **auto**, que volvio en la Sesion 16). Build verificado: **13/13** sin errores.
- **CSP:** los 2 hashes de `infra/nginx.conf` cuadran con los 2 `<script type="module">` inline del build en las **13** paginas (cruce bidireccional, cero huerfanos). **Ningun hash cambio desde la Sesion 13** — y la Sesion 19 tampoco los movio: el selector, la barra fija y la dieta de fuentes son enlaces y CSS, cero JavaScript. Los 3 bloques JSON-LD son `application/ld+json`: no ejecutables, no requieren hash.
- **Fuentes (Sesion 19):** de **65 archivos y 1.005,9 KB** a **15 y 303,6 KB**; de **36 bloques `@font-face` a 11**; CSS render-blocking de **52,9 a 42,9 KB**. Se conservan Cormorant latin 400/500/600 y Outfit latin 400/500 —los pesos que el sitio USA— y se precarga **una sola** fuente, Cormorant latin 600, que es la que pinta los titulos. Prueba de no-regresion: los 15 archivos que quedan tienen el **mismo hash de contenido** que antes.
- **Atribucion de leads:** `web/src/lib/whatsapp.ts` es fuente unica del numero y de los marcadores. **8 marcadores de pagina** (`TokenBG`) + **5 de eleccion** (`TokenCTA`, los `BG-CTA-*` del selector). Son tipos separados a proposito: uno dice de donde vino el lead, el otro que eligio.
- **Accesibilidad: 100** en las tres paginas medidas (`/`, `/seguros/auto`, `/sobre-mi`), contra un objetivo declarado de 95. Cerro como **R-23** en PENDIENTES.
- **Rendimiento:** Performance 97-99, BP 100, SEO 100, CLS 0,000. **LCP 1,81-2,11 s** contra un objetivo de 1,80 s. El cuello no son las imagenes. La dieta de fuentes esta hecha pero **sin medir**: el VPS no tiene Chrome ni Lighthouse (**P-57**).
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
[ ] Leer ERRORES-Y-APRENDIZAJES.md (al menos las reglas R-01 a R-55)
[ ] Leer ESTADO-GENERAL-PROYECTO.md (saber donde estamos)
[ ] Confirmar pwsh 7 activo ($PSVersionTable.PSVersion)
[ ] cd al repo + git pull origin main
[ ] git status debe estar working tree clean
[ ] Si hay cambios sin commit, preguntar a Francisco que hacer
[ ] Confirmar Aurora viva (curl a 5 dominios HTTP 200)
[ ] Si la sesion corre DENTRO del VPS: confirmar que `node --version` da
    v22.x y que `npm --version` responde. Si dan v18 o "command not found",
    el PATH no esta tomando ~/.local/bin (ver "Entorno de trabajo dentro
    del VPS")
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

**Si la sesion toca contenedores nuevos o mide rendimiento (Sesiones 16-19):**

```
[ ] Ningun contenedor nuevo lleva .reveal si su alto puede crecer (R-51)
[ ] Toda altura se verifica en TRES condiciones: 360x640 al 100 %, 150 %
    de texto y 320x256 (zoom 400 %, WCAG Reflow). Una sola no verifica (R-52)
[ ] Lighthouse SIEMPRE por 127.0.0.1, nunca por localhost (R-53)
[ ] Los centinelas de datos personales se describen, NO se transcriben (R-54)
[ ] Al cerrar la jornada: si quedan commits sin publicar, decirlo con los
    hashes en el reporte y en el snapshot de continuidad (R-55)
[ ] Color de texto sobre un <a>: va en un <span> interno o en regla propia
    sin capa. Una utilidad text-* sobre un <a> PIERDE contra la regla base
    de global.css (R-43). Verificado otra vez el 17/08 sobre el CSS emitido
```

---

**Fin del CLAUDE.md.**

**Proxima revision:** cuando Francisco **publique** los tres commits locales de la Sesion 19 y se desplieguen, cuando **P-57** entregue la medicion de la dieta de fuentes, cuando **P-52** entregue la papeleria de fase 2, o cuando se modifique cualquiera de los 5 documentos clave del knowledge.
