# infra/README-hashes.md — Regeneración de los hashes CSP de `nginx.conf`

`infra/nginx.conf` publica una cabecera `Content-Security-Policy` con
`default-src 'none'` y una lista blanca mínima. En `script-src` incluye dos
hashes `sha256-...` que autorizan los **dos únicos `<script type="module">`
inline** que Astro genera en el build:

| Hash | Script inline | Página |
|---|---|---|
| `sha256-IpuDn/ODXnvlsW4BOK3Y58F0Qf1lmA9OPQHicTjTPos=` | Toggle del menú móvil (`mobile-menu-toggle`) | `index.html` |
| `sha256-Qra3eTJV60gng4dzuHtxcR7XY8lE1nLbTAAJ5T7jyto=` | `IntersectionObserver` del scroll-reveal | `index.html` |

> **Verificado contra el build actual** (HEAD `be4bf28`, commit `feat(deploy)` de
> esta sesión): los dos hashes computados sobre `web/dist` **coinciden** con los
> de `nginx.conf`. No requiere cambios.

## Cuándo hay que regenerarlos

Cada vez que cambie el **contenido** de alguno de esos scripts inline, o se
agregue/elimine un `<script>` inline ejecutable. En la práctica: al tocar el
toggle del menú móvil (Header) o el scroll-reveal (animación de aparición), o
al introducir cualquier `<script>` sin `src`. Si el hash no cuadra, el
navegador **bloquea** el script y la interacción se rompe en silencio.

Notas de correctitud:

- El hash CSP se calcula sobre los **bytes exactos** del contenido interno del
  `<script>` (lo que va entre `>` y `</script>`), **sin recortar** espacios.
- Se hashea el **output del build** (`web/dist`), NO el código fuente: Astro
  minifica el script al compilar, así que el hash del fuente no sirve.
- Se **excluyen**: los `<script src=...>` (externos, cubiertos por `'self'`) y
  los `<script type="application/ld+json">` (bloques de datos JSON-LD; CSP
  `script-src` no los evalúa ni exige hash).

## Procedimiento (Windows / pwsh 7)

```powershell
# 1. Build limpio
npm run build --prefix web

# 2. Computar los hashes sha256 de los <script> inline EJECUTABLES del build
$dist  = "C:\Users\panch\projects\sitio-bg-infra\web\dist"
$files = Get-ChildItem -Path $dist -Recurse -Filter *.html
$rx    = [regex]'(?is)<script([^>]*)>(.*?)</script>'
$sha   = [System.Security.Cryptography.SHA256]::Create()
$seen  = @{}
foreach ($f in $files) {
    $html = [System.IO.File]::ReadAllText($f.FullName)
    foreach ($m in $rx.Matches($html)) {
        $attrs = $m.Groups[1].Value
        $inner = $m.Groups[2].Value
        if ($attrs -match '\bsrc\s*=') { continue }                   # externo
        if ($attrs -match 'application/(ld\+json|json)') { continue }  # data block
        if ([string]::IsNullOrWhiteSpace($inner)) { continue }
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($inner)
        $csp   = "sha256-" + [Convert]::ToBase64String($sha.ComputeHash($bytes))
        if (-not $seen.ContainsKey($csp)) { $seen[$csp] = @() }
        if ($seen[$csp] -notcontains $f.Name) { $seen[$csp] += $f.Name }
    }
}
$seen.Keys | Sort-Object | ForEach-Object { "$_  ($($seen[$_] -join ', '))" }
```

## Cómo aplicar el resultado

1. Copiar cada `sha256-...` que imprima el script.
2. Reemplazar los dos valores dentro de `add_header Content-Security-Policy ...`
   en `infra/nginx.conf` (directiva `script-src 'self' 'sha256-...' 'sha256-...'`).
3. Rebuild de la imagen Docker (el `nginx.conf` se hornea en la imagen).
4. Verificar en el navegador: consola sin errores de CSP y las dos
   interacciones (menú móvil + scroll-reveal) funcionando.

## Equivalente rápido en Linux (VPS / bash)

```bash
# Para un script guardado en un archivo (sin newline final añadido):
openssl dgst -sha256 -binary script.js | openssl base64
# -> anteponer "sha256-" al resultado
```
