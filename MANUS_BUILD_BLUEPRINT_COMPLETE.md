# MANUS BUILD BLUEPRINT — AEOCLARIFY.COM
## Complete Build Instructions — Nothing Summarized — Every Step Included

**READ THIS FIRST:**
You are building the complete AEO Clarify agency website. Every word of copy, every field, every file, every schema, every style, every component is written in this document. Do not invent content. Do not summarize steps. Do not skip anything. Build exactly what is written here, in the order it is written.

---

## STEP 1: CONNECT TO GITHUB

Before writing a single line of code, connect to the GitHub repository.

**Repository URL:** https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker  
**Branch:** claude/loving-bardeen-M4QYG  
**Personal Access Token:** (user will provide)  
**Sync type:** Bidirectional — pull before every session, push all files when build is complete and after every major change.

Pull the repository. Read these files for reference:
- `AEO_CLARIFY_METHODOLOGY.md`
- `README.md`
- `MANUS_BUILD_BLUEPRINT_COMPLETE.md` (this file)

---

## STEP 2: DOMAIN AND HOSTING

**Domain:** aeoclarify.com  
**Deploy to:** Manus hosting environment  
**SSL:** HTTPS required on all pages. No HTTP.  
**Custom domain:** Configure DNS for aeoclarify.com to point to Manus hosting.

---

## STEP 3: TECH STACK REQUIREMENTS

- HTML5 semantic markup only
- CSS3 for all styling — write a single `styles.css` file
- Vanilla JavaScript — write a single `app.js` file
- No React, no Vue, no Angular, no Next.js, no frameworks
- No client-side-only rendering — every page must have all content present in the raw HTML source code before JavaScript runs. AI bots do not execute JavaScript. If the content only exists after JavaScript runs, AI bots cannot read it.
- All pages must be individual `.html` files or server-rendered
- Page load time target: under 2 seconds
- Mobile-first responsive design

---

## STEP 4: CREATE ROBOTS.TXT

Create the file `/robots.txt` at the root of the domain with this exact content:

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

User-agent: bingbot
Allow: /

Sitemap: https://aeoclarify.com/sitemap.xml
```

---

## STEP 5: CREATE SITEMAP.XML

Create the file `/sitemap.xml` at the root of the domain with this exact content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aeoclarify.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aeoclarify.com/methodology</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://aeoclarify.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aeoclarify.com/pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://aeoclarify.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://aeoclarify.com/waitlist</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## STEP 6: BRAND IDENTITY AND DESIGN SYSTEM

### Colors

```css
--color-primary: #368BC1;
--color-primary-dark: #2a6d99;
--color-primary-light: #e0f2fe;
--color-navy: #0f172a;
--color-navy-soft: #1e293b;
--color-white: #ffffff;
--color-gray-text: #64748b;
--color-gray-light: #f8fafc;
--color-gray-border: #e2e8f0;
--color-green: #22c55e;
--color-green-light: #dcfce7;
```

### Typography

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Load Inter from Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Font weights:
- Headlines: 700 (bold) or 800 (extrabold) for hero
- Subheadings: 600 (semibold)
- Body text: 400 (regular)
- Labels and caps: 500 (medium)

### Spacing scale

Use consistent spacing: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px

### Border radius

- Buttons: 8px
- Cards: 12px
- Chips/badges: 999px (pill)
- Input fields: 8px

### Shadows

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
```

---

## STEP 7: GLOBAL CSS FILE (styles.css)

Write a complete `styles.css` file that includes:

**Reset and base:**
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f172a; background: #ffffff; line-height: 1.6; -webkit-font-smoothing: antialiased; }
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
```

**Container:**
```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
```

**Navigation styles:**
- Fixed/sticky top navigation
- White background with subtle bottom border
- Logo on left, nav links centered or right, CTA button far right
- Height: 72px
- On mobile: hamburger menu that opens a full-width dropdown

**Button styles:**
```css
.btn-primary { background: #368BC1; color: #ffffff; border: none; padding: 14px 28px; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.btn-primary:hover { background: #2a6d99; }
.btn-secondary { background: transparent; color: #368BC1; border: 2px solid #368BC1; padding: 12px 26px; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.btn-secondary:hover { background: #368BC1; color: #ffffff; }
.btn-large { padding: 18px 36px; font-size: 18px; }
```

**Section spacing:**
```css
.section { padding: 80px 0; }
.section-sm { padding: 48px 0; }
.section-lg { padding: 120px 0; }
```

**Hero section:**
- Full viewport width
- Dark navy background (#0f172a) or deep gradient from #0f172a to #1e293b
- White headline text
- Centered layout on desktop, stacked on mobile
- Minimum height: 600px

**Card styles:**
```css
.card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: box-shadow 0.2s; }
.card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.10); }
```

**Grid systems:**
```css
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-6 { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
@media (max-width: 768px) { .grid-2, .grid-3, .grid-6 { grid-template-columns: 1fr; } }
@media (max-width: 1024px) { .grid-6 { grid-template-columns: repeat(3, 1fr); } }
```

**Form styles:**
```css
.form-group { margin-bottom: 20px; }
label { display: block; font-size: 14px; font-weight: 600; color: #0f172a; margin-bottom: 6px; }
input, select, textarea { width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 16px; font-family: inherit; color: #0f172a; background: #ffffff; transition: border-color 0.2s; }
input:focus, select:focus, textarea:focus { outline: none; border-color: #368BC1; box-shadow: 0 0 0 3px rgba(54,139,193,0.15); }
textarea { resize: vertical; min-height: 100px; }
```

**Chip/badge styles:**
```css
.chip { display: inline-flex; align-items: center; padding: 6px 14px; background: #e0f2fe; color: #368BC1; border-radius: 999px; font-size: 13px; font-weight: 600; }
.chip-dark { background: rgba(54,139,193,0.15); color: #ffffff; }
```

**Footer styles:**
- Dark navy background (#0f172a)
- White text
- Three-column layout on desktop, stacked on mobile
- Padding: 64px 0 32px

**Responsive breakpoints:**
- Mobile: max-width 640px
- Tablet: max-width 1024px
- Desktop: 1025px and above

---

## STEP 8: GLOBAL JSON-LD SCHEMA (goes in `<head>` of EVERY page)

```html
<script type="application/ld+json">
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
      "description": "Full Five Sphere Audit, AI Share of Voice Baseline Report, Technical Foundation Fix, Answer-First content restructuring up to 10 pages, vertical registry optimization, monthly AI SoV tracking report",
      "price": "1997",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    },
    {
      "@type": "Offer",
      "name": "Growth",
      "description": "Everything in Starter plus Real-Time Citation Response System, Reddit and community monitoring, Facebook and Instagram sentiment monitoring, Citation Magnet asset, DOM accessibility audit, X topical authority management, competitor intelligence reporting",
      "price": "2497",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    },
    {
      "@type": "Offer",
      "name": "Agency",
      "description": "Everything in Growth plus Full Six Signal System implementation, Wikidata entity graph injection, co-branded content cluster strategy, weekly AI SoV tracking, priority 2-hour Real-Time Response window, multiple brand and location coverage, dedicated account lead",
      "price": "4997",
      "priceCurrency": "USD",
      "billingIncrement": "month"
    }
  ]
}
</script>
```

---

## STEP 9: GLOBAL NAVIGATION COMPONENT

This navigation appears at the top of every single page. It is sticky — it stays at the top when the user scrolls.

```html
<nav id="main-nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">

      <!-- Logo -->
      <a href="/" id="nav-logo" aria-label="AEO Clarify home">
        <span class="logo-icon">◎</span>
        <span class="logo-text">AEO Clarify</span>
      </a>

      <!-- Desktop nav links -->
      <ul class="nav-links" role="list">
        <li><a href="/methodology" id="nav-methodology">Methodology</a></li>
        <li><a href="/services" id="nav-services">Services</a></li>
        <li><a href="/pricing" id="nav-pricing">Pricing</a></li>
        <li><a href="/about" id="nav-about">About</a></li>
      </ul>

      <!-- CTA button -->
      <a href="/waitlist" id="nav-cta" class="btn-primary">Join Waitlist</a>

      <!-- Mobile hamburger -->
      <button id="mobile-menu-toggle" aria-label="Open mobile menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </div>

  <!-- Mobile menu dropdown -->
  <div id="mobile-menu" aria-hidden="true">
    <ul role="list">
      <li><a href="/methodology" id="mobile-nav-methodology">Methodology</a></li>
      <li><a href="/services" id="mobile-nav-services">Services</a></li>
      <li><a href="/pricing" id="mobile-nav-pricing">Pricing</a></li>
      <li><a href="/about" id="mobile-nav-about">About</a></li>
      <li><a href="/waitlist" id="mobile-nav-cta" class="btn-primary">Join Waitlist</a></li>
    </ul>
  </div>
</nav>
```

**Navigation CSS:**
- Height: 72px
- Background: #ffffff
- Border bottom: 1px solid #e2e8f0
- Logo font size: 20px, font weight: 700, color: #0f172a
- Logo icon color: #368BC1
- Nav links: font size 15px, font weight 500, color #64748b
- Nav links hover: color #368BC1
- Active page nav link: color #368BC1
- CTA button: background #368BC1, color #ffffff, padding 10px 20px, border-radius 8px

---

## STEP 10: GLOBAL FOOTER COMPONENT

This footer appears at the bottom of every single page.

```html
<footer id="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-inner">

      <!-- Footer brand -->
      <div class="footer-brand">
        <a href="/" id="footer-logo" aria-label="AEO Clarify home">
          <span class="logo-icon">◎</span>
          <span class="logo-text">AEO Clarify</span>
        </a>
        <p class="footer-tagline">Consistency plus corroboration.<br>That is how you become unciteable.</p>
      </div>

      <!-- Footer nav -->
      <nav aria-label="Footer navigation">
        <ul role="list">
          <li><a href="/methodology" id="footer-nav-methodology">Methodology</a></li>
          <li><a href="/services" id="footer-nav-services">Services</a></li>
          <li><a href="/pricing" id="footer-nav-pricing">Pricing</a></li>
          <li><a href="/about" id="footer-nav-about">About</a></li>
          <li><a href="/waitlist" id="footer-nav-waitlist">Join Waitlist</a></li>
        </ul>
      </nav>

      <!-- Footer right -->
      <div class="footer-right">
        <a href="https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker" id="footer-github" target="_blank" rel="noopener noreferrer" aria-label="AEO Clarify on GitHub">GitHub</a>
        <p class="footer-copy">© 2025 AEO Clarify. All rights reserved.</p>
      </div>

    </div>
  </div>
</footer>
```

---

## STEP 11: HOME PAGE (index.html — url: /)

**File:** `index.html`

### Head section

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AEO Clarify — Answer Engine Optimization Agency</title>
  <meta name="description" content="AEO Clarify makes your business visible to ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI in 90 days. The Six Signal System™ for AI citation dominance.">
  <meta property="og:title" content="AEO Clarify — Answer Engine Optimization Agency">
  <meta property="og:description" content="AEO Clarify makes your business visible to ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI in 90 days. The Six Signal System™ for AI citation dominance.">
  <meta property="og:url" content="https://aeoclarify.com/">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://aeoclarify.com/">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <!-- Global Organization Schema -->
  <script type="application/ld+json">
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
      {"@type": "Offer", "name": "Starter", "price": "1997", "priceCurrency": "USD", "billingIncrement": "month"},
      {"@type": "Offer", "name": "Growth", "price": "2497", "priceCurrency": "USD", "billingIncrement": "month"},
      {"@type": "Offer", "name": "Agency", "price": "4997", "priceCurrency": "USD", "billingIncrement": "month"}
    ]
  }
  </script>
</head>
<body>
```

---

### SECTION 1: HERO

Background: dark navy gradient (#0f172a to #1e293b)  
Text: white  
Layout: centered, single column  
Padding: 120px top and bottom on desktop, 80px on mobile

```html
<section id="hero" aria-label="Hero">
  <div class="container">

    <div class="hero-badge">
      <span>Answer Engine Optimization</span>
    </div>

    <h1>We Make Your Business<br>the Answer</h1>

    <p class="hero-sub">When someone asks an AI engine about your industry — ChatGPT, Perplexity, Gemini, Claude, Grok, Manus — your brand should be the first name it says. AEO Clarify makes that happen in 90 days.</p>

    <div class="hero-ctas">
      <a href="/waitlist" id="hero-cta-primary" class="btn-primary btn-large">Join the Waitlist</a>
      <a href="/methodology" id="hero-cta-secondary" class="btn-secondary btn-large">See How It Works</a>
    </div>

    <div class="hero-engines" aria-label="Supported AI engines">
      <span class="engine-label">Optimized for all 6 AI engines:</span>
      <div class="engine-chips">
        <span class="chip chip-dark">ChatGPT</span>
        <span class="chip chip-dark">Perplexity</span>
        <span class="chip chip-dark">Gemini</span>
        <span class="chip chip-dark">Claude</span>
        <span class="chip chip-dark">Grok</span>
        <span class="chip chip-dark">Manus AI</span>
      </div>
    </div>

  </div>
</section>
```

---

### SECTION 2: THE PROBLEM

Background: white  
Padding: 96px top and bottom

```html
<section id="problem" aria-label="The problem with search">
  <div class="container">

    <h2>Search is dying.<br>AI is the new front page.</h2>

    <p class="section-lead">People are no longer Googling their way to answers. They're asking ChatGPT. They're using Perplexity. They're talking to Gemini. And those AI engines are deciding — right now — which businesses get recommended and which ones get ignored.</p>

    <p class="section-body">If your business isn't optimized for AI citation, you are invisible to the fastest-growing discovery channel in history. Every day you wait, a competitor is getting cited instead of you.</p>

    <div class="stats-row">

      <div class="stat-block">
        <div class="stat-number">6</div>
        <div class="stat-label">AI engines</div>
        <div class="stat-desc">Each with its own indexing logic and citation rules</div>
      </div>

      <div class="stat-block">
        <div class="stat-number">90</div>
        <div class="stat-label">days</div>
        <div class="stat-desc">From invisible to cited across all six engines</div>
      </div>

      <div class="stat-block">
        <div class="stat-number">1</div>
        <div class="stat-label">client per market</div>
        <div class="stat-desc">We work exclusively for you in your industry and geography</div>
      </div>

    </div>

  </div>
</section>
```

---

### SECTION 3: THE SIX SIGNAL SYSTEM

Background: #f8fafc (light gray)  
Padding: 96px top and bottom

```html
<section id="six-signal-system" aria-label="The Six Signal System">
  <div class="container">

    <div class="section-header">
      <span class="section-tag">Proprietary Methodology</span>
      <h2>One strategy doesn't work across all AI engines. We built six.</h2>
      <p class="section-lead">Each AI engine has a different architecture. ChatGPT needs entity clarity. Perplexity needs citability. Gemini needs Google eligibility. Claude needs depth. Grok needs real-time presence. Manus needs machine interactivity. We activate all six simultaneously.</p>
    </div>

    <div class="signals-grid">

      <div class="signal-card" id="signal-chatgpt">
        <div class="signal-engine">ChatGPT</div>
        <div class="signal-name">Entity Clarity Signal</div>
        <p>GPTBot access confirmed, JSON-LD Organization schema with sameAs links to Wikidata and LinkedIn, Answer-First content architecture on every page, third-party corroboration seeded across the web. ChatGPT requires a clear, crawlable entity with independent verification before it will recommend a brand by name.</p>
      </div>

      <div class="signal-card" id="signal-perplexity">
        <div class="signal-engine">Perplexity</div>
        <div class="signal-name">Citability Signal</div>
        <p>A flagship Citation Magnet page built around original research or benchmark data. HTML comparison tables structured for Perplexity's RAG extraction. TL;DR summary blocks at the top of every major page. PerplexityBot unblocked and fast page loads confirmed. Perplexity rewards the brand that is easiest to extract and quote.</p>
      </div>

      <div class="signal-card" id="signal-gemini">
        <div class="signal-engine">Gemini</div>
        <div class="signal-name">Google Ecosystem Signal</div>
        <p>Googlebot and Google-Extended access verified. Standard Google Search indexing eligibility achieved — Gemini cannot cite what Google hasn't indexed. Definition-First architecture: every section opens with one evidence-backed sentence under 350 characters. NAP data aligned across Google Business Profile, Apple Business Connect, and Bing Places.</p>
      </div>

      <div class="signal-card" id="signal-claude">
        <div class="signal-engine">Claude</div>
        <div class="signal-name">Depth Signal</div>
        <p>Comprehensive long-form content with crisp semantic headers. Transparent pricing pages, compliance documentation, and product detail pages. Anthropic-ai and ClaudeBot unblocked in robots.txt. Competitor comparison pages with structured feature tables. A detailed About page that clearly establishes expertise and positioning. Verifiable citations and data sources throughout all content.</p>
      </div>

      <div class="signal-card" id="signal-grok">
        <div class="signal-engine">Grok</div>
        <div class="signal-name">Real-Time Citation Signal</div>
        <p>Active X (Twitter) presence established as a topical authority node. Structured threads, data tables, and pinned resource posts. A Real-Time Response Protocol: when a trend breaks in the client's industry, we draft and deploy a high-density authoritative response within 4 hours. Grok is the only AI engine with real-time data ingestion — speed is the competitive advantage.</p>
      </div>

      <div class="signal-card" id="signal-manus">
        <div class="signal-engine">Manus AI</div>
        <div class="signal-name">Machine Interactivity Signal</div>
        <p>Full DOM audit for semantic HTML — every button, form, and CTA gets explicit labels and IDs. Anonymous div wrappers replaced with standard semantic elements. All pricing walls eliminated — transparent pricing tiers must be machine-readable. Self-serve account creation with zero human-gating. Manus doesn't read — it acts. If an autonomous agent can't click the button, the brand doesn't exist in the agent economy.</p>
      </div>

    </div>

  </div>
</section>
```

---

### SECTION 4: THE FIVE SPHERES

Background: white  
Padding: 96px top and bottom

```html
<section id="five-spheres" aria-label="The Five Spheres of AI Consensus">
  <div class="container">

    <div class="section-header">
      <span class="section-tag">The Five Sphere Audit</span>
      <h2>Before we touch anything, we audit every zone where AI engines look.</h2>
      <p class="section-lead">AI engines don't just look at your website. They look at everything about you — your reviews, your social presence, your Wikipedia entry, your real-time mentions. We audit all five zones and fix what's broken.</p>
    </div>

    <div class="spheres-list">

      <div class="sphere-item" id="sphere-owned">
        <div class="sphere-number">1</div>
        <div class="sphere-content">
          <h3>Owned Property</h3>
          <p>What your brand controls directly. Your website's technical foundation — robots.txt configuration for all AI crawlers, JSON-LD schema deployment, server-side rendering verification. Answer-First content architecture where every heading is immediately followed by a standalone definition under 350 characters. FAQ pages structured for AI chunk extraction. Proprietary research and original data that forces citations.</p>
        </div>
      </div>

      <div class="sphere-item" id="sphere-third-party">
        <div class="sphere-number">2</div>
        <div class="sphere-content">
          <h3>Third-Party Validation</h3>
          <p>What independent sources say about your brand. Review aggregators including G2, Capterra, Trustpilot, Google Business Profile, and Yelp. Digital PR and earned media mentions in publications AI engines trust. Industry directories including Crunchbase, AngelList, and niche registries. Consistent NAP — Name, Address, Phone — across every platform. AI engines cross-verify entities across multiple independent sources before recommending them.</p>
        </div>
      </div>

      <div class="sphere-item" id="sphere-community">
        <div class="sphere-number">3</div>
        <div class="sphere-content">
          <h3>Community and Sentiment</h3>
          <p>What real people say in human-to-human spaces. Reddit presence and share of voice in relevant subreddits. Quora mentions and answer authority. Facebook comments and page sentiment patterns. Instagram comments and engagement analysis. YouTube video transcripts and engagement. AI engines weight community sentiment heavily because it represents organic, unmanaged opinion about a brand.</p>
        </div>
      </div>

      <div class="sphere-item" id="sphere-knowledge">
        <div class="sphere-number">4</div>
        <div class="sphere-content">
          <h3>Shared Knowledge Base</h3>
          <p>What the foundational AI training data says about your brand. Wikidata entity graph — the most important entity verification layer in AI indexing. Wikipedia presence where applicable. GitHub for technical and SaaS brands — a GitHub repository with real code and documentation signals technical authority. Knowledge Graph entity verification. This sphere represents the bedrock layer that all AI engines share as training data.</p>
        </div>
      </div>

      <div class="sphere-item" id="sphere-realtime">
        <div class="sphere-number">5</div>
        <div class="sphere-content">
          <h3>Real-Time and Social</h3>
          <p>What is being said about your brand right now. X (Twitter) brand mentions and citation velocity. Trending topic positioning for Grok's real-time index. Breaking industry event response speed. Partner and co-branded content clusters. This sphere is Grok's primary data source and the fastest-moving signal — brands that respond to trends within hours capture citations that brands responding in days or weeks never get.</p>
        </div>
      </div>

    </div>

  </div>
</section>
```

---

### SECTION 5: THE 90-DAY SPRINT

Background: #0f172a (dark navy)  
Text: white  
Padding: 96px top and bottom

```html
<section id="ninety-day-sprint" aria-label="The 90-Day Visibility Sprint">
  <div class="container">

    <div class="section-header section-header-light">
      <span class="section-tag section-tag-light">The 90-Day Visibility Sprint</span>
      <h2>90 days. Before vs. after. Measurable proof.</h2>
      <p class="section-lead">Three months. Three phases. One outcome: your business cited by name as the definitive answer across every major AI engine.</p>
    </div>

    <div class="sprint-timeline">

      <div class="sprint-month" id="sprint-month-1">
        <div class="month-label">Month 1</div>
        <div class="month-theme">Foundation</div>
        <div class="month-subtitle">"Make you findable."</div>
        <ul class="month-items">
          <li>Run full Five Sphere Audit across all zones</li>
          <li>Establish AI Share of Voice baseline across all 6 engines</li>
          <li>Unblock all AI crawlers in robots.txt</li>
          <li>Deploy JSON-LD schema network: Organization, Product, FAQ, LocalBusiness</li>
          <li>Fix client-side rendering issues blocking AI bot access</li>
          <li>Align NAP data across all major directories</li>
          <li>Rewrite core pages using Answer-First and Definition-First structure</li>
          <li>Build the flagship Citation Magnet page</li>
          <li>Restructure FAQs with sub-350-character definition blocks</li>
          <li>Build HTML comparison tables for key product and service features</li>
        </ul>
        <div class="deliverable-box">
          <strong>Month 1 Deliverable:</strong> Technical Ingestion Report — proof that all AI crawlers can now access and parse the client's site
        </div>
      </div>

      <div class="sprint-month" id="sprint-month-2">
        <div class="month-label">Month 2</div>
        <div class="month-theme">Authority</div>
        <div class="month-subtitle">"Make you credible."</div>
        <ul class="month-items">
          <li>Fill all metadata fields on G2, Capterra, Trustpilot, Crunchbase</li>
          <li>Seed 3 to 5 independent third-party mentions via guest posts, niche directories, and podcast appearances</li>
          <li>Establish Wikidata entity node</li>
          <li>Launch X presence with structured topical authority threads</li>
          <li>Activate Reddit monitoring and begin community presence in relevant subreddits</li>
          <li>Run first competitor sentiment analysis across Facebook, Instagram, and Reddit</li>
        </ul>
        <div class="deliverable-box">
          <strong>Month 2 Deliverable:</strong> Authority Footprint Report — Five Sphere scores updated, all third-party mentions documented
        </div>
      </div>

      <div class="sprint-month" id="sprint-month-3">
        <div class="month-label">Month 3</div>
        <div class="month-theme">Velocity</div>
        <div class="month-subtitle">"Make you the answer."</div>
        <ul class="month-items">
          <li>Real-Time Citation Response System goes live — 4-hour Grok response protocol active</li>
          <li>Publish second and third Citation Magnet assets</li>
          <li>Begin co-branded content with one strategic partner</li>
          <li>Run full DOM audit and fix all Manus AI interactivity gaps</li>
          <li>Monitor and respond to review platforms — seed positive sentiment patterns</li>
          <li>Track AI Share of Voice weekly — document every movement</li>
        </ul>
        <div class="deliverable-box">
          <strong>Month 3 Deliverable:</strong> 90-Day AI Share of Voice Report — before vs. after scores across all 6 engines. This is the proof.
        </div>
      </div>

    </div>

  </div>
</section>
```

---

### SECTION 6: AI SHARE OF VOICE SCORING

Background: white  
Padding: 96px top and bottom

```html
<section id="sov-scoring" aria-label="AI Share of Voice Scoring">
  <div class="container">

    <div class="section-header">
      <span class="section-tag">How We Measure</span>
      <h2>We measure what matters — your AI Share of Voice.</h2>
      <p class="section-lead">AI Share of Voice is the percentage of AI engine responses in your industry that mention your brand. We score it before we start and after 90 days. The difference is the proof of our work.</p>
    </div>

    <div class="sov-scale">

      <div class="sov-level sov-invisible" id="sov-level-invisible">
        <div class="sov-range">0% — 20%</div>
        <div class="sov-status">INVISIBLE</div>
        <div class="sov-desc">AI engines do not know this brand. Never cited or recommended in any response.</div>
      </div>

      <div class="sov-level sov-fragmented" id="sov-level-fragmented">
        <div class="sov-range">21% — 50%</div>
        <div class="sov-status">FRAGMENTED</div>
        <div class="sov-desc">Occasional mentions, low confidence. AI engines are aware of the brand but not recommending it.</div>
      </div>

      <div class="sov-level sov-emerging" id="sov-level-emerging">
        <div class="sov-range">51% — 75%</div>
        <div class="sov-status">EMERGING</div>
        <div class="sov-desc">Growing presence across multiple engines. Some gaps remain. Competitors still winning key citations.</div>
      </div>

      <div class="sov-level sov-authority" id="sov-level-authority">
        <div class="sov-range">76% — 90%</div>
        <div class="sov-status">AUTHORITY</div>
        <div class="sov-desc">Strong presence across most engines. Featured prominently and accurately in the majority of relevant responses.</div>
      </div>

      <div class="sov-level sov-moat" id="sov-level-moat">
        <div class="sov-range">91% +</div>
        <div class="sov-status">MOAT STATUS</div>
        <div class="sov-desc">Definitive answer across all engines. Primary recommended brand in the market. This is where we take you.</div>
      </div>

    </div>

  </div>
</section>
```

---

### SECTION 7: EXCLUSIVITY CALLOUT

Background: #368BC1 (primary blue)  
Text: white  
Padding: 80px top and bottom

```html
<section id="exclusivity" aria-label="Exclusivity model">
  <div class="container">

    <h2>We take one client per industry vertical per market.</h2>

    <p>AEO Clarify operates on a full exclusivity model. We cannot build an AI citation moat for your business while simultaneously building one for your direct competitor. If we are already working with a business in your category and geography, we will tell you — and decline. Our clients pay more knowing our loyalty is absolute and exclusive to their market.</p>

    <p>Join the waitlist to check whether your market is available. If it is open, we will confirm and send onboarding details within 24 hours.</p>

    <a href="/waitlist" id="exclusivity-cta" class="btn-white">Check Your Market Availability</a>

    <p class="founding-note">Founding member spots — $500 per month off your chosen tier for life — are nearly gone.</p>

  </div>
</section>
```

---

### SECTION 8: HOME PAGE CTA FOOTER BAR

Background: #0f172a  
Padding: 64px top and bottom

```html
<section id="home-cta-bar" aria-label="Final call to action">
  <div class="container">
    <h2>Ready to become the answer?</h2>
    <p>Join the waitlist. Check your market. Become unciteable.</p>
    <a href="/waitlist" id="home-final-cta" class="btn-primary btn-large">Join the Waitlist</a>
  </div>
</section>
```

---

## STEP 12: METHODOLOGY PAGE (methodology.html — url: /methodology)

**File:** `methodology.html`

### Head section

```html
<title>The Six Signal System™ — AEO Clarify Methodology</title>
<meta name="description" content="AEO Clarify's proprietary Six Signal System targets ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI simultaneously. One signal per engine. All six activated in 90 days.">
<meta property="og:title" content="The Six Signal System™ — AEO Clarify Methodology">
<meta property="og:description" content="AEO Clarify's proprietary Six Signal System targets ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI simultaneously. One signal per engine. All six activated in 90 days.">
<meta property="og:url" content="https://aeoclarify.com/methodology">
<link rel="canonical" href="https://aeoclarify.com/methodology">
```

### FAQ Schema (add to head in addition to global schema)

```html
<script type="application/ld+json">
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
        "text": "The Six Signal System is AEO Clarify's proprietary methodology that activates one optimization signal per AI engine simultaneously. Each AI engine has a distinct indexing architecture requiring a different strategy to achieve citation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO Clarify's 90-Day Visibility Sprint delivers measurable AI Share of Voice improvement within 90 days. Technical foundations show impact in 30 days. Full citation authority across all six engines builds over the full 90-day sprint."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI Share of Voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Share of Voice measures how often and how prominently a business is cited by AI engines when users ask relevant questions. It is scored 0-5 per engine per prompt and aggregated across all six major AI engines into an overall percentage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Five Sphere Audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Five Sphere Audit is AEO Clarify's baseline assessment that examines all five zones where AI engines gather evidence about a brand: Owned Property, Third-Party Validation, Community and Sentiment, Shared Knowledge Base, and Real-Time and Social."
      }
    },
    {
      "@type": "Question",
      "name": "Why does each AI engine need a different strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI each use different indexing architectures and citation criteria. ChatGPT weights entity clarity. Perplexity weights citability and extractability. Gemini requires Google indexing eligibility. Claude rewards depth and completeness. Grok prioritizes real-time X presence. Manus AI requires machine-readable semantic HTML."
      }
    }
  ]
}
</script>
```

### Methodology page body content

**Section 1: Hero**
```html
<section id="methodology-hero" aria-label="Methodology hero">
  <div class="container">
    <span class="section-tag">Proprietary Methodology</span>
    <h1>The Six Signal System™</h1>
    <p class="hero-sub">Every major AI engine asks the same three questions about every brand it encounters: Do you exist? Are you real? Are you the answer? The Six Signal System answers all three — simultaneously — across all six engines.</p>
  </div>
</section>
```

**Section 2: Core Principle**
```html
<section id="core-principle" aria-label="Core principle">
  <div class="container">
    <h2>Consistency plus corroboration.</h2>
    <p>When all six signals point to the same brand with the same facts, the same authority, and the same story, AI engines stop guessing and start recommending. That is the moment a business becomes unciteable.</p>
    <p>Each of the six major AI engines — ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI — has a fundamentally different indexing architecture. A single optimization strategy applied to all six produces weak results across all six. The Six Signal System targets each engine with the exact signal that engine requires, then activates all six simultaneously so the citation footprint builds in every direction at once.</p>
  </div>
</section>
```

**Section 3: The Six Signals in full detail**

Signal 1:
```html
<div class="signal-detail" id="signal-detail-chatgpt">
  <h3>Signal 1: ChatGPT — Entity Clarity Signal</h3>
  <p class="signal-definition">ChatGPT requires a clear, crawlable entity with independent third-party corroboration before it will recommend a brand by name as a definitive answer.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Verify GPTBot is not blocked in robots.txt</li>
    <li>Deploy complete JSON-LD Organization schema with sameAs links to Wikidata, LinkedIn, and Crunchbase</li>
    <li>Build Answer-First page architecture — every H2 and H3 followed immediately by a standalone definition under 350 characters</li>
    <li>Establish entity consistency across all external profiles so the same name, description, and facts appear everywhere</li>
    <li>Seed 3 to 5 independent third-party mentions that use the same entity language as the website</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>Content that is highly specific, clearly authored, and tied to a real niche problem. Generic content is filtered as noise. Original data forces citations. Entity consistency across every platform tells ChatGPT the brand is real and verifiable.</p>
</div>
```

Signal 2:
```html
<div class="signal-detail" id="signal-detail-perplexity">
  <h3>Signal 2: Perplexity — Citability Signal</h3>
  <p class="signal-definition">Perplexity needs quote-ready content it can extract and cite instantly. The brand that is easiest to pull a clean quote from wins the citation.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Build a flagship Citation Magnet page — original research, benchmark, comparison, or expert guide with clear source references</li>
    <li>Structure all key content in HTML comparison tables — tables beat unstructured text for Perplexity RAG extraction</li>
    <li>Add TL;DR summary blocks at the top of every major page</li>
    <li>Ensure PerplexityBot is unblocked and all pages load fast</li>
    <li>Place the brand in niche directories Perplexity trusts and indexes</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>One strong, deeply useful page beats ten thin posts. Perplexity rewards specificity. The brand that publishes original benchmark data or the most comprehensive comparison in its industry wins the citation every time the topic is searched.</p>
</div>
```

Signal 3:
```html
<div class="signal-detail" id="signal-detail-gemini">
  <h3>Signal 3: Gemini — Google Ecosystem Signal</h3>
  <p class="signal-definition">Gemini requires technical eligibility inside Google's index before content grounding can work. Gemini cannot cite what Google hasn't indexed.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Verify Googlebot and Google-Extended have full crawl access in robots.txt</li>
    <li>Achieve standard Google Search indexing eligibility — this is the prerequisite for Gemini citations</li>
    <li>Implement Definition-First Architecture: every section opens with a single evidence-backed sentence under 350 characters</li>
    <li>Deploy LocalBusiness schema with exact GPS coordinates for physical businesses</li>
    <li>Align NAP data perfectly across Google Business Profile, Apple Business Connect, and Bing Places</li>
    <li>Eliminate marketing superlatives — replace every claim with verifiable data points, dates, and statistics</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>Technical foundation comes before content strategy. Evidence-grounded language beats hype language every single time. A single verifiable data point outperforms a paragraph of marketing copy in Gemini's citation algorithm.</p>
</div>
```

Signal 4:
```html
<div class="signal-detail" id="signal-detail-claude">
  <h3>Signal 4: Claude — Depth Signal</h3>
  <p class="signal-definition">Claude needs dense, well-structured, source-rich content that summarizes cleanly. Claude processes large documents with precision and filters ambiguous content.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Publish comprehensive long-form content with crisp semantic headers at every level</li>
    <li>Build transparent pricing pages, compliance documentation, and product manuals — Claude reads uploaded documents and rewards completeness</li>
    <li>Ensure anthropic-ai and ClaudeBot are unblocked in robots.txt</li>
    <li>Create comparison pages — client versus competitors — with structured feature tables</li>
    <li>Build a detailed About page that clearly establishes expertise and positioning with verifiable credentials</li>
    <li>Add verifiable citations and data sources within all content</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>One well-structured comprehensive page outperforms ten surface-level posts. Ambiguous content gets filtered. Clear, honest, evidence-backed content with a logical structure wins. Transparency about pricing and limitations actually increases Claude citation frequency.</p>
</div>
```

Signal 5:
```html
<div class="signal-detail" id="signal-detail-grok">
  <h3>Signal 5: Grok — Real-Time Citation Signal</h3>
  <p class="signal-definition">Grok is the only AI engine with real-time data ingestion from X (Twitter). Active, authoritative presence in live X conversations is the primary citation driver.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Monitor industry keywords on X in real time</li>
    <li>Establish the client's X account as a topical authority node — structured threads, data tables, pinned resource posts</li>
    <li>Build a Real-Time Response Protocol: when a trend breaks in the client's industry, we draft and deploy a high-density authoritative response within 4 hours</li>
    <li>Map the client's brand to their core topic keywords through consistent, repeated X presence over time</li>
    <li>Track competitor citation velocity on X and identify the gaps we can occupy before competitors respond</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>Grok's real-time data ingestion means the window to capture a citation when a trend breaks is measured in hours, not weeks. The brand that responds fastest with the most authoritative content owns the citation. Speed is the only competitive advantage that matters for this signal.</p>
</div>
```

Signal 6:
```html
<div class="signal-detail" id="signal-detail-manus">
  <h3>Signal 6: Manus AI — Machine Interactivity Signal</h3>
  <p class="signal-definition">Manus AI is an autonomous agent that navigates and transacts on websites. If an agent cannot click the button, the brand does not exist in the agent economy.</p>
  <h4>What we do:</h4>
  <ul>
    <li>Audit the full DOM tree for semantic HTML — every button, form, and CTA must have explicit labels and IDs</li>
    <li>Replace all anonymous div wrappers with standard semantic elements — &lt;button id="start-free-trial"&gt; not &lt;div class="btn-492"&gt;</li>
    <li>Eliminate all pricing walls — transparent pricing tiers must be machine-readable on the page</li>
    <li>Implement self-serve account creation with zero human-gating — no "contact sales" walls</li>
    <li>Verify API documentation exists and is publicly accessible</li>
    <li>Test conversion funnels using automated browser scripts that replicate how Manus navigates a website</li>
  </ul>
  <h4>What moves the needle:</h4>
  <p>Manus doesn't read — it acts. Frictionless self-serve is not optional in the agent economy. Transparent pricing means autonomous agents can evaluate and recommend a brand without human intervention. Semantic HTML means agents can navigate and complete transactions without errors.</p>
</div>
```

**Section 4: Full FAQ**
```html
<section id="methodology-faq" aria-label="Frequently asked questions">
  <div class="container">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item" id="faq-what-is-aeo">
      <h3>What is Answer Engine Optimization?</h3>
      <p>Answer Engine Optimization (AEO) is the practice of optimizing a business to be cited by AI engines — ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI — when users ask questions in that business's industry.</p>
    </div>

    <div class="faq-item" id="faq-six-signal">
      <h3>What is the Six Signal System?</h3>
      <p>The Six Signal System is AEO Clarify's proprietary methodology that activates one optimization signal per AI engine simultaneously. Each AI engine has a distinct indexing architecture requiring a different strategy to achieve citation.</p>
    </div>

    <div class="faq-item" id="faq-timeline">
      <h3>How long does AEO take to show results?</h3>
      <p>AEO Clarify's 90-Day Visibility Sprint delivers measurable AI Share of Voice improvement within 90 days. Technical foundations show impact in 30 days. Full citation authority across all six engines builds over the full 90-day sprint.</p>
    </div>

    <div class="faq-item" id="faq-sov">
      <h3>What is AI Share of Voice?</h3>
      <p>AI Share of Voice measures how often and how prominently a business is cited by AI engines when users ask relevant questions. It is scored 0-5 per engine per prompt and aggregated across all six major AI engines into an overall percentage.</p>
    </div>

    <div class="faq-item" id="faq-five-spheres">
      <h3>What is the Five Sphere Audit?</h3>
      <p>The Five Sphere Audit is AEO Clarify's baseline assessment that examines all five zones where AI engines gather evidence about a brand: Owned Property, Third-Party Validation, Community and Sentiment, Shared Knowledge Base, and Real-Time and Social.</p>
    </div>

    <div class="faq-item" id="faq-why-different">
      <h3>Why does each AI engine need a different strategy?</h3>
      <p>ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI each use different indexing architectures and citation criteria. ChatGPT weights entity clarity. Perplexity weights citability and extractability. Gemini requires Google indexing eligibility. Claude rewards depth and completeness. Grok prioritizes real-time X presence. Manus AI requires machine-readable semantic HTML.</p>
    </div>

  </div>
</section>
```

---

## STEP 13: SERVICES PAGE (services.html — url: /services)

**File:** `services.html`

### Head section

```html
<title>AEO Clarify Services — Six Signal System Implementation</title>
<meta name="description" content="AEO Clarify services: Five Sphere Audit, AI Share of Voice baseline, Technical Foundation Fix, Citation Magnet pages, Real-Time Citation Response System, DOM machine-readiness audit.">
<meta property="og:title" content="AEO Clarify Services — Six Signal System Implementation">
<meta property="og:description" content="AEO Clarify services: Five Sphere Audit, AI Share of Voice baseline, Technical Foundation Fix, Citation Magnet pages, Real-Time Citation Response System, DOM machine-readiness audit.">
<meta property="og:url" content="https://aeoclarify.com/services">
<link rel="canonical" href="https://aeoclarify.com/services">
```

### Services page body content

**Section 1: Hero**
```html
<section id="services-hero" aria-label="Services hero">
  <div class="container">
    <span class="section-tag">What We Do</span>
    <h1>Every service we offer exists to move one number: your AI Share of Voice.</h1>
    <p class="hero-sub">We do not sell content. We do not sell SEO. We build the technical and content infrastructure that makes AI engines cite your business by name — and we measure every step of the way.</p>
  </div>
</section>
```

**Section 2: How it works**
```html
<section id="how-it-works" aria-label="How AEO Clarify works">
  <div class="container">
    <h2>Audit. Fix. Build. Measure.</h2>
    <p>Every engagement follows the same four-phase process regardless of tier.</p>

    <div class="process-steps">

      <div class="process-step" id="process-audit">
        <div class="step-number">01</div>
        <h3>Audit</h3>
        <p>We run a full Five Sphere Audit and establish your AI Share of Voice baseline across all six engines. We document exactly where you are, which engines are ignoring you, and which competitors are getting the citations you should own. This is the before. Everything we do gets measured against it.</p>
      </div>

      <div class="process-step" id="process-fix">
        <div class="step-number">02</div>
        <h3>Fix</h3>
        <p>We fix the technical foundation first. Unblock all AI crawlers in robots.txt. Deploy complete JSON-LD schema. Fix server-side rendering issues. Align NAP data. No content strategy works if the technical gates are closed. We open every gate before writing a single word.</p>
      </div>

      <div class="process-step" id="process-build">
        <div class="step-number">03</div>
        <h3>Build</h3>
        <p>We build the content and authority infrastructure. Answer-First pages. Citation Magnet assets. Third-party platform profiles. X topical authority. Wikidata entity nodes. The structures that make AI engines not just find your brand but trust it enough to recommend it.</p>
      </div>

      <div class="process-step" id="process-measure">
        <div class="step-number">04</div>
        <h3>Measure</h3>
        <p>We track AI Share of Voice on a monthly basis for Starter and Growth clients, weekly for Agency clients. We re-run the same baseline prompts across all six engines every tracking period and document every change. The 90-day final report is your before vs. after proof of work.</p>
      </div>

    </div>

  </div>
</section>
```

**Section 3: Full service list**
```html
<section id="service-list" aria-label="Full service list">
  <div class="container">
    <h2>What is included in every engagement</h2>

    <div class="service-category" id="service-cat-foundation">
      <h3>Technical Foundation (Month 1)</h3>
      <ul>
        <li>Full Five Sphere Audit — all five zones scored and documented</li>
        <li>AI Share of Voice baseline — 6 engines, 6 prompts, 36-point scoresheet</li>
        <li>robots.txt audit and fix — all AI crawlers explicitly allowed</li>
        <li>JSON-LD schema deployment — Organization, FAQ, Product or Service, LocalBusiness where applicable</li>
        <li>sameAs entity links deployed to Wikidata, LinkedIn, and Crunchbase</li>
        <li>Server-side rendering verification — all content present in raw HTML source</li>
        <li>NAP alignment audit — Name, Address, Phone consistent across all major directories</li>
        <li>Core page rewrite using Answer-First architecture — sub-350-character definition blocks under every heading</li>
        <li>FAQ page rebuild with chunk-ready definition blocks</li>
        <li>HTML comparison tables for key product or service features</li>
        <li>Technical Ingestion Report delivered at end of Month 1</li>
      </ul>
    </div>

    <div class="service-category" id="service-cat-authority">
      <h3>Authority Building (Month 2)</h3>
      <ul>
        <li>G2 profile — all metadata fields completed</li>
        <li>Capterra profile — all metadata fields completed</li>
        <li>Trustpilot profile — all metadata fields completed</li>
        <li>Crunchbase profile — all metadata fields completed</li>
        <li>3 to 5 independent third-party mentions seeded — guest posts, niche directories, or podcast appearances</li>
        <li>Wikidata entity node established where applicable</li>
        <li>X account launched with structured topical authority threads</li>
        <li>Reddit monitoring activated across relevant subreddits</li>
        <li>First competitor sentiment analysis across Facebook, Instagram, and Reddit</li>
        <li>Authority Footprint Report delivered at end of Month 2</li>
      </ul>
    </div>

    <div class="service-category" id="service-cat-velocity">
      <h3>Velocity and Citation (Month 3)</h3>
      <ul>
        <li>Flagship Citation Magnet page published — original research, benchmark, or comprehensive comparison</li>
        <li>Real-Time Citation Response System activated — 4-hour Grok trend response protocol live</li>
        <li>Second and third Citation Magnet assets published</li>
        <li>Co-branded content with one strategic partner initiated</li>
        <li>Full DOM audit completed — all semantic HTML issues resolved</li>
        <li>Review platform monitoring and positive sentiment seeding</li>
        <li>Weekly AI Share of Voice tracking activated</li>
        <li>90-Day AI Share of Voice Report delivered — before vs. after proof across all 6 engines</li>
      </ul>
    </div>

  </div>
</section>
```

**Section 4: Tool stack**
```html
<section id="tool-stack" aria-label="Our tool stack">
  <div class="container">
    <h2>The tools behind the methodology</h2>
    <p>Every data point we use to audit, monitor, and measure is pulled from purpose-built tools matched to each sphere of AI consensus.</p>

    <table id="tools-table" aria-label="AEO Clarify tool stack">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Sphere</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Website Content Crawler</td><td>Owned Property</td><td>Technical audit, content analysis, schema verification</td></tr>
        <tr><td>Google Search Results Scraper</td><td>All Spheres</td><td>AI citation monitoring across all 6 engines</td></tr>
        <tr><td>YouTube Scraper</td><td>Community</td><td>Video transcript analysis and brand mention detection</td></tr>
        <tr><td>YouTube Search Scraper</td><td>Community</td><td>Competitor video intelligence and topic tracking</td></tr>
        <tr><td>Reddit Scraper Lite</td><td>Community</td><td>Sentiment monitoring and share of voice in subreddits</td></tr>
        <tr><td>Instagram Scraper</td><td>Community</td><td>Brand mention detection and sentiment analysis</td></tr>
        <tr><td>Instagram Comments Scraper</td><td>Community</td><td>Deep comment sentiment analysis on competitor posts</td></tr>
        <tr><td>Facebook Pages Scraper</td><td>Third-Party Validation</td><td>Competitor page intelligence and positioning analysis</td></tr>
        <tr><td>Facebook Comments Scraper</td><td>Community</td><td>Brand sentiment analysis in Facebook communities</td></tr>
        <tr><td>Tweet Scraper V2</td><td>Real-Time and Social</td><td>Grok citation velocity monitoring and trend detection</td></tr>
        <tr><td>Airtable</td><td>Operations</td><td>Client conflict filter and roster management system</td></tr>
      </tbody>
    </table>

  </div>
</section>
```

**Section 5: CTA to pricing**
```html
<section id="services-cta" aria-label="Services call to action">
  <div class="container">
    <h2>See exactly what each tier includes</h2>
    <p>Every tier includes the full 90-Day Visibility Sprint. The difference is the depth of coverage, the frequency of reporting, and the scope of authority building.</p>
    <a href="/pricing" id="services-pricing-cta" class="btn-primary btn-large">View Pricing</a>
  </div>
</section>
```

---

## STEP 14: PRICING PAGE (pricing.html — url: /pricing)

**File:** `pricing.html`

### Head section

```html
<title>AEO Clarify Pricing — $1,997 / $2,497 / $4,997 per month</title>
<meta name="description" content="AEO Clarify pricing: Starter at $1,997 per month, Growth at $2,497 per month, Agency at $4,997 per month. One client per industry vertical per market.">
<meta property="og:title" content="AEO Clarify Pricing — $1,997 / $2,497 / $4,997 per month">
<meta property="og:description" content="AEO Clarify pricing: Starter at $1,997 per month, Growth at $2,497 per month, Agency at $4,997 per month. One client per industry vertical per market.">
<meta property="og:url" content="https://aeoclarify.com/pricing">
<link rel="canonical" href="https://aeoclarify.com/pricing">
```

### Pricing page body content

**Section 1: Hero**
```html
<section id="pricing-hero" aria-label="Pricing hero">
  <div class="container">
    <h1>Straightforward pricing. No hidden fees. One client per market.</h1>
    <p class="hero-sub">Every tier includes the full 90-Day Visibility Sprint. Your AI Share of Voice goes up or we keep working until it does.</p>
  </div>
</section>
```

**Section 2: Founding member bar**
```html
<div id="founding-member-bar" role="status" aria-live="polite">
  <div class="container">
    <span class="founding-icon">★</span>
    <strong>Founding Member Spots:</strong> <span id="founding-spots-remaining">22</span> of 25 remaining — Lock in $500/month off your chosen tier for life.
  </div>
</div>
```

**Section 3: Pricing cards**
```html
<section id="pricing-cards" aria-label="Pricing tiers">
  <div class="container">
    <div class="pricing-grid">

      <!-- Starter -->
      <div class="pricing-card" id="pricing-starter">
        <div class="pricing-tier-name">Starter</div>
        <div class="pricing-price">
          <span class="price-amount">$1,997</span>
          <span class="price-period">/month</span>
        </div>
        <p class="pricing-summary">The complete technical foundation and baseline measurement for businesses entering the AI era.</p>
        <ul class="pricing-features">
          <li>Full Five Sphere Audit</li>
          <li>AI Share of Voice Baseline Report</li>
          <li>robots.txt audit and fix — all AI crawlers unblocked</li>
          <li>JSON-LD schema deployment — Organization, FAQ, Product or Service</li>
          <li>Answer-First content restructuring — up to 10 pages</li>
          <li>Vertical registry optimization — G2, Crunchbase, Trustpilot</li>
          <li>Monthly AI Share of Voice tracking report</li>
          <li>Single industry vertical, single geographic market</li>
          <li>90-Day Visibility Sprint</li>
          <li>Before vs. after AI SoV proof report at 90 days</li>
        </ul>
        <a href="/waitlist" id="pricing-starter-cta" class="btn-secondary">Join Waitlist</a>
      </div>

      <!-- Growth -->
      <div class="pricing-card pricing-card-featured" id="pricing-growth">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-tier-name">Growth</div>
        <div class="pricing-price">
          <span class="price-amount">$2,497</span>
          <span class="price-period">/month</span>
        </div>
        <p class="pricing-summary">Everything in Starter plus real-time citation response, community monitoring, and competitor intelligence.</p>
        <ul class="pricing-features">
          <li>Everything in Starter</li>
          <li>Real-Time Citation Response System — 4-hour Grok trend response protocol</li>
          <li>Reddit and community sphere monitoring</li>
          <li>Facebook and Instagram sentiment monitoring</li>
          <li>Citation Magnet asset — 1 per quarter</li>
          <li>DOM accessibility audit for Manus AI machine interactivity</li>
          <li>X topical authority management</li>
          <li>Competitor intelligence reporting</li>
        </ul>
        <a href="/waitlist" id="pricing-growth-cta" class="btn-primary">Join Waitlist</a>
      </div>

      <!-- Agency -->
      <div class="pricing-card" id="pricing-agency">
        <div class="pricing-tier-name">Agency</div>
        <div class="pricing-price">
          <span class="price-amount">$4,997</span>
          <span class="price-period">/month</span>
        </div>
        <p class="pricing-summary">The full Six Signal System for brands that need to own their market across every AI engine with maximum speed and coverage.</p>
        <ul class="pricing-features">
          <li>Everything in Growth</li>
          <li>Full Six Signal System — all six engines activated simultaneously</li>
          <li>Wikidata entity graph injection</li>
          <li>Co-branded content cluster strategy</li>
          <li>Weekly AI Share of Voice tracking — not monthly</li>
          <li>Priority 2-hour Real-Time Response window</li>
          <li>Multiple brand or location coverage</li>
          <li>Dedicated account lead</li>
        </ul>
        <a href="/waitlist" id="pricing-agency-cta" class="btn-secondary">Join Waitlist</a>
      </div>

    </div>
  </div>
</section>
```

**Section 4: Exclusivity and conflict filter**
```html
<section id="pricing-exclusivity" aria-label="Exclusivity model">
  <div class="container">
    <h2>One client per industry vertical per geographic market.</h2>
    <p>Before any client is onboarded, they are run through the AEO Clarify Conflict Filter. We cross-reference every new inquiry against our current client roster. If a direct competitor in the same vertical and market is already a client, we disclose and decline.</p>
    <p>This is a selling point, not a limitation. Clients pay more knowing that our methodology, our attention, and our strategy belong exclusively to them in their market. We cannot build an impenetrable AI citation moat for Client A while simultaneously building one for Client A's direct competitor.</p>
  </div>
</section>
```

**Section 5: Founding member detail**
```html
<section id="founding-member-detail" aria-label="Founding member program">
  <div class="container">
    <div class="founding-box">
      <h2>Founding Member Program</h2>
      <p>The first 25 clients to join AEO Clarify lock in $500 per month off their chosen tier — for life. That means:</p>
      <ul>
        <li>Starter founding members pay $1,497 per month forever</li>
        <li>Growth founding members pay $1,997 per month forever</li>
        <li>Agency founding members pay $4,497 per month forever</li>
      </ul>
      <p>As of today, <strong><span id="founding-spots-remaining-2">22</span> of 25 founding member spots remain.</strong> Once all 25 are filled, the founding member rate closes permanently.</p>
      <a href="/waitlist" id="founding-member-cta" class="btn-primary">Claim a Founding Member Spot</a>
    </div>
  </div>
</section>
```

---

## STEP 15: ABOUT PAGE (about.html — url: /about)

**File:** `about.html`

### Head section

```html
<title>About AEO Clarify — Who We Are and Why We Build First</title>
<meta name="description" content="AEO Clarify was built on one belief: we do not promise what we cannot deliver. We run the Six Signal System on ourselves before we sell it to a single client.">
<meta property="og:title" content="About AEO Clarify — Who We Are and Why We Build First">
<meta property="og:description" content="AEO Clarify was built on one belief: we do not promise what we cannot deliver. We run the Six Signal System on ourselves before we sell it to a single client.">
<meta property="og:url" content="https://aeoclarify.com/about">
<link rel="canonical" href="https://aeoclarify.com/about">
```

### About page body content

**Section 1: Hero**
```html
<section id="about-hero" aria-label="About hero">
  <div class="container">
    <h1>We build first. We sell second.</h1>
    <p class="hero-sub">AEO Clarify was built on one principle: we do not promise what we cannot deliver. Before we take a single client, we run the Six Signal System on AEO Clarify itself.</p>
  </div>
</section>
```

**Section 2: Our story**
```html
<section id="our-story" aria-label="Our story">
  <div class="container">
    <h2>The build-first philosophy</h2>
    <p>Before we take a single client, we run the Six Signal System on AEO Clarify itself. We document the baseline. We execute the 90-day sprint. We measure the results across all six engines. Only when we have proof — real AI Share of Voice scores, real citation movement across ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI — do we offer this service to clients.</p>
    <p>That is not a sales tactic. That is the only way to build a methodology you can stand behind. We are the first client. This website, this GitHub repository, this content — all of it is the Six Signal System applied to ourselves in real time.</p>

    <h2>What we believe</h2>
    <ul class="beliefs-list">
      <li>AI engines are the new front page of the internet — and they are replacing the old one faster than most businesses realize</li>
      <li>Businesses that build their AI citation infrastructure now will own their markets for years before competitors understand what happened</li>
      <li>Generic content is invisible to AI engines — specificity, corroboration, and consistency are the only things that win citations</li>
      <li>One client per market is not a limitation — it is the only ethical way to do this work and the only way to do it well</li>
      <li>We do not promise and then figure it out — we figure it out and then promise</li>
    </ul>

    <h2>Our tools</h2>
    <p>Every data point we use is pulled from purpose-built tools. We do not guess at AI citation behavior. We measure it, track it, and adjust based on what the data shows. Our internal audit tools — the robots.txt auditor, the schema validator, the DOM audit tool, and the AI Share of Voice tracker — are open and documented on GitHub.</p>

    <a href="https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker" id="about-github-link" target="_blank" rel="noopener noreferrer" class="btn-secondary">View Our Tools on GitHub</a>

  </div>
</section>
```

---

## STEP 16: WAITLIST PAGE (waitlist.html — url: /waitlist)

**File:** `waitlist.html`

### Head section

```html
<title>Join the AEO Clarify Waitlist — Check Your Market Availability</title>
<meta name="description" content="AEO Clarify takes one client per industry vertical per market. Join the waitlist to check if your market is available. Founding member spots include $500 per month off for life.">
<meta property="og:title" content="Join the AEO Clarify Waitlist — Check Your Market Availability">
<meta property="og:description" content="AEO Clarify takes one client per industry vertical per market. Join the waitlist to check if your market is available. Founding member spots include $500 per month off for life.">
<meta property="og:url" content="https://aeoclarify.com/waitlist">
<link rel="canonical" href="https://aeoclarify.com/waitlist">
```

### Waitlist schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Join the AEO Clarify Waitlist",
  "description": "Check market availability and join the AEO Clarify waitlist for Answer Engine Optimization services.",
  "url": "https://aeoclarify.com/waitlist"
}
</script>
```

### Waitlist page body content

**Section 1: Hero**
```html
<section id="waitlist-hero" aria-label="Waitlist hero">
  <div class="container">
    <h1>Check Your Market Availability</h1>
    <p class="hero-sub">We take one client per industry vertical per geographic market. Tell us about your business and we'll confirm within 24 hours whether your market is open.</p>
    <div id="founding-spots-bar" role="status" aria-live="polite">
      <span class="founding-icon">★</span>
      <strong><span id="waitlist-founding-spots">22</span> of 25 founding member spots remaining</strong> — $500/month off your chosen tier for life.
    </div>
  </div>
</section>
```

**Section 2: The form**

This is the most important section. Every field must have an `id`, a `name`, and an associated `<label>`. Every field is required. The submit button must have an `id`.

```html
<section id="waitlist-form-section" aria-label="Waitlist form">
  <div class="container">
    <div class="form-wrapper">

      <form id="waitlist-form" novalidate aria-label="Market availability check form">

        <div class="form-group">
          <label for="full-name">Full Name *</label>
          <input type="text" id="full-name" name="full_name" placeholder="Your full name" required autocomplete="name">
        </div>

        <div class="form-group">
          <label for="business-name">Business Name *</label>
          <input type="text" id="business-name" name="business_name" placeholder="Your business or brand name" required autocomplete="organization">
        </div>

        <div class="form-group">
          <label for="website-url">Website URL *</label>
          <input type="url" id="website-url" name="website_url" placeholder="https://yourbusiness.com" required autocomplete="url">
        </div>

        <div class="form-group">
          <label for="industry">Industry / Vertical *</label>
          <input type="text" id="industry" name="industry" placeholder="e.g. Legal SaaS, Commercial Real Estate, Personal Finance" required>
        </div>

        <div class="form-group">
          <label for="market">Primary Market / Geography *</label>
          <input type="text" id="market" name="market" placeholder="e.g. United States, London UK, Southeast Asia" required>
        </div>

        <div class="form-group">
          <label for="competitors">Top 3 Competitors *</label>
          <textarea id="competitors" name="competitors" placeholder="List your top 3 direct competitors — one per line" required rows="4"></textarea>
        </div>

        <div class="form-group">
          <label for="tier">Tier Interest *</label>
          <select id="tier" name="tier" required>
            <option value="" disabled selected>Select a tier</option>
            <option value="starter">Starter — $1,997/month</option>
            <option value="growth">Growth — $2,497/month (Most Popular)</option>
            <option value="agency">Agency — $4,997/month</option>
          </select>
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required autocomplete="email">
        </div>

        <button type="submit" id="check-availability" class="btn-primary btn-large btn-full">
          Check My Market Availability
        </button>

        <p class="form-note">We will cross-reference your industry and market against our current client roster and respond within 24 hours. If your market is open, we will send onboarding details.</p>

      </form>

      <!-- Success message — hidden until form is submitted -->
      <div id="waitlist-success" role="alert" aria-live="assertive" hidden>
        <div class="success-icon">✓</div>
        <h2>We've received your submission.</h2>
        <p>We'll cross-reference your industry and market against our current client roster and respond within 24 hours. If your market is open, we'll send onboarding details to the email address you provided.</p>
        <p>While you wait — <a href="/methodology" id="success-methodology-link">read the methodology</a> to understand exactly what we'll do for your business.</p>
      </div>

    </div>
  </div>
</section>
```

**Section 3: What happens next**
```html
<section id="what-happens-next" aria-label="What happens after you apply">
  <div class="container">
    <h2>What happens after you apply</h2>

    <div class="next-steps">

      <div class="next-step" id="next-step-1">
        <div class="step-number">1</div>
        <h3>We check for conflicts</h3>
        <p>Within 24 hours, we cross-reference your industry vertical and geographic market against our current client roster in our conflict filter system. If a direct competitor is already a client, we will tell you immediately.</p>
      </div>

      <div class="next-step" id="next-step-2">
        <div class="step-number">2</div>
        <h3>We confirm your market</h3>
        <p>If your market is open, we send you a confirmation email with onboarding details. If you are a founding member applicant, we confirm your locked-in rate at this stage.</p>
      </div>

      <div class="next-step" id="next-step-3">
        <div class="step-number">3</div>
        <h3>We run your baseline audit</h3>
        <p>In the first week of your engagement, we run your full Five Sphere Audit and establish your AI Share of Voice baseline across all six engines. This is the before. Everything we do for the next 90 days gets measured against it.</p>
      </div>

    </div>

  </div>
</section>
```

---

## STEP 17: JAVASCRIPT FILE (app.js)

Write a single `app.js` file that handles:

**1. Mobile menu toggle:**
```javascript
const toggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    mobileMenu.setAttribute('aria-hidden', expanded);
    mobileMenu.classList.toggle('open');
  });
}
```

**2. Sticky nav behavior:**
```javascript
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}
```

**3. Waitlist form submission:**
```javascript
const form = document.getElementById('waitlist-form');
const success = document.getElementById('waitlist-success');
if (form && success) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('check-availability');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Submit to form handler
    fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(res) {
      if (res.ok) {
        form.hidden = true;
        success.hidden = false;
        decrementFoundingSpots();
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Check My Market Availability';
        alert('Something went wrong. Please try again or email us directly.');
      }
    })
    .catch(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Check My Market Availability';
      alert('Something went wrong. Please try again or email us directly.');
    });
  });
}
```

**4. Founding spots counter:**
```javascript
function decrementFoundingSpots() {
  const els = document.querySelectorAll('#founding-spots-remaining, #founding-spots-remaining-2, #waitlist-founding-spots');
  els.forEach(function(el) {
    const current = parseInt(el.textContent);
    if (current > 0) el.textContent = current - 1;
  });
}
```

**5. Active nav link:**
```javascript
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');
navLinks.forEach(function(link) {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});
```

**6. Smooth scroll for anchor links:**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

---

## STEP 18: FORM BACKEND

Create a form handler at `/api/waitlist` that:

1. Accepts POST requests with JSON body containing: full_name, business_name, website_url, industry, market, competitors, tier, email
2. Stores each submission with a timestamp
3. Sends an email notification to cartissahenry@gmail.com with all submission fields formatted clearly
4. Returns HTTP 200 on success
5. Returns HTTP 500 on failure

Email notification format:
```
Subject: New AEO Clarify Waitlist Submission — [business_name]

New waitlist submission received:

Name: [full_name]
Business: [business_name]
Website: [website_url]
Industry: [industry]
Market: [market]
Tier Interest: [tier]
Email: [email]

Competitors:
[competitors]

Submitted: [timestamp]
```

---

## STEP 19: ACCESSIBILITY REQUIREMENTS — APPLY TO EVERY PAGE

Every page must meet these requirements without exception:

1. Every `<img>` tag has an `alt` attribute describing the image
2. Every `<button>` has an `id` attribute and an `aria-label` if it contains only an icon
3. Every `<input>` has an `id`, a `name`, and an associated `<label>` that references it via `for`
4. Every `<select>` has an `id`, a `name`, and an associated `<label>`
5. Every `<textarea>` has an `id`, a `name`, and an associated `<label>`
6. No `<div>` or `<span>` elements are used as buttons — use `<button>` tags only
7. No anonymous click handlers on non-interactive elements
8. Color contrast ratio is minimum 4.5:1 for all text
9. All interactive elements are reachable by keyboard tab navigation
10. All pages have a single `<h1>` tag
11. Heading hierarchy is logical: h1 → h2 → h3, never skipping levels
12. All pages have `lang="en"` on the `<html>` tag
13. All pages have `<main>` element wrapping the primary content
14. Navigation has `role="navigation"` and `aria-label`
15. Footer has `role="contentinfo"`

---

## STEP 20: PERFORMANCE REQUIREMENTS — APPLY TO EVERY PAGE

1. All CSS is in `styles.css` — no inline styles except where dynamically required
2. All JavaScript is in `app.js` — no inline scripts except JSON-LD schema blocks
3. Google Fonts loaded with `preconnect` hints
4. Images use `loading="lazy"` attribute except the first above-the-fold image
5. No render-blocking resources other than the main stylesheet
6. All pages have all content visible in the raw HTML source before JavaScript runs — this is non-negotiable for AI bot access

---

## STEP 21: BUILD ORDER — DO THIS IN SEQUENCE

Build in this exact order:

1. Create `robots.txt`
2. Create `sitemap.xml`
3. Write `styles.css` — full design system, all components
4. Write `app.js` — all JavaScript functions
5. Build navigation component HTML
6. Build footer component HTML
7. Build `index.html` — home page
8. Build `waitlist.html` — waitlist page
9. Build `pricing.html` — pricing page
10. Build `methodology.html` — methodology page
11. Build `services.html` — services page
12. Build `about.html` — about page
13. Set up form backend at `/api/waitlist`
14. Test all pages render correctly with full content in HTML source
15. Test all forms submit correctly
16. Test mobile responsive layout on all pages
17. Test all navigation links work correctly between pages
18. Verify `robots.txt` is accessible at `/robots.txt`
19. Verify `sitemap.xml` is accessible at `/sitemap.xml`
20. Push all files to GitHub repository branch `claude/loving-bardeen-M4QYG`
21. Deploy to Manus hosting
22. Configure custom domain DNS for aeoclarify.com

---

## STEP 22: PUSH TO GITHUB

After build is complete and tested, push all files to:

**Repository:** https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker  
**Branch:** claude/loving-bardeen-M4QYG

Files to push:
- `index.html`
- `methodology.html`
- `services.html`
- `pricing.html`
- `about.html`
- `waitlist.html`
- `styles.css`
- `app.js`
- `robots.txt`
- `sitemap.xml`
- All API backend files

Commit message: `Build aeoclarify.com — complete Six Signal System website v1`

---

*AEO Clarify — Manus Build Blueprint Complete*  
*Every step included. Nothing summarized. Nothing left out.*  
*Build exactly what is written here.*
