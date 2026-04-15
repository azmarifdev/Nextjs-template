# Next.js Hybrid Starter

A clean, scalable, and beginner-friendly Next.js App Router starter template.

## Quick Start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`

## Features

- Clean App Router structure with modular architecture
- Marketing pages (`/` and `/about`) for demo-ready presentation
- Lightweight i18n setup with English (`en`) and Bangla (`bn`)
- Demo UI components (`DemoBanner`, `DemoBadge`)
- Zod-based environment validation (`src/lib/env.ts`)
- Lightweight logger wrapper (`src/lib/logger.ts`)
- Simple MongoDB connection layer (`src/lib/db.ts`)
- Minimal testing structure (`tests/unit`, `tests/e2e`)

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm test
pnpm test:e2e
pnpm lint
pnpm typecheck
```

## Folder Structure

```bash
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
  components/
    common/
      demo-banner.tsx
      demo-badge.tsx
  i18n/
    config.ts
    messages/
      en.json
      bn.json
  lib/
    env.ts
    logger.ts
    db.ts
tests/
  unit/
  e2e/
public/
  assets/
    logo.png
    banner.png
```

## Demo Screenshots

Landing preview:

![Landing](./public/assets/banner.png)

Logo asset:

![Logo](./public/assets/logo.png)

## Environment

Minimum required variable:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Optional for database usage:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/starter
```

## Developer Experience Notes

- Keep feature code inside existing module boundaries.
- Avoid adding advanced systems until needed.
- Prefer small files with clear names and focused responsibilities.
