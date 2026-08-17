# Continuidad — Sesión 19: el deploy salió, y el trabajo nuevo quedó en el servidor sin publicar

> Documento de continuidad (snapshot fechado). **Este reemplaza al
> `CONTINUIDAD_2026-08-10_1234.md` como punto de arranque**: aquel se escribió
> con el deploy en cola bajo veda y con 12 páginas, y ya no refleja el estado.
>
> No reemplaza a `PLAN-MAESTRO-v2.md`, `PENDIENTES.md` ni
> `ERRORES-Y-APRENDIZAJES.md`; los resume para arranque rápido.

**Snapshot creado:** lunes 17 de agosto de 2026, madrugada (hora Ecuador, UTC-5)
**Autor:** Claude Code, usuario `web`, **corriendo dentro del VPS** (primera vez)
**Cubre:** la Sesión 19 completa — entorno del servidor, correo del dominio, selector de contacto, barra fija de WhatsApp, dieta de fuentes y puesta al día de la documentación.

---

## ⚠️ Lo que hay que saber antes que nada

**Hay tres commits de código que existen en UN SOLO DISCO.** La Sesión 19 corrió
dentro del VPS con el usuario `web`, que **no puede pushear**. `git status -sb`
dice `[ahead 3]` contra `origin/main`. Hasta que Francisco los publique, ese
trabajo no está respaldado en ningún lado (**R-55**).

```
0b22bd0  feat(contacto): el sitio usa correo del dominio en vez de Gmail
4b2535f  feat(contacto): selector de producto y barra fija de WhatsApp en movil
bae5af6  perf(fuentes): dieta de subsets y pesos, mas precarga de la fuente del LCP
```

Y ninguno de los tres está desplegado. Todos viven en archivos que se hornean en
la imagen Docker, así que **exigen rebuild: el `git pull` no alcanza** (R-44).

---

## 1. Estado: qué está vivo

| Qué | Dónde | Estado |
|---|---|---|
| **Sitio público** | `barreraglobal.com` y `www` | **VIVO, 13 páginas**, vía `reverse_proxy sitio-bg-web:8080`. **El deploy que esperaba bajo veda se ejecutó el 17/08**: P-54 F1 y P-55 están en producción. [D — lo reporta Francisco] |
| Staging | `staging.barreraglobal.com` | Vivo y con candado (401). No se tocó. |
| Repo | `fbarrerainversiones/sitio-bg-infra` | `main` **3 commits por delante de `origin/main`**, más la documentación de esta sesión. |
| **Aurora** | `/opt/stack/` | **Intacta.** Esta sesión no tocó infraestructura compartida en absoluto: ni Docker, ni Caddy, ni red, ni `/opt`. |
| Entorno de build en el VPS | `/home/web/sitio-bg-infra` | **Operativo por primera vez.** Node 22.23.2 + npm 10.9.8 instalados en `~/.local`. |

### La procedencia, dicha con todas las letras

El deploy y su hash **los reporta Francisco**. Ningún agente puede verificarlos
por su cuenta: `/opt/sitio-bg` está fuera del perímetro de todos ellos, sin
`sudo` y sin acceso al socket de Docker. Lo que esta sesión sí verificó con
salida real es todo lo que vive en el clon y en el build.

---

## 2. El entorno del servidor, que era el bloqueo real

La sesión empezó y se detuvo en el Paso 0: **el VPS no podía compilar el sitio.**

- `/usr/bin/node` es **v18.19.1**, y tanto `web/package.json` como `astro@6.3.8`
  exigen **`node >=22.12.0`**.
- **No había `npm`.** Tampoco `npx`, `pnpm`, `yarn` ni `corepack`.

Sin build no hay verificación posible, así que se paró y se reportó. Francisco
eligió la salida que no sale del perímetro:

- **Node 22.23.2 (LTS «Jod») con npm 10.9.8**, tarball oficial de nodejs.org
  **verificado por SHA256** contra su `SHASUMS256.txt`, extraído en
  `~/.local/opt/node-v22.23.2-linux-x64`, con el enlace estable
  `~/.local/opt/node22` y los binarios enlazados en `~/.local/bin`.
- **La línea 22 y no la 24 a propósito:** `infra/Dockerfile:10` compila con
  `FROM node:22-alpine`. Construir con la misma línea mayor que hornea la imagen
  es lo que hace que el build local signifique algo.
- Cero sudo, cero zona compartida, reversible con un `rm -rf` de un directorio.

**Lo que el VPS sigue sin poder hacer: medir.** No hay Chrome ni Lighthouse. Las
mediciones de rendimiento y accesibilidad las corre Francisco en su laptop,
**siempre por `127.0.0.1`** (R-53).

---

## 3. Lo que pasó hoy, en una pantalla

**Correo del dominio (`0b22bd0`).** Las 8 apariciones del Gmail en 5 archivos
pasaron al dominio propio: 7 a `contacto@` y **1 a `privacidad@`** — la sección 9
de `/cookies`, que no es contacto comercial sino el canal de un instrumento de
protección de datos. Cerró **P-04** como **R-22**.

**Selector de contacto y barra fija (`4b2535f`).** El cierre del home y de
`/contacto` dejó de preguntar «¿quieres escribirme?» y pregunta «¿por dónde
empezamos?»: cuatro tarjetas (carro, familia, salud, patrimonio), una quinta
ancha para el indeciso y un bloque «qué pasa después» de tres pasos. Cinco
marcadores nuevos `BG-CTA-*` en un **tipo aparte** de los ocho de página. Más la
barra fija de WhatsApp bajo 768 px, montada en el Footer. **Cero JavaScript.**

**Dieta de fuentes (`bae5af6`).** De **65 archivos y 1.005,9 KB a 15 y 303,6 KB**;
de **36 bloques `@font-face` a 11**; CSS render-blocking de **52,9 a 42,9 KB**.
Más **una sola** precarga: Cormorant latin 600, la fuente que pinta los títulos.

**Documentación.** `PENDIENTES.md` (P-57 a P-62, R-22 a R-24),
`ERRORES-Y-APRENDIZAJES.md` (NM-12 a NM-15, R-51 a R-55) y `CLAUDE.md` a v2.6.

---

## 4. EL RIEL — en este orden, sin saltear

1. **Francisco publica los tres commits.** Es el paso 1 porque hasta que ocurra,
   el trabajo está a un disco de distancia de no existir (R-55).
2. **Revisar el `git diff`** antes de publicar. En particular el selector, que es
   el bloque de conversión de dos páginas.
3. **Verificación visual** con el guion del `REPORTE-SESION-19.txt`, en escritorio
   y en teléfono real. Lo que más importa mirar: que la barra fija **no tape** el
   último renglón del footer, y el selector a 360 px.
4. **Medir Lighthouse por `127.0.0.1`** y comparar LCP y FCP contra las cifras de
   la Sesión 18. Eso cierra o reabre **P-57**.
5. **Deploy**, que exige **rebuild** (R-44) y va en la ventana de Francisco, con
   Gate 0 antes y después.

---

## 5. Cabos anotados, ninguno bloqueante

- **La cifra que se retiró del copy.** El texto pedido para el paso 03 decía
  «Comparas las tres aseguradoras y decides». Esa cifra es cierta **solo del ramo
  vehicular**: `/seguros/auto` la declara y nombra a Sweaden, Generali y Chubb,
  mientras que `/privacidad` línea 199 enumera además BMI para el resto. El
  selector cubre cuatro caminos, así que el número sería falso para tres de
  ellos. Quedó «Comparas las opciones sobre la mesa y decides». **Si Francisco
  quiere el número, hay que acotar la frase al camino vehicular.**
- **`md:text-5xl` es inerte en TODOS los `<h2>` del sitio.** Verificado sobre el
  CSS emitido el 17/08: `h2{font-size:var(--text-4xl)}` vive **fuera de toda
  `@layer`** y `.md\\:text-5xl` vive **dentro de `@layer utilities`**, así que la
  regla base gana y los títulos de sección se pintan siempre a 36 px, nunca a 48.
  Es **R-43** otra vez, ahora sobre `<h2>`, y esa superficie no estaba
  registrada. Va a **P-47** (fix de raíz de las capas), no se tocó.
- **La verificación de altura en tres condiciones no se pudo medir**, se verificó
  **estructuralmente**: ningún contenedor nuevo tiene altura fija (`min-h`,
  `h-[...]` ni `height`), así que crece con el texto en vez de desbordar; y el
  compensado de la barra fija sale de las mismas custom properties en `rem` que
  su alto, así que escalan juntos. La medición en navegador queda para Francisco.
- **`npm ci` reporta 8 vulnerabilidades (1 baja, 7 altas).** No se corrió
  `npm audit fix`: cambiaría el lockfile y está fuera del alcance de esta sesión.
  Conviene mirarlo en una sesión propia.
- **JetBrains Mono sigue emitiendo sus 5 subsets** (82 KB) porque el paquete
  variable de Fontsource no publica CSS por subset. Anotado en **P-57**.

---

## 6. Numeración vigente (leída de los archivos el 17/08/2026)

| Registro | Máximo | Siguiente |
|---|---|---|
| `PENDIENTES.md` — items | **P-62** | P-63 |
| `PENDIENTES.md` — resueltos | **R-24** | R-25 |
| `ERRORES-Y-APRENDIZAJES.md` — errores | **E-28** | E-29 |
| `ERRORES-Y-APRENDIZAJES.md` — near-miss | **NM-15** | NM-16 |
| `ERRORES-Y-APRENDIZAJES.md` — reglas | **R-55** | R-56 |

**Ojo con las dos numeraciones `R-XX`:** en `PENDIENTES.md` son **resueltos**; en
`ERRORES-Y-APRENDIZAJES.md` son **reglas**. Conviven y no se cruzan.

El **protocolo de veda** sigue **sin numerar**. Le tocaría R-56 el día que se
formalice. Esta sesión confirmó que funciona: la veda se levantó y el deploy en
cola salió, tal como estaba escrito.

---

**Fin del snapshot de continuidad del 17/08/2026.**
