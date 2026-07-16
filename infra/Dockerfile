# syntax=docker/dockerfile:1
# ============================================================
# Paquete del sitio estatico de Barrera Global.
# Multi-stage: (1) compila Astro con Node, (2) sirve dist/ con
# nginx alpine endurecido. Contexto de build = raiz del repo
# (para acceder a web/ e infra/nginx.conf). Ver infra/.dockerignore.
# ============================================================

# ---------- Etapa 1: build de Astro ----------
FROM node:22-alpine AS build
WORKDIR /app

# Dependencias con lockfile exacto (capa cacheable, se invalida solo
# si cambian package.json / package-lock.json).
COPY web/package.json web/package-lock.json ./
RUN npm ci

# Codigo fuente del sitio + compilacion a estatico.
COPY web/ ./
RUN npm run build
# -> genera /app/dist

# ---------- Etapa 2: servir con nginx alpine (NON-ROOT) ----------
# Imagen oficial nginx "unprivileged": corre como usuario nginx (UID 101),
# SIN privilegios de root. Por eso escucha en el puerto INTERNO 8080 (un
# proceso non-root no puede bindear puertos < 1024).
# IMPORTANTE (deploy): el Caddy compartido del VPS debe enrutar a
#   sitio-bg-web:8080  (NO :80). Este puerto NO se publica al host (Regla 4).
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

# Config endurecida (reemplaza el server block por defecto de la imagen).
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf

# Solo los estaticos ya compilados. La imagen final NO contiene Node,
# npm, ni el codigo fuente: superficie minima.
COPY --from=build /app/dist /usr/share/nginx/html

# Puerto interno (non-root -> 8080). El Caddy compartido llega por la red
# interna sitio_bg_net a este puerto. NO se publica al host (Regla 4).
EXPOSE 8080

# Healthcheck: nginx debe responder 200 en la home por el puerto interno 8080.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1

# La imagen base ya define USER 101 (nginx) y CMD ["nginx", "-g", "daemon off;"].
