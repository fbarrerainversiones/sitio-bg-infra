# HITO 00 — Setup local del proyecto en la laptop

**Fecha de cierre:** 24 de mayo de 2026
**Fase del roadmap:** Fase 0 (Setup)
**Commits de cierre:** `67372b8` + `3d79156`
**Duración total:** ~3 horas (1 sesión)

---

## Objetivo

Dejar la carpeta del proyecto creada en la laptop de Francisco con la estructura base de Fase 0, sin Astro ni dependencias todavía, lista para que las próximas sesiones de Claude Code arranquen con contexto correcto y reglas explícitas.

## Resultado

Carpeta `C:\Users\panch\projects\sitio-bg-infra\` creada y trackeada por Git con:

- `CLAUDE.md` (5568 bytes, UTF-8 sin BOM): reglas locales del proyecto leídas automáticamente por Claude Code.
- `.gitignore` (modificado, UTF-8 sin BOM): exclusiones del repo, incluyendo `.claude/` para portabilidad.
- 6 carpetas raíz: `.githooks/`, `web/`, `infra/`, `docs/`, `backups/scripts/`, `scripts/`.
- 5 archivos `.gitkeep` en las carpetas vacías.
- 4 archivos `.md` placeholder en `docs/`: DECISIONES, BITACORA, INCIDENTES, IDENTIDAD-MARCA.
- 2 commits en branch `main`.

## Decisiones tomadas

| # | Decisión | Argumento |
|---|---|---|
| 1 | Postgres propio del sitio en `sitio_bg_net` (Opción B) | Aislamiento físico previene que un fallo en Aurora tumbe el sitio o viceversa. Defensa contra repetición del incidente 522 v2.0. |
| 2 | PowerShell 7 (`pwsh`) como shell estándar del proyecto | Soporta `Set-Content -Encoding utf8NoBOM` y `Get-Content -AsByteStream` nativos. PowerShell ISE NO soporta Claude Code y PowerShell 5.1 escribe UTF-8 con BOM por defecto. |
| 3 | Claude Code usa Write tool del harness para crear archivos | Garantiza UTF-8 sin BOM determinista, independiente del shell del host. No es script intermedio. |
| 4 | `.gitkeep` solo en carpetas vacías (5, no 6) | `docs/` no necesita porque tiene los 4 `.md` adentro. Un `.gitkeep` ahí sería archivo basura. |
| 5 | `.claude/` excluido vía `.gitignore` del repo, no solo gitignore global | Portabilidad: el proyecto puede clonarse a otra máquina sin gitignore global y `.claude/` igual queda fuera. |
| 6 | Sitio web puede publicar antes de credencial SCVS personal de Francisco | Operará bajo el paraguas de Insurance Trust (Cred. SCVS Nº 572619) declarado en footer y `/sobre-mi`. Cadena legal válida: cliente → Francisco → Insurance Trust → carrier. |
| 7 | Prompts a Claude Code en formato CoT obligatorio | Evita código basura. Pasos: contexto, objetivo, restricciones, plan, riesgos, aprobación, ejecución, verificación, commit. |
| 8 | Modo `accept edits on` desactivado en Fase 0 y Fase 1 | Queremos confirmación explícita en cada cambio. Se reactiva en Fase 4 cuando los cambios sean de bajo riesgo. |
| 9 | Documentar cada hito en `docs/hitos/HITO-XX-*.md` | Continuidad del proyecto: cualquier sesión futura puede reconstruir contexto leyendo los hitos. |
| 10 | VS Code como editor para archivos `.md` largos | Evita problemas de here-strings rotos en PowerShell. Garantiza encoding UTF-8 sin BOM con configuración explícita. |

## Errores encontrados y cómo se resolvieron

| # | Error | Causa raíz | Solución verificada |
|---|---|---|---|
| 1 | `CLAUDE.md` creado con BOM (`EF BB BF` al inicio) | `Out-File -Encoding UTF8` en PowerShell 5.1 escribe UTF-8 con BOM por defecto. | Reescribir con `[System.IO.File]::WriteAllText(...)` pasando `New-Object System.Text.UTF8Encoding $false`. Verificado con `Get-Content -Encoding Byte -TotalCount 3` que el primer byte sea `35` (`#`) y NO `239`. |
| 2 | `claude` falla con error `Input must be provided either through stdin or as a prompt argument when using --print` | Se intentó ejecutar Claude Code desde PowerShell ISE, que no soporta input interactivo. | Usar `pwsh` 7 o CMD nativo. NUNCA ISE. |
| 3 | Email de Git del VPS quedó con placeholder `TU-EMAIL-REAL@example.com` | Francisco ejecutó el bloque de setup local dentro de la sesión SSH del VPS por confusión de contextos. | `git config --global user.email "fbarrera.inversiones@gmail.com"` en la sesión SSH. Verificado con `git config --global user.email`. |
| 4 | Claude Code afirmó que `.claude/` "estaba cubierto por .gitignore del proyecto" sin estarlo | Confusión en lectura del status: lo cubría el gitignore GLOBAL de la máquina, no el del repo. | Claude Code se autocorrigió con `git check-ignore -v`. Decidimos agregar `.claude/` al `.gitignore` del repo también, por portabilidad. |
| 5 | Pegar un here-string largo `@'...'@` en PowerShell 5.1 rompió todo | PowerShell 5.1 no reconoce `Set-Content -Encoding utf8NoBOM` ni `Get-Content -AsByteStream`. Al fallar, el resto del here-string se interpretó como código. | Usar pwsh 7 SIEMPRE. O mejor: usar VS Code o Claude Code con Write tool para archivos largos. |
| 6 | `pwsh` instalado por `winget` no aparece directo en PATH | El instalador lo deja en `C:\Users\panch\AppData\Local\Microsoft\WindowsApps\` con alias de ejecución de aplicaciones que a veces no funciona como esperado. | Ejecutar con path completo: `& "C:\Users\panch\AppData\Local\Microsoft\WindowsApps\pwsh.exe"`. Alternativa: `C:\Program Files\PowerShell\7\pwsh.exe`. |
| 7 | `for` loop bash con URLs se rompió al copiar/pegar desde el cliente de chat | El cliente convirtió `www.barreraglobal.com` en link Markdown `[texto](https://...)`. | Pegar `for` loops con cuidado o escapar las URLs. El resultado fue HTTP 200 igual, no afectó. |
| 8 | Warnings de Git `LF will be replaced by CRLF` | Comportamiento normal en Windows por `autocrlf=true`. Git guarda LF en el repo y entrega CRLF en checkout. | No es error, es informativo. Dejar como está, no afecta encoding UTF-8 sin BOM. |
| 9 | Prompt CoT largo a Claude Code con contenido literal embebido se cortó a la mitad | El cliente de chat tiene límite de tamaño para mensajes y partió el contenido en dos. | Estrategia nueva: archivos `.md` largos se crean con VS Code (editor fuera de Claude Code), después Claude Code solo verifica encoding y commitea. |
| 10 | VS Code abrió el archivo nuevo con encoding "UTF-8 with BOM" por defecto | Configuración por defecto de VS Code en algunas instalaciones. | Cambiar manualmente vía "Save with Encoding" → "UTF-8" (sin BOM). Verificar en barra inferior derecha que diga solo "UTF-8". |

## Comandos clave que funcionaron

### Crear archivo UTF-8 sin BOM en pwsh 7

```powershell
@'
contenido aquí
'@ | Set-Content -Path archivo.md -Encoding utf8NoBOM
```

### Verificar que NO tiene BOM en pwsh 7

```powershell
Get-Content archivo.md -AsByteStream -TotalCount 3
```

Primer byte debe ser `35` si el archivo arranca con `#`. NUNCA `239 187 191`.

### Lanzar pwsh 7 desde PowerShell 5.1 si no abre directo

```powershell
& "C:\Users\panch\AppData\Local\Microsoft\WindowsApps\pwsh.exe"
```

### Inicializar Git correctamente

```powershell
git init
git branch -M main
git config --global user.name "Francisco Barrera"
git config --global user.email "fbarrera.inversiones@gmail.com"
git add .
git commit -m "mensaje en español imperativo"
```

### Lanzar Claude Code

```powershell
cd C:\Users\panch\projects\sitio-bg-infra
claude
```

Después apretar `Shift+Tab` para salir del modo auto-accept en Fase 0 y Fase 1.

### Crear archivo .md largo con VS Code

```powershell
New-Item -ItemType File -Path docs\hitos\HITO-XX-nombre.md -Force | Out-Null
code docs\hitos\HITO-XX-nombre.md
```

En VS Code: cambiar encoding a UTF-8 (sin BOM) en la barra inferior antes de pegar contenido. Verificar después con `Get-Content -AsByteStream -TotalCount 3` en pwsh 7.

### Gate 0 abreviado vía SSH al VPS

```bash
for d in barreraglobal.com www.barreraglobal.com n8n.barreraglobal.com chat.barreraglobal.com beszel.barreraglobal.com; do
  echo -n "$d: "
  curl -s -o /dev/null -w "%{http_code}\n" -I --max-time 15 https://$d
done
```

## Lo que NO se hizo en este hito (y por qué)

- NO se instaló Astro ni dependencias npm. Es Fase 1, no Fase 0.
- NO se creó `/opt/sitio-bg/` en el VPS. Eso es HITO 01.
- NO se creó red Docker `sitio_bg_net`. Eso es HITO 01.
- NO se creó bucket B2 `sitio-bg-backups`. Eso es HITO 02 o cuando llegue Fase 1.
- NO se creó repo GitHub. Eso es HITO 02. Se hace cuando haya estructura para subir.
- NO se hizo `git push`. No hay remoto todavía.
- NO se tocó el Caddyfile compartido. Eso es Fase 1 cerrando.
- NO se publicaron datos sensibles (carriers, email institucional) por estar pendientes de confirmar. Los `.md` placeholder en `docs/` quedaron vacíos a propósito.

## Estado de la infraestructura tras el hito

### Laptop (Windows)

```
C:\Users\panch\projects\sitio-bg-infra\
├── .git\                    (repo local, branch main, 2 commits)
├── .gitignore               (con sección .claude/ agregada)
├── CLAUDE.md                (5568 bytes, UTF-8 sin BOM)
├── .githooks\.gitkeep
├── backups\scripts\.gitkeep
├── docs\
│   ├── BITACORA.md          (placeholder)
│   ├── DECISIONES.md        (placeholder)
│   ├── IDENTIDAD-MARCA.md   (placeholder)
│   ├── INCIDENTES.md        (placeholder)
│   └── hitos\
│       └── HITO-00-setup-local.md  (este archivo)
├── infra\.gitkeep
├── scripts\.gitkeep
└── web\.gitkeep
```

### VPS Hostinger (Linux, 212.85.14.172)

```
/opt/
├── stack/                   (Aurora, NO TOCAR, HEAD: 4eee736)
├── fbesport/                (FBE Sport, NO TOCAR)
└── sitio-bg/                NO EXISTE TODAVÍA — siguiente hito
```

### Repo remoto (GitHub)

```
fbarrerainversiones/sitio-bg-infra
└── NO EXISTE TODAVÍA — siguiente hito
```

### Cloudflare

Zona `barreraglobal.com` no se tocó, sigue igual que para Aurora.

## Datos pendientes que NO bloquean próximos hitos pero sí bloquean Fase 1 cerrando

| Dato | Quién lo da | Bloquea |
|---|---|---|
| Email institucional `francisco@itbrokerec.com` | Insurance Trust / Carolina Andrade | `/contacto` y formulario |
| Lista carriers locales acreditados | Insurance Trust | `/aseguradoras` |
| Lista carriers internacionales acreditados | Insurance Trust | `/aseguradoras`, `/seguros/internacional` |
| Autorización escrita marca digital "Barrera Global" | Insurance Trust | Lanzamiento público |
| Credencial SCVS personal de Francisco | SCVS (esperado finales julio 2026) | Footer definitivo (mientras tanto opera bajo cred. 572619 de Insurance Trust) |
| Eslogan final | Francisco | Hero y footer del sitio |

## Próximo hito sugerido

**HITO 01 — Infraestructura base en el VPS**

Criterios de entrada (debe ser cierto antes de arrancarlo):

- Gate 0 abreviado pasado (5 dominios Aurora en HTTP 200).
- Acceso SSH al VPS funcionando.
- Sesión nueva, fresca, no continuación de una larga.

Alcance:

- Crear `/opt/sitio-bg/` y subcarpetas espejo de la local.
- Crear `/opt/sitio-bg/CLAUDE.md` con reglas operativas del VPS.
- Crear red Docker `sitio_bg_net` con subnet `172.22.10.0/24`.
- Validar que la red no colisiona con `stack_net` ni `fbe_net`.
- Validar HTTP 200 de los 5 dominios DESPUÉS del cambio.

Criterios de salida:

- `/opt/sitio-bg/` existe con permisos correctos.
- `docker network ls` muestra `sitio_bg_net` listada.
- Los 5 dominios productivos siguen en HTTP 200.

---

**Generado el:** 24 de mayo de 2026
**Por:** Claude (auditor senior) + Francisco
**Próxima revisión:** al cierre del HITO 01