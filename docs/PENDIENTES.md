# PENDIENTES — Sitio Barrera Global

> **Lista viva única.** Todos los cabos sueltos del proyecto en un solo archivo. Se actualiza con cada sesión que cierre un item o detecte uno nuevo.

**Última actualización:** 17 de agosto de 2026, madrugada — **SESIÓN 19: PRIMERA SESIÓN CORRIDA DENTRO DEL VPS, con el usuario `web`.** Cierres: **P-04 → R-22** (el sitio deja el Gmail y usa `contacto@barreraglobal.com` y `privacidad@barreraglobal.com`; buzón confirmado por Francisco antes de ejecutar), **R-23** (accesibilidad del footer: 91-92 → **100** en las tres páginas medidas, contra un objetivo declarado de 95) y **R-24** (el deploy que esperaba bajo veda **se ejecutó el 17/08**: P-54 F1 y P-55 están en producción y el sitio público ya no está desfasado del repo). Entregas nuevas de esta sesión, **construidas y commiteadas en local, sin publicar**: selector de contacto con cinco marcadores `BG-CTA-*`, barra fija de WhatsApp en móvil y **dieta de fuentes** (65 archivos y 1.005,9 KB → 15 y 303,6 KB; 36 bloques `@font-face` → 11; CSS render-blocking 52,9 → 42,9 KB) con precarga de la fuente del LCP. Altas: **P-57** (medir la dieta y podar JetBrains), **P-58** (arreglo de raíz del observer), **P-59** (`name: sitio-bg` en el compose), **P-60** (legibilidad de la razón social a 12 px en monoespaciada), **P-61** (definir RASA y LAA) y **P-62** (Google Search Console). Antes, el 10 de agosto — **DÍA 1 DEL SITIO PÚBLICO: SE CERRARON LOS TRES ÍTEMS ABIERTOS DEL LANZAMIENTO**. **P-51 → R-19**: la casilla `privacidad@` quedó **PROBADA** (Cloudflare 1 recibido / 1 entregado; el correo llegó al Gmail de Francisco a las 11:53, en Spam, se aplicó «No es spam») — era el **último gate operativo** y ya no existe. **P-55 → R-20**: Francisco decidió **SÍ** al recuadro oscuro del `logo.svg` y quedó ejecutado (commit `fd8316b`), pendiente solo del deploy. **P-56 → R-21**: misión, visión y valores **aprobados**; el Manual de Marca pasó de v3.0 propuesta a **v3.1 FINAL** y se entregó al manager de marketing, con la **capa comercial del símbolo** (basamento = método, columnas = vida y salud, frontón = inversión) como narrativa oficial, anotada en **P-54**. Además, **P-54 F1 quedó CONSTRUIDA** en `main` (7 commits, `be196c5..69f83bd`) pero **NO desplegada**: rige **veda de infraestructura compartida** por la ventana de promoción a producción de Aurora. El deploy de F1 + P-55 sale junto, post-veda. Antes, el 9 de agosto por la noche — **EL SITIO ES PÚBLICO Y YA TIENE SÍMBOLO PROPIO**. La producción del logo P3 (fase 1 de **P-52**) quedó **desplegada y verificada en producción**. Altas de la noche: **P-54** (experiencia visual del home, 4 fases), **P-55** (recuadro opcional del `logo.svg`) y **P-56** (aprobar misión/visión/valores del Manual v3.0). Queda registrada la lección de caché: el Purge de Cloudflare va **después** del deploy, nunca antes. Antes, esa misma tarde (Sesión 13). Se ejecutó el switch: `barreraglobal.com` y `www` sirven el sitio real. Altas de esta tanda: **P-52** (producción del logo P3, decisión **D-29**) y **P-53** (renombrar `basicauth` → `basic_auth`, con método inode-safe). **P-51 queda ABIERTO**: la casilla `privacidad@` está configurada pero sin prueba de recepción, y Francisco decidió lanzar igual — configurar sin probar sigue sin contar. Antes, esa misma mañana: **P-39 CERRADO como R-18** (el abogado aprobó las tres páginas legales y el recuadro "DISCLAIMER OPERATIVO" de `/privacidad` se retiró, commit `6772a51`) y **P-42 CERRADO como R-17**: nginx ya sirve la 404 premium — `error_page 404 /404.html;` en `infra/nginx.conf`, commit `8c7c18a`, aplicado con rebuild de la imagen y verificado en el navegador sobre staging. El 5 de agosto: merge de `publicacion-v1` a `main` y **staging completo y navegable**. P-39 ampliado con la **inconsistencia de redacción del "trámite"** entre páginas de presentación y páginas legales. Reconciliación anti-fantasma: **P-42** afirmaba que `404.astro` no existía y sí existe desde Sesión 10; **P-06** mandaba editar un texto que ya no está en Footer ni en index; **P-23** citaba 551 KB de foto cuando P-44 la dejó en 54,8 KB. El 04/08: **política de privacidad v3** con el dictamen verbal del abogado, **P-48 CERRADO** (R-16), P-39 pasa a esperar el visto bueno **escrito**, alta de **P-51**. El 03/08: P-43 cerrado como R-15, P-37 entregado v1, P-36 parcial, alta de P-48, P-49 y P-50)
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

- **Estado:** ✅ **CERRADO el 17/08/2026** (Sesión 19, commit local `0b22bd0`) — ver **R-22** en Resueltos. El sitio ya no muestra ninguna dirección de Gmail: **8 apariciones en 5 archivos** pasaron al dominio propio. Siete a `contacto@barreraglobal.com` (footer, `/contacto`, los dos bloques de `/terminos` y el campo `email` del JSON-LD `InsuranceAgency`) y **una a `privacidad@barreraglobal.com`** — la sección 9 de `/cookies`, que no es contacto comercial sino el canal de un instrumento de protección de datos. Francisco confirmó **antes de ejecutar** que el buzón existe y recibe.
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
- **Próximo paso:** cuando llegue la credencial, ejecutar en una sola sesión (30 min total). **Ojo: el mapa de archivos cambió el 05/08/2026** (commit `e921dc8`) — las páginas de presentación ya NO dicen "en trámite", así que buscar ese texto ahí no encuentra nada (esto es exactamente el fantasma que R-22 previene). Estado real al 05/08/2026, a re-verificar antes de editar:
  1. `Footer.astro` (L136) — hoy dice "Operando bajo Insurance Trust · Bróker registrado ante la SCVS". Cuando llegue la credencial propia, decidir si se agrega y cómo.
  2. `index.astro` (L267) — hoy dice "Opero bajo Insurance Trust, bróker registrado ante la SCVS". Mismo criterio.
  3. `privacidad.astro` (L72) — **sí** conserva "en trámite ante la SCVS". Página legal: el cambio lo valida el abogado (P-39).
  4. `terminos.astro` (L79) — **sí** conserva "Su credencial SCVS personal se encuentra en trámite". Página legal: ídem.
  5. Hacer documento auto-nombramiento DPD.
  6. Subir al portal SPDP (registro DPD = P-34).
  7. Commit + push con mensaje "feat: credencial SCVS personal recibida + DPD registrado".

### P-07 — Revisión legal de la política de privacidad LOPDP

- **Estado:** 🟡 EN CURSO — **superado en su mayor parte por la v3** (04/08/2026): el dictamen verbal del abogado humano ya está incorporado. Lo que resta es el **visto bueno escrito**, que se sigue en **P-39**.
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
- **Detalle:** ACTUALIZACION SESION 5: Francisco aprobó foto retocada con IA como imagen oficial provisional del sitio (D-24). Se muestra en hero de home y eventualmente en `/sobre-mi`. Archivo: `web/public/images/francisco-barrera.jpg` (**54,8 KB** desde la recompresión de P-44 el 22/07/2026; el "551 KB" que decía este ítem quedó obsoleto y se corrige acá el 05/08). NO bloquea lanzamiento. Eventualmente reemplazar con sesión fotográfica profesional para mejorar autoridad E-E-A-T.
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

- **Estado:** 🟢 LISTO — **cubierto y superado por la v3** (04/08/2026, commit `65b3dd4`). Los 7 huecos se cerraron primero en la v2 (Sesión 8) y la v3 los reemplaza con el texto del abogado. Se cierra junto con **P-39**, cuando llegue el visto bueno escrito.
- **Criticidad:** alta
- **Bloquea a:** Fase 2 (lanzamiento a producción), solo a través de P-39.
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

- **Estado:** ✅ **CERRADO el 09/08/2026** (commit `6772a51`) — ver **R-18** en Resueltos. Registro del cierre, textual: *«Aprobación del abogado recibida 09/08/2026; disclaimer retirado; respaldo escrito de una línea solicitado vía WhatsApp; dictamen formal solo requerido en escenario de auditoría LOPDP (criterio del abogado)»*. El abogado revisó **las páginas renderizadas en staging**, como estaba previsto, no el markdown.
- **Criticidad:** alta
- **Bloquea a:** ~~Fase 2 (deploy a producción con respaldo legal)~~ — ya no bloquea. Fue el último gate legal, y con él cerrado **el switch a público se ejecutó ese mismo día** (Sesión 13). El único ítem del lanzamiento que quedó abierto es **P-51**, por decisión explícita de Francisco.
- **Owner:** Francisco (agendar) + abogado especializado en LOPDP/SCVS Ecuador.
- **Pregunta abierta que dejó esta implementación:** el §9 de la v3 dice que «al ingresar por primera vez, el sitio muestra un aviso informativo». Se implementó como **línea permanente al pie** en las 12 páginas, no como banner de primera visita: un banner exigiría JavaScript y almacenamiento para recordar el descarte, que es justo lo que el mismo §9 declara que el sitio no usa. **¿El abogado da por cumplido el principio de transparencia con la línea permanente?** Si exige el banner de primera visita, hay que revisar también el texto del §9 y de `/cookies`.
- **Inconsistencia de redacción abierta (05/08/2026) — la resuelve el abogado:** el sitio dice hoy **dos cosas distintas** sobre la credencial personal de Francisco, según la página:

  | Página | Tipo | Texto vigente |
  |---|---|---|
  | Footer (las 12 páginas) | presentación | "Operando bajo Insurance Trust · Bróker registrado ante la SCVS" |
  | `/` (bloque "Sobre mí") | presentación | "Opero bajo Insurance Trust, bróker registrado ante la SCVS" |
  | `/privacidad` §1 | **legal** | "La credencial personal de asesor productor … se encuentra **en trámite** ante la SCVS" |
  | `/terminos` §2 | **legal** | "Su credencial SCVS personal se encuentra **en trámite**" |

  Las de presentación se cambiaron el 05/08 a pedido de Francisco (commit `e921dc8`): ya no declaran nada sobre la credencial personal y atribuyen el registro a Insurance Trust, que es quien efectivamente lo tiene (coherente con **E-23**). Las **legales NO se tocaron a propósito**, porque están bajo revisión y su redacción es decisión del abogado. **Pregunta (11) para la reunión: ¿se unifica la redacción, y en qué sentido?** Opciones sobre la mesa: (a) las legales dejan de mencionar el trámite, (b) las de presentación vuelven a mencionarlo, (c) se acepta la asimetría porque el nivel de detalle legal es distinto del comercial. Mientras no se resuelva, el sitio público mostraría dos versiones del mismo hecho.
- **Alcance actualizado (03/08/2026):** los **tres** documentos ya existen y son los que el abogado valida:

  | Documento | Versión | Entregado en |
  |---|---|---|
  | `/privacidad` | **v3 (03/08/2026, dictamen verbal incorporado)** | rama `publicacion-v1`, commit `65b3dd4` · fuente: `docs/legal/POLITICA-PRIVACIDAD-V3-2026-08-03.md` (`398b039`) |
  | `/terminos` | **v1 (1.0, 02/08/2026)** | rama `publicacion-v1`, commit `cd501fd` |
  | `/cookies` | **v1 (1.0, 02/08/2026)** | rama `publicacion-v1`, commit `6b106e0` |

  Los tres textos son **v1 PENDIENTE DE VALIDACIÓN LEGAL HUMANA**. Esa marca vive **en este documento, no en las páginas**: `/terminos` y `/cookies` se publican sin ningún cartel de borrador, porque un disclaimer de "esto todavía no lo revisa un abogado" en un sitio público resta más de lo que protege. (Excepción heredada, ya cerrada: `/privacidad` mostró un recuadro "DISCLAIMER OPERATIVO" desde Sesión 8 y **se retiró el 09/08/2026** al llegar la aprobación — ver pregunta 9.)

- **Detalle:** llevar los tres a abogado humano REAL (no más análisis IA) para validación vinculante. Preguntas a llevar: (1) `/privacidad` cumple Art. 12 LOPDP completo, (2) qué docs faltan según experto local, (3) registro SPDP DPD - timing y procedimiento, (4) restricciones SCVS para sitio propio bajo paraguas Insurance Trust, (5) marca SENADI - costos y proceso, (6) figura legal: persona natural vs jurídica para escalar, (7) tarifas razonables, **(8)** si las cookies técnicas que pueda fijar el proxy Cloudflare exigen algo más que la mención que ya hace `/cookies` (hoy el sitio no instala ninguna cookie propia), **(9)** si el recuadro "DISCLAIMER OPERATIVO" de `/privacidad` debe seguir visible una vez el sitio sea público o se retira al validar (**resuelto: se retiró el 09/08/2026**, commit `6772a51`), **(10)** si conviene declarar jurisdicción de una ciudad concreta en `/terminos` — la v1 dice solo "jueces y tribunales competentes del Ecuador", **(11)** cómo se unifica la redacción del "trámite" de la credencial personal entre páginas de presentación y páginas legales (ver la tabla de inconsistencia arriba).
- **Qué dejó y qué no dejó resuelto la aprobación (leer antes de reabrir nada):** la aprobación es **global sobre las tres páginas tal como se renderizan en staging**. Eso cierra la pregunta (9) por la vía de retirar el recuadro. Las preguntas (8), (10) y (11) quedan cerradas **por aceptación del conjunto**, no por un pronunciamiento punto por punto: el abogado aprobó las páginas con el aviso de cookies como línea permanente al pie, con la jurisdicción genérica de `/terminos` y con la asimetría del "trámite" tal cual está (las páginas legales lo mencionan, las de presentación no), que en la práctica es la opción **(c)** de la tabla de arriba. Si Francisco quiere constancia específica sobre alguna de esas tres, hay que pedirla junto con el respaldo escrito.
- **Próximo paso:** ninguno para publicar. Queda un cabo administrativo, **no bloqueante**: recibir el **respaldo escrito de una línea** ya solicitado por WhatsApp y archivarlo. El dictamen formal completo solo se pide si aparece una auditoría LOPDP, por criterio del propio abogado.

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

- **Estado:** ✅ **CERRADO el 09/08/2026** (commit `8c7c18a`) — ver **R-17** en Resueltos. La sospecha que este ítem dejó anotada era correcta: nginx **no** la servía. Se agregó `error_page 404 /404.html;` a `infra/nginx.conf`, se reconstruyó la imagen en el VPS (R-44: el pull no basta) y Francisco confirmó **en el navegador** (R-46) que una URL inexistente de staging ya renderiza la 404 de marca.
- **Criticidad:** baja (UX; no bloquea funcionalidad, pero conviene tenerla antes del deploy público).
- **Bloquea a:** nada crítico. Mejora la experiencia ante URLs inexistentes en producción.
- **Owner:** Claude (implementa) + Francisco (aprueba copy).
- **CORRECCIÓN ANTI-FANTASMA (05/08/2026):** este ítem afirmaba que "hoy NO existe `web/src/pages/404.astro`" y listaba solo 4 páginas. **Es falso desde Sesión 10:** el archivo existe, entra en el build (`/404.html`) y las páginas son **12**, no 4. El texto quedó congelado en el estado de julio. Lo que sigue realmente abierto es solo la **verificación en el servidor**, no la creación de la página.
- **Detalle:** `web/src/pages/404.astro` existe y usa el Layout de marca (paleta `#08080d`/`#c9a84c`, logo, mensaje y CTAs de retorno). Lo que **no** estaba verificado era que nginx la sirviera, y en efecto **no la servía**: `infra/nginx.conf` usaba `try_files $uri $uri/ =404` **sin ninguna directiva `error_page`** (verificado el 08/08/2026: en todo el archivo había una sola aparición de "404", la del propio `try_files`), así que el 404 interno moría en la página empotrada de nginx. Corregido en el commit `8c7c18a`. NOTA: una 404 premium NO corrige links rotos del footer (eso era P-43, ya cerrado); son entregables distintos. **Trazabilidad:** este ítem NO tuvo número propio en la bitácora Sesión 8; surge de la reconciliación del 17/07/2026, del mismo hallazgo que motivó la referencia P-46 de la bitácora (ver P-43).
- **Próximo paso:** ninguno en staging. Queda un solo cabo, del pase a público: **repetir la misma prueba en producción** después del switch. Es la misma imagen, así que el resultado es esperable, pero la verificación en vivo se hace igual (una URL inventada en el dominio público).

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
- **Detalle:** `web/public/images/francisco-barrera.jpg` **pesaba** 551 KB y se muestra en el hero del home y en `/sobre-mi`; 551 KB era alto para una imagen above-the-fold. Tras la recompresión del 22/07 el archivo está en **54,8 KB** (verificado el 05/08), así que el problema de peso bruto ya no existe y lo que queda abierto es solo el formato moderno y el responsivo. Optimización: convertir a WebP/AVIF con fallback, redimensionar a los tamaños realmente usados y servir `srcset` responsivo. DISTINTO de **P-23** (que trata de reemplazar la foto IA por una sesión fotográfica profesional para E-E-A-T): aquí solo es optimización técnica del archivo actual, sin cambiar la imagen. **Trazabilidad:** referenciado en bitácora Sesión 8 como P-47 (numeración de notas, no oficial).
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

- **Estado:** ✅ **CERRADO el 04/08/2026** (commit `f64d53c`) — ver **R-16** en Resueltos. El defecto técnico (etiqueta apuntando a un archivo inexistente) ya no existe, y la pieza está desplegada en staging desde el 05/08. **Queda un solo cabo, no técnico: el visto bueno visual de Francisco.** Es de los ítems a revisar en la pasada de aprobación del staging completo.
- **Criticidad:** **alta para el lanzamiento**, aunque no rompa ninguna página.
- **Bloquea a:** nada técnico. Afecta directo al canal principal del negocio.
- **Owner:** Francisco (aprueba la imagen) + Claude (la conecta).
- **Detalle:** `Layout.astro` declara `ogImage = "/og-default.png"` y emite `og:image` + `twitter:image` apuntando a `https://barreraglobal.com/og-default.png` **en las 12 páginas**. Ese archivo **no existe** en `web/public/` ni en el build (verificado). Consecuencia: cada vez que alguien comparta un enlace del sitio por WhatsApp, Facebook o LinkedIn, la tarjeta de vista previa sale **sin imagen**. Para un negocio cuyo canal de entrada es justamente WhatsApp, es la primera impresión del sitio y hoy está rota. Es **preexistente**, no lo introdujo esta rama.
- **Próximo paso:** una vez el sitio esté en línea, verificar con el depurador de enlaces de Facebook y compartiendo el enlace a un WhatsApp propio. **Nota de tipografía:** la pieza se generó con **Garamond** del sistema, no con Cormorant Garamond: Fontsource entrega la fuente en `.woff/.woff2` y GDI+ solo carga `.ttf/.otf`. Es la misma familia histórica y el resultado es coherente con el logo tipográfico, que también es provisional (D-23). Si Francisco quiere la Cormorant exacta, hay que rehacer la pieza en una herramienta de diseño.

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

### P-51 — `privacidad@barreraglobal.com`: configurado, falta PROBAR recepción

- **Estado:** ✅ **CERRADO el 10/08/2026** — ver **R-19** en Resueltos. **El correo de prueba llegó.** Cloudflare Email Routing reporta **1 recibido / 1 entregado** y el mensaje aterrizó en el Gmail de Francisco a las **11:53**, en la carpeta **Spam**; se le aplicó **«No es spam»**. Evidencia: captura de Francisco. El criterio de cierre se cumplió tal como estaba escrito —no se cerró por estar configurado, se cerró por estar **probado**—, y con eso muere el último gate operativo del lanzamiento.
- **Estado anterior (para que no se relea mal el histórico):** 🟡 EN CURSO — ABIERTO desde el 04/08/2026. Al 09/08/2026 la casilla estaba **CONFIGURADA** pero sin prueba: Email Routing seguía en **«Sincronizando»**. **Criterio de cierre de entonces, cumplido hoy: CONFIGURAR SIN PROBAR NO CUENTA.**
- **Decisión de Francisco registrada (09/08/2026):** **se lanzó el sitio con este ítem en curso.** El switch a público se ejecutó sin esperar la prueba de recepción, con la regla ya creada y sincronizando. Es una decisión consciente, no un descuido, y queda escrita acá para que nadie la reinterprete después: el ítem **NO se cierra** hasta que haya un correo probado.
- **Criticidad:** **alta.** Ya no es pre-requisito del switch —el switch ya ocurrió— pero el sitio está público prometiendo por escrito un plazo de respuesta de 15 días sobre esa dirección. Mientras no esté probada, el riesgo es real y corre desde hoy.
- **Bloquea a:** nada técnico. Es exposición legal viva mientras siga sin probarse.
- **Owner:** **Francisco** (es tarea manual en Cloudflare; no se puede hacer desde este repo).
- **Detalle:** la política de privacidad **v3** publica `privacidad@barreraglobal.com` como canal para ejercer derechos LOPDP, y lo hace **cuatro veces** (§1 contacto del responsable, §8 detalle de transferencias, §10 ejercicio de derechos con plazo de 15 días, §13 reclamos). **Esa casilla todavía no existe.** Publicar un canal de derechos que no recibe correo es peor que no publicarlo: se promete por escrito un plazo de respuesta de 15 días sobre una dirección que rebota. Hasta ahora el sitio usaba `fbarrera.inversiones@gmail.com` (D-20 / DM-05, ver **P-04**), que sigue siendo el contacto en `/terminos`, `/cookies` y el footer — con la v3 el sitio queda con **dos** direcciones distintas según la página.
- **Próximo paso:** (1) ~~configurar Cloudflare Email Routing~~ **hecho el 09/08/2026**; (2) ~~enviar un correo de prueba desde fuera confirmando que llega~~ **hecho el 10/08/2026 a las 11:53 — cierra el ítem**; (3) **lo único que sobrevive de este ítem:** decidir si `/terminos`, `/cookies` y el footer se unifican a una dirección del dominio propio, que es **P-04** y sigue abierto por su cuenta.
- **Cabo operativo que deja abierto el cierre:** el correo aterrizó en **Spam**. Se aplicó «No es spam», que educa a esa bandeja pero no arregla la reputación del dominio. Si `privacidad@` es el canal de derechos con plazo de 15 días, conviene revisar SPF/DKIM/DMARC del dominio antes de que un ejercicio de derechos real se pierda en una carpeta que nadie mira. No bloquea nada hoy; queda anotado acá para que no se olvide.

### P-52 — Producción final del logo P3 "Arquitectónica" (trazados, favicon, aplicación)

- **Estado:** 🟡 EN CURSO — **fase 1 COMPLETADA Y DESPLEGADA EN PRODUCCIÓN el 09/08/2026**. No es "listo en el repo": el rebuild se ejecutó y se verificó en vivo — `favicon.svg` **200**, `logo.svg` **200**, container **healthy**, **Gate 0 5/5**. El símbolo P3 está sirviéndose en `barreraglobal.com`. **Lo único que queda es la papelería y los mockups finales.**
- **⚠️ Lección de caché (09/08/2026, ventana 18:40–21:15):** durante ~2 h 35 min el borde de Cloudflare siguió entregando el **favicon viejo de Astro** aunque el origen ya servía el nuevo. Causa: el **Purge se ejecutó ANTES** de desplegar los assets, así que volvió a cachear lo viejo. **Regla: el Purge de Cloudflare va SIEMPRE DESPUÉS del deploy de assets cacheables, nunca antes.** Y la verificación se hace en **incógnito**, porque el caché del navegador propio miente igual que el del borde. Aplica a cualquier cambio futuro en `favicon.*`, `logo.svg`, `og-default.png` o `/images/` — todos con `expires` largo en `infra/nginx.conf`.
- **Fase 1, entregada (commits `d38da29`, `5f9e65d`, `3d84f01`):**
  - `web/public/favicon.svg` — cuadrado redondeado `#08080d` con el pórtico dorado. **Reemplaza el logo por defecto de Astro**, que se venía sirviendo desde mayo y que, con el sitio ya público, era lo que aparecía en la pestaña de cualquier visitante.
  - `web/public/logo.svg` — pórtico limpio, geometría idéntica a la fuente. **Cierra el fantasma del JSON-LD:** el campo `logo` de `InsuranceAgency` declaraba `https://barreraglobal.com/logo.svg` sobre un archivo que no existía, en las 12 páginas.
  - `web/public/apple-touch-icon.png` (180×180, a sangre sobre `#08080d`), `web/public/favicon-32.png` (fallback) y `web/public/favicon.ico` regenerado — el de Astro **no era un ICO**, era un PNG con extensión `.ico`, y los navegadores lo piden solos aunque no esté enlazado.
  - `web/src/components/Portico.astro` — el símbolo como componente único, usado por el **header** (a la izquierda del wordmark, que sigue siendo texto HTML) y por el **footer**. 24 instancias verificadas sobre el build, dos por página.
  - Simplificaciones del símbolo para tamaño pequeño, verificadas rasterizando y mirando el resultado: se colapsan arquitrabe y segunda línea de basamento (a 16 px quedaban a menos de 1 px de su vecina), el trazo sube de 1.4 a 5.4 y el frontón va como triángulo cerrado. El pórtico **completo** de 9 trazos se conserva en `logo.svg`, que se usa a tamaño grande.
- **Criticidad:** media (identidad de marca; el wordmark del sitio sigue siendo el tipográfico de **D-23**, que sigue funcionando).
- **Bloquea a:** nada del sitio en vivo. Bloquea el cierre de **P-30** (logo vectorial) y **P-31** (variantes). **P-32** (favicon en múltiples tamaños) queda **cubierto de hecho** por la fase 1 — falta solo cerrarlo formalmente.
- **Owner:** Claude (produce) + Francisco (aprueba cada entrega).
- **Detalle:** Francisco eligió la propuesta **P3 "Arquitectónica"** (el pórtico) entre las tres presentadas el 09/08. La fase 2 de producción incluye: **convertir el texto a trazados** para que el SVG no dependa de que la fuente esté instalada, generar el **favicon** en los tamaños reales de uso, y preparar la **aplicación** de la marca (variante horizontal, cuadrada, monograma, versiones sobre fondo claro y oscuro).
- **Dónde está la galería (ruta nueva, 09/08/2026):** `docs/marca/brand-propuestas/` — las 6 piezas SVG (3 propuestas × cuadrada y horizontal), el `index.html` de evaluación y las 7 tipografías `.woff2` que usa esa página. **Galería archivada post-elección D-29; para la producción final usar `docs/marca/brand-propuestas/` como referencia; corregir Quito→Ambato y el CTA del mockup en los entregables finales.** Vivía en `web/public/brand-propuestas/`, y todo lo que está en `web/public/` lo copia Astro a `dist/` y viaja dentro de la imagen: con el sitio ya público habría quedado alcanzable en `barreraglobal.com/brand-propuestas/` al primer rebuild. Se movió con `git mv` a `docs/`, que no entra al build. **Regla general que deja este ítem: material interno de marca NO se guarda en `web/public/`.**
- **FLAG DE AUDITORÍA para la producción — dos errores del mockup que NO deben viajar a la pieza final:**

  | Elemento del mockup | Dice | Debe decir |
  |---|---|---|
  | Ciudad en la tarjeta | "Quito, Ecuador" | **"Ambato, Ecuador"** — Francisco opera desde Ambato, Tungurahua (es lo que declaran el JSON-LD y `/privacidad`) |
  | CTA de la tarjeta | "Agenda tu asesoría" | **el CTA vigente del manual v2.0** — "Agenda tu asesoría" es el copy viejo |

- **Próximo paso (fase 2, lo único abierto):** **papelería y mockups finales** — tarjeta, firma de correo, plantillas de redes. Los dos fixes de la tabla se aplican **ahí**: «Quito» → **Ambato** y el CTA viejo → el del manual v2.0. Ninguno de los dos textos entró a los assets de la fase 1, porque esta entrega es **solo símbolo**: no lleva una sola palabra nueva. Falta además la conversión de **texto a trazados**, que aplica a las piezas con wordmark de la papelería, no al pórtico (el símbolo es pura geometría, no tiene texto).

### P-53 — Cambiar `basicauth` por `basic_auth` en el Caddyfile (mantenimiento)

- **Estado:** 🔵 BACKLOG (alta del 09/08/2026, Sesión 13).
- **Criticidad:** baja hoy. La directiva `basicauth` **funciona**: es el nombre antiguo y Caddy lo sigue aceptando. Sube a media el día que se actualice Caddy y el nombre viejo deje de existir.
- **Bloquea a:** nada. Es higiene, no un fix.
- **Owner:** Claude (prepara el bloque) + Francisco (lo ejecuta en el VPS).
- **Detalle:** el candado de `staging.barreraglobal.com` usa `basicauth`, que en las versiones actuales de Caddy se llama **`basic_auth`**. Mientras el alias siga soportado no rompe nada, pero es exactamente el tipo de deuda que aparece en el peor momento: durante una actualización de Caddy, sobre el archivo compartido y con Aurora en la misma config.
- **Próximo paso:** cuando se toque el Caddyfile por cualquier otro motivo, aprovechar el viaje y renombrar la directiva. **Obligatorio hacerlo con método inode-safe (R-48):** nada de `sed -i` ni `mv` sobre el archivo bind-monteado; edición que preserve el inodo, validación con `--adapter caddyfile` (R-50) y verificación de que el container esté leyendo el archivo nuevo antes de recargar.

### P-54 — Experiencia visual del home (estilo Apple)

- **Estado:** 🟡 EN CURSO (alta del 09/08/2026, Sesión 13). **F1 CONSTRUIDA el 10/08/2026** y **DESPLEGADA A PRODUCCIÓN el 17/08/2026**, junto con P-55, cuando se levantó la veda de Aurora. La sección «El pórtico que se construye» está en vivo en `barreraglobal.com`. F2 a F4 esperan insumos.
- **Criticidad:** media. El sitio ya convierte sin esto; es la capa que lo separa de un sitio correcto y lo vuelve memorable.
- **Bloquea a:** nada. Ninguna fase bloquea a la siguiente salvo por los insumos que cada una necesita.
- **Owner:** Claude (implementa) + Francisco (aprueba y entrega los insumos de F2 y F4).
- **Principio que ordena las cuatro fases:** la geometría es **la oficial del repo** —`web/src/components/Portico.astro` y `web/public/logo.svg`—, no una versión dibujada de nuevo para la animación. Si el símbolo cambia, cambia en un solo lugar.
- **Capa comercial del símbolo — narrativa OFICIAL de marca (Manual v3.1, 10/08/2026, cierre de P-56):** las partes del pórtico ya no son solo arquitectura, tienen lectura de negocio y esta es la versión sellada:

  | Parte del pórtico | Qué significa comercialmente |
  |---|---|
  | **Basamento** | el **método** (el diagnóstico, lo que sostiene todo lo demás) |
  | **Columnas** | **vida y salud** (las coberturas que sostienen) |
  | **Frontón** | **inversión** (el patrimonio que corona) |

  Esto es lo que **cualquier pieza futura debe respetar**: reels, papelería, F4, y cualquier reescritura del copy de la sección `#metodo`. Ojo con el desfase que ya existe: la sección F1 construida hoy usa la lectura **arquitectónica** («Luego, el respaldo» sobre las columnas, «Encima, la protección» sobre dintel y arquitrabe), que **no contradice** esta tabla pero tampoco la enuncia. Alinear ambas es decisión de copy de Francisco, no deuda técnica.

| Fase | Qué | Estado / bloqueo |
|---|---|---|
| **F1** | **«El pórtico que se construye»** — el símbolo se dibuja solo a medida que el visitante baja: SVG animado por scroll, **CSS puro, cero JavaScript**. Sin JS no hay `<script>` nuevo, y por lo tanto **ningún hash CSP nuevo** que regenerar (R-44). | ✅ **CONSTRUIDA** (10/08/2026). Falta verla en el navegador y desplegarla. |
| **F2** | **Video hero de impacto** — 15-25 s, en loop, **sin audio**, **menos de 8 MB**, con `poster` para la primera pintura, tratamiento visual del Brand Book. | Espera el **MP4 de Francisco** (HeyGen / Krea). |
| **F3** | **Loops ambientales** por página de producto. | Después de F2, con el mismo tratamiento. |
| **F4** | **Avatar HeyGen de Francisco** — **solo para reels primero**. Los guiones pasan por **las 4 puertas** antes de grabar. | **Nunca debuta en el sitio.** El sitio es el último lugar donde aparece, si aparece. |

- **F1 — lo que quedó construido (10/08/2026, commits `e85bd0d`, `954ca63`, `57a4ee1`, `e82887e`, `d2f8956`, `7b2c878`):**
  - `web/src/components/PorticoConstruye.astro` — sección `#metodo` del home, entre el hero y `#productos`. Cinco bloques de texto (4 etapas + cierre) y un visor `sticky` con el pórtico.
  - Geometría **verbatim de `web/public/logo.svg`**: los 9 trazos, mismas coordenadas, mismo `viewBox 0 0 100 100`, `stroke-width` 1.4, `linecap` square. Cada trazo pasó de `<line>`/`<polyline>` a `<path>` (misma coordenada, letra por letra) porque `pathLength` está garantizado en `<path>` en todos los motores. Mapeo: **basamento** `18,87→82,87` + `23,82→77,82`; **columnas** x=30/43/57/70 de y=82 a y=51 (son **4**, no 2: el contenido aprobado decía «2 trazos verticales», la geometría oficial manda); **dintel + arquitrabe** `23,51→77,51` + `18,44→82,44`; **frontón** `18,44→50,22→82,44`.
  - El dibujado es CSS puro en `global.css`: `stroke-dasharray`/`stroke-dashoffset` con `pathLength="1"`, disparado por el `.visible` que ya pone el IntersectionObserver de `Layout.astro`, leído con `:has()` desde el ancestro común. **Cero JavaScript nuevo.**
  - Doble guardia sobre el estado oculto: `prefers-reduced-motion: no-preference` **y** `@supports selector(:has(*))`. Sin cualquiera de las dos, el estado base es el **pórtico completo y estático**: degrada a la pieza terminada, nunca a una pieza rota.
  - **QA cerrada:** build **12/12**; cruce CSP **2 ↔ 2** exacto y sin huérfanos en ninguna dirección (los mismos dos hashes de siempre, 12 apariciones cada uno); **cero** atributos `on*` y **cero** `<script src>` en todo el `dist`; las 26 utilidades Tailwind del componente, generadas.
  - **Dos correcciones que salieron de la QA, no del diseño inicial:**
    - `stroke-dashoffset: 1` lo emitía el minificador como `1px`. Por spec es idéntico (en SVG 1px es una unidad de usuario y el escalado por `pathLength` se aplica **después** de resolver la unidad), pero es la propiedad de la que cuelga todo el efecto: pasó a viajar en una custom property, que el minificador no puede tipar. Sale sin unidad, verificado sobre el CSS emitido.
    - En móvil el visor se pegaba a `5.5rem` (88px), que es el alto del header de **desktop**; el móvil mide 78.4px. Esos ~9.6px eran una rendija por donde se veía pasar el texto, porque el header es `bg-bg/85` y no tapa. Ahora la banda se mete **por debajo** del header (`top-16`) en vez de calzar su alto exacto: tucada no puede haber hueco, y no depende de un número que cambia con la tipografía del logo.
  - **Riesgo residual conocido:** la sección **no se pudo ver en un navegador** en la sesión que la construyó (sin herramientas de navegador disponibles). Todo lo verificable sin render se verificó; lo que falta es exactamente la verificación visual de Francisco.
- **Próximo paso:** que Francisco **la mire en el navegador** (móvil primero) y, cuando se levante la veda de infraestructura por la ventana de Aurora, **rebuild de la imagen y deploy** — el cambio vive en `web/src`, así que un `git pull` en el VPS **no alcanza** (R-44). Después, F2.

### P-55 — `logo.svg` con recuadro oscuro opcional para el panel de Google

- **Estado:** ✅ **CERRADO el 10/08/2026** (commit `fd8316b`) — ver **R-20** en Resueltos. Francisco decidió **SÍ**: el recuadro va. Ejecutado el mismo día. **El deploy se ejecutó el 17/08/2026**, junto con P-54 F1, al levantarse la veda de Aurora. El `logo.svg` con fondo oscuro está en producción.
- **Criticidad:** baja.
- **Bloquea a:** nada.
- **Owner:** ~~**Francisco** (decide)~~ decidido, Claude (aplicó).
- **Detalle:** `web/public/logo.svg` es el pórtico limpio, sin fondo, y es el archivo que declara el JSON-LD en el campo `logo` de `InsuranceAgency`. Google puede levantarlo para el panel de conocimiento, donde el fondo suele ser **blanco**: el dorado `#c9a84c` sobre blanco da un contraste flojo (~2:1) y el pórtico se ve deslavado. La alternativa es agregarle el mismo `<rect width="100" height="100" rx="22" fill="#08080d"/>` que ya usa el favicon. **Contra:** deja de ser un logo "limpio" y el recuadro aparece en cualquier lugar que lo consuma, no solo en Google.
- **Próximo paso:** ~~Francisco decide~~ **decidido y aplicado.** Lo único que resta es el **rebuild** en el deploy post-veda. `web/public/favicon.svg` no se tocó: ya traía su propio rect desde P-52.

### P-56 — Aprobar o ajustar misión, visión y valores del Manual de Marca v3.0

- **Estado:** ✅ **CERRADO el 10/08/2026** — ver **R-21** en Resueltos. **Francisco aprobó misión, visión y valores.** Con eso el Manual pasó de **v3.0 (propuesta)** a **v3.1 FINAL** y se entregó al manager de marketing. Los tres bloques dejan de ser propuesta y pasan a ser **fuente única de voz** para todo el copy que venga.
- **Criticidad:** media. Es la capa de la que cuelga todo el copy futuro: guiones de reels, bio, textos de producto. Aprobar tarde significa reescribir después.
- **Bloquea a:** el copy de las piezas nuevas (F4 de **P-54**, papelería de **P-52**) si se quiere que hablen con una voz ya definida.
- **Owner:** **Francisco**, solo él. Misión, visión y valores no los redacta un auditor: los aprueba el dueño de la marca.
- **Detalle:** el Manual de Marca v3.0 **vive fuera del repo** (lo entregó el auditor). Los tres bloques están marcados como propuesta, no como hecho consumado, justamente para que Francisco los ajuste con sus palabras antes de que se conviertan en la fuente de la que copian todos los textos.
- **Próximo paso:** ~~Francisco da el veredicto~~ **dado el 10/08/2026: aprobados.** El manual v3.1 es la fuente vigente y se cita como tal. Lo que sigue no es de este ítem: es el **handoff formal al manager de marketing** y el reloj de 48 h que arranca con él.

---
### P-57 — Medir la dieta de fuentes en Lighthouse y podar los subsets de JetBrains

- **Estado:** 🟡 EN CURSO (alta del 17/08/2026, Sesión 19).
- **Criticidad:** media (rendimiento; el LCP está a 0,01-0,31 s del objetivo).
- **Bloquea a:** cerrar el objetivo de LCP ≤ 1,80 s.
- **Owner:** Francisco mide, Claude Code interpreta y ejecuta lo que falte.
- **Detalle:** la dieta se ejecutó en la Sesión 19 (commit local `bae5af6`): 65 archivos de fuente y 1.005,9 KB → **15 archivos y 303,6 KB**; 36 bloques `@font-face` → **11**; CSS render-blocking 52,9 → **42,9 KB**. Se agregó una **única** precarga, la de Cormorant Garamond latin 600, que es la fuente que pinta el título de cualquier página. **Lo que falta es la medición**, y falta por una razón concreta: **el VPS no tiene Chrome ni Lighthouse**, así que la sesión que hizo la dieta no pudo medir su propio efecto. Queda además una deuda menor identificada: **JetBrains Mono Variable sigue emitiendo sus 5 subsets (82 KB)** —cirílico, griego, latin-ext, latin y vietnamita— porque el paquete variable de Fontsource **no publica CSS por subset**, solo `index.css` y `wght.css`. De los cinco, el navegador solo descarga el latin (39,5 KB); el resto es peso de imagen, no de red.
- **Próximo paso:** Francisco corre Lighthouse en su laptop **por `127.0.0.1`, nunca por `localhost`** (R-53), con el guion del REPORTE-SESION-19, y reporta LCP y FCP antes/después. Si el LCP sigue por encima de 1,80 s, la siguiente palanca **no** son las fuentes: es identificar en el propio informe cuál es el elemento LCP real de la home, que hoy se asume que es el título del hero.

### P-58 — Arreglo de raíz del IntersectionObserver (`threshold: 0` + `rootMargin` negativo)

- **Estado:** ⚪ POR DECIDIR (alta del 13/08/2026 en la Sesión 18, registrada acá el 17/08/2026).
- **Criticidad:** media (preventiva: hoy no hay ningún contenedor en riesgo).
- **Bloquea a:** nada. **Previene** la clase de bug de NM-12 y NM-13.
- **Owner:** Francisco decide; la ejecución pide sesión propia.
- **Detalle:** el observer de `Layout.astro` dispara con `threshold: 0.15`, y un elemento más alto que `(alto_del_viewport - 50) / 0,15` **nunca** alcanza ese ratio: se queda en `opacity: 0` para siempre y sin error en consola. Ya mordió dos veces (`ProductLayout` en la Sesión 17, `BloqueFAQ` en la 18). La propuesta es `{ threshold: 0, rootMargin: '0px 0px -15% 0px' }`: con umbral 0 el callback dispara en cuanto **un píxel** del elemento entra en el root recortado, sin importar cuánto mida, y el bug desaparece por construcción. Es **una línea**. **Lo que lo hace caro:** toca el `<script>` inline de `Layout.astro`, o sea que **cambia su hash y obliga a regenerar los hashes CSP de `infra/nginx.conf` y a rebuild**. Si el hash no cuadra, el navegador bloquea el script **en silencio** y todos los `.reveal` del sitio quedan invisibles: el fallo sería peor que el que se quiere arreglar. Además su radio de impacto es total —ese observer alimenta las 13 páginas, incluida la animación de P-54 F1—, así que cambia la sensación de todo el sitio, no solo la de los bloques largos.
- **Próximo paso:** sesión propia, con regeneración de hashes según `infra/README-hashes.md`, rebuild y verificación **en navegador**. Mientras tanto, **R-51** impide que el problema vuelva a aparecer.

### P-59 — Fijar `name: sitio-bg` en `infra/docker-compose.yml`

- **Estado:** 🔵 BACKLOG (alta del 17/08/2026, Sesión 19).
- **Criticidad:** baja (higiene operativa), pero con un efecto concreto en el runbook de purga.
- **Bloquea a:** que la purga de imágenes del runbook sea determinista.
- **Owner:** Francisco, coordinado con el proyecto de infraestructura (recrear el contenedor es zona compartida).
- **Detalle:** `infra/docker-compose.yml` **no declara `name:` de nivel superior** — verificado el 17/08: el único `name:` del archivo está en la línea 37, dentro del bloque `networks:`, y nombra la red `sitio_bg_net`, no el proyecto. Sin esa clave, el nombre del proyecto compose **se infiere del directorio** desde el que se corre el comando, y puede cambiar además por un `-p` explícito o por `COMPOSE_PROJECT_NAME` en el `.env`. Consecuencia práctica: la purga acotada del runbook, que filtra por `label=com.docker.compose.project=<proyecto>`, depende de una etiqueta que nadie fijó. Y falla **en silencio**: `docker image prune` con una etiqueta que no existe no da error, simplemente **no borra nada**, y uno se queda convencido de que purgó. Con `name: sitio-bg` explícito, el filtro deja de depender del directorio, del `.env` y de quién corra el comando.
- **Próximo paso:** confirmar el nombre real con `docker compose -f /opt/sitio-bg/docker-compose.yml config --format json | head -5` y si la imagen construida lleva la etiqueta `com.docker.compose.project` (`docker image inspect sitio-bg-web:latest --format '{{json .Config.Labels}}'`); después fijar `name:` y **recrear el contenedor** en su propia ventana.

### P-60 — Legibilidad de la razón social a 12 px en monoespaciada

- **Estado:** ⚪ POR DECIDIR (alta del 13/08/2026 en la Sesión 18, registrada acá el 17/08/2026).
- **Criticidad:** baja (diseño / legibilidad, no accesibilidad formal: el contraste ya cumple).
- **Bloquea a:** nada.
- **Owner:** Francisco (decisión de diseño).
- **Detalle:** el REPORTE-SESION-18 lo dejó anotado así: «la legibilidad de la razón social a 12 px en `font-mono`: la tilde está, pero no se ve». Es un problema de **renderizado**, no de contenido: el carácter acentuado existe en el HTML y la tilde se pierde visualmente al tamaño y en la familia monoespaciada. **El reporte no nombró el archivo**, y la revisión del 17/08 encontró dos candidatos, sin poder decidir cuál es sin la vista de Francisco: `LetraPequena.astro:50` (`font-mono text-xs text-tx-disabled`, que es el bloque de letra pequeña legal de `/seguros/auto`) y los bloques `font-mono text-sm`/`text-xs` de las páginas legales. Se registra sin inventar la ubicación.
- **Próximo paso:** Francisco señala el nodo exacto en el navegador. Opciones sobre la mesa, de menor a mayor cambio: subir ese bloque de `text-xs` a `text-sm`; sacarlo de monoespaciada y pasarlo a `font-body`; o dejarlo como está si a tamaño real se lee.

### P-61 — Desarrollar las siglas RASA y LAA la primera vez que aparezcan

- **Estado:** 🔵 BACKLOG (alta del 12/08/2026 en la Sesión 17, registrada acá el 17/08/2026).
- **Criticidad:** baja (claridad del copy).
- **Bloquea a:** nada.
- **Owner:** Francisco aporta la definición correcta; Claude Code la redacta.
- **Detalle:** la auditoría de la Sesión 17 marcó que **la sigla RASA no se desarrolla** donde aparece. Estado verificado el 17/08 sobre el fuente: **hoy ni `RASA` ni `LAA` aparecen en `web/src`** — el REPORTE-SESION-18 registra el barrido con resultado `'RASA' 0`, o sea que el término salió del copy en el trabajo de esa sesión. El pendiente queda vivo igual, en forma de regla de redacción: si cualquiera de las dos vuelve al copy, va **desarrollada la primera vez que aparece en cada página**, porque son siglas de industria que el visitante no tiene por qué conocer. La definición la aporta Francisco: no se inventa el significado de una sigla regulatoria.
- **Próximo paso:** ninguno hasta que el término vuelva al copy. Si vuelve, se desarrolla en el mismo commit que lo introduce.

### P-62 — Google Search Console: verificar el dominio y dar de alta el sitemap

- **Estado:** 🟡 EN CURSO (alta del 17/08/2026, Sesión 19).
- **Criticidad:** media (el sitio lleva más de una semana público sin ninguna telemetría de indexación).
- **Bloquea a:** saber si Google está indexando las 13 páginas, y detectar errores de rastreo antes de que cuesten posiciones.
- **Owner:** Francisco (la verificación exige acceso al DNS de Cloudflare y a la cuenta de Google).
- **Detalle:** el sitio es público desde el 09/08/2026 y no hay Search Console dado de alta. Sin él no se sabe qué páginas indexó Google, cuáles rechazó ni por qué, ni se puede pedir el rastreo de una página nueva. Hay dos piezas ya listas que hoy nadie está aprovechando: `web/public/sitemap.xml`, que se mantiene a mano (**P-50**), y los tres bloques JSON-LD de `Layout.astro`. Nota de coherencia que conviene revisar en el mismo movimiento: el canonical del sitio se normalizó **sin barra final**, así que el sitemap tiene que declarar exactamente esa forma o Search Console reportará duplicados.
- **Próximo paso:** Francisco verifica el dominio por registro DNS TXT en Cloudflare (es el método que sobrevive a cambios de hosting), da de alta `https://barreraglobal.com/sitemap.xml` y revisa el informe de cobertura una semana después. **No se agrega ninguna etiqueta de verificación al HTML**: eso obligaría a rebuild y además ata la verificación al código.

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
| **D-29: logo P3 "Arquitectónica" (el pórtico) ELEGIDO.** Francisco eligió la propuesta P3 entre las tres presentadas. La elección es firme y no se reabre. La **producción final** queda pendiente como **P-52** (texto a trazados, favicon, aplicación), con el flag de auditoría de las dos correcciones del mockup: "Quito" → **Ambato**, y el CTA viejo → el del manual v2.0. Supera a **D-23** (logo tipográfico provisional) recién cuando P-52 entregue la pieza. | 09/08/2026 | Sesión 13 |

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

### R-16 — `og-default.png` inexistente (cierre de P-48)

- **Cerrado:** 4 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** las 12 páginas declaraban `og:image` y `twitter:image` hacia un archivo que no existía, así que toda tarjeta de vista previa compartida por WhatsApp salía sin imagen. Se generó la pieza 1200 × 630 con identidad de marca (fondo `#08080d`, "Barrera Global" en serif dorado `#c9a84c`, eyebrow "ARQUITECTURA FINANCIERA" espaciado, filete, tagline y dominio al pie), **26,3 KB**. Verificado sobre el build: el archivo llega a `dist/` y las **24** etiquetas (`og:image` + `twitter:image` de las 12 páginas) resuelven a URL absoluta.
- **Nota de alcance:** cierra el defecto técnico. La **aprobación visual de Francisco** sigue pendiente, igual que la verificación en vivo con el depurador de Facebook una vez publicado el sitio.
- **Commits relacionados:** `f64d53c`.

### R-17 — La 404 premium que nginx nunca servía (cierre de P-42)

- **Cerrado:** 9 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** la página existía en el build desde Sesión 10 (`web/src/pages/404.astro` → `dist/404.html`, en la **raíz** de `dist`, no en `/404/index.html`), pero ningún visitante la iba a ver: el `try_files $uri $uri/ =404;` del `location /` levanta un 404 **interno** y en todo `infra/nginx.conf` **no había una sola directiva `error_page`**, así que nginx respondía con su página de error empotrada. Fix: `error_page 404 /404.html;` a nivel `server`. Dos detalles deliberados: va **sin el prefijo `=`**, para que el status siga siendo 404 y no 200 (una 404 que responde 200 es un soft-404 y los buscadores la indexan); y va a nivel `server` y no dentro de un `location`, para que el redirect interno caiga en `location /` y la página herede `expires -1` más las cabeceras de seguridad y la CSP, que ya se emitían con `always` y por eso también salen en respuestas 4xx.
- **Verificación previa al deploy:** build limpio **12/12** páginas; `dist/404.html` con la página de marca (título «Página no encontrada · Barrera Global», bloque 404, nav de retorno, CTA de WhatsApp, `robots: noindex, nofollow`); cruce CSP **2 ↔ 2 sin huérfanos en ambas direcciones** y **ningún hash cambió** (no se tocó ningún script). Se comprobó además que `404.html` está cubierto por los **dos** hashes: sus scripts inline pasan la CSP que ahora viaja junto a la página de error.
- **Verificación en servidor:** el fix vive dentro de la imagen Docker (`infra/Dockerfile` copia `infra/nginx.conf`), así que **exigió rebuild**; el pull no lo aplicaba (R-44). Francisco confirmó el resultado **en el navegador** sobre `staging.barreraglobal.com`, no con `curl` (R-46). La sintaxis de la config la validó el propio arranque del container: una directiva inválida habría impedido que nginx levantara.
- **Nota de alcance:** lo confirmado a ojo es el **render** de la página de marca. Que la respuesta conserve el status **404** se desprende de la directiva (sin `=`); si se quiere dejar constancia, se lee en la pestaña Red del navegador. Falta repetir la prueba en **producción** después del switch a público — misma imagen, resultado esperable, pero la verificación en vivo se hace igual.
- **Commits relacionados:** `8c7c18a`.

### R-18 — Validación legal humana de las tres páginas (cierre de P-39)

- **Cerrado:** 9 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Registro del cierre (textual):** *«Aprobación del abogado recibida 09/08/2026; disclaimer retirado; respaldo escrito de una línea solicitado vía WhatsApp; dictamen formal solo requerido en escenario de auditoría LOPDP (criterio del abogado)».*
- **Resumen:** el abogado humano revisó y aprobó los **tres** documentos —`/privacidad` v3, `/terminos` v1 y `/cookies` v1— sobre **las páginas renderizadas en staging**, que era la condición fijada cuando se abrió el gate, y no sobre el markdown. Con la aprobación en mano, el recuadro «DISCLAIMER OPERATIVO» de `/privacidad` —que desde Sesión 8 anunciaba «pendiente de visto bueno escrito antes de la publicación definitiva»— dejó de ser cierto y se retiró el mismo día (commit `6772a51`). El retiro fue quirúrgico: solo ese `<p>`, sin tocar una letra del texto legal aprobado. Verificado sobre el build: las **13** secciones numeradas de `/privacidad` intactas y **0** apariciones de «visto bueno» o «dictamen» en las 12 páginas.
- **Alcance de la aprobación:** es **global sobre las tres páginas tal como están**, no un pronunciamiento punto por punto. La pregunta (9) se cierra retirando el recuadro. Las (8) aviso de cookies como línea permanente, (10) jurisdicción genérica en `/terminos` y (11) asimetría del "trámite" entre páginas de presentación y legales quedan cerradas **por aceptación del conjunto** — en la práctica, la (11) queda en la opción (c). Quien quiera constancia específica de alguna, la pide junto con el respaldo escrito.
- **Cabo administrativo, no bloqueante:** el **respaldo escrito de una línea** está solicitado por WhatsApp y todavía no llegó al momento de cerrar. No se retiene el lanzamiento por él: por criterio del propio abogado, el dictamen formal solo se requiere si aparece una auditoría LOPDP. Cuando llegue, archivarlo junto a `docs/legal/`.
- **Consecuencia para el lanzamiento:** con P-39 y P-42 cerrados, **P-51** (casilla `privacidad@barreraglobal.com` configurada **y probada**) quedó como único gate abierto. **Nota posterior del mismo día:** el switch a público se ejecutó esa misma tarde **con P-51 todavía abierto** —la casilla configurada pero sin prueba de recepción—, por decisión explícita de Francisco. Ver P-51.
- **Commits relacionados:** `6772a51`.

### R-19 — La casilla `privacidad@` probada de verdad (cierre de P-51)

- **Cerrado:** 10 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** el ítem estuvo abierto desde el 04/08 y sobrevivió al switch a público del 09/08 porque su criterio de cierre nunca se aflojó: **configurar sin probar no cuenta**. El 10/08 se probó. Cloudflare Email Routing reporta **1 recibido / 1 entregado**, y el correo enviado desde fuera llegó al Gmail de Francisco a las **11:53**. **Evidencia:** captura de pantalla de Francisco.
- **Detalle que importa:** aterrizó en la carpeta **Spam**. Se le aplicó **«No es spam»**, que corrige el comportamiento de esa bandeja pero no la reputación del dominio.
- **Por qué se cierra igual:** lo que el ítem exigía era demostrar que el canal **recibe**. Recibe: el correo entró al buzón, no rebotó. La carpeta de destino es un problema distinto, y queda anotado como cabo operativo en P-51 (revisar SPF/DKIM/DMARC antes de que un ejercicio de derechos real se pierda ahí).
- **Consecuencia:** era el **último gate operativo del lanzamiento**. Con R-19, el sitio público ya no tiene ningún ítem del lanzamiento abierto: la política de privacidad publica cuatro veces una dirección que ahora está probada, con su plazo de 15 días respaldado por un canal que funciona.
- **Commits relacionados:** ninguno — el cierre fue una acción en Cloudflare y en el correo, fuera del repo.

### R-20 — Fondo oscuro del `logo.svg` para paneles claros (cierre de P-55)

- **Cerrado:** 10 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Decisión de Francisco:** **SÍ**, va el recuadro. El ítem estaba en ⚪ POR DECIDIR desde el 09/08 y no era trabajo, era una decisión: se tomó y se ejecutó el mismo día.
- **Resumen:** `web/public/logo.svg` es el archivo que el JSON-LD declara en el campo `logo` de `InsuranceAgency`, o sea el que Google puede levantar para el panel de conocimiento, donde el fondo suele ser blanco. El dorado `#c9a84c` sobre blanco da ~2:1 de contraste. Se le agregó el mismo `<rect width="100" height="100" rx="22" fill="#08080d"/>` que ya usaba el favicon, asumiendo la contra que el propio ítem tenía registrada: deja de ser un logo «limpio» y el recuadro aparece en cualquier consumidor, no solo en Google.
- **Lo que NO cambió:** la geometría. Los 9 trazos conservan coordenadas, `stroke-width` 1.4, `linecap` square y `viewBox 0 0 100 100`. El rect es fondo, no estructura, así que **no** forma parte de lo que copia `PorticoConstruye.astro` (P-54 F1), que toma de ahí los 9 trazos y nada más. `web/public/favicon.svg` **no se tocó**: ya traía su propio rect desde P-52.
- **Verificación:** build **12/12**; `public/logo.svg` idéntico a `dist/logo.svg`; 9 trazos intactos; el JSON-LD sigue apuntando a `https://barreraglobal.com/logo.svg`; cruce CSP **2 ↔ 2** sin huérfanos y **ningún hash cambiado**.
- **Cabo abierto, no del ítem:** **no está en producción.** `logo.svg` viaja horneado en la imagen Docker, así que exige rebuild (R-44) y sale con el deploy de P-54 F1 cuando se levante la veda de Aurora.
- **Commits relacionados:** `fd8316b`.

### R-21 — Misión, visión y valores aprobados: el Manual pasa a v3.1 FINAL (cierre de P-56)

- **Cerrado:** 10 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** el Manual de Marca v3.0 se había entregado con misión, visión y valores explícitamente marcados como **PROPUESTA**, esperando el veredicto del dueño de la marca. Francisco los **aprobó** el 10/08. Con eso el manual pasó a **v3.1 FINAL** y se entregó al **manager de marketing**.
- **Lo que sella el cierre:** los tres bloques dejan de ser propuesta y pasan a ser **fuente única de voz** para todo el copy que venga — guiones de reels, bio, papelería de P-52, F4 de P-54. Ya no hay excusa de «esperemos a que esté la voz definida»: está.
- **Entrega adicional del mismo manual:** la **capa comercial del símbolo** (basamento = método, columnas = vida y salud, frontón = inversión) queda como narrativa oficial de marca. Anotada en **P-54** para que cualquier pieza futura la respete.
- **Nota de alcance:** el manual **vive fuera del repo** (lo entregó el auditor). Lo que queda registrado acá es la decisión y su fecha, no el documento.
- **Commits relacionados:** ninguno en código — el cierre es una aprobación, y su rastro documental es esta entrada más la bitácora de Sesión 14.

### R-22 — El sitio usa correo del dominio en vez de Gmail (cierre de P-04)

- **Cerrado:** 17 de agosto de 2026 (Sesión 19)
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** las **8 apariciones** de `fbarrera.inversiones@gmail.com` en `web/src` —repartidas en 5 archivos: `Layout.astro` (JSON-LD), `Footer.astro` (×2), `contacto.astro` (×2), `terminos.astro` (×2) y `cookies.astro`— pasaron al dominio propio. Francisco confirmó **antes de ejecutar** que `contacto@barreraglobal.com` existe y recibe, así que el commit salió sin marca de pendiente.
- **El reparto no es cosmético:** siete fueron a `contacto@barreraglobal.com` y **una a `privacidad@barreraglobal.com`**. La excepción es la sección 9 de `/cookies`: no es contacto comercial sino el canal de un instrumento de protección de datos, y su propia sección 8 declara que el tratamiento se rige por la LOPDP y remite a `/privacidad`, que ya fija `privacidad@` como canal de datos personales en sus cuatro menciones. Mandar las consultas de cookies al buzón comercial habría dejado **dos canales en conflicto para la misma materia** y mezclado un buzón de ventas con uno de cumplimiento.
- **Lo que sella el cierre:** ripgrep de la dirección vieja da **0** en `web/src`, **0** en `dist` y **0** en todo el repo versionado fuera de `docs/`. Ninguna meta OG ni Twitter contenía correo; `public/` tampoco. De los tres bloques JSON-LD, solo `InsuranceAgency` lleva `email`, y ya apunta al dominio.
- **Commits relacionados:** `0b22bd0` (local al cierre de la Sesión 19).

### R-23 — Accesibilidad del footer: de 91-92 a 100, por encima del objetivo de 95

- **Cerrado:** 13 de agosto de 2026 (Sesión 18)
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** dos fallas **preexistentes de todo el sitio**, no de una página, y las dos vivían en el footer. **Contraste:** el token `--tx-disabled` pasó de `#6b6964` a `#7d7b75`; el valor anterior daba 3,64:1 sobre `--bg` y 3,48:1 sobre `--bg-elev-1`, contra los 4,50:1 que pide WCAG AA para texto de 12 px, y Lighthouse lo marcaba en las **13 páginas**, cuatro nodos por página. Se calculó el gris **más oscuro** que cumple en los dos fondos conservando la proporción original entre canales (107/105/100), para subir la luz sin mover el matiz cálido: el cambio visual más chico posible que cumple. **Subrayado:** el enlace de la política de cookies del footer daba 1,85:1 de contraste contra el gris del párrafo, y el criterio «Links rely on color» pide 3,00 — por color no se cumplía ni aclarando ni oscureciendo, así que la vía es que el enlace no dependa solo del color.
- **La trampa que dejó lección:** primero se usó la utilidad `underline` de Tailwind y **Lighthouse siguió marcando el fallo**. Motivo: `a { text-decoration: none }` de `global.css` vive **fuera de toda `@layer`** y le gana a cualquier utilidad. Es **R-43** otra vez, ahora sobre la decoración en vez del color. Se resolvió con `.enlace-subrayado`, regla propia sin capa y con más especificidad, que es la mitigación sancionada.
- **Resultado medido:** `/` 92 → **100**, `/seguros/auto` 92 → **100**, `/sobre-mi` 91 → **100**. Objetivo declarado del proyecto: 95. Auditorías de accesibilidad falladas: **0**.
- **Commits relacionados:** `29def09`.

### R-24 — El deploy que esperaba bajo veda se ejecutó: el sitio público deja de estar desfasado del repo

- **Cerrado:** 17 de agosto de 2026
- **Estado al cerrar:** 🟢 RESUELTO
- **Resumen:** desde el 10/08 había trabajo **verificado en build y no desplegado** —P-54 F1 («El pórtico que se construye») y P-55 (fondo oscuro del `logo.svg`)—, frenado por la **veda de infraestructura compartida** durante la ventana de promoción a producción de Aurora. Los dos viven en archivos que se hornean en la imagen Docker, así que un `git pull` en el VPS no alcanzaba: **exigían rebuild** (R-44). Francisco levantó la veda y ejecutó el deploy el **17/08/2026**. El sitio público sirve hoy **13 páginas** y ya no está desfasado del repo.
- **Lo que valida el protocolo de veda:** funcionó exactamente como se diseñó en la Sesión 14 — el trabajo local no se detuvo, el deploy se puso **en cola y no se negoció**, la cola quedó documentada donde se iba a leer, y la veda la levantó Francisco. Un cambio verificado en build y no desplegado es justo el tipo de cosa que a los tres días alguien da por publicada; acá no pasó porque estaba escrito en tres lugares.
- **Procedencia:** el deploy y su hash los reporta Francisco. **Ningún agente puede verificarlo por su cuenta:** `/opt/sitio-bg` está fuera del perímetro de todos ellos, sin `sudo` y sin acceso al socket de Docker.
- **Commits relacionados:** los de P-54 F1 (`be196c5..69f83bd`) y P-55 (`fd8316b`), ya en `main` desde el 10/08.

---

**Fin del documento PENDIENTES.md.**

**Próxima revisión:** al cierre de cualquier item activo o al inicio de la siguiente sesión.

**Conteo al 17/08/2026:** 62 items (P-01 a P-62) + 24 resueltos históricos (R-01 a R-24).




