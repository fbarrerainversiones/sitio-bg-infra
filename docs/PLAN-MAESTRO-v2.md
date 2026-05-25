# Proyecto: Sitio Barrera Global (Sitio Web Público) — v2

> **Documento maestro del proyecto, versión 2.** Reemplaza al `BG-WEB-PROYECTO-MAESTRO.md` v1.0 del 23/05/2026. Este es el primer documento que debe leer cualquier sesión de Claude (chat o Claude Code) que trabaje en este proyecto.

**Versión:** 2.0
**Fecha de creación v2:** 25 de mayo de 2026
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

- Sitio estático construido en Astro 5.x + Tailwind v4 + islas React.
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

### 3.1 Stack frontend: Astro 5.x

Confirmado por convergencia de las 4 investigaciones independientes (Informe Consolidado, Sección 2.3 Contradicción 2):

| Criterio | Astro 5.x (elegido) | Next.js 14+ (descartado) |
|---|---|---|
| Sitio de contenido | Lighthouse 95+ por defecto | Requiere 80-120 KB JS baseline |
| SSG/SSR | Nativo, output estático | Nativo, pero pesado |
| Cotizador interactivo | Soportado via "islas" React | Nativo |
| Ecosistema 2026 | Cloudflare lo adquirió enero 2026 | Maduro |

**Conclusión:** Astro 5.x con islas de React (`@astrojs/react`) para cotizador y calculadoras.

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
│  • Astro 5.x scaffolded con Tailwind v4                              │
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

## 10. Bitácora viva

> **Esta sección se actualiza al cierre de cada sesión de trabajo.** Formato cronológico inverso (lo más reciente arriba).

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

## 11. Identificación rápida para nuevas sesiones

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
Stack:           Astro 5.x + Tailwind v4 + islas React + nginx alpine + Docker
CMS:             MDX en repo Git (Fase 1-4)
DB del sitio:    NINGUNA. Webhook a Aurora vía URL pública.
Aurora:          vive en /opt/stack/, NO TOCAR salvo Caddyfile (flujo 7 pasos)
Brand Book:      "Patrimonio que crece. Capital protegido." | "Arquitectura Financiera"
Productos:       6 (vida-termino, vida-indexada, salud-nacional,
                 salud-internacional, auto, inversion)
Carolina:        Co-asesora, solo en /sobre-mi, sin CTA propio
Insurance Trust: Solo footer legal y /sobre-mi (Cred. SCVS Nº 572619)
Fase actual:     Fase 0 (HITO 00 cerrado, HITO 01 próximo)
Bitácora:        sección 10 de este documento
```

---

**Fin del documento maestro v2.**

**Versión:** 2.0
**Última actualización:** 25 de mayo de 2026
**Próxima revisión:** al cierre de HITO 01 o al inicio de Fase 1
