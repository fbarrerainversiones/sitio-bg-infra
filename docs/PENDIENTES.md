# PENDIENTES — Sitio Barrera Global

> **Lista viva única.** Todos los cabos sueltos del proyecto en un solo archivo. Se actualiza con cada sesión que cierre un item o detecte uno nuevo.

**Última actualización:** 3 de agosto de 2026 (rama `publicacion-v1`: **P-43 CERRADO** y movido a Resueltos como R-15; P-37 entregado v1; P-36 entregado parcial; alcance de P-39 ampliado a los tres textos legales; alta de P-48, P-49 y P-50)
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

### P-04 — Email institucional `contacto@barreraglobal.com` o similar

- **Estado:** 🟡 EN CURSO (gmail provisional mientras tanto)
- **Criticidad:** media
- **Bloquea a:** Fase 2 (footer profesional, `/contacto` formal).
- **Owner:** Francisco.
- **Detalle:** decisión D-20/DM-05 (Sesión 4-5): hasta configurar DNS de `barreraglobal.com`, el sitio usa `fbarrera.inversiones@gmail.com` como contacto LOPDP y general. Cuando esté el dominio configurado, crear email institucional (`contacto@barreraglobal.com`, `privacidad@barreraglobal.com`, etc.) en Cloudflare Email Routing o Google Workspace. NOTA: `itbrokerec.com` se descartó porque era email de Insurance Trust, no de Francisco.
- **Próximo paso:** configurar DNS de barreraglobal.com en Cloudflare (Fase 2). Luego crear emails institucionales y actualizar Footer.astro, index.astro, privacidad.astro.

### P-05 — Número WhatsApp Business verificado en Meta

- **Estado:** ⚪ POR DECIDIR
- **Criticidad:** alta
- **Bloquea a:** Fase 3 (integración con Aurora, links wa.me, atribución UTM).
- **Owner:** Francisco.
- **Detalle:** el sitio necesita un número E.164 (`+593XXXXXXXXX`) para los CTAs WhatsApp. Tiene que ser un número verificado en Meta Business Manager y conectado al WhatsApp Cloud API que ya maneja Aurora. NO puede ser un WhatsApp personal sin verificar.
- **Próximo paso:** Francisco confirma con quien mantiene Aurora cuál es el número productivo y si está disponible para uso en el sitio web.

### P-06 — Credencial SCVS personal de Francisco

- **Estado:** 🔴 BLOQUEADO (trámite burocrático SCVS, 2-3 meses)
- **Criticidad:** alta para regularizar mora SPDP DPD (ver P-34), baja para sitio
- **Bloquea a:** P-34 (registro DPD), reemplazo del placeholder "credencial SCVS en tramite" en Footer/index/privacidad
- **Owner:** SCVS (organismo) + Francisco (seguimiento).
- **Detalle:** Francisco terminó el curso paralelo más completo (no el original). La credencial personal está en trámite con SCVS. Fecha estimada: julio-agosto 2026. ACTUALIZACION SESION 5: hasta que llegue, sitio muestra "credencial SCVS personal en tramite" (DM-07). NO se publica la credencial 572619 del broker como si fuera propia (E-23 corregido en commit 451121f).
- **Próximo paso:** cuando llegue la credencial, ejecutar en una sola sesión (30 min total):
  1. Actualizar Footer.astro (L108): cambiar "Credencial SCVS personal en tramite" por "Cred. SCVS Nº [propia]"
  2. Actualizar index.astro (L232): mismo cambio
  3. Actualizar privacidad.astro (L57): mismo cambio
  4. Hacer documento auto-nombramiento DPD
  5. Subir al portal SPDP (registro DPD = P-34)
  6. Commit + push con mensaje "feat: credencial SCVS personal recibida + DPD registrado"

### P-07 — Revisión legal de la política de privacidad LOPDP

- **Estado:** 🟡 EN CURSO (auto-corrección Sesión 8, revisión humana Sesión 11)
- **Criticidad:** alta
- **Bloquea a:** lanzamiento público (Fase 2 → producción).
- **Owner:** Francisco (decide abogado) + Claude (corrección técnica).
- **Detalle:** la `/privacidad` actual cubre los 17 ítems Art. 12 LOPDP pero análisis legal IA externo en Sesión 5 detectó 7 huecos críticos (H-01):
  1. Base legal para datos sensibles incorrecta: "interés legítimo" → debe ser "consentimiento expreso separado" (Art. 4 LOPDP).
  2. Decisiones automatizadas (Aurora) no declaradas formalmente.
  3. Faltan 3 derechos: limitación, no decisiones automatizadas, revocar consentimiento.
  4. Datos contacto del responsable incompletos (domicilio + teléfono).
  5. DPD no mencionado (bloqueado por P-06).
  6. Transferencias internacionales sin anclar a Resolución SPDP-SPD-2026-0004-R.
  7. Atribución errónea credencial 572619 (resuelto en E-23).
- **Próximo paso:** Sesión 8 reescribe `/privacidad` v2 cerrando los 7 huecos. Sesión 11 revisión por abogado humano real (P-39).

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

### P-22 — Verificar credencial Insurance Trust 572619 en SCVS (CERRADO)

- **Estado:** 🟢 CERRADO (resuelto por E-23 en Sesión 5)
- **Cerrado:** 02/06/2026
- **Resumen del cierre:** análisis legal IA externo en Sesión 5 reveló que la credencial 572619 es del broker Insurance Trust (entidad corporativa), NO de Francisco como APS individual. Atribuirla al APS en el footer del sitio sería regulatoriamente incorrecto.
- **Acción tomada (commit 451121f + 3f77744):**
  1. Removido 572619 de Footer.astro, index.astro, privacidad.astro.
  2. Reemplazado por "credencial SCVS personal en tramite" (DM-07).
  3. Insurance Trust se mantiene mencionado como broker paraguas, sin credencial corporativa expuesta como propia.
- **Lección aprendida:** la credencial 572619 NO se debe publicar nunca en el sitio porque es un dato corporativo del broker, no del APS. La credencial relevante para el sitio será la de Francisco cuando salga (P-06).

---

## 5. Contenido a producir (Fase 1-4)

### P-23 — Foto profesional de Francisco para el sitio (provisional cerrado)

- **Estado:** 🟡 EN CURSO (provisional con foto IA, profesional pendiente)
- **Criticidad:** baja ahora (foto IA cubre Fase 1-2)
- **Bloquea a:** nada urgente. La foto IA es suficiente hasta sesión fotográfica real.
- **Owner:** Francisco.
- **Detalle:** ACTUALIZACION SESION 5: Francisco aprobó foto retocada con IA como imagen oficial provisional del sitio (D-24). Se muestra en hero de home y eventualmente en `/sobre-mi`. Archivo: `web/public/images/francisco-barrera.jpg` (551 KB). NO bloquea lanzamiento. Eventualmente reemplazar con sesión fotográfica profesional para mejorar autoridad E-E-A-T.
- **Próximo paso:** post-Fase 2 (sitio en producción), Francisco evalúa hacer sesión profesional real para reforzar autoridad y E-E-A-T en SEO/AEO. Costo estimado: $80-200 USD.

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

### P-26 — Bio extendida de Francisco para /sobre-mi

- **Estado:** 🟡 EN CURSO (bio corta lista, falta extendida)
- **Criticidad:** media
- **Bloquea a:** Sesión 6 (página `/sobre-mi` completa).
- **Owner:** Francisco + Claude.
- **Detalle:** la home actual (Sesión 5) ya tiene bio corta integrada en sección "Sobre mí" (~200 palabras, narrativa ingeniero-de-sistemas-a-asesor-financiero). Para `/sobre-mi` se necesita versión extendida de 600-800 palabras con: formación detallada, experiencia previa, especialización por producto, valores explícitos, código ético, vinculación Insurance Trust, mención Carolina.
- **Próximo paso:** Sesión 6 - Claude propone draft extendido de bio basándose en la versión corta aprobada en Sesión 5. Francisco revisa y aprueba antes del commit.

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


## 8. Compliance legal y operativo (descubiertos en Sesión 5+)

> **Pendientes generados por hallazgos críticos H-01 a H-05 de Sesión 5.** Resolverlos antes del deploy a producción (Fase 2). Algunos están bloqueados esperando credencial SCVS personal de Francisco (ver P-06).

### P-34 — Registro de DPD ante SPDP

- **Estado:** 🔴 BLOQUEADO (esperando P-06 credencial SCVS personal)
- **Criticidad:** media (mora técnica desde 31/12/2025, sin sanción activa)
- **Bloquea a:** compliance LOPDP completa, regularización plazo SPDP.
- **Owner:** Francisco (designación) + Francisco mismo como DPD.
- **Detalle:** Resolución SPDP-SPD-2025-0028-R obliga a designar Delegado de Protección de Datos a sectores: financiero, seguros, salud + tratamiento de datos sensibles + datos de menores. Francisco aplica por DOBLE vía (seguros + datos de salud). Plazo registro: 31/diciembre/2025 (5+ meses de mora técnica). SPDP no audita sitios pequeños activamente; riesgo real de sanción <5%. Hasta 2029, DPD NO requiere certificación, Francisco puede auto-designarse. Cuando llegue credencial SCVS personal: 30 min para regularizar (documento auto-nombramiento + portal SPDP + actualizar sitio).
- **Próximo paso:** cuando llegue credencial SCVS personal (P-06, julio-agosto 2026), ejecutar en la misma sesión: (1) hacer documento de auto-nombramiento como DPD, (2) subir al portal SPDP, (3) actualizar `/privacidad` con nombre y contacto del DPD.

### P-35 — Reescritura de política de privacidad v2 (cerrar 7 huecos LOPDP)

- **Estado:** 🟡 EN CURSO (planificada para Sesión 8)
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (lanzamiento a producción).
- **Owner:** Claude (corrección técnica) + Francisco (aprobación).
- **Detalle:** ver detalle completo en P-07. Los 7 huecos detectados en H-01 deben cerrarse antes del deploy. Cambios principales: base legal datos sensibles → consentimiento expreso separado (Art. 4 LOPDP); declarar Aurora como decisión automatizada (Art. 12.4); agregar derechos faltantes; completar datos contacto del responsable; anclar transferencias internacionales en Resolución SPDP-SPD-2026-0004-R.
- **Próximo paso:** Sesión 8 reescribe `/privacidad` con los 7 huecos cerrados. Output: `src/pages/privacidad.astro` v2 + commit + push.

### P-36 — Política de cookies + Consent Mode v2

- **Estado:** 🟡 EN CURSO — **página `/cookies` v1 ENTREGADA** el 03/08/2026 en la rama `publicacion-v1` (commit `6b106e0`). **Queda abierto solo el banner + Consent Mode v2**, que hoy NO aplica: no hay una sola cookie no esencial que consentir (verificado, ver R-15). El banner entra el día que se agregue analítica o remarketing.
- **Criticidad:** alta → **baja mientras el sitio no instale cookies no esenciales**
- **Bloquea a:** ya NO bloquea el lanzamiento (el gate era el 404 del footer, cerrado en P-43/R-15).
- **Owner:** Claude + Francisco.
- **Detalle:** el sitio actual NO tiene banner de cookies porque hoy no usa analytics. La página `/cookies` ya existe y declara exactamente eso, sobre verificación del fuente y del build. Cuando agreguemos Google Analytics, Meta Pixel u otros trackers, banner es obligatorio (LOPDP + GDPR adaptable). Implementación: CookieYes (free hasta 25k visitas/mes, ver P-16) con Consent Mode v2. Cookies necesarias (sitio funciona) cargan siempre. Cookies opcionales (analytics, marketing) requieren consentimiento expreso.
- **Próximo paso:** NO implementar banner ahora (sería pedir consentimiento para nada). Cuando se decida agregar analítica: elegir CookieYes vs Cookiebot (P-16), implementar Consent Mode v2, tipificar cada cookie (nombre, finalidad, duración, proveedor) y actualizar `/cookies`, que ya se compromete por escrito a hacerlo antes de activarlas.

### P-37 — Términos y Condiciones del sitio

- **Estado:** 🟢 LISTO — **`/terminos` v1 ENTREGADA** el 03/08/2026 en la rama `publicacion-v1` (commit `cd501fd`). Falta únicamente la validación legal humana, que vive en **P-39**. No se cierra hasta que P-39 se ejecute.
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (lanzamiento a producción) solo a través de P-39.
- **Owner:** Claude (draft) + Francisco (aprobación) + abogado humano (validación final, ver P-39).
- **Detalle:** documento protectivo que debe incluir: (1) disclaimer de cotizaciones (referenciales, no vinculantes, sujetas a evaluación de carrier), (2) limitación responsabilidad sobre Aurora (es asistencia automatizada, no asesoría profesional individualizada con efectos jurídicos), (3) emisión de póliza siempre por aseguradora (no por el sitio ni por Francisco/Insurance Trust), (4) disclaimers SCVS Art. 11.6 (reserva de cotización) y Art. 12.12 (prohibición de promesas), (5) jurisdicción y ley aplicable (Ecuador, Art. 17 LOPDP).
- **Próximo paso:** llevar el texto v1 a P-39. Cobertura entregada: naturaleza informativa del sitio (sin venta en línea, sin pagos, sin cuentas de usuario, sin formularios), cotizaciones referenciales no vinculantes (Art. 11.6 SCVS), sin promesas (Art. 12.12 SCVS), póliza emitida por la aseguradora y prevaleciente sobre el sitio, Aurora como asistente automatizado orientativo, propiedad intelectual, limitación de responsabilidad y ley aplicable Ecuador. **NO se declaró jurisdicción de una ciudad concreta** — es una decisión legal que debe confirmar el abogado.

### P-38 — Decisión sobre sitio web antiguo con Meta Pixel

- **Estado:** ⚪ POR DECIDIR (decisión en Sesión 9)
- **Criticidad:** media (riesgo real bajo mientras SPDP no audite)
- **Bloquea a:** compliance completa del ecosistema Francisco.
- **Owner:** Francisco.
- **Detalle:** Francisco tiene sitio web anterior con Meta Pixel instalado capturando datos comunes sin banner de cookies (H-03). Es infracción técnica LOPDP pero riesgo práctico bajo. 3 opciones:
  - **A**: Apagar sitio antiguo cuando `barreraglobal.com` esté online. CERO compliance retroactivo necesario. Riesgo cero. Recomendación si el sitio antiguo no genera negocio activo.
  - **B**: Migrar contenido útil a subdominio `archive.barreraglobal.com` con compliance correcto.
  - **C**: Agregar banner cookies + política básica al sitio antiguo (más trabajo, menos limpio).
- **Próximo paso:** Sesión 9 - Francisco decide entre A, B, C basándose en si el sitio antiguo aún genera leads o tráfico orgánico relevante.

### P-39 — Reunión con abogado humano para validación legal

- **Estado:** ⚪ POR DECIDIR (planificada Sesión 11)
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (deploy a producción con respaldo legal).
- **Owner:** Francisco (agendar) + abogado especializado en LOPDP/SCVS Ecuador.
- **Alcance actualizado (03/08/2026):** los **tres** documentos ya existen y son los que el abogado valida:

  | Documento | Versión | Entregado en |
  |---|---|---|
  | `/privacidad` | v2 (1.0, 01/06/2026) | Sesión 8 |
  | `/terminos` | **v1 (1.0, 02/08/2026)** | rama `publicacion-v1`, commit `cd501fd` |
  | `/cookies` | **v1 (1.0, 02/08/2026)** | rama `publicacion-v1`, commit `6b106e0` |

  Los tres textos son **v1 PENDIENTE DE VALIDACIÓN LEGAL HUMANA**. Esa marca vive **en este documento, no en las páginas**: `/terminos` y `/cookies` se publican sin ningún cartel de borrador, porque un disclaimer de "esto todavía no lo revisa un abogado" en un sitio público resta más de lo que protege. (Excepción heredada: `/privacidad` **sí** muestra hoy un recuadro "DISCLAIMER OPERATIVO" desde Sesión 8 — ver pregunta 9.)

- **Detalle:** llevar los tres a abogado humano REAL (no más análisis IA) para validación vinculante. Preguntas a llevar: (1) `/privacidad` cumple Art. 12 LOPDP completo, (2) qué docs faltan según experto local, (3) registro SPDP DPD - timing y procedimiento, (4) restricciones SCVS para sitio propio bajo paraguas Insurance Trust, (5) marca SENADI - costos y proceso, (6) figura legal: persona natural vs jurídica para escalar, (7) tarifas razonables, **(8)** si las cookies técnicas que pueda fijar el proxy Cloudflare exigen algo más que la mención que ya hace `/cookies` (hoy el sitio no instala ninguna cookie propia), **(9)** si el recuadro "DISCLAIMER OPERATIVO" de `/privacidad` debe seguir visible una vez el sitio sea público o se retira al validar, **(10)** si conviene declarar jurisdicción de una ciudad concreta en `/terminos` — la v1 dice solo "jueces y tribunales competentes del Ecuador".
- **Próximo paso:** reunión presencial o virtual con abogado antes del pase a PÚBLICO. Llevar los tres documentos impresos o PDF. Costo estimado: $80-150 USD por revisión (no redacción desde cero). **Sigue siendo EL gate del lanzamiento.**

### P-40 — Registro de marca "Barrera Global" ante SENADI

- **Estado:** 🔵 BACKLOG (post-deploy, no urgente)
- **Criticidad:** baja
- **Bloquea a:** nada operativo. Solo bloquea protección legal de marca futura.
- **Owner:** Francisco (decide cuándo invertir).
- **Detalle:** registrar "Barrera Global" como marca comercial ante SENADI (Servicio Nacional de Derechos Intelectuales). Costo aproximado: $224 USD (tasa + tramitación). Tiempo de tramitación: 6-9 meses. Beneficio: protección exclusiva del nombre en Ecuador, posibilidad de oponerse a quien lo use sin autorización. NO bloquea el lanzamiento del sitio; se hace en paralelo. Validar primero en abogado (P-39) si vale la pena para una operación individual bajo broker paraguas.
- **Próximo paso:** Francisco evalúa post-deploy, después de tener flujo de negocio establecido y validar viabilidad económica del registro.

### P-41 — Saludo de Aurora vs privacidad v2 (hallazgo 16/07/2026)

- **Estado:** 🔵 BACKLOG (hallazgo registrado; la acción vive en el proyecto Aurora, no en este repo)
- **Criticidad:** media (inconsistencia de compliance entre la política publicada y el comportamiento real de Aurora; riesgo práctico bajo mientras SPDP no audite)
- **Bloquea a:** nada en este repo. Afecta la coherencia de compliance del ecosistema (sitio ↔ Aurora).
- **Owner:** Francisco (coordina con quien mantiene Aurora). Ajuste técnico: proyecto Aurora (`/opt/stack/`).
- **Detalle:** hallazgo del 16/07/2026. El saludo de Aurora se presenta como "asesora virtual", pero la privacidad v2 del sitio (`/privacidad`) declara que el asistente automatizado se identifica como asistente de IA, anclado en la Resolución SPDP-SPD-2026-0009-R. Existe inconsistencia entre lo que el sitio declara y cómo Aurora se presenta realmente. El ajuste del saludo corresponde al proyecto Aurora (`/opt/stack/`), NO a este repo, por R-34 (no modificar comportamiento ni containers de Aurora desde este proyecto). Aquí solo queda registrado el hallazgo para que no se pierda.
- **Próximo paso:** Francisco coordina con quien mantiene Aurora que el saludo del bot se alinee con la declaración de la privacidad v2 (identificación explícita como asistente de IA, Art. 12.4 LOPDP + Res. SPDP-SPD-2026-0009-R). En este repo NO se ejecuta ningún cambio.

### P-42 — Página `/404.astro` premium (con identidad de marca)

- **Estado:** 🔵 BACKLOG (polish pre-deploy Fase 1)
- **Criticidad:** baja (UX; no bloquea funcionalidad, pero conviene tenerla antes del deploy público).
- **Bloquea a:** nada crítico. Mejora la experiencia ante URLs inexistentes en producción.
- **Owner:** Claude (implementa) + Francisco (aprueba copy).
- **Detalle:** hoy NO existe `web/src/pages/404.astro` (páginas actuales: `index`, `sobre-mi`, `contacto`, `privacidad`). Cualquier URL inexistente cae en la 404 por defecto (Astro/nginx sin marca). Falta una página 404 con identidad Barrera Global: paleta `#08080d`/`#c9a84c`, logo, mensaje y CTAs de retorno al home y a secciones clave. NOTA: una 404 premium NO corrige los links rotos del footer (eso es P-43); son entregables distintos (una 404 bonita sigue siendo un 404 para quien hace clic en "Términos"). **Trazabilidad:** este ítem NO tuvo número propio en la bitácora Sesión 8; surge de la reconciliación del 17/07/2026, del mismo hallazgo que motivó la referencia P-46 de la bitácora (ver P-43).
- **Próximo paso:** Claude crea `web/src/pages/404.astro` con el Layout de marca + CTAs de retorno; verificar que el nginx del paquete Docker (commit `53a309c`) sirva correctamente la 404 de Astro (`try_files` / `error_page`).

### P-43 — Links legales del footer que dan 404 (`/terminos`, `/cookies`, `/lopdp`)

- **Estado:** ✅ **CERRADO el 03/08/2026** — ver **R-15** en Resueltos. Las tres rutas quedan resueltas en la rama `publicacion-v1`: `/terminos` y `/cookies` creadas, y `/lopdp` repuntado a `/privacidad` (opción **b**, la que este mismo ítem recomendaba). Verificado sobre el build: **0** enlaces internos rotos en las 12 páginas.
- **Criticidad:** alta (no se debe hacer deploy PÚBLICO con links del footer que devuelven 404).
- **Bloquea a:** ~~deploy público (Fase 2)~~ — ya no bloquea.
- **Owner:** Claude (implementa/repunta) + Francisco (decide destino de `/lopdp`).
- **Detalle:** el Footer (`web/src/components/Footer.astro`) tiene 4 links legales: `/privacidad` (L44, existe ✓), `/terminos` (L49), `/cookies` (L54) y `/lopdp` (L59). Hoy solo existe `/privacidad`; los otros tres devuelven 404. Cobertura actual: la página `/cookies` la crea **P-36** (Sesión 9) y `/terminos` la crea **P-37** (Sesión 10). `/lopdp` ("Cumplimiento LOPDP") NO tiene pendiente que la cree — hay que decidir: (a) crear página `/lopdp`, (b) repuntar el link a `/privacidad` (que ya cubre los 17 ítems Art. 12 LOPDP), o (c) quitar el link. Regla dura: antes del deploy PÚBLICO ningún link del footer puede dar 404. **Trazabilidad:** referenciado en bitácora Sesión 8 como P-46 (numeración de notas, no oficial).
- **Próximo paso:** ninguno. Queda **una decisión abierta de Francisco, cosmética**: el footer muestra ahora "Política de Privacidad" y "Cumplimiento LOPDP" apuntando ambos a `/privacidad`. Si prefiere no duplicar destino, se quita el segundo ítem (opción **c**): es un cambio de una línea en `Footer.astro`.

### P-44 — Optimizar foto `francisco-barrera.jpg` (551 KB)

- **Estado:** 🟡 EN CURSO — **parcialmente resuelto el 22/07/2026** (commit `dd46b82`, Sesión 10 Bloque A): recompresión mozjpeg q82, **551,4 KB → 54,8 KB (−90,1 %)**, mismo nombre y ruta. **Queda abierto el alcance restante: variantes WebP/AVIF con fallback + `srcset` responsivo.** El original venía casi sin comprimir; de ahí el −90 %.
- **Criticidad:** media (performance / LCP; el hero del home carga esta imagen).
- **Bloquea a:** nada funcional. Mejora Lighthouse Performance y LCP antes/después del deploy.
- **Owner:** Claude (optimiza) + Francisco (aprueba resultado visual).
- **Detalle:** `web/public/images/francisco-barrera.jpg` pesa 551 KB y se muestra en el hero del home y en `/sobre-mi`. 551 KB es alto para una imagen above-the-fold. Optimización: convertir a WebP/AVIF con fallback, redimensionar a los tamaños realmente usados y servir `srcset` responsivo. DISTINTO de **P-23** (que trata de reemplazar la foto IA por una sesión fotográfica profesional para E-E-A-T): aquí solo es optimización técnica del archivo actual, sin cambiar la imagen. **Trazabilidad:** referenciado en bitácora Sesión 8 como P-47 (numeración de notas, no oficial).
- **Próximo paso:** Claude genera variantes WebP/AVIF + tamaños responsivos, actualiza el `<img>`/`<picture>` en home y `/sobre-mi`, y re-mide Lighthouse. Objetivo: bajar el peso del hero manteniendo calidad visual.

### P-45 — Informe Aurora actualizado (correr cuestionario + ensamblar)

- **Estado:** ⚪ POR DECIDIR (falta el insumo; la acción vive en el proyecto Aurora)
- **Criticidad:** media (sin el informe no hay foto actualizada del estado de Aurora, que es el activo del que depende todo lo demás por R-23).
- **Bloquea a:** nada en este repo. Bloquea la planificación informada de cualquier trabajo sobre Aurora.
- **Owner:** Francisco (corre el cuestionario en el proyecto Aurora) + Claude (ensambla el informe).
- **Detalle:** pedido en la instrucción de Sesión 10 y registrado verbatim en el snapshot de continuidad, pero nunca formalizado como pendiente numerado. Falta **correr el cuestionario dentro del proyecto Aurora** (`/opt/stack/`, contexto separado de este repo) y con esas respuestas **ensamblar el informe actualizado**. No se puede hacer desde este repo: el conocimiento operativo de Aurora no vive acá y R-34 prohíbe tocar sus containers desde este proyecto. **Trazabilidad:** listado como decisión **D5** en `docs/REPORTE-SESION-10.md`; se formaliza acá el 25/07/2026 para que deje de ser un cabo suelto en un reporte de sesión.
- **Próximo paso:** Francisco confirma el alcance del cuestionario y lo corre en el proyecto Aurora; después se ensambla el informe.

### P-46 — Hooks caídos en el entorno Claude Code de Aurora (control de seguridad fallando en silencio)

- **Estado:** 🔴 BLOQUEADO (la acción vive en el proyecto Aurora, no en este repo)
- **Criticidad:** **alta** — es un control de seguridad que **falla en silencio**: si el hook no existe, no bloquea nada y nadie se entera.
- **Bloquea a:** nada de este repo. Afecta la seguridad operativa del entorno donde se trabaja Aurora.
- **Owner:** Francisco (coordina con quien mantiene Aurora). Corrección técnica: proyecto Aurora.
- **Detalle:** en el entorno Claude Code del proyecto Aurora hay hooks configurados que apuntan a scripts **no encontrados**: `escaner-secretos.sh` y `guard-comandos.sh`. Un hook que apunta a un script inexistente no protege: el comando pasa igual. Son justamente los dos controles que evitarían (a) filtrar secretos y (b) ejecutar comandos peligrosos — el tipo de comando que R-31 a R-35 prohíben en un VPS compartido con Aurora viva. Detectado durante Sesión 10 y registrado verbatim en el snapshot de continuidad; **la corrección NO se ejecuta desde este repo** (R-34: no se modifica el entorno de Aurora desde el proyecto del sitio). **Trazabilidad:** parte de la decisión **D5** en `docs/REPORTE-SESION-10.md`.
- **Próximo paso:** en el proyecto Aurora, verificar la configuración de hooks (`settings.json`), y o bien restaurar los dos scripts en la ruta que esperan, o bien corregir las rutas, o bien quitar los hooks muertos. Verificar después que un hook fallido produzca error visible y no un paso silencioso.

### P-47 — D6: fix de raíz de las capas CSS (`@layer`) — diferido post-lanzamiento

- **Estado:** 🔵 BACKLOG (deuda de arquitectura consciente, diferida a propósito)
- **Criticidad:** baja hoy (mitigación vigente y funcionando) / media a futuro (cada botón nuevo puede repetir el bug).
- **Bloquea a:** nada. Es limpieza de arquitectura, no un fix funcional.
- **Owner:** Claude (implementa) + Francisco (aprueba el cambio visual, porque lo hay).
- **Detalle:** ver **R-43** en `docs/ERRORES-Y-APRENDIZAJES.md` para el diagnóstico completo. Resumen: las reglas base de enlaces de `web/src/styles/global.css` van fuera de toda `@layer` y por eso anulan cualquier utilidad `text-*` de Tailwind sobre un `<a>`, sin importar la especificidad. Fue la causa de los dos botones con texto invisible corregidos el 25/07. La mitigación vigente (color inline en los CTAs dorados + regla propia `.btn-outline` para el hover) funciona y está documentada. El fix de raíz —envolver las reglas base en `@layer base`— haría que las utilidades ganen y **cambiaría el color de todos los enlaces del sitio** (los `text-tx-muted` del Header y del Footer, hoy anulados, pasarían a verse gris apagado en vez de dorado). Eso es un rediseño y toca el aspecto ya aprobado visualmente. **Trazabilidad:** decisión **D6** en `docs/REPORTE-SESION-10.md`.
- **Próximo paso:** sesión dedicada **después del lanzamiento**. Envolver el bloque base en `@layer base`, revisar página por página el cambio de color de enlaces, y recién ahí decidir si se conserva el aspecto actual con reglas explícitas o se adopta el nuevo. Hasta entonces **NO tocar las capas** y respetar la mitigación de R-43.

### P-48 — `og-default.png` no existe: la vista previa al compartir sale rota

- **Estado:** 🟡 EN CURSO (hallazgo del 03/08/2026, rama `publicacion-v1`)
- **Criticidad:** **alta para el lanzamiento**, aunque no rompa ninguna página.
- **Bloquea a:** nada técnico. Afecta directo al canal principal del negocio.
- **Owner:** Francisco (aprueba la imagen) + Claude (la conecta).
- **Detalle:** `Layout.astro` declara `ogImage = "/og-default.png"` y emite `og:image` + `twitter:image` apuntando a `https://barreraglobal.com/og-default.png` **en las 12 páginas**. Ese archivo **no existe** en `web/public/` ni en el build (verificado). Consecuencia: cada vez que alguien comparta un enlace del sitio por WhatsApp, Facebook o LinkedIn, la tarjeta de vista previa sale **sin imagen**. Para un negocio cuyo canal de entrada es justamente WhatsApp, es la primera impresión del sitio y hoy está rota. Es **preexistente**, no lo introdujo esta rama.
- **Próximo paso:** producir un PNG de **1200 × 630** con identidad de marca (fondo `#08080d`, logotipo Cormorant, tagline "Patrimonio que crece. Capital protegido.") y dejarlo en `web/public/og-default.png`. Es una pieza de diseño: la aprueba Francisco. Verificar después con el depurador de enlaces de Facebook y compartiendo el enlace a un WhatsApp propio.

### P-49 — Runtime de React (193 KB) que se hornea en la imagen y nadie usa

- **Estado:** 🔵 BACKLOG (hallazgo del 03/08/2026, rama `publicacion-v1`)
- **Criticidad:** baja (no lo descarga ningún visitante).
- **Bloquea a:** nada.
- **Owner:** Claude.
- **Detalle:** el build emite `dist/_astro/client.*.js`, **193 KB** de runtime de React que produce la integración `@astrojs/react`. Verificado: **0 páginas lo referencian**, porque el sitio no tiene ni una isla React. No afecta la performance del visitante (nunca se pide), pero viaja dentro de la imagen Docker y ensucia la lectura del build. Retirar la integración toca `astro.config.mjs` y `package.json`; no se hace en esta rama para no mover dependencias a tres días del lanzamiento.
- **Próximo paso:** post-lanzamiento, decidir si el sitio va a usar islas React. Si no, quitar `@astrojs/react` + `react` + `react-dom` y rebuildear. Si sí, dejarlo como está.

### P-50 — `sitemap.xml` estático: se mantiene a mano

- **Estado:** 🔵 BACKLOG (alta del 03/08/2026, rama `publicacion-v1`)
- **Criticidad:** baja hoy / media apenas se agreguen páginas (`/aprende`, `/aseguradoras`).
- **Bloquea a:** nada.
- **Owner:** Claude.
- **Detalle:** `web/public/sitemap.xml` se escribió a mano con las 11 URLs públicas. Funciona y es exacto hoy, pero **no se actualiza solo**: cualquier página nueva que no se agregue a mano queda fuera del sitemap, y cualquier página retirada queda listada apuntando a un 404. El riesgo es que se olvide, no que falle.
- **Próximo paso:** post-lanzamiento, evaluar la integración oficial `@astrojs/sitemap`, que lo genera en cada build a partir de las rutas reales. Ojo: genera `sitemap-index.xml` + `sitemap-0.xml`, así que hay que actualizar la referencia de `robots.txt`. Mientras tanto, **regla operativa: página nueva = entrada nueva en `sitemap.xml` en el mismo commit.**

---
## 9. Decisiones cerradas (referencia rápida)

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
| ~~6 productos: vida-termino, vida-indexada, salud-nacional, salud-internacional, auto, inversion~~ **SUPERADA por D1 (25/07/2026): son 5, sin auto** | 25/05/2026 | Sesión 2 |
| Postgres del sitio: REVERTIDO. Sin DB propia. Webhook a Aurora. | 25/05/2026 | Sesión 2 |
| Integración Aurora: webhook directo (NO widget Chatwoot embebido) | 25/05/2026 | Sesión 2 |
| Graceful degradation: Opción C (mensaje + localStorage + reintentar) | 25/05/2026 | Sesión 2 |
| CRM (Kommo, HubSpot, etc.): FUERA del scope. Proyecto futuro aparte. | 25/05/2026 | Sesión 2 |
| D-18: Astro 6.3.8 (no Astro 5) como version oficial del proyecto | 26/05/2026 | Sesión 4 |
| D-19: Solo Aurora publica WhatsApp en el sitio | 26/05/2026 | Sesión 4 |
| D-20: Email LOPDP provisional gmail (hasta P-04) | 26/05/2026 | Sesión 4 |
| D-21: GitHub publico en fbarrerainversiones/sitio-bg-infra | 26/05/2026 | Sesión 4 |
| D-22: Facebook con profile ID numerico | 26/05/2026 | Sesión 4 |
| D-23: Logo tipografico Cormorant (no PNG, hasta SVG real P-30) | 26/05/2026 | Sesión 4 |
| D-24: Foto IA aprobada como imagen oficial provisional | 02/06/2026 | Sesión 5 |
| DM-05: Email LOPDP gmail confirmado provisional | 02/06/2026 | Sesión 5 |
| DM-06: Cedula personal NO se publica en `/privacidad` | 02/06/2026 | Sesión 5 |
| DM-07: "Credencial SCVS personal en tramite" hasta llegue real | 02/06/2026 | Sesión 5 |
| **D1: `/seguros/auto` se retira.** Barrera Global NO ofrece seguro de auto por ahora. La página existía solo como estructura sin copy aprobado (creada en Sesión 10) y nunca estuvo enlazada desde ninguna navegación. Se elimina `web/src/pages/seguros/auto.astro`. Si Francisco lo aprueba a futuro, **se recrea desde cero con copy propio** sobre `ProductLayout` y se agrega al dropdown del Header. Supera la decisión de Sesión 2 de "6 productos". | 25/07/2026 | Sesión 10 |
| **D3: pasada completa de tildes y eñes.** Español de Ecuador correcto en todo el sitio (copy visible, navegación, SEO, JSON-LD y `aria-label`). Rutas y slugs quedan ASCII (`/inversion` sigue siendo `/inversion`). Mapa de ejecución: `docs/INVENTARIO-TILDES_2026-07-25.md`. | 25/07/2026 | Sesión 10 |

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


### R-08 — Stack Astro 6.3.8 confirmado en scaffolding

- **Cerrado:** 26 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** al ejecutar `npm create astro@latest`, npm install descargó Astro 6.3.8 (última versión estable). Decisión D-18: aceptar Astro 6 como versión oficial en lugar de forzar downgrade a Astro 5. Diferencias mínimas para nuestro caso de uso. Documentación: PLAN-MAESTRO-v2.md §3.1 + decisión D-18.
- **Versiones confirmadas:** Astro 6.3.8 + Tailwind v4.3.0 + React 19.2.6 + Fontsource (Cormorant Garamond, Outfit, JetBrains Mono Variable).
- **Commit:** `a19e153` (chore: scaffold inicial Astro 6 con Tailwind v4 y React 19).

### R-09 — Sistema de diseño Brand Book aplicado

- **Cerrado:** 26 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** tokens CSS aplicados con paleta V17 (`#08080d` base + `#c9a84c` gold + `#fafaf7` off-white). Tipografías Cormorant Garamond (headings) + Outfit (body) + JetBrains Mono (código). Tokens CSS variables en `tokens.css` (4.6 KB). Base styles y utilities en `global.css` (7.3 KB). E-20 documentado: Tailwind v4 + arbitrary value en `text-[#hex]` no genera utility, requiere inline style.
- **Commit:** `17ff694` (feat(design): sistema de diseno Brand Book aplicado).

### R-10 — Layout + Header + Footer + componentes de marca

- **Cerrado:** 26 de mayo de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** Layout.astro con SEO completo (meta tags + 3 JSON-LD: Person, InsuranceAgent, Organization). Header.astro sticky con logo tipográfico Cormorant (D-23) + navegación + CTA WhatsApp Aurora. Footer.astro con 4 columnas (Marca, Contacto, Compliance, Social). Logo.astro componente reutilizable con variantes. Decisiones D-19 a D-23 registradas en bitácora.
- **Commit:** `15a214d` (feat(layout): header + footer + componentes de marca aplicados).

### R-11 — Home dinámica con foto + animaciones + 3 productos

- **Cerrado:** 01 de junio de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** home reescrita con: hero personalizado + foto IA aprobada (D-24) + 3 productos (Vida/Salud/Inversión) + bio integrada + sección de contacto. Animaciones CSS puras sin librerías. IntersectionObserver vanilla JS. Hover effects + smooth scroll + foto integrada con marco dorado + glow effect. Fix scroll-mt-24 para anchor navigation con header sticky. HTML balanceado al 100%.
- **Commits relacionados:** `e5c777c` (fix botones invisibles E-22) + `9edd7d5` (home dinámica BLOQUE 4).

### R-12 — Página /privacidad LOPDP Art. 12 completa

- **Cerrado:** 01 de junio de 2026
- **Estado al cerrar:** 🟢 RESUELTO (técnicamente, falta corrección de 7 huecos H-01)
- **Resumen:** página `/privacidad` creada con los 17 ítems obligatorios del Art. 12 LOPDP. Insurance Trust mencionado como broker paraguas. Disclaimer de revisión legal pendiente (P-07) incluido. DM-05: email gmail provisional confirmado. DM-06: cédula personal NO se publica. Análisis legal IA posterior detectó 7 huecos a corregir en Sesión 8 (ver H-01 + P-35).
- **Commit:** `8b531e9` (feat(privacidad): BLOQUE 5 - pagina /privacidad LOPDP Art. 12 completa).

### R-13 — Lighthouse build local 99/95/100/100

- **Cerrado:** 02 de junio de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** Lighthouse audit del build local (`npm run preview`) ejecutado en Microsoft Edge incógnito. Resultados: Performance 99/100, Accessibility 95/100, Best Practices 100/100, SEO 100/100. Promedio 98.5. Build de producción: 1850.2 KB total, 72 archivos, 5.5s de build time, 2 páginas (home + privacidad).
- **Documentación:** PLAN-MAESTRO-v2.md §13 Métricas Lighthouse.
- **Próxima medición:** post-deploy en `barreraglobal.com` con PageSpeed Insights.

### R-14 — Fix de credencial SCVS 572619 incorrectamente atribuida

- **Cerrado:** 02 de junio de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** análisis legal IA externo en Sesión 5 reveló que la credencial 572619 que aparecía en Footer/index/privacidad como personal de Francisco es en realidad la credencial corporativa de Insurance Trust. Atribuirla al APS individual sería regulatoriamente incorrecto. Acción: removida de los 3 archivos, reemplazada por "credencial SCVS personal en tramite" (DM-07). Generó error documentado E-23.
- **Commits relacionados:** `451121f` (fix de seguridad) + `3f77744` (corrección por backup commiteado por error + endurecimiento .gitignore + regla R-39 nueva).

### R-15 — Links legales del footer que daban 404 (cierre de P-43)

- **Cerrado:** 3 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** las tres rutas legales que el footer enlazaba sin destino quedaron resueltas en la rama `publicacion-v1`. `/terminos` v1 creada (commit `cd501fd`), `/cookies` v1 creada (commit `6b106e0`) y `/lopdp` repuntado a `/privacidad` (commit `faa00cf`), que es la opción (b) recomendada por el propio P-43. Verificación sobre el build, no sobre el fuente: **369 referencias internas, 13 rutas distintas, 0 rotas** en las 12 páginas; **0** apariciones residuales de `href="/lopdp"`.
- **Nota de alcance:** cierra el **gate de higiene**, no el gate legal. Los textos de `/terminos` y `/cookies` son v1 y siguen pendientes de validación humana en **P-39**.
- **Commits relacionados:** `cd501fd`, `6b106e0`, `faa00cf`.

---
**Fin del documento PENDIENTES.md.**

**Próxima revisión:** al cierre de cualquier item activo o al inicio de la siguiente sesión.




