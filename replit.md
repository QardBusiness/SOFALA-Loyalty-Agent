# SOFALA Loyalty Agent

A modern Point of Sale (POS) interface with an AI Loyalty Agent called **Katlyn**.

## Stack
- **Next.js** (App Router) — full-stack React framework
- **Tailwind CSS** — utility-first styling
- **lucide-react** — icon library

## Architecture
- `app/page.js` — main POS UI (product grid + cart panel, fully client-side)
- `app/api/cashback/route.js` — Next.js API route that computes cashback recommendations
- `app/layout.js` — root layout with global CSS

## Features
- Two-column POS layout (70% product grid / 30% cart panel)
- 4 products with tap-to-add, quantity controls, and remove
- Checkout triggers POST `/api/cashback` with order total
- Katlyn modal with glassmorphism displays recommended cashback
- Error toast if API is unreachable
- Loading/spinner state during checkout

## User Preferences
- Next.js App Router preferred
- Single-file component approach for MVP iterations
- Light theme, minimalist design
