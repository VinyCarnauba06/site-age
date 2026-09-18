# AGENTS.md

## Project Overview
AGE (Aliança Gestão Empresarial) — a static React 18 + Vite 4 marketing website for a condominium management company in Maceió, Brazil. Frontend-only; no backend, database, or external APIs.

## Dev Environment
- **Run:** `docker compose -f docker-compose.base44.yml up -d`
- **Port:** 3000 (mapped from Vite dev server)
- **Stack:** Node 20 + Vite 4.5 dev server with HMR, bind-mounted source
- **No secrets required** — no external service credentials needed.

## Quirks
- `vite.config.js` has `open: true` which crashes in a container (no browser). The compose command overrides with `--no-open`.
- Vite 4.5 has no `allowedHosts` feature, so only `--host 0.0.0.0` is needed for external access.
- `node_modules` is a named volume to persist installed deps across restarts.

## Verify
- `curl -s http://localhost:3000` returns the HTML with Vite client scripts (live source, not prebuilt).
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/src/main.jsx` → 200.
