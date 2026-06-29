# SECOND SKIN — Leather Jacket Storefront

A complete, responsive, editorial e-commerce front-end for a premium leather jacket
brand. Built with plain HTML, CSS, and JavaScript — no build step, no dependencies.

> *Wear it like it was always yours.*

---

## What's included

| Page | File | Highlights |
|------|------|-----------|
| Home | `index.html` | Hero, featured collections, bestseller rail, craft story, reassurance, social proof, journal teaser, email capture |
| Shop | `shop.html` | Live category + flag filtering (URL-driven: `?cat=Biker`, `?f=New`, `?f=Bestseller`) |
| Product | `product.html` | Gallery, size selector, add-to-bag, accordion, related rail (`?id=noir-biker`) |
| Collections | `collections.html` | Three editorial collection stories |
| Our Craft | `craft.html` | Brand/quality storytelling |
| Journal | `journal.html` | Editorial blog grid |

**Functional cart** (slide-out drawer, persisted in `localStorage`), mega menu with
hover-swapping feature image, mobile menu, scroll reveal animations, and toast notifications.

## Run it locally

From this folder:

```bash
python3 -m http.server 8765
# then open http://localhost:8765
```

Or just open `index.html` in a browser (cart still works).

## Project structure

```
.
├── index.html  shop.html  product.html
├── collections.html  craft.html  journal.html
├── css/styles.css        # full design system + responsive
└── js/
    ├── products.js       # product catalog (edit me)
    ├── cart.js           # cart + drawer + checkout hook
    └── main.js           # shared header/footer/nav/renderers
```

## Brand quick reference

- **Fonts:** Fraunces (display) + Inter (UI) — loaded from Google Fonts.
- **Palette:** Onyx `#0A0A0A` · Bone `#F4F1EC` · Smoke `#1C1C1C` · Cognac `#7B4B2A` · Sand `#C9B79C` · Stone `#8A857D`. All defined as CSS variables in `css/styles.css` (`:root`).

## Before you launch — checklist

1. **Replace photography.** All images are Unsplash placeholders hot-linked via URL.
   Swap the `img`/`alt`/`gallery` URLs in `js/products.js` and the hardcoded URLs in the
   HTML with your own studio + on-body shots (use the AI prompts from the brand doc to
   generate them). Host them in `/assets`.
2. **Connect real checkout.** `checkout()` in `js/cart.js` is a stub. Wire it to one of:
   - **Stripe** — create a Checkout Session / Payment Link and redirect.
   - **Shopify Buy Button / Hydrogen** — recommended; best-in-class checkout for high-ticket.
   - **Snipcart / Foxy** — drop-in cart for static sites.
3. **Hook up the email forms.** The newsletter forms currently just show a toast.
   Point them at Klaviyo / Mailchimp / Shopify Email.
4. **Wire the Fit Finder** (`openFit()` in `product.html`) to a real size-quiz or modal.
5. **Add real content** for Shipping, Returns, Size Guide, Contact, FAQ, Privacy, Terms
   (currently `#` links in the footer).
6. **SEO/meta:** add Open Graph tags, a favicon, `sitemap.xml`, and analytics.

## Deploy (static hosting)

Drag-and-drop or connect this folder to any static host:

- **Netlify** — drag the folder onto app.netlify.com, or `netlify deploy`.
- **Vercel** — `vercel` in this directory.
- **Cloudflare Pages / GitHub Pages** — point at the repo root.

No environment variables or build command needed for the front-end.
