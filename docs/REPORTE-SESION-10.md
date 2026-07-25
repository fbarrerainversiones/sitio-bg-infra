# REPORTE — Sesión 10 (jornada autónoma de estructura)

> **Tablero de cierre.** Francisco monitorea desde el celular vía GitHub.
> Registra por bloque: hora, qué se hizo, hash del commit, pendientes.

**Fecha real de ejecución:** martes 22 de julio de 2026 (hora Ecuador, UTC-5)
**Modo:** autónomo (Francisco fuera del teclado, monitoreando vía GitHub).
**VPS:** NO se tocó. Único remoto usado: push a GitHub.

### ⚠️ Nota de fecha
La sesión estaba **planeada para el 20/07** (así el prompt y el nombre
sugerido del snapshot). Se ejecutó realmente el **22/07**. Se usa la
**fecha real** en timestamps, commits y nombres de archivo.

---

## Estado de bloques

| Bloque | Descripción | Estado |
|---|---|---|
| A | Cerrar pendientes de anoche (en `main`) | ✅ COMPLETADO + pusheado |
| B | Fase 3 estructural (rama `sesion-10-estructura`) | ✅ COMPLETADO + pusheado |

**`main` queda intacto en su HEAD del Bloque A (`27ae9a2`). Todo el Bloque
B vive en la rama `sesion-10-estructura`. NO se hizo merge.**

---

## BLOQUE A — en `main` (HEAD final `27ae9a2`)

| Paso | Qué | Resultado | Commit |
|---|---|---|---|
| A0 | Verificar estado | pwsh 7.6.4, working tree clean, HEAD `e40882a` (== esperado) | — |
| A1 | P-44 (parcial): optimizar foto hero | `francisco-barrera.jpg`: **1024×1024 / 551.4 KB → 1000×1000 / 54.8 KB** (mozjpeg q82, **−90.1%**). Mismo nombre/ruta. | `dd46b82` |
| A2 | Snapshot de continuidad | `docs/continuidad/CONTINUIDAD_2026-07-22_2138.md` (UTF-8 sin BOM verificado). | `0078398` |
| A3 | Push de `main` + este reporte | HEAD == origin/main verificado, tree limpio. | `27ae9a2` |

El original venía **casi sin comprimir** (551 KB para 1024px cuadrado);
de ahí el −90.1%. Alcance completo de P-44 (WebP/AVIF + `srcset`) **queda
abierto**.

---

## BLOQUE B — en rama `sesion-10-estructura`

| Paso | Qué | Commit |
|---|---|---|
| B0 | Crear rama `sesion-10-estructura` desde `27ae9a2` | — |
| B1 | `ProductLayout.astro` (plantilla de producto) + `Pendiente.astro` (marcador) | `0e7d7a2` |
| B2 | 6 páginas de producto sobre el layout | `7106c1b` |
| B3 | Home: tarjetas enlazan a sus páginas (WhatsApp conservado como secundario) | `756eb64` |
| B4 | P-42: `404.astro` premium | `379b0ae` |
| B5 | QA de cierre + este reporte + push de la rama | (este commit) |

### Diseño respetado al 100%
Layout calcado de `index.astro`/`sobre-mi.astro`: mismos tokens (paleta
`#08080d`/`#c9a84c`/off-white), tipografías (Cormorant/Outfit/JetBrains
Mono), ritmo de secciones (`py-24 md:py-32`, `border-t border-gd-muted`),
CTA de WhatsApp y `.reveal` **con su IntersectionObserver incluido** (sin
él, el contenido `.reveal` quedaría invisible — ver hallazgo 3).

> **Actualización 25/07:** desde el fix P2 el observer ya no se duplica en
> cada layout; vive una sola vez en `Layout.astro` y lo heredan las 11
> páginas. Ver "Fixes post-revisión (25/07)".

### Contenido: cero invención
Semillas = **frases exactas de las tarjetas del home**, expandidas SOLO en
estructura. Todo lo demás es `[PENDIENTE]`. **Cero** precios, cero primas,
cero cifras, cero carriers, cero nombres de clínicas, cero datos de salud.
El disclaimer Art. 11.6 del home se reutiliza en "Cómo funciona" y en el
FAQ de proceso.

### Páginas creadas (6)
`/seguros/vida-termino`, `/seguros/vida-indexada`, `/seguros/salud-nacional`,
`/seguros/salud-internacional`, `/seguros/auto`, `/inversion`.

---

## QA DE CIERRE (B5)

**Build:** limpio, **11/11 páginas** generadas, sin errores ni warnings de
Astro.

| Chequeo | Resultado |
|---|---|
| Un solo `<h1>` por página | ✅ 11/11 (exactamente 1 cada una) |
| Jerarquía de headings coherente | ✅ h1 → h2 → h3 sin saltos (los 2 `h3` finales de cada página son los títulos del footer compartido — preexistente y consistente en todo el sitio) |
| `alt` en imágenes | ✅ todas: home (1 img) y `/sobre-mi` (1 img) con alt; las 6 páginas de producto no usan imágenes (sin imaginería inventada) |
| Titles únicos | ✅ 11/11 únicos |
| Descriptions únicas | ✅ 11/11 únicas |
| Marcadores `[PENDIENTE]` renderizados | ✅ 13/13 (auto=3, resto=2 c/u) |
| Atribución WhatsApp por producto | ✅ cada página de producto lleva su mensaje propio en los CTA de contenido (el botón del Header es genérico por ser componente compartido) |

### Tabla de links internos (enlace → destino → existe/404)

**Enlaces internos OK** (verificados contra las rutas generadas):
`/`, `/sobre-mi`, `/contacto`, `/privacidad`, `/#productos` (ancla del home),
y desde el home hacia `/seguros/vida-termino`, `/seguros/vida-indexada`,
`/seguros/salud-nacional`, `/seguros/salud-internacional`, `/inversion`.
La 404 enlaza a `/`, `/#productos`, `/sobre-mi`, `/contacto` (todos OK).

**Enlaces internos que dan 404** (en el footer compartido, presentes en
TODAS las páginas):

| Enlace | Estado | Nota |
|---|---|---|
| `/terminos` | 404 | **P-43** (conocido, preexistente) |
| `/cookies` | 404 | **P-43** (conocido, preexistente) |
| `/lopdp` | 404 | **P-43** (conocido, `/lopdp` sin página planificada) |

Estos 3 son **P-43** (gate de higiene ANTES del deploy público, criticidad
alta) y quedan **fuera de alcance** de hoy. No los toqué.

> Falsos positivos del script de QA: `/favicon.svg` y
> `/_astro/Footer.*.css` aparecieron como "404" en la primera pasada porque
> el script solo consideraba rutas `.html`; **ambos existen** en `dist/`
> (verificado). No son enlaces rotos.

### Página huérfana (sin enlace entrante)
- **`/seguros/auto`** — no tiene enlace interno entrante porque el home NO
  tiene tarjeta de auto. Es **intencional/coherente** con que auto no está
  aprobado (ver decisión D1). Accesible solo por URL directa por ahora.

### Auditoría de compliance (adversarial, independiente)
Se corrió una auditoría independiente (agente adversarial) sobre el HTML
renderizado de las 6 páginas de producto, buscando precios/primas, carriers
con nombre, promesas comerciales (Art. 12.12), datos de salud específicos e
invención de detalle.

**Veredicto: LIMPIO.** Cero violaciones duras: sin precios, sin primas, sin
cifras, sin porcentajes, sin carriers con nombre en el copy de producto, sin
promesas prohibidas, sin nombres de clínicas, sin datos de salud
específicos, sin especificaciones inventadas. Los únicos textos ligados a
precio son el disclaimer aprobado del Art. 11.6 y sus variantes en el FAQ.

Tres ítems "borderline" señalados para tu ojo humano — **los tres provienen
de copy YA aprobado, no de invención nueva**:
- **"Insurance Trust"** aparece en el pie legal (componente `Footer.astro`
  compartido, ya vivo en home/sobre-mi/contacto). Es la atribución legal
  aprobada (operas bajo Insurance Trust como broker). No es copy de producto.
- **Salud nacional: "sin que el bolsillo sea el limite"** — es **verbatim**
  de la tarjeta de salud del home (copy aprobado que reutilicé). Si te
  parece muy aspiracional, es decisión tuya cambiarlo en el home y aquí.
- **Inversión: "vehiculos offshore"** — es **verbatim** del bullet de
  inversión del home (copy aprobado). "Offshore" es descriptor de categoría,
  sin jurisdicción ni cifras.

---

## Hallazgos / discrepancias

1. **Fecha:** sesión planeada 20/07, ejecutada 22/07. Se usó fecha real.
2. **UTM inexistente (decisión D2):** el prompt (B1) pide "el patrón de UTM
   del home cambiando `utm_content` al slug del producto", pero el home
   **NO usa UTM** (grep sin resultados) y `wa.me` **ignora** query params
   ajenos a `phone`/`text`. El mecanismo real de atribución del sitio es el
   **texto del mensaje de WhatsApp personalizado por página**
   (`sobre-mi.astro`, `contacto.astro`). → Repliqué ese patrón real: cada
   página de producto lleva su mensaje propio. Un `utm_content` sería
   inerte, así que no lo agregué.
3. **`.reveal` sin observer en `/sobre-mi`** — ✅ **RESUELTO el 25/07**
   (commit `28d6b55`). Se detectó como preexistente y fuera de alcance el
   22/07: el `IntersectionObserver` que añade `.visible` solo estaba en
   `index.astro`, y `sobre-mi.astro` usa 16 clases `.reveal` sin incluir el
   script, por lo que ese contenido quedaba invisible (salvo
   `prefers-reduced-motion`). Confirmado en la revisión visual de Francisco.
   Ver "Fixes post-revisión (25/07)", problema P2.
4. **Ortografía del sitio (decisión D3):** el copy visible ya publicado está
   en español **sin acentos agudos** (p. ej. "Asesoria", "inversion",
   "proteccion"), conservando ñ solo en algunas palabras. Para consistencia
   visual, el copy nuevo de producto **replica ese estilo**. Los documentos
   internos (este reporte, continuidad) sí usan tildes completas, como el
   resto de `docs/*.md`.
5. **Items Aurora sin formalizar (decisión D5):** "informe Aurora pendiente
   de cuestionario" y "hooks caídos → trasladar a Aurora" (pedidos en la
   instrucción de Sesión 10) **no están** en `PENDIENTES.md` ni
   `ERRORES-Y-APRENDIZAJES.md`. Registrados verbatim en el snapshot de
   continuidad; conviene formalizarlos como P-XX cuando confirmes el detalle.

---

## Lista COMPLETA de [PENDIENTE] — decisiones que debes tomar

### Decisiones de sesión (transversales)
- **D1 — `/seguros/auto`: ¿existe este producto?** Auto NO figura en el home
  ni en la estructura de productos de CLAUDE.md (vida, salud, inversión). Se
  creó la página como **estructura** a pedido explícito del prompt, con
  banner `[PENDIENTE]` y **sin copy aprobado**. Decide: (a) sí lo ofrezco →
  defino su contenido y le agrego tarjeta al home; (b) no → borro la página.
- **D2 — ¿Atribución por UTM real?** Hoy la atribución es por texto de
  mensaje de WhatsApp (funciona, es el patrón del sitio). Si quieres UTM
  analítico real, hay que decidir un mecanismo propio (un redirect
  `/go?utm_content=slug` → `wa.me`), porque `wa.me` ignora UTM.
- **D3 — Ortografía:** ¿mantengo el estilo actual del sitio (sin acentos
  agudos) o hacemos una pasada global a tildes completas? (afecta a todas
  las páginas, es preexistente).
- **D4 — P-43:** links del footer `/terminos`, `/cookies`, `/lopdp` dan 404.
  Gate de higiene ANTES del deploy público. (No es de esta sesión.)
- **D5 — Items Aurora:** formalizar como P-XX el "informe Aurora / cuestionario"
  y el "hooks caídos → Aurora" cuando confirmes el detalle.

### Contenido de producto (13 marcadores en las páginas)
- **Vida a término:** (1) perfil objetivo, edades y situaciones típicas;
  (2) coberturas, exclusiones, plazos y montos disponibles, condiciones.
- **Vida indexada:** (1) perfil y horizonte típico; (2) cómo funciona la
  indexación, coberturas, exclusiones, condiciones.
- **Salud nacional:** (1) perfil objetivo; (2) coberturas, red médica,
  exclusiones (sin nombres de clínicas ni cifras).
- **Salud internacional:** (1) perfil, países y situaciones; (2) alcance
  geográfico, coberturas, exclusiones.
- **Seguro de auto:** ver **D1** + (1) perfil; (2) coberturas, exclusiones,
  condiciones. (Toda la sustancia pendiente.)
- **Inversión:** (1) perfil y horizonte; (2) tipos de vehículo, condiciones
  y proceso (sin cifras, sin rendimientos, sin nombres de carriers).

---

## FIXES POST-REVISIÓN (25/07/2026)

Francisco revisó visualmente la rama y encontró **3 problemas de navegación
y visibilidad**. Se corrigieron **en la rama `sesion-10-estructura`**, sin
merge a `main` y sin tocar el VPS. Build verificado tras cada fix.

| # | Problema | Diagnóstico (línea) | Fix | Commit |
|---|---|---|---|---|
| P1 | "Productos" no navega desde ninguna subpágina | `Header.astro:5` — `NAV_LINKS` usaba la ancla **relativa** `#productos`, y ese array alimenta **las dos** navegaciones (desktop `:23-30` y menú móvil `:68-75`). El `id="productos"` existe solo en `index.astro:87`, así que desde `/sobre-mi` el navegador resolvía `/sobre-mi#productos` → elemento inexistente | Ancla **absoluta** `/#productos` en `Header.astro` y en el CTA del hero `index.astro:59` | `be25550` |
| P2 | Contenido de `/sobre-mi` invisible | `sobre-mi.astro` usa **16** clases `.reveal` y **cero** `IntersectionObserver`; el script vivía solo en `index.astro:344-355` y duplicado en `ProductLayout.astro:279-290`. `global.css:185-189` define `.reveal { opacity: 0 }` → invisible permanente | Observer movido a `Layout.astro` (una sola vez, heredado por las 11 páginas) y eliminadas **las dos** copias | `28d6b55` |
| P3 | Footer sin vuelta al sitio | `Footer.astro` tenía marca (`:25-36`), Legal (`:38-64`), Contacto (`:66-95`) y redes (`:115-127`): **ningún** enlace de navegación del sitio | Columna **"Navegación"** (Inicio · Productos · Sobre mí · Contacto) calcada del markup de la columna "Legal"; grilla `md:grid-cols-3` → `md:grid-cols-4` | `7faf2d4` |

### Veredicto CSP (P2)

**Los hashes NO cambiaron. `infra/nginx.conf` no requiere edición.**

Verificado con el procedimiento de `infra/README-hashes.md` sobre `web/dist`,
antes y después del cambio:

| Hash | Antes | Después |
|---|---|---|
| `sha256-IpuDn/ODXnvlsW4BOK3Y58F0Qf1lmA9OPQHicTjTPos=` (toggle menú móvil) | 11 páginas | 11 páginas |
| `sha256-Qra3eTJV60gng4dzuHtxcR7XY8lE1nLbTAAJ5T7jyto=` (scroll-reveal) | **7** páginas | **11** páginas |

Cruce bidireccional: los 2 hashes del build están declarados en
`nginx.conf`, y los 2 de `nginx.conf` los usa el build. Cero huérfanos,
cero faltantes.

**Por qué el hash sobrevive al movimiento:** el minificador de Astro
normaliza el script antes de emitirlo. Las dos copias del fuente diferían
(comillas simples vs dobles, `entry =>` vs `(entry) =>`) y ya producían el
**mismo** hash; la indentación tampoco lo afecta. Se movió el mismo código
token por token, así que el output minificado es idéntico. Astro además lo
mantuvo **inline** al compartirse entre las 11 páginas (no lo extrajo a un
`<script src>`), igual que hace con el toggle del Header.

### QA de cierre de los fixes

Build limpio desde cero (`dist/` borrado): **11/11 páginas**, sin errores.

| Chequeo | Resultado |
|---|---|
| `href="#productos"` relativo residual | ✅ **0** en fuente y en las 11 páginas de `dist` |
| Ancla absoluta presente | ✅ 11/11 páginas (≥2 c/u: nav desktop + nav móvil) |
| Observer por página | ✅ exactamente **1** en las 11 (antes: 1 en 7 páginas, 0 en 4) |
| Scripts inline ejecutables por página | ✅ 2 (toggle + observer), 0 `<script src>` nuevos |
| `.reveal` de `/sobre-mi` cubiertos | ✅ los 16, con el observer minificado presente en el HTML |
| Columna "Navegación" del footer | ✅ 1 vez en las 11 páginas |
| Destinos del footer nuevo | ✅ `/`, `/#productos`, `/sobre-mi`, `/contacto` — los 4 existen |
| Enlaces internos rotos | ⚠️ solo `/terminos`, `/cookies`, `/lopdp` — **preexistentes, P-43/D4**, no tocados |

### Alcance de lo NO hecho

- **P-43/D4** (`/terminos`, `/cookies`, `/lopdp` → 404) sigue abierto: es un
  gate de higiene previo al deploy público, no de esta corrección.
- **D1** (`/seguros/auto`) sigue huérfana a propósito, a la espera de tu
  decisión. Su enlace no se agregó al footer nuevo.
- No se tocó `main`, ni el VPS, ni `infra/nginx.conf`.

---

## Estado final

- **`main`:** intacto en `27ae9a2` (Bloque A), pusheado. Working tree limpio.
- **Rama `sesion-10-estructura`:** Bloque B + los 3 fixes post-revisión del
  25/07, pusheada a origin. **Sin merge a `main`** (queda para tu revisión).
- **VPS:** no se tocó. Staging sigue como al cierre de Sesión 9.
- **Próximo gate real:** **P-39** (revisión legal humana) ANTES del pase a
  público.

---

*Última actualización: 25/07/2026 tras los fixes post-revisión.*
