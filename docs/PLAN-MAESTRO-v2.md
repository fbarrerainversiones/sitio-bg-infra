# Proyecto: Sitio Barrera Global (Sitio Web Público) — v2

> **Documento maestro del proyecto, versión 2.** Reemplaza al `BG-WEB-PROYECTO-MAESTRO.md` v1.0 del 23/05/2026. Este es el primer documento que debe leer cualquier sesión de Claude (chat o Claude Code) que trabaje en este proyecto.

**Versión:** 2.1
**Fecha de creación v2:** 02 de junio de 2026
**Reemplaza:** BG-WEB-PROYECTO-MAESTRO.md v1.0 del 23/05/2026
**Dueño operativo:** Francisco Javier Barrera Bonilla
**Ubicación:** Ambato, Tungurahua, Ecuador (UTC-5)

---

## CAMBIOS RESPECTO A V1 (CRÍTICO LEER)

Esta versión integra:
- El **Informe Consolidado Barrera Global** (síntesis crítica de 4 investigaciones independientes, mayo 2026).
- El **Brand Book Barrera Global 2026** (sistema de identidad visual oficial, 25 páginas).
- Las decisiones de la **Sesión 2** del 25/05/2026.

Cambios materiales versus v1:

| Aspecto | v1 (23/05/2026) | v2 (25/05/2026) |
|---|---|---|
| Productos | 4 (vida, salud, inversión, internacional) | **6** (vida-termino, vida-indexada, salud-nacional, salud-internacional, auto, inversión) |
| Postgres del sitio | Container propio aislado (Opción B) | **REVERTIDO**. Sin Postgres propio. Webhook a n8n de Aurora |
| Integración Aurora | Widget Chatwoot embebido (snippet JS en `<head>`) | **REEMPLAZADO**. Webhook directo a n8n + links wa.me con UTMs |
| Eslogan | Pendiente (2 candidatos en evaluación) | **RESUELTO**. "Patrimonio que crece. Capital protegido." + descriptor "Arquitectura Financiera" |
| Brand Book | No existía como fuente única | **Fuente única de verdad** para todo lo visual |
| Carolina Andrade | No mencionada | **Co-asesora con presencia limitada** (solo /sobre-mi + links a redes, sin CTA propio) |
| Insurance Trust | En footer del sitio | **Solo footer legal y /sobre-mi**. PROHIBIDO en piezas de marketing |
| Graceful degradation | No definido | **Opción C** del caso Nova Seguros (mensaje + localStorage + reintentar) |
| CRM (Kommo) | Mencionado | **FUERA DEL SCOPE** de este proyecto. Es proyecto aparte futuro |

---

## ÍNDICE

1. [Identidad del proyecto](#1-identidad-del-proyecto)
2. [Reglas duras inviolables](#2-reglas-duras-inviolables)
3. [Decisiones técnicas firmes](#3-decisiones-tecnicas-firmes)
4. [Estructura del proyecto](#4-estructura-del-proyecto)
5. [Coexistencia con Aurora y FBE Sport](#5-coexistencia-con-aurora-y-fbe-sport)
6. [Integración con Aurora (modelo webhook)](#6-integracion-con-aurora)
7. [Fases del desarrollo (roadmap actualizado)](#7-fases-del-desarrollo)
8. [Gates de validación obligatorios](#8-gates-de-validacion)
9. [Knowledge base del proyecto](#9-knowledge-base)
10. [Bitácora viva](#10-bitacora-viva)
11. [Identificación rápida para nuevas sesiones](#11-identificacion-rapida)

---

## 1. Identidad del proyecto

### Nombre

**Nombre formal:** Sitio Barrera Global
**Nombre corto:** Sitio BG
**Slug interno:** `sitio-bg`

### Marca (del Brand Book 2026)

- **Marca:** Barrera Global
- **Descriptor maestro:** Arquitectura Financiera
- **Tagline pública principal:** "Patrimonio que crece. Capital protegido."
- **Hook frío para redes:** "Diseña arquitectura financiera para tu futuro."
- **Web:** barreraglobal.com

### Propósito

Construir la **capa visible pública** del negocio de asesoría de seguros de Francisco Barrera: sitio web profesional, premium, técnicamente superior a los propios carriers que distribuye. El sitio capta visitantes orgánicos (SEO + AEO), los convierte a leads via WhatsApp directo con atribución UTM o vía formulario que dispara webhook a Aurora.

### El sitio web NO es

- **No es Aurora.** Aurora es el agente conversacional WhatsApp + workflows n8n + Chatwoot que ya está montado en `/opt/stack/`. Aurora maneja Meta Developer API y TikTok API.
- **No es Mateo.** Mateo es el agente de citas (futuro, no construido todavía).
- **No es un CRM.** Kommo, HubSpot u otros CRMs son scope de proyectos futuros, no de este sitio.
- **No es WordPress, WooCommerce ni ningún CMS gráfico.**
- **No tiene pasarela de pago.** Los clientes pagan directo al carrier (Salud SA, BMI, Investors Trust, etc.).
- **No publica primas específicas** (prohibido por Art. 11.6 SCVS).
- **No tiene Postgres propio** (revertido el 25/05/2026, ver Cambios respecto a v1).

### El sitio web SÍ es

- Sitio estático construido en Astro 6.3.8 + Tailwind v4.3.0 + islas React 19 (decisión D-18 del 26/05/2026).
- Plataforma de captación de leads cualificados con atribución UTM end-to-end.
- Cliente fino de Aurora vía webhook HTTPS público (`n8n.barreraglobal.com/webhook/lead-form`).
- Cumplimiento estricto de LOPDP y Resolución SCVS-INS-2019-006.
- Brand Book 2026 como fuente única de identidad visual.

### Posicionamiento legal

Francisco es **Asesor Productor de Seguros (APS) en formación**. La credencial SCVS personal de Francisco está pendiente (trámite esperado finales julio 2026, curso terminado). Mientras tanto, Francisco opera bajo el paraguas de **Insurance Trust (Cred. SCVS Nº 572619)**, broker ecuatoriano registrado en SCVS con sede en Quito (itbrokerec.com).

Co-asesora: **Carolina Andrade** (carolina_andrade@itbrokerec.com, +593 99 804 5889). Presencia LIMITADA en el sitio: solo se la menciona en `/sobre-mi` con foto y link a sus redes sociales. **Sin CTA propio de cotización** (decisión 25/05/2026: Carolina a veces está y a veces no; un CTA propio dañaría conversión si no responde).

**Cadena legal correcta:**

```
Cliente final
    ↓
Francisco (APS en formación, opera bajo Insurance Trust)
    ↓
Insurance Trust (broker ecuatoriano, Cred. SCVS Nº 572619)
    ↓
Carrier emisor (Salud SA / BMI / Investors Trust / etc.)
```

**Tratamiento de Insurance Trust en el sitio:**

| Contexto | ¿Insurance Trust visible? | Razón |
|---|---|---|
| Footer legal | **SÍ**, obligatorio | Art. 4 SCVS: declarar broker bajo el cual opera |
| Página `/sobre-mi` | **SÍ**, contextualizado | Honestidad sobre estructura legal |
| Hooks y copy publicitario | **NO** | Léxico prohibido del Brand Book página 16 |
| Reels, ads, posts | **NO** | Léxico prohibido del Brand Book página 16 |
| Términos y privacidad | **SÍ** | Necesario para LOPDP (Art. 12: transferencias a terceros) |

### Datos pendientes (no bloquean Fase 0-1)

Ver `docs/PENDIENTES.md` para el listado vivo. Resumen al 25/05/2026:

- Lista de carriers locales acreditados a través de Insurance Trust.
- Lista de carriers internacionales acreditados.
- Autorización escrita de Insurance Trust para usar marca digital propia "Barrera Global".
- Email institucional `francisco@itbrokerec.com` (¿ya creado?).
- Número WhatsApp Business verificado en Meta Business Manager.

---

## 2. Reglas duras inviolables

Estas reglas surgieron de **45,5 horas de downtime real (incidente HTTP 522 v2.0 del 19-21 mayo 2026)** cuando un cambio mal coordinado entre proyectos rompió toda la infraestructura Aurora. **Cero negociación.**

### Regla 0 — Validación HTTP 200 antes y después de cualquier cambio

Antes de cualquier cambio que toque red Docker, firewall UFW, Caddy o containers compartidos, validar externamente que los 5 dominios productivos de Aurora siguen en HTTP 200:

```bash
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
```

Si alguno NO está en HTTP 200, **detener todo y consultar a Francisco** antes de hacer cualquier cambio. Si tras un cambio del sitio web alguno bajó, **revertir el cambio inmediatamente** antes de diagnosticar.

### Regla 1 — Aislamiento de filesystem

- El proyecto vive **únicamente** bajo `/opt/sitio-bg/` en el VPS.
- **NO tocar** `/opt/stack/` (Aurora) ni `/opt/fbesport/` (FBE Sport).
- **NO leer** archivos `.env`, certs o llaves de los otros proyectos.

### Regla 2 — Aislamiento de red Docker

- Crear red Docker propia llamada `sitio_bg_net` con subnet `172.22.10.0/24`.
- **NO conectar containers a `stack_net` (172.20.10.0/24)** — es de Aurora.
- **NO conectar containers a `fbe_net` (172.21.10.0/24)** — es de FBE Sport.
- El incidente 522 v2.0 fue exactamente esto: conectar un Caddy a una red que no era la suya.

### Regla 3 — Aislamiento de containers

- Prefijo de containers: `sitio-bg-*` (ejemplo: `sitio-bg-web`).
- **NO renombrar, detener, ni reiniciar** containers que empiecen con `caddy`, `n8n`, `postgres`, `redis`, `chatwoot-*`, `beszel*` (todos de Aurora) ni `fbesport-*` (FBE Sport).

### Regla 4 — Puertos del host

| Puerto | Estado | Propietario |
|---|---|---|
| 80/tcp | OCUPADO | Caddy Aurora |
| 443/tcp | OCUPADO | Caddy Aurora |
| 8443/tcp | OCUPADO | Caddy FBE Sport |
| 58291/tcp | OCUPADO | SSH custom |

**El sitio web NO debe abrir puerto nuevo en el host.** Routing público se hace vía Caddy compartido de Aurora.

### Regla 5 — Caddyfile compartido (zona crítica)

Cualquier modificación a `/opt/stack/caddy/Caddyfile` sigue OBLIGATORIAMENTE este flujo de 7 pasos:

```bash
# 1. Backup timestamped del Caddyfile actual
cd /opt/stack/caddy
sudo cp Caddyfile Caddyfile.bak.sitio-bg.$(date +%Y%m%d-%H%M%S)

# 2. Validar HTTP 200 de los 5 dominios ANTES del cambio
# (ver Regla 0)

# 3. Editar Caddyfile con tee o editor (NUNCA con mv — rompe el bind-mount)
sudo nano /opt/stack/caddy/Caddyfile

# 4. Validar sintaxis Caddy ANTES de recargar
sudo docker exec caddy caddy validate --config /etc/caddy/Caddyfile

# 5. Recargar Caddy sin downtime (NO reiniciar el container)
sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile

# 6. Validar HTTP 200 de los 5 dominios DESPUÉS del cambio
# (ver Regla 0)

# 7. Si alguno cayó, restaurar inmediatamente:
# sudo cp Caddyfile.bak.sitio-bg.<timestamp> Caddyfile
# sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

### Regla 6 — SIN Postgres propio del sitio (REVERTIDA respecto a v1)

**Decisión del 25/05/2026:** el sitio web NO tiene base de datos propia. Razón: los leads del sitio van directamente al embudo de Aurora vía webhook HTTPS público, identificados con campo `source='website'`. Esto simplifica la arquitectura (1 container en lugar de 2) y consolida todos los leads en un solo dashboard.

- **NO crear** container `sitio-bg-postgres`.
- **NO leer** ni modificar las bases `n8n`, `chatwoot_production`, `barreraglobal_rag` de Aurora.
- **Tampoco usar credenciales** de Aurora para insertar leads directamente. Toda interacción con la base de Aurora pasa por su webhook público de n8n.

### Regla 7 — Backups propios

El backup automático `/opt/stack/backups/scripts/backup.sh` es de Aurora. **No modificar.**

El sitio web tiene MÍNIMO contenido binario que respaldar (el HTML estático vive en el repo Git). Backup necesario:

- `/opt/sitio-bg/.env` (variables sensibles del container).
- Logs operativos (`/opt/sitio-bg/logs/`).
- Configuración nginx (`/opt/sitio-bg/nginx/`).

Implementación: script propio `/opt/sitio-bg/backups/scripts/backup-sitio.sh` con cron propio + sync a Backblaze B2 (bucket separado: `sitio-bg-backups`).

### Regla 8 — UFW

**No tocar UFW** sin coordinación explícita con Francisco. Si el sitio web necesita una regla nueva, debe seguir el patrón `ufw route allow proto tcp from any to <IP-container> port <puerto>` con comment identificador.

### Regla 9 — Cuentas externas compartidas

Cloudflare, Backblaze B2, GitHub, Hetrixtools — **cuentas compartidas con Aurora y FBE Sport** (todas bajo `fbarrera.inversiones@gmail.com`). El sitio web puede crear **recursos propios dentro** de esas cuentas pero **NO modificar** recursos existentes de los otros dos proyectos.

### Regla 10 — Bitácora obligatoria

Al cierre de cada sesión de trabajo (chat o Claude Code), actualizar la sección **10. Bitácora viva** de este documento con: fecha, qué se hizo, qué quedó pendiente, qué se rompió y cómo se arregló (si aplica), próximo paso concreto.

Sin bitácora actualizada al final, la siguiente sesión arranca a ciegas.

### Regla 11 — Webhook único a Aurora (NUEVA)

Toda comunicación del sitio web hacia Aurora pasa por una sola URL pública:

```
POST https://n8n.barreraglobal.com/webhook/lead-form
Content-Type: application/json
```

**Lo que el sitio envía:**

```json
{
  "source": "website-form-vida-termino",
  "product": "vida-termino",
  "full_name": "Nombre Cliente",
  "email": "cliente@example.com",
  "phone_e164": "+593987654321",
  "utm_source": "google",
  "utm_medium": "organic",
  "utm_campaign": "vida",
  "utm_term": "",
  "utm_content": "",
  "landing_page": "/seguros/vida-termino",
  "referrer": "https://google.com",
  "user_agent": "Mozilla/5.0...",
  "consent_general": true,
  "consent_general_at": "2026-05-25T14:30:00Z",
  "consent_health": true,
  "consent_health_at": "2026-05-25T14:30:00Z",
  "form_payload": { /* respuestas del cotizador */ }
}
```

**Lo que el sitio NUNCA hace:**

- No accede directo al Postgres de Aurora.
- No crea contactos directos en Chatwoot.
- No dispara workflows n8n internos (sin pasar por la URL pública).
- No comparte secrets ni tokens internos con Aurora.

### Regla 12 — Prohibido publicar primas o precios (SCVS Art. 11.6)

El sitio NUNCA publica primas específicas en ninguna página. El cotizador captura datos para generar lead, no calcula precio final. Violación = pérdida de credencial.

### Regla 13 — Insurance Trust solo en contexto legal (Brand Book + LOPDP)

"Insurance Trust" es léxico **prohibido** en piezas de marketing (hooks, ads, Reels, posts, descripciones de producto). Solo aparece en:

- Footer legal del sitio (obligatorio por Art. 4 SCVS).
- Página `/sobre-mi` (contextualizado).
- Páginas `/privacidad` y `/terminos` (Art. 12 LOPDP, transferencias a terceros).

### Regla 14 — Consentimientos LOPDP separados

Datos de salud son sensibles (Art. 4 LOPDP). Cualquier formulario que pida condiciones preexistentes, fumador/no fumador, edad para vida, ocupación de riesgo, requiere checkbox **SEPARADO** del consentimiento general. Ninguno pre-marcado.

### Regla 15 — Brand Book 2026 como fuente única de identidad visual

Toda decisión de color, tipografía, eslogan, CTA, voz, efectos visuales se resuelve consultando el `Barrera_Global_Brand_Book_2026.pdf` (knowledge del proyecto + repo en `/docs/IDENTIDAD-MARCA.md` como extracto operativo). Si una pieza no cumple el Brand Book, no se publica.

---

## 3. Decisiones técnicas firmes

### 3.1 Stack frontend: Astro 6.3.8

Confirmado por convergencia de las 4 investigaciones independientes (Informe Consolidado, Sección 2.3 Contradicción 2):

| Criterio | Astro 6.3.8 (elegido) | Next.js 14+ (descartado) |
|---|---|---|
| Sitio de contenido | Lighthouse 95+ por defecto | Requiere 80-120 KB JS baseline |
| SSG/SSR | Nativo, output estático | Nativo, pero pesado |
| Cotizador interactivo | Soportado via "islas" React | Nativo |
| Ecosistema 2026 | Cloudflare lo adquirió enero 2026 | Maduro |

**Conclusión:** Astro 6.3.8 con islas de React 19 (`@astrojs/react`) para cotizador y calculadoras. La version 6 (no 5) fue confirmada al scaffolding el 26/05/2026 - decision D-18.

Dependencias clave:

- `astro@^5.0.0`
- `@astrojs/react@^4.0.0`
- `@astrojs/tailwind@^6.0.0` (Tailwind v4)
- `@astrojs/mdx@^4.0.0`
- `@astrojs/sitemap@^4.0.0`
- `react@^18.0.0` (para islas)
- `framer-motion@^11.0.0` (microinteracciones)
- `react-hook-form@^7.50.0` + `zod@^3.22.0` (forms tipados)
- `@fontsource/cormorant-garamond`, `@fontsource/outfit`, `@fontsource/jetbrains-mono` (fuentes self-hosted)

### 3.2 Hosting: VPS compartido + Caddy compartido

- El sitio web corre como **1 solo container** Docker dentro del VPS Hostinger existente.
- Container: `sitio-bg-web` — nginx alpine sirviendo el build estático de Astro.
- Routing público va por el Caddy compartido de Aurora (con las precauciones de Regla 5).
- **No** se monta Caddy dedicado para el sitio web.

### 3.3 CMS y contenido

- **Fase 1-4:** MDX en el repositorio Git. Sin CMS gráfico. Cero infraestructura adicional. Edición vía Git + commit.
- **Fase 5+:** evaluar Strapi v5 si Francisco quiere editar contenido sin tocar código.

### 3.4 Integración con Aurora (modelo webhook, NO widget)

**REEMPLAZA la decisión v1** de embeber widget Chatwoot.

El sitio web se comunica con Aurora por **dos canales públicos**:

1. **Formularios → webhook n8n:**
   - URL: `https://n8n.barreraglobal.com/webhook/lead-form`
   - Método: POST
   - Payload: JSON con `source`, UTMs, datos del formulario, consentimientos firmados.

2. **WhatsApp → links wa.me con UTMs embebidos:**
   - Formato: `https://wa.me/593XXX?text=Hola%20Francisco%2C%20vi%20su%20web...`
   - Aurora ya tiene Meta Developer API integrada y maneja todo el inbox WhatsApp.

**NO se embebe widget Chatwoot** en el `<head>` del sitio. Razones:
- Aurora ya gestiona conversaciones en WhatsApp (canal #1 LATAM).
- El widget Chatwoot añade peso JS innecesario.
- Patrón Policygenius/Lemonade 2026: "No chatbots, always real people" como propuesta de valor.

Detalle expandido en sección 6.

### 3.5 Atribución UTM end-to-end (NUEVA)

Aportada por el Informe Consolidado (caso Patagon AI: 24× leads, CAC -68%).

Los UTMs viajan **desde el clic hasta el cierre** preservados en:
- Query string del link wa.me (codificado en el `text=`).
- Payload del POST al webhook n8n.
- localStorage del navegador (backup en caso de pérdida).

Implementación de referencia: ver sección 12.4 del Informe Consolidado.

### 3.6 Graceful degradation (Opción C, decisión 25/05/2026)

Si Aurora cae (mantenimiento, incidente, lo que sea) y un formulario falla al POST:

1. **Mostrar mensaje al usuario:** "Servicio temporal no disponible. Por favor escribinos por WhatsApp" + botón wa.me.
2. **Encolar el lead en `localStorage`** del navegador.
3. **Reintentar cada 30 segundos** hasta que el webhook responda 200.
4. Si el usuario cierra el navegador, el lead se pierde (es trade-off conocido).

Patrón verificado del caso Nova Seguros (Uruguay), citado en PDF 2 del Informe Consolidado.

### 3.7 Compliance

**SCVS (Res. SCVS-INS-2019-006):**
- Footer con credencial Insurance Trust Nº 572619 visible (no fine print).
- Sin primas, sin descuentos, sin "el mejor precio".
- Disclaimer reverse solicitation en `/inversion` (productos offshore).

**LOPDP (R.O. Sup. 459, 26 mayo 2021):**
- 17 ítems del Art. 12 en `/privacidad`.
- Consentimiento separado para datos de salud (Art. 4).
- Banner CookieYes (free hasta 100 páginas).
- Borrado seguro real (DELETE + auditoría) si llega solicitud ARCO al webhook.
- SLA 15 días hábiles para solicitudes ARCO (con timer en Aurora).
- Transparencia algorítmica (Art. 12.4): el cotizador NUNCA da rechazos definitivos, solo deriva a Francisco.

**Robots.txt + noindex:**
- Indexable: `/`, `/sobre-mi`, `/seguros/*`, `/inversion`, `/recursos`, `/aseguradoras`, `/contacto`, `/privacidad`, `/terminos`.
- Noindex: `/cotizar/*`, `/gracias`, `/portal/*` (futuro).

### 3.8 Diseño V17 — Brand Book 2026 (fuente única)

Resumen mínimo (extracto operativo en `docs/IDENTIDAD-MARCA.md`):

- **Paleta neutros:** `--bg #08080d` + `--bg2 #0e0e15` + `--cd #14141d` + `--tx #edeae3` (crema, no blanco puro) + `--t2 #9a978f` + `--t3 #6b6860`.
- **Paleta dorados:** `--gd #c9a84c` (CTAs, headings) + `--gl #e8d48b` (hover) + `--gk #a07e2e` (gradientes).
- **Funcionales:** `--gn #4a9e6e` (positivos) + `--bl #4a7fb5` (info) + `--rd #b54a4a` (urgencia).
- **Tipografía:** Cormorant Garamond (display) + Outfit (body) + JetBrains Mono (datos).
- **Self-hosting:** Fontsource. Cero dependencia Google Fonts CDN.
- **CTAs oficiales** (solo 4):
  - Principal: "Agenda tu asesoría gratuita"
  - Secundario: "Conoce nuestros servicios"
  - Carolina: "Cotizar con Carolina →" (USO LIMITADO; solo en su sección dentro de /sobre-mi)
  - Gabriela (chatbot futuro): "¿Dudas? Pregúntale a Gabriela"
- **Botón principal spec:** `background: linear-gradient(180deg, #c9a84c 0%, #a07e2e 100%); color: #08080d; padding: 14px 32px; border-radius: 3px;`.
- **Léxico permitido:** plan, protección, cobertura, inversión, respaldo, blindaje, estrategia, arquitectura financiera, diseño patrimonial.
- **Léxico PROHIBIDO en marketing:** póliza, prima, aseguradora, Insurance Trust, "100% seguro", "ganancia garantizada", "sin riesgo", "vos/tío/che/parcero".

---

## 4. Estructura del proyecto

### 4.1 En la laptop de Francisco (Windows)

```
C:\Users\panch\projects\
├── barreraglobal-infra\         ← Aurora (existente)
├── fbesport-infra\              ← FBE Sport (existente)
└── sitio-bg-infra\              ← Sitio Barrera Global
    ├── CLAUDE.md                ← Reglas para Claude Code en este proyecto
    ├── README.md
    ├── .gitignore
    ├── .githooks/
    │   └── pre-commit           ← gitleaks
    ├── web/                     ← Código Astro del sitio
    │   ├── astro.config.mjs
    │   ├── tailwind.config.js
    │   ├── package.json
    │   ├── public/
    │   ├── src/
    │   │   ├── content/         ← MDX (blog, glosario, productos)
    │   │   ├── components/
    │   │   │   ├── islands/     ← Componentes React (cotizador, calculadora)
    │   │   │   └── *.astro
    │   │   ├── layouts/
    │   │   ├── pages/
    │   │   └── styles/
    │   └── tsconfig.json
    ├── infra/
    │   ├── docker-compose.yml
    │   ├── Dockerfile           ← Multi-stage: build Astro + nginx alpine
    │   ├── nginx.conf
    │   └── caddyfile-snippet.txt ← Bloque a agregar al Caddyfile compartido
    ├── docs/
    │   ├── PLAN-MAESTRO-v2.md   ← ESTE documento
    │   ├── IDENTIDAD-MARCA.md   ← Extracto operativo del Brand Book
    │   ├── PENDIENTES.md        ← Lista viva de cabos sueltos
    │   ├── DECISIONES.md        ← Log de decisiones técnicas
    │   ├── BITACORA.md          ← (deprecado, ahora vive en sección 10 de este doc)
    │   ├── INCIDENTES.md        ← Causas raíz y fixes
    │   ├── hitos/
    │   │   ├── HITO-00-setup-local.md       ← Cerrado 24/05/2026
    │   │   └── HITO-01-infra-vps.md         ← Próximo
    │   └── prompts/
    │       └── HITO-01-runbook-vps.md       ← Guía paso a paso
    ├── backups/
    │   └── scripts/
    │       └── backup-sitio.sh
    └── scripts/
        ├── install-hooks.sh
        └── deploy.sh
```

### 4.2 En el VPS Hostinger

```
/opt/sitio-bg/                   ← Raíz del proyecto en el VPS
├── compose/
│   └── docker-compose.yml       ← Config Docker (1 solo service)
├── web/
│   ├── Dockerfile
│   └── dist/                    ← Build de Astro (output estático)
├── nginx/
│   └── nginx.conf               ← Config nginx alpine
├── logs/
├── backups/
│   ├── scripts/
│   │   └── backup-sitio.sh
│   └── daily/
├── .env                         ← Variables sensibles (NO al repo)
└── CLAUDE.md                    ← Reglas para Claude Code en VPS

/opt/stack/                      ← Aurora (NO TOCAR salvo Caddyfile coordinado)
/opt/fbesport/                   ← FBE Sport (NO TOCAR)
```

### 4.3 En GitHub

- **Repo:** `github.com/fbarrerainversiones/sitio-bg-infra` (privado, ya creado 24/05/2026).
- **Cuenta:** `fbarrerainversiones` (compartida con Aurora y FBE Sport).
- **Branches:** `main` (producción), `dev` (desarrollo), `feature/<nombre>` (features).
- **Workflows:** Lighthouse CI + gitleaks + deploy automático a VPS via SSH.

### 4.4 En Cloudflare

- **Cuenta:** compartida.
- **Zona:** `barreraglobal.com` (ya existe, configurada para Aurora).
- **Registros:** `@` y `www` ya apuntan a `212.85.14.172` con proxy ON.
- **Cambios DNS:** ninguno. El sitio reemplaza el placeholder del Caddyfile actual.

### 4.5 En Docker

- **Red:** `sitio_bg_net` con subnet `172.22.10.0/24`.
- **Containers:**
  - `sitio-bg-web` (nginx alpine) — IP `172.22.10.10`.
  - **Eso es todo.** No hay Postgres propio, no hay Redis propio (decisión 25/05/2026).

---

## 5. Coexistencia con Aurora y FBE Sport

### Mapa mental del VPS

```
VPS Hostinger 212.85.14.172
│
├── Host
│   ├── SSH puerto 58291 (compartido)
│   ├── UFW (compartido, reglas por proyecto con comments)
│   ├── Docker daemon (compartido)
│   ├── Puerto 80/443/tcp → Caddy Aurora (compartido para routing)
│   ├── Puerto 8443/tcp → Caddy FBE Sport
│   └── Backups host (unattended-upgrades, monarx-agent, etc.)
│
├── /opt/stack/                          PROYECTO 1: AURORA
│   ├── Red Docker: stack_net (172.20.10.0/24)
│   ├── Containers: caddy, n8n, n8n-worker, postgres, redis,
│   │               chatwoot-rails, chatwoot-sidekiq, beszel, beszel-agent
│   ├── Bases Postgres: n8n, chatwoot_production, barreraglobal_rag
│   ├── Dominios: n8n.barreraglobal.com, chat.barreraglobal.com,
│   │             beszel.barreraglobal.com, barreraglobal.com (placeholder)
│   └── Estado: productivo, sensible, NO TOCAR sin coordinación
│
├── /opt/fbesport/                       PROYECTO 2: FBE SPORT
│   ├── Red Docker: fbe_net (172.21.10.0/24)
│   ├── Containers: fbesport-caddy, fbesport-wordpress, fbesport-mariadb
│   ├── Dominio: fbesport.com.ec (puerto 8443)
│   └── Estado: productivo, NO TOCAR
│
└── /opt/sitio-bg/                       PROYECTO 3: SITIO BG (en construcción)
    ├── Red Docker: sitio_bg_net (172.22.10.0/24)
    ├── Containers: sitio-bg-web (172.22.10.10)
    ├── Dominio: barreraglobal.com (raíz, reemplaza placeholder)
    └── Routing: via Caddy compartido de Aurora
```

### Tabla de propiedad de recursos

| Recurso | Aurora | FBE Sport | Sitio BG |
|---|---|---|---|
| Filesystem raíz | `/opt/stack/` | `/opt/fbesport/` | `/opt/sitio-bg/` |
| Red Docker | `stack_net` (172.20.10.0/24) | `fbe_net` (172.21.10.0/24) | `sitio_bg_net` (172.22.10.0/24) |
| Container Caddy | `caddy` (compartido) | `fbesport-caddy` (propio) | usa el Caddy compartido |
| Containers propios | 9 | 3 | **1** (sitio-bg-web) |
| Bases Postgres | n8n, chatwoot_production, barreraglobal_rag | (MariaDB propia) | **NINGUNA** |
| Dominios | n8n.barreraglobal.com, chat.barreraglobal.com, beszel.barreraglobal.com | fbesport.com.ec | barreraglobal.com, www.barreraglobal.com |
| Puerto host | 80, 443 | 8443 | ninguno propio |
| Repo Git | `barreraglobal-infra` | `fbesport-infra` | `sitio-bg-infra` |
| Backup destino B2 | `barreraglobal-backups` | (futuro) | `sitio-bg-backups` (a crear) |

### Las 5 superficies de contacto con Aurora

| Superficie | Criticidad | Qué hacer |
|---|---|---|
| Puerto 443 del host | **CRÍTICA** | NO ocuparlo. Routing público va por Caddy compartido. |
| Caddyfile compartido | **CRÍTICA** | Editar SOLO con flujo de 7 pasos (Regla 5). |
| Webhook n8n público | MEDIA | URL `n8n.barreraglobal.com/webhook/lead-form`. Coordinar el endpoint exacto con quien mantiene Aurora antes de Fase 3. |
| UFW del host | MEDIA | Coordinar con Francisco antes de tocar. |
| Backup script | BAJA | Implementar backup propio, NO modificar el de Aurora. |

---

## 6. Integración con Aurora (modelo webhook)

Esta sección reemplaza completamente la "Integración futura con Aurora (widget Chatwoot)" de la v1.

### Modelo de integración

```
┌──────────────────────────────────────────────────────────────┐
│  VISITANTE (barreraglobal.com)                                │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          ▼
              ┌──────────────────────┐
              │ Cloudflare CDN + WAF │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ Caddy compartido     │
              │ (de Aurora)          │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ sitio-bg-web         │
              │ (nginx alpine)       │
              │ HTML estático Astro  │
              └──────────┬───────────┘
                         │
            ┌────────────┴───────────────┐
            │                            │
            ▼                            ▼
   ┌────────────────┐         ┌──────────────────────┐
   │ CTA WhatsApp   │         │ Formulario web       │
   │ wa.me/593XXX   │         │ (cotizador, contacto)│
   │ + UTMs en text │         │                      │
   └────────┬───────┘         └──────────┬───────────┘
            │                            │
            │                            │ POST + payload JSON
            │                            │ con UTMs + consents
            │                            ▼
            │                  ┌──────────────────────┐
            │                  │ n8n.barreraglobal.com│
            │                  │ /webhook/lead-form   │
            │                  │ (Aurora, vía URL     │
            │                  │ pública HTTPS)       │
            │                  └──────────┬───────────┘
            │                             │
            └─────────────────────────────┤
                                          │
                                          ▼
                              ┌──────────────────────┐
                              │ Aurora orquesta:     │
                              │ - Insert en Postgres │
                              │ - Crear conversación │
                              │   en Chatwoot        │
                              │ - WhatsApp template  │
                              │ - Notif Telegram     │
                              │ - Bot AI si fuera    │
                              │   de horario         │
                              └──────────────────────┘
```

### Por qué este modelo (no el widget Chatwoot)

1. **Aurora ya tiene Meta Developer API y TikTok API integrados.** El sitio no necesita duplicar nada.
2. **Patrón Policygenius/Lemonade 2026:** "No chatbots, always real people." Eliminar el widget Chatwoot pegado a la esquina es coherente con la filosofía premium del Brand Book.
3. **Menos peso JavaScript.** Sin widget Chatwoot embebido, el sitio carga 200-400 KB menos por página.
4. **Aislamiento real.** El sitio NO comparte secrets con Aurora. Toda comunicación es por HTTPS público con autenticación por token.

### Spec del webhook (a coordinar con quien mantiene Aurora antes de Fase 3)

**Endpoint:** `POST https://n8n.barreraglobal.com/webhook/lead-form`

**Headers:**
```
Content-Type: application/json
X-Sitio-Token: <token único compartido entre sitio y Aurora>
```

**Payload mínimo:**
```json
{
  "source": "website-form-vida-termino",
  "product": "vida-termino",
  "full_name": "string",
  "phone_e164": "+593...",
  "email": "string|null",
  "consent_general": true,
  "consent_general_at": "2026-05-25T14:30:00Z",
  "consent_health": "boolean|null",
  "consent_health_at": "ISO8601|null",
  "utm_source": "string|null",
  "utm_medium": "string|null",
  "utm_campaign": "string|null",
  "utm_term": "string|null",
  "utm_content": "string|null",
  "landing_page": "/seguros/vida-termino",
  "referrer": "string|null",
  "user_agent": "string",
  "form_payload": {
    "edad": 35,
    "fumador": false,
    "suma_asegurada": 100000,
    "plazo_anios": 20
  }
}
```

**Respuestas esperadas:**
- `200 OK` con `{ "ok": true, "lead_id": "uuid" }` → éxito.
- `400 Bad Request` → payload inválido, mostrar error al usuario.
- `5xx` o timeout → graceful degradation Opción C (mensaje + localStorage + reintentar).

### Atribución UTM end-to-end

Los UTMs entran al sitio por query string (`?utm_source=google&utm_medium=organic&...`) y se preservan:

1. **En el almacenamiento del navegador** (sessionStorage) durante toda la sesión.
2. **Inyectados en el href de todos los links wa.me** al momento del clic (vía JS).
3. **Adjuntos al payload del webhook** cuando el visitante envía formulario.

Implementación de referencia: ver sección 12.4 del Informe Consolidado (`Informe_Consolidado_Barrera_Global.docx`).

### Integración futura con Mateo (agente de citas)

Mateo no está construido todavía. Cuando esté listo (Fase 5), se evaluará si:

- Mateo se integra como segundo webhook desde el sitio (`POST /webhook/agendar-cita`).
- O si Mateo vive como flujo dentro de Aurora y el sitio sigue usando el mismo webhook con `source='website-agenda'`.

Decisión postergada a Fase 5.

---

## 7. Fases del desarrollo

```
┌──────────────────────────────────────────────────────────────────────┐
│                          FASE 0 — SETUP                              │
│  Estado: en curso                                                    │
│  HITO 00 cerrado 24/05/2026                                          │
│  HITO 01 próximo (red Docker + container web)                        │
│                                                                      │
│  Entregables:                                                        │
│  • Proyecto en Claude.ai con knowledge actualizado                   │
│  • Repo GitHub sitio-bg-infra inicializado ✓                         │
│  • Estructura local creada con docs/ poblados ✓                      │
│  • /opt/sitio-bg/ creado en VPS                                      │
│  • Red Docker sitio_bg_net (172.22.10.0/24) creada                   │
│  • Backup B2 bucket creado (sitio-bg-backups)                        │
│  • Gitleaks hooks instalados                                         │
│                                                                      │
│  Gate 0: Validación HTTP 200 de los 5 dominios Aurora.               │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    FASE 1 — MVP DISEÑO + STACK                       │
│  Duración estimada: semana 1-2                                       │
│                                                                      │
│  Entregables:                                                        │
│  • Astro 6.3.8 scaffolded con Tailwind v4.3.0                        │
│  • Sistema de diseño V17/Brand Book implementado:                    │
│    - Tokens CSS (colores --bg, --gd, etc.)                           │
│    - Tipografía self-hosted                                          │
│    - Layout base con header + footer (con Insurance Trust)           │
│  • 4 páginas terminadas:                                             │
│    - / (home con hero "Patrimonio que crece. Capital protegido.")    │
│    - /sobre-mi (Francisco + Carolina + Insurance Trust)              │
│    - /contacto (formulario + WhatsApp + Cal.com placeholder)         │
│    - /privacidad (LOPDP completa, 17 ítems Art. 12)                  │
│  • Dockerfile multi-stage                                            │
│  • docker-compose.yml en /opt/sitio-bg/compose/                      │
│  • Caddyfile compartido modificado con flujo 7 pasos                 │
│  • Schema.org InsuranceAgency + Person válido                        │
│  • Lighthouse mobile ≥95 en home                                     │
│                                                                      │
│  Gate 1: HTTP 200 en barreraglobal.com con sitio nuevo +             │
│  HTTP 200 en los 4 dominios restantes de Aurora.                     │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FASE 2 — 6 PRODUCTOS + COMPLIANCE COMPLETO              │
│  Duración estimada: semana 3-4                                       │
│                                                                      │
│  Entregables — 6 páginas de producto:                                │
│    - /seguros/vida-termino                                           │
│    - /seguros/vida-indexada                                          │
│    - /seguros/salud-nacional                                         │
│    - /seguros/salud-internacional                                    │
│    - /seguros/auto                                                   │
│    - /inversion (con disclaimer reverse solicitation)                │
│  • /aseguradoras con logos (solo carriers con permiso de uso)        │
│  • Términos de uso completos                                         │
│  • Política de cookies con Consent Mode v2                           │
│  • CookieYes instalado                                               │
│  • robots.txt + sitemap.xml + OG tags + Twitter cards                │
│  • Schema FAQPage en glosario y FAQs de producto                     │
│  • Schema Service en cada producto                                   │
│                                                                      │
│  Gate 2: Schema validado en Rich Results Test, política LOPDP        │
│  revisada por abogado especializado (recomendado).                   │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FASE 3 — CONVERSIÓN + INTEGRACIÓN AURORA                │
│  Duración estimada: semana 5-6                                       │
│  Coordinar con quien mantiene Aurora                                 │
│                                                                      │
│  Entregables:                                                        │
│  • Token compartido sitio ↔ Aurora generado y guardado en vault      │
│  • Endpoint /webhook/lead-form configurado en n8n de Aurora          │
│  • Botón WhatsApp flotante con atribución UTM end-to-end             │
│  • Formulario de contacto → webhook n8n funcionando                  │
│  • Cotizador multi-step como isla React:                             │
│    - 3-5 pasos máximo                                                │
│    - Consentimiento general + datos salud SEPARADO                   │
│    - NO mostrar precio                                               │
│    - Graceful degradation Opción C implementado                      │
│  • Calculadora de jubilación como isla React (lead magnet)           │
│                                                                      │
│  Gate 3: Lead de prueba dispara workflow Aurora correctamente.       │
│  Atribución UTM funciona end-to-end (UTM visible en Aurora).         │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FASE 4 — SEO + CONTENIDOS                               │
│  Duración estimada: semana 7-12                                      │
│                                                                      │
│  Entregables:                                                        │
│  • 20-30 artículos pilar y de clúster:                               │
│    - Cluster Vida (8 artículos: temporal vs indexada, beneficiarios) │
│    - Cluster Salud (8 artículos: nacional vs internacional, copagos) │
│    - Cluster Auto (4 artículos: cobertura, deducibles)               │
│    - Cluster Inversión (5 artículos: IUL, PPLI, offshore)            │
│  • Glosario con 50-80 términos                                       │
│  • Google Business Profile Ambato optimizado                         │
│  • Google Search Console + Analytics 4 + Tag Manager + Clarity       │
│  • Optimización imágenes a AVIF + WebP fallback                      │
│  • Lighthouse CI en GitHub Actions con budget de performance         │
│  • Newsletter mensual via Brevo (free hasta 9.000 emails/mes)        │
│  • Backlinks locales                                                 │
│                                                                      │
│  Gate 4: Tráfico orgánico ≥500 sesiones/mes en Search Console.       │
│  Lighthouse mobile ≥95 en todas las páginas indexables.              │
│  CWV "Good" en LCP, INP, CLS en CrUX.                                │
└──────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│              FASE 5 — MATEO + ESCALA                                 │
│  Duración: mes 3+                                                    │
│                                                                      │
│  Entregables:                                                        │
│  • Integración con Mateo (agente de citas)                           │
│  • Casos de éxito en video anonimizados                              │
│  • A/B testing con PostHog self-hosted (si justifica)                │
│  • Microsites por producto cuando supere 100 leads/mes               │
│  • Portal cliente con login (si justifica)                           │
│  • Versión bilingüe ES/EN para captar tráfico expat                  │
│  • Strapi v5 si Francisco quiere CMS gráfico                         │
│                                                                      │
│  Gate 5: 30+ conversaciones/mes vía sitio, 5+ pólizas cerradas       │
│  atribuibles al sitio.                                               │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 8. Gates de validación obligatorios

Cada fase tiene un Gate al final que debe pasarse antes de avanzar. **No avanzar a la fase siguiente sin cumplir el Gate.**

### Gate 0 — Estado del servidor antes de empezar

```bash
ssh hostinger

# 1. Validar HEAD del repo Aurora (debe ser 4eee736 o superior)
cd /opt/stack && git log --oneline -1

# 2. Los 9 containers de Aurora Up
sudo docker ps --format "table {{.Names}}\t{{.Status}}" | \
  grep -E "caddy|n8n|postgres|redis|chatwoot|beszel"

# 3. Caddy SOLO conectado a stack_net
sudo docker inspect caddy --format \
  '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}={{$v.IPAddress}} {{end}}'

# 4. Los 5 dominios públicos en HTTP 200
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com \
  chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done

# 5. Backup automático del día existe con las 3 bases
ls -lh /opt/stack/backups/daily/ | grep "$(date +%Y%m%d)" | \
  grep -E "postgres_|chatwoot_|rag_"

# 6. Espacio disponible >50GB
df -h / | tail -1
```

Si CUALQUIER paso falla: parar, contactar a Francisco antes de avanzar.

**Estado del Gate 0 al 24/05/2026: TODO VERDE.**

### Gate 1 — Después de Fase 1 (MVP en producción)

```bash
# 1. HTTP 200 en el sitio nuevo
curl -s -o /dev/null -w "barreraglobal.com: %{http_code}\n" \
  -I --max-time 15 https://barreraglobal.com

# 2. HTTP 200 en los 4 dominios Aurora restantes
for d in www.barreraglobal.com n8n.barreraglobal.com \
  chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done

# 3. Lighthouse mobile ≥95 (desde laptop)
# npx lighthouse https://barreraglobal.com --view --form-factor=mobile

# 4. Schema válido
# https://search.google.com/test/rich-results?url=https://barreraglobal.com

# 5. Container sitio-bg-web Up healthy
sudo docker ps | grep sitio-bg-web
```

### Gate 2 — Después de Fase 2 (6 productos + Compliance)

```bash
# 1. Las 6 páginas de producto retornan HTTP 200
for p in vida-termino vida-indexada salud-nacional salud-internacional auto; do
  echo -n "/seguros/$p: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 \
    https://barreraglobal.com/seguros/$p
done
echo -n "/inversion: "
curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 \
  https://barreraglobal.com/inversion

# 2. Páginas legales retornan HTTP 200
for p in privacidad terminos cookies aseguradoras; do
  echo -n "/$p: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 \
    https://barreraglobal.com/$p
done

# 3. Sitemap accesible
curl -s https://barreraglobal.com/sitemap-index.xml | head -20

# 4. robots.txt accesible
curl -s https://barreraglobal.com/robots.txt
```

### Gate 3 — Después de Fase 3 (Conversión + Aurora)

```bash
# 1. Endpoint webhook responde correctamente con token válido
curl -X POST https://n8n.barreraglobal.com/webhook/lead-form \
  -H "Content-Type: application/json" \
  -H "X-Sitio-Token: <token>" \
  -d '{"source":"website-test","product":"vida-termino","full_name":"Test","phone_e164":"+593987654321","consent_general":true,"consent_general_at":"2026-05-25T14:30:00Z"}'

# 2. Verificar lead llegó a Aurora (Postgres) y disparó workflow

# 3. UTM end-to-end funcionando
# - curl con UTM
# - hacer click WhatsApp
# - verificar mensaje contiene UTM
# - verificar mensaje llegó a Aurora con UTM preservado
```

---

## 9. Knowledge base del proyecto

Documentos que viven en el proyecto Claude.ai (knowledge base, ordenados por prioridad de lectura):

| # | Documento | Propósito |
|---|---|---|
| 1 | `PLAN-MAESTRO-v2.md` (este) | Identidad, reglas, fases. Primera lectura obligatoria. |
| 2 | `Barrera_Global_Brand_Book_2026.pdf` | Fuente única de identidad visual. |
| 3 | `IDENTIDAD-MARCA.md` | Extracto operativo del Brand Book. |
| 4 | `Informe_Consolidado_Barrera_Global.docx` | Síntesis de las 4 investigaciones independientes. |
| 5 | `informe-servidor-23-mayo-2026.md` | Estado del VPS. |
| 6 | `INVENTARIO-SERVIDOR-PARA-SITIO-WEB-2026-05-23-v2.md` | Reglas detalladas de coexistencia con Aurora. |
| 7 | `briefing-cross-project-fbesport-2026-05-23.md` | Reglas de coexistencia con FBE Sport. |
| 8 | `PENDIENTES.md` (vivo) | Lista actualizada de cabos sueltos. |
| 9 | `DECISIONES.md` (vivo) | Log de decisiones técnicas tomadas. |
| 10 | `INCIDENTES.md` (vivo) | Si algo se rompe, registrar causa raíz + fix. |

### Documentos que NO van al knowledge

- Credenciales, llaves SSH, tokens — gestor de passwords de Francisco.
- Documentos del proyecto Aurora que no aportan al sitio web.
- Documentos del proyecto FBE Sport que no aportan al sitio web.

### Documentos deprecados

- `BG-WEB-PROYECTO-MAESTRO.md` v1.0 (23/05/2026) — reemplazado por este documento.
- `BITACORA.md` separado — ahora vive en sección 10 de este documento.

---


## 10. Registro de Decisiones

> **Decisiones tecnicas (D-XX) y memos (DM-XX) tomadas durante el proyecto.** Esta seccion documenta cada decision importante con su contexto, alternativas evaluadas y rationale. Las decisiones historicas anteriores estan registradas en la bitacora de cada sesion (§12).

### Decisiones tecnicas (D-XX)

**D-18 — Astro 6.3.8 en lugar de Astro 5.x** (26/05/2026)
Al ejecutar `npm create astro@latest` en Sesion 4, npm install descargo Astro 6.3.8 (ultima version estable disponible). En lugar de forzar downgrade a Astro 5, se confirmo Astro 6 como version oficial del proyecto. Diferencias minimas para nuestro caso de uso (sitio estatico + islas React). Actualizado §3.1 del plan maestro.

**D-19 — Solo Aurora publica WhatsApp en el sitio** (Sesion 4)
El numero de WhatsApp publicado en el sitio publico (header, footer, CTAs, footer) es exclusivamente el de Aurora (+593 99 802 7819). El numero personal de Francisco y de Carolina NO se publican. Esto centraliza captacion y permite a Aurora hacer triage inicial antes de derivar al humano correspondiente.

**D-20 — Email LOPDP provisional gmail** (Sesion 4)
Hasta que se configure DNS de `barreraglobal.com` y se cree email institucional `privacidad@barreraglobal.com`, el sitio usa `fbarrera.inversiones@gmail.com` como contacto LOPDP. Decision provisional documentada como pendiente P-04. Pendiente actualizar cuando el email institucional este operativo.

**D-21 — GitHub publico bajo cuenta personal** (Sesion 4)
Repo `github.com/fbarrerainversiones/sitio-bg-infra` publico para transparencia operativa. Sin secretos, sin credenciales, sin datos personales. Configuracion `.gitignore` endurecida (R-39) para evitar commits accidentales de backups o secretos.

**D-22 — Facebook con profile ID numerico** (Sesion 4)
Como Francisco aun no configuro username de Facebook personalizado, los links del footer apuntan al profile ID numerico. Decision provisional hasta configurar `facebook.com/barreraglobal` o similar.

**D-23 — Logo tipografico (no PNG)** (Sesion 4)
El logo del sitio se renderiza como texto Cormorant Garamond (tipografico) en lugar de imagen PNG. Razon: el PNG provisto estaba mal alineado verticalmente. El logo tipografico es mas limpio y permite ajustes finos con CSS. Decision provisional hasta tener logo SVG real (P-30, P-31).

**D-24 — Foto IA aprobada como imagen oficial provisional** (02/06/2026, Sesion 5)
Francisco aprobo la foto retocada con IA como imagen oficial del sitio web. Esta foto se muestra en el hero de la home y eventualmente en `/sobre-mi`. Posible reemplazo futuro con sesion fotografica profesional real (no bloquea lanzamiento, no es urgente).

> **D-25 a D-28 no estan en esta lista:** viven en la bitacora (§12), en las sesiones donde se tomaron — D-25 y D-26 en Sesion 6 (CLAUDE.md como fuente de verdad para Claude Code; sincronizacion obligatoria en 4 lugares) y D-27 y D-28 en Sesion 8 (pagina `/contacto` sin formulario ni backend). Se deja anotado para que nadie asuma que D-24 es la ultima decision tomada.

**D-29 — Logo P3 "Arquitectonica" elegido** (09/08/2026, Sesion 13)
Francisco eligio la propuesta **P3 "Arquitectonica"** (el portico) entre las tres presentadas en la pagina de evaluacion no enlazada (`833fc8a`). La eleccion es **firme y no se reabre**. Lo que queda es la **produccion final**, registrada como **P-52**: convertir el texto a trazados para que el SVG no dependa de la fuente instalada, generar el favicon en los tamanos reales de uso y preparar la aplicacion de marca (horizontal, cuadrada, monograma, fondo claro y oscuro). **Flag de auditoria obligatorio para esa produccion:** el mockup de tarjeta dice "Quito, Ecuador" cuando lo correcto es **AMBATO** (es lo que declaran el JSON-LD y `/privacidad`), y usa el CTA viejo "Agenda tu asesoria" en vez del vigente del manual v2.0. Las dos cosas se corrigen ANTES de generar cualquier pieza derivada. Esta decision **supera a D-23** (logo tipografico provisional) recien cuando P-52 entregue la pieza; hasta entonces el sitio publico sigue con el logo tipografico.

### Decision Memos (DM-XX)

**DM-01 a DM-04** — Decisiones operativas menores tomadas en Sesiones 0-4 (ver bitacora §12 para detalles).

**DM-05 — Email LOPDP gmail provisional** (Sesion 5)
Confirmacion operativa de D-20: hasta cierre de P-04 (DNS institucional), el contacto LOPDP es `fbarrera.inversiones@gmail.com`. Aparece en `/privacidad` seccion 1 y seccion 12.

**DM-06 — Cedula personal NO se publica en /privacidad** (Sesion 5)
La cedula personal de Francisco NO se publica en la pagina de privacidad. El respaldo identificatorio del responsable es: nombre completo + Insurance Trust (broker paraguas) + credencial SCVS personal en tramite. Esto reduce superficie de exposicion personal sin sacrificar transparencia LOPDP.

**DM-07 — Placeholder "credencial SCVS personal en tramite"** (02/06/2026, Sesion 5)
Hasta que Francisco reciba su credencial SCVS personal individual (tramite burocratico, 2-3 meses estimados), el sitio muestra "credencial SCVS personal en tramite" en lugar de un numero. Operacion legitima bajo paraguas de Insurance Trust. NO se publica el numero de credencial del broker (572619) como si fuera personal porque seria atribuir incorrectamente la credencial corporativa al APS individual. Generado por hallazgo H-04 y error E-23.

---

## 11. Hallazgos Criticos

> **Hallazgos descubiertos durante el proyecto que requieren accion correctiva o cambio de planificacion.** Cada hallazgo tiene severidad, accion tomada y referencia a la sesion donde se descubrio.

### H-01 — Politica de Privacidad con 7 huecos legales LOPDP (Sesion 5)

**Severidad:** Alta
**Descubierto en:** Sesion 5, post analisis legal independiente
**Estado:** Pendiente correccion en Sesion 8

La politica de privacidad armada en Sesion 5 (BLOQUE 5) cumple parcialmente Art. 12 LOPDP pero tiene 7 huecos a corregir:

1. Base legal incorrecta para datos sensibles. Dice "interes legitimo" cuando debe ser "consentimiento expreso separado" segun Art. 4 LOPDP.
2. Decisiones automatizadas (Aurora) no estan declaradas. Art. 12 numeral exige informar de la existencia de decisiones automatizadas y elaboracion de perfiles.
3. Faltan 3 derechos del titular: limitacion del tratamiento, derecho a no ser objeto de decisiones automatizadas, derecho a revocar consentimiento en cualquier momento.
4. Datos contacto del responsable incompletos: falta domicilio legal y telefono visible.
5. DPD no esta mencionado (ver H-02).
6. Transferencias internacionales son genericas. Falta anclar la base en Resolucion SPDP-SPD-2026-0004-R.
7. Atribucion erronea de credencial 572619 (ver E-23).

**Accion:** Sesion 8 reescribe politica de privacidad v2 cerrando los 7 huecos.

### H-02 — DPD no designado ni registrado ante SPDP (Sesion 5)

**Severidad:** Media (no critica mientras SPDP no audite)
**Descubierto en:** Sesion 5, post analisis legal
**Estado:** Bloqueado por trámite credencial SCVS personal

Resolucion SPDP-SPD-2025-0028-R obliga a designar Delegado de Proteccion de Datos a:
- Sectores: financiero, seguros, salud, telecomunicaciones, EPS
- Tratamiento de datos sensibles
- Tratamiento de datos de menores

Francisco encaja por DOBLE via: sector seguros + tratamiento datos de salud (cotizaciones vida y salud). Plazo de registro era 31/diciembre/2025. Estamos en mora tecnica desde entonces (5+ meses).

Sin embargo, la SPDP no esta auditando sitios pequenos activamente. El riesgo real de sancion es bajo mientras no haya reclamo formal de un cliente. Cuando Francisco reciba credencial SCVS personal (2-3 meses), se regulariza en 30 min:
1. Documento de auto-nombramiento como DPD
2. Subir al portal SPDP
3. Actualizar credencial real en sitio

Hasta 2029, el DPD no requiere certificacion formal, asi que Francisco puede ser su propio DPD.

**Accion:** Cuando llegue codigo SCVS personal, ejecutar P-34 (registro DPD ante SPDP).

### H-03 — Sitio antiguo con Meta Pixel sin compliance LOPDP (Sesion 5)

**Severidad:** Media
**Descubierto en:** Sesion 5
**Estado:** A decidir en Sesion 9

Francisco tiene un sitio web anterior con Meta Pixel instalado y activo. Captura datos comunes (no sensibles segun LOPDP). El pixel rastrea sin banner de cookies ni consentimiento informado, lo cual es infraccion tecnica LOPDP.

Riesgo practico actual:
- Probabilidad de auditoria SPDP a sitios pequenos: <5%
- Probabilidad de reclamo de usuario: <1%
- Si pasa: notificacion + 30-60 dias para regularizar antes de multa

Decision a tomar en Sesion 9:
- [A] Apagar sitio antiguo cuando barreraglobal.com este online
- [B] Migrar contenido util a archive subdominio
- [C] Agregar banner cookies basico al sitio antiguo

**Accion:** P-37 + P-40 (Sesion 9 decide destino sitio antiguo).

### H-04 — Decisiones automatizadas (Aurora) no declaradas en privacidad (Sesion 5)

**Severidad:** Media
**Descubierto en:** Sesion 5
**Estado:** Pendiente Sesion 8

Aurora es asistente de IA con WhatsApp que responde, perfila y enruta conversaciones. Art. 12.4 LOPDP exige declarar la existencia de decisiones automatizadas. La politica actual menciona a Aurora pero no la declara formalmente como "tratamiento automatizado".

**Accion:** Sesion 8 declara formalmente: "Aurora es asistencia automatizada. NO toma decisiones con efectos juridicos. Usuario puede oponerse y solicitar atencion 100% humana."

### H-05 — Credencial 572619 atribuida erroneamente a Francisco (E-23)

**Severidad:** Alta (resuelto)
**Descubierto en:** Sesion 5, post analisis legal
**Estado:** RESUELTO en Sesion 5 (commit 451121f + 3f77744)

El numero 572619 que aparecia como credencial personal de Francisco es en realidad la credencial corporativa de Insurance Trust (broker paraguas). Atribuirla a Francisco como APS individual es regulatoriamente incorrecto.

**Accion tomada:**
- Removido 572619 de Footer.astro, index.astro, privacidad.astro
- Reemplazado por "credencial SCVS personal en tramite"
- Decision DM-07 registrada
- Pendiente P-35: cuando llegue credencial real, actualizar el placeholder

---
## 12. Bitácora viva

> **Esta sección se actualiza al cierre de cada sesión de trabajo.** Formato cronológico inverso (lo más reciente arriba).


### Sesión 14 — 10 de agosto de 2026 (día 1 del sitio público)

**Ventana:** lunes 10 de agosto de 2026, mañana y mediodía
**Gap desde sesión anterior:** ~14 horas (Sesión 13 cerró la noche del 09/08)
**HEAD al cierre:** el último commit de este cierre documental (ver `git log`); la sesión arrancó desde `be196c5`
**Resultado:** **murieron los tres ítems abiertos del lanzamiento** y el sitio entró a su día 1 sin gates. Se construyó P-54 F1 completa **sin desplegarla**: rigió veda de infraestructura compartida todo el día.

> **Nota sobre el conteo de commits:** los commits de P-54 F1 son **8** (`be196c5..69f83bd`), no 7. Seis de código y dos de documentación. El número está leído de `git rev-list`, no recordado — y corrige de paso un «7» que circuló durante la propia sesión.

#### Objetivo de la sesión

Construir F1 de P-54, y aprovechar el día para cerrar lo que quedaba colgando del lanzamiento.

#### Lo que se cerró

1. **P-51 PROBADO → R-19. Se murió el último gate operativo.** La casilla `privacidad@barreraglobal.com` estaba configurada desde el 09/08 pero sin prueba, y el switch a público se había ejecutado con el ítem abierto por decisión explícita de Francisco. El 10/08 se probó: Cloudflare Email Routing reporta **1 recibido / 1 entregado** y el correo llegó al Gmail de Francisco a las **11:53**. Evidencia: captura de Francisco. **Aterrizó en Spam** y se le aplicó «No es spam». Se cierra igual, porque lo que el ítem exigía era demostrar que el canal **recibe**, y recibe; la carpeta de destino es reputación de dominio (SPF/DKIM/DMARC) y queda anotada como cabo operativo. Con esto, la política de privacidad ya no promete por escrito un plazo de 15 días sobre una dirección sin probar.
2. **P-56 APROBADO → R-21. El Manual pasa a v3.1 FINAL.** Francisco aprobó **misión, visión y valores**, que se habían entregado marcados como PROPUESTA. El manual pasó de **v3.0** a **v3.1 FINAL** y se **entregó al manager de marketing**. Los tres bloques dejan de ser propuesta y pasan a fuente única de voz para reels, bio, papelería y F4.
3. **Capa comercial del símbolo, sellada.** El mismo manual v3.1 fija la lectura de negocio del pórtico: **basamento = método**, **columnas = vida y salud**, **frontón = inversión**. Es narrativa **oficial** y queda anotada en P-54 para que la respete cualquier pieza futura. Se deja escrito el desfase honesto: la sección F1 construida hoy usa la lectura **arquitectónica**, que no la contradice pero tampoco la enuncia. Alinear ambas es decisión de copy de Francisco.
4. **P-55 EJECUTADO → R-20 (`fd8316b`).** Francisco decidió **SÍ**: `web/public/logo.svg` lleva el mismo cuadrado redondeado del favicon (`rx=22`, `#08080d`), porque es el archivo que declara el JSON-LD de `InsuranceAgency` y el que Google puede levantar para un panel de fondo blanco, donde el dorado daba ~2:1 de contraste. La **geometría no se tocó**: los 9 trazos conservan coordenadas, grosor y `viewBox`. `favicon.svg` tampoco. **No está en producción**: se hornea en la imagen, así que espera el rebuild.

#### P-54 F1 — «El pórtico que se construye» (8 commits, `be196c5..69f83bd`)

Nueva sección `#metodo` del home, entre el hero y `#productos`: el símbolo de la marca se dibuja por etapas mientras el visitante baja.

- **Cero JavaScript nuevo, y por lo tanto CSP intacta.** El disparo lo da el `IntersectionObserver` que **ya existía** en `Layout.astro`: los bloques de texto llevan `.reveal`, el observer les pone `.visible`, y el CSS lo traduce a los trazos con **`:has()`** desde el ancestro común. El observer no puede observar los trazos porque el SVG es `sticky` —entra una vez y no se mueve—, así que el reloj del relato son los textos. Cruce de hashes **2 ↔ 2** exacto, sin huérfanos en ninguna dirección, **ningún hash cambiado**.
- **Geometría verbatim de `logo.svg`.** Los 9 trazos oficiales, mismas coordenadas. Único cambio de forma: cada trazo pasó de `<line>`/`<polyline>` a `<path>`, letra por letra, porque `pathLength` está garantizado en `<path>` en todos los motores. **Las columnas son 4, no 2**: el contenido aprobado decía «2 trazos verticales» y la geometría oficial manda.
- **Doble guardia sobre el estado oculto:** `prefers-reduced-motion: no-preference` **y** `@supports selector(:has(*))`. Si falta cualquiera de las dos, el estado base es el **pórtico completo y estático**: degrada a la pieza terminada, nunca a una pieza rota.
- **Auditoría adversarial, con autocorrección.** Se corrió una auditoría de cinco lentes (geometría, cascada CSS, layout móvil, JS/CSP, accesibilidad y copy) con refutadores por hallazgo. Las lentes de geometría, cascada y JS/CSP no encontraron nada. **El error de método quedó registrado:** se leyó el journal de la auditoría cuando todavía faltaban refutadores, se reportó «los cinco hallazgos cayeron», y el resultado final traía **uno confirmado**. La corrección se emitió y se aplicó. Lección operativa: un journal a medio llenar no es un resultado.
- **Dos fixes que salieron de la QA, no del diseño.** (a) `stroke-dashoffset: 1` lo emitía el minificador como `1px` —por spec idéntico, porque el escalado por `pathLength` se aplica **después** de resolver la unidad, pero es la propiedad de la que cuelga todo el efecto—, así que pasó a viajar en una **custom property**, que el minificador no puede tipar. (b) En móvil el visor se pegaba a `5.5rem` (88px), que es el alto del header de **desktop**; el móvil mide 78.4px, y esos ~9.6px eran una rendija por donde se veía pasar el texto, porque el header es `bg-bg/85` y no tapa. Ahora la banda se mete **por debajo** del header (**`top-16`**) en vez de calzar su alto exacto. Se agregó además una regla para **viewports bajos**: bajo 35rem de alto el visor se suelta (`position: static`), lo que arregla de una el teléfono en horizontal angosto (header + banda se comían el área de lectura) y el ancho ≥768px, donde entra por la rama desktop y un símbolo cuadrado de 320px desbordaba una columna de 286px.
- **Riesgo residual, dicho sin adorno:** la sección **no se pudo ver en un navegador** en la sesión que la construyó. Se verificó todo lo verificable sin render —geometría, cascada, las 26 utilidades Tailwind generadas, HTML emitido, hashes, aritmética del header—. Lo que falta es exactamente la verificación visual.

#### Veda de Aurora — respetada

El proyecto Aurora abrió el 10/08 su **ventana de promoción a producción**, con **veda total de infraestructura compartida** (Caddy, red Docker, Postgres, Redis, VPS) hasta que Francisco declare el cierre. **No se tocó nada**: la sesión fue enteramente local —componente, CSS, build, commits y push a GitHub—. El deploy quedó **en cola**, y no es opcional saltearlo: tanto F1 como P-55 viven en archivos que se hornean en la imagen, así que un `git pull` en el VPS **no alcanza** (R-44).

#### Pendiente al cierre

1. **Verificación visual LOCAL de F1 por Francisco**, móvil primero — y con ella la **decisión sobre los rótulos** «01 · Basamento», «02 · Columnas», «03 · Dintel y arquitrabe», «04 · Frontón», que salieron de los nombres de etapa del contenido aprobado pero no del texto aprobado propiamente dicho. Sacarlos es borrar dos líneas.
2. **Veda levantada por Francisco.**
3. **Deploy de F1 + P-55** (van juntos, mismo rebuild).
4. **Espejo del knowledge.**
5. **Confirmación formal del handoff al manager de marketing, con hora**, que es lo que arranca el reloj de 48 h.
6. **F2 sigue esperando el MP4** de Francisco.

---

### Sesión 13 — 8 y 9 de agosto de 2026 (EL SWITCH A PÚBLICO)

**Ventana:** sábado 8 y domingo 9 de agosto de 2026
**Gap desde sesión anterior:** ~3 días (Sesión 12 cerró el 05/08)
**HEAD al cierre:** el último commit de este cierre documental (ver `git log`); la sesión arrancó desde `0620d52`
**Resultado:** **EL SITIO ES PÚBLICO.** `barreraglobal.com` y `www.barreraglobal.com` sirven el sitio real (`reverse_proxy sitio-bg-web:8080`). Staging sigue vivo y con candado. Se pagó el precio de dos incidentes, ninguno con impacto en Aurora.

> **Nota de honestidad sobre las fechas:** los **7 commits** de esta sesión llevan fecha **09/08/2026** según `git log`; el 08/08 no dejó commits en el repo. Detalle relacionado: el comentario del fix de la 404 en `infra/nginx.conf` está fechado *08/08* mientras su commit (`8c7c18a`) es del 09/08 a las 16:51. Se deja anotado en vez de emparejarlo a la fuerza.

#### Objetivo de la sesión

Cerrar lo que faltaba para publicar —la 404 servida de verdad y el gate legal— y **ejecutar el switch**: que `barreraglobal.com` dejara de mostrar el cartel y empezara a servir las 12 páginas.

#### Cronología resumida

1. **La 404 que nginx nunca servía (`8c7c18a`).** La página premium existía en el build desde Sesión 10, pero `infra/nginx.conf` no tenía **ninguna** directiva `error_page`: el 404 interno del `try_files` moría en la página empotrada de nginx. Fix: `error_page 404 /404.html;` a nivel `server`, **sin** el prefijo `=` para que el status siga siendo 404 y no un soft-404. Aplicado con **rebuild** de la imagen (R-44) y verificado en el navegador. Cerró **P-42** como **R-17** (`fa0a4a2`).
2. **Cierre legal (`6772a51`, `35e4138`).** El abogado **aprobó las tres páginas legales** sobre las páginas renderizadas en staging, como estaba previsto. Con eso, el recuadro «DISCLAIMER OPERATIVO» de `/privacidad` —que anunciaba «pendiente de visto bueno escrito»— dejó de ser cierto y se retiró; retiro quirúrgico, sin tocar una letra del texto aprobado (13 secciones intactas, 0 apariciones de «visto bueno» o «dictamen» en las 12 páginas). Cerró **P-39** como **R-18**. El respaldo escrito de una línea quedó **solicitado por WhatsApp**; el dictamen formal, por criterio del propio abogado, solo se requiere ante una auditoría LOPDP.
3. **Email Routing configurado.** La regla `privacidad@barreraglobal.com` quedó creada, activa y con destino cargado, pero **en estado «Sincronizando»** y sin prueba de recepción. Francisco **decidió lanzar igual**, con **P-51 en curso**. El ítem NO se cierra hasta que un correo enviado desde fuera llegue de verdad.
4. **SW-0 limpio.** El chequeo previo al switch pasó sin observaciones.
5. **Switch v1 — FALLIDO (INCIDENTE E-27).** El Caddyfile se editó con `sed -i`. El archivo está bind-monteado como **archivo individual** y Docker resuelve ese mount por **inodo**: `sed -i` escribe un temporal y lo renombra encima, así que el host quedó con un inodo nuevo y el container siguió leyendo el viejo. Consecuencia: `caddy validate` validó la config **vieja** y `caddy reload` recargó la config **vieja**, todo reportando éxito. El síntoma delator fue `/no-existe` devolviendo **HTTP 200** — el cartel respondía a cualquier ruta. **Rollback inmediato** de Francisco.
6. **Diagnóstico por inodos.** `ls -i` en el host devolvió **524375** y el mismo archivo visto dentro del container devolvió **528303**. Dos inodos distintos: prueba directa de que el container leía un fantasma. De aquí sale **R-48**, que amplía la regla de mayo «nunca `mv` sobre el Caddyfile» (§2, Regla 5) — **`sed -i` es un `mv` disfrazado**, y por eso se coló por debajo de una prohibición que ya existía.
7. **Switch v2 — EXITOSO.** Edición **inode-preserving** (`sed` a temporal + `cp` encima, que conserva el inodo), `docker restart caddy` para re-enganchar el mount y validación previa del candidato vía `docker cp`. Todo verde. En esa validación previa apareció **E-28**, el bug del auditor: se corrió `caddy validate` sobre `/tmp/cf.check` **sin `--adapter caddyfile`**, así que falló por sintaxis sin mirar el contenido y el restart siguió adelante sin red de seguridad efectiva. Salió bien porque la config estaba bien, no porque algo la hubiera revisado. De ahí **R-50**.
8. **Rollback accidental (NEAR-MISS NM-11).** Con el switch v2 ya verde, se pegó también el bloque de **ROLLBACK** que el runbook traía marcado como «solo si falla». El sitio público volvió al cartel viejo durante **~10 minutos**, hasta re-aplicar la configuración buena, que quedó definitiva alrededor de las **18:40**. Cero daño permanente; efecto real, sí. De ahí **R-49**: los bloques condicionales solo se ejecutan si su condición se cumple, y la condición se confirma en voz alta antes de pegar.
9. **Verificaciones finales.** **Gate 0 5/5**, HTML del sitio real en el raíz de `barreraglobal.com`, `/no-existe` devolviendo un **404 de verdad** (el mismo chequeo que había desenmascarado el switch v1) y **staging intacto con su candado** respondiendo **401**.
10. **Elección de logo (D-29).** Francisco eligió la propuesta **P3 «Arquitectónica»** (el pórtico) entre las tres presentadas (`833fc8a`, página de evaluación no enlazada). La producción final queda como **P-52**.

#### Métricas honestas

```
Ventana:                 8 y 9 de agosto de 2026
Commits en el repo:      7 en el dia (8c7c18a -> 833fc8a) + los de este cierre documental
Fecha real de commits:   todos 09/08/2026; el 08/08 no dejo commits
Intentos de switch:      2 (v1 fallido por inodo, v2 exitoso)
Rollbacks:               2 — 1 planificado (tras el v1) + 1 ACCIDENTAL (tras el v2)
Errores nuevos:          2 (E-27 inodo del bind-mount, E-28 validacion sin --adapter)
Near-miss nuevos:        1 (NM-11 bloque condicional pegado de mas)
Reglas nuevas:           3 (R-48, R-49, R-50)  -> total 50
Pendientes cerrados:     2 (P-42 -> R-17, P-39 -> R-18)
Pendientes nuevos:       2 (P-52 logo P3, P-53 basic_auth)
Decisiones nuevas:       1 (D-29 logo P3 elegido)
Caida del sitio:         0 — nunca dejo de responder; hubo ~10 min sirviendo el cartel viejo
Impacto en Aurora:       0 — Gate 0 5/5 al cierre
Paginas publicadas:      12
```

#### Commits del día

**09/08:** `8c7c18a` (fix 404), `fa0a4a2` (cierre P-42), `6772a51` (retiro del disclaimer), `35e4138` (cierre P-39), `833fc8a` (propuestas de logo), más los commits de este cierre documental (errores, pendientes, bitácora, CLAUDE.md v2.4, informe de continuidad).

#### Estado al cierre

- **SITIO PÚBLICO en `barreraglobal.com` y `www.barreraglobal.com`**, sirviendo las 12 páginas reales vía `reverse_proxy sitio-bg-web:8080`.
- **Staging vivo y protegido** en `staging.barreraglobal.com` (basicauth + `X-Robots-Tag: noindex`), verificado respondiendo 401.
- **Aurora intacta.** Gate 0 5/5. El downtime acumulado de Aurora en todo el proyecto sigue siendo el de Sesión 9 (~5 min).

#### Pendientes abiertos al cierre

1. **P-51 — correo `privacidad@` probado.** Configurado, sincronizando, **sin prueba de recepción**. Es el pendiente número uno: el sitio ya publica esa dirección como canal de derechos con plazo de 15 días.
2. **Baseline nuevo del Caddyfile** pendiente de registrar (falta el `ls -l` de Francisco).
3. **P-52 — producción del logo P3**, con las dos correcciones del mockup: «Quito» → **Ambato** y el CTA viejo → el del manual v2.0.
4. **P-53 — `basicauth` → `basic_auth`**, cuando se vuelva a tocar el Caddyfile, con método inode-safe.
5. **Espejo del knowledge** con los snapshots nuevos.

#### Reflexión de cierre

El sitio se publicó, y las dos lecciones del día son la misma lección vista de frente y de perfil. El `sed -i` enseñó que una prohibición escrita —«nunca `mv` sobre el Caddyfile», de mayo— no protege si el mecanismo prohibido tiene otro nombre: el reemplazo de inodo entró por la puerta de atrás y consiguió que **todos** los comandos mintieran a la vez, validando y recargando un archivo que ya nadie estaba editando. Lo que lo delató no fue ninguna herramienta sofisticada sino un chequeo tonto: una URL inventada devolviendo 200 donde tenía que devolver 404. El rollback accidental enseñó lo opuesto y complementario: un runbook bien escrito también es peligroso si se pega de corrido, porque la mitad de sus bloques existen para el caso que **no** ocurrió. Y el bug del auditor queda escrito con nombre y apellido, porque una validación que falla y deja pasar al paso siguiente es peor que no tener validación: da la ilusión de red donde no hay red.

#### Addendum — Noche del lanzamiento (09/08, 19:00 a 22:10)

La sesión no terminó con el switch. Lo que pasó después:

1. **El sitio dejó de usar el logo de Astro.** Se produjo la fase 1 de la identidad **P3** elegida en **D-29** y se desplegó: `favicon.svg` con el pórtico sobre cuadrado redondeado `#08080d`, `logo.svg` limpio, `apple-touch-icon` de 180 a sangre, `favicon-32.png`, `favicon.ico` regenerado y el componente `Portico.astro` integrado en header y footer. Commits **`d38da29`**, **`5f9e65d`**, **`3d84f01`** y **`20f40ac`**, más el **rebuild** de la imagen. Dos fantasmas cerrados de paso: el favicon por defecto de Astro, que se estaba sirviendo en la pestaña de cada visitante desde que el sitio se hizo público, y el campo `logo` del JSON-LD, que apuntaba a un `logo.svg` inexistente en las 12 páginas desde que se escribió el schema.
2. **Verificado en producción, no en el repo:** `favicon.svg` **200**, `logo.svg` **200**, container **healthy**, **Gate 0 5/5**.
3. **Lección de caché, la del día:** el **Purge de Cloudflare se ejecutó ANTES** de desplegar los assets, así que el borde volvió a cachear lo viejo y siguió entregando el favicon de Astro durante ~**2 h 35 min** (18:40 a 21:15) aunque el origen ya servía el nuevo. **El Purge va siempre DESPUÉS del deploy de assets cacheables**, y la verificación se hace en incógnito. Aplica a `favicon.*`, `logo.svg`, `og-default.png` e `/images/`, todos con `expires` largo en `infra/nginx.conf`. Queda anotada en **P-52**.
4. **Manual de Marca v3.0 entregado** por el auditor. **Vive fuera del repo.** Trae misión, visión y valores en estado **PROPUESTA**, explícitamente pendientes del veredicto de Francisco: es la capa de la que cuelga todo el copy futuro y no la aprueba un auditor. Alta de **P-56**.
5. **Arquitectura de experiencia visual definida** para el home, en cuatro fases, registrada como **P-54**: F1 «el pórtico que se construye» (SVG animado por scroll, **CSS puro y cero JavaScript**, lo que significa cero hashes CSP nuevos), F2 video hero de 15-25 s en loop sin audio y bajo 8 MB con `poster`, F3 loops ambientales por página de producto, y F4 avatar HeyGen **solo para reels**, con guiones auditados por las 4 puertas y **sin debutar nunca en el sitio**. El principio que ordena las cuatro: la geometría es **la oficial del repo**, no una redibujada para animar.
6. **Alta de P-55:** recuadro oscuro opcional en `logo.svg` para el panel de Google, donde el dorado sobre blanco queda deslavado. Una línea de código; lo que falta es la decisión.

**Pendientes de mañana, en orden:** purge #2 y verificación del favicon en incógnito · aviso a la sesión de Aurora · correo `privacidad@` probado, que es lo que cierra **P-51** · veredicto de misión/visión/valores (**P-56**) · prompt de F1 del pórtico animado (**P-54**) · handoff al manager con su reloj de 48 h y los reels · espejo del knowledge al cierre.

---

### Sesión 12 — 3 al 5 de agosto de 2026 (publicación: rama `publicacion-v1`, v3 legal y staging completo)

**Ventana:** lunes 3 al miércoles 5 de agosto de 2026 (distribuida en 3 días)
**Gap desde sesión anterior:** ~6 días (Sesión 10-11 cerró el 28/07)
**HEAD al cierre:** ver el commit de este cierre documental en `git log` (parte de `e921dc8`)
**Resultado:** **STAGING COMPLETO Y NAVEGABLE** — 12 páginas, política de privacidad v3 implementada verbatim, frases observadas por el abogado retiradas, candado de staging regenerado y bug de navegación muerto. El sitio sigue **NO público**: los gates son P-39 (visto bueno **escrito** del abogado) y P-51 (correo `privacidad@` probado).

#### Objetivo de la sesión

Dejar el sitio en condiciones de pasar a público: cerrar los links legales rotos, retirar los marcadores `[PENDIENTE: ...]` visibles, incorporar el dictamen legal, y dejar staging sirviendo exactamente lo que verá el visitante para que Francisco y el abogado lo revisen sobre el sitio real y no sobre un documento.

#### Cronología resumida

1. **03/08 — rama `publicacion-v1`.** Se abrió rama propia para no tocar `main` hasta tener el conjunto completo. Se retiraron los marcadores `[PENDIENTE: ...]` de las 5 páginas de producto (`b485140`), se crearon `/terminos` y `/cookies` v1 (`cd501fd`, `6b106e0`) y se cerró **P-43** repuntando el enlace LOPDP que daba 404 (`faa00cf`). Paquete SEO para la publicación: `/privacidad` indexable (`daab630`), forma del canonical unificada sin barra final (`3e5fa8c`) y `robots.txt` + `sitemap.xml` (`6cf7758`).
2. **04/08 — dictamen legal verbal → v3.** El abogado dio su dictamen de forma **verbal**. Se transcribió a `docs/legal/POLITICA-PRIVACIDAD-V3-2026-08-03.md` (`398b039`) y de ahí se implementó **verbatim** en `/privacidad` (`65b3dd4`): los textos legales del sitio **se transcriben, no se redactan**. Se retiraron del sitio las frases observadas por riesgo SCVS (`4ec2cac`), se agregó el aviso informativo de cookies técnicas al footer —línea permanente, no banner, porque el sitio no instala cookies propias ni almacenamiento y por tanto no hay nada que consentir— (`dc72ec8`), se creó la `og-default.png` para la vista previa al compartir (`f64d53c`) y se fusionaron los dos enlaces del footer que apuntaban al mismo destino (`4cee453`).
3. **05/08 AM — merge a `main`.** Verificación previa (ambas ramas coincidiendo con origin, tree limpio), merge `--no-ff` → **`340c6cb`**: 15 commits, 17 archivos, +1437 / −247, sin conflictos. Build 12/12 y cruce CSP 2↔2 verificados **antes** del push. La rama `publicacion-v1` se conservó a propósito.
4. **05/08 PM — deploy a staging.** El VPS venía desde `b09b10e` (Sesión 9): el pull fue grande, **50 commits, 33 archivos, +4118 / −482**, hasta `340c6cb`. Rebuild obligatorio de la imagen (la config de nginx y los hashes CSP viven **dentro** de ella).
5. **La "guerra del candado" — INCIDENTE (E-26).** Ninguna clave abría staging. La causa no era la contraseña: la línea de `basicauth` del Caddyfile había quedado con el usuario y **sin hash**, porque en un episodio de pegar salidas de terminal de vuelta a la terminal se re-ejecutó un `sed` con la variable del hash **vacía**. Se detectó con comparación visual ANTES/DESPUÉS, se reparó con un `sed` de línea completa y verificación ocular (hash del archivo == hash generado), y se confirmó el acceso **desde el navegador**. De aquí salieron **R-45** (las salidas de terminal jamás vuelven a una terminal) y **R-46** (el navegador es el juez oficial de credenciales: todos los intentos por `curl` dieron falsos negativos).
6. **Bug de navegación muerto (E-25).** Al navegar a `/seguros/vida-termino` el navegador terminaba en `staging.barreraglobal.com:8080` con `ERR_CONNECTION_RESET`: el `301` de barra final que emite `try_files` se armaba como URL absoluta con el **puerto interno 8080**, y el Caddy no reescribe `Location`. Fix con `absolute_redirect off` + `port_in_redirect off` (**`68f5e7b`**). En la misma tanda, cambio de la línea de credencial del footer pedido por Francisco (**`e921dc8`**).
7. **Gate 0 verde en todo momento.** Ninguno de los dos incidentes tocó Aurora.

#### Métricas honestas

```
Ventana:                 3 al 5 de agosto de 2026 (3 dias)
Commits de la rama:      15 (b485140 -> f6be080)
Merge a main:            340c6cb (--no-ff, 17 archivos, +1437 / -247, sin conflictos)
Fixes post-merge:        2 (68f5e7b nginx, e921dc8 footer)
Paginas:                 10 -> 12 (/terminos y /cookies nuevas)
Build:                   12/12 en cada verificacion
CSP:                     cruce 2<->2 exacto, cero huerfanos, ningun hash cambio
Pull del VPS:            b09b10e -> 340c6cb (50 commits, 33 archivos, +4118 / -482)
Incidentes:              2, ambos solo-staging (E-26 candado, E-25 navegacion)
Impacto en Aurora:       0 — Gate 0 verde en todo momento
Reglas nuevas:           4 (R-44 a R-47)
Errores nuevos:          2 (E-25, E-26) + 1 near-miss (NM-10)
```

#### Commits del día

**03/08:** `b485140`, `cd501fd`, `6b106e0`, `faa00cf`, `daab630`, `3e5fa8c`, `6cf7758`, `ed440b6`.
**04/08:** `f64d53c`, `4cee453`, `398b039`, `65b3dd4`, `4ec2cac`, `dc72ec8`, `f6be080`.
**05/08:** `340c6cb` (merge), `68f5e7b` (fix nginx), `e921dc8` (fix footer), más los commits de este cierre documental (errores, bitácora, pendientes, CLAUDE.md v2.3, informe de continuidad).

#### Estado al cierre

- **Staging COMPLETO y navegable** en `https://staging.barreraglobal.com`, con candado nuevo y funcionando, sirviendo las 12 páginas reales.
- `main` con las 12 páginas, build verde y CSP cuadrado. Rama `publicacion-v1` conservada.
- Sitio **aún NO público**. El switch no se tocó en esta sesión.

#### Pendientes abiertos al cierre

1. **Visto visual final de Francisco** sobre el staging completo.
2. **Og-image** creada y desplegada, pero **falta el visto** de Francisco (P-48).
3. **P-51 — correo `privacidad@barreraglobal.com`:** la v3 lo publica como canal de derechos con plazo de 15 días y **la casilla todavía no existe**. Configurarlo sin probar recepción NO cuenta como cerrado.
4. **P-39 — visto bueno ESCRITO del abogado.** El dictamen fue verbal y ya está implementado; falta el respaldo escrito. Dentro de este mismo gate quedan dos cosas para él: la pregunta sobre el aviso de cookies, y la **inconsistencia de redacción del "trámite"** — las páginas de presentación ya no mencionan que la credencial personal está en trámite, pero `/privacidad` y `/terminos` sí. No se tocaron a propósito: están bajo su revisión y la unificación la decide él.

#### Reflexión de cierre

La sesión valió menos por el código que por dos lecciones caras. La del candado no fue un problema de contraseña sino de disciplina: pegar la salida de una terminal de vuelta a la terminal re-ejecutó un comando con las variables ya perdidas y escribió basura en el archivo más delicado del VPS **sin arrojar un solo error**. De ahí salió R-45, y R-46 la acompaña porque durante horas los `curl` mintieron mientras el navegador decía la verdad. La del `:8080` enseñó lo mismo desde otro ángulo: el síntoma señalaba a Astro o al Caddy, y la causa estaba en dos defaults de nginx que nadie había mirado. Las dos comparten raíz — creerle al síntoma en vez de leer el archivo real — y las dos se cerraron el mismo día sin que Aurora se enterara.

---

### Sesión 10-11 — 22 al 28 de julio de 2026 (Fase 3 estructural y merge a `main`)

**Ventana:** 22 al 28 de julio de 2026
**Gap desde sesión anterior:** ~3 días (Sesión 9 cerró el 19/07)
**HEAD al cierre:** `ffcf293` (CLAUDE.md v2.2), sobre el merge `4981b93`
**Resultado:** el sitio pasó de **4 a 10 páginas**. Fase 3 estructural fusionada a `main`.

**Bitácora detallada:** esta sesión tiene reporte propio y extenso en **`docs/REPORTE-SESION-10.md`** (bloques A-B, decisiones **D1** a **D6**, QA pre-merge e inventario de tildes). Aquí queda solo el registro de cierre para que la bitácora no tenga huecos.

Lo esencial:

- **5 páginas de producto** creadas sobre `ProductLayout.astro` (`/seguros/vida-termino`, `/seguros/vida-indexada`, `/seguros/salud-nacional`, `/seguros/salud-internacional`, `/inversion`), más `/404`.
- **D1:** `/seguros/auto` retirada. La decisión de Sesión 2 de "6 productos" queda superada.
- **D3:** revisión de español de Ecuador — 419 correcciones de tildes, inventariadas en `docs/INVENTARIO-TILDES_2026-07-25.md`. Efecto colateral: cambió el hash CSP del toggle del menú móvil (`sha256-IpuDn/OD…` → `sha256-aOPTArMu…`), porque las tildes entraron en sus `aria-label`.
- **D6 → R-43:** hallazgo de la deuda de capas CSS. Las reglas base de enlaces de `global.css` viven fuera de toda `@layer` y ganan a cualquier utilidad `text-*` de Tailwind v4 sobre un `<a>`, sin importar la especificidad. Mitigación vigente: color inline en botones dorados. Fix de raíz diferido a **P-47**.
- **Merge `4981b93`** (`--no-ff`, rama `sesion-10-estructura`): 22 archivos, +2368 / −330, sobre la base `27ae9a2`. Cerrado con `ffcf293` (CLAUDE.md v2.2).
- **Cero incidentes.** El VPS no se tocó en toda la sesión, así que staging siguió sirviendo la versión de 4 páginas de Sesión 9 hasta el deploy de la Sesión 12.

---

### Sesión 9 — 19 de julio de 2026 (deploy a staging)

**Fecha:** domingo 19 de julio de 2026
**Gap desde sesión anterior:** ~3 días (Sesión 8 cerró el 16/07)
**HEAD al cierre:** el commit de CLAUDE.md de este cierre (ver `git log`)
**Resultado:** **DEPLOY A STAGING COMPLETADO** — runbook `docs/DEPLOY-STAGING-runbook.md` ejecutado 8/8 (B0→B7). `https://staging.barreraglobal.com` vivo, protegido con basicauth + `X-Robots-Tag: noindex`. Visto visual de Francisco con screenshot del sitio vivo. Gate 0 final 5/5 en 200.

#### Objetivo de la sesión

Construir y desplegar por primera vez la imagen Docker del sitio en el VPS, detrás del Caddy compartido, en un staging protegido — sin tocar Aurora salvo el Caddyfile (flujo de 7 pasos) y la conexión de red del caddy (D1).

#### Cronología resumida

1. **Pre-vuelo GO** corrido **dos veces** desde la laptop (repo, build, consistencia a–e de artefactos, DNS, Gate 0, sonda SSH). Sin defecto bloqueante.
2. **Coordinación inter-proyectos** con el Claude de Aurora: hold total de operaciones de Aurora + baseline del Caddyfile (**5562 bytes**) como cross-check antes de tocar nada.
3. **B0–B3 limpios:** Gate 0 PRE verde, repo en el VPS, **build real de la imagen en 23 s** (imagen **77.5 MB**), container `sitio-bg-web` healthy en `172.22.10.10` sin puertos al host.
4. **INCIDENTE B4 v1 (contenido):** `docker network connect` sin `--gw-priority` movió el default gateway del caddy → 3 dominios de Aurora (barreraglobal.com, www, beszel) a `000` ~5 min. Gate 0 inmediato lo detectó; rollback (`network disconnect`) en ~5 min; recuperación total verificada dos veces.
5. **Diagnóstico + fix:** `ip route` confirmó el baseline `default via 172.20.10.1`; el flag `--gw-priority` existe en Docker 29.4.3. **B4 v2** con `--gw-priority=-100` → ruta por defecto conservada (verificada al instante), Gate 0 5/5, wget interno OK.
6. **B4 v2 → B7 verdes:** Caddyfile con el flujo de 7 pasos (5562 → **5776 bytes**), staging vivo (401 sin clave / 200 con clave / noindex), Gate 0 POST 5/5.

#### Métricas honestas

```
Runbook:                8/8 bloques
Incidentes contenidos:  1 (B4 v1, ~5 min — vs 45,5 h del 522 en mayo)
Degradacion parcial:    3 dominios ~5 min durante B4 v1; cero perdida fuera de eso
Rollbacks ejecutados:   1 (primer rollback real del proyecto)
Caddyfile:              5562 -> 5776 bytes
Imagen Docker:          77.5 MB, build 23 s
Aurora perdida datos:   0
```

#### Commits del día

- `60a3fac` — prep deploy (snippet Caddy + verificación CSP + runbook).
- `b09b10e` — NM-07 + R-40 (falso negativo de grep al probar ausencia).
- `1a91f4e` — fix(runbook): B4 con `--gw-priority` tras el incidente contenido.
- `d2c209d` — docs(errores): E-24 + NM-08/09 + reconciliación de contadores.
- (Este cierre) — bitácora Sesión 9 + actualización de CLAUDE.md (hashes en `git log` tras el push).

#### Reconciliaciones

- **Repo privado → público:** seguía PRIVADO pese a D-21; se accionó "Make public" tras doble auditoría de secretos. D-21 por fin efectiva.
- **Credenciales de staging:** verificadas y mantenidas **fuera del repo** (hash bcrypt generado en el VPS).

#### Estado al cierre

- Fase 1 al **100%** + **STAGING DESPLEGADO** y vivo.
- `caddy` en **dos redes** (stack_net con default gateway + sitio_bg_net con `--gw-priority=-100`); `sitio-bg-web` up; staging con candado (basicauth + noindex).
- Sitio **aún no público**.

#### Pendientes

1. **P-39 — revisión legal humana ANTES del pase a PÚBLICO** (quitar basicauth/noindex). Es el **gate** del próximo hito.
2. `basicauth` → `basic_auth` al pase a público (hoy `basicauth` funciona pero emite warning de deprecado).
3. **P-42 / P-43 / P-44** vigentes.
4. **Fase 3** — páginas de productos.

#### Reflexión de cierre

El deploy salió, y lo más valioso fue cómo se manejó el único tropiezo: el flip del default gateway en B4 v1 pudo ser otro 522, pero el Gate 0 inmediato y un rollback de un comando lo cerraron en ~5 min sin pérdida de datos. La lección quedó grabada como E-24 + R-41 y el runbook ya lleva el fix (`--gw-priority` + verificación de `ip route`), así que un re-deploy no repite el incidente.

---

### Sesión 8 — 14 al 16 de julio de 2026 (cierre de Fase 1: /sobre-mi, /contacto, privacidad v2 y paquete Docker)

**Ventana:** 14 al 16 de julio de 2026 (distribuida en 3 días)
**Gap desde sesión anterior:** ~5 semanas (último trabajo formal 05/06/2026, Sesión 6)
**HEAD al cierre:** `acdea1d`
**Nota de numeración:** la Sesión 7 parcial (05/06) quedó absorbida dentro de esta sesión con el commit `09cabc7`; no existe entrada de Sesión 7 independiente.

#### Objetivo de la sesión

Cerrar Fase 1 al 100%: completar las páginas `/sobre-mi` y `/contacto` que quedaron pendientes, endurecer la política de privacidad (H-01), sacar del repo un documento con cédula que no debía estar ahí, y preparar el paquete Docker de deploy con nginx endurecido. Todo el trabajo se hizo vía Claude Code con prompts CoT (R-45).

#### Logros principales — los 6 commits reales (hashes verificados contra `git log`)

En orden cronológico ascendente (del más antiguo al más reciente):

**1. `09cabc7` — Página `/sobre-mi` + corrección de navegación del Header**

Se construyó la página `/sobre-mi` y se corrigieron los anchors de navegación del Header. Este commit cierra la parte de Fase 1 que la Sesión 7 parcial (05/06) había dejado abierta.

**2. `28c543b` — Página `/contacto` sin formulario (D-27 / D-28)**

Página `/contacto` sin formulario ni backend, con link desde el Header. Se registraron las decisiones D-27 y D-28. Coherente con "no procesar datos en Fase 1".

**3. `43a1420` — Blindaje del `.gitignore` tras sacar del repo un documento con cédula**

Se detectó y removió del repo un documento LEGAL-Y-COMPLIANCE perteneciente a otro proyecto (Aurora) que contenía una cédula personal. Se endureció el `.gitignore` para que documentos de ese tipo no puedan volver a entrar al repo público.

**4. `9416505` — Privacidad v2: 4 huecos LOPDP cerrados con resoluciones SPDP reales**

Se cerraron 4 de los huecos LOPDP identificados en H-01, apoyándose en resoluciones SPDP reales (no inventadas). Avance concreto sobre el hallazgo H-01.

**5. `53a309c` — Paquete Docker con nginx endurecido para deploy**

Paquete Docker con nginx unprivileged non-root, puerto interno 8080, `HEALTHCHECK` y headers de seguridad. **La validación fue estática y local: no se construyó la imagen en Docker todavía.**

**6. `acdea1d` — Header sticky con z-index real (z-sticky → z-50)**

El header sticky no tenía z-index efectivo porque usaba la clase `z-sticky`, que es inválida (no existe en la configuración de Tailwind). Se reemplazó por `z-50`, que sí genera z-index real.

#### Nota de corrección de registro

Notas previas de trabajo citaban avances que no corresponden al historial real. Se dejan corregidas aquí para que ninguna sesión futura arranque con datos falsos:

- **Hashes fantasma `0caf39e` y `ce9dc22`:** fueron planeados pero **nunca se materializaron**. No existen en el repo (verificado con `git cat-file -t`, que responde "fatal: Not a valid object name"). Toda referencia previa a ellos es inválida.
- **No hubo "encendido de Tailwind":** el import `@import "tailwindcss";` ya estaba commiteado desde antes en `web/src/styles/global.css:31`. En esta sesión no se activó Tailwind; ya estaba activo.
- **El fix real del header** no fue tocar Tailwind sino reemplazar la clase inválida `z-sticky` por `z-50` (commit `acdea1d`).

#### Reglas que funcionaron

- **R-45:** todo cambio de esta sesión se hizo vía Claude Code con prompts CoT (Chain of Thought). Trazabilidad limpia commit a commit.
- **Protocolo DETENTE:** atrapó DOS mensajes de commit inexactos antes de que llegaran al historial público. Sin ese protocolo, los hashes fantasma y descripciones erróneas habrían quedado grabados en `origin/main`.

#### Métricas de la sesión

```
Ventana:                        14 al 16 de julio de 2026 (3 días)
Commits creados:                6 (09cabc7 → acdea1d)
Push a GitHub:                  6 exitosos
HEAD al cierre:                 acdea1d
Páginas nuevas:                 2 (/sobre-mi, /contacto)
Huecos LOPDP cerrados:          4 (avance sobre H-01)
Fase 1:                         100% (cerrada)
Mensajes de commit corregidos:  2 (protocolo DETENTE)
Hashes fantasma depurados:      2 (0caf39e, ce9dc22 — nunca existieron)
Aurora downtime:                0 minutos
```

#### Estado al cierre

- HEAD en `acdea1d`, sincronizado con `origin/main`.
- Working tree limpio.
- Fase 1 cerrada al 100%: home + privacidad v2 + `/sobre-mi` + `/contacto`.
- Paquete Docker listo en el repo, pero **aún no construido** en el VPS (validación local estática).
- Sitio sin deploy todavía. Siguiente hito: STAGING protegido en el VPS.

#### Pendientes inmediatos (para la próxima sesión, en orden)

1. **DEPLOY A STAGING protegido en el VPS** con protocolo Gate 0 de Aurora antes y después. El Caddy compartido debe enrutar a `sitio-bg-web:8080` (puerto interno del nginx endurecido).
2. **Construcción real de la imagen Docker en el VPS** — la validación local fue estática, sin Docker corriendo.
3. **P-39:** revisión legal humana antes del deploy PÚBLICO.
4. **P-46:** links legales del footer en la página 404.
5. **P-47:** optimizar la foto `francisco-barrera.jpg` (551 KB).
6. **Decisiones pendientes de Francisco:** sección bio del home y video del hero.

#### Reflexión de cierre

Fase 1 quedó cerrada al 100% con las dos páginas que faltaban y con la privacidad endurecida. Lo más valioso de la sesión no fue el código sino la disciplina de registro: el protocolo DETENTE frenó dos mensajes de commit inexactos antes de tocar el historial público, y la depuración de los hashes fantasma (`0caf39e`, `ce9dc22`) evita que futuras sesiones citen commits que nunca existieron. El paquete Docker está listo pero sin construir: el próximo paso real es el deploy a STAGING con el protocolo Gate 0 de Aurora, sin excepción.

---

### Sesión 6 — viernes 05 de junio de 2026 (sincronización y cierre administrativo)

**Hora inicio:** ~16:00 H Ecuador
**Hora cierre:** ~22:00 H Ecuador
**Duración real:** ~6 horas (con pausas)
**Gap desde sesión anterior:** 3 días (último trabajo 02/06/2026)

#### Objetivo de la sesión

Cerrar formalmente el ciclo administrativo de Sesión 5 que quedó incompleto el 02/06 (no se hizo commit final ni se sincronizó el knowledge) + actualizar la infraestructura de Claude Code con referencias a los documentos clave y las reglas operativas.

#### Logros principales

**1. Commit final de Sesión 5 (commit `e97155f`)**

Se subieron al repo los 3 documentos nuevos generados el 02/06 que quedaron sin commitear:
- `docs/ESTADO-GENERAL-PROYECTO.md` (475 líneas, 22 KB)
- `docs/DIAGRAMA-FLUJO-PROYECTO.md` (691 líneas, 49 KB)
- `docs/ERRORES-Y-APRENDIZAJES.md` v2.0 (509 líneas, 31 KB)

Más actualizaciones de:
- `docs/PLAN-MAESTRO-v2.md` (v2.1 con Astro 6.3.8, secciones 10/11/13 nuevas, bitácora 6 sesiones)
- `docs/PENDIENTES.md` (606 líneas con P-34 a P-40 + R-08 a R-14)

Total: 5 archivos, 2179 insertions, 49 deletions, pusheado a `origin/main`.

**2. Limpieza completa del knowledge de Claude.ai**

Auditoría completa del knowledge del proyecto reveló 16 archivos con 7 obsoletos y 2 desactualizados. Acción tomada:

- **Eliminados (7):** `ERRORES-Y-APRENDIZAJES (1).md`, `ERRORES-Y-APRENDIZAJES.md` v1.0, `CONTINUIDAD.md`, `PROCESOS-COMPLETOS.md`, `FLUJOGRAMA-2026-06-01.md`, `PLAN-EJECUCION-2026-06-01.md`, `ESTADO-ACTUAL-2026-06-01.md`
- **Reemplazados (2):** `PENDIENTES.md` (vieja 453 líneas → nueva 607), `PLAN-MAESTRO-v2.md` (vieja 1117 líneas → v2.1 con 1473)
- **Resultado:** 9 archivos limpios sin duplicados (Brand Book, Informe, Identidad, Plan Maestro v2.1, Pendientes nueva, Errores v2.0, Estado, Diagrama, HITO 01 runbook)
- **Capacidad usada:** 6% del proyecto

**3. Actualización de CLAUDE.md a v2.0 (commit `167b734`)**

El `CLAUDE.md` del repo estaba en v1.0 con contenido desactualizado (Fase 0, Astro 5.x, repo privado) y CERO referencias a los documentos clave del proyecto. Se reemplazó por v2.0:

- 13 KB / 288 líneas (era 5.4 KB / 109 líneas)
- 7 menciones a `ERRORES-Y-APRENDIZAJES.md`
- 3 menciones a `PLAN-MAESTRO-v2.md`
- 37 reglas R-XX inline (era 5)
- 5 hallazgos H-XX listados
- Stack actualizado a Astro 6.3.8
- Política de errores y near-miss documentada
- Checklist de inicio de sesión

Asegura que Claude Code (CLI) al arrancar lea OBLIGATORIAMENTE los documentos clave y respete las 39 reglas operativas.

#### Errores documentados en la sesión

**E-24 (nuevo):** Copy-Item descarga archivo equivocado cuando hay varios con mismo nombre en Downloads. El navegador renombra el nuevo con "(1)" cuando ya existe uno con el nombre original. Generó copia del archivo viejo de otro proyecto (20.7 KB) en lugar del nuevo CLAUDE.md generado (13 KB). Detectado por validación de contenido con regex antes de commitear. Rollback usando backup `.bak` generado previamente (cumplió R-39).

**Regla nueva R-40:** Al copiar archivos desde Downloads, validar SIEMPRE: (a) tamaño del archivo origen antes de copiar, (b) fecha de modificación reciente, (c) si hay duplicados con "(1)", usar el path con paréntesis explícito.

**E-25 (nuevo, observado):** Cierres de PowerShell durante sesión por pegado de scripts grandes con here-strings y triple-backticks. Patrón recurrente desde Sesión 5 (E-10 ya documentado). Solución adoptada: generar archivos grandes con tool `create_file` de Claude del chat y entregarlos como descargables en lugar de scripts inline.

#### Decisiones tomadas

**D-25:** El CLAUDE.md del repo es la fuente de verdad para Claude Code. Cualquier cambio en reglas operativas o documentos clave debe reflejarse en CLAUDE.md vía nuevo commit + push.

**D-26:** Sincronización obligatoria en 4 lugares: knowledge Claude.ai + repo local Windows + GitHub origin/main + CLAUDE.md del repo. Si alguno desincronizado, alertar antes de actuar.

#### Métricas de la sesión

```
Duración real:                  ~6 horas (con pausas)
Commits creados:                2 (e97155f + 167b734)
Push a GitHub:                  2 exitosos
Archivos modificados en repo:   6 (5 docs + CLAUDE.md)
Insertions totales:             2462 líneas
Deletions totales:              153 líneas
Errores nuevos documentados:    2 (E-24, E-25)
Reglas nuevas:                  1 (R-40)
Cierres de PowerShell:          ~3 (sin pérdida de datos por disciplina .bak)
Aurora downtime:                0 minutos
Re-trabajo:                     ~20 min (descarga equivocada CLAUDE.md)
Decisiones nuevas:              2 (D-25, D-26)
```

#### Estado al cierre

- HEAD en commit `167b734`, sincronizado con `origin/main`
- 10 commits totales en `main` desde inicio del proyecto
- Working tree clean (los `.bak` están ignorados por gitignore)
- Knowledge limpio con 9 archivos vivos
- CLAUDE.md v2.0 propagando reglas a Claude Code
- Sincronización 100% entre knowledge / repo / GitHub / CLAUDE.md

#### Pendientes inmediatos (para Sesión 7)

- **P-12:** página `/sobre-mi` extendida con bio profesional
- **P-13:** página `/contacto` con form provisional (sin backend en Fase 1)
- Cierre formal de Fase 1 al 100%

#### Reflexión de cierre

La disciplina con `.bak` antes de cada modificación nos salvó dos veces en esta sesión: una con el archivo equivocado de CLAUDE.md, y otra con la validación de contenido por regex antes de commitear. La regla R-39 (revisar git status antes de add) y R-22 (verificar contenido antes de modificar) demostraron su valor real.

El knowledge ahora tiene 9 archivos coherentes sin duplicados, listos para que futuras sesiones de Claude lean información consistente. El CLAUDE.md v2.0 garantiza que Claude Code también respete las mismas reglas al operar localmente.

Fase 1 al 95%. Solo faltan `/sobre-mi` y `/contacto` (Sesión 7) para cerrar Fase 1 completa.

---

### Sesión 5 — 01 y 02 junio 2026 (Fase 1 Día 2, BLOQUES 0-6 completos)

**Contexto de arranque:** retomo Sesion 5 tras gap de 5-6 dias por visita familiar. Validar entorno post-gap antes de seguir.

**Bloques ejecutados:**

**BLOQUE 0 — Pre-vuelo (01/06/2026)**
- Entorno validado: PowerShell, Node v22.x, npm 11.x, repo limpio, working tree clean
- Git status confirmado: branch main, sincronizado con origin
- Confirmado que Sesion 4 quedo cerrada con commits a19e153, 17ff694, 15a214d

**FIX URGENTE E-21/E-22 — Bug botones invisibles (01/06/2026)**
- E-21 reabierto: el bug de botones de WhatsApp aparece visualmente en incognito tambien (no era extension Chrome como inicialmente diagnosticamos)
- Investigacion CSS: Tailwind v4 con `@theme inline` + arbitrary value `text-[#hex]` NO genera utility class
- Solucion: usar inline style `style="color: #hex"` en los botones
- Commit: e5c777c (fix(buttons): inline style color en botones WhatsApp para garantizar legibilidad)
- Error E-22 registrado: "Tailwind v4 + arbitrary value en text-[#hex] no genera utility"

**BLOQUE 4 — Home dinamica con foto (01/06/2026)**
- Foto IA generada y aprobada como imagen oficial (D-24)
- Home reescrita completamente con: hero personalizado + 3 productos (Vida/Salud/Inversion) + bio + contacto
- Animaciones CSS puras (sin librerias adicionales) con IntersectionObserver vanilla JS
- Hover effects + smooth scroll + foto integrada con marco dorado + glow effect
- Fix scroll-mt-24 para evitar overlap con header sticky al hacer anchor navigation
- HTML balanceado validado al 100%
- Commit: 9edd7d5 (feat(home): BLOQUE 4 - home dinamica con foto + animaciones + 3 productos)

**BLOQUE 5 — Pagina /privacidad LOPDP (01/06/2026)**
- Pagina /privacidad creada con los 17 items obligatorios del Art. 12 LOPDP
- Insurance Trust mencionado como broker paraguas
- Disclaimer revision legal pendiente (P-07) incluido
- DM-05: email gmail provisional confirmado
- DM-06: cedula personal NO se publica
- Decision tomada de NO incluir pasarela de pago (R-19, decision firme)
- Sin precios, sin promesas (R-13, R-14 firmes)
- Commit: 8b531e9 (feat(privacidad): BLOQUE 5 - pagina /privacidad LOPDP Art. 12 completa)

**BLOQUE 6 — Cierre tecnico (02/06/2026)**
- PASO 1: npm run build exitoso (5.5s, 72 archivos, 1.81 MB total, 2 paginas)
- PASO 2: Lighthouse Performance 99/95/100/100 promedio 98.5
- PAUSA temporal por consulta legal externa (IA analisis, no abogado humano todavia)

**Hallazgos criticos descubiertos en Sesion 5 (post consulta legal):**
- H-01: Politica privacidad con 7 huecos LOPDP (Sesion 8 corrige)
- H-02: DPD no designado (bloqueado por credencial SCVS personal en tramite)
- H-03: Sitio antiguo con Meta Pixel sin compliance (Sesion 9 decide)
- H-04: Decisiones automatizadas Aurora no declaradas (Sesion 8 corrige)
- H-05/E-23: Credencial 572619 atribuida incorrectamente a Francisco (RESUELTO)

**Acciones correctivas de Sesion 5:**
- Removido 572619 de Footer.astro, index.astro, privacidad.astro
- Reemplazado por "credencial SCVS personal en tramite"
- Commit fix: 451121f (con backup .bak commiteado accidentalmente)
- Commit corrector: 3f77744 (limpieza backup + .gitignore endurecido R-39)

**Decisiones y memos registrados en Sesion 5:**
- D-24: Foto IA aprobada como imagen oficial provisional
- DM-05: Email LOPDP gmail confirmado provisional
- DM-06: Cedula personal NO se publica en /privacidad
- DM-07: Placeholder "credencial SCVS personal en tramite" hasta llegue real
- R-38 nueva: Cruzar analisis legal con fuentes independientes antes de cerrar compliance
- R-39 nueva: Antes de `git add .`, revisar `git status --short` y excluir `.bak` manualmente

**Cierre Sesion 5:**
- 7 commits totales: a19e153, 17ff694, 15a214d, e5c777c, 9edd7d5, 8b531e9, 451121f, 3f77744 + commit final de docs
- Repo limpio, .gitignore endurecido con `*.bak.*`
- Lighthouse 98.5/100 promedio en build local
- Sitio completo en localhost listo para Sesion 6 (pagina /sobre-mi extendida)

**Proximo paso (Sesion 6):** Construir pagina /sobre-mi extendida con bio en 6-8 parrafos, foto en grande, trayectoria, formacion, valores, mencion a Carolina, mencion a Insurance Trust como paraguas. Estimado: 2-3 horas.

---

### Sesión 4 — 26 mayo 2026 (Fase 1 Día 1, BLOQUES 1-3 completos)

**Contexto de arranque:** primera sesion oficial de construccion del sitio. Despues de Sesion 3 (HITO 01 cerrado), arrancamos el desarrollo del codigo.

**Bloques ejecutados:**

**BLOQUE 1 — Scaffold inicial**
- `npm create astro@latest` ejecutado, descargo Astro 6.3.8 (no 5 como esperabamos)
- Decision D-18: aceptar Astro 6 como version oficial del proyecto
- Instalado: Astro 6.3.8 + Tailwind v4.3.0 + React 19.2.6 + Fontsource
- Fonts self-hosted: Cormorant Garamond + Outfit + JetBrains Mono Variable
- UTF-8 sin BOM enforced
- E-19 mitigado: npm timeout en Ecuador con `npm config set fetch-timeout 120000`
- Commit: a19e153 (chore: scaffold inicial Astro 6 con Tailwind v4 y React 19)

**BLOQUE 2 — Sistema de diseno Brand Book**
- Tokens CSS aplicados: paleta V17 (`#08080d` base + `#c9a84c` gold + `#fafaf7` off-white)
- Tipografias: Cormorant para headings, Outfit para body, JetBrains Mono para codigo
- `tokens.css` con CSS variables: `--color-bg`, `--color-tx`, `--color-gold`, etc.
- `global.css` con base styles, animations utilities, scroll-mt utilities
- E-20 resuelto: Tailwind v4 + arbitrary value `text-[#hex]` con `@theme inline` no genera utility -> usar inline style cuando sea necesario
- Commit: 17ff694 (feat(design): sistema de diseno Brand Book aplicado)

**BLOQUE 3 — Layout + Header + Footer + componentes**
- Layout.astro con SEO completo: meta tags + 3 JSON-LD (Person, InsuranceAgent, Organization)
- Header.astro sticky con logo tipografico (D-23) + navegacion + CTA WhatsApp Aurora
- Footer.astro con 4 columnas: Marca + Contacto + Compliance + Social
- Decision D-19: solo Aurora publica WhatsApp en el sitio (no Francisco ni Carolina)
- Decision D-20: email LOPDP gmail provisional `fbarrera.inversiones@gmail.com`
- Decision D-21: GitHub publico en `github.com/fbarrerainversiones/sitio-bg-infra`
- Decision D-22: Facebook profile ID numerico (sin username configurado todavia)
- Decision D-23: logo tipografico Cormorant (PNG estaba mal alineado)
- Logo.astro componente reutilizable con variantes
- Commit: 15a214d (feat(layout): header + footer + componentes de marca aplicados)

**Cierre Sesion 4:**
- 3 commits pusheados a origin/main
- Repo configurado correctamente con `.gitignore` para Node + Astro + sistema
- Sitio basico navegable en localhost:4321 (pendiente: paginas con contenido real)
- Estructura del proyecto:
  - `web/package.json` con dependencias confirmadas
  - `web/src/styles/tokens.css` (4.6 KB) y `global.css` (7.3 KB)
  - `web/src/layouts/Layout.astro` (5.1 KB)
  - `web/src/components/Logo.astro` + `Header.astro` (6.3 KB) + `Footer.astro` (9.4 KB)
- Sin commits a deploy todavia (Sesion 12 hara deploy a produccion)

**Proximo paso (Sesion 5):** Arrancar BLOQUES 4-6: home dinamica con copy real + pagina /privacidad LOPDP + cierre tecnico con build + Lighthouse.

---
### Sesión 3 — 25 mayo 2026 (HITO 01 ejecutado, infraestructura base en VPS)

**Quién:** Francisco (operación VPS manual via SSH) + Claude (chat de auditoría externa)

**Qué se hizo:**

- Reboot coordinado del VPS para aplicar kernel update pendiente (deuda técnica de 6 días resuelta).
  - Kernel anterior: 6.8.0-111-generic.
  - Kernel nuevo activo: 6.8.0-117-generic.
  - Downtime real del VPS: ~11 minutos (estimación inicial era 3 min, ajustado como lección operativa).
- Gate 0 PRE-REBOOT: VERDE.
  - 5 dominios productivos HTTP 200.
  - 12 containers Up (Aurora + FBE Sport, todos healthy donde aplica).
  - Caddy SOLO en stack_net=172.20.10.10.
- Gate 0 POST-REBOOT: VERDE.
  - Aurora resurgió intacta tras el downtime.
  - Cero errores en journalctl del boot.
  - "Reboot pendiente" eliminado del estado del sistema.
- Ejecutado runbook `docs/prompts/HITO-01-runbook-vps.md` completo, paso a paso, con auditoría chat externa entre cada paso.
- PASO 2: Creada estructura `/opt/sitio-bg/` con 7 subcarpetas (`backups/{daily,scripts}`, `compose`, `logs`, `nginx`, `web`). Ownership `francisco:francisco` en todo.
- PASO 3: Creada red Docker `sitio_bg_net`.
  - Subnet: `172.22.10.0/24`.
  - Gateway: `172.22.10.1`.
  - Labels: `proyecto=sitio-bg`, `propietario=barreraglobal`.
  - ID: `0236b80bde2d...`.
  - Sin containers conectados todavía (correcto, eso es Fase 1).
  - Aislamiento verificado: Caddy de Aurora sigue SOLO en `stack_net`.
- PASO 4: Creado `/opt/sitio-bg/CLAUDE.md` operativo (3.215 bytes, UTF-8 sin BOM, 81 líneas). Contiene las reglas operativas para futuras sesiones de Claude Code en el VPS.
- PASO 5: Creado `/opt/sitio-bg/.env` vacío con `chmod 600` (580 bytes, 22 líneas). Solo `francisco` puede leer/escribir.
- PASO 6: Gate 0 POST-FINAL: VERDE.
  - Aurora sin afectación.
  - FBE Sport sin afectación.
  - 3 redes Docker coexistiendo (`stack_net`, `fbe_net`, `sitio_bg_net`).
  - `/opt/` con los 3 proyectos sin colisiones.
- Aprendizajes operativos de la sesión:
  - El reboot del VPS Hostinger tarda 5-10 minutos en volver a aceptar SSH (no 2-3 como se estimaba). Estimación actualizada para futuras sesiones.
  - Al pegar bloques de comandos en SSH, copiar SOLO el bloque (sin texto del chat anterior). Hubo un accidente operativo a las 17:08 donde se pegaron múltiples bloques juntos; bash tiró decenas de "command not found" pero sin daño (los errores fueron benignos). Aprendizaje fijado como regla operativa.
  - `sudo -i` no es necesario para los pasos del HITO. Mejor `sudo` por comando individual para que el ownership de los archivos creados sea correcto.
- Aclaración registrada: el usuario VPS es `francisco`, no `panch` como decía el runbook original. El runbook funciona igual porque solo era cosmético, pero conviene actualizar en una próxima edición del archivo `docs/prompts/HITO-01-runbook-vps.md`.

**Qué quedó pendiente:**

- Actualizar `docs/prompts/HITO-01-runbook-vps.md` para reflejar usuario `francisco` (cambio cosmético, no urgente).
- Crear bucket Backblaze B2 `sitio-bg-backups` (al inicio de Fase 1, cuando haya contenido para respaldar).
- Arrancar Fase 1 (MVP diseño + stack Astro 5.x).

**Próximo paso concreto:**

- Sesión nueva (mañana o cuando Francisco decida) → arrancar Fase 1.
- Scaffolding del proyecto Astro 5.x en `/web/` del repo local.
- Implementar sistema de diseño V17 / Brand Book (tokens CSS, tipografía self-hosted, layout base).
- 4 páginas base de Fase 1: `/`, `/sobre-mi`, `/contacto`, `/privacidad`.
- Build local + container Docker + modificar Caddyfile compartido (con flujo 7 pasos).

### Sesión 2 — 25 mayo 2026 (integración Brand Book + Informe Consolidado)

**Quién:** Francisco + Claude (chat de planificación)

**Qué se hizo:**

- Auditoría completa del **Brand Book Barrera Global 2026** (25 páginas) recibido el 25/05/2026.
- Auditoría completa del **Informe Consolidado Barrera Global** (síntesis crítica de 4 investigaciones independientes).
- Auditoría completa de los 3 PDFs de investigación que sustentan el Informe Consolidado.
- Resolución de **5 contradicciones** entre el documento maestro v1 y los nuevos documentos:
  - WhatsApp: Aurora maneja todo, sitio solo "apunta" vía webhook + links wa.me.
  - Postgres: REVERTIDO Opción B. Sitio sin Postgres propio. Lead va al embudo de Aurora con campo `source`.
  - CRM: fuera del scope de este proyecto.
  - Productos: 6 confirmados (vida-termino, vida-indexada, salud-nacional, salud-internacional, auto, inversion).
  - Dominio: barreraglobal.com (raíz), reemplaza placeholder actual.
- Decisión sobre graceful degradation: **Opción C** (mensaje + localStorage + reintentar).
- Decisión sobre Carolina: **co-asesora con presencia limitada** (solo /sobre-mi + link a redes, sin CTA propio).
- Decisión sobre Insurance Trust: **solo en footer legal y /sobre-mi**. Prohibido en piezas de marketing.
- Eslogan **definitivamente resuelto**: "Patrimonio que crece. Capital protegido." + descriptor "Arquitectura Financiera".
- **Brand Book 2026** confirmado como **fuente única de verdad** para todo lo visual.
- Generación de este documento `PLAN-MAESTRO-v2.md` que reemplaza al v1.

**Qué quedó pendiente:**

- Generar `docs/IDENTIDAD-MARCA.md` con extracto operativo del Brand Book.
- Generar `docs/PENDIENTES.md` con cabos sueltos consolidados.
- Generar `docs/prompts/HITO-01-runbook-vps.md` con guía paso a paso.
- Subir Brand Book PDF al knowledge del proyecto Claude.ai.
- Subir este `PLAN-MAESTRO-v2.md` al knowledge del proyecto Claude.ai.
- Eliminar del knowledge el `BG-WEB-PROYECTO-MAESTRO.md` v1.0 (queda deprecado).
- Commitear los nuevos `.md` al repo `sitio-bg-infra`.
- Confirmar con quien mantiene Aurora la spec del webhook `/webhook/lead-form` antes de Fase 3.
- Datos externos sin cambios: lista de carriers, autorización marca digital Insurance Trust, email institucional.

**Próximo paso concreto:**

- Generar `docs/IDENTIDAD-MARCA.md` (BLOQUE 3 del plan del día).
- Generar `docs/PENDIENTES.md` (BLOQUE 2 del plan del día).
- Generar `docs/prompts/HITO-01-runbook-vps.md` (BLOQUE 4 del plan del día).
- Si Francisco mantiene energía, ejecutar HITO 01 con runbook.

### Sesión 1 — 24 mayo 2026 (Fase 0 arrancada, Gate 0 pasado, setup local listo)

**Quién:** Francisco + Claude (chat de planificación)

**Qué se hizo:**

- Resolución del problema legal de credencial SCVS: Francisco opera bajo Insurance Trust (Cred. SCVS Nº 572619) hasta que llegue su credencial personal (esperado finales julio 2026).
- Decisión técnica firme: Postgres propio del sitio (Opción B) en container `sitio-bg-postgres` dentro de `sitio_bg_net`. **NOTA: esta decisión fue REVERTIDA en la Sesión 2 del 25/05/2026.**
- Carpeta local creada: `C:\Users\panch\projects\sitio-bg-infra\` con `CLAUDE.md` (5568 bytes) y `.gitignore` (318 bytes), ambos UTF-8 sin BOM verificado.
- Git inicializado en main. Primer commit: `67372b8`.
- Instalación de PowerShell 7.6.2 en la laptop de Francisco para evitar problemas de BOM.
- Identificada incompatibilidad: PowerShell ISE no soporta Claude Code. De aquí en adelante: usar `pwsh` (PowerShell 7) en la laptop, NUNCA ISE.
- Gate 0 ejecutado en el VPS: TODO VERDE.
  - HEAD repo Aurora: `4eee736` (estable post-incidente 522 v2.0).
  - 10 containers Aurora Up (incluye fbesport-caddy).
  - Caddy SOLO en stack_net=172.20.10.10.
  - 5 dominios productivos en HTTP 200.
  - Backup del día existe con las 3 bases.
  - Espacio libre: 82GB de 96GB.
- Git del VPS corregido: user.email apuntando a `fbarrera.inversiones@gmail.com`.
- Repo GitHub privado `sitio-bg-infra` creado en cuenta `fbarrerainversiones`.
- Push exitoso al main. Working tree limpio. HITO 00 cerrado.

### Sesión 0 — 23 mayo 2026 (creación del proyecto)

**Quién:** Francisco + Claude (chat de planificación)

**Qué se hizo:**

- Consolidación de 4 investigaciones independientes sobre cómo construir el sitio.
- Generación del documento `Informe_Consolidado_Barrera_Global.docx` (42 pp).
- Aclaración: Investors Trust es carrier, no broker. Cadena legal: Cliente → Francisco (APS) → Broker ecuatoriano paraguas → Investors Trust (carrier offshore).
- Decisión técnica: Astro 5.x con islas de React como stack principal.
- Creación del documento maestro v1 del proyecto (`BG-WEB-PROYECTO-MAESTRO.md`). **DEPRECADO el 25/05/2026.**

---


## 13. Metricas Lighthouse

> **Snapshot de metricas Lighthouse del sitio en localhost (npm run preview build).** Esta seccion documenta las metricas oficiales validadas en cada sesion. Las metricas en produccion seran medidas con PageSpeed Insights cuando el sitio este en `barreraglobal.com`.

### Snapshot 02/06/2026 — Sesion 5 (build local)

**Entorno de medicion:**
- Browser: Microsoft Edge (modo incognito, sin extensiones)
- Modo Lighthouse: Navigation (Default)
- Dispositivo: Desktop
- Categorias: Performance + Accessibility + Best Practices + SEO
- URL: `http://localhost:4321/` (build via `npm run preview`)

**Resultados:**

| Categoria        | Score    | Estado          |
|------------------|----------|-----------------|
| Performance      | 99/100   | Excelente       |
| Accessibility    | 95/100   | Excelente       |
| Best Practices   | 100/100  | Perfecto        |
| SEO              | 100/100  | Perfecto        |

**Promedio:** 98.5/100

**Observaciones:**
- Primera medicion dio 84 Performance (cache frio, fuentes descargandose).
- Segunda medicion (cache caliente): 99 Performance. Esa es la valida.
- En produccion con CDN + service worker, esperamos 95-100 estable.
- A11y 95 (no 100) por contrastes menores o aria-labels minoritarios.
- SEO 100 por meta tags + 3 JSON-LD + semantica perfecta.

**Pendientes para mejorar (no urgentes):**
- P-32: Optimizar carga de fuentes (Cormorant + Outfit + JetBrains) eliminando subsets no usados (cyrillic, vietnamese, etc). Reduccion estimada: ~500 KB del bundle.

**Build de produccion:**
- Tamano total: 1850.2 KB (1.81 MB)
- Archivos: 72
- HTML index: 32.5 KB
- HTML privacidad: 33.3 KB
- Bundle CSS: 36.5 KB (Tailwind v4 purgado)
- Bundle JS client: 189.2 KB (IntersectionObserver + hidratacion React)
- Tiempo de build: 5.5 segundos
## 14. Identificación rápida para nuevas sesiones

Si vos sos Claude leyendo este documento por primera vez en un chat nuevo:

```
Proyecto:        Sitio Barrera Global
Slug:            sitio-bg
Path raíz VPS:   /opt/sitio-bg/
Red Docker:      sitio_bg_net (subnet 172.22.10.0/24)
Containers:      sitio-bg-web (172.22.10.10) — UN SOLO container
Puerto host:     ninguno propio (routing via Caddy compartido de Aurora)
Regla UFW:       ninguna nueva necesaria
Dominio:         barreraglobal.com (raíz) y www.barreraglobal.com
Zona Cloudflare: barreraglobal.com (ya existente, cuenta compartida)
Repo GitHub:     fbarrerainversiones/sitio-bg-infra (privado)
Carpeta local:   C:\Users\panch\projects\sitio-bg-infra\
Stack:           Astro 6.3.8 + Tailwind v4.3.0 + islas React 19 + nginx alpine + Docker
CMS:             MDX en repo Git (Fase 1-4)
DB del sitio:    NINGUNA. Webhook a Aurora vía URL pública.
Aurora:          vive en /opt/stack/, NO TOCAR salvo Caddyfile (flujo 7 pasos)
Brand Book:      "Patrimonio que crece. Capital protegido." | "Arquitectura Financiera"
Productos:       6 (vida-termino, vida-indexada, salud-nacional,
                 salud-internacional, auto, inversion)
Carolina:        Co-asesora, solo en /sobre-mi, sin CTA propio
Insurance Trust: Solo footer legal y /sobre-mi (Cred. SCVS Nº 572619)
Fase actual:     Fase 1 Dia 1 (Bloques 0-5 completos, Bloque 6 cierre)
Bitácora:        sección 10 de este documento
```

---

**Fin del documento maestro v2.**

**Versión:** 2.1
**Última actualización:** 02 de junio de 2026
**Próxima revisión:** al cierre de Fase 1 Dia 1 (Sesion 5) o al inicio de Sesion 6





