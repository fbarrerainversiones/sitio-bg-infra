# IDENTIDAD DE MARCA — Sitio Barrera Global

> Extracto operativo del **Barrera Global Brand Book 2026** para uso técnico (Astro + Tailwind + Claude Code). Este documento NO reemplaza al Brand Book; lo complementa. Cuando haya duda de criterio (color exacto, tono de voz, ejemplo de aplicación), consultar el PDF en el knowledge del proyecto.

**Versión:** 1.0
**Fecha:** 25 de mayo de 2026
**Fuente:** `Barrera_Global_Brand_Book_2026.pdf` (25 páginas)
**Documento maestro:** [`PLAN-MAESTRO-v2.md`](PLAN-MAESTRO-v2.md)

---

## ÍNDICE

1. [Identidad esencial](#1-identidad-esencial)
2. [Paleta de colores](#2-paleta-de-colores)
3. [Sistema tipográfico](#3-sistema-tipografico)
4. [Eslóganes y CTAs oficiales](#4-eslogans-y-ctas-oficiales)
5. [Léxico de marca](#5-lexico-de-marca)
6. [Efectos visuales y texturas](#6-efectos-visuales)
7. [Tratamiento de imágenes y video](#7-tratamiento-de-imagenes)
8. [Especificación de componentes UI](#8-especificacion-componentes)
9. [Checklist antes de publicar](#9-checklist)
10. [Regla final inviolable](#10-regla-final)

---

## 1. Identidad esencial

### Los 4 fundamentos

| Elemento | Valor |
|---|---|
| **Marca** | Barrera Global |
| **Descriptor maestro** | Arquitectura Financiera |
| **Tagline pública principal** | "Patrimonio que crece. Capital protegido." |
| **Web** | barreraglobal.com |

### El logo

Dos niveles de identidad (Brand Book página 3):

| Uso | Versión |
|---|---|
| Favicon, avatar de redes | Monograma **FB** en dorado sobre fondo negro |
| Encabezado web | Marca completa horizontal: "Barrera Global" |
| Brochures y PDFs | Marca completa + descriptor "Arquitectura Financiera" |
| Firma de email | Marca completa + nombre asesor + datos de contacto |
| Stories y posts en redes | Monograma esquina inferior derecha (8% del ancho) |

**Por qué este sistema:** el monograma es más memorable que un wordmark completo en tamaño 16×16px (favicon). El dorado sobre negro mantiene contraste máximo con cualquier tema del navegador. El descriptor "Arquitectura Financiera" diferencia: cualquiera vende seguros; arquitectura comunica diseño estructurado, intencional y premium.

### Voz de marca

Tono permitido (Brand Book página 17):

| Tono | Ejemplo |
|---|---|
| Directo, honesto | "Mira, en serio, esto es lo que pasa…" |
| Simplificador | "Te lo voy a decir simple…" |
| Desafiante | "Si crees que tu plan actual te alcanza, déjame mostrarte un número…" |
| Selectivo | "Esto no es para todo el mundo, pero si eres de los que…" |
| Cercano EC | "Dale", "chévere", "full", "bacán" — con moderación, no en cada post |

---

## 2. Paleta de colores

### Tokens CSS oficiales

Estos son los **únicos** valores hex válidos para el sitio. Cualquier color fuera de esta paleta es violación del Brand Book.

```css
/* /web/src/styles/tokens.css */
:root {
  /* === NEUTROS === */
  --bg:  #08080d;  /* Fondo principal. Negro con undertone azulado, NO #000 puro */
  --bg2: #0e0e15;  /* Fondo secundario (secciones alternas) */
  --cd:  #14141d;  /* Cards y contenedores (flotan sobre el fondo) */
  --tx:  #edeae3;  /* Texto principal. Crema, NO blanco puro */
  --t2:  #9a978f;  /* Texto secundario (descripciones, metadata) */
  --t3:  #6b6860;  /* Texto terciario (labels, footers) */

  /* === DORADOS (la firma de la marca) === */
  --gd:  #c9a84c;  /* Dorado principal: CTAs, headings, acentos clave */
  --gl:  #e8d48b;  /* Dorado claro: hover, highlights, citas */
  --gk:  #a07e2e;  /* Dorado oscuro: gradientes, bordes divisorios */

  /* === FUNCIONALES (semáforo) === */
  --gn:  #4a9e6e;  /* Verde apagado: checks, badges positivos */
  --bl:  #4a7fb5;  /* Azul: badges informativos, tags neutrales */
  --rd:  #b54a4a;  /* Rojo terracota: urgencia, alertas */
}
```

### Por qué cada color

| Color | Razón técnica |
|---|---|
| `--bg #08080d` | El negro puro `#000` se siente plano digital. El undertone azulado se siente premium (Rolls-Royce, Apple Pro Display). |
| `--bg2 #0e0e15` | Solo 3% más claro que `--bg`. Diferencia secciones sin romper la continuidad oscura. |
| `--cd #14141d` | Cards "flotan" sobre el fondo porque son ligeramente más claros. Jerarquía sin bordes pesados. |
| `--tx #edeae3` | NO blanco puro. Blanco sobre fondo oscuro fatiga la vista. El crema baja luminancia ~7%, lectura cómoda en sesiones largas. |
| `--gd #c9a84c` | Dorado en sector financiero = patrimonio, lujo discreto, autoridad. NO amarillo (juvenil), NO naranja (urgencia barata). |

### Reglas de combinación (Brand Book página 8-9)

#### Combinaciones correctas

| Combinación | Aplicación | Por qué |
|---|---|---|
| `--bg` + `--tx` | Texto principal sobre fondo | Combinación base. Contraste alto pero cálido. |
| `--bg` + `--gd` | Headings y CTAs | El dorado destaca sin gritar. Reserva el dorado para lo que importa. |
| `--cd` + `--tx` | Cards con texto interior | El card flota sobre el fondo. Sin bordes, solo jerarquía por valor lumínico. |
| `--gd → --gk` | Gradiente vertical en botones | Da volumen al CTA sin recurrir a sombras pesadas. |
| `--bg` + `--gl` | Citas y elementos hover | El dorado claro se siente "vivo" sin perder elegancia. |
| `--cd` + `--t2` | Texto secundario en cards | Descenso jerárquico claro entre título y descripción. |

#### Combinaciones PROHIBIDAS

| Error | Consecuencia |
|---|---|
| `--tx` sobre `--gd` | Crema sobre dorado: contraste insuficiente, fatiga visual. |
| `--gd` sobre `--cd` con texto largo | Dorado en párrafos largos cansa la vista. Reservar a títulos y CTAs. |
| `--rd` como acento decorativo | El rojo solo para urgencia REAL. Decoración rompe el código semántico. |
| 3+ dorados en mismo elemento | Sobrecarga. Máximo 2 dorados: `--gd + --gk` en gradiente, o `--gd + --gl` en hover. |

### Regla de oro del color (Brand Book página 9)

> El dorado es la voz de la marca. **Si todo es dorado, nada lo es.** Reservarlo para puntos focales: CTAs, números importantes, headings de sección. El resto vive en escala de grises cálidos.

---

## 3. Sistema tipográfico

### Las 3 familias

Cada tipografía resuelve un problema distinto. La mezcla es el sistema; el sistema es la marca.

| Familia | Rol | Pesos | Licencia | Por qué |
|---|---|---|---|---|
| **Cormorant Garamond** | Display, títulos (H1, H2 en home y artículos pilar) | 400, 500, 600, 700 | SIL OFL | Serif clásica con remates afilados. Comunica herencia, oficio, autoridad. La tipografía de Monocle y bancas privadas europeas. |
| **Outfit** | Body, UI, formularios, navegación | 300, 400, 500, 600, 700 | SIL OFL | Sans serif geométrica moderna. Excelente legibilidad en mobile (>70% del tráfico). Pesos finos para datos delicados. |
| **JetBrains Mono** | Datos numéricos, cifras, código | 400, 500 | Apache 2.0 | Monoespaciada en cifras genera percepción de "esto es un dato real, no una promesa". Estética de terminales financieros. |

### Self-hosting con Fontsource (obligatorio)

**NO usar Google Fonts CDN.** Razones: dependencia externa, problemas de privacidad GDPR/LOPDP, penaliza LCP en zonas con latencia alta a Google.

```bash
# Instalación en /web/
pnpm add @fontsource/cormorant-garamond @fontsource/outfit @fontsource/jetbrains-mono
```

```typescript
// /web/src/layouts/BaseLayout.astro
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
```

### Jerarquía responsive (con `clamp()`)

Los tamaños usan `clamp()` para autoescalar entre mobile y desktop sin media queries.

```css
/* /web/src/styles/tokens.css */
:root {
  /* Tipografía */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Outfit', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;
}

h1 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.2;
  letter-spacing: -0.02em; /* CRÍTICO: cierra los serifs en tamaños grandes */
  color: var(--tx);
}

h2 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--tx);
}

h3 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.3;
  color: var(--tx);
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7; /* Interlineado generoso para sesiones largas */
  color: var(--tx);
  background: var(--bg);
}

.label, .kicker, .nav-item {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--t2);
}

.data, .number, .price {
  font-family: var(--font-mono);
  font-weight: 500;
  font-variant-numeric: tabular-nums; /* CRÍTICO: alinea cifras verticalmente */
}
```

### Detalle técnico clave

El **letter-spacing negativo (-2%)** en H1 y H2 cierra los serifs que en tamaños grandes se ven "sueltos" por defecto. Este micro-ajuste les da peso editorial — el mismo truco que usan las portadas de Vogue, NYT y The Economist.

---

## 4. Eslóganes y CTAs oficiales

### Los 7 eslóganes oficiales

Cada frase tiene contexto, audiencia y propósito. **No son intercambiables.**

#### E-01 — Descriptor de marca maestro

```
"Arquitectura Financiera"
```

- **Uso:** posicionamiento general, debajo del logo, OG images, bio de redes.
- **Por qué:** no vende producto, vende método. Comunica diseño estructurado e intencional.

#### E-02 — Tagline pública principal

```
"Patrimonio que crece. Capital protegido."
```

- **Uso:** home hero, footer, OG image principal.
- **Por qué:** estructura paralela de cinco palabras. Comunica los dos beneficios maestros en una respiración: rendimiento + blindaje. Ritmo binario que se memoriza fácil.

#### E-03 — Hook frío para redes

```
"Diseña arquitectura financiera para tu futuro."
```

- **Uso:** bio Instagram, header LinkedIn, copy de portada de redes.
- **Por qué:** verbo imperativo "Diseña" activa al lector. El sustantivo de método "arquitectura" diferencia del genérico "planifica".

#### E-04 — Tagline cotizador Carolina

```
"Proteger lo que más valoras es mi compromiso."
```

- **Uso:** SOLO en la sección de Carolina dentro de `/sobre-mi`.
- **Por qué:** pieza emocional dirigida a perfil familiar. Su nicho es salud familiar — el lenguaje del cuidado le pertenece a ella, no a la voz institucional.

#### E-05 — Reels editoriales / cierre de marca

```
"Para los que se cansaron de perder en silencio."
```

- **Uso:** Reels editoriales, cierre de piezas de S&P 500 contra alternativas locales.
- **Por qué:** activa indignación + sentido de pertenencia. Diferencia al cliente de "los demás que pierden".

#### E-06 — Cierre pieza inversión

```
"Desde Ecuador. Legal. Ordenadito."
```

- **Uso:** SOLO en piezas de inversión offshore, como cierre.
- **Por qué:** "Ordenadito" en diminutivo ecuatoriano genera cercanía instantánea. "Legal" preempta de frente la objeción de offshore sospechoso. Tres palabras, tres preocupaciones resueltas.

#### E-07 — Hook aspiracional para padres 35-50

```
"Tu plan de hoy define lo que tu familia tendrá mañana."
```

- **Uso:** ads dirigidos a padres con hijos jóvenes, página de vida-termino.
- **Por qué:** estructura tiempo (hoy → mañana) activa la aversión a la pérdida.

#### E-08 — Hook curiosidad para profesionales

```
"Lo que tu agente NO te dijo sobre tu seguro de vida."
```

- **Uso:** ads dirigidos a profesionales con seguros existentes, artículos de blog.
- **Por qué:** hook clásico de curiosity gap. Posiciona a Barrera Global como "segunda opinión inteligente".

### Regla de aplicación

> **Una pieza, una frase.** Nunca apilar dos eslóganes en la misma pieza — diluyen el mensaje y se canibalizan. Si la pieza tiene tagline, no lleva hook. Si lleva hook, el tagline va solo en el footer o en el CTA final.

### Los 4 CTAs oficiales (los únicos permitidos)

```
CTA-01 — PRINCIPAL
Texto: "Agenda tu asesoría gratuita"
Estilo: botón primario (gradiente dorado)
Uso: home hero, /sobre-mi al cierre, /contacto

CTA-02 — SECUNDARIO
Texto: "Conoce nuestros servicios"
Estilo: botón secundario (outline dorado)
Uso: cuando el usuario no está listo para conversar todavía

CTA-03 — CAROLINA (uso LIMITADO)
Texto: "Cotizar con Carolina →"
Estilo: link con flecha
Uso: SOLO dentro de la sección de Carolina en /sobre-mi.
     NO usar en ningún otro lugar del sitio.

CTA-04 — GABRIELA (BLOQUEADO HASTA DEFINIR)
Texto: "¿Dudas? Pregúntale a Gabriela"
Estilo: pendiente
Uso: NO USAR hasta resolver P-29 (qué es Gabriela exactamente).
```

**Regla:** inventar CTAs nuevos requiere aprobación. NO usar verbos vagos como "Enviar", "Más info", "Siguiente". Cada CTA dice a dónde lleva.

---

## 5. Léxico de marca

### Palabras PERMITIDAS

Para hablar del producto:

```
+ plan
+ protección
+ cobertura
+ inversión
+ respaldo
+ blindaje
+ estrategia
```

Para hablar del método:

```
+ arquitectura financiera
+ diseño patrimonial
+ revisión patrimonial
+ diagnóstico financiero
```

### Palabras PROHIBIDAS en piezas públicas

**Técnico-regulatorio (no usar en marketing):**

```
× póliza
× prima
× aseguradora
× Insurance Trust   (excepto en footer legal y /sobre-mi)
```

**Promesas inflables (Meta las bloquea + violan SCVS Art. 12.12):**

```
× 100% seguro
× ganancia garantizada
× sin riesgo
× el mejor precio
× hasta X% de descuento
× comisión devuelta
```

**Modismos no-ecuatorianos (rompen afinidad cultural):**

```
× vos       (uso argentino)
× tío       (uso español)
× che       (uso argentino)
× parcero   (uso colombiano)
× ahorita   (uso colombiano/mexicano)
```

### Por qué importa este léxico

| Razón | Detalle |
|---|---|
| Compliance Meta Ads | Special Ad Category "Financial Products" bloquea promesas inflables. Reducción del alcance entre 15% y 20%. |
| Compliance SCVS | Art. 12.12 prohíbe ofrecer rebajas, descuentos o comisiones. Causal directo de pérdida de credencial. |
| Algoritmo de redes | Las palabras técnico-regulatorias activan el filtro de evasión del algoritmo. |
| Afinidad cultural | Hablar "criollito" con modismos no-ecuatorianos rompe la conexión y baja el CTR. |

---

## 6. Efectos visuales y texturas

Detalles que el ojo no nota conscientemente pero que el subconsciente registra. La diferencia entre "esto se ve bien" y "esto se siente caro".

### EF-01 — Noise texture SVG

- **Qué hace:** textura de ruido casi imperceptible sobre todo el fondo.
- **Implementación:** SVG `feTurbulence` con `opacity: 0.03`.
- **Por qué:** quita la sensación de "negro plano digital", le da textura tipo papel impreso. Mismo recurso que usa Apple.

```html
<!-- En body o capa overlay global -->
<svg style="position:fixed; inset:0; pointer-events:none; opacity:0.03; z-index:1">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" />
</svg>
```

### EF-02 — Partículas doradas flotantes

- **Qué hace:** 8 pequeñas partículas doradas que flotan suavemente por el viewport.
- **Implementación:** 8 `<div>` con animación CSS `8-20s random duration`.
- **Por qué:** movimiento sutil mantiene viva la página sin distraer. El cerebro detecta movimiento ambiental y la página deja de sentirse "muerta".

### EF-03 — Scroll reveal con fade up

- **Qué hace:** contenido aparece desde 30px abajo con fade in a medida que entra al viewport.
- **Implementación:** `IntersectionObserver` + `transition: opacity 0.6s, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Por qué:** genera sensación de "esto es premium y se construyó con cuidado". El timing `cubic-bezier(0.2, 0.8, 0.2, 1)` es la curva Apple-style.

```javascript
// En isla React o script inline
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### EF-04 — Stagger delays

- **Qué hace:** elementos no aparecen al mismo tiempo, sino en secuencia escalonada.
- **Implementación:** clases `.reveal-d1`, `.reveal-d2`, `.reveal-d3`, `.reveal-d4` con `transition-delay: 0.1s, 0.2s, 0.3s, 0.4s`.
- **Por qué:** ritmo editorial y dirección narrativa. Lo que hace Apple en sus keynotes.

```css
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; }
.reveal-d4 { transition-delay: 0.4s; }
```

### EF-05 — Hover glow en cards

- **Qué hace:** el card "flota" cuando se le pasa el cursor encima.
- **Implementación:** `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)` + `transform: translateY(-2px)` en `:hover`.
- **Por qué:** refuerza interactividad sin bordes brillantes ni cambios de color agresivos.

```css
.card {
  background: var(--cd);
  border-radius: 8px;
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

### EF-06 — Gold line top en cards

- **Qué hace:** línea dorada de 3px en la parte superior del card aparece en hover.
- **Implementación:** pseudo-elemento `::before` con `height: 3px`, `opacity: 0 → 1`.
- **Por qué:** detalle pequeño que se siente cuidado. La marca aparece literalmente en la interacción.

```css
.card {
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gd);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card:hover::before {
  opacity: 1;
}
```

---

## 7. Tratamiento de imágenes y video

### Video hero — especificaciones

| Parámetro | Valor |
|---|---|
| **Archivo** | hero2.mp4 (~6.6 MB, generado en Krea AI) |
| **Estilo** | Cinematográfico: rascacielos, oficina ejecutiva, luz dorada |
| **Filtros CSS** | `opacity: 0.65; filter: saturate(0.5) brightness(0.85);` |
| **Overlay lateral** | `linear-gradient(90deg, rgba(8,8,13,0.85) 0%, transparent 100%)` |
| **Overlay inferior** | `linear-gradient(to top, var(--bg), transparent)` en el 40% inferior |
| **Posición del texto** | Esquina inferior izquierda, `max-width: 520px` |

**Por qué este tratamiento:** evita el cliché del "asesor sonriendo a cámara". Es aspiracional sin ser cursi. Desaturado y oscurecido para que el texto encima sea legible. La esquina inferior izquierda es el "punto de descanso del ojo" según F-pattern de eye-tracking.

### Tratamiento de imágenes según tipo (Brand Book página 20)

| Tipo | Especificación | Por qué |
|---|---|---|
| **Fotos personales** (Francisco, Carolina) | Sin filtro adicional. Foto profesional real. | Generan confianza humana. La gente compra a personas, no a marcas anónimas. |
| **Fondos de cards** | `opacity: 0.6-0.7` + `brightness(0.7)` | Stock images son genéricas; oscurecerlas las convierte en textura. |
| **Logos partners** (carriers) | 40×40px, fondo blanco circular | Estandarizar tamaño unifica logos distintos en "una familia visual". |
| **B-roll Reels** | Stock humano de Pexels, NO avatares AI | Las caras AI activan "uncanny valley" en finanzas: -15% a -20% CTR medido. |

### Formatos obligatorios para web

```
Hero principal:
- AVIF (primer formato)
- WebP (fallback)
- JPEG (último recurso)
- Sin PNG en imágenes fotográficas

Iconos:
- SVG inline (NO sprite externo)
- Lucide React es OK para iconografía consistente

Logos:
- SVG (vectorial siempre)
- PNG con fondo transparente como fallback
```

---

## 8. Especificación de componentes UI

### Botón principal (CTA-01)

```css
.btn-primary {
  /* Apariencia */
  background: linear-gradient(180deg, #c9a84c 0%, #a07e2e 100%);
  color: #08080d; /* Negro profundo, NO blanco */
  
  /* Tipografía */
  font-family: var(--font-body); /* Outfit */
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.03em;
  
  /* Forma */
  padding: 14px 32px;
  border-radius: 3px; /* Sutil, NO pill, NO cuadrado */
  border: none;
  
  /* Comportamiento */
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--gl);
  outline-offset: 2px;
}
```

### Botón secundario (CTA-02)

```css
.btn-secondary {
  background: transparent;
  color: var(--gd);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.03em;
  padding: 13px 31px; /* 1px menos para compensar border */
  border: 1px solid var(--gd);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(201, 168, 76, 0.08); /* --gd con 8% opacidad */
  border-color: var(--gl);
  color: var(--gl);
}
```

### Card estándar

```css
.card {
  background: var(--cd);
  border-radius: 8px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gd);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card:hover::before {
  opacity: 1;
}

.card h3 {
  color: var(--tx);
  margin-bottom: 16px;
}

.card p {
  color: var(--t2);
  font-size: 15px;
  line-height: 1.7;
}
```

### Formulario (input + label)

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.form-field label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--t2);
  letter-spacing: 0.02em;
}

.form-field input,
.form-field textarea {
  background: var(--bg2);
  border: 1px solid var(--t3);
  border-radius: 4px;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 16px; /* CRÍTICO: 16px en mobile evita zoom de iOS */
  color: var(--tx);
  transition: border-color 0.2s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--gd);
  background: var(--bg2);
}

.form-field input:invalid:not(:placeholder-shown) {
  border-color: var(--rd);
}

.form-field .error-text {
  color: var(--rd);
  font-size: 0.85rem;
  margin-top: 4px;
}
```

### Tabular numbers (cifras alineadas)

Para todas las cifras financieras (primas, plazos, porcentajes, sumas aseguradas):

```css
.data,
.number,
.price,
.percentage {
  font-family: var(--font-mono); /* JetBrains Mono */
  font-variant-numeric: tabular-nums; /* CRÍTICO */
  font-weight: 500;
}
```

Sin `tabular-nums`, las cifras en columnas se ven desalineadas vertical y se siente amateur.

---

## 9. Checklist antes de publicar

Antes de subir cualquier pieza al sitio (página, sección, componente), validar:

```
[ ] ¿Los colores son los oficiales (NO aproximaciones)?
[ ] ¿Las tipografías son Cormorant + Outfit + JetBrains Mono?
[ ] ¿Hay UN solo H1 en la página?
[ ] ¿Hay UN solo CTA principal por scroll?
[ ] ¿Pasa el test del vocabulario prohibido?
[ ] ¿El video/imagen tiene los filtros aplicados (opacity, brightness)?
[ ] ¿Carga en menos de 3 segundos en mobile (4G simulado)?
[ ] ¿Tildes, "ñ" y puntuación están correctas (español Ecuador)?
[ ] ¿Cumple WCAG 2.2 AA: contraste 4.5:1, foco visible, alt text?
[ ] ¿El cotizador y rutas privadas tienen noindex?
```

### Verificaciones técnicas automatizadas

```bash
# Validar contraste de color (manual o Lighthouse)
# Validar Schema.org
https://search.google.com/test/rich-results

# Validar performance
npx lighthouse https://barreraglobal.com --view --form-factor=mobile

# Validar WCAG 2.2
# Pa11y CI en GitHub Actions (Fase 3+)
```

---

## 10. Regla final inviolable

> **Si una pieza no cumple este brand book, no se publica.**
>
> La consistencia es lo que construye marca.
> La inconsistencia es lo que la destruye.
>
> — Brand Book Barrera Global 2026, página 24

Si hay duda sobre si una decisión visual cumple el Brand Book:

1. Consultar el PDF `Barrera_Global_Brand_Book_2026.pdf` en el knowledge del proyecto.
2. Si la duda persiste, consultar a Francisco antes de publicar.
3. NO improvisar variantes "porque queda mejor". El Brand Book es la fuente única.

---

**Fin del documento IDENTIDAD-MARCA.md.**

**Versión:** 1.0
**Próxima revisión:** al iniciar Fase 1 (cuando se materialice el sistema de diseño en código Astro real).
