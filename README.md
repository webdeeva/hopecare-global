# HopeCare Global Inc — Website

> Advancing early detection, education, and access to care through
> ovarian cancer awareness and global outreach.
> **www.hopecareglobal.org**

Built with **Next.js 16** (App Router, Turbopack), **React 19**,
**Tailwind CSS v4**, **motion** (Framer Motion), and **lucide-react**.

---

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx       # fonts (Inter, Playfair, Dancing Script), metadata
│   ├── page.tsx         # composes all sections
│   └── globals.css      # brand tokens, gradients, keyframes
└── components/
    ├── Logo.tsx         # SVG logo (globe + ribbon)
    ├── Navbar.tsx       # sticky nav with scroll state + mobile drawer
    ├── Hero.tsx         # headline + animated orbital globe/ribbon
    ├── Mission.tsx
    ├── Stats.tsx        # animated counters (1 in 78, 80%, 2.3×, 314K)
    ├── Programs.tsx     # 4-pillar program grid
    ├── Marquee.tsx      # awareness phrases ticker
    ├── Founder.tsx      # Dr. Petrina Harrison bio + contact
    ├── GetInvolved.tsx  # Donate / Volunteer / Spread Awareness
    ├── Newsletter.tsx   # email capture
    └── Footer.tsx
```

---

## Brand system

Defined as CSS custom properties in `src/app/globals.css` and exposed to
Tailwind via `@theme inline`. Use as `bg-teal`, `text-navy`,
`from-green`, etc.

| Token | Hex | Use |
|---|---|---|
| `teal` | `#0F8B9E` | Primary action, links, accents |
| `teal-deep` | `#086B7D` | Hover, body emphasis |
| `teal-bright` | `#14B5CC` | Highlights, gradients |
| `navy` | `#0A2540` | Primary text, "Donate" button |
| `navy-deep` | `#061B30` | Footer, deep ocean sections |
| `green` | `#7CB342` | Awareness accent |
| `green-bright` | `#A4D65E` | Gradient terminus |
| `cream` | `#FAFAF7` | Page background |
| `mist` | `#F0F7F9` | Section break background |

Fonts:

- **Inter** — body
- **Playfair Display** — display / headlines (`font-display`)
- **Dancing Script** — accent script for "HopeCare", brand voice
  highlights (`font-script`)

---

## Dropping in real assets

### Founder photo

The Founder section currently shows a glowing "PH" placeholder. To swap in
Dr. Harrison's actual photo:

1. Save the image as `public/founder.jpg` (a 4:5 portrait works best —
   roughly 800×1000 or larger).
2. Open `src/components/Founder.tsx` and replace the
   `<PortraitPlaceholder />` block (and the `PortraitPlaceholder` function
   at the bottom) with a Next.js `<Image>`:

```tsx
import Image from "next/image";

// inside the portrait card:
<Image
  src="/founder.jpg"
  alt="Dr. Petrina Harrison"
  fill
  priority
  sizes="(min-width: 1024px) 45vw, 100vw"
  className="object-cover"
/>
```

### OG / social card

Drop a 1200×630 image at `public/og.png` then add
`openGraph.images: ["/og.png"]` in `src/app/layout.tsx`.

### Favicon

Replace `src/app/favicon.ico` with the HopeCare logo at 32×32 / 48×48.

---

## Wiring the real integrations

The site is intentionally static-first so it deploys anywhere. The
following spots are stubs ready to be wired up:

| Component | What to wire |
|---|---|
| `Newsletter.tsx` `onSubmit` | Mailchimp / ConvertKit form action, or a server action POSTing to your provider. |
| `GetInvolved.tsx` `#donate` link | Stripe Checkout / Donorbox / Give Lively URL. |
| `Footer.tsx` social links | Real Instagram / LinkedIn / Facebook URLs. |
| `Navbar.tsx` "Donate" CTA | Same as above — point to your processor. |

> Heads-up: this project is a good candidate for the **Composio + Claude
> Agent SDK** pattern if you want Gmail-based contact handling, Stripe
> donation flows, or a small admin agent. See
> `~/.claude/projects/.../memory/composio-setup.md` for the boilerplate.

---

## Deploy

Vercel is the natural home (Next.js 16 + Turbopack supported out of the
box). Push the repo, import the project, set the domain to
`hopecareglobal.org`, done.

For Netlify: use the Next.js runtime preset, no config needed.

---

## License

© HopeCare Global Inc. All rights reserved.
