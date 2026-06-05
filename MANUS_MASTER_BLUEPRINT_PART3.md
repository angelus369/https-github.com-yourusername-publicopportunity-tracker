# MANUS MASTER BLUEPRINT — AEOCLARIFY.COM
## Part 3 of 3: All Page HTML, Form Backend, and Final Build Checklist

---

## SECTION 17: COMPLETE HEAD TEMPLATE (use on every page, change title/description/url per page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE HERE</title>
  <meta name="description" content="PAGE DESCRIPTION HERE">
  <meta property="og:title" content="PAGE TITLE HERE">
  <meta property="og:description" content="PAGE DESCRIPTION HERE">
  <meta property="og:url" content="PAGE CANONICAL URL HERE">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://aeoclarify.com/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="PAGE TITLE HERE">
  <meta name="twitter:description" content="PAGE DESCRIPTION HERE">
  <link rel="canonical" href="PAGE CANONICAL URL HERE">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <!-- PAGE-SPECIFIC JSON-LD SCHEMA GOES HERE -->
  <!-- GLOBAL ORGANIZATION SCHEMA GOES ON EVERY PAGE -->
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
```

---

## SECTION 18: NAVIGATION HTML (paste at top of `<body>` on every page)

```html
<nav id="main-nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="/" id="nav-logo" aria-label="AEO Clarify home page">
        <span class="logo-icon" aria-hidden="true">◎</span>
        <span class="logo-text">AEO Clarify</span>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="/methodology" id="nav-methodology">Methodology</a></li>
        <li><a href="/services" id="nav-services">Services</a></li>
        <li><a href="/pricing" id="nav-pricing">Pricing</a></li>
        <li><a href="/about" id="nav-about">About</a></li>
      </ul>
      <a href="/waitlist" id="nav-cta" class="btn-primary">Join Waitlist</a>
      <button id="mobile-menu-toggle" aria-label="Open mobile navigation menu" aria-expanded="false" aria-controls="mobile-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <div id="mobile-menu" role="navigation" aria-label="Mobile navigation" aria-hidden="true">
    <ul role="list">
      <li><a href="/methodology" id="mobile-nav-methodology">Methodology</a></li>
      <li><a href="/services" id="mobile-nav-services">Services</a></li>
      <li><a href="/pricing" id="mobile-nav-pricing">Pricing</a></li>
      <li><a href="/about" id="mobile-nav-about">About</a></li>
      <li><a href="/waitlist" id="mobile-nav-cta">Join Waitlist</a></li>
    </ul>
  </div>
</nav>
```

---

## SECTION 19: FOOTER HTML (paste before closing `</body>` on every page)

```html
<footer id="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="/" id="footer-logo" aria-label="AEO Clarify home page">
          <span class="logo-icon" aria-hidden="true">◎</span>
          <span class="logo-text">AEO Clarify</span>
        </a>
        <p class="footer-tagline">Consistency plus corroboration.<br>That is how you become unciteable.</p>
      </div>
      <nav aria-label="Footer navigation">
        <ul role="list">
          <li><a href="/methodology" id="footer-nav-methodology">Methodology</a></li>
          <li><a href="/services" id="footer-nav-services">Services</a></li>
          <li><a href="/pricing" id="footer-nav-pricing">Pricing</a></li>
          <li><a href="/about" id="footer-nav-about">About</a></li>
          <li><a href="/waitlist" id="footer-nav-waitlist">Join Waitlist</a></li>
        </ul>
      </nav>
      <div class="footer-right">
        <a href="https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker"
           id="footer-github"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="AEO Clarify tools on GitHub">
          GitHub — Internal Tools
        </a>
        <p class="footer-copy">© 2025 AEO Clarify. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
<script src="app.js"></script>
```

---

## SECTION 20: COMPLETE HOME PAGE — index.html

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
    "sameAs": ["https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker"],
    "offers": [
      {"@type": "Offer", "name": "Starter", "price": "1997", "priceCurrency": "USD", "billingIncrement": "month"},
      {"@type": "Offer", "name": "Growth", "price": "2497", "priceCurrency": "USD", "billingIncrement": "month"},
      {"@type": "Offer", "name": "Agency", "price": "4997", "priceCurrency": "USD", "billingIncrement": "month"}
    ]
  }
  </script>
</head>
<body>

<!-- NAVIGATION -->
[PASTE NAVIGATION HTML FROM SECTION 18]

<main id="main-content">

  <!-- FOUNDING MEMBER BAR -->
  <div id="founding-member-bar" role="status" aria-live="polite">
    <div class="container">
      <span class="founding-icon" aria-hidden="true">★</span>
      <strong>Founding Member Spots:</strong>
      <span id="founding-spots-remaining">22</span> of 25 remaining —
      Lock in $500/month off your chosen tier for life.
      <a href="/waitlist" id="founding-bar-cta">Claim your spot →</a>
    </div>
  </div>

  <!-- HERO -->
  <section id="hero" aria-label="Hero — AEO Clarify makes your business the answer">
    <div class="container">
      <div class="hero-badge">Answer Engine Optimization</div>
      <h1>We Make Your Business<br>the Answer</h1>
      <p class="hero-sub">When someone asks an AI engine about your industry — ChatGPT, Perplexity, Gemini, Claude, Grok, Manus — your brand should be the first name it says. AEO Clarify makes that happen in 90 days.</p>
      <div class="hero-ctas">
        <a href="/waitlist" id="hero-cta-primary" class="btn-primary btn-large">Join the Waitlist</a>
        <a href="/methodology" id="hero-cta-secondary" class="btn-secondary btn-large">See How It Works</a>
      </div>
      <div class="hero-engines" aria-label="AI engines we optimize for">
        <span class="engine-label">Optimized for all 6 AI engines:</span>
        <div class="engine-chips" role="list">
          <span class="chip chip-dark" role="listitem">ChatGPT</span>
          <span class="chip chip-dark" role="listitem">Perplexity</span>
          <span class="chip chip-dark" role="listitem">Gemini</span>
          <span class="chip chip-dark" role="listitem">Claude</span>
          <span class="chip chip-dark" role="listitem">Grok</span>
          <span class="chip chip-dark" role="listitem">Manus AI</span>
        </div>
      </div>
    </div>
  </section>

  <!-- THE PROBLEM -->
  <section id="problem" class="section" aria-label="The problem — AI is replacing search">
    <div class="container text-center">
      <h2>Search is dying.<br>AI is the new front page.</h2>
      <p class="section-lead max-width-700">People are no longer Googling their way to answers. They're asking ChatGPT. They're using Perplexity. They're talking to Gemini. And those AI engines are deciding — right now — which businesses get recommended and which ones get ignored.</p>
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

  <!-- SIX SIGNAL SYSTEM -->
  <section id="six-signal-system" class="section" aria-label="The Six Signal System">
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
          <p>GPTBot access confirmed, JSON-LD Organization schema with sameAs links, Answer-First content architecture, third-party corroboration seeded. ChatGPT needs to verify your entity is real before it recommends you.</p>
        </div>
        <div class="signal-card" id="signal-perplexity">
          <div class="signal-engine">Perplexity</div>
          <div class="signal-name">Citability Signal</div>
          <p>A flagship Citation Magnet page built around original research or benchmark data. HTML comparison tables, TL;DR blocks, PerplexityBot unblocked. The brand easiest to cite wins every citation.</p>
        </div>
        <div class="signal-card" id="signal-gemini">
          <div class="signal-engine">Gemini</div>
          <div class="signal-name">Google Ecosystem Signal</div>
          <p>Googlebot and Google-Extended access verified. Google indexing eligibility achieved. Definition-First architecture. NAP alignment across Google Business Profile, Apple Business Connect, Bing Places.</p>
        </div>
        <div class="signal-card" id="signal-claude">
          <div class="signal-engine">Claude</div>
          <div class="signal-name">Depth Signal</div>
          <p>Comprehensive long-form content, transparent pricing pages, comparison tables, detailed About page. Anthropic-ai and ClaudeBot unblocked. Honesty and completeness win Claude citations.</p>
        </div>
        <div class="signal-card" id="signal-grok">
          <div class="signal-engine">Grok</div>
          <div class="signal-name">Real-Time Citation Signal</div>
          <p>Active X presence as a topical authority node. Structured threads, data tables, pinned resource posts. 4-hour trend response protocol. Grok is real-time — speed is the competitive advantage.</p>
        </div>
        <div class="signal-card" id="signal-manus">
          <div class="signal-engine">Manus AI</div>
          <div class="signal-name">Machine Interactivity Signal</div>
          <p>Full DOM audit, semantic HTML with explicit labels on every element, transparent pricing, self-serve signup. Manus doesn't read — it acts. If an agent can't click the button, the brand doesn't exist.</p>
        </div>
      </div>
      <div class="text-center mt-48">
        <a href="/methodology" id="signals-learn-more" class="btn-secondary">See the Full Methodology</a>
      </div>
    </div>
  </section>

  <!-- FIVE SPHERES -->
  <section id="five-spheres" class="section" aria-label="The Five Spheres of AI Consensus">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">The Five Sphere Audit</span>
        <h2>Before we touch anything, we audit every zone where AI engines look.</h2>
        <p class="section-lead">AI engines don't just look at your website. They pull evidence from five distinct zones. We audit all five and fix what's broken before we write a single word of content.</p>
      </div>
      <div class="spheres-list">
        <div class="sphere-item" id="sphere-owned">
          <div class="sphere-number" aria-hidden="true">1</div>
          <div class="sphere-content">
            <h3>Owned Property</h3>
            <p>Your website's technical foundation — robots.txt configured for all AI crawlers, JSON-LD schema deployed, server-side rendering confirmed, Answer-First content architecture, FAQ pages with sub-350-character definition blocks, original research and data.</p>
          </div>
        </div>
        <div class="sphere-item" id="sphere-third-party">
          <div class="sphere-number" aria-hidden="true">2</div>
          <div class="sphere-content">
            <h3>Third-Party Validation</h3>
            <p>G2, Capterra, Trustpilot, Google Business Profile, Crunchbase, AngelList, and niche directories. Digital PR and earned media. NAP consistency — identical Name, Address, Phone across every platform. AI engines cross-verify entities before recommending them.</p>
          </div>
        </div>
        <div class="sphere-item" id="sphere-community">
          <div class="sphere-number" aria-hidden="true">3</div>
          <div class="sphere-content">
            <h3>Community and Sentiment</h3>
            <p>Reddit, Quora, Facebook, Instagram, YouTube. What real people say in unmanaged spaces. AI engines weight organic community sentiment because it cannot be faked at scale. Negative patterns here suppress citations. Positive patterns accelerate them.</p>
          </div>
        </div>
        <div class="sphere-item" id="sphere-knowledge">
          <div class="sphere-number" aria-hidden="true">4</div>
          <div class="sphere-content">
            <h3>Shared Knowledge Base</h3>
            <p>Wikidata entity graph — the most important verification layer in AI indexing. Wikipedia where applicable. GitHub for technical brands. Knowledge Graph entity verification. This is the foundational training data layer all AI engines share.</p>
          </div>
        </div>
        <div class="sphere-item" id="sphere-realtime">
          <div class="sphere-number" aria-hidden="true">5</div>
          <div class="sphere-content">
            <h3>Real-Time and Social</h3>
            <p>X (Twitter) brand mentions and citation velocity. Trending topic positioning. Breaking industry event response speed. Partner and co-branded content clusters. Grok's primary data source. The brands that respond to trends in hours, not days, own this sphere.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 90-DAY SPRINT -->
  <section id="ninety-day-sprint" class="section" aria-label="The 90-Day Visibility Sprint">
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
            <li>Full Five Sphere Audit</li>
            <li>AI Share of Voice baseline — 36 data points</li>
            <li>Unblock all AI crawlers in robots.txt</li>
            <li>Deploy complete JSON-LD schema network</li>
            <li>Fix server-side rendering issues</li>
            <li>Align NAP data across all directories</li>
            <li>Rewrite core pages — Answer-First architecture</li>
            <li>Build flagship Citation Magnet page</li>
            <li>Restructure FAQs — sub-350-character blocks</li>
            <li>Build HTML comparison tables</li>
          </ul>
          <div class="deliverable-box">
            <strong>Month 1 Deliverable</strong>
            Technical Ingestion Report — proof all AI crawlers can now access and parse the client's site
          </div>
        </div>
        <div class="sprint-month" id="sprint-month-2">
          <div class="month-label">Month 2</div>
          <div class="month-theme">Authority</div>
          <div class="month-subtitle">"Make you credible."</div>
          <ul class="month-items">
            <li>Complete G2, Capterra, Trustpilot, Crunchbase profiles</li>
            <li>Seed 3–5 independent third-party mentions</li>
            <li>Establish Wikidata entity node</li>
            <li>Launch X topical authority presence</li>
            <li>Activate Reddit community monitoring</li>
            <li>Run competitor sentiment analysis</li>
          </ul>
          <div class="deliverable-box">
            <strong>Month 2 Deliverable</strong>
            Authority Footprint Report — Five Sphere scores updated, all third-party mentions documented
          </div>
        </div>
        <div class="sprint-month" id="sprint-month-3">
          <div class="month-label">Month 3</div>
          <div class="month-theme">Velocity</div>
          <div class="month-subtitle">"Make you the answer."</div>
          <ul class="month-items">
            <li>Real-Time Citation Response System live</li>
            <li>Publish 2nd and 3rd Citation Magnet assets</li>
            <li>Begin co-branded content partnership</li>
            <li>Full DOM audit — all Manus AI gaps fixed</li>
            <li>Review platform monitoring and seeding</li>
            <li>Weekly AI Share of Voice tracking</li>
          </ul>
          <div class="deliverable-box">
            <strong>Month 3 Deliverable</strong>
            90-Day AI SoV Report — before vs. after scores across all 6 engines. This is the proof.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOV SCORING -->
  <section id="sov-scoring" class="section" aria-label="AI Share of Voice scoring scale">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">How We Measure</span>
        <h2>We measure what matters — your AI Share of Voice.</h2>
        <p class="section-lead">AI Share of Voice is the percentage of AI engine responses in your industry that cite your brand. We score it before we start and after 90 days. The difference is the proof.</p>
      </div>
      <div class="sov-scale" role="list" aria-label="AI Share of Voice scoring scale">
        <div class="sov-level sov-invisible" role="listitem">
          <div class="sov-range">0% — 20%</div>
          <div class="sov-status">INVISIBLE</div>
          <div class="sov-desc">AI engines do not know this brand. Never cited or recommended in any response.</div>
        </div>
        <div class="sov-level sov-fragmented" role="listitem">
          <div class="sov-range">21% — 50%</div>
          <div class="sov-status">FRAGMENTED</div>
          <div class="sov-desc">Occasional mentions, low confidence. AI engines are aware but not recommending.</div>
        </div>
        <div class="sov-level sov-emerging" role="listitem">
          <div class="sov-range">51% — 75%</div>
          <div class="sov-status">EMERGING</div>
          <div class="sov-desc">Growing presence across multiple engines. Some gaps remain.</div>
        </div>
        <div class="sov-level sov-authority" role="listitem">
          <div class="sov-range">76% — 90%</div>
          <div class="sov-status">AUTHORITY</div>
          <div class="sov-desc">Strong presence across most engines. Featured prominently and accurately.</div>
        </div>
        <div class="sov-level sov-moat" role="listitem">
          <div class="sov-range">91% +</div>
          <div class="sov-status">MOAT STATUS ← This is where we take you.</div>
          <div class="sov-desc">Definitive answer across all engines. Primary recommended brand in the market.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXCLUSIVITY -->
  <section id="exclusivity" aria-label="Exclusivity model">
    <div class="container">
      <h2>We take one client per industry vertical per market.</h2>
      <p>AEO Clarify operates on a full exclusivity model. We cannot build an AI citation moat for your business while simultaneously building one for your direct competitor. Our clients pay more knowing our loyalty is absolute and exclusive to their market.</p>
      <p>Join the waitlist to check whether your market is available. If it is open, we will confirm and send onboarding details within 24 hours.</p>
      <a href="/waitlist" id="exclusivity-cta" class="btn-white">Check Your Market Availability</a>
      <p class="founding-note">★ Founding member spots — $500/month off for life — are nearly gone.</p>
    </div>
  </section>

</main>

<!-- FOOTER -->
[PASTE FOOTER HTML FROM SECTION 19]

</body>
</html>
```

---

## SECTION 21: WAITLIST PAGE — waitlist.html (most important page — build this second after home)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Join the AEO Clarify Waitlist — Check Your Market Availability</title>
  <meta name="description" content="AEO Clarify takes one client per industry vertical per market. Check if your market is available. Founding member spots include $500/month off for life.">
  <meta property="og:title" content="Join the AEO Clarify Waitlist — Check Your Market Availability">
  <meta property="og:description" content="AEO Clarify takes one client per industry vertical per market. Check if your market is available. Founding member spots include $500/month off for life.">
  <meta property="og:url" content="https://aeoclarify.com/waitlist">
  <link rel="canonical" href="https://aeoclarify.com/waitlist">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AEO Clarify",
    "url": "https://aeoclarify.com",
    "description": "AEO Clarify is an Answer Engine Optimization agency that makes businesses visible to every major AI engine in 90 days.",
    "sameAs": ["https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker"]
  }
  </script>
</head>
<body>

[PASTE NAVIGATION HTML FROM SECTION 18]

<main id="main-content">

  <section id="waitlist-hero" aria-label="Waitlist — check market availability">
    <div class="container">
      <span class="section-tag section-tag-light">One Client Per Market</span>
      <h1>Check Your Market Availability</h1>
      <p class="hero-sub">We take one client per industry vertical per geographic market. Tell us about your business and we'll confirm within 24 hours whether your market is open.</p>
      <div id="founding-spots-bar" role="status" aria-live="polite">
        <span class="founding-icon" aria-hidden="true">★</span>
        <strong><span id="waitlist-founding-spots">22</span> of 25 founding member spots remaining</strong>
        — Lock in $500/month off your chosen tier for life.
      </div>
    </div>
  </section>

  <section id="waitlist-form-section" class="section" aria-label="Market availability application form">
    <div class="container">
      <div class="form-wrapper">

        <form id="waitlist-form" novalidate aria-label="AEO Clarify market availability check form">

          <div class="form-group">
            <label for="full-name">Full Name <span aria-hidden="true">*</span></label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              placeholder="Your full name"
              required
              autocomplete="name"
              aria-required="true"
            >
          </div>

          <div class="form-group">
            <label for="business-name">Business Name <span aria-hidden="true">*</span></label>
            <input
              type="text"
              id="business-name"
              name="business_name"
              placeholder="Your business or brand name"
              required
              autocomplete="organization"
              aria-required="true"
            >
          </div>

          <div class="form-group">
            <label for="website-url">Website URL <span aria-hidden="true">*</span></label>
            <input
              type="url"
              id="website-url"
              name="website_url"
              placeholder="https://yourbusiness.com"
              required
              autocomplete="url"
              aria-required="true"
            >
          </div>

          <div class="form-group">
            <label for="industry">Industry / Vertical <span aria-hidden="true">*</span></label>
            <input
              type="text"
              id="industry"
              name="industry"
              placeholder="e.g. Legal SaaS, Commercial Real Estate, Personal Finance"
              required
              aria-required="true"
            >
          </div>

          <div class="form-group">
            <label for="market">Primary Market / Geography <span aria-hidden="true">*</span></label>
            <input
              type="text"
              id="market"
              name="market"
              placeholder="e.g. United States, London UK, Southeast Asia"
              required
              aria-required="true"
            >
          </div>

          <div class="form-group">
            <label for="competitors">Top 3 Competitors <span aria-hidden="true">*</span></label>
            <textarea
              id="competitors"
              name="competitors"
              placeholder="List your top 3 direct competitors — one per line"
              required
              rows="4"
              aria-required="true"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="tier">Tier Interest <span aria-hidden="true">*</span></label>
            <select id="tier" name="tier" required aria-required="true">
              <option value="" disabled selected>Select a tier</option>
              <option value="starter">Starter — $1,997/month</option>
              <option value="growth">Growth — $2,497/month (Most Popular)</option>
              <option value="agency">Agency — $4,997/month</option>
            </select>
          </div>

          <div class="form-group">
            <label for="email">Email Address <span aria-hidden="true">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              autocomplete="email"
              aria-required="true"
            >
          </div>

          <button type="submit" id="check-availability" class="btn-primary btn-large btn-full" aria-label="Submit market availability check form">
            Check My Market Availability
          </button>

          <p class="form-note">
            We will cross-reference your industry and market against our current client roster and respond within 24 hours.
            If your market is open, we will send onboarding details.
          </p>

        </form>

        <div id="waitlist-success" role="alert" aria-live="assertive" hidden>
          <div class="success-icon" aria-hidden="true">✓</div>
          <h2>We've received your submission.</h2>
          <p>We'll cross-reference your industry and market against our current client roster and respond within 24 hours.</p>
          <p>If your market is open, we'll send onboarding details to the email address you provided.</p>
          <p style="margin-top: 24px;">
            While you wait —
            <a href="/methodology" id="success-methodology-link">read the methodology</a>
            to understand exactly what we'll do for your business.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section id="what-happens-next" class="section" aria-label="What happens after applying">
    <div class="container">
      <div class="section-header">
        <h2>What happens after you apply</h2>
      </div>
      <div class="next-steps">
        <div class="next-step" id="next-step-1">
          <div class="step-number" aria-hidden="true">1</div>
          <h3>We check for conflicts</h3>
          <p>Within 24 hours we cross-reference your industry vertical and geographic market against our current client roster. If a direct competitor is already a client, we tell you immediately.</p>
        </div>
        <div class="next-step" id="next-step-2">
          <div class="step-number" aria-hidden="true">2</div>
          <h3>We confirm your market</h3>
          <p>If your market is open, we send you a confirmation email with onboarding details. Founding member applicants get their rate locked in at this stage.</p>
        </div>
        <div class="next-step" id="next-step-3">
          <div class="step-number" aria-hidden="true">3</div>
          <h3>We run your baseline audit</h3>
          <p>Week one: full Five Sphere Audit and AI Share of Voice baseline across all 6 engines. This is the before. Everything we do for 90 days gets measured against it.</p>
        </div>
      </div>
    </div>
  </section>

</main>

[PASTE FOOTER HTML FROM SECTION 19]

</body>
</html>
```

---

## SECTION 22: FORM BACKEND — /api/waitlist

Build a server-side endpoint at `/api/waitlist` that handles POST requests from the waitlist form.

**What it must do:**

1. Accept POST request with JSON body
2. Parse these fields: full_name, business_name, website_url, industry, market, competitors, tier, email, submitted_at, page_url
3. Validate that all required fields are present — return 400 if missing
4. Store the submission (file, database, or Manus-provided storage)
5. Send an email notification to cartissahenry@gmail.com
6. Return HTTP 200 with JSON: `{"success": true, "message": "Submission received"}`
7. Return HTTP 500 on server error with JSON: `{"success": false, "message": "Server error"}`

**Email notification format — send this exactly:**

```
To: cartissahenry@gmail.com
Subject: New AEO Clarify Waitlist Submission — [business_name]

New waitlist submission received at [submitted_at]

────────────────────────────────────
APPLICANT DETAILS
────────────────────────────────────
Name:         [full_name]
Business:     [business_name]
Website:      [website_url]
Email:        [email]

────────────────────────────────────
MARKET INFORMATION
────────────────────────────────────
Industry:     [industry]
Market:       [market]
Tier:         [tier]

────────────────────────────────────
COMPETITORS
────────────────────────────────────
[competitors]

────────────────────────────────────
ACTION REQUIRED
────────────────────────────────────
1. Check Airtable conflict filter for: [industry] / [market]
2. If no conflict: respond with market confirmation and onboarding details
3. If conflict: respond with disclosure and decline
4. Response deadline: within 24 hours of [submitted_at]

────────────────────────────────────
Source: [page_url]
```

---

## SECTION 23: PRICING PAGE — pricing.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AEO Clarify Pricing — $1,997 / $2,497 / $4,997 per month</title>
  <meta name="description" content="AEO Clarify pricing: Starter $1,997/month, Growth $2,497/month, Agency $4,997/month. One client per industry vertical per market. Founding member spots available.">
  <meta property="og:title" content="AEO Clarify Pricing — $1,997 / $2,497 / $4,997 per month">
  <meta property="og:url" content="https://aeoclarify.com/pricing">
  <link rel="canonical" href="https://aeoclarify.com/pricing">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AEO Clarify",
    "url": "https://aeoclarify.com",
    "description": "Answer Engine Optimization agency. Pricing: Starter $1,997/month, Growth $2,497/month, Agency $4,997/month.",
    "offers": [
      {"@type": "Offer", "name": "Starter", "price": "1997", "priceCurrency": "USD", "billingIncrement": "month", "description": "Full Five Sphere Audit, AI Share of Voice Baseline, Technical Foundation Fix, Answer-First content restructuring up to 10 pages, vertical registry optimization, monthly AI SoV tracking report"},
      {"@type": "Offer", "name": "Growth", "price": "2497", "priceCurrency": "USD", "billingIncrement": "month", "description": "Everything in Starter plus Real-Time Citation Response System, community monitoring, Citation Magnet asset, DOM audit, X authority management, competitor intelligence"},
      {"@type": "Offer", "name": "Agency", "price": "4997", "priceCurrency": "USD", "billingIncrement": "month", "description": "Everything in Growth plus full Six Signal System, Wikidata injection, weekly tracking, priority response window, multiple brand coverage, dedicated account lead"}
    ]
  }
  </script>
</head>
<body>

[PASTE NAVIGATION HTML FROM SECTION 18]

<main id="main-content">

  <section id="pricing-hero" aria-label="Pricing hero">
    <div class="container">
      <h1>Straightforward pricing.<br>No hidden fees. One client per market.</h1>
      <p class="hero-sub">Every tier includes the full 90-Day Visibility Sprint. Your AI Share of Voice goes up or we keep working until it does.</p>
    </div>
  </section>

  <div id="founding-member-bar" role="status" aria-live="polite">
    <div class="container">
      <span class="founding-icon" aria-hidden="true">★</span>
      <strong>Founding Member Spots:</strong>
      <span id="founding-spots-remaining">22</span> of 25 remaining —
      Lock in $500/month off your chosen tier for life.
    </div>
  </div>

  <section id="pricing-cards" class="section" aria-label="Pricing tiers">
    <div class="container">
      <div class="pricing-grid">

        <div class="pricing-card" id="pricing-starter">
          <div class="pricing-tier-name">Starter</div>
          <div class="pricing-price">
            <span class="price-amount">$1,997</span>
            <span class="price-period">/month</span>
          </div>
          <p class="pricing-summary">The complete technical foundation and baseline measurement for businesses entering the AI era.</p>
          <ul class="pricing-features">
            <li>Full Five Sphere Audit</li>
            <li>AI Share of Voice Baseline Report (36 data points)</li>
            <li>robots.txt audit and fix — all 11 AI crawlers unblocked</li>
            <li>JSON-LD schema deployment — Organization, FAQ, Product or Service</li>
            <li>sameAs entity links to Wikidata, LinkedIn, Crunchbase</li>
            <li>Answer-First content restructuring — up to 10 pages</li>
            <li>FAQ restructuring — sub-350-character definition blocks</li>
            <li>Vertical registry optimization — G2, Crunchbase, Trustpilot</li>
            <li>Monthly AI Share of Voice tracking report</li>
            <li>Single industry vertical, single geographic market</li>
            <li>90-Day Visibility Sprint</li>
          </ul>
          <a href="/waitlist" id="pricing-starter-cta" class="btn-secondary" aria-label="Join waitlist for Starter tier">Join Waitlist</a>
        </div>

        <div class="pricing-card pricing-card-featured" id="pricing-growth">
          <div class="pricing-badge" aria-label="Most popular tier">Most Popular</div>
          <div class="pricing-tier-name">Growth</div>
          <div class="pricing-price">
            <span class="price-amount">$2,497</span>
            <span class="price-period">/month</span>
          </div>
          <p class="pricing-summary">Everything in Starter plus real-time citation response, community monitoring, and competitor intelligence.</p>
          <ul class="pricing-features">
            <li>Everything in Starter</li>
            <li>Real-Time Citation Response System — 4-hour Grok protocol</li>
            <li>Reddit and community sphere monitoring</li>
            <li>Facebook and Instagram sentiment monitoring</li>
            <li>Citation Magnet asset — 1 per quarter</li>
            <li>DOM accessibility audit for Manus AI</li>
            <li>X topical authority management</li>
            <li>Competitor intelligence reporting</li>
          </ul>
          <a href="/waitlist" id="pricing-growth-cta" class="btn-primary" aria-label="Join waitlist for Growth tier">Join Waitlist</a>
        </div>

        <div class="pricing-card" id="pricing-agency">
          <div class="pricing-tier-name">Agency</div>
          <div class="pricing-price">
            <span class="price-amount">$4,997</span>
            <span class="price-period">/month</span>
          </div>
          <p class="pricing-summary">The full Six Signal System for brands that need to own their market across every AI engine with maximum speed and coverage.</p>
          <ul class="pricing-features">
            <li>Everything in Growth</li>
            <li>Full Six Signal System — all six engines activated</li>
            <li>Wikidata entity graph injection</li>
            <li>Co-branded content cluster strategy</li>
            <li>Weekly AI Share of Voice tracking</li>
            <li>Priority 2-hour Real-Time Response window</li>
            <li>Multiple brand or location coverage</li>
            <li>Dedicated account lead</li>
          </ul>
          <a href="/waitlist" id="pricing-agency-cta" class="btn-secondary" aria-label="Join waitlist for Agency tier">Join Waitlist</a>
        </div>

      </div>
    </div>
  </section>

  <section id="pricing-exclusivity" class="section" aria-label="Exclusivity and conflict filter">
    <div class="container max-width-700">
      <h2>One client per industry vertical per geographic market.</h2>
      <p>Before any client is onboarded, they are run through the AEO Clarify Conflict Filter. We cross-reference every new inquiry against our current client roster. If a direct competitor in the same vertical and market is already a client, we disclose and decline.</p>
      <p>Clients pay premium pricing specifically because our methodology, our attention, and our strategy belong exclusively to them in their market. We cannot build an impenetrable AI citation moat for Client A while simultaneously building one for Client A's direct competitor.</p>
    </div>
  </section>

  <section id="founding-member-detail" class="section-sm" aria-label="Founding member program details">
    <div class="container">
      <div class="founding-box">
        <h2>Founding Member Program</h2>
        <p>The first 25 clients to join AEO Clarify lock in $500/month off their chosen tier — permanently.</p>
        <ul>
          <li>Starter founding members pay <strong>$1,497/month forever</strong></li>
          <li>Growth founding members pay <strong>$1,997/month forever</strong></li>
          <li>Agency founding members pay <strong>$4,497/month forever</strong></li>
        </ul>
        <p>As of today, <strong><span id="founding-spots-remaining-2">22</span> of 25 founding member spots remain.</strong> Once all 25 are filled, the founding member rate closes permanently.</p>
        <a href="/waitlist" id="founding-member-cta" class="btn-white" aria-label="Claim a founding member spot on the waitlist">Claim a Founding Member Spot</a>
      </div>
    </div>
  </section>

</main>

[PASTE FOOTER HTML FROM SECTION 19]

</body>
</html>
```

---

## SECTION 24: FINAL BUILD CHECKLIST — VERIFY EVERY ITEM BEFORE DEPLOYING

### Files created:
- [ ] `index.html` — home page
- [ ] `methodology.html` — methodology page
- [ ] `services.html` — services page
- [ ] `pricing.html` — pricing page
- [ ] `about.html` — about page
- [ ] `waitlist.html` — waitlist page
- [ ] `styles.css` — complete stylesheet
- [ ] `app.js` — complete JavaScript
- [ ] `robots.txt` — all 12 crawlers allowed + sitemap declaration
- [ ] `sitemap.xml` — all 6 pages listed
- [ ] `/api/waitlist` — form handler live, email notifications to cartissahenry@gmail.com

### Every page:
- [ ] `<!DOCTYPE html>` and `<html lang="en">` present
- [ ] `<meta charset="UTF-8">` present
- [ ] `<meta name="viewport">` present
- [ ] `<title>` tag present and unique per page
- [ ] `<meta name="description">` present and unique per page
- [ ] `<meta property="og:title">` present
- [ ] `<meta property="og:description">` present
- [ ] `<meta property="og:url">` present with correct URL
- [ ] `<link rel="canonical">` present with correct URL
- [ ] Global Organization JSON-LD schema present in `<head>`
- [ ] Inter font loaded via Google Fonts with preconnect hints
- [ ] `styles.css` linked
- [ ] Navigation component present at top of body
- [ ] `<main id="main-content">` wraps page content
- [ ] Footer component present at bottom of body
- [ ] `app.js` loaded before `</body>`
- [ ] All content visible in raw HTML source before JavaScript runs

### Accessibility — check every page:
- [ ] Every `<button>` has an `id` attribute
- [ ] Every `<button>` that is icon-only has an `aria-label`
- [ ] Every `<input>` has an `id`, a `name`, and a `<label for="[id]">`
- [ ] Every `<select>` has an `id`, a `name`, and a `<label for="[id]">`
- [ ] Every `<textarea>` has an `id`, a `name`, and a `<label for="[id]">`
- [ ] Every `<img>` has an `alt` attribute
- [ ] No `<div>` or `<span>` used as a clickable button
- [ ] Single `<h1>` per page
- [ ] Heading hierarchy is h1 → h2 → h3 with no skips
- [ ] Navigation has `role="navigation"` and `aria-label`
- [ ] Footer has `role="contentinfo"`
- [ ] `<main>` element wraps primary content

### SEO and AI indexing — check every page:
- [ ] robots.txt accessible at `https://aeoclarify.com/robots.txt`
- [ ] sitemap.xml accessible at `https://aeoclarify.com/sitemap.xml`
- [ ] JSON-LD validates without errors (test at validator.schema.org)
- [ ] All pages return HTTP 200
- [ ] All pages load under 2 seconds
- [ ] No redirect chains

### Forms:
- [ ] Waitlist form submits without errors
- [ ] Email notification arrives at cartissahenry@gmail.com on submission
- [ ] Success message shows after submission
- [ ] Form is hidden after successful submission
- [ ] Submit button shows loading state during submission
- [ ] Validation errors shown on required empty fields

### Mobile:
- [ ] All pages render correctly at 375px width (iPhone SE)
- [ ] All pages render correctly at 768px width (iPad)
- [ ] Mobile hamburger menu opens and closes
- [ ] All buttons and links are tappable (minimum 44px touch target)
- [ ] Pricing cards stack vertically on mobile
- [ ] Sprint timeline stacks vertically on mobile

### GitHub sync:
- [ ] All files pushed to repository: `https://github.com/angelus369/https-github.com-yourusername-publicopportunity-tracker`
- [ ] Branch: `claude/loving-bardeen-M4QYG`
- [ ] Commit message: `Build aeoclarify.com — complete Six Signal System website v1`

### Domain:
- [ ] Custom domain aeoclarify.com configured in Manus hosting
- [ ] DNS pointed to Manus hosting servers
- [ ] SSL certificate active — all pages load via HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] www redirects to non-www (or vice versa — pick one and be consistent)

---

## SECTION 25: WHAT THIS WEBSITE MUST ACCOMPLISH FOR AEO CLARIFY ITSELF

This website is not just a business website — it is the Six Signal System running on AEO Clarify in real time. Every element serves a dual purpose: selling the service AND proving the methodology works.

**Sphere 1 — Owned Property:**
- robots.txt allows all 11 AI crawlers ← this page does that
- JSON-LD Organization schema with sameAs to GitHub ← this page does that
- Server-side rendered content — all HTML visible before JS ← build requirement
- Answer-First architecture — every section has sub-350-char definition blocks ← content requirement
- FAQ schema on methodology page ← included

**Sphere 4 — Shared Knowledge Base:**
- GitHub repository with working tools and methodology documentation ← already done
- Website links to GitHub, GitHub links to website ← two entities corroborating each other
- This creates the entity verification loop AI engines require

**What we still need to do after the website launches:**
- Submit sitemap to Google Search Console (Sphere 3 prerequisite for Gemini)
- Complete Crunchbase, G2, Trustpilot profiles for AEO Clarify (Sphere 2)
- Establish Wikidata entity for AEO Clarify (Sphere 4 — the Holy Grail)
- Launch X account for AEO Clarify (Sphere 5)
- Begin Reddit presence in AEO-adjacent subreddits (Sphere 3)

The website is the foundation. Everything above builds on top of it.

---

*MANUS MASTER BLUEPRINT — COMPLETE*
*Part 1: Business context, philosophy, methodology, tools, 90-day sprint, pricing*
*Part 2: Technical specs, complete CSS, complete JavaScript*
*Part 3: All page HTML, form backend, full build checklist*

*Build exactly what is written here. Nothing summarized. Nothing left out.*
*The website must prove the methodology works on us before we sell it to anyone.*
