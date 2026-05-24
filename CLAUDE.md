# CLAUDE.md — Reglas locales del proyecto Sitio Barrera Global

> Este archivo es leído automáticamente por Claude Code al iniciar una sesión.
> También sirve como referencia rápida para cualquier sesión de chat (Claude.ai).
> No editar sin actualizar la versión y la fecha al final.

## Identidad

- Proyecto: Sitio web público de Barrera Global (asesoría de seguros, Ecuador).
- Dominio: barreraglobal.com (raíz) y www.barreraglobal.com.
- Marca: Barrera Global (marca personal de Francisco Javier Barrera Bonilla).
- Vinculación: Asesor en seguros vinculado a Insurance Trust (Cred. SCVS Nº 572619).
- Slug interno: sitio-bg.
- Carpeta local: C:\Users\panch\projects\sitio-bg-infra\
- Carpeta VPS: /opt/sitio-bg/ (NO existe todavía, se crea en Fase 0 dentro del VPS).
- Repo GitHub: fbarrerainversiones/sitio-bg-infra (privado, se crea en Fase 0).
- Fase actual: Fase 0 (Setup).

## Qué NO es este proyecto

- No es Aurora (agente WhatsApp con RAG) — proyecto separado en /opt/stack/.
- No es FBE Sport (sitio WordPress) — proyecto separado en /opt/fbesport/.
- No usa WordPress, WooCommerce, ni CMS gráfico en Fase 1-2.
- No procesa pagos. El cliente paga directo al carrier.
- No publica primas específicas (viola Art. 11.6 SCVS).

## Stack técnico firme

- Frontend: Astro 5.x + Tailwind v4 + TypeScript + islas React.
- Build: Docker multi-stage (Astro build a nginx alpine sirviendo dist/).
- DB: Postgres propio del sitio (container sitio-bg-postgres en red propia).
- Routing público: vía Caddy compartido de Aurora (NO Caddy propio).
- Red Docker propia: sitio_bg_net (subnet 172.22.10.0/24).
- Hosting: VPS Hostinger compartido (212.85.14.172).

## Reglas duras inviolables

### Filesystem
- El proyecto vive ÚNICAMENTE bajo C:\Users\panch\projects\sitio-bg-infra\ (local) y /opt/sitio-bg/ (VPS).
- NO tocar C:\Users\panch\projects\barreraglobal-infra\ ni \fbesport-infra\.
- NO tocar /opt/stack/ ni /opt/fbesport/ en el VPS.
- NO leer archivos .env, certs o llaves de los otros dos proyectos.

### Red Docker (cuando se trabaje sobre el VPS)
- Crear y usar ÚNICAMENTE sitio_bg_net (172.22.10.0/24).
- NO conectar containers a stack_net ni a fbe_net.

### Containers
- Prefijo obligatorio: sitio-bg-*.
- NO renombrar/detener/reiniciar containers caddy, n8n*, postgres, redis, chatwoot-*, beszel*, fbesport-*.

### Puertos del host
- 80, 443, 8443, 58291 están OCUPADOS. NO abrir puerto nuevo.

### Caddyfile compartido
- Cualquier edición a /opt/stack/caddy/Caddyfile sigue el flujo de 7 pasos del documento maestro:
  backup timestamped, validar HTTP 200 antes, editar, validar sintaxis, reload, validar HTTP 200 después, restaurar si algo cae.

### Postgres
- Si se necesita DB, usar container propio sitio-bg-postgres en sitio_bg_net.
- Base: sitio_bg_web, usuario: sitio_bg_admin.
- NUNCA tocar bases n8n, chatwoot_production, barreraglobal_rag.

### Backups
- /opt/stack/backups/scripts/backup.sh es de Aurora. NO MODIFICAR.
- Backup propio del sitio en /opt/sitio-bg/backups/scripts/backup-sitio.sh con bucket B2 propio.

### UFW
- No tocar UFW sin coordinación explícita con Francisco.

## Compliance (no negociable)

- LOPDP: 17 ítems del Art. 12 en /privacidad. Consentimiento separado para datos de salud (Art. 4).
- SCVS: nunca publicar primas, nunca prometer descuentos/comisiones devueltas, footer con credencial visible.
- Mientras Francisco NO tenga credencial propia (esperada finales julio 2026): el sitio opera bajo la credencial 572619 de Insurance Trust, declarado explícitamente en footer y /sobre-mi.

## Reglas para Claude Code específicamente

1. Al iniciar sesión: leer este archivo entero antes de proponer cualquier acción.
2. Antes de crear archivos masivos (más de 3 archivos en una pasada): proponer plan en texto y esperar aprobación de Francisco.
3. Antes de instalar dependencias npm: confirmar lista exacta de paquetes con Francisco.
4. Antes de hacer git push: confirmar con Francisco.
5. NUNCA correr docker compose up/down sin confirmación explícita.
6. NUNCA tocar archivos fuera de C:\Users\panch\projects\sitio-bg-infra\ en local.
7. Si una acción va a tocar el VPS (vía SSH o deploy): pedir confirmación antes.
8. Si Francisco propone algo que viola SCVS, LOPDP o las reglas duras: contradecir con cita exacta de la regla violada.
9. Idioma de respuesta: español ecuatoriano. Sin jerga argentina/española.
10. Commits: mensaje en español, presente imperativo. Ej: "agrega layout base", "corrige tipografía en hero".

## Decisiones tomadas (referencia rápida)

- Postgres: propio del sitio en sitio_bg_net (Opción B confirmada).
- CMS: MDX en repo Git, sin CMS gráfico en Fase 1-2.
- Hosting: container Docker en /opt/sitio-bg/, servido por nginx alpine.
- Diseño: paleta V17 (#08080d + gold #c9a84c + off-white #fafaf7).
- Tipografía: Cormorant Garamond + Outfit + JetBrains Mono (Fontsource self-hosted).
- Integración Aurora: widget Chatwoot + webhook n8n vía URL pública, NO acceso directo a Postgres/Redis de Aurora.

## Estado de datos pendientes

- [PENDIENTE] Email institucional francisco@itbrokerec.com (o equivalente).
- [PENDIENTE] Lista de carriers acreditados por Insurance Trust.
- [PENDIENTE] Autorización escrita de Insurance Trust para marca digital propia Barrera Global.
- [PENDIENTE] Credencial SCVS personal de Francisco (esperada finales julio 2026).
- [PENDIENTE] Eslogan final (candidatos: "Asesoría local. Coberturas globales." o "Asesor primero. Producto después.").

---
Versión: 1.0
Última actualización: 23 de mayo de 2026
