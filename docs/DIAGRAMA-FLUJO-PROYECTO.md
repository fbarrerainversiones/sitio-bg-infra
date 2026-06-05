# DIAGRAMA DE FLUJO COMPLETO — Proyecto Sitio Barrera Global

> **Visualizacion del proyecto entero:** desde el inicio (23/05/2026) hasta el deploy en produccion, pasando por todas las fases, sesiones, hitos y dependencias.

**Generado:** martes 02 de junio de 2026, 22:00 H Ecuador
**Estado actual:** punto exacto marcado con `[ESTAS AQUI]`
**Cubre:** Fases 0 a 4 (Setup, Fase 1, Compliance, Deploy, SEO/Aurora)

---

## 1. Diagrama maestro del proyecto

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                     PROYECTO SITIO BARRERA GLOBAL                            │
│                  Inicio: 23/05/2026 — Deploy estimado: Julio 2026            │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 0 — SETUP INICIAL (Sesiones 0-3)                                       │
│  Status: 100% COMPLETADA                                                     │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│  Sesion 0 (23/05) ──► Informe Consolidado + Brand Book V17                  │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 1 (24/05) ──► Setup local + repo GitHub + pwsh 7 + CLAUDE.md        │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 2 (25/05 AM) ──► Estrategia archivos largos + limpieza knowledge    │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 3 (25/05 PM) ──► HITO 01: Gate 0 + red Docker sitio_bg_net          │
│       │                                                                      │
│       ▼                                                                      │
│  CIERRE FASE 0 ─► PLAN-MAESTRO-v2.md generado                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 1 — SITIO WEB BASE (Sesiones 4-7)                                      │
│  Status: 95% COMPLETADA (Sesion 7 pendiente)                                 │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│  Sesion 4 (26/05) ──► BLOQUES 0-3                                            │
│       │                                                                      │
│       ├─ BLOQUE 0: Pre-flight                                                │
│       ├─ BLOQUE 1: Scaffolding (Astro 6 + Tailwind 4 + React 19)             │
│       ├─ BLOQUE 2: Sistema de diseno (tokens.css + global.css)               │
│       └─ BLOQUE 3: Layout + Logo + Header + Footer                           │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 5 (01-02/06) ──► BLOQUES 4-6                                         │
│       │                                                                      │
│       ├─ BLOQUE 4: Home dinamica + foto + 3 productos + animaciones          │
│       ├─ BLOQUE 5: /privacidad LOPDP Art. 12                                 │
│       └─ BLOQUE 6: Lighthouse + descubrimiento legal + actualizacion docs    │
│       │   │                                                                  │
│       │   └─► [ESTAS AQUI] 02/06/2026 22:00 H                                │
│       │       Falta: commit final + push + knowledge update                  │
│       ▼                                                                      │
│  Sesion 6 (proxima) ──► Cierre administrativo                                │
│       │                                                                      │
│       ├─ Commit final con 3 docs (Plan + Pendientes + Errores v2.0)          │
│       ├─ Push a origin/main                                                  │
│       └─ Knowledge update Claude.ai (3 docs subidos, viejos eliminados)      │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 7 ──► Paginas adicionales                                            │
│       │                                                                      │
│       ├─ /sobre-mi extendida (bio profesional + historia)                    │
│       └─ /contacto con form provisional (sin backend en Fase 1)              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 1B — COMPLIANCE LEGAL (Sesiones 8-10)                                  │
│  Status: 0% (bloqueado en parte por SCVS, parte si se puede avanzar)         │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│  Sesion 8 ──► Politica Privacidad v2 cerrando 7 huecos H-01                  │
│       │                                                                      │
│       ├─ Base legal consentimiento expreso para datos de salud (Art. 4)      │
│       ├─ Aurora declarada como decision automatizada (Art. 12.4)             │
│       ├─ Derechos: limitacion + no decisiones automatizadas + revocacion     │
│       ├─ Datos completos: direccion legal + telefono                         │
│       ├─ DPD mencionado (aunque pendiente registro hasta SCVS)               │
│       └─ Transferencias internacionales con Resolucion SPDP-SPD-2026-0004-R  │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 9 ──► Politica de Cookies + Consent Banner                           │
│       │                                                                      │
│       ├─ Banner cookies con opt-in (no opt-out)                              │
│       ├─ Consent Mode v2 implementado                                        │
│       └─ Decision sitio antiguo Meta Pixel (apagar / migrar / compliance)    │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 10 ──► Terminos y Condiciones                                        │
│       │                                                                      │
│       ├─ Limitacion de responsabilidad (no es asesoria vinculante)           │
│       ├─ Propiedad intelectual                                               │
│       └─ Jurisdiccion Ecuador + foro competente                              │
│       │                                                                      │
│       ▼                                                                      │
│  Sesion 11 ──► Validacion legal humana                                       │
│       │                                                                      │
│       └─ Reunion con abogado humano (~$80-150)                               │
│           ├─ Revisar Privacidad v2                                           │
│           ├─ Revisar T&C                                                     │
│           ├─ Confirmar atribucion Insurance Trust                            │
│           └─ Aprobar para deploy publico                                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 2 — DEPLOY PRODUCCION (Sesion 12)                                      │
│  Status: 0% (Aurora intocable, todo en sitio_bg_net)                         │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│  Pre-flight:                                                                 │
│       │                                                                      │
│       ├─ Validacion legal completa (Sesion 11)                               │
│       └─ Gate 0 en VPS: Aurora + FBE Sport sanos                             │
│       │                                                                      │
│       ▼                                                                      │
│  Setup deploy:                                                               │
│       │                                                                      │
│       ├─ Dockerfile multi-stage para Astro (build + nginx alpine)            │
│       ├─ docker-compose.yml conectado a sitio_bg_net                         │
│       ├─ Variables de entorno en /opt/sitio-bg/.env (chmod 600)              │
│       └─ Caddyfile compartido con bloque para barreraglobal.com              │
│       │                                                                      │
│       ▼                                                                      │
│  DNS + SSL:                                                                  │
│       │                                                                      │
│       ├─ Cloudflare DNS: barreraglobal.com A → 212.85.14.172                 │
│       ├─ www.barreraglobal.com CNAME → barreraglobal.com                     │
│       └─ Caddy auto-provisiona SSL Let's Encrypt                             │
│       │                                                                      │
│       ▼                                                                      │
│  Validacion produccion:                                                      │
│       │                                                                      │
│       ├─ HTTP 200 en los 5 dominios (Aurora + FBE Sport + barreraglobal.com) │
│       ├─ Lighthouse PageSpeed Insights en barreraglobal.com                  │
│       ├─ Test movil + desktop                                                │
│       └─ Validar tracking básico (sin compromiso de privacidad)              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 3 — SEO + AEO + AUTORIDAD (Sesiones 13-19+)                            │
│  Status: 0% (lo mas largo, 3-6 meses constantes)                             │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│  Sesion 13 ──► Setup SEO tecnico                                             │
│       │                                                                      │
│       ├─ Google Search Console verificado                                    │
│       ├─ Sitemap.xml + robots.txt                                            │
│       ├─ JSON-LD enriquecido (Person + InsuranceAgent + Organization + FAQ)  │
│       └─ Open Graph + Twitter Cards por pagina                               │
│       │                                                                      │
│       ▼                                                                      │
│  Sesiones 14-18 ──► Paginas por producto                                     │
│       │                                                                      │
│       ├─ /seguros-vida (con FAQs y comparativa)                              │
│       ├─ /seguros-salud-nacional                                             │
│       ├─ /seguros-salud-internacional                                        │
│       ├─ /inversion-offshore                                                 │
│       └─ /aprende (blog principal)                                           │
│       │                                                                      │
│       ▼                                                                      │
│  Sesiones 19+ ──► Blog constante                                             │
│       │                                                                      │
│       ├─ 2-4 articulos por mes en /aprende                                   │
│       ├─ AEO (Answer Engine Optimization) para Perplexity/ChatGPT            │
│       └─ Linkbuilding organico mediante valor real                           │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FASE 4 — INTEGRACION AURORA + CONVERSION (Continua)                         │
│  Status: 0% (despues de FASE 3 madura)                                       │
│  ────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│       ┌─ Form /contacto ──► webhook n8n ──► Aurora                           │
│       │                                                                      │
│       ├─ UTM tracking end-to-end (UTM en URL → form → Aurora → conversion)   │
│       │                                                                      │
│       ├─ Lead scoring automatico                                             │
│       │                                                                      │
│       └─ Dashboard de metricas (visitas → leads → conversiones)              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
                            FIN DEL ROADMAP
                       (proyecto en operacion continua)
```

---

## 2. Timeline visual con fechas estimadas

```
Mayo 2026                          Junio 2026                   Julio 2026
│                                  │                            │
├─ Sem 22 ─────────────────────────┼───────────────────────────┼──── Sem 31
│                                  │                            │
│ ●Sem 21 - Sesiones 0-3 (FASE 0)  │                            │
│ ●Sem 22 - Sesion 4 (Fase 1 D1)   │                            │
│                                  │                            │
│                                  │ ●Sem 23 - Sesion 5 (D2)    │
│                                  │   [ESTAS AQUI 02/06]       │
│                                  │ ●Sem 24 - Sesion 6 (cierre)│
│                                  │ ●Sem 25 - Sesion 7 (paginas)
│                                  │                            │
│                                  │     ●Sem 26-27 - Sesiones 8-10 (Compliance)
│                                  │     ●Sem 28-29 - Sesion 11 (Abogado)
│                                  │     ●Sem 30 - Sesion 12 (Deploy)
│                                  │                            │
│                                  │                            │ ●Sem 31 - SCVS personal Francisco
│                                  │                            │   ↓
│                                  │                            │ ●Registro DPD ante SPDP
│                                  │                            │ ●Actualizar credencial real en sitio
│                                  │                            │
└── FASE 0 ─── FASE 1 ─── FASE 1B ─── FASE 2 ─── FASE 3 ───────────────────►
                                                                  (3-6 meses)
```

---

## 3. Donde estamos exactamente (02/06/2026 22:00 H)

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                       PUNTO EXACTO EN EL PROYECTO                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Fase:                FASE 1 (Sitio web base)                                ║
║  Sesion:              5 — dia 2                                              ║
║  Bloque:              6 (Cierre administrativo)                              ║
║  Sub-paso completado: 1, 2, 3 (Fix 572619, Plan Maestro, Pendientes)         ║
║  Sub-paso en curso:   4 (Errores y aprendizajes)                             ║
║  Sub-paso pendiente:  5 (Knowledge update)                                   ║
║  Sub-paso pendiente:  6 (Commit final + push)                                ║
║  Sub-paso pendiente:  7 (Bitacora oficial cerrada)                           ║
║                                                                              ║
║  Avance Fase 1:       95% completada                                         ║
║  Avance proyecto:     20% completada                                         ║
║                                                                              ║
║  Bloqueos:                                                                   ║
║  - Ninguno tecnico hoy                                                       ║
║  - Pendiente SCVS personal Francisco (Julio-Agosto 2026)                     ║
║                                                                              ║
║  Riesgos altos:                                                              ║
║  - H-02 mora tecnica DPD (5+ meses): se cierra con SCVS                      ║
║  - H-03 sitio antiguo Meta Pixel: decision en Sesion 9                       ║
║                                                                              ║
║  Riesgos medios:                                                             ║
║  - 7 huecos LOPDP en Privacidad v1: se cierran en Sesion 8                   ║
║  - Sitio NO esta publico todavia (es local solo): protege riesgo legal       ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 4. Dependencias criticas (que bloquea que)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  DEPENDENCIAS QUE IMPORTAN                                              │
└─────────────────────────────────────────────────────────────────────────┘

  Sesion 6 (commit final)
       │
       └──► HABILITA: Sesion 7 (sobre-mi + contacto)
                          │
                          └──► HABILITA: Sesion 8 (Privacidad v2)
                                              │
                                              └──► HABILITA: Sesion 9 (Cookies)
                                                                  │
                                                                  └──► HABILITA: Sesion 10 (T&C)
                                                                                      │
                                                                                      └──► HABILITA: Sesion 11 (Abogado)
                                                                                                          │
                                                                                                          └──► HABILITA: Sesion 12 (DEPLOY)


  Bloqueos por SCVS personal de Francisco (Julio-Agosto 2026):
  
       SCVS personal ──► DESBLOQUEA: registro DPD ante SPDP (cierra H-02)
                    └──► DESBLOQUEA: actualizar credencial real en sitio (cierra E-23 fase 2)


  Bloqueos por validacion legal humana (Sesion 11):
       
       Reunion abogado ──► DESBLOQUEA: Sesion 12 deploy produccion
                       └──► VALIDA: Privacidad v2 + T&C + atribucion Insurance Trust


  Lo que NO bloquea nada (se puede hacer en paralelo):
       
       Registro de marca SENADI (P-40, ~$224, 6-9 meses)
       Diseno de logo vectorial final (reemplazo placeholder D-23)
       Optimizacion fuentes Fontsource (P-32, ahorra ~500 KB)
```

---

## 5. Flujo de un commit tipico (disciplina de trabajo)

```
                  ┌──────────────────────────────────────┐
                  │  DECISION: hacer cambio X            │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  1. git pull origin main             │
                  │     git status (working tree clean?) │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  2. Backup del archivo (.bak con ts) │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  3. Modificar (str_replace o crear)  │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  4. Validar:                         │
                  │     - UTF-8 sin BOM                  │
                  │     - HTML balanceado (si .astro)    │
                  │     - Conteos esperados (regex)      │
                  │     - Tamano del archivo razonable   │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  5. Test visual (npm run preview)    │
                  │     en incognito (Edge o Chrome)     │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  6. git status --short               │
                  │     (revisar QUE va al stage)        │
                  │     Excluir manualmente *.bak.*      │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  7. git add <paths especificos>      │
                  │     git commit -m "tipo(scope): X"   │
                  │     git push origin main             │
                  └──────────────┬───────────────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────────────┐
                  │  8. Verificar push exitoso           │
                  │     git log --oneline -5             │
                  └──────────────────────────────────────┘
```

---

## 6. Flujo del usuario en el sitio (UX)

```
                  ┌────────────────────────────────────────────┐
                  │  USUARIO LLEGA A barreraglobal.com         │
                  │  via: SEO, redes, recomendacion, anuncio   │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ▼
                  ┌────────────────────────────────────────────┐
                  │  HOME (/)                                   │
                  │  - Hero con foto + bio                      │
                  │  - 3 productos (Vida/Salud/Inversion)       │
                  │  - CTA: Conversar por WhatsApp              │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ├─► WhatsApp Aurora ────┐
                                    │                       │
                                    ▼                       │
                  ┌────────────────────────────────────────────┐
                  │  /sobre-mi  /seguros-X  /aprende           │
                  │  (Fase 1 y Fase 3)                         │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ├─► WhatsApp Aurora ────┐
                                    │                       │
                                    ▼                       ▼
                  ┌────────────────────────────────────────────┐
                  │  CONTACTO via:                              │
                  │  - Form /contacto (Fase 1 sin backend)      │
                  │  - WhatsApp Aurora (siempre disponible)     │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ▼
                  ┌────────────────────────────────────────────┐
                  │  AURORA atiende (WhatsApp)                  │
                  │  - Califica lead                            │
                  │  - Responde dudas comunes                   │
                  │  - Pasa a Francisco si es serio             │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ▼
                  ┌────────────────────────────────────────────┐
                  │  FRANCISCO cierra (Fase 4)                  │
                  │  - Reunion personalizada                    │
                  │  - Cotizacion al carrier                    │
                  │  - Emision via Insurance Trust              │
                  └────────────────────────────────────────────┘
```

---

## 7. Mapa de archivos del proyecto

```
sitio-bg-infra/                   ← C:\Users\panch\projects\sitio-bg-infra\
│
├── docs/                          ← Documentacion viva
│   ├── PLAN-MAESTRO-v2.md         (77.9 KB) ★ documento principal
│   ├── PENDIENTES.md              (39.5 KB) ★ que falta hacer
│   ├── ERRORES-Y-APRENDIZAJES.md  (24.4 → 32 KB v2.0 pendiente)
│   ├── IDENTIDAD-MARCA.md         (24.7 KB) Brand Book V17 detallado
│   └── *.bak.* (ignorados gitignore)
│
├── web/                           ← Sitio Astro
│   ├── package.json
│   ├── astro.config.mjs
│   ├── tsconfig.json
│   ├── public/
│   │   └── images/
│   │       └── francisco-barrera.jpg (551 KB, foto IA D-24)
│   └── src/
│       ├── styles/
│       │   ├── tokens.css           (4.6 KB)
│       │   └── global.css           (7.3 KB con animaciones CSS puras)
│       ├── layouts/
│       │   └── Layout.astro         (5.1 KB con SEO + 3 JSON-LD)
│       ├── components/
│       │   ├── Logo.astro
│       │   ├── Header.astro         (6.3 KB sticky)
│       │   └── Footer.astro         (9.4 KB)
│       └── pages/
│           ├── index.astro          (15.5 KB)
│           └── privacidad.astro     (16.9 KB)
│
├── infra/                         ← Pendiente Fase 2
│   └── (Dockerfile + compose + Caddyfile)
│
├── .gitignore                     (endurecido con *.bak.*)
├── CLAUDE.md                      (instrucciones para Claude Code)
└── README.md                      (pendiente generar)
```

---

## 8. Flujo de descubrimiento legal (lo mas importante)

```
                  ┌────────────────────────────────────────────┐
                  │  BLOQUE 6 (02/06/2026)                      │
                  │  Francisco consulta analisis legal IA       │
                  │  externo sobre su sitio + LOPDP             │
                  └─────────────────┬──────────────────────────┘
                                    │
                                    ▼
                  ┌────────────────────────────────────────────┐
                  │  RESPUESTA legal: 5 hallazgos criticos      │
                  └─────────────────┬──────────────────────────┘
                                    │
            ┌───────────────────────┼────────────────────────┐
            │                       │                        │
            ▼                       ▼                        ▼
  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
  │  H-01: 7 huecos   │  │  H-02: DPD no     │  │  H-03: Sitio      │
  │  Privacidad v1    │  │  registrado SPDP  │  │  antiguo Meta     │
  │  (Sesion 8)       │  │  (Julio-Agosto)   │  │  Pixel (Sesion 9) │
  └───────────────────┘  └───────────────────┘  └───────────────────┘
            │                       │                        │
            │                       │                        │
            ▼                       ▼                        ▼
  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
  │  H-04: Aurora no  │  │  H-05: Credencial │  │                   │
  │  declarada como   │  │  572619 mal       │  │                   │
  │  decision IA      │  │  atribuida        │  │                   │
  │  (Sesion 8)       │  │  RESUELTO         │  │                   │
  └───────────────────┘  │  (E-23)           │  │                   │
                         └───────────────────┘  │                   │
                                    │           │                   │
                                    ▼                                
                         ┌───────────────────┐
                         │  Fix urgente:     │
                         │  remover 572619   │
                         │  3 archivos       │
                         │  Commit 451121f   │
                         └───────────────────┘
                                    │
                                    ▼
                         ┌───────────────────┐
                         │  Generar regla    │
                         │  R-38: cruzar     │
                         │  analisis legal   │
                         │  con fuentes ind. │
                         └───────────────────┘
```

---

## 9. Estructura de las paginas que tendra el sitio

```
                    HOME (/)
                       │
        ┌──────────────┼─────────────────────┐
        │              │                     │
        ▼              ▼                     ▼
   /sobre-mi      /productos/           /aprende
   (Sesion 7)         │                 (Sesion 19+)
                      │                     │
                      ├── /vida              ├── /articulo-1
                      ├── /salud-nacional    ├── /articulo-2
                      ├── /salud-intl        └── /articulo-N
                      └── /inversion
                      (Sesiones 14-18)


                    LEGAL (footer)
                       │
        ┌──────────────┼─────────────────────┐
        │              │                     │
        ▼              ▼                     ▼
   /privacidad    /cookies          /terminos
   v2 (Sesion 8)  (Sesion 9)        (Sesion 10)


                    CONTACTO
                       │
        ┌──────────────┼─────────────────────┐
        │              │                     │
        ▼              ▼                     ▼
   /contacto      WhatsApp           Form → Aurora
   (Sesion 7)     Aurora            (Fase 4)
                  (botones)
```

---

## 10. Decision en encrucijadas (lo que aun no se decide)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  DECISION 1: que hacer con sitio antiguo Meta Pixel (H-03)              │
│  Cuando: Sesion 9                                                       │
│                                                                         │
│  Opcion A: APAGAR sitio antiguo completamente                           │
│           Pro: simple, sin riesgo LOPDP, ahorra mantencion              │
│           Con: pierde trafico actual + SEO acumulado                    │
│                                                                         │
│  Opcion B: MIGRAR a archive estatico sin Pixel                          │
│           Pro: mantiene SEO, no captura datos                           │
│           Con: hay que rehacer URLs si hay backlinks                    │
│                                                                         │
│  Opcion C: AGREGAR compliance basico al sitio antiguo                   │
│           Pro: minimo esfuerzo, mantiene todo                           │
│           Con: doble mantencion del compliance                          │
│                                                                         │
│  RECOMENDADO: Opcion B (Francisco tiene politicas listas)               │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│  DECISION 2: que abogado humano contratar (Sesion 11)                   │
│  Cuando: antes de deploy publico                                        │
│                                                                         │
│  Opcion A: el abogado que ya pago en otro proyecto                      │
│           Pro: ya conoce a Francisco, confianza establecida             │
│           Con: hay que ver su especialidad (LOPDP + seguros)            │
│                                                                         │
│  Opcion B: buscar abogado especializado en LOPDP + financiero           │
│           Pro: experto en lo especifico que necesitamos                 │
│           Con: costo mayor, hay que filtrar                             │
│                                                                         │
│  RECOMENDADO: A si tiene experiencia LOPDP, B si no                     │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│  DECISION 3: cuando registrar marca SENADI                              │
│  Cuando: en paralelo, no bloquea nada                                   │
│                                                                         │
│  Costo: ~$224                                                           │
│  Plazo: 6-9 meses                                                       │
│  Beneficio: proteccion legal del nombre "Barrera Global"                │
│                                                                         │
│  RECOMENDADO: iniciar despues del deploy publico (Sesion 13+)           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Riesgos y mitigaciones

```
RIESGO ALTO                           MITIGACION ACTIVA
─────────────────────                 ────────────────────────────────────

Mora tecnica DPD (H-02)        →     Documentada, bloqueada por SCVS,
                                     se cierra apenas llegue
                                     
Sitio antiguo sin compliance   →     Confirmado no captura datos
(H-03)                               sensibles, decision en Sesion 9


RIESGO MEDIO                          MITIGACION ACTIVA
─────────────────────                 ────────────────────────────────────

7 huecos LOPDP Privacidad v1   →     Documentados, NO desplegado en
(H-01)                               publico, se corrigen en Sesion 8

Aurora no declarada como IA    →     Se agrega a Privacidad v2 en
(H-04)                               Sesion 8


RIESGO BAJO                           MITIGACION ACTIVA
─────────────────────                 ────────────────────────────────────

Cliente Chrome rompe pegado    →     pwsh 7 + bloques chicos +
de scripts en PowerShell             estrategia create_file de Claude

Foto IA puede sentirse fria    →     D-24 dice "provisional", se
                                     puede reemplazar por foto real
```

---

## 12. Indicadores de salud del proyecto

```
INDICADOR                          ESTADO      OBJETIVO

Commits limpios pusheados            8 ✓        100% verde
UTF-8 sin BOM en todos los .md       ✓          100%
Tests visuales pre-commit            ✓          100% incognito
Errores documentados                 23 ✓       todos con regla
Near-miss detectados                 6 ✓        todos antes del dano
Aurora downtime                      0 min      cero (objetivo)
Re-trabajo total acumulado           ~115 min   bajo (10% del tiempo)
Lighthouse local promedio            98.5/100   excelente
Compliance LOPDP                     65%        100% post-Sesion 8
Compliance SCVS                      sin SCVS   100% post-credencial
Sitio publicado                      no         si (Sesion 12)
```

---

## 13. Si manana abro este documento de cero

Lo que sabras al leerlo:

1. **Donde estabas:** punto exacto Sesion 5 dia 2, BLOQUE 6 al 95%
2. **Que ya hiciste:** scaffold + diseno + layout + home + privacidad + Lighthouse + descubrimientos legales
3. **Que sigue:** commit final + Sesion 6 (cierre admin) + Sesion 7 (sobre-mi y contacto)
4. **Que NO tocar:** Aurora, containers existentes, decision sitio antiguo (hasta Sesion 9)
5. **Que esperar:** SCVS personal Julio-Agosto desbloquea registro DPD
6. **Que documentar:** todos los errores van a ERRORES-Y-APRENDIZAJES.md con regla

---

**Fin del diagrama de flujo.**

**Recursos relacionados:**
- Estado completo: `ESTADO-GENERAL-PROYECTO.md`
- Errores y reglas: `ERRORES-Y-APRENDIZAJES.md` v2.0
- Plan operativo: `PLAN-MAESTRO-v2.md`
- Que falta: `PENDIENTES.md`
