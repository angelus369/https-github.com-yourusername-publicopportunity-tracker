# Manus Build Blueprint — AEO Clarify Website
## aeoclarify.com

**Instruction to Manus:** Build and deploy the AEO Clarify agency website. This is a professional service website for an Answer Engine Optimization agency. All details, copy, pricing, methodology, and structure are defined in this document. Do not invent content — use exactly what is written here.

---

## 1. GITHUB SYNC

Connect this project to GitHub before building anything.

**Repository:** https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker  
**Sync:** Bidirectional. All files pushed to the repo. Pull before every build session.

---

## 2. DOMAIN & HOSTING

**Domain:** aeoclarify.com  
**Hosting:** Deploy to Manus hosting environment first. Configure custom domain DNS when ready.  
**SSL:** Required. HTTPS only.

---

## 3. TECH STACK

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no heavy frameworks — site must be server-side rendered for AI crawler access)
- **No client-side-only rendering** — all content must be present in the HTML source (critical for AI bot indexing)
- **Performance target:** Page load under 2 seconds
- **Mobile:** Fully responsive, mobile-first

---

## 4. ROBOTS.TXT

Create `/robots.txt` with the following content exactly:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: CCBot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: https://aeoclarify.com/sitemap.xml
```

---

## 5. SITEMAP

Generate `/sitemap.xml` including all pages:
- https://aeoclarify.com/
- https://aeoclarify.com/methodology
- https://aeoclarify.com/services
- https://aeoclarify.com/pricing
- https://aeoclarify.com/about
- https://aeoclarify.com/waitlist

---

## 6. JSON-LD SCHEMA

Add the following JSON-LD to every page `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AEO Clarify",
  "url": "https://aeoclarify.com",
  "description": "AEO Clarify is an Answer Engine Optimization agency that makes businesses visible to every major AI engine — ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI — in 90 days.",
  "foundingDate": "2025",
  "serviceType": "Answer Engine Optimization",
  "areaServed": "Worldwide",
  "sameAs": [
    "https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "1997",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    },
    {
      "@type": "Offer",
      "name": "Growth",
      "price": "2497",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    },
    {
      "@type": "Offer",
      "name": "Agency",
      "price": "4997",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    }
  ]
}
```

---

## 7. BRAND IDENTITY

**Brand Name:** AEO Clarify  
**Tagline:** *"We make your business the answer."*  
**Sub-tagline:** *"Answer Engine Optimization for the AI-First Era"*

**Colors:**
- Primary Blue: `#368BC1`
- Dark Navy: `#0f172a`
- Light Sky: `#e0f2fe`
- White: `#ffffff`
- Accent Green (success/checkmarks): `#22c55e`
- Text Gray: `#64748b`

**Typography:**
- Headlines: Inter, bold (700)
- Body: Inter, regular (400)
- Monospace (code/tool names): JetBrains Mono or Fira Code

**Logo:** Compass icon in `#368BC1` with transparent background. Place in header and footer. Logo file will be provided — use a text placeholder "AEO Clarify" with the compass SVG if logo file is not yet available.

---

## 8. SITE STRUCTURE — ALL PAGES

---

### PAGE 1: HOME (`/`)

**Meta title:** AEO Clarify — Answer Engine Optimization Agency  
**Meta description:** AEO Clarify makes your business visible to ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI in 90 days. The Six Signal System™ for AI citation dominance.

#### Section 1: Hero

**Headline:** We Make Your Business the Answer

**Sub-headline:** When someone asks an AI engine about your industry — ChatGPT, Perplexity, Gemini, Claude, Grok, Manus — your brand should be the first name it says. AEO Clarify makes that happen in 90 days.

**CTA Button (primary):** Join the Waitlist → (links to `/waitlist`)  
**CTA Button (secondary):** See How It Works → (links to `/methodology`)

**Social proof bar below hero:**  
*"Optimized for all 6 AI engines"*  
Show 6 AI engine chip badges: ChatGPT · Perplexity · Gemini · Claude · Grok · Manus AI

---

#### Section 2: The Problem

**Headline:** Search is dying. AI is the new front page.

**Body:** 
People are no longer Googling their way to answers. They're asking ChatGPT. They're using Perplexity. They're talking to Gemini. And those AI engines are deciding — right now — which businesses get recommended and which ones get ignored.

If your business isn't optimized for AI citation, you are invisible to the fastest-growing discovery channel in history.

**Three-column stat block:**
- "6 AI engines" / "Each with its own indexing logic"
- "90 days" / "To go from invisible to cited"  
- "1 client per market" / "We work exclusively for you"

---

#### Section 3: The Six Signal System™

**Headline:** One strategy doesn't work across all AI engines. We built six.

**Sub-headline:** Each AI engine has a different architecture. ChatGPT needs entity clarity. Perplexity needs citability. Gemini needs Google eligibility. Claude needs depth. Grok needs real-time presence. Manus needs machine interactivity. We activate all six simultaneously.

**Six signal cards (one per engine):**

Card 1 — ChatGPT  
*Entity Clarity Signal*  
GPTBot access, JSON-LD Organization schema with sameAs links, Answer-First content architecture, third-party corroboration

Card 2 — Perplexity  
*Citability Signal*  
Citation Magnet page (original research), HTML comparison tables, TL;DR summary blocks, fast page loads

Card 3 — Gemini  
*Google Ecosystem Signal*  
Technical Google indexing eligibility, Definition-First architecture, LocalBusiness schema with GPS, NAP alignment

Card 4 — Claude  
*Depth Signal*  
Long-form comprehensive content, pricing transparency, product comparisons, well-structured semantic headers, verifiable citations

Card 5 — Grok  
*Real-Time Citation Signal*  
X topical authority management, 4-hour trend response protocol, real-time citation velocity monitoring

Card 6 — Manus AI  
*Machine Interactivity Signal*  
Full DOM audit, semantic HTML, transparent pricing, self-serve signup path, autonomous agent navigation testing

---

#### Section 4: The Five Spheres

**Headline:** Before we touch anything, we audit every zone where AI engines look.

**Five sphere cards:**

1. **Owned Property** — Your website: robots.txt, schema, server-side rendering, Answer-First content architecture
2. **Third-Party Validation** — G2, Capterra, Trustpilot, Crunchbase, digital PR, earned media, NAP consistency
3. **Community & Sentiment** — Reddit, Quora, Facebook, Instagram, YouTube — what real people say about you
4. **Shared Knowledge Base** — Wikidata entity graph, Wikipedia, GitHub — the foundational training data layer
5. **Real-Time & Social** — X mentions, citation velocity, trending topic positioning for Grok

---

#### Section 5: The 90-Day Promise

**Headline:** 90 days. Before vs. after. Measurable proof.

**Three-column timeline:**

Month 1 — Foundation  
*"Make you findable."*  
Technical fix + Answer-First content architecture

Month 2 — Authority  
*"Make you credible."*  
Third-party platforms, Wikidata entity, X presence, community monitoring

Month 3 — Velocity  
*"Make you the answer."*  
Real-Time Citation System, Citation Magnet assets, DOM audit, weekly AI SoV tracking

**Deliverable callout box:**  
*"At 90 days, you receive a before vs. after AI Share of Voice report — your scores across all 6 engines. That is the proof."*

---

#### Section 6: AI Share of Voice Score

**Headline:** We measure what matters — your AI Share of Voice.

**Score scale visual:**
- 0–20% = INVISIBLE
- 21–50% = FRAGMENTED  
- 51–75% = EMERGING
- 76–90% = AUTHORITY
- 91%+ = MOAT STATUS ← *This is where we take you.*

---

#### Section 7: CTA / Waitlist Callout

**Headline:** We take one client per industry vertical per market.

**Body:** AEO Clarify operates on an exclusivity model. If we're already working with a business in your category, we can't take a competitor. Join the waitlist to check availability for your market.

**CTA Button:** Check Your Market Availability → (links to `/waitlist`)

**Founding member note:** *Founding member spots — $500/month off for life — are nearly gone.*

---

#### Section 8: Footer

Links: Methodology · Services · Pricing · About · Waitlist  
Tagline: *"Consistency plus corroboration. That is how you become unciteable."*  
© 2025 AEO Clarify. All rights reserved.

---

### PAGE 2: METHODOLOGY (`/methodology`)

**Meta title:** The Six Signal System™ — AEO Clarify Methodology  
**Meta description:** AEO Clarify's proprietary Six Signal System targets ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI simultaneously. One signal per engine. All six activated in 90 days.

**Add FAQ Schema to this page:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Answer Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer Engine Optimization (AEO) is the practice of optimizing a business to be cited by AI engines — ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI — when users ask questions in that business's industry."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Six Signal System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Six Signal System is AEO Clarify's proprietary methodology that activates one optimization signal per AI engine simultaneously. Each AI engine has a distinct indexing architecture requiring a different strategy."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AEO take to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO Clarify's 90-Day Visibility Sprint delivers measurable AI Share of Voice improvement in 90 days. Technical foundations show results in 30 days. Full citation authority builds over 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI Share of Voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Share of Voice measures how often and how prominently a business is cited by AI engines when users ask relevant questions. Scored 0-5 per engine per prompt, aggregated across all six major AI engines."
      }
    }
  ]
}
```

**Page content:** Pull directly from `AEO_CLARIFY_METHODOLOGY.md` in the repo. Render it as a structured web page with:
- Hero with Six Signal System headline
- Five Spheres section
- Six signal cards (one per engine with full detail)
- 90-Day Sprint timeline
- AI SoV scoring table
- FAQ section using the FAQ schema above

---

### PAGE 3: SERVICES (`/services`)

**Meta title:** AEO Clarify Services — Six Signal System Implementation  
**Meta description:** AEO Clarify services: Five Sphere Audit, AI Share of Voice baseline, Technical Foundation Fix, Citation Magnet pages, Real-Time Citation Response, DOM machine-readiness audit.

**Sections:**
1. What we do (audit → fix → build → measure)
2. Full service list organized by the 90-Day Sprint phases
3. Tool stack table (from methodology doc)
4. What you receive (deliverables list)
5. CTA to pricing

---

### PAGE 4: PRICING (`/pricing`)

**Meta title:** AEO Clarify Pricing — $1,997 / $2,497 / $4,997 per month  
**Meta description:** AEO Clarify pricing: Starter at $1,997/month, Growth at $2,497/month, Agency at $4,997/month. One client per industry vertical per market.

**Three pricing cards:**

**Starter — $1,997/month**
- Full Five Sphere Audit
- AI Share of Voice Baseline Report
- Technical Foundation Fix (robots.txt, schema, crawler access)
- Answer-First content restructuring (up to 10 pages)
- Vertical registry optimization (G2, Crunchbase, Trustpilot)
- Monthly AI SoV tracking report
- Single industry vertical, single market
- CTA: Join Waitlist

**Growth — $2,497/month** ← *Most Popular badge*
- Everything in Starter, plus:
- Real-Time Citation Response System (4-hour Grok protocol)
- Reddit and community sphere monitoring
- Facebook + Instagram sentiment monitoring
- Citation Magnet asset (1 per quarter)
- DOM accessibility audit for Manus AI
- X topical authority management
- Competitor intelligence reporting
- CTA: Join Waitlist

**Agency — $4,997/month**
- Everything in Growth, plus:
- Full Six Signal System implementation
- Wikidata entity graph injection
- Co-branded content cluster strategy
- Weekly AI SoV tracking (not monthly)
- Priority 2-hour Real-Time Response window
- Multiple brand/location coverage
- Dedicated account lead
- CTA: Join Waitlist

**Below cards:**  
Exclusivity note: *"One client per industry vertical per geographic market. We check for conflicts before every onboarding."*

**Founding Member callout box:**  
*"Founding members — the first 25 clients — lock in $500/month off their chosen tier for life. [X] founding member spots remain."*

---

### PAGE 5: ABOUT (`/about`)

**Meta title:** About AEO Clarify — Who We Are  
**Meta description:** AEO Clarify is built on one belief: the businesses that win the AI era are the ones that build their infrastructure first. We prove the system works on ourselves before we sell it.

**Headline:** We build first. We sell second.

**Body:**
AEO Clarify was built on one principle: we do not promise what we cannot deliver.

Before we take a single client, we run the Six Signal System on AEO Clarify itself. We document the baseline. We execute the 90-day sprint. We measure the results. Only when we have proof — real AI Share of Voice scores, real citation movement across all six engines — do we offer it to clients.

That is not a sales tactic. That is the only way to build a methodology you can stand behind.

**What we believe:**
- AI engines are the new front page of the internet
- Businesses that optimize for AI citation now will own their markets for years
- Generic content is invisible — specificity, corroboration, and consistency win citations
- One client per market is not a limitation — it is the only ethical way to do this work

**Our tools:**  
*(Tool stack table from methodology doc)*

**GitHub:** Our internal tools are open and documented at github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker

---

### PAGE 6: WAITLIST (`/waitlist`)

**Meta title:** Join the AEO Clarify Waitlist — Check Your Market Availability  
**Meta description:** AEO Clarify takes one client per industry vertical per market. Join the waitlist to check if your market is available. Founding member spots include $500/month off for life.

**Headline:** Check Your Market Availability

**Sub-headline:** We take one client per industry vertical per geographic market. Tell us about your business and we'll confirm whether your market is open.

**Form fields:**
- Full Name (text, required) — `id="full-name" name="full_name"`
- Business Name (text, required) — `id="business-name" name="business_name"`
- Website URL (url, required) — `id="website-url" name="website_url"`
- Industry / Vertical (text, required) — `id="industry" name="industry"`
- Primary Market / Geography (text, required) — `id="market" name="market"`
- Top 3 Competitors (textarea, required) — `id="competitors" name="competitors"`
- Tier Interest (select, required) — `id="tier" name="tier"` — Options: Starter ($1,997/mo), Growth ($2,497/mo), Agency ($4,997/mo)
- Email Address (email, required) — `id="email" name="email"`

**Submit Button:** `<button id="check-availability" type="submit">Check My Market Availability</button>`

**Founding member counter:**  
*"[X] of 25 founding member spots remaining — $500/month off for life."*  
Start counter at 22 remaining.

**After submit:** Show confirmation message:  
*"We've received your submission. We'll cross-reference your industry and market against our current client roster and respond within 24 hours. If your market is open, we'll send onboarding details."*

**Form backend:** Store submissions. Email notification to cartissahenry@gmail.com on each new submission.

---

## 9. GLOBAL COMPONENTS

### Navigation (all pages)
- Logo (left)
- Nav links: Methodology · Services · Pricing · About
- CTA button (right): Join Waitlist → (primary blue `#368BC1`)
- Sticky on scroll
- Mobile: hamburger menu

### Footer (all pages)
- Logo + tagline: *"Consistency plus corroboration. That is how you become unciteable."*
- Links: Methodology · Services · Pricing · About · Waitlist
- GitHub link
- © 2025 AEO Clarify

---

## 10. SEO META — ALL PAGES

Every page must have:
- `<title>` tag
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:url">`
- `<meta property="og:type" content="website">`
- `<link rel="canonical">`
- JSON-LD schema (Organization on all pages, page-specific schemas where noted)

---

## 11. PERFORMANCE & ACCESSIBILITY REQUIREMENTS

- All images have `alt` attributes
- All buttons have `id` and `aria-label`
- All form inputs have `id`, `name`, and associated `<label>`
- No `<div>` elements acting as buttons
- No anonymous onclick handlers
- Color contrast ratio minimum 4.5:1
- All pages render meaningful content without JavaScript execution

---

## 12. CONTENT ARCHITECTURE RULES

Every major section must follow Answer-First structure:
- H2 or H3 heading
- Immediately followed by a standalone definition or answer under 350 characters
- Supporting detail beneath

This is not just a design preference — it is the AEO methodology applied to our own site. We must be the proof that our system works.

---

## 13. WHAT TO BUILD FIRST (BUILD ORDER)

1. robots.txt and sitemap.xml
2. Global CSS, typography, color system
3. Navigation and footer components
4. Home page (`/`) — this is the AEO signal priority
5. Waitlist page (`/waitlist`) — this is the business priority
6. Pricing page (`/pricing`)
7. Methodology page (`/methodology`)
8. Services page (`/services`)
9. About page (`/about`)
10. JSON-LD schema on all pages
11. Performance and accessibility pass
12. GitHub sync — push all files

---

*Blueprint Version 1 — AEO Clarify*  
*Prepared for Manus AI build execution*
