# Marketing Website Development Plan (paddy.systems)

## Goal
Create a calm, credible marketing site for a “change-readiness / systems planning” product, so you can:
- test positioning + language
- capture early interest (waitlist / contact)
- build authority without social platforms
- have a clean home for future product docs and posts

Non-goals (for v1):
- no complex interactivity
- no accounts/auth
- no blog engine (yet)
- no heavy animations
- no SEO/content grind

---

## Positioning (v1)
### One-line
**Turn “We want to do X, but don’t know how” into a safe, realistic plan.**

### Primary audience
- Head of Engineering / CTO / Principal Engineer
- Programme/Delivery leads on high-risk change

### Core promise
- reduce uncertainty
- reveal hidden risks
- provide sequence + guardrails

### Proof style
- diagrams, decision frameworks, short artefacts
- not opinions, not tutorials

---

## Information Architecture
### Pages (v1)
- `/` Home (primary conversion)
- `/white-labelling-readiness` Landing page for the first assessment (your wedge)
- `/writing` Index of posts (can be 0–3 initially)
- `/writing/[slug]` Simple articles (MDX later, or static for now)
- `/about` (optional, minimal)
- `/contact` or `/book` (single CTA destination)
- `/privacy` (if you add analytics/form processing)

Keep nav small:
- Product
- Writing
- Contact

---

## Conversion Strategy (no LinkedIn, no TikTok)
Primary CTA (pick one):
- **“Request an assessment”** (email form)
or
- **“Join the waitlist”** (simple email capture)

Secondary CTA:
- **“Read the white-labelling playbook”** (links to the landing page)

Tertiary CTA:
- Email link (mailto) for low friction

---

## Home Page Content Blueprint
### Hero
- Headline: outcome-first, calm
- Subhead: who it’s for + what you deliver
- CTA button + secondary link

### “What this is”
3 bullets:
- Readiness assessment
- Risk surfacing (named, explicit)
- Sequenced plan + guardrails

### “Who it’s for”
- teams about to take a big bet
- orgs doing white-labelling / multi-tenant changes
- leaders who need a defensible plan

### “What you get”
Deliverables as artefacts:
- readiness report (PDF/HTML)
- risk register
- phased sequence
- decision log (assumptions/unknowns)

### “How it works”
Simple 3-step:
1) capture system reality
2) surface risks + constraints
3) output plan + go/delay decision

### “Why this exists”
Short section calling out the common failure mode:
- white-labelling looks cosmetic, but it’s structural
- teams accidentally create forks, coupling, and operational pain

### Credibility
Options (use what you can safely claim):
- “Built and reviewed systems at scale”
- “Front-end lead on large platform”
- Replace with neutral if needed: “Senior engineer with a focus on production change”

### FAQ
- “Is this consulting?” (position it as productised assessment)
- “Do you integrate with our tooling?” (not required)
- “What size org?” (mid to large)
- “Timeline?” (e.g. 1–2 weeks for assessment delivery)

### Footer
- minimal links
- contact
- privacy

---

## White-Labelling Landing Page Blueprint (core wedge)
### Hero
- “White-labelling readiness assessment”
- “Know what will break before it breaks.”

### The trap
Short “what teams assume” vs “what happens”
- config sprawl
- feature divergence
- auth/tenant boundaries
- debugging/support complexity

### Assessment outputs (clear)
- tenant boundary decisions
- risk hotspots
- sequencing plan
- “don’t do this” list

### Example sections (non-confidential)
- sample risk statements
- sample plan headings
- sample decision matrix

### CTA
- request assessment / waitlist
- optional “send me a sample report” (manual fulfilment)

---

## Writing Section Plan (authority without volume)
Start with 2–4 “cornerstone” posts max:
- “White-labelling isn’t branding. It’s architecture.”
- “Tenant boundaries: the decision that decides everything.”
- “The sequencing mistake that creates long-term drag.”
- “Forking customers is a product decision, not a dev shortcut.”

Each post:
- 3–6 min read
- 1 diagram (optional)
- ends with a single CTA link back to assessment

---

## Tech Stack (clean + low maintenance)
Recommended:
- **Next.js (App Router) + Tailwind**
- Static where possible (fast + cheap hosting)
- Minimal client JS
- Content: start as plain TS objects or `.md` files; move to MDX later if needed

Form handling options:
- simplest: `mailto:` (zero backend)
- better: form post to a lightweight endpoint (Cloudflare Pages Functions / Vercel serverless)
- or a form provider (keeps ops at zero)

Analytics (optional):
- privacy-friendly (Plausible / Fathom) or none initially

---

## Design System (simple rules)
- One font family (plus mono for headings if you like)
- 2–3 type sizes only
- Single accent colour
- No gradients, no gimmicks
- Diagrams as simple SVGs or exported images

---

## SEO (minimal, correct, not obsessive)
Do:
- proper titles + meta descriptions
- OpenGraph tags
- sitemap.xml + robots.txt
- clean URLs
- fast pages (no heavy JS)
- name-based SEO (your name + “systems” + “readiness assessment”)

Avoid:
- keyword chasing
- weekly posting
- SEO-style filler

---

## Build Plan (phased)
### Phase 0 — Copy + structure (1–2 sessions)
- lock one-line positioning
- write hero + “what you get”
- draft white-labelling page bullets
- define CTA and contact path

Deliverable: final page outlines in markdown.

### Phase 1 — Site skeleton
- Next.js app
- Tailwind setup
- layout, nav, footer
- base typography + spacing tokens

Deliverable: navigable site with placeholder content.

### Phase 2 — Pages
- Home
- White-labelling landing page
- Contact
- Privacy (if needed)

Deliverable: content-complete v1.

### Phase 3 — “Writing” (optional for v1)
- add `/writing` index
- add 1–2 posts as static pages

Deliverable: authority baseline without committing to cadence.

### Phase 4 — Conversion + ops
- wire email capture (form provider or serverless endpoint)
- simple CRM: Airtable / Notion / even a spreadsheet
- confirmation email copy

Deliverable: leads captured reliably.

### Phase 5 — Launch checklist
- lighthouse pass
- mobile pass
- metadata + OG images
- 404 page
- sitemap
- domain + SSL
- basic monitoring (uptime ping optional)

Deliverable: live, stable, boring site.

---

## Acceptance Criteria (what “done” means)
- loads fast on mobile
- clear promise in 5 seconds
- one primary CTA everywhere
- white-labelling page makes the value obvious
- contact capture works
- no broken links, clean metadata

---

## Future Add-ons (only after v1 proves demand)
- sample report download (lead magnet)
- case studies (anonymised)
- interactive “readiness checklist” (gated or not)
- pricing page (once you’ve sold a few)
- product UI teaser (screenshots of assessment flow)

---

## Recommended v1 Site Copy Skeleton (fill-in)
- Headline: “Plan complex change without discovering risk in production.”
- Subhead: “Readiness assessments that surface hidden constraints and produce a sequenced plan.”
- CTA: “Request an assessment”
- Secondary: “White-labelling readiness”

---

## Next Action
If you want momentum: start by writing the **Home hero + White-labelling page hero + CTA wording** first.
Once those are locked, the rest becomes straightforward build work.
