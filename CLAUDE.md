# CLAUDE.md — Reglas locales del proyecto Sitio Barrera Global

> **Este archivo es leido automaticamente por Claude Code al iniciar cada sesion.**
> Tambien sirve como referencia rapida para cualquier sesion de chat (Claude.ai).
> NO editar sin actualizar la version y la fecha al final.

**Version:** 2.0
**Ultima actualizacion:** viernes 05 de junio de 2026 (Sesion 6)
**Cubre el estado del proyecto hasta:** Sesion 5 cerrada (02/06/2026)

---

## 🚨 LECTURA OBLIGATORIA ANTES DE ACTUAR

Antes de proponer cualquier accion tecnica, Claude Code debe leer estos archivos en este orden:

1. **`docs/ERRORES-Y-APRENDIZAJES.md`** — 23 errores + 6 near-miss + 39 reglas operativas. NO repetir errores ya documentados.
2. **`docs/PLAN-MAESTRO-v2.md`** — documento maestro con decisiones tecnicas firmes, bitacora de 6 sesiones, hallazgos legales.
3. **`docs/PENDIENTES.md`** — 40 items pendientes vivos (P-01 a P-40) + 14 resueltos historicos (R-01 a R-14).
4. **`docs/ESTADO-GENERAL-PROYECTO.md`** — estado consolidado del proyecto al cierre de Sesion 5.
5. **`docs/DIAGRAMA-FLUJO-PROYECTO.md`** — visualizacion completa de fases y dependencias.

Si una propuesta tuya contradice algo de estos documentos, PARAR y discutirlo con Francisco con cita exacta del documento contradicho.

---

## Identidad

- **Proyecto:** Sitio web publico de Barrera Global (asesoria de seguros, Ecuador).
- **Dominio:** barreraglobal.com y www.barreraglobal.com (sin deploy todavia).
- **Marca:** Barrera Global (marca personal de Francisco Javier Barrera Bonilla).
- **Vinculacion legal:** Francisco opera como APS bajo paraguas de Insurance Trust (Cred. SCVS Nro 572619).
- **Slug interno:** sitio-bg
- **Carpeta local:** `C:\Users\panch\projects\sitio-bg-infra\`
- **Carpeta VPS:** `/opt/sitio-bg/` (creada en HITO 01)
- **Repo GitHub:** `fbarrerainversiones/sitio-bg-infra` (publico, D-21)
- **Fase actual:** Fase 1 al 95% (Sitio Web Base, falta Sesion 7 con /sobre-mi y /contacto)

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
- **Red Docker:** `sitio_bg_net` (172.22.10.0/24) — creada, sin containers todavia
- **Reverse proxy:** Caddy compartido (NO se toca sin flujo de 7 pasos del Plan Maestro §2)
- **DNS:** Cloudflare (sin configurar barreraglobal.com todavia)
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

Paginas individuales (futuras, Fase 3):
1. `/seguros/vida-termino`
2. `/seguros/vida-indexada`
3. `/seguros/salud-nacional`
4. `/seguros/salud-internacional`
5. `/inversion`
6. `/aprende` (blog)

---

## REGLAS DURAS INVIOLABLES (resumen de las 39 reglas)

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

### Secretos
- **R-36:** `.env`, `*.env`, `secrets/`, `*.key`, `*.pem` siempre en `.gitignore` desde dia 0.
- **R-37:** Secretos en `/opt/sitio-bg/.env` con `chmod 600`. NUNCA en el repo.

### Compliance (Sesion 5)
- **R-38:** Cruzar analisis legal con fuentes independientes antes de cerrar compliance. Cualquier afirmacion regulatoria importante (atribucion de credenciales, base legal LOPDP, decisiones SCVS) debe validarse con al menos 2 fuentes: documentacion oficial del organismo + analisis legal IA o humano externo.

**Lista completa de las 39 reglas:** ver `docs/ERRORES-Y-APRENDIZAJES.md` seccion "Reglas operativas consolidadas".

---

## Hallazgos criticos pendientes (H-01 a H-05)

Detectados en analisis legal IA externo de Sesion 5. Requieren accion en Sesiones 6-10:

- **H-01:** Politica de privacidad tiene 7 huecos LOPDP (corregir en Sesion 8)
- **H-02:** DPD no registrado ante SPDP (bloqueado hasta SCVS personal Francisco)
- **H-03:** Sitio antiguo con Meta Pixel (decidir en Sesion 9)
- **H-04:** Aurora no declarada como decision automatizada (corregir en Sesion 8)
- **H-05:** ✅ RESUELTO — credencial 572619 removida del sitio (E-23)

---

## Estructura de archivos relevante

```
sitio-bg-infra/
├── CLAUDE.md (este archivo)
├── .gitignore (endurecido con *.bak.*)
├── docs/
│   ├── PLAN-MAESTRO-v2.md          ← doc maestro (LEER PRIMERO)
│   ├── PENDIENTES.md                ← 40 items pendientes
│   ├── ERRORES-Y-APRENDIZAJES.md    ← 23 errores + 6 NM + 39 reglas
│   ├── ESTADO-GENERAL-PROYECTO.md   ← estado consolidado Sesion 5
│   ├── DIAGRAMA-FLUJO-PROYECTO.md   ← visualizacion completa
│   ├── IDENTIDAD-MARCA.md           ← Brand Book extraido
│   └── HITO-01-runbook-vps.md       ← historico HITO 01
├── infra/                            (pendiente Fase 2)
└── web/                              (Astro 6 con home + privacidad)
    ├── package.json
    ├── astro.config.mjs
    ├── public/images/francisco-barrera.jpg (foto IA D-24)
    └── src/
        ├── styles/ (tokens.css, global.css con animations)
        ├── layouts/Layout.astro (con SEO + 3 JSON-LD)
        ├── components/ (Logo, Header sticky, Footer)
        └── pages/ (index.astro, privacidad.astro)
```

---

## Estado actual (al cierre de Sesion 5, 02/06/2026)

- **Commits pusheados a GitHub:** 9 (HEAD en `e97155f`)
- **Lighthouse build local:** Performance 99 / Accessibility 95 / BP 100 / SEO 100 (promedio 98.5)
- **Paginas creadas:** home (15.5 KB) + privacidad (16.9 KB, con 17 items LOPDP Art. 12)
- **Build produccion local:** 1850.2 KB total, 72 archivos, 5.5s build time
- **Aurora downtime acumulado:** 0 minutos
- **Re-trabajo acumulado:** ~115 minutos (10% del tiempo total)

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
[ ] Leer ERRORES-Y-APRENDIZAJES.md (al menos las reglas R-01 a R-39)
[ ] Leer ESTADO-GENERAL-PROYECTO.md (saber donde estamos)
[ ] Confirmar pwsh 7 activo ($PSVersionTable.PSVersion)
[ ] cd al repo + git pull origin main
[ ] git status debe estar working tree clean
[ ] Si hay cambios sin commit, preguntar a Francisco que hacer
[ ] Confirmar Aurora viva (curl a 5 dominios HTTP 200)
[ ] Proponer plan del dia con tiempo estimado
[ ] Esperar aprobacion de Francisco antes de ejecutar
```

---

**Fin del CLAUDE.md.**

**Proxima revision:** cuando se cierre Sesion 6 o cuando se modifique cualquiera de los 5 documentos clave del knowledge.
