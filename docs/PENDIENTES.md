# PENDIENTES — Sitio Barrera Global

> **Lista viva única.** Todos los cabos sueltos del proyecto en un solo archivo. Se actualiza con cada sesión que cierre un item o detecte uno nuevo.

**Última actualización:** 25 de mayo de 2026
**Documento maestro de referencia:** [`PLAN-MAESTRO-v2.md`](PLAN-MAESTRO-v2.md)

---

## Cómo se usa este documento

Cada item tiene:

- **ID corto** (formato `P-XX`) para referencia cruzada.
- **Estado** con emoji para escaneo rápido.
- **Criticidad** (alta / media / baja).
- **Bloquea a** (qué fase o entregable depende de esto).
- **Owner** (quién resuelve).
- **Próximo paso concreto.**

Cuando un item se cierra, se mueve a la sección **Resueltos** al final con la fecha de cierre. No se borra. La memoria del proyecto se construye con histórico.

### Estados

| Emoji | Estado | Significado |
|---|---|---|
| 🔴 | BLOQUEADO | Esperando algo externo (tercero, proveedor, decisión legal) |
| 🟡 | EN CURSO | Francisco o Claude trabajando activamente |
| ⚪ | POR DECIDIR | Decisión técnica/comercial pendiente |
| 🔵 | BACKLOG | Futuro, no urgente, sin fecha |
| 🟢 | LISTO | Disponible para uso (se mueve a "Resueltos" al cerrar) |

---

## 1. Datos externos pendientes (dependen de terceros)

### P-01 — Lista de carriers locales acreditados a través de Insurance Trust

- **Estado:** 🔴 BLOQUEADO
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (página `/aseguradoras`, copy de productos salud-nacional y vida-termino).
- **Owner:** Francisco (debe pedir a Insurance Trust).
- **Detalle:** se necesita la lista oficial de aseguradoras con las que Insurance Trust tiene contrato vigente (Salud SA, BMI Ecuador, Ecuasanitas, Saludsa, Equivida, Latina Seguros, etc.). Sin esta lista, no se puede armar `/aseguradoras` ni decidir qué carriers se mencionan en cada producto.
- **Próximo paso:** Francisco pide por escrito a Carolina/Insurance Trust la lista actualizada con: nombre comercial, ramos contratados, fecha de inicio de contrato, vigencia.

### P-02 — Lista de carriers internacionales acreditados

- **Estado:** 🔴 BLOQUEADO
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (páginas `/seguros/salud-internacional`, `/inversion`).
- **Owner:** Francisco (debe pedir a Insurance Trust).
- **Detalle:** se necesita lista de carriers offshore (Investors Trust, BMI Internacional, RedBridge, etc.). Para cada uno: licencia regulatoria (CIMA, BMA, etc.), rating AM Best si aplica, productos disponibles, idioma del cliente esperado.
- **Próximo paso:** mismo paso que P-01, en el mismo pedido.

### P-03 — Autorización escrita de Insurance Trust para usar marca digital propia

- **Estado:** 🔴 BLOQUEADO
- **Criticidad:** alta
- **Bloquea a:** lanzamiento público del sitio (Fase 1 → producción).
- **Owner:** Francisco + Insurance Trust.
- **Detalle:** dado que Francisco opera bajo la credencial SCVS de Insurance Trust (Nº 572619), necesita autorización escrita del broker para usar marca propia "Barrera Global" en canales digitales. Sin esto, hay riesgo de conflicto con Art. 12.11 SCVS (uso de términos no autorizados).
- **Próximo paso:** Francisco solicita por email autorización formal a la dirección de Insurance Trust, especificando: dominio (barreraglobal.com), redes sociales asociadas, líneas de productos a promocionar, lapso de la autorización.

### P-04 — Email institucional `francisco@itbrokerec.com`

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** media
- **Bloquea a:** Fase 1 (footer del sitio, `/contacto`).
- **Owner:** Francisco.
- **Detalle:** se necesita confirmar si el email institucional ya existe o hay que solicitarlo. Tener email institucional vs Gmail personal cambia totalmente la percepción de profesionalismo en el footer.
- **Próximo paso:** Francisco verifica con Insurance Trust si tiene email institucional asignado. Si no, decide si quiere crear `francisco@barreraglobal.com` (en Cloudflare o Google Workspace) o usar el de Insurance Trust.

### P-05 — Número WhatsApp Business verificado en Meta

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta
- **Bloquea a:** Fase 3 (integración con Aurora, links wa.me, atribución UTM).
- **Owner:** Francisco.
- **Detalle:** el sitio necesita un número E.164 (`+593XXXXXXXXX`) para los CTAs WhatsApp. Tiene que ser un número verificado en Meta Business Manager y conectado al WhatsApp Cloud API que ya maneja Aurora. NO puede ser un WhatsApp personal sin verificar.
- **Próximo paso:** Francisco confirma con quien mantiene Aurora cuál es el número productivo y si está disponible para uso en el sitio web.

### P-06 — Credencial SCVS personal de Francisco

- **Estado:** 🔴 BLOQUEADO (esperando trámite SCVS)
- **Criticidad:** baja (no bloquea Fase 0-3 porque Francisco opera bajo Insurance Trust)
- **Bloquea a:** independencia legal completa, no el sitio.
- **Owner:** SCVS (organismo) + Francisco (seguimiento).
- **Detalle:** Francisco terminó el curso de Asesor Productor de Seguros. La credencial personal está en trámite con SCVS, fecha estimada de emisión: finales de julio 2026.
- **Próximo paso:** cuando llegue la credencial, actualizar footer del sitio: pasar de "Operando bajo Insurance Trust Nº 572619" a "Cred. SCVS Nº [propia de Francisco]" + mención a Insurance Trust como broker paraguas.

### P-07 — Revisión legal de la política de privacidad LOPDP

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta
- **Bloquea a:** lanzamiento público (Fase 1 → producción).
- **Owner:** Francisco (decide si contrata abogado).
- **Detalle:** el `PLAN-MAESTRO-v2.md` lista los 17 ítems del Art. 12 LOPDP que deben estar en `/privacidad`. La redacción inicial la puede hacer Claude. Pero para certeza jurídica antes de publicar, conviene revisión de abogado especializado en LOPDP Ecuador.
- **Próximo paso:** Francisco decide: (a) consultor legal vía cámara de comercio Ambato, (b) abogado independiente especializado, (c) lanzar sin revisión legal asumiendo el riesgo. Recomendación de Claude: (a) o (b).

### P-08 — Permisos de uso de logos de carriers

- **Estado:** 🔴 BLOQUEADO (depende de P-01, P-02)
- **Criticidad:** media
- **Bloquea a:** Fase 2 (`/aseguradoras`).
- **Owner:** Francisco.
- **Detalle:** cada carrier tiene guidelines distintas sobre uso de su logo por brokers/asesores. Antes de publicar logos en `/aseguradoras`, hay que solicitar media kit oficial y firmar términos de uso de marca.
- **Próximo paso:** una vez resueltos P-01 y P-02, Francisco solicita media kit a cada carrier y firma términos.

### P-09 — Compliance AML/KYC para productos offshore

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta para `/inversion`
- **Bloquea a:** publicación de `/inversion` (Fase 2).
- **Owner:** Francisco (decide si consulta abogado especializado).
- **Detalle:** los productos offshore (Investors Trust, BMI Internacional) implican obligaciones de FATCA (EEUU), CRS (OCDE) y reguladores del carrier (CIMA para Cayman Islands en caso de Investors Trust). El disclaimer "reverse solicitation" debe estar redactado por alguien que entienda el tema. Mal redactado = exposición regulatoria seria.
- **Próximo paso:** Francisco consulta con alguien que entienda FATCA/CRS si va a publicar `/inversion`. Si no, atrasa esa página hasta Fase 4-5.

---

## 2. Coordinaciones internas pendientes (con Aurora y FBE Sport)

### P-10 — Spec definitiva del webhook `/webhook/lead-form` en Aurora

- **Estado:** 🟡 EN CURSO (especificada en Plan Maestro v2 sección 6, falta validación)
- **Criticidad:** alta
- **Bloquea a:** Fase 3 (conversión + integración Aurora).
- **Owner:** Francisco + quien mantiene Aurora.
- **Detalle:** el Plan Maestro v2 propone la spec del payload JSON, headers, respuestas esperadas, manejo de errores. Falta validar con quien mantiene Aurora que: (a) puede crear ese endpoint en n8n, (b) puede mapear los campos al Postgres de Aurora con `source='website'`, (c) puede disparar el workflow correspondiente al recibir el payload.
- **Próximo paso:** antes de Fase 3, Claude prepara un mini-runbook con el flujo n8n del lado Aurora; Francisco coordina con quien la mantiene para implementarlo.

### P-11 — Token compartido sitio ↔ Aurora

- **Estado:** 🔴 BLOQUEADO (esperando P-10)
- **Criticidad:** alta
- **Bloquea a:** Fase 3.
- **Owner:** Francisco.
- **Detalle:** el sitio web envía un header `X-Sitio-Token: <token>` en cada POST al webhook. Hay que generar un token único (al menos 32 bytes random), guardarlo en `/opt/sitio-bg/.env` y en el vault de Aurora. NO debe estar en el repo Git.
- **Próximo paso:** generar token con `openssl rand -hex 32`. Guardar en password manager + .env de ambos proyectos.

### P-12 — Confirmar reemplazo del placeholder en barreraglobal.com

- **Estado:** 🔴 BLOQUEADO (esperando coordinación con Aurora)
- **Criticidad:** alta
- **Bloquea a:** Gate 1 (después de Fase 1).
- **Owner:** Francisco + quien mantiene Aurora.
- **Detalle:** hoy `barreraglobal.com` sirve un placeholder desde Aurora. El sitio web nuevo lo va a reemplazar. Hay que confirmar con quien mantiene Aurora que: (a) puede haber una ventana de cambio coordinada, (b) si el placeholder actual tiene tráfico/SEO ranking que preservar, (c) si hay redirecciones que mantener.
- **Próximo paso:** Francisco coordina ventana de cambio (recomendación: domingo de madrugada hora Ecuador).

### P-13 — Reboot pendiente del VPS por actualización de kernel

- **Estado:** 🟡 EN CURSO
- **Criticidad:** media
- **Bloquea a:** ningún entregable, pero conviene resolver antes de empezar HITO 01 para evitar interferencias.
- **Owner:** Francisco.
- **Detalle:** el banner del login del VPS indica reboot pendiente (kernel update aplicado por unattended-upgrades). Reboot toma ~2 minutos pero implica downtime de Aurora + FBE Sport.
- **Próximo paso:** coordinar ventana de bajo tráfico (madrugada Ecuador), ejecutar `sudo reboot` y validar Gate 0 al volver.

---

## 3. Decisiones técnicas pendientes (Fase 2-5)

### P-14 — Strapi v5 como CMS gráfico (Fase 5)

- **Estado:** 🔵 BACKLOG
- **Criticidad:** baja
- **Bloquea a:** nada en Fase 0-4.
- **Owner:** Francisco.
- **Detalle:** el Plan Maestro v2 dice MDX en repo Git para Fase 1-4. Strapi se evalúa en Fase 5+ si Francisco quiere editar contenido sin tocar código. Decisión postergada hasta tener 30+ artículos publicados.
- **Próximo paso:** revisar en Fase 4.

### P-15 — Sistema de agendamiento (Cal.com vs Calendly)

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** baja (no es Fase 1 crítica)
- **Bloquea a:** Fase 3 (CTA "Agendar 15 min" en `/contacto`).
- **Owner:** Francisco.
- **Detalle:** Plan Maestro v2 menciona Cal.com como opción open source self-hostable. Calendly es la alternativa SaaS clásica. Para arranque, embed simple en `/contacto` es suficiente. Trade-off: Cal.com requiere container adicional (sumar al `sitio_bg_net`), Calendly es plug-and-play pero pago.
- **Próximo paso:** revisar al inicio de Fase 3.

### P-16 — Cookie consent (CookieYes vs Cookiebot)

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (cookies + GTM + GA4).
- **Owner:** Francisco + Claude.
- **Detalle:** ambos son SaaS gratuitos con planes free hasta cierto tráfico. CookieYes: free hasta 25k visitas/mes. Cookiebot: free hasta 100 páginas. Recomendación inicial: CookieYes por tope más alto de visitas.
- **Próximo paso:** confirmar en Fase 2 antes de implementar consent banner.

### P-17 — Email marketing (Brevo vs alternativas)

- **Estado:** 🔵 BACKLOG (Fase 4)
- **Criticidad:** baja
- **Bloquea a:** newsletter mensual (Fase 4).
- **Owner:** Francisco.
- **Detalle:** Plan Maestro v2 propone Brevo (free 9000 emails/mes). Alternativas: Mailchimp (free 500 contactos), MailerLite (free 1000 contactos). Brevo gana en tope de envío para newsletter de bajo volumen.
- **Próximo paso:** abrir cuenta Brevo cuando arranque Fase 4.

### P-18 — PostHog self-hosted para A/B testing

- **Estado:** 🔵 BACKLOG (Fase 5)
- **Criticidad:** baja
- **Bloquea a:** A/B testing avanzado.
- **Owner:** Claude.
- **Detalle:** Microsoft Clarity (free) cubre heatmaps + session replay en Fase 1-4. PostHog self-hosted en Docker da A/B testing nativo y feature flags. Solo justifica si Francisco tiene volumen para A/B (necesita ~500 sesiones/mes mínimo por variante).
- **Próximo paso:** revisar al final de Fase 4 con datos reales de Clarity.

---

## 4. Configuraciones iniciales pendientes (Fase 0)

### P-19 — Bucket Backblaze B2 `sitio-bg-backups`

- **Estado:** ⚪ POR DECIDIR (cuándo se crea)
- **Criticidad:** baja para HITO 01 (no hay nada que respaldar todavía)
- **Bloquea a:** backup automatizado del sitio (post-HITO 01).
- **Owner:** Francisco.
- **Detalle:** la cuenta Backblaze B2 es compartida con Aurora. Crear bucket nuevo `sitio-bg-backups`, generar Application Key con permisos restringidos solo a ese bucket, guardar credenciales en `/opt/sitio-bg/.env`.
- **Próximo paso:** crear bucket al inicio de Fase 1 (cuando exista contenido para respaldar).

### P-20 — Crear `/opt/sitio-bg/` en VPS

- **Estado:** 🟡 EN CURSO (próximo paso operativo)
- **Criticidad:** alta
- **Bloquea a:** HITO 01 entero.
- **Owner:** Francisco + Claude (vía runbook).
- **Detalle:** parte central del HITO 01. Se ejecuta cuando se siga el runbook `docs/prompts/HITO-01-runbook-vps.md` (BLOQUE 4 del plan de hoy).
- **Próximo paso:** ejecutar HITO 01 runbook.

### P-21 — Crear red Docker `sitio_bg_net` (172.22.10.0/24)

- **Estado:** 🟡 EN CURSO (parte de HITO 01)
- **Criticidad:** alta
- **Bloquea a:** HITO 01 y posterior.
- **Owner:** Francisco + Claude (vía runbook).
- **Detalle:** el comando exacto está en el runbook HITO 01. Validar antes que no exista la red con `docker network ls | grep sitio_bg`. Si existe, abortar.
- **Próximo paso:** parte del runbook HITO 01.

### P-22 — Verificar credencial Insurance Trust 572619 en SCVS

- **Estado:** 🟡 EN CURSO
- **Criticidad:** alta
- **Bloquea a:** Fase 1 (footer del sitio).
- **Owner:** Francisco.
- **Detalle:** el número 572619 debe ser verificable públicamente en supercias.gob.ec. Antes de publicar el footer del sitio, confirmar: (a) que el número es correcto, (b) que está vigente, (c) que se puede enlazar a la página oficial de verificación.
- **Próximo paso:** Francisco abre supercias.gob.ec, busca Insurance Trust y confirma el número. Captura de pantalla guardada en `/docs/credenciales/`.

---

## 5. Contenido a producir (Fase 1-4)

### P-23 — Foto profesional de Francisco para el sitio

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta
- **Bloquea a:** Fase 1 (`/sobre-mi`, schema.org Person).
- **Owner:** Francisco.
- **Detalle:** el Brand Book página 20 dice "Personas reales sin filtro. Generan confianza humana. La gente compra a personas, no a marcas anónimas." Necesita foto profesional en alta resolución (al menos 1200x1200), idealmente con fondo neutro o relacionado a Ambato/oficina.
- **Próximo paso:** Francisco decide entre: (a) sesión con fotógrafo profesional en Ambato, (b) foto existente que cumpla calidad, (c) foto temporal hasta que tenga la profesional.

### P-24 — Foto de Carolina + links a sus redes sociales

- **Estado:** 🔴 BLOQUEADO (esperando a Carolina)
- **Criticidad:** baja (presencia limitada, no es central)
- **Bloquea a:** Fase 1 (`/sobre-mi`).
- **Owner:** Francisco (pide a Carolina).
- **Detalle:** decisión 25/05/2026 es que Carolina aparece SOLO en `/sobre-mi` con foto + link a sus redes (sin CTA propio). Necesita: foto profesional + URLs de sus redes activas (LinkedIn, Instagram, etc.).
- **Próximo paso:** Francisco pide a Carolina por WhatsApp/email: foto + links.

### P-25 — Video corto (60s) de Francisco para `/sobre-mi`

- **Estado:** 🔵 BACKLOG
- **Criticidad:** baja
- **Bloquea a:** nada (es nice-to-have de Fase 1).
- **Owner:** Francisco.
- **Detalle:** Plan Maestro v2 propone video 60s en `/sobre-mi`. NO es bloqueante; se puede arrancar Fase 1 con solo foto. Si se hace, grabar vertical para uso también en Reels/TikTok.
- **Próximo paso:** decidir al final de Fase 1 si arrancar Fase 2 o intercalar este video.

### P-26 — Bio extendida de Francisco con credenciales

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** media
- **Bloquea a:** Fase 1 (`/sobre-mi`, schema.org Person).
- **Owner:** Francisco + Claude.
- **Detalle:** texto de 200-400 palabras para `/sobre-mi` que cuente: formación, experiencia, especialización, valores, código de ética, vinculación con Insurance Trust. Tono editorial premium (Brand Book), NO de venta. Léxico permitido: arquitectura financiera, diseño patrimonial, estrategia, respaldo. NO usar: corretaje, comisiones, descuentos.
- **Próximo paso:** Claude propone un draft al arrancar Fase 1; Francisco edita y aprueba.

### P-27 — Disclaimer reverse solicitation para `/inversion`

- **Estado:** 🔴 BLOQUEADO (depende de P-09)
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (`/inversion`).
- **Owner:** Francisco + abogado especializado en offshore.
- **Detalle:** redactado mal, expone a Francisco y a los carriers offshore a problemas regulatorios serios. Idea base: "Esta página es informativa. Si usted reside en jurisdicciones distintas a Ecuador, debe contactarnos por iniciativa propia. No estamos solicitando inversión en jurisdicciones donde no estamos autorizados." Pero la redacción exacta debe venir de un compliance officer.
- **Próximo paso:** Francisco consulta con asesor legal antes de Fase 2.

### P-28 — Disclaimers legales por producto (lista)

- **Estado:** 🔵 BACKLOG (Fase 2)
- **Criticidad:** media
- **Bloquea a:** Fase 2 (páginas de producto).
- **Owner:** Claude (primer draft) + Francisco (revisa).
- **Detalle:** cada página de producto necesita un disclaimer al pie con: "Producto emitido por [carrier], regulado por [autoridad]. No constituye recomendación de inversión personalizada. Consulte con su asesor." Adaptado por producto.
- **Próximo paso:** Claude redacta plantilla al inicio de Fase 2; Francisco valida con carriers.

---

## 6. Gabriela (chatbot) — pendiente de definir

### P-29 — ¿Qué es Gabriela exactamente?

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** baja para Fase 1-3
- **Bloquea a:** uso del CTA "¿Dudas? Pregúntale a Gabriela" del Brand Book.
- **Owner:** Francisco.
- **Detalle:** el Brand Book página 21 menciona "Gabriela chat" como CTA oficial con texto "¿Dudas? Pregúntale a Gabriela". Pero el documento maestro del proyecto NO menciona a Gabriela. Tres opciones:
  - **A**: Gabriela = el chatbot AI que Aurora ya maneja por WhatsApp (solo es un nombre comercial del bot AI existente).
  - **B**: Gabriela = un agente nuevo que vive en el sitio (chat embebido), distinto a Aurora.
  - **C**: Gabriela = un agente futuro de la suite (junto con Mateo), aún no construido.
- **Recomendación de Claude:** opción A. Es la más simple y aprovecha Aurora. Si más adelante necesita ser opción B o C, se decide.
- **Próximo paso:** Francisco confirma cuál de las 3 opciones es. Hasta que confirme, NO usar el CTA "Pregúntale a Gabriela" en el sitio.

---

## 7. Datos de marca pendientes

### P-30 — Logo en formato vectorial (SVG)

- **Estado:** ⚪ POR DECIDIR (¿existe el SVG?)
- **Criticidad:** alta
- **Bloquea a:** Fase 1 (header, footer, OG image, favicon).
- **Owner:** Francisco.
- **Detalle:** el Brand Book muestra el monograma "FB" y la marca completa "Barrera Global / Arquitectura Financiera". Necesario en SVG (vectorial, infinitamente escalable). Si solo existe en PNG/JPG del Brand Book, hay que pedir vectorial al diseñador o regenerar con IA.
- **Próximo paso:** Francisco verifica si tiene el SVG. Si no, decide regenerar o pedir al diseñador del Brand Book.

### P-31 — Variantes del logo (horizontal, vertical, monograma)

- **Estado:** 🔴 BLOQUEADO (depende de P-30)
- **Criticidad:** media
- **Bloquea a:** uso correcto del logo en distintos contextos del Brand Book página 3.
- **Owner:** Francisco.
- **Detalle:** Brand Book página 3 define usos:
  - Favicon/avatar: monograma FB.
  - Encabezado web: marca completa horizontal.
  - Brochures: marca completa + descriptor.
  - Stories: monograma esquina inferior derecha (8% del ancho).
- **Próximo paso:** tras P-30, generar las 3 variantes mínimo (horizontal, monograma, monograma+descriptor).

### P-32 — Favicon en múltiples tamaños

- **Estado:** 🔴 BLOQUEADO (depende de P-30)
- **Criticidad:** alta
- **Bloquea a:** Fase 1 (cualquier página).
- **Owner:** Claude (puede generar).
- **Detalle:** desde el monograma FB SVG hay que generar: 16x16, 32x32, 48x48, 180x180 (Apple touch icon), 512x512 (Android), `favicon.ico` con multi-resolución.
- **Próximo paso:** tras P-30, Claude genera con herramientas estándar (ImageMagick / realfavicongenerator.net).

### P-33 — Open Graph image (1200x630) para compartir en redes

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** media
- **Bloquea a:** Fase 1 (todas las páginas necesitan OG image).
- **Owner:** Claude (puede generar) + Francisco (aprueba).
- **Detalle:** imagen 1200x630 con marca + descriptor + eslogan, fondo `#08080d` (paleta Brand Book), dorado para acentos. Es lo que se ve cuando alguien comparte un link del sitio en WhatsApp, LinkedIn, Twitter, etc.
- **Próximo paso:** Claude propone diseño al iniciar Fase 1; Francisco aprueba.

---

## 8. Decisiones cerradas (referencia rápida)

Lista de decisiones que YA están resueltas pero conviene tener visibles para no reabrirlas:

| Decisión | Resuelto | Sesión |
|---|---|---|
| Stack frontend: Astro 5.x + Tailwind v4 + islas React | 23/05/2026 | Sesión 0 |
| Hosting: VPS Hostinger + Docker + Caddy compartido | 23/05/2026 | Sesión 0 |
| CMS: MDX en repo Git para Fase 1-4 | 23/05/2026 | Sesión 0 |
| Sin pasarela de pago en el sitio | 23/05/2026 | Sesión 0 |
| Compliance: LOPDP completa (17 ítems Art. 12) + SCVS | 23/05/2026 | Sesión 0 |
| Aislamiento total con Aurora y FBE Sport (3 redes Docker separadas) | 24/05/2026 | Sesión 1 |
| GitHub user: `fbarrerainversiones` (compartido entre 3 proyectos) | 24/05/2026 | Sesión 1 |
| pwsh 7 (PowerShell 7) obligatorio para todo en la laptop. NO ISE. | 24/05/2026 | Sesión 1 |
| Brand Book 2026 = fuente única de verdad para identidad visual | 25/05/2026 | Sesión 2 |
| Eslogan: "Patrimonio que crece. Capital protegido." + "Arquitectura Financiera" | 25/05/2026 | Sesión 2 |
| Insurance Trust solo en footer legal y `/sobre-mi`. Prohibido en marketing. | 25/05/2026 | Sesión 2 |
| Carolina co-asesora con presencia limitada (solo `/sobre-mi`, sin CTA) | 25/05/2026 | Sesión 2 |
| 6 productos: vida-termino, vida-indexada, salud-nacional, salud-internacional, auto, inversion | 25/05/2026 | Sesión 2 |
| Postgres del sitio: REVERTIDO. Sin DB propia. Webhook a Aurora. | 25/05/2026 | Sesión 2 |
| Integración Aurora: webhook directo (NO widget Chatwoot embebido) | 25/05/2026 | Sesión 2 |
| Graceful degradation: Opción C (mensaje + localStorage + reintentar) | 25/05/2026 | Sesión 2 |
| CRM (Kommo, HubSpot, etc.): FUERA del scope. Proyecto futuro aparte. | 25/05/2026 | Sesión 2 |

---

## Resueltos (histórico)

Lista de items que fueron cerrados, con fecha. Sirve de memoria del proyecto.

### R-01 — Decisión sobre legalidad del lanzamiento

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** Francisco no tiene credencial SCVS propia (en trámite). Decisión: opera bajo paraguas Insurance Trust (Cred. SCVS Nº 572619). Footer del sitio + página `/sobre-mi` declaran esta vinculación explícitamente. Esto destraba el lanzamiento del sitio sin esperar a julio 2026.
- **Documentación:** Plan Maestro v2, sección 1, "Posicionamiento legal".

### R-02 — Setup local de carpeta del proyecto en la laptop

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** carpeta `C:\Users\panch\projects\sitio-bg-infra\` creada, con `CLAUDE.md`, `.gitignore`, estructura `docs/`, `web/`, `infra/`, `scripts/`, `backups/scripts/`. Git inicializado en branch `main`. Tres commits hechos: `67372b8`, `3d79156`, `17e8040`.
- **Documentación:** `docs/hitos/HITO-00-setup-local.md`.

### R-03 — Repo GitHub privado `sitio-bg-infra` creado

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** repo creado en `github.com/fbarrerainversiones/sitio-bg-infra` (privado). Push del setup local exitoso. Working tree limpio.

### R-04 — Instalación PowerShell 7.6.2 + identificación de incompatibilidad ISE

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** PowerShell 7.6.2 instalado vía winget en la laptop de Francisco. Identificado que PowerShell ISE NO soporta Claude Code. Decisión: de ahora en adelante usar `pwsh` (PowerShell 7) en la laptop, NUNCA ISE. Sumado como regla operativa.

### R-05 — Gate 0 ejecutado: estado del servidor VERDE

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** los 6 chequeos del Gate 0 pasaron:
  - HEAD repo Aurora: `4eee736` (estable post-incidente 522 v2.0).
  - 10 containers Aurora Up (incluye `fbesport-caddy`).
  - Caddy SOLO en `stack_net` (172.20.10.10).
  - 5 dominios productivos en HTTP 200.
  - Backup del día existe con las 3 bases (`postgres_`, `chatwoot_`, `rag_`).
  - Espacio libre: 82GB de 96GB.

### R-06 — Git del VPS con email correcto

- **Cerrado:** 24 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** `git config --global user.email` apunta a `fbarrera.inversiones@gmail.com` en el VPS.

### R-07 — Generación del Plan Maestro v2

- **Cerrado:** 25 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** documento maestro v2 generado, validado (1116 líneas, UTF-8 sin BOM), commiteado al repo `sitio-bg-infra`, subido al knowledge del proyecto Claude.ai. Reemplaza al v1 que queda deprecado.

---

**Fin del documento PENDIENTES.md.**

**Próxima revisión:** al cierre de cualquier item activo o al inicio de la siguiente sesión.
