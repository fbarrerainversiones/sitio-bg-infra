# ERRORES Y APRENDIZAJES OPERATIVOS — Sitio Barrera Global

> **Catalogo consolidado de TODOS los errores, accidentes operativos, malentendidos, bugs y near-miss detectados desde el inicio del proyecto.** Este documento sube al knowledge del proyecto Claude.ai para que futuras sesiones aprendan del historico y no repitan errores.

**Version:** 2.0
**Generado:** martes 26 de mayo de 2026
**Ultima actualizacion:** 02 de junio de 2026 (Sesion 5)
**Cubre las sesiones:** 0 (23/05), 1 (24/05), 2 (25/05 AM), 3 (25/05 PM), 4 (26/05), 5 (01-02/06)
**Documento maestro de referencia:** `PLAN-MAESTRO-v2.md`
**Documentos hermanos:** `PROCESOS-COMPLETOS.md`, `CONTINUIDAD.md`

---

## Como se usa este documento

Cada error tiene la misma estructura:

- **ID corto** (formato `E-XX`) para referencia cruzada.
- **Fecha y sesion** en que se detecto.
- **Categoria** (operativo, conceptual, regulatorio, herramientas, comunicacional, infra).
- **Severidad** (alta, media, baja).
- **Dano real** (lo que efectivamente costo en tiempo, dinero o riesgo).
- **Causa raiz.**
- **Como se resolvio.**
- **Regla operativa para no repetir.**

Al final del documento estan las **reglas consolidadas (R-01 a R-39)** que salen de estos errores.

---

## Indice rapido

| ID | Error | Sesion | Severidad |
|---|---|---|---|
| E-01 | Investors Trust confundido con broker en lugar de carrier | 0 | alta |
| E-02 | Asumir lanzamiento bloqueado por falta de credencial SCVS personal | 0 | alta |
| E-03 | PowerShell 5.1 escribe UTF-8 con BOM por defecto | 1 | media |
| E-04 | PowerShell ISE no soporta Claude Code | 1 | baja |
| E-05 | Email Git del VPS apuntaba a cuenta incorrecta | 1 | baja |
| E-06 | CLAUDE.md creado con BOM (EF BB BF al inicio) | 1 | media |
| E-07 | claude falla con error de stdin desde ISE | 1 | baja |
| E-08 | Confusion de contexto: comando local ejecutado en SSH del VPS | 1 | media |
| E-09 | Claude Code afirmo que .claude/ estaba en gitignore sin estarlo | 1 | baja |
| E-10 | Here-string largo roto en PowerShell 5.1 | 1 | media |
| E-11 | pwsh instalado por winget no aparece directo en PATH | 1 | baja |
| E-12 | Cliente de chat convirtio URLs en links Markdown rompiendo for loop | 1 | baja |
| E-13 | Prompt CoT largo cortado a la mitad por limite del cliente | 2 | media |
| E-14 | VS Code abrio archivo nuevo con encoding UTF-8 with BOM | 2 | baja |
| E-15 | Reboot del VPS Hostinger tardo 11 min en vez de los 2-3 estimados | 3 | media |
| E-16 | Auto-accept de Claude Code quedo prendido sin querer | 3 | media |
| E-17 | Knowledge Claude.ai con duplicados y obsoletos al final del dia | 2-3 | media |
| E-18 | Prompt CoT con instruccion incorrecta (CAMBIO 2 inexistente) | 3 | baja |
| E-19 | npm install timeout en Ecuador por velocidad limitada | 4 | media |
| E-20 | Tailwind v4 con @theme inline y arbitrary value no genera utility | 4 | media |
| E-21 | Bug botones invisibles reabierto, NO era extension Chrome | 5 | media |
| E-22 | Tailwind v4 con arbitrary value text-[#hex] no genera utility class | 5 | media |
| E-23 | Credencial SCVS 572619 atribuida incorrectamente a Francisco | 5 | alta |

---

## E-01 — Investors Trust confundido con broker en lugar de carrier

- **Fecha detectado:** 23/05/2026
- **Sesion:** 0
- **Categoria:** conceptual / regulatorio
- **Severidad:** alta (afecta toda la arquitectura legal del sitio)
- **Dano real:** ninguno (se detecto antes de codificar nada)
- **Causa raiz:** confusion de naming. Investors Trust suena a "broker fiduciario" pero es un carrier offshore con licencia CIMA en Cayman Islands. El broker ecuatoriano paraguas es Insurance Trust (itbrokerec.com), Cred. SCVS Nro 572619.
- **Como se resolvio:** aclaracion explicita en el Informe Consolidado y en el Plan Maestro v2 seccion 1. Cadena legal correcta: Cliente final, luego Francisco (APS, opera bajo Insurance Trust), luego Insurance Trust (broker ecuatoriano, Cred. SCVS Nro 572619), luego Carrier emisor (Salud SA / BMI / Investors Trust / etc.).
- **Regla operativa para no repetir:** antes de cualquier mencion a "broker", "carrier" o intermediario, validar contra el Plan Maestro v2 seccion 1. Insurance Trust no es lo mismo que Investors Trust. Si hay duda, preguntar.

---

## E-02 — Asumir que el lanzamiento estaba bloqueado por falta de credencial SCVS personal de Francisco

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** regulatorio
- **Severidad:** alta (habria retrasado el sitio hasta finales julio 2026)
- **Dano real:** ninguno (se resolvio antes de tomar decision)
- **Causa raiz:** primera lectura asumio que sin credencial SCVS propia, Francisco no podia operar como APS independiente. Esto bloquearia cualquier lanzamiento.
- **Como se resolvio:** decision de operar bajo el paraguas de Insurance Trust (Cred. SCVS 572619) hasta que llegue la credencial personal de Francisco (esperada finales julio 2026). Footer del sitio y /sobre-mi declaran esta vinculacion.
- **Regla operativa para no repetir:** verificar SIEMPRE el estatus regulatorio antes de planificar lanzamiento de productos financieros. La pregunta "que credencial habilita esto" debe ser la primera.

---

## E-03 — PowerShell 5.1 (legacy Windows) escribe UTF-8 con BOM por defecto

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** media (causaba problemas de BOM en archivos)
- **Dano real:** ~30 min perdidos diagnosticando por que los archivos quedaban con BOM
- **Causa raiz:** Windows PowerShell 5.1 (legacy) escribe archivos con BOM por defecto con Out-File y Set-Content. pwsh 7 NO lo hace y soporta -Encoding utf8NoBOM nativo.
- **Como se resolvio:** Francisco instalo PowerShell 7.6.2 via winget. Fijada regla: NUNCA Windows PowerShell ni ISE, SIEMPRE pwsh 7.
- **Regla operativa para no repetir:** verificar siempre $PSVersionTable.PSVersion al inicio de la sesion. Debe ser 7.x.x. Si es 5.x, cambiar inmediatamente.

---

## E-04 — PowerShell ISE incompatible con Claude Code

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** baja (se detecto rapido)
- **Dano real:** ~10 min entendiendo el problema
- **Causa raiz:** PowerShell ISE (Integrated Scripting Environment) NO soporta apps interactivas como Claude Code. La interfaz ISE esta pensada para scripts batch, no para terminales modernas.
- **Como se resolvio:** regla operativa fijada: NUNCA usar ISE para Claude Code. Solo terminal pwsh 7.
- **Regla operativa para no repetir:** Claude Code siempre desde Windows Terminal con pwsh 7. NUNCA desde ISE.

---

## E-05 — Email Git del VPS apuntaba a cuenta incorrecta

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / configuracion
- **Severidad:** baja
- **Dano real:** ninguno (se detecto antes de commitear desde el VPS)
- **Causa raiz:** el git config --global user.email en el VPS estaba apuntando a un email viejo, no a fbarrera.inversiones@gmail.com.
- **Como se resolvio:** corregido con git config --global user.email "fbarrera.inversiones@gmail.com".
- **Regla operativa para no repetir:** en cualquier VPS nuevo o reset, validar git config --global user.email y user.name antes del primer commit.

---

## E-06 — CLAUDE.md creado con BOM (EF BB BF al inicio)

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** media
- **Dano real:** archivo tuvo que regenerarse
- **Causa raiz:** Out-File -Encoding UTF8 en PowerShell 5.1 escribe UTF-8 con BOM por defecto.
- **Como se resolvio:** reescribir con System.IO.File.WriteAllText pasando New-Object System.Text.UTF8Encoding $false. Verificado con Get-Content -Encoding Byte -TotalCount 3 que el primer byte fuera 35 (#) y NO 239.
- **Regla operativa para no repetir:** todo archivo .md o .txt creado en Windows se valida con Get-Content -AsByteStream -TotalCount 3 antes de commitear. Primer byte distinto de 239.

---

## E-07 — claude falla con error de stdin/prompt desde ISE

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** baja
- **Dano real:** ~5 min
- **Causa raiz:** se intento ejecutar Claude Code desde PowerShell ISE, que no soporta input interactivo. El error exacto fue: "Input must be provided either through stdin or as a prompt argument when using --print".
- **Como se resolvio:** usar pwsh 7 o CMD nativo. NUNCA ISE.
- **Regla operativa para no repetir:** misma que E-04.

---

## E-08 — Confusion de contexto: comando local ejecutado en SSH del VPS

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / disciplina
- **Severidad:** media
- **Dano real:** Email Git del VPS quedo con placeholder TU-EMAIL-REAL@example.com
- **Causa raiz:** Francisco ejecuto el bloque de setup local dentro de la sesion SSH del VPS por confusion de contextos (dos terminales abiertas, una con SSH y otra local).
- **Como se resolvio:** corregido con git config --global user.email "fbarrera.inversiones@gmail.com" en la sesion SSH del VPS.
- **Regla operativa para no repetir:** antes de pegar un bloque de comandos, validar whoami y hostname para confirmar contexto. Si es VPS, debe decir francisco (o usuario VPS) y hostname del VPS. Si es laptop, debe decir panch y nombre laptop. Distintos prompts visuales en cada terminal ayudan.

---

## E-09 — Claude Code afirmo que .claude/ estaba en gitignore del repo sin estarlo

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** comunicacional
- **Severidad:** baja
- **Dano real:** ninguno (Claude Code se autocorrigio)
- **Causa raiz:** confusion en lectura del status: lo cubria el gitignore GLOBAL de la maquina (C:\Users\panch\.config\git\ignore), no el del repo.
- **Como se resolvio:** Claude Code se autocorrigio con git check-ignore -v. Decidimos agregar .claude/ al .gitignore del repo tambien, por portabilidad (el proyecto puede clonarse a otra maquina sin gitignore global).
- **Regla operativa para no repetir:** para confirmar que un patron esta ignorado a nivel REPO, usar git check-ignore -v <ruta> y leer la columna "source". Si el source es global, agregar tambien al .gitignore del repo si interesa portabilidad.

---

## E-10 — Here-string largo roto en PowerShell 5.1

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** media
- **Dano real:** ~15 min de cleanup
- **Causa raiz:** PowerShell 5.1 no reconoce Set-Content -Encoding utf8NoBOM ni Get-Content -AsByteStream. Al fallar mitad del here-string, el resto se interpreto como codigo y rompio el shell.
- **Como se resolvio:** usar pwsh 7 SIEMPRE. O mejor: usar Claude Code con Write tool para archivos largos, o VS Code para edicion manual de .md.
- **Regla operativa para no repetir:** archivos .md largos se crean con VS Code (encoding UTF-8 sin BOM explicito) o via Write tool de Claude Code. NUNCA pegando here-strings de cientos de lineas en una terminal.

---

## E-11 — pwsh instalado por winget no aparece directo en PATH

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** operativo / herramientas
- **Severidad:** baja
- **Dano real:** ~5 min de busqueda
- **Causa raiz:** el instalador de winget deja pwsh en C:\Users\panch\AppData\Local\Microsoft\WindowsApps\ con alias de ejecucion de aplicaciones que a veces no funciona como esperado.
- **Como se resolvio:** ejecutar con path completo o abrir desde menu Windows tipeando pwsh.
- **Regla operativa para no repetir:** si pwsh no responde en la terminal actual, abrir desde menu Windows directamente (tecla Windows, escribir pwsh, click PowerShell 7).

---

## E-12 — Cliente de chat convirtio URLs en links Markdown rompiendo for loop bash

- **Fecha detectado:** 24/05/2026
- **Sesion:** 1
- **Categoria:** comunicacional
- **Severidad:** baja
- **Dano real:** ninguno (resultado fue HTTP 200 igual)
- **Causa raiz:** el cliente de chat convirtio www.barreraglobal.com en link Markdown al renderizar el bloque de codigo.
- **Como se resolvio:** pegar for loops con cuidado o escapar las URLs. En este caso no afecto.
- **Regla operativa para no repetir:** al copiar bloques de bash con URLs, validar antes de pegar que no haya corchetes Markdown. Si los hay, escribir manualmente las URLs en la terminal.

---

## E-13 — Prompt CoT largo a Claude Code con contenido literal embebido se corto a la mitad

- **Fecha detectado:** 25/05/2026
- **Sesion:** 2
- **Categoria:** comunicacional / herramientas
- **Severidad:** media
- **Dano real:** ~20 min reintentando
- **Causa raiz:** el cliente de chat tiene limite de tamano para mensajes y partio el contenido del prompt en dos.
- **Como se resolvio:** estrategia nueva: archivos .md largos se crean con VS Code (editor fuera de Claude Code). Despues Claude Code solo verifica encoding y commitea.
- **Regla operativa para no repetir:** para cualquier archivo .md mayor a ~300 lineas, NO embeberlo en el prompt CoT. En cambio: (1) Yo (Claude del chat) genero el contenido y se lo paso a Francisco para que lo pegue en VS Code. (2) Francisco guarda con UTF-8 sin BOM. (3) Claude Code solo verifica encoding y commitea.

---

## E-14 — VS Code abrio el archivo nuevo con encoding UTF-8 with BOM por defecto

- **Fecha detectado:** 25/05/2026
- **Sesion:** 2
- **Categoria:** operativo / herramientas
- **Severidad:** baja
- **Dano real:** ~5 min para detectar y corregir
- **Causa raiz:** configuracion por defecto de VS Code en algunas instalaciones marca archivos nuevos como UTF-8 with BOM.
- **Como se resolvio:** cambiar manualmente via "Save with Encoding" a "UTF-8" (sin BOM). Verificar en barra inferior derecha que diga solo "UTF-8" y no "UTF-8 with BOM".
- **Regla operativa para no repetir:** al abrir VS Code para crear un .md nuevo, mirar barra inferior derecha ANTES de escribir. Si dice "UTF-8 with BOM", cambiarlo desde el primer momento.

---

## E-15 — Reboot del VPS Hostinger tardo 11 min en vez de los 2-3 estimados

- **Fecha detectado:** 25/05/2026
- **Sesion:** 3 (durante HITO 01)
- **Categoria:** infra / estimacion
- **Severidad:** media
- **Dano real:** ~8 min de espera inesperada + ansiedad innecesaria pensando que el VPS habia muerto
- **Causa raiz:** reboot real tardo 11 minutos completos desde "system will reboot now" hasta reconexion SSH. Causa probable: cola de arranque del VPS compartido Hostinger.
- **Como se resolvio:** ajuste del estimado a 5-10 minutos. Documentado en bitacora y en runbook actualizado.
- **Regla operativa para no repetir:** para reboots de VPS Hostinger compartido, estimar 5-10 minutos. NO empezar a reintentar SSH antes de los 3 minutos. Si no vuelve a los 10 min, abrir panel web de Hostinger para diagnosticar.

---

## E-16 — Auto-accept de Claude Code quedo prendido sin querer

- **Fecha detectado:** 25/05/2026
- **Sesion:** 3
- **Categoria:** operativo / herramientas
- **Severidad:** media (podia hacer que Claude Code ejecutara sin aprobacion humana)
- **Dano real:** ninguno (se mantuvo control con prompts CoT explicitos)
- **Causa raiz:** Claude Code arranca con auto-accept ON por default. El primer Shift+Tab lo apaga, pero a veces queda prendido si se presionan otras teclas o si se reinicia la sesion.
- **Como se resolvio:** verificacion visual en la barra inferior antes de cada operacion critica.
- **Regla operativa para no repetir:** al ABRIR Claude Code, lo primero es presionar Shift+Tab y verificar que la barra inferior diga "accept edits off". Verificacion visual obligatoria, no asumida.

---

## E-17 — Knowledge Claude.ai con duplicados y obsoletos al final del dia

- **Fecha detectado:** 25/05/2026
- **Sesion:** 2 (cierre)
- **Categoria:** documentacion / knowledge
- **Severidad:** media (riesgo de que sesiones futuras lean info contradictoria)
- **Dano real:** ninguno (se limpio antes de cerrar el dia)
- **Causa raiz:** acumulacion de archivos sin limpieza: 2 copias de PLAN-MAESTRO-v2.md, archivo "agregado el 24-05-2026" obsoleto, placeholders deprecados.
- **Como se resolvio:** limpieza del knowledge a 6 archivos vivos sin duplicados.
- **Regla operativa para no repetir:** al cierre de cada sesion, revisar visualmente el knowledge del proyecto Claude.ai. Si hay mas de una version de un archivo, eliminar las viejas. Si hay archivos obsoletos, eliminarlos. Una informacion, un lugar.

---

## E-18 — Prompt CoT con instruccion incorrecta (CAMBIO 2 inexistente)

- **Fecha detectado:** 25/05/2026
- **Sesion:** 3 (cierre, limpieza de repo)
- **Categoria:** comunicacional / prompts
- **Severidad:** baja (Claude Code detecto y paro)
- **Dano real:** ninguno (Claude Code pidio aclaracion antes de actuar)
- **Causa raiz:** yo (Claude del chat) pase un prompt a Claude Code pidiendo actualizar una frase "Tiempo estimado de reboot: 2-3 min" en el runbook. Pero esa frase NO existia en el runbook. Confundi "runbook del HITO" con "lo que paso durante la sesion operativa".
- **Como se resolvio:** Claude Code investigo read-only, detecto que la frase no existia, propuso 3 alternativas. Francisco decidio por opcion A.
- **Regla operativa para no repetir:** cuando se pide modificar un archivo, primero VERIFICAR que el contenido a modificar realmente exista. No asumir basandose en memoria. Claude Code hace esto bien por default (lectura previa); el prompt del chat debe acompanar dando opciones para casos donde el contenido no exista.

---

## E-19 — npm install timeout en Ecuador por velocidad limitada

- **Fecha detectado:** 26/05/2026
- **Sesion:** 4
- **Categoria:** operativo / infra
- **Severidad:** media
- **Dano real:** ~15 min de espera y reintento
- **Causa raiz:** la velocidad de internet en Ecuador (especialmente conexiones residenciales en Ambato) hace que algunos paquetes pesados (Astro + Tailwind + React + Fontsource) tarden mas que el timeout default de npm (5 min). El install fallo mostrando "request to https://registry.npmjs.org/... failed, reason: connect ETIMEDOUT".
- **Como se resolvio:** aumentar el timeout de fetch con npm config set fetch-timeout 120000 (120 segundos por paquete). Tambien probado: npm config set fetch-retry-mintimeout 20000 y npm config set fetch-retry-maxtimeout 120000.
- **Regla operativa para no repetir:** al hacer npm install en proyectos nuevos en Ecuador, ejecutar primero los tres comandos de config de timeout. Si el install fallo, NO matar con Ctrl+C inmediatamente, sino esperar al menos 10 min porque puede estar progresando.

---

## E-20 — Tailwind v4 con @theme inline y arbitrary value no genera utility

- **Fecha detectado:** 26/05/2026
- **Sesion:** 4
- **Categoria:** tecnico / herramientas
- **Severidad:** media
- **Dano real:** ~20 min diagnosticando por que clases personalizadas no se aplicaban
- **Causa raiz:** Tailwind v4 introdujo la directiva @theme inline para definir variables. Pero cuando se intenta usar arbitrary value como text-[#08080d] dentro de archivos que ya tienen colores definidos en @theme, el utility class NO se genera. El CSS resultante simplemente no incluye la regla.
- **Como se resolvio:** usar inline style con style="color: #08080d" en lugar de la clase Tailwind. Documentado para futuros componentes. Alternativa mas limpia: definir el color como variable CSS en @theme y usar text-tx (donde tx es el nombre del token).
- **Regla operativa para no repetir:** en Tailwind v4 con @theme inline, NO usar arbitrary values con hash directo (text-[#hex]). Definir el color como token en @theme (--color-tx: #08080d) y usar la clase text-tx. Si por urgencia hay que usar un color hex literal, usar inline style.

---

## E-21 — Bug botones invisibles reabierto, NO era extension Chrome

- **Fecha detectado:** 01/06/2026
- **Sesion:** 5
- **Categoria:** tecnico / herramientas
- **Severidad:** media
- **Dano real:** ~10 min de re-diagnostico
- **Causa raiz:** el bug de botones de WhatsApp invisibles que originalmente se atribuyo a una extension Chrome inyectando CSS, en realidad era un problema de Tailwind v4 (mismo que E-20). Se reabrio cuando se vio que aparecia tambien en Microsoft Edge en modo incognito sin extensiones.
- **Como se resolvio:** profundizar diagnostico y descubrir que era E-22 (Tailwind v4 con arbitrary value). Aplicar fix con inline style.
- **Regla operativa para no repetir:** antes de cerrar un bug atribuyendolo a una causa externa (extension, cache, navegador), validar el bug en al menos 2 navegadores DIFERENTES en modo incognito. Si persiste, la causa es interna y NO externa.

---

## E-22 — Tailwind v4 con arbitrary value text-[#hex] no genera utility class

- **Fecha detectado:** 01/06/2026
- **Sesion:** 5
- **Categoria:** tecnico / herramientas
- **Severidad:** media
- **Dano real:** descubrimiento de E-21 reabierto + fix
- **Causa raiz:** version refinada de E-20. Tailwind v4 con la combinacion de @theme inline + uso de arbitrary value tipo text-[#hex] dentro del JSX/Astro silenciosamente NO genera la regla CSS. El componente compila sin error pero la clase no tiene efecto visual.
- **Como se resolvio:** reemplazar todas las clases text-[#hex] por inline style="color: #hex" en los componentes afectados (Footer, Header, botones WhatsApp). Commit e5c777c.
- **Regla operativa para no repetir:** misma que E-20 + agregar: al detectar que una clase Tailwind NO se aplica visualmente, verificar primero si es arbitrary value. Si lo es, considerar usar inline style o token CSS variable.

---

## E-23 — Credencial SCVS 572619 atribuida incorrectamente a Francisco

- **Fecha detectado:** 02/06/2026
- **Sesion:** 5
- **Categoria:** regulatorio / conceptual
- **Severidad:** alta (publicar credencial erronea en el sitio publico es violacion SCVS)
- **Dano real:** ninguno (se corrigio antes del deploy a produccion)
- **Causa raiz:** confusion conceptual repetida. La credencial 572619 es del broker Insurance Trust como entidad corporativa, NO de Francisco como APS individual. Atribuirla como credencial personal de Francisco en Footer.astro, index.astro y privacidad.astro era regulatoriamente incorrecto. El analisis legal IA externo de Sesion 5 lo detecto.
- **Como se resolvio:** removida 572619 de los 3 archivos. Reemplazada por "credencial SCVS personal en tramite" (DM-07). Commits 451121f (fix de seguridad) + 3f77744 (correccion de backup commiteado por error + endurecimiento .gitignore con R-39).
- **Regla operativa para no repetir:** la credencial 572619 NO se debe publicar nunca en el sitio porque es un dato corporativo del broker. La credencial relevante para el sitio sera la de Francisco cuando salga (P-06). Antes de publicar cualquier identificador regulatorio, validar: (a) a que entidad legal corresponde, (b) si su atribucion en el contexto del sitio es correcta. Cruzar con analisis legal externo cuando hay duda (regla R-38).

---

## Near-miss (cosas que casi salen mal pero se atajaron a tiempo)

### NM-01 — Casi se renombra container caddy de Aurora

- **Fecha:** 24/05/2026, Sesion 1.
- **Que paso:** durante Gate 0 yo (Claude del chat) sugeri inicialmente "etiquetar" containers de Aurora para identificarlos mejor. Francisco pregunto y le aclare que NO se toca ni el naming ni nada de Aurora.
- **Por que pudo ser grave:** renombrar caddy rompe los depends_on del docker-compose.yml de Aurora y los healthchecks. Repetiria el incidente 522 v2.0.
- **Aprendizaje:** containers de Aurora son intocables. Si surge la idea de "limpieza/etiquetado" de containers de otros proyectos, descartarla en el momento.

### NM-02 — Casi se ejecuta docker network prune en el VPS

- **Fecha:** 25/05/2026, Sesion 3.
- **Que paso:** durante validacion de HITO 01, propuesta general de "limpiar redes Docker sin uso". Detectado a tiempo que docker network prune borraria cualquier red sin containers conectados, incluyendo sitio_bg_net recien creada.
- **Por que pudo ser grave:** la red sitio_bg_net se acababa de crear sin containers aun. Un prune la borraria y tendriamos que recrearla con todos los pasos de validacion.
- **Aprendizaje:** comandos *_prune en Docker estan prohibidos sin revision explicita previa. Ver Regla R-XX abajo.

### NM-03 — Casi se sube el .env del VPS al repo Git

- **Fecha:** 25/05/2026, Sesion 3.
- **Que paso:** creando /opt/sitio-bg/.env placeholder en el VPS. Francisco pregunto si debia pushear ese archivo al repo. Detectado que el .gitignore del proyecto NO incluia explicitamente .env.
- **Por que pudo ser grave:** subir secretos al repo (aunque sea placeholder hoy, manana tiene secretos reales) es una de las maneras clasicas de filtrar credenciales.
- **Aprendizaje:** .env, .env.local, *.env, secrets/, *.key, *.pem deben estar SIEMPRE en .gitignore del repo desde el dia 0. Se agrego.

### NM-04 — Casi se hace git push --force sin advertencia

- **Fecha:** 25/05/2026, Sesion 3.
- **Que paso:** despues de un rebase local, propuesta de "sincronizar con remoto". Detectado que la primera idea era git push --force sin confirmar con Francisco.
- **Por que pudo ser grave:** git push --force puede borrar trabajo del remoto si alguien mas pusheo en paralelo (no es el caso hoy porque Francisco trabaja solo, pero como habito es malo).
- **Aprendizaje:** --force solo con --force-with-lease y solo despues de confirmar con Francisco que ningun otro commit existe en remoto desconocido.

### NM-05 — Casi se ejecuta sudo reboot sin coordinar Aurora

- **Fecha:** 25/05/2026, Sesion 3.
- **Que paso:** banner del VPS mostraba kernel update pendiente. Primera reaccion: rebootear. Detectado que el reboot baja tambien Aurora y FBE Sport.
- **Por que pudo ser grave:** downtime de Aurora sin coordinar es exactamente el patron que llevo al 522 v2.0.
- **Aprendizaje:** cualquier reboot del VPS se coordina con horario de bajo trafico (madrugada Ecuador) y se ejecuta solo despues de validar Gate 0. Despues se valida Gate 0 nuevamente.

### NM-06 — Backup .bak commiteado por error en commit del fix 572619

- **Fecha:** 02/06/2026, Sesion 5.
- **Que paso:** durante el commit del fix de E-23, el git add . incluyo un archivo PLAN-MAESTRO-v2.md.bak.20260602-161012 que era un backup temporal. El commit 451121f quedo "sucio".
- **Por que pudo ser grave:** ese .bak tenia 60 KB de contenido del Plan Maestro entero, que paso a estar en GitHub publico. Aunque no era informacion sensible, era ruido en el historial git y violaba la regla "el repo solo tiene archivos vivos".
- **Aprendizaje:** antes de git add ., siempre revisar git status --short y excluir manualmente archivos .bak con git restore --staged si aparecen. Documentado como R-39 nueva.
- **Como se resolvio:** commit corrector 3f77744 que removio el .bak + endurecio .gitignore con el patron *.bak.* para prevenir recurrencia.

### NM-07 — Falso negativo de grep al "probar ausencia" (cita real del 522 descartada como alucinacion)

- **Fecha:** 19/07/2026, Sesion 9 (deploy staging).
- **Que paso:** al verificar la cita de un agente sobre el incidente 522 (Caddy conectado a una red ajena), un grep con alternacion compleja y un `\n` literal en el patron fallo silenciosamente al "probar ausencia" del termino 522. El "no encontrado" produjo un falso negativo que llevo a descartar como "alucinacion" una cita que en realidad era real.
- **Como se atajo:** el auditor del chat contrasto contra la copia del PLAN-MAESTRO en el knowledge de Claude.ai y pidio re-hacer el grep con termino simple. El grep limpio de `522` encontro 8 apariciones reales (incluida PLAN-MAESTRO-v2.md:158, la advertencia del propio incidente).
- **Por que pudo ser grave:** descartar evidencia real como alucinada invierte la disciplina anti-alucinacion del proyecto (se duda de lo inventado, no de lo documentado). Ademas pudo ocultar la advertencia del incidente 522 justo antes de ejecutar D1 (docker network connect del caddy a sitio_bg_net), que es de la misma familia de operacion que causo ese incidente.
- **Aprendizaje:** para probar ausencia de un termino, usar greps simples de un solo termino literal. Un "no encontrado" de un patron complejo (alternaciones, `.*`, `\n` literales) NO es prueba de ausencia. Documentado como R-40.

---

## Reglas operativas consolidadas (R-01 a R-39)

De los 23 errores y 6 near-miss anteriores, salen estas reglas vivas para no repetir.

### Reglas de herramientas

- **R-01:** SIEMPRE pwsh 7 en Windows. NUNCA Windows PowerShell 5.1 ni ISE.
- **R-02:** Verificar $PSVersionTable.PSVersion al inicio de cada sesion.
- **R-03:** Claude Code: Shift+Tab al abrir. Verificar "accept edits off" visualmente.
- **R-04:** ISE NO sirve para Claude Code. Solo terminal pwsh 7.

### Reglas de SSH al VPS

- **R-05:** Copiar SOLO el bloque entre triple-backtick. UN bloque a la vez.
- **R-06:** NUNCA copiar texto del chat anterior junto con el bloque actual.
- **R-07:** Evitar sudo -i. Usar sudo <comando> especifico.
- **R-08:** Validar whoami && hostname despues de SSH al VPS antes de operar.

### Reglas de Git

- **R-09:** SIEMPRE git pull origin main al inicio de cada sesion Claude Code.
- **R-10:** git status debe estar "working tree clean" antes de empezar.
- **R-11:** Si subiste algo via GitHub web, el pull es OBLIGATORIO.
- **R-12:** Validar git config --global user.email correcto en VPS y laptop.
- **R-13:** --force solo con --force-with-lease y solo confirmado con Francisco.

### Reglas de documentacion y archivos

- **R-14:** Una informacion, un lugar. La bitacora vive en PLAN-MAESTRO-v2.md seccion 12.
- **R-15:** NO subir snapshots de bitacora al knowledge como archivos separados.
- **R-16:** Cuando una decision cambia, deprecar el documento viejo EXPLICITAMENTE.
- **R-17:** Al cierre de sesion, revisar knowledge: sin duplicados, sin obsoletos.
- **R-18:** Archivos .md largos (mas de 300 lineas): VS Code, NO here-strings en terminal.
- **R-19:** Verificar UTF-8 sin BOM con Get-Content -AsByteStream -TotalCount 3.

### Reglas de comunicacion con Claude (chat y Code)

- **R-20:** Cuando entren fuentes nuevas, auditarlas contra docs existentes.
- **R-21:** Resolver contradicciones explicitamente, NO implicitamente.
- **R-22:** Verificar que el contenido a modificar realmente exista (no asumir).
- **R-23:** Aurora viva = proyecto avanza. Aurora rota = nada importa mas.

### Reglas de estimacion

- **R-24:** Reboot Hostinger compartido: estimar 5-10 min, no 2-3.
- **R-25:** HITO operativo: estimar 25-35 min + 10-15 min de auditoria chat.
- **R-26:** Fase 1 completa (Astro + diseno + 4 paginas): 2-3 sesiones, NO una.

### Reglas conceptuales (regulatorias)

- **R-27:** Insurance Trust = broker. Investors Trust = carrier. NO confundir.
- **R-28:** Validar siempre estatus regulatorio antes de planificar producto financiero.
- **R-29:** SCVS Art. 11.6 + 12.12: NO publicar primas ni "el mejor precio".
- **R-30:** LOPDP Art. 4: consentimiento separado para datos de salud.

### Reglas de Docker en VPS compartido

- **R-31:** docker network prune PROHIBIDO sin revision explicita.
- **R-32:** docker system prune PROHIBIDO sin revision explicita.
- **R-33:** docker container prune PROHIBIDO sin revision explicita.
- **R-34:** Nunca renombrar, detener ni reiniciar containers de Aurora o FBE Sport.
- **R-35:** Cualquier reboot del VPS se coordina con Aurora y horario de bajo trafico.

### Reglas de secretos

- **R-36:** .env, *.env, secrets/, *.key, *.pem siempre en .gitignore desde dia 0.
- **R-37:** Secretos en /opt/sitio-bg/.env con chmod 600. NUNCA en el repo.

### Reglas nuevas (Sesion 5)

- **R-38:** Cruzar analisis legal con fuentes independientes antes de cerrar compliance. Cualquier afirmacion regulatoria importante (atribucion de credenciales, base legal LOPDP, decisiones SCVS) debe validarse con al menos 2 fuentes: documentacion oficial del organismo + analisis legal IA o humano externo. Antes de Sesion 5, se asumio que la credencial 572619 era atribuible a Francisco; analisis legal externo lo desmintio. Esta regla previene errores conceptuales graves que se materializan en codigo publico.

- **R-39:** Antes de git add ., revisar git status --short y excluir manualmente archivos .bak o backups timestamped. Si aparecen en el listado, ejecutar git restore --staged <archivo> antes del commit, o usar git add con paths especificos en lugar de punto. El .gitignore endurecido (Sesion 5) tiene patron *.bak.* pero como capa adicional, validar manualmente lo que va al stage area antes de commitear.

### Reglas nuevas (Sesion 9)

- **R-40:** Para probar la AUSENCIA de un termino, usar greps simples de un solo termino literal. Un "no encontrado" de un patron complejo (alternaciones con `|`, `.*`, o `\n` literales) NO es prueba de ausencia: puede ser un falso negativo silencioso del motor de regex. Antes de concluir "no existe" o "es alucinacion", repetir el grep con el termino simple y confirmar. (Origen: NM-07, falso negativo del grep de `522`.)

---

## Estadisticas del historico

```
Errores documentados:    23
Near-miss documentados:  6
Reglas operativas:       39
Rollbacks ejecutados:    0
Incidentes Aurora:       0
Danos reales:            ~115 min acumulados de re-trabajo + 8 min espera reboot
Danos evitados:          incalculables (cualquier near-miss pudo replicar el 522 v2.0)
```

---

## Mensaje para el Claude de la proxima sesion

Si vos sos Claude leyendo este documento por primera vez en una sesion nueva:

1. **Lee este documento ANTES de proponer cualquier accion tecnica.**
2. Las 39 reglas (R-01 a R-39) son **inviolables** salvo argumento explicito de Francisco.
3. Si una propuesta tuya contradice una regla, para y discutilo antes.
4. Cuando detectes un error nuevo, agregalo a este documento con la misma estructura. La memoria del proyecto se construye con historico, no con olvido.

**Fin del documento de errores y aprendizajes.**

**Ultima revision:** 02 de junio de 2026, Sesion 5.
**Proxima revision:** al cierre de la proxima sesion (cuando se detecten errores nuevos).
