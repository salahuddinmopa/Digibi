# Digibly Group Website

Full production website for **Digibly Group** — a Canberra-based digital agency and governance consultancy.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom design tokens
- **Framer Motion** (scroll animations, hero animation)
- **React Hook Form + Zod** (form validation)
- **NextAuth.js** (client portal authentication)
- **Resend** (transactional email)
- **Lucide React** (icons)
- **Google Fonts** — Cormorant Garamond + DM Sans

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXTAUTH_SECRET` | Random secret (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Full URL (e.g. `https://digiblygroup.com.au`) |
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `ADMIN_EMAIL` | Email to receive contact/quote submissions |
| `NEXT_PUBLIC_SITE_URL` | Public URL for sitemap and OG tags |

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Client Portal

Access at `/client-portal`.

**Demo credentials:**
- Email: `admin@digiblygroup.com.au`
- Password: `digibly2025`

Portal data uses mock JSON in `data/portal-mock.ts`. Replace with Neon Postgres (Vercel Marketplace) for production.

---

## Email Setup (Resend)

1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create an API key
4. Set `RESEND_API_KEY` in `.env.local`

Without a real API key, form submissions complete successfully but emails are silently skipped.

---

## Project Structure

```
app/                    Next.js App Router pages
  about/
  services/             Overview + 7 individual service pages
  portfolio/
  pricing/
  blog/                 Listing + [slug] post pages
  contact/
  get-a-quote/          Multi-step quote form
  client-portal/        Protected portal (dashboard, projects, invoices, messages, settings)
  invoice/[id]/         Invoice view page
  terms/ privacy/
  api/                  contact + quote API routes
components/
  layout/               Navbar, Footer
  ui/                   PageHero, ServiceCard, BlogCard, PricingCard, etc.
  forms/                ContactForm, QuoteForm (multi-step)
  sections/             HeroSection, ServicePageContent
  portal/               PortalSidebar, PortalProvider
data/                   services, blog-posts, portfolio, testimonials, pricing, portal-mock
lib/                    auth, email, validations
```

---

## Deployment on Vercel

1. Push repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables under **Settings → Environment Variables**
4. Deploy

Set `NEXTAUTH_URL` to your production domain. SSL is automatic.

---

## Content Updates

| What | Where |
|---|---|
| Services | `data/services.ts` |
| Blog posts | `data/blog-posts.ts` |
| Portfolio | `data/portfolio.ts` |
| Testimonials | `data/testimonials.ts` |
| Pricing | `data/pricing.ts` |
| Company info | `components/layout/Footer.tsx`, `app/contact/page.tsx` |
| Design tokens | `tailwind.config.ts`, `app/globals.css` |
| Portal mock data | `data/portal-mock.ts` |
