# INVENTARIO DE TILDES — insumo para la decisión D3

> **Esto es SOLO un inventario. No se editó ni una página.** La decisión D3
> (ejecutar o no la pasada de tildes) es de Francisco.

**Fecha:** sábado 25 de julio de 2026
**Rama:** `sesion-10-estructura` · **Generado sobre:** `web/src/**/*.astro`
**Decisión que alimenta:** **D3** en `docs/REPORTE-SESION-10.md`

---

## Resumen

| Categoría | Ocurrencias | ¿Entra en D3? |
|---|---:|---|
| **Copy visible en página** | 325 | Sí — es el cuerpo de la decisión |
| **Props de copy que renderizan** (`heroSubtitle`, `productName`, labels de nav, textos de `PROCESO`/`FAQ`) | 21 | Sí — se ven en pantalla igual que el texto |
| **SEO** (`title`, `description`, JSON-LD) | 44 | **Decisión aparte** — ver sección 3 |
| **Mensajes de WhatsApp** | 8 | Decisión aparte — no se ven en la web |
| **`aria-label`** (lectores de pantalla) | 5 | Decisión aparte — no es texto visual |
| **Dentro del `<script>` del Header** | 2 | ⚠️ **Rompe la CSP** — ver sección 6 |
| Excluidos (comentarios de código, identificadores, rutas) | 29 | No |

**Total de correcciones de copy visible: 346** (páginas + props).

A eso se suman los casos que **no** son mecánicos y exigen leer la frase:
monosílabos diacríticos e interrogativos (sección 7).

### Método

Se extrajo primero el vocabulario real del **HTML renderizado** (884 palabras
únicas de texto visible) y sobre esa lista se armó el diccionario. No se
partió de una lista inventada: cada palabra de este inventario existe en el
sitio. Después se escaneó el fuente `.astro` clasificando cada aparición por
contexto (texto, prop, SEO, atributo técnico, comentario, script).

### Qué NO se tocó a propósito

- **Rutas y slugs:** `/inversion` sigue siendo `/inversion`. Cambiar una URL
  publicada rompe enlaces y el `canonical`. Lista completa en la sección 8.
- **Comentarios de código** y nombres de variable (`const VERSION`).
- **Eñes:** ya se corrigieron el 25/07 (commit `968e4a8`). Este inventario es
  solo de **acentos agudos**.

---

## 1. Copy visible en página

Tipo `página` = texto entre etiquetas. Tipo `prop` = valor que un componente
renderiza como texto (`heroSubtitle`, `productName`, label de navegación,
textos de `PROCESO`/`FAQ` del layout de producto).

### `components/Footer.astro` — 8 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 33 | `Asesoria` | **Asesoría** | página |
| 33 | `inversion` | **inversión** | página |
| 40 | `Navegacion` | **Navegación** | página |
| 73 | `Politica` | **Política** | página |
| 78 | `Terminos` | **Términos** | página |
| 83 | `Politica` | **Política** | página |
| 106 | `Ubicacion` | **Ubicación** | página |
| 136 | `tramite` | **trámite** | página |

### `components/Header.astro` — 2 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 28 | `termino` | **término** | prop |
| 32 | `Inversion` | **Inversión** | prop |

### `layouts/Layout.astro` — 3 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 168 | `aca` | **acá** | página |
| 168 | `pagina` | **página** | página |
| 168 | `pagina` | **página** | página |

### `layouts/ProductLayout.astro` — 21 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 24 | `pagina` | **página** | prop |
| 57 | `situacion` | **situación** | prop |
| 62 | `presion` | **presión** | prop |
| 62 | `segun` | **según** | prop |
| 62 | `tecnico` | **técnico** | prop |
| 67 | `genericos` | **genéricos** | prop |
| 67 | `segun` | **según** | prop |
| 72 | `decision` | **decisión** | prop |
| 80 | `cotizacion` | **cotización** | prop |
| 80 | `genericos` | **genéricos** | prop |
| 80 | `segun` | **según** | prop |
| 84 | `conversacion` | **conversación** | prop |
| 88 | `conversacion` | **conversación** | prop |
| 88 | `presion` | **presión** | prop |
| 92 | `analisis` | **análisis** | prop |
| 172 | `Cotizacion` | **Cotización** | página |
| 191 | `segun` | **según** | página |
| 192 | `genericos` | **genéricos** | página |
| 222 | `especifica` | **específica** | página |
| 245 | `conversacion` | **conversación** | página |
| 245 | `presion` | **presión** | página |

### `pages/404.astro` — 6 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 14 | `direccion` | **dirección** | prop |
| 14 | `pagina` | **página** | prop |
| 31 | `pagina` | **página** | página |
| 35 | `pagina` | **página** | página |
| 36 | `aqui` | **aquí** | página |
| 36 | `direccion` | **dirección** | página |

### `pages/contacto.astro` — 7 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 8 | `pagina` | **página** | prop |
| 34 | `conversacion` | **conversación** | página |
| 34 | `presion` | **presión** | página |
| 54 | `Tambien` | **También** | página |
| 64 | `Organica` | **Orgánica** | página |
| 65 | `Proteccion` | **Protección** | página |
| 69 | `Politica` | **Política** | página |

### `pages/index.astro` — 42 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 30 | `Asesoria` | **Asesoría** | página |
| 40 | `Asesoria` | **Asesoría** | página |
| 40 | `inversion` | **inversión** | página |
| 41 | `informacion` | **información** | página |
| 41 | `presion` | **presión** | página |
| 41 | `vacias` | **vacías** | página |
| 42 | `decision` | **decisión** | página |
| 99 | `tecnica` | **técnica** | página |
| 100 | `comision` | **comisión** | página |
| 100 | `solucion` | **solución** | página |
| 101 | `proteccion` | **protección** | página |
| 115 | `economica` | **económica** | página |
| 115 | `Proteccion` | **Protección** | página |
| 121 | `termino` | **término** | página |
| 125 | `acumulacion` | **acumulación** | página |
| 125 | `indices` | **índices** | página |
| 125 | `proteccion` | **protección** | página |
| 134 | `termino` | **término** | página |
| 162 | `Atencion` | **Atención** | página |
| 162 | `medica` | **médica** | página |
| 163 | `limite` | **límite** | página |
| 168 | `clinicas` | **clínicas** | página |
| 208 | `Inversion` | **Inversión** | página |
| 210 | `Vehiculos` | **Vehículos** | página |
| 211 | `acumulacion` | **acumulación** | página |
| 216 | `Vehiculos` | **Vehículos** | página |
| 220 | `segun` | **según** | página |
| 228 | `inversion` | **inversión** | página |
| 245 | `genericos` | **genéricos** | página |
| 245 | `segun` | **según** | página |
| 270 | `conviccion` | **convicción** | página |
| 270 | `profesion` | **profesión** | página |
| 272 | `tramite` | **trámite** | página |
| 276 | `inversion` | **inversión** | página |
| 277 | `ahi` | **ahí** | página |
| 280 | `tecnica` | **técnica** | página |
| 282 | `automatizacion` | **automatización** | página |
| 282 | `proteccion` | **protección** | página |
| 283 | `informacion` | **información** | página |
| 288 | `presion` | **presión** | página |
| 318 | `conversacion` | **conversación** | página |
| 318 | `presion` | **presión** | página |

### `pages/inversion.astro` — 14 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 11 | `Inversion` | **Inversión** | página |
| 12 | `acumulacion` | **acumulación** | página |
| 12 | `Vehiculos` | **Vehículos** | página |
| 17 | `inversion` | **inversión** | página |
| 18 | `traves` | **través** | página |
| 18 | `vehiculos` | **vehículos** | página |
| 19 | `acumulacion` | **acumulación** | página |
| 20 | `segun` | **según** | página |
| 23 | `metodo` | **método** | página |
| 26 | `decision` | **decisión** | página |
| 26 | `inversion` | **inversión** | página |
| 26 | `tipico` | **típico** | página |
| 27 | `decision` | **decisión** | página |
| 27 | `vehiculo` | **vehículo** | página |

### `pages/privacidad.astro` — 114 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 27 | `Politica` | **Política** | página |
| 31 | `informacion` | **información** | página |
| 32 | `tecnico` | **técnico** | página |
| 36 | `Version` | **Versión** | página |
| 44 | `politica` | **política** | página |
| 44 | `version` | **versión** | página |
| 45 | `revision` | **revisión** | página |
| 46 | `bitacora` | **bitácora** | página |
| 46 | `publico` | **público** | página |
| 55 | `razon` | **razón** | página |
| 58 | `tramite` | **trámite** | página |
| 72 | `unicamente` | **únicamente** | página |
| 75 | `asesoria` | **asesoría** | página |
| 75 | `inversion` | **inversión** | página |
| 77 | `contratacion` | **contratación** | página |
| 77 | `polizas` | **pólizas** | página |
| 78 | `polizas` | **pólizas** | página |
| 79 | `informacion` | **información** | página |
| 79 | `polizas` | **pólizas** | página |
| 93 | `cedula` | **cédula** | página |
| 93 | `Numero` | **Número** | página |
| 95 | `Direccion` | **Dirección** | página |
| 95 | `telefono` | **teléfono** | página |
| 96 | `Ocupacion` | **Ocupación** | página |
| 104 | `condicion` | **condición** | página |
| 104 | `ocupacion` | **ocupación** | página |
| 105 | `explicito` | **explícito** | página |
| 106 | `conversacion` | **conversación** | página |
| 119 | `especifica` | **específica** | página |
| 120 | `ejecucion` | **ejecución** | página |
| 127 | `conservacion` | **conservación** | página |
| 133 | `ultimo` | **último** | página |
| 134 | `poliza` | **póliza** | página |
| 134 | `poliza` | **póliza** | página |
| 135 | `poliza` | **póliza** | página |
| 136 | `anonimizacion` | **anonimización** | página |
| 136 | `Despues` | **Después** | página |
| 145 | `unicamente` | **únicamente** | página |
| 149 | `operacion` | **operación** | página |
| 150 | `Compañias` | **Compañías** | página |
| 151 | `mensajeria` | **mensajería** | página |
| 151 | `tecnologicos` | **tecnológicos** | página |
| 152 | `asi` | **así** | página |
| 155 | `estan` | **están** | página |
| 156 | `politica` | **política** | página |
| 156 | `proteccion` | **protección** | página |
| 165 | `tecnologicos` | **tecnológicos** | página |
| 174 | `politica` | **política** | página |
| 175 | `Resolucion` | **Resolución** | página |
| 176 | `Proteccion` | **Protección** | página |
| 191 | `Rectificacion` | **Rectificación** | página |
| 192 | `Eliminacion` | **Eliminación** | página |
| 193 | `especifico` | **específico** | página |
| 193 | `Oposicion` | **Oposición** | página |
| 195 | `Limitacion` | **Limitación** | página |
| 196 | `intervencion` | **intervención** | página |
| 196 | `unicamente` | **únicamente** | página |
| 197 | `Revocacion` | **Revocación** | página |
| 203 | `Revocacion` | **Revocación** | página |
| 207 | `revocacion` | **revocación** | página |
| 208 | `otorgo` | **otorgó** | página |
| 209 | `seccion` | **sección** | página |
| 220 | `generacion` | **generación** | página |
| 220 | `recuperacion` | **recuperación** | página |
| 221 | `conversacion` | **conversación** | página |
| 221 | `tecnologicos` | **tecnológicos** | página |
| 222 | `informacion` | **información** | página |
| 222 | `recuperacion` | **recuperación** | página |
| 226 | `conversacion` | **conversación** | página |
| 226 | `interes` | **interés** | página |
| 226 | `segun` | **según** | página |
| 227 | `Resolucion` | **Resolución** | página |
| 232 | `unicamente` | **únicamente** | página |
| 233 | `intervencion` | **intervención** | página |
| 234 | `conversacion` | **conversación** | página |
| 234 | `solicitandolo` | **solicitándolo** | página |
| 241 | `proteccion` | **protección** | página |
| 245 | `Proteccion` | **Protección** | página |
| 258 | `escribenos` | **escríbenos** | página |
| 263 | `dias` | **días** | página |
| 263 | `habiles` | **hábiles** | página |
| 263 | `recepcion` | **recepción** | página |
| 268 | `validacion` | **validación** | página |
| 277 | `tecnicas` | **técnicas** | página |
| 283 | `periodicas` | **periódicas** | página |
| 284 | `tecnologicos` | **tecnológicos** | página |
| 290 | `Proteccion` | **Protección** | página |
| 293 | `designacion` | **designación** | página |
| 293 | `Proteccion` | **Protección** | página |
| 294 | `formalizacion` | **formalización** | página |
| 295 | `politica` | **política** | página |
| 298 | `proteccion` | **protección** | página |
| 298 | `traves` | **través** | página |
| 299 | `politica` | **política** | página |
| 305 | `tecnologias` | **tecnologías** | página |
| 308 | `unicamente` | **únicamente** | página |
| 309 | `implementara` | **implementará** | página |
| 309 | `proximas` | **próximas** | página |
| 310 | `permitira` | **permitirá** | página |
| 314 | `estara` | **estará** | página |
| 314 | `pagina` | **página** | página |
| 314 | `Politica` | **Política** | página |
| 320 | `Notificacion` | **Notificación** | página |
| 326 | `Proteccion` | **Protección** | página |
| 332 | `politica` | **política** | página |
| 335 | `periodicamente` | **periódicamente** | página |
| 335 | `politica` | **política** | página |
| 336 | `practicas` | **prácticas** | página |
| 337 | `anticipacion` | **anticipación** | página |
| 337 | `comunicara` | **comunicará** | página |
| 337 | `reflejara` | **reflejará** | página |
| 338 | `version` | **versión** | página |
| 341 | `pagina` | **página** | página |
| 341 | `periodicamente` | **periódicamente** | página |

### `pages/seguros/auto.astro` — 15 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 12 | `Pagina` | **Página** | página |
| 12 | `preparacion` | **preparación** | página |
| 12 | `vehiculo` | **vehículo** | página |
| 16 | `asi` | **así** | página |
| 16 | `decision` | **decisión** | página |
| 16 | `explicito` | **explícito** | página |
| 16 | `inversion` | **inversión** | página |
| 16 | `ofrecera` | **ofrecerá** | página |
| 16 | `pagina` | **página** | página |
| 16 | `Sesion` | **Sesión** | página |
| 19 | `pagina` | **página** | página |
| 20 | `cotizacion` | **cotización** | página |
| 24 | `decision` | **decisión** | página |
| 24 | `tipicas` | **típicas** | página |
| 25 | `decision` | **decisión** | página |

### `pages/seguros/salud-internacional.astro` — 14 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 12 | `atencion` | **atención** | página |
| 12 | `medica` | **médica** | página |
| 12 | `opcion` | **opción** | página |
| 12 | `pais` | **país** | página |
| 18 | `medica` | **médica** | página |
| 18 | `opcion` | **opción** | página |
| 19 | `atencion` | **atención** | página |
| 19 | `pais` | **país** | página |
| 22 | `proteccion` | **protección** | página |
| 25 | `decision` | **decisión** | página |
| 25 | `paises` | **países** | página |
| 25 | `tipicas` | **típicas** | página |
| 26 | `decision` | **decisión** | página |
| 26 | `geografico` | **geográfico** | página |

### `pages/seguros/salud-nacional.astro` — 13 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 12 | `Atencion` | **Atención** | página |
| 12 | `clinicas` | **clínicas** | página |
| 12 | `medica` | **médica** | página |
| 18 | `atencion` | **atención** | página |
| 18 | `clinicas` | **clínicas** | página |
| 18 | `medica` | **médica** | página |
| 19 | `limite` | **límite** | página |
| 22 | `pais` | **país** | página |
| 25 | `decision` | **decisión** | página |
| 25 | `tipicas` | **típicas** | página |
| 26 | `clinicas` | **clínicas** | página |
| 26 | `decision` | **decisión** | página |
| 26 | `medica` | **médica** | página |

### `pages/seguros/vida-indexada.astro` — 10 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 12 | `acumulacion` | **acumulación** | página |
| 12 | `indices` | **índices** | página |
| 12 | `Proteccion` | **Protección** | página |
| 19 | `Ademas` | **Además** | página |
| 19 | `indices` | **índices** | página |
| 23 | `proteccion` | **protección** | página |
| 26 | `decision` | **decisión** | página |
| 26 | `tipico` | **típico** | página |
| 27 | `decision` | **decisión** | página |
| 27 | `indexacion` | **indexación** | página |

### `pages/seguros/vida-termino.astro` — 11 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 11 | `termino` | **término** | página |
| 12 | `economica` | **económica** | página |
| 12 | `Proteccion` | **Protección** | página |
| 17 | `proteccion` | **protección** | página |
| 17 | `termino` | **término** | página |
| 18 | `economica` | **económica** | página |
| 22 | `proteccion` | **protección** | página |
| 26 | `decision` | **decisión** | página |
| 26 | `termino` | **término** | página |
| 26 | `tipicas` | **típicas** | página |
| 27 | `decision` | **decisión** | página |

### `pages/sobre-mi.astro` — 66 correcciones

| Línea | Actual | Propuesta | Tipo |
|---:|---|---|---|
| 8 | `pagina` | **página** | prop |
| 55 | `Asesoria` | **Asesoría** | página |
| 63 | `tecnica` | **técnica** | página |
| 81 | `Formacion` | **Formación** | página |
| 81 | `tecnica` | **técnica** | página |
| 83 | `Vocacion` | **Vocación** | página |
| 91 | `Catolica` | **Católica** | página |
| 95 | `Despues` | **Después** | página |
| 97 | `decision` | **decisión** | página |
| 97 | `inversion` | **inversión** | página |
| 98 | `conclusion` | **conclusión** | página |
| 98 | `logica` | **lógica** | página |
| 98 | `podia` | **podía** | página |
| 99 | `tecnica` | **técnica** | página |
| 99 | `tenia` | **tenía** | página |
| 104 | `Compañias` | **Compañías** | página |
| 130 | `transicion` | **transición** | página |
| 134 | `resolvia` | **resolvía** | página |
| 141 | `conversacion` | **conversación** | página |
| 141 | `cronico` | **crónico** | página |
| 147 | `ahi` | **ahí** | página |
| 147 | `Decidi` | **Decidí** | página |
| 147 | `podia` | **podía** | página |
| 172 | `analisis` | **análisis** | página |
| 173 | `tecnico` | **técnico** | página |
| 174 | `automatizacion` | **automatización** | página |
| 175 | `asesoria` | **asesoría** | página |
| 183 | `atencion` | **atención** | página |
| 183 | `conversacion` | **conversación** | página |
| 184 | `analisis` | **análisis** | página |
| 189 | `inversion` | **inversión** | página |
| 190 | `conversacion` | **conversación** | página |
| 190 | `presion` | **presión** | página |
| 207 | `lineas` | **líneas** | página |
| 225 | `Proteccion` | **Protección** | página |
| 226 | `termino` | **término** | página |
| 227 | `inversion` | **inversión** | página |
| 241 | `medica` | **médica** | página |
| 242 | `atencion` | **atención** | página |
| 243 | `pais` | **país** | página |
| 254 | `Inversion` | **Inversión** | página |
| 257 | `inversion` | **inversión** | página |
| 257 | `traves` | **través** | página |
| 267 | `categoria` | **categoría** | página |
| 269 | `poliza` | **póliza** | página |
| 270 | `proteccion` | **protección** | página |
| 270 | `sensacion` | **sensación** | página |
| 294 | `vinculo` | **vínculo** | página |
| 296 | `poliza` | **póliza** | página |
| 296 | `relacion` | **relación** | página |
| 297 | `detras` | **detrás** | página |
| 303 | `lider` | **líder** | página |
| 305 | `conversacion` | **conversación** | página |
| 320 | `codigo` | **código** | página |
| 320 | `etico` | **ético** | página |
| 325 | `conversacion` | **conversación** | página |
| 354 | `analisis` | **análisis** | página |
| 354 | `tecnico` | **técnico** | página |
| 355 | `presion` | **presión** | página |
| 382 | `despues` | **después** | página |
| 383 | `renovacion` | **renovación** | página |
| 383 | `tecnica` | **técnica** | página |
| 393 | `poliza` | **póliza** | página |
| 416 | `aca` | **acá** | página |
| 417 | `decision` | **decisión** | página |
| 418 | `conversacion` | **conversación** | página |

---

## 2. Palabras más repetidas

Para dimensionar el trabajo: si se ejecuta D3, estas concentran el grueso.

| Palabra | Propuesta | Ocurrencias en copy visible |
|---|---|---:|
| `proteccion` | **protección** | 21 |
| `decision` | **decisión** | 17 |
| `inversion` | **inversión** | 16 |
| `conversacion` | **conversación** | 15 |
| `pagina` | **página** | 13 |
| `politica` | **política** | 12 |
| `presion` | **presión** | 9 |
| `segun` | **según** | 8 |
| `atencion` | **atención** | 7 |
| `termino` | **término** | 7 |
| `medica` | **médica** | 7 |
| `asesoria` | **asesoría** | 6 |
| `poliza` | **póliza** | 6 |
| `tecnica` | **técnica** | 6 |
| `unicamente` | **únicamente** | 5 |
| `informacion` | **información** | 5 |
| `acumulacion` | **acumulación** | 5 |
| `tipicas` | **típicas** | 4 |
| `tecnologicos` | **tecnológicos** | 4 |
| `clinicas` | **clínicas** | 4 |

---

## 3. SEO — decisión extra de Francisco

**44 ocurrencias** en `title`, `description` y en las descripciones de los
3 bloques JSON-LD de `Layout.astro`.

Van aparte porque **cambiar metadatos afecta SEO**: el `<title>` y la
`description` son lo que Google indexa y muestra en resultados. El sitio aún
no es público (gate **P-39**), así que el riesgo hoy es bajo, pero la decisión
es tuya y conviene tomarla de una sola vez y no en dos pasadas.

> Los `canonical` **no se tocan nunca**: son URLs. Ya están fuera (sección 8).

| Archivo | Línea | Actual | Propuesta |
|---|---:|---|---|
| `layouts/Layout.astro` | 22 | `Asesoria` | **Asesoría** |
| `layouts/Layout.astro` | 22 | `inversion` | **inversión** |
| `layouts/Layout.astro` | 39 | `Asesoria` | **Asesoría** |
| `layouts/Layout.astro` | 72 | `automatizacion` | **automatización** |
| `layouts/ProductLayout.astro` | 25 | `pagina` | **página** |
| `pages/404.astro` | 12 | `Pagina` | **Página** |
| `pages/contacto.astro` | 12 | `Asesoria` | **Asesoría** |
| `pages/contacto.astro` | 13 | `inversion` | **inversión** |
| `pages/contacto.astro` | 13 | `presion` | **presión** |
| `pages/contacto.astro` | 13 | `Asesoria` | **Asesoría** |
| `pages/index.astro` | 12 | `Asesoria` | **Asesoría** |
| `pages/index.astro` | 12 | `inversion` | **inversión** |
| `pages/index.astro` | 13 | `Asesoria` | **Asesoría** |
| `pages/index.astro` | 13 | `inversion` | **inversión** |
| `pages/inversion.astro` | 7 | `Inversion` | **Inversión** |
| `pages/inversion.astro` | 8 | `acumulacion` | **acumulación** |
| `pages/inversion.astro` | 8 | `Inversion` | **Inversión** |
| `pages/inversion.astro` | 8 | `vehiculos` | **vehículos** |
| `pages/privacidad.astro` | 6 | `Politica` | **Política** |
| `pages/privacidad.astro` | 7 | `Politica` | **Política** |
| `pages/privacidad.astro` | 7 | `Proteccion` | **Protección** |
| `pages/privacidad.astro` | 7 | `Organica` | **Orgánica** |
| `pages/seguros/auto.astro` | 8 | `asesoria` | **asesoría** |
| `pages/seguros/auto.astro` | 8 | `pagina` | **página** |
| `pages/seguros/auto.astro` | 8 | `preparacion` | **preparación** |
| `pages/seguros/salud-internacional.astro` | 8 | `atencion` | **atención** |
| `pages/seguros/salud-internacional.astro` | 8 | `Cotizacion` | **Cotización** |
| `pages/seguros/salud-internacional.astro` | 8 | `medica` | **médica** |
| `pages/seguros/salud-internacional.astro` | 8 | `opcion` | **opción** |
| `pages/seguros/salud-nacional.astro` | 8 | `medica` | **médica** |
| `pages/seguros/salud-nacional.astro` | 8 | `Cotizacion` | **Cotización** |
| `pages/seguros/salud-nacional.astro` | 8 | `atencion` | **atención** |
| `pages/seguros/salud-nacional.astro` | 8 | `clinicas` | **clínicas** |
| `pages/seguros/vida-indexada.astro` | 8 | `acumulacion` | **acumulación** |
| `pages/seguros/vida-indexada.astro` | 8 | `Cotizacion` | **Cotización** |
| `pages/seguros/vida-indexada.astro` | 8 | `indices` | **índices** |
| `pages/seguros/vida-indexada.astro` | 8 | `proteccion` | **protección** |
| `pages/seguros/vida-termino.astro` | 7 | `termino` | **término** |
| `pages/seguros/vida-termino.astro` | 8 | `proteccion` | **protección** |
| `pages/seguros/vida-termino.astro` | 8 | `Cotizacion` | **Cotización** |
| `pages/seguros/vida-termino.astro` | 8 | `economica` | **económica** |
| `pages/seguros/vida-termino.astro` | 8 | `termino` | **término** |
| `pages/sobre-mi.astro` | 13 | `inversion` | **inversión** |
| `pages/sobre-mi.astro` | 13 | `tecnica` | **técnica** |

---

## 4. Mensajes de WhatsApp — decisión aparte

**8 ocurrencias.** Es el texto que se autocompleta en el chat de WhatsApp
(`whatsappMessage` / `WHATSAPP_MESSAGE`). No se ve en la web, pero sí lo lee
el cliente y es el mecanismo de atribución por página.

| Archivo | Línea | Actual | Propuesta |
|---|---:|---|---|
| `pages/inversion.astro` | 13 | `Inversion` | **Inversión** |
| `pages/inversion.astro` | 13 | `pagina` | **página** |
| `pages/seguros/auto.astro` | 13 | `pagina` | **página** |
| `pages/seguros/salud-internacional.astro` | 13 | `pagina` | **página** |
| `pages/seguros/salud-nacional.astro` | 13 | `pagina` | **página** |
| `pages/seguros/vida-indexada.astro` | 13 | `pagina` | **página** |
| `pages/seguros/vida-termino.astro` | 13 | `pagina` | **página** |
| `pages/seguros/vida-termino.astro` | 13 | `termino` | **término** |

---

## 5. `aria-label` — decisión aparte

**5 ocurrencias.** No son texto visual: las leen los lectores de pantalla.
Corregirlas mejora la lectura en voz alta y no cambia nada en pantalla.

| Archivo | Línea | Actual | Propuesta |
|---|---:|---|---|
| `components/Header.astro` | 54 | `Navegacion` | **Navegación** |
| `components/Header.astro` | 106 | `navegacion` | **navegación** |
| `components/Header.astro` | 121 | `Navegacion` | **Navegación** |
| `pages/404.astro` | 40 | `Navegacion` | **Navegación** |
| `pages/404.astro` | 40 | `pagina` | **página** |

---

## 6. ⚠️ Dentro del `<script>` del Header — rompe la CSP

**2 ocurrencias**, en `components/Header.astro` líneas 167-193 (el toggle del
menú móvil).

| Archivo | Línea | Actual | Propuesta |
|---|---:|---|---|
| `components/Header.astro` | 177 | `navegacion` | **navegación** |
| `components/Header.astro` | 182 | `navegacion` | **navegación** |

Son los `aria-label` que el script escribe al abrir y cerrar el menú.
**Si se tocan, cambia el contenido del script y su hash SHA-256 deja de
coincidir con el de `infra/nginx.conf`: el navegador bloquea el script y el
menú móvil deja de abrir, en silencio.**

Si D3 se ejecuta y se decide incluirlos, el procedimiento obligatorio es
`infra/README-hashes.md`: rebuild, recomputar los hashes sobre `web/dist`,
actualizar `script-src` en `infra/nginx.conf` **en el mismo commit**, y
rebuild de la imagen Docker.

---

## 7. Requiere revisión caso por caso (NO mecánico)

Estas no entran en el conteo de arriba porque la tilde **depende del sentido de
la frase**. Un reemplazo global aquí introduce errores.

### 7.1 Interrogativos e indirectos (sí llevan tilde)

| Archivo | Línea | Frase | Propuesta |
|---|---:|---|---|
| `layouts/ProductLayout.astro` | 72 | `que cubre, que excluye y por que` | qué / qué / por qué |
| `layouts/ProductLayout.astro` | 79 | `¿Como se calcula la prima?` | ¿**Cómo** |
| `layouts/ProductLayout.astro` | 83 | `¿Que necesito para empezar a cotizar?` | ¿**Qué** |
| `layouts/ProductLayout.astro` | 91 | `¿Quien responde mi mensaje?` | ¿**Quién** |
| `layouts/ProductLayout.astro` | 148 | `Que es y para quien` (h2) | **Qué** es y para **quién** |
| `layouts/ProductLayout.astro` | 169 | `Como funciona` (h2) | **Cómo** funciona |
| `pages/sobre-mi.astro` | 119 | `Por que seguros` (h2) | **Por qué** seguros |
| `pages/sobre-mi.astro` | 144 | `y por que un asesor recomienda` | **por qué** |
| `pages/sobre-mi.astro` | 160 | `Como trabajo` (h2) | **Cómo** trabajo |
| `pages/sobre-mi.astro` | 204 | `En que me especializo` (h2) | En **qué** me especializo |
| `pages/privacidad.astro` | 107 | `explica para que se requieren` | para **qué** |
| `pages/seguros/auto.astro` | 20 | `que es y para quien, como funciona` | **qué** / **quién** / **cómo** |

### 7.2 Relativos (NO llevan tilde — están correctos hoy)

`Con quien opero` (sobre-mi 283) · `donde podia aportar` (sobre-mi 98, 147) ·
`por donde seguir` (404 36). **No tocar.**

### 7.3 Monosílabos y adverbios diacríticos

| Caso | Dónde | Propuesta |
|---|---|---|
| `mas` → **más** | sobre-mi 98 (`mas valor`), 135 (`algo mas profundo`); privacidad 314 (`Mas detalle`) | Sí lleva tilde: es adverbio de cantidad en los 3 casos |
| `tu` → **tú** | sobre-mi 187 (`cuando tu escribes`) | Sí: es pronombre, no posesivo |
| `estes` → **estés** | salud-internacional 22 (`donde estes`) | Sí: subjuntivo |
| `solo` | index 41, sobre-mi 382, ProductLayout 88, auto 21 | **Dudoso.** La RAE ya no exige la tilde en el adverbio. Recomendación: dejarlo sin tilde |

> El resto de `tu`, `el`, `mi`, `si`, `se` del sitio son posesivos,
> artículos y pronombres átonos: **no** llevan tilde. No se listan uno a uno
> porque son cientos y todos están correctos.

---

## 8. NO tocar — rutas, slugs y canonical

| Archivo | Línea | Qué es |
|---|---:|---|
| `components/Footer.astro` | 77 | `terminos` dentro de una ruta o `canonical` |
| `components/Header.astro` | 28 | `termino` dentro de una ruta o `canonical` |
| `components/Header.astro` | 32 | `inversion` dentro de una ruta o `canonical` |
| `pages/index.astro` | 131 | `termino` dentro de una ruta o `canonical` |
| `pages/index.astro` | 225 | `inversion` dentro de una ruta o `canonical` |
| `pages/inversion.astro` | 9 | `inversion` dentro de una ruta o `canonical` |
| `pages/inversion.astro` | 14 | `inversion` dentro de una ruta o `canonical` |
| `pages/seguros/vida-termino.astro` | 9 | `termino` dentro de una ruta o `canonical` |
| `pages/seguros/vida-termino.astro` | 14 | `termino` dentro de una ruta o `canonical` |

Cambiar cualquiera de estos rompe enlaces internos, el `canonical` o el
`sitemap` futuro. **El slug se queda sin tilde aunque el texto visible la lleve**
(`/inversion` con página titulada «Inversión»): es la práctica estándar.

---

## 9. Observaciones

1. **Los marcadores `[PENDIENTE]` también acumulan tildes faltantes.** Son texto
   visible hoy, pero desaparecen cuando definas el contenido de producto. Si D3
   se ejecuta antes de llenarlos, ese trabajo se pierde. **Sugerencia: llenar
   contenido primero, tildes después** — o excluirlos de la pasada.
2. **`Escribinos` (ProductLayout 57, 84) es voseo rioplatense.** No es un tema de
   tildes, pero `CLAUDE.md` pide español ecuatoriano sin jerga argentina. En
   Ecuador sería `Escríbenos`. Lo dejo señalado, no lo toqué: es copy, y el copy
   es decisión tuya.
3. **Coherencia obligatoria si D3 se ejecuta.** Media tilde es peor que ninguna:
   `Asesoria` en el home y «Asesoría» en Sobre mí se lee como error. Si se
   ejecuta, va completo y de una vez.
4. **Momento recomendado:** antes del gate **P-39** (revisión legal humana) y
   antes del pase a público. Después de publicar, tocar `title`/`description`
   de 11 páginas tiene costo SEO que hoy no existe.

---

*Generado el 25/07/2026 en sesión autónoma. Cero páginas editadas.*
