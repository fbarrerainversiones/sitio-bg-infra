# ERRORES Y APRENDIZAJES OPERATIVOS — Sitio Barrera Global

> **Catalogo consolidado de TODOS los errores, accidentes operativos, malentendidos, bugs y near-miss detectados desde el inicio del proyecto.** Este documento sube al knowledge del proyecto Claude.ai para que futuras sesiones aprendan del historico y no repitan errores.

**Version:** 2.3
**Generado:** martes 26 de mayo de 2026
**Ultima actualizacion:** 9 de agosto de 2026 (Sesion 13 — el switch a publico)
**Cubre las sesiones:** 0 (23/05), 1 (24/05), 2 (25/05 AM), 3 (25/05 PM), 4 (26/05), 5 (01-02/06), 9 (19/07 deploy staging), 10-11 (22-28/07 estructura y merge), 12 (03-05/08 publicacion y staging completo), 13 (08-09/08 lanzamiento publico)
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

Al final del documento estan las **reglas consolidadas (R-01 a R-50)** que salen de estos errores.

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
| E-24 | Flip del default gateway del caddy al conectar segunda red (degradacion Aurora ~5 min) | 9 | alta |
| E-25 | nginx filtraba su puerto interno 8080 en el 301 de barra final (ERR_CONNECTION_RESET) | 12 | alta |
| E-26 | Linea de basicauth del Caddyfile corrompida por un sed re-ejecutado con la variable vacia | 12 | alta |
| E-27 | `sed -i` sobre un archivo bind-monteado reemplaza el inodo: el caddy valido y recargo la config VIEJA | 13 | alta |
| E-28 | La validacion previa al restart no valido nada: faltaba `--adapter caddyfile` | 13 | media |

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

## E-24 — Flip del default gateway del caddy al conectarlo a una segunda red (degradacion parcial de Aurora ~5 min)

- **Fecha detectado:** 19/07/2026
- **Sesion:** 9 (deploy a staging, bloque B4)
- **Categoria:** infra / Docker / red
- **Severidad:** alta (degradacion real de servicio en dominios productivos de Aurora)
- **Dano real:** 3 de los 5 dominios de Aurora (barreraglobal.com, www, beszel) cayeron a HTTP 000 durante ~5 min. n8n y chat siguieron en 200. Cero perdida de datos. Recuperacion total verificada dos veces.
- **Causa raiz:** `docker network connect sitio_bg_net caddy` SIN el flag `--gw-priority`. Al conectar el caddy a una segunda red, Docker (29.4.3) movio la puerta de salida por defecto del container a la red nueva (`sitio_bg_net`, gateway 172.22.10.1), quitandosela a `stack_net` (172.20.10.1). El caddy perdio la ruta de salida por la que respondia esos dominios.
- **Como se resolvio:** rollback inmediato de un solo comando (`docker network disconnect sitio_bg_net caddy`) apenas el Gate 0 detecto los 000; recuperacion total en ~5 min. Diagnostico con `docker exec caddy ip route` (baseline "default via 172.20.10.1 dev eth0"). Re-conexion con `docker network connect --gw-priority=-100 sitio_bg_net caddy`: la ruta por defecto se conservo (verificada al instante con `ip route`), Gate 0 5/5, wget interno OK. Primer rollback ejecutado del proyecto.
- **Regla operativa para no repetir:** R-41. `docker network connect` sobre un container con trafico productivo SIEMPRE con `--gw-priority` explicito y negativo, mas verificacion de `ip route` INMEDIATAMENTE despues del connect, antes incluso del Gate 0. El runbook B4 quedo corregido con el flag y el chequeo B4.1b.

---

## E-25 — nginx detras del proxy filtraba su puerto interno 8080 en el 301 de barra final

- **Fecha detectado:** 05/08/2026
- **Sesion:** 12 (staging completo)
- **Categoria:** infra / nginx / red
- **Severidad:** alta (rompia la navegacion de TODAS las rutas sin barra final; de haber pasado a publico con esto, el sitio quedaba inusable)
- **Dano real:** navegacion de staging rota hasta el fix. Cero impacto en Aurora (Gate 0 verde en todo momento) y cero impacto en produccion (el sitio publico todavia no existe).
- **Causa raiz:** el `location /` resuelve las rutas con `try_files $uri $uri/ =404`. Al pedir `/seguros/vida-termino` (sin barra final) el archivo no existe, `$uri/` resuelve al directorio y nginx emite un `301` hacia `/seguros/vida-termino/`. Con los valores por defecto `absolute_redirect on` y `port_in_redirect on`, nginx arma ese `Location` como URL ABSOLUTA con el `Host` proxiado mas el puerto en el que EL PROPIO nginx escucha: el `8080` interno, que existe solo dentro de `sitio_bg_net` y no se publica al host. El Caddy compartido no reescribe la cabecera `Location` al hacer proxy, asi que la URL con `:8080` llegaba intacta al navegador, que intentaba conectarse a un puerto inexistente de cara a internet y moria con `ERR_CONNECTION_RESET`. El sintoma enganaba: parecia un problema de rutas de Astro o del Caddy, y estaba en la config de nginx.
- **Como se resolvio:** `absolute_redirect off;` y `port_in_redirect off;` a nivel `server` en `infra/nginx.conf` (commit `68f5e7b`). Con eso el `Location` sale como ruta relativa (`/seguros/vida-termino/`), sin esquema, sin host y sin puerto, y el navegador lo resuelve contra el origen publico. Antes de editar se verifico que no hubiera configuracion contradictoria: cero apariciones previas de `absolute_redirect`, `port_in_redirect`, `server_name_in_redirect`, `rewrite` o `return 30x` en todo `infra/`.
- **Regla operativa para no repetir:** R-44. Todo nginx detras de un proxy emite redirecciones RELATIVAS. Y como `infra/nginx.conf` se hornea dentro de la imagen, el fix no llega al VPS con un `git pull`: exige rebuild.

---

## E-26 — Linea de basicauth del Caddyfile corrompida por un sed re-ejecutado con la variable del hash vacia

- **Fecha detectado:** 05/08/2026
- **Sesion:** 12 (staging completo, "guerra del candado")
- **Categoria:** operativo / disciplina / infra
- **Severidad:** alta (dejo staging sin acceso para nadie, y ocurrio sobre el Caddyfile compartido, que es la zona de mayor riesgo del VPS)
- **Dano real:** ninguna clave abria staging hasta la reparacion. Cero impacto en Aurora: Gate 0 verde en todo momento. Cero perdida de datos.
- **Causa raiz:** en un episodio de pegar salidas de terminal de vuelta a la terminal, se re-ejecuto un `sed` cuya variable con el hash de la contrasena estaba VACIA en ese shell. El `sed` corrio sin error y dejo la linea de `basicauth` con el usuario `panchiviris` y SIN hash. Una linea de basicauth sin hash no puede validar ninguna contrasena: de ahi que fallara cualquier clave. El sintoma ("ninguna clave abre") apuntaba enganosamente a la contrasena, cuando el problema estaba en el archivo.
- **Como se resolvio:** comparacion visual ANTES/DESPUES de la linea, que expuso el hash faltante. Reparacion con un `sed` de LINEA COMPLETA (no de fragmento) y verificacion ocular de que el hash escrito en el archivo fuera identico al hash generado. Acceso confirmado desde el navegador.
- **Regla operativa para no repetir:** R-45 (las salidas de terminal van unicamente al archivo de reporte, jamas de vuelta a una terminal) y R-46 (el navegador es el juez oficial de credenciales). Refuerza R-05, R-06 y NM-08.

---

## E-27 — `sed -i` sobre un archivo bind-monteado reemplaza el inodo: el caddy valido y recargo la config VIEJA

- **Fecha detectado:** 09/08/2026
- **Sesion:** 13 (el switch a publico, primer intento)
- **Categoria:** infra / Docker / bind-mount
- **Severidad:** alta (ocurrio sobre el Caddyfile compartido, que es la zona de mayor riesgo del VPS, y dejo el switch en el peor estado posible: "aplicado con exito" segun la terminal, sin ningun efecto real)
- **Dano real:** el primer intento del switch no surtio efecto. `barreraglobal.com` siguio sirviendo el cartel viejo mientras todos los comandos reportaban exito. Costo: el tiempo de diagnostico mas un rollback. Cero impacto en Aurora.
- **Sintoma delator:** `/no-existe` devolvia **HTTP 200**. El cartel viejo respondia a cualquier ruta, asi que un 200 en una URL inventada era la prueba de que el sitio real no estaba en linea, por mas que el resto de las verificaciones se vieran bien. Un 200 donde deberia haber un 404 es una senal de que se esta mirando otra cosa.
- **Causa raiz:** el Caddyfile esta bind-monteado en el container `caddy` como **ARCHIVO individual** y en modo lectura (`:ro`), no como directorio. Un bind-mount de archivo lo resuelve Docker por **inodo** en el momento de arrancar el container. `sed -i` **no edita en el lugar**: escribe un archivo temporal y lo renombra encima del original, con lo cual el archivo del host queda con un inodo NUEVO. El mount del container sigue apuntando al inodo VIEJO. A partir de ahi el host ve el archivo nuevo y el container sigue leyendo el viejo: `caddy validate` valida el viejo, `caddy reload` recarga el viejo, y todo responde "exitoso" sin un solo mensaje de error. Es el mismo mecanismo que la regla de mayo (Plan Maestro seccion 2, Regla 5) prohibia bajo la forma de `mv`.
- **Como se resolvio:** deteccion por **comparacion de inodos** — `ls -i` del archivo en el host devolvio **524375** y el mismo archivo visto desde dentro del container devolvio **528303**. Dos inodos distintos son prueba directa de que el container esta leyendo un archivo fantasma. Contencion: rollback inmediato de Francisco. Resolucion en el segundo intento con tres cambios: (1) edicion **inode-preserving** — `sed` a un archivo temporal y despues `cp` encima del original, que conserva el inodo; (2) `docker restart caddy` para re-enganchar el mount; (3) validacion previa del archivo candidato copiandolo al container con `docker cp` antes de aplicarlo.
- **Regla operativa para no repetir:** **R-48**. `sed -i` y `mv` PROHIBIDOS sobre archivos bind-monteados; solo metodos que preserven el inodo; ante la menor duda, comparar `ls -i` del host contra el del container.

---

## E-28 — La validacion previa al restart no valido nada: faltaba `--adapter caddyfile`

- **Fecha detectado:** 09/08/2026
- **Sesion:** 13 (el switch a publico, segundo intento)
- **Categoria:** operativo / auditoria / herramientas
- **Severidad:** media (no rompio nada, pero anulo en silencio el paso de seguridad del runbook)
- **Dano real:** ninguno. Y esa es exactamente la parte incomoda: el restart del caddy siguio adelante **sin validacion efectiva** y salio bien porque la config estaba bien, no porque nada la hubiera revisado. Salio bien de suerte.
- **Bug del auditor, registrado como tal:** el comando defectuoso lo entrego el auditor de la sesion, no Francisco. Se documenta con el mismo rigor que cualquier otro error del proyecto; tapar un fallo de la propia auditoria es peor que el fallo.
- **Causa raiz:** la validacion se ejecuto sobre un archivo temporal llamado `/tmp/cf.check`. `caddy validate` **infiere el adaptador por el NOMBRE del archivo**: si el archivo no se llama exactamente `Caddyfile`, asume el formato JSON nativo de Caddy y falla por sintaxis antes de mirar el contenido. Faltaba `--adapter caddyfile`. El comando fallo, y el paso siguiente del runbook (el restart) se ejecuto igual, en vez de detenerse.
- **Como se resolvio:** no se resolvio en caliente: se detecto despues, al revisar la corrida. Lo que se corrige es el runbook y el habito. La leccion util no es "el comando estaba mal escrito" sino "una validacion que falla no puede dejar pasar al paso siguiente".
- **Regla operativa para no repetir:** **R-50**. `caddy validate` sobre archivos que no se llamen `Caddyfile` SIEMPRE con `--adapter caddyfile`, y una validacion fallida DETIENE el runbook.

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

### NM-08 — Bloque pegado sobre un prompt interactivo de la terminal

- **Fecha:** 19/07/2026, Sesion 9 (deploy staging).
- **Que paso:** se pego un bloque de comandos mientras la terminal estaba esperando una respuesta interactiva; la primera linea del bloque se consumio como respuesta al prompt (quedo como "username" de un prompt de credenciales de GitHub). Cero dano: se aborto y se repitio limpio.
- **Por que pudo ser grave:** un bloque pegado sobre un prompt puede enviar texto arbitrario a donde no se quiere o ejecutar fragmentos fuera de contexto.
- **Aprendizaje:** si la terminal esta preguntando algo, primero Ctrl+C para salir del prompt; recien ahi pegar el bloque. Nunca pegar bloques encima de un prompt interactivo (refuerza R-05/R-06).

### NM-09 — El render del chat linkifica URLs y puede corromper comandos al copiar

- **Fecha:** 19/07/2026, Sesion 9 (deploy staging).
- **Que paso:** el cliente de chat convierte URLs en enlaces al renderizar; al copiar un comando que las contiene puede arrastrar corchetes/markup que rompen el comando en la terminal. Misma familia que E-12 (linkificacion de URLs rompiendo un for loop).
- **Por que pudo ser grave:** un comando corrupto pegado al VPS puede fallar en silencio o hacer algo distinto a lo previsto.
- **Aprendizaje:** los bloques que van al VPS se copian del ARCHIVO del runbook (`docs/DEPLOY-STAGING-runbook.md`), no del render del chat. Mitigacion adicional: usar variables (p.ej. `$B` para tokens linkificables) para que la URL no viaje literal en la linea copiada.

### NM-10 — Falso negativo de grep por locale: bash parte la vocal acentuada UTF-8

- **Fecha:** 05/08/2026, Sesion 12.
- **Que paso:** al auditar las menciones de "tramite" en `web/src/` para el cambio de la linea de credencial del footer, un `grep` de bash con el patron `tr[aa]mite` (con la segunda `a` acentuada) devolvio CERO resultados, cuando habia 4 apariciones reales: `Footer.astro`, `index.astro`, `privacidad.astro` y `terminos.astro`. El bash de esta maquina corre en locale C: la vocal acentuada en UTF-8 son DOS bytes, y dentro de un bracket el motor los trata como dos bytes sueltos, asi que el patron nunca puede casar la palabra acentuada.
- **Como se atajo:** la misma busqueda se repitio con ripgrep, que interpreta UTF-8 correctamente, y devolvio las 4 apariciones. El falso negativo salto porque el resultado vacio contradecia una busqueda previa exitosa hecha con ripgrep sobre el mismo arbol.
- **Por que pudo ser grave:** el reporte habria declarado "cero menciones de tramite en el sitio" mientras dos paginas legales seguian afirmando que la credencial personal estaba en tramite. Es el mismo patron que NM-07: un "no encontrado" tomado como prueba de ausencia, esta vez sobre texto que iba a un reporte de compliance.
- **Aprendizaje:** familia de R-40, ahora ampliada. Un "no encontrado" tambien puede ser artefacto de ENCODING, no solo de regex complejo. Para buscar texto en espanol (tildes, "n con virgulilla") usar ripgrep o fijar locale UTF-8 antes del grep; nunca concluir ausencia desde un grep de bash con acentos en el patron.

### NM-11 — Bloque de rollback "solo si falla" ejecutado despues de un switch EXITOSO

- **Fecha:** 09/08/2026, Sesion 13 (el switch a publico).
- **Que paso:** terminado el switch v2 con todas las verificaciones en verde, se pego tambien el bloque de **ROLLBACK** que el runbook traia marcado como "ejecutar SOLO si falla". El sitio publico volvio al cartel viejo durante **~10 minutos**, hasta que se re-aplico la configuracion buena y quedo definitiva alrededor de las **18:40**.
- **Por que pudo ser grave:** el sitio ya era publico. Un bloque condicional ejecutado fuera de su condicion deshace en un segundo un trabajo verificado, y en otro contexto puede ser mucho peor: los bloques de rollback de este proyecto tocan el **Caddyfile compartido**, asi que uno ejecutado por inercia puede arrastrar los dominios de Aurora, no solo los del sitio.
- **Honestidad sobre el dano:** cero dano permanente, pero **no fue cero efecto**. Hubo ~10 minutos de sitio publico sirviendo el cartel viejo. Se clasifica como near-miss porque nada quedo roto, la causa se entendio al instante y la re-aplicacion fue inmediata.
- **Aprendizaje:** **R-49**. Un runbook no es una lista para pegar de corrido: los bloques condicionales solo se ejecutan si su condicion se cumple, y la condicion se confirma en voz alta ANTES de pegar.

### NM-12 — El `<slot />` entero de ProductLayout envuelto en un `.reveal`: las seis paginas de producto en blanco bajo el hero

- **Fecha:** 12/08/2026, Sesion 17.
- **Que paso:** `ProductLayout.astro:304` envolvia el `<slot />` completo —todo el cuerpo de la pagina— en un unico `<div class="reveal">`. `.reveal` deja el elemento en `opacity: 0` hasta que el IntersectionObserver de `Layout.astro` le agrega `.visible`, y ese observer dispara con `threshold: 0.15`.
- **El mecanismo, que es lo que hay que entender:** un observer con umbral 0,15 **no puede dispararse** sobre un elemento mas alto que `(alto_del_viewport - 50) / 0,15`, porque su `intersectionRatio` —lo visible sobre lo TOTAL— nunca alcanza ese valor. No es que tarde: **no ocurre jamas**. Techos reales: viewport 640 px -> 3.933 px; 823 px (el que emula Lighthouse) -> 5.153 px.
- **Por que aparecio recien ahi:** la misma seccion en `/seguros/vida-termino` tiene 311 caracteres. En `/seguros/auto` paso a 6.783, mas una tabla de 7 filas, 3 tarjetas, 3 `<details>`, 17 parrafos, 19 vinetas y 6 encabezados. **22 veces mas contenido en el mismo contenedor**, que asi cruzo el techo.
- **Por que pudo ser grave:** en cualquier telefono de menos de ~800 px de alto —o sea la mayoria— la pagina entera bajo el hero se habria visto **EN BLANCO**. Sin error en consola, sin nada roto a la vista: solo vacio. Y Lighthouse **no lo veia**, porque emula 412x823 y el bloque quedaba apenas por debajo del techo. Un 99 de Performance no dice nada sobre si la pagina se ve.
- **Aprendizaje:** **R-51**. Se quito el `.reveal` de ese contenedor en vez de subir el umbral: una animacion de aparicion sobre un contenedor de miles de pixeles no significa nada aunque funcione, y el cuerpo de una pagina cuyo objetivo declarado es que la extraigan buscadores y asistentes no puede depender de JavaScript para ser visible.

### NM-13 — El mismo bug, en otro archivo: el `.reveal` de BloqueFAQ, que solo falla al 150 % de texto

- **Fecha:** 13/08/2026, Sesion 18.
- **Que paso:** `BloqueFAQ.astro:46` envolvia el `preguntas.map()` en un `.reveal`. Es un contenedor de altura **sin techo**: crece con el array. Exactamente el bug de NM-12, **sobreviviente porque aquel arreglo se aplico a un ARCHIVO y no a la CLASE**.
- **Por que la primera auditoria lo dio por bueno:** se midio en **una sola condicion** —100 % de texto, viewport 360x640— y ahi da 1.663 px contra un techo de 3.933 px, un 42 % del techo. Se cerro con la frase «margen de 2,5x». La auditoria adversarial lo midio en Chrome real a otras escalas y lo tumbo:

  | escala de texto | alto medido | veredicto |
  |---|---|---|
  | 100 % | 1.663 px | ok |
  | 115 % | 2.046 px | ok |
  | 130 % | 2.995 px | ok |
  | **150 %** | **4.167 px** | **FALLA** (ratio 0,1416) |
  | 175 % | 5.954 px | FALLA |
  | 200 % | 8.264 px | FALLA |

  Y encontro un camino **mas barato**, que no necesita ninguna preferencia especial: a **320x256 CSS px** —la condicion de prueba de WCAG 2.1 SC 1.4.10 Reflow, o sea zoom de pagina al 400 % en escritorio— con el tamano de fuente por defecto da 1.819 px contra un techo de 1.373 px, y el elemento sale `visible=false, opacity=0`.
- **Era regresion del propio trabajo de esa sesion:** en el HEAD anterior la FAQ era un `const` fijo de 3-4 preguntas dentro de `ProductLayout`. El `FAQ_AUTO` de seis preguntas y el componente `BloqueFAQ` nacieron ahi mismo, o sea que ese trabajo **duplico la altura** del contenedor (de ~834 a 1.663 px) y le comio la mitad del margen, en la misma pagina cuyo bug hermano se acababa de arreglar. Y el comentario escrito en la Sesion 17 —«las demas `.reveal` de este layout envuelven bloques acotados y no corren el riesgo»— quedo FALSO en el momento en que la FAQ se extrajo a su propio componente.
- **Por que pudo ser grave:** bajo el titulo «Preguntas frecuentes» quedaba un hueco en blanco de 4.167 px. Cero errores en consola; el JSON-LD de `FAQPage` se seguia emitiendo completo y el texto seguia en el DOM, asi que el build 13/13, el cruce de schema y Lighthouse lo daban todo por bueno. Rompe **WCAG 2.1 SC 1.4.4 Resize Text (AA)** de forma limpia, y golpea justo a los usuarios de texto grande y zoom.
- **Aprendizaje:** **R-52**, que es la leccion de metodo y vale mas que el fix: **una verificacion que mide una sola condicion no verifica, tranquiliza.** El arreglo se aplico a la CLASE y no al archivo: `BloqueFAQ` y tambien la grilla del proceso de `ProductLayout` perdieron el `.reveal`, esta ultima aunque HOY pasaba (3.362 px al 200 %, ratio 0,1755 contra el minimo de 0,15, un 17 % de margen) — porque tambien es un `map()` sobre un array que cada producto puede sobreescribir, y siete pasos en vez de cinco la tumbaban.

### NM-14 — Primer asesino silencioso del video: la CSP no declaraba `media-src`

- **Fecha:** 11/08/2026, Sesion 16.
- **Que paso:** `infra/nginx.conf` declaraba `default-src 'none'` y **no declaraba `media-src`**. Por especificacion, `media-src` no tiene valor propio: **cae en `default-src`**. O sea que valia `'none'`.
- **Por que pudo ser grave:** el navegador habria **bloqueado** `/videos/hero2.mp4` y `/videos/sobre-mi-loop.mp4`. Los fondos de video F2 (hero del home) y F3 (`/sobre-mi`) —el trabajo central de esa sesion— habrian llegado a produccion **muertos**: el visitante veria el poster estatico para siempre y el error solo aparece en la consola. Misma familia que el hash CSP que no cuadra y que el `sed -i` sobre un bind-mount: **falla en silencio**.
- **Como se atajo:** se detecto verificando a mano la pregunta que se le habia encargado a la lente de CSP de la auditoria, **antes** de que la auditoria terminara. Fix: `media-src 'self';`. Los dos hashes sha256 no se tocaron.
- **Aprendizaje:** con `default-src 'none'`, **toda directiva que no se declara vale `'none'`**. Antes de agregar un tipo de recurso nuevo al sitio (video, audio, worker, fuente externa), se revisa si su directiva esta declarada. Y como vive en `infra/nginx.conf`, exige **rebuild** (R-44).

### NM-15 — Segundo asesino silencioso del mismo video: `Permissions-Policy: autoplay=()`

- **Fecha:** 11/08/2026, Sesion 16.
- **Que paso:** la cabecera `Permissions-Policy` traia `autoplay=()`, con **allowlist vacia**. El hallazgo se levanto como severidad ALTA, el refutador de la auditoria lo **descarto**, y el refutador se equivoco. Se verifico contra MDN antes de aceptar la refutacion, porque olia igual que el `media-src`.
- **El mecanismo, segun la documentacion oficial:** una allowlist vacia «grants permission to no origins» — **el propio origen incluido**; «the autoplay attribute on `<audio>` and `<video>` elements will be ignored»; y el valor por defecto de la directiva, si se omite, es `self`. O sea que la cabecera estaba **quitando** un permiso que por defecto ya se tenia.
- **Por que pudo ser grave:** los dos videos se habrian quedado **congelados en su poster**, sin reproducir jamas. Es un asesino **independiente** del `media-src`: bastaba cualquiera de los dos para que F2 y F3 llegaran muertas a produccion. Dos causas distintas para el mismo sintoma es la peor combinacion posible de diagnosticar, porque arreglar una sola no cambia nada visible.
- **Como se atajo:** `autoplay=(self)`, que ademas es el valor por defecto de la directiva. La cabecera queda igual de restrictiva para terceros: las otras doce funciones siguen en allowlist vacia.
- **Aprendizaje:** **una refutacion de la auditoria no es la palabra final.** Cuando un hallazgo refutado toca un mecanismo que ya mordio una vez en la misma sesion, se verifica contra la documentacion oficial antes de cerrarlo. Y una cabecera restrictiva puede romper una funcion del propio sitio: `Permissions-Policy` se revisa contra lo que el sitio USA, no solo contra lo que quiere prohibirle a terceros.

### Nota de reconciliacion (Sesion 9) — repo GitHub privado pese a D-21

El repo `fbarrerainversiones/sitio-bg-infra` seguia PRIVADO en GitHub pese a que D-21 lo daba por publico: el switch nunca se acciono. Resuelto el 19/07/2026 con "Make public" tras una DOBLE auditoria de secretos (nada sensible en el historial). Con esto D-21 queda por fin accionada y la documentacion coincide con la realidad. Riesgo latente que se evito: exponer un repo con secretos commiteados al hacerlo publico; mitigado por la auditoria previa.

---

## Reglas operativas consolidadas (R-01 a R-55)

De los 28 errores y 15 near-miss anteriores, salen estas reglas vivas para no repetir.

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
  - **Ampliacion (Sesion 12, NM-10):** un "no encontrado" tambien puede ser artefacto de ENCODING. El `grep` de bash de esta maquina corre en locale C y parte las vocales acentuadas UTF-8 en dos bytes, asi que cualquier patron con tilde da falso negativo silencioso. Para buscar texto en espanol usar ripgrep, o fijar locale UTF-8 antes del grep.

- **R-41:** `docker network connect` sobre un container con trafico productivo (p.ej. el `caddy` compartido) SIEMPRE con `--gw-priority` explicito y NEGATIVO (p.ej. `--gw-priority=-100`), para no robarle el default gateway a su red original. Inmediatamente despues del connect, `docker exec <container> ip route` y confirmar que la linea `default via ...` NO cambio; si cambio, `docker network disconnect` al instante, ANTES incluso del Gate 0. (Origen: E-24, degradacion parcial de Aurora ~5 min el 19/07.)

### Reglas nuevas (Sesion 10)

- **R-42:** Los prompts a Claude Code en este proyecto se escriben en formato **CoT + XML**: etiquetas explicitas de `<rol>`, `<contexto>`, `<objetivo>`, `<reglas_duras>`, `<razonamiento_inicial>` y `<pasos>` numerados, cada uno con su mensaje de commit. La etiqueta `<razonamiento_inicial>` es obligatoria y exige **diagnostico con numeros de linea reales ANTES de editar**, reportado a Francisco antes de tocar codigo. Regla de oro adoptada el 25/07/2026 tras tres tandas seguidas de correcciones donde el diagnostico previo evito editar el archivo equivocado (p.ej. el boton "fantasma" de `/sobre-mi`: la hipotesis obvia era "falta el texto"; el diagnostico con lineas mostro que era la cascada CSS). Un prompt sin diagnostico previo produce parches a sintomas.

- **R-43:** **Deuda de arquitectura CSS documentada (hallazgo D6).** Las reglas base de `web/src/styles/global.css` (`a { color: var(--gd) }`, `a:hover { ... }`) viven **fuera de toda `@layer`**, mientras las utilidades de Tailwind v4 viven en `@layer utilities`. En CSS una declaracion sin capa gana a cualquier declaracion en capa, **sin importar la especificidad**: por eso toda clase `text-*` aplicada a un `<a>` es **inerte** (los `text-tx-muted` del Header y del Footer no se aplican; esos enlaces se ven dorados). Consecuencia practica: fue la causa de los dos "botones fantasma" del 25/07 (texto dorado sobre fondo dorado en el CTA de `/sobre-mi`, y texto invisible en hover de los botones outline).
  - **Mitigacion vigente y obligatoria:** en cualquier boton con fondo dorado, el color critico del texto se fija **inline** (`style="color:#08080d"`), nunca con una utilidad de Tailwind. Para estados (`:hover`) se usa una regla propia sin capa y con mayor especificidad (patron `.btn-outline`, ver `global.css`).
  - **Fix de raiz DIFERIDO:** envolver las reglas base en `@layer base` haria que las utilidades ganen y **cambiaria el color de los enlaces en todo el sitio**. Eso es un rediseno, no un fix, y toca el aspecto que Francisco ya aprobo visualmente. Se difiere a **sesion dedicada post-lanzamiento** (pendiente P-47). Hasta entonces, NO tocar las capas.

### Reglas nuevas (Sesion 12)

- **R-44:** **Todo nginx que corra detras de un reverse proxy emite redirecciones RELATIVAS:** `absolute_redirect off;` y `port_in_redirect off;` a nivel `server`. Con los valores por defecto, el `301` de barra final que genera `try_files $uri $uri/` se arma como URL absoluta usando el puerto en el que ESE nginx escucha — aqui el `8080` interno, invisible desde internet — y el proxy no reescribe la cabecera `Location`, asi que el puerto privado se filtra al navegador y la navegacion muere con `ERR_CONNECTION_RESET`.
  - **Corolario de deploy (igual de obligatorio):** `infra/nginx.conf` se hornea DENTRO de la imagen Docker (`COPY infra/nginx.conf /etc/nginx/conf.d/default.conf`). Ningun cambio de esa config llega al VPS con un `git pull`: **exige rebuild de la imagen**. Lo mismo vale para los hashes CSP. Si el sintoma es "cambie la config y el VPS sigue igual", la respuesta casi siempre es que falto el rebuild.
  - (Origen: E-25, 05/08/2026.)

- **R-45:** **Las salidas de terminal jamas vuelven a una terminal.** A la terminal entran UNICAMENTE los bloques que entrega el auditor, uno a la vez. Lo que la terminal devuelve va EXCLUSIVAMENTE al archivo `.txt` de reporte, para que lo lea el auditor. Pegar una salida de vuelta al shell re-ejecuta comandos fuera de su contexto original — con las variables de ese momento ya perdidas — y puede escribir basura en archivos criticos sin arrojar ningun error. Regla escrita con sangre. (Origen: E-26, el `sed` re-ejecutado con la variable del hash vacia. Refuerza R-05, R-06 y NM-08.)

- **R-46:** **Tests de credenciales por terminal RETIRADOS de este proyecto.** El juez oficial de una credencial es el NAVEGADOR. Durante la Sesion 12 ningun intento tecleado en `curl` conto como evidencia valida: todos fallaron mientras el navegador entraba sin problema, y esos falsos negativos alargaron el diagnostico del candado y empujaron a sospechar de la contrasena en vez del archivo. Si hay que verificar un basicauth, se abre el navegador y punto. (Origen: Sesion 12, "guerra del candado".)

- **R-47:** **Secuencia de deploy: Claude Code pushea PRIMERO, el VPS jala DESPUES.** Nunca al reves ni en paralelo. Senal inequivoca de que la secuencia se violo: el `git pull` del VPS responde `Already up to date` y el build sale todo `CACHED` — eso significa que el VPS esta reconstruyendo la version VIEJA y el trabajo nuevo ni siquiera llego. Guardian obligatorio, ya institucionalizado: despues del `git pull` en el VPS y ANTES de lanzar el rebuild, correr `git log` y confirmar por HASH que el commit esperado efectivamente aterrizo. (Origen: Sesion 12.)

### Reglas nuevas (Sesion 13 — el switch a publico)

- **R-48:** **`sed -i` y `mv` PROHIBIDOS sobre cualquier archivo bind-monteado en un container.** Docker resuelve un bind-mount de ARCHIVO por **inodo** al arrancar el container. `sed -i` y `mv` no editan en el lugar: crean un archivo nuevo y lo renombran encima, dejando al original con un inodo distinto. A partir de ese momento el host ve una version y el container sigue leyendo otra, y todo lo que se ejecute dentro del container —incluidos `validate` y `reload`— opera sobre el archivo VIEJO **reportando exito**. Editar unicamente con metodos que preserven el inodo: `tee`, o `sed` a un archivo temporal seguido de `cp` encima del original. Ante la menor duda de si el container esta viendo lo mismo que el host, comparar `ls -i` del archivo en el host contra `docker exec <container> ls -i` del archivo montado: **si los inodos difieren, el container esta leyendo un fantasma** y hace falta `docker restart` para re-enganchar el mount. Esta regla **amplia** la regla de mayo (Plan Maestro seccion 2, Regla 5: "editar el Caddyfile con tee o editor, NUNCA con mv"): **`sed -i` es un `mv` disfrazado**, y por eso se colo por debajo de una prohibicion que ya existia. (Origen: E-27, 09/08/2026.)

- **R-49:** **Los bloques condicionales de un runbook se ejecutan UNICAMENTE si su condicion se cumple.** Todo bloque marcado "solo si falla", "si el Gate 0 sale rojo" o equivalente exige que el operador **confirme la condicion en voz alta antes de pegarlo**. Un runbook no es una lista para pegar de corrido de arriba a abajo: la mitad de sus bloques existen precisamente para el caso que no ocurrio. Peso extra en este proyecto: los bloques de rollback tocan el **Caddyfile compartido**, asi que uno ejecutado por inercia puede arrastrar los dominios de Aurora. (Origen: NM-11, el rollback pegado despues de un switch exitoso.)

- **R-50:** **`caddy validate` sobre un archivo que NO se llame exactamente `Caddyfile` va SIEMPRE con `--adapter caddyfile`.** Caddy infiere el adaptador por el nombre del archivo; sobre un `/tmp/cf.check` asume JSON nativo y falla por sintaxis sin haber mirado el contenido. Corolario, que es la mitad importante de la regla: **una validacion que falla DETIENE el runbook.** Nunca se pasa al restart o al reload "porque el error parecia del comando": si la red de seguridad no corrio, el paso siguiente no se ejecuta. (Origen: E-28.)

### Reglas nuevas (Sesiones 16 a 19 — el sitio ya publico)

- **R-51:** **Ninguna animacion de aparicion dependiente de JavaScript sobre un contenedor de contenido largo o de altura sin techo.** `.reveal` deja el elemento en `opacity: 0` hasta que el IntersectionObserver le agregue `.visible`, y con `threshold: 0.15` un elemento mas alto que `(alto_del_viewport - 50) / 0,15` **nunca** alcanza ese ratio: se queda invisible para siempre, sin un solo error en consola. Prohibido envolver en `.reveal` cuerpos de pagina, `<slot />`, listas generadas con `map()` o cualquier bloque que pueda crecer con los datos. Las animaciones de aparicion son para bloques **cortos y fijos**: encabezados, un parrafo suelto, un CTA. **Corolario, que es la mitad importante de la regla:** lo que tiene que poder extraer un buscador o un asistente **no depende de JavaScript para ser visible**. (Origen: NM-12 y NM-13, Sesiones 17 y 18.)

- **R-52:** **Toda verificacion de altura se mide en TRES condiciones, o no es una verificacion.** (1) 360x640 al 100 % de texto; (2) 150 % de escala de texto; (3) 320x256 CSS px, que es la condicion de prueba de WCAG 2.1 SC 1.4.10 Reflow, o sea zoom de pagina al 400 %. Medir una sola condicion **no verifica: tranquiliza**. NM-13 paso la condicion 1 con un margen de 2,5x y fallaba en las otras dos. Aplica a cualquier contenedor nuevo y a cualquier contenedor existente cuyo contenido crezca. (Origen: NM-13, Sesion 18.)

- **R-53:** **Lighthouse local SIEMPRE por `127.0.0.1`, nunca por `localhost`.** En un host con IPv6 activo, `localhost` resuelve primero a `::1` y la latencia se cuadruplica; el Performance se hunde y se persiguen cuellos de botella que no existen. La cifra que se registra en un reporte tiene que venir de una corrida por `127.0.0.1`. (Origen: Sesiones 15-18, medicion de LCP.)

- **R-54:** **Los centinelas de datos personales se DESCRIBEN, no se transcriben.** Un barrido que busca datos personales en el repo se reporta diciendo que dio cero y como se busco, **nunca escribiendo los valores buscados**. El repo es publico: un informe que dice «esto no esta en el repo» no puede lograrlo escribiendolo. Vale igual para chats, commits y exports. (Origen: la primera version del REPORTE-SESION-17, detectada y corregida en la Sesion 18 antes de commitear.)

- **R-55:** **Push al cierre de cada jornada: un commit local NO es un respaldo.** Un commit que solo vive en un clon esta a un disco de distancia de no existir. El trabajo verificado se publica el mismo dia, y en este proyecto el push lo ejecuta **Francisco** (los agentes no pushean). Si una jornada cierra con commits locales sin publicar, eso se dice explicitamente en el reporte y en el snapshot de continuidad, con los hashes, para que nadie lo de por respaldado. (Origen: Sesion 18.)

> **Nota de numeracion:** el **PROTOCOLO DE VEDA** de infraestructura compartida (practica establecida en la Sesion 14) sigue **sin numerar** a proposito. Cuando se formalice tomara el numero que siga en este registro, que hoy seria R-56.

---

## Estadisticas del historico

```
Errores documentados:    28
Near-miss documentados:  15
Reglas operativas:       55
Rollbacks ejecutados:    3 — 1 planificado (B4 v1 -> network disconnect, Sesion 9)
                            + 1 planificado (switch v1 fallido por inodo, E-27 Sesion 13)
                            + 1 ACCIDENTAL (bloque condicional pegado de mas, NM-11 Sesion 13)
Incidentes Aurora:       1 (contenido ~5 min, B4 v1 Sesion 9 — sin perdida de datos)
Incidentes solo-staging:  1 (candado basicauth corrupto, E-26 Sesion 12 — sin impacto en Aurora)
Incidentes sitio publico: 1 (~10 min sirviendo el cartel viejo tras el rollback accidental,
                            NM-11 Sesion 13 — sin impacto en Aurora)
Danos reales:            ~115 min re-trabajo + 8 min espera reboot + ~5 min degradacion parcial 3 dominios (B4 v1)
                         + Sesion 12: navegacion de staging rota (E-25) y acceso a staging bloqueado (E-26),
                           ambos resueltos el mismo dia; sin cifra de minutos registrada
                         + Sesion 13: switch v1 sin efecto por el inodo (E-27) y ~10 min de cartel
                           viejo en el sitio ya publico (NM-11)
Danos evitados:          incalculables (cualquier near-miss pudo replicar el 522 v2.0)
```

---

## Mensaje para el Claude de la proxima sesion

Si vos sos Claude leyendo este documento por primera vez en una sesion nueva:

1. **Lee este documento ANTES de proponer cualquier accion tecnica.**
2. Las 55 reglas (R-01 a R-55) son **inviolables** salvo argumento explicito de Francisco.
3. Si una propuesta tuya contradice una regla, para y discutilo antes.
4. Cuando detectes un error nuevo, agregalo a este documento con la misma estructura. La memoria del proyecto se construye con historico, no con olvido.

**Fin del documento de errores y aprendizajes.**

**Ultima revision:** 17 de agosto de 2026, Sesion 19 (primera sesion corrida dentro del VPS).
**Proxima revision:** al cierre de la proxima sesion (cuando se detecten errores nuevos).
