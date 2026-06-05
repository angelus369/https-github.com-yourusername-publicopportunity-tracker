# MANUS MASTER BLUEPRINT — AEOCLARIFY.COM
## Part 2 of 3: Complete Technical Specifications and All Page Content

---

## SECTION 12: COMPLETE FILE STRUCTURE

Build the following file structure exactly:

```
aeoclarify.com/
├── index.html
├── methodology.html
├── services.html
├── pricing.html
├── about.html
├── waitlist.html
├── robots.txt
├── sitemap.xml
├── styles.css
├── app.js
└── api/
    └── waitlist.js (or waitlist handler — server-side)
```

---

## SECTION 13: ROBOTS.TXT — EXACT CONTENT

Create this file exactly as written. No changes. No additions. No removals.

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

## SECTION 14: SITEMAP.XML — EXACT CONTENT

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

## SECTION 15: COMPLETE CSS — styles.css

Write the complete styles.css file with every rule needed to build the full site. Include all of the following:

```css
/* ===========================
   RESET AND BASE
   =========================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  background: #ffffff;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* ===========================
   CSS VARIABLES
   =========================== */
:root {
  --primary: #368BC1;
  --primary-dark: #2a6d99;
  --primary-light: #e0f2fe;
  --navy: #0f172a;
  --navy-soft: #1e293b;
  --white: #ffffff;
  --gray-text: #64748b;
  --gray-light: #f8fafc;
  --gray-border: #e2e8f0;
  --green: #22c55e;
  --green-light: #dcfce7;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
}

/* ===========================
   LAYOUT
   =========================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 80px 0;
}

.section-sm {
  padding: 48px 0;
}

.section-lg {
  padding: 120px 0;
}

/* ===========================
   TYPOGRAPHY
   =========================== */
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

h3 {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  line-height: 1.35;
}

h4 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
}

p {
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
}

.text-large {
  font-size: 1.125rem;
  line-height: 1.7;
}

.text-small {
  font-size: 0.875rem;
}

.text-white {
  color: #ffffff;
}

.text-white p {
  color: rgba(255,255,255,0.8);
}

/* ===========================
   BUTTONS
   =========================== */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #368BC1;
  color: #ffffff;
  border: 2px solid #368BC1;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  text-decoration: none;
  white-space: nowrap;
}

.btn-primary:hover {
  background: #2a6d99;
  border-color: #2a6d99;
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #368BC1;
  border: 2px solid #368BC1;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;
}

.btn-secondary:hover {
  background: #368BC1;
  color: #ffffff;
}

.btn-white {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #368BC1;
  border: 2px solid #ffffff;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-white:hover {
  background: transparent;
  color: #ffffff;
}

.btn-large {
  padding: 18px 36px;
  font-size: 18px;
}

.btn-full {
  width: 100%;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===========================
   CHIPS AND BADGES
   =========================== */
.chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: #e0f2fe;
  color: #368BC1;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.chip-dark {
  background: rgba(54,139,193,0.2);
  color: #ffffff;
  border: 1px solid rgba(54,139,193,0.4);
}

.section-tag {
  display: inline-block;
  background: #e0f2fe;
  color: #368BC1;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.section-tag-light {
  background: rgba(54,139,193,0.2);
  color: rgba(255,255,255,0.9);
}

/* ===========================
   CARDS
   =========================== */
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  transform: translateY(-2px);
}

/* ===========================
   GRID SYSTEMS
   =========================== */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-6 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-2,
  .grid-3,
  .grid-6 {
    grid-template-columns: 1fr;
  }
}

/* ===========================
   SECTION HEADERS
   =========================== */
.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
}

.section-header-light {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
}

.section-header-light h2 {
  color: #ffffff;
}

.section-header-light p {
  color: rgba(255,255,255,0.75);
}

.section-lead {
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.7;
  margin-top: 16px;
}

/* ===========================
   NAVIGATION
   =========================== */
#main-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  height: 72px;
  display: flex;
  align-items: center;
  transition: box-shadow 0.2s;
}

#main-nav.scrolled {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

#nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
}

#nav-logo .logo-icon {
  color: #368BC1;
  font-size: 24px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 15px;
  font-weight: 500;
  color: #64748b;
  transition: color 0.2s;
  text-decoration: none;
}

.nav-links a:hover,
.nav-links a.active {
  color: #368BC1;
}

#nav-cta {
  padding: 10px 20px;
  font-size: 15px;
}

#mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

#mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: #0f172a;
  border-radius: 2px;
  transition: all 0.3s;
}

#mobile-menu {
  display: none;
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  padding: 16px 0;
}

#mobile-menu.open {
  display: block;
}

#mobile-menu ul {
  list-style: none;
  padding: 0 24px;
}

#mobile-menu ul li {
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
}

#mobile-menu ul li a {
  font-size: 16px;
  font-weight: 500;
  color: #0f172a;
  text-decoration: none;
}

#mobile-menu ul li:last-child {
  border-bottom: none;
  padding-top: 16px;
}

#mobile-menu ul li:last-child a {
  display: block;
  text-align: center;
  padding: 14px;
  background: #368BC1;
  color: #ffffff;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  #nav-cta { display: none; }
  #mobile-menu-toggle { display: flex; }
  #main-nav {
    flex-direction: column;
    height: auto;
    padding: 0;
    align-items: stretch;
  }
  .nav-inner {
    padding: 0 24px;
    height: 64px;
  }
}

/* ===========================
   HERO SECTION
   =========================== */
#hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 120px 0;
  text-align: center;
}

#hero h1 {
  color: #ffffff;
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-block;
  background: rgba(54,139,193,0.2);
  color: #368BC1;
  border: 1px solid rgba(54,139,193,0.4);
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.hero-sub {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.75);
  max-width: 680px;
  margin: 0 auto 40px;
  line-height: 1.65;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-engines {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.engine-label {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}

.engine-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 640px) {
  #hero { padding: 80px 0; }
  .hero-ctas { flex-direction: column; align-items: center; }
  .hero-ctas a { width: 100%; max-width: 320px; }
}

/* ===========================
   PROBLEM SECTION
   =========================== */
#problem {
  padding: 96px 0;
  text-align: center;
}

#problem h2 {
  margin-bottom: 24px;
}

.section-body {
  font-size: 1.0625rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto 48px;
  line-height: 1.75;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
}

.stat-block {
  padding: 32px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #368BC1;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.stat-desc {
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .stats-row { grid-template-columns: 1fr; }
}

/* ===========================
   SIX SIGNAL SYSTEM
   =========================== */
#six-signal-system {
  padding: 96px 0;
  background: #f8fafc;
}

.signals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.signal-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.signal-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  transform: translateY(-2px);
}

.signal-engine {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #368BC1;
  margin-bottom: 8px;
}

.signal-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}

.signal-card p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .signals-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .signals-grid { grid-template-columns: 1fr; }
}

/* ===========================
   FIVE SPHERES
   =========================== */
#five-spheres {
  padding: 96px 0;
}

.spheres-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
}

.sphere-item {
  display: flex;
  gap: 24px;
  padding: 32px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  align-items: flex-start;
}

.sphere-number {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: #368BC1;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
}

.sphere-content h3 {
  margin-bottom: 12px;
  color: #0f172a;
}

.sphere-content p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .sphere-item { flex-direction: column; }
}

/* ===========================
   90-DAY SPRINT
   =========================== */
#ninety-day-sprint {
  padding: 96px 0;
  background: #0f172a;
}

#ninety-day-sprint h2 {
  color: #ffffff;
}

.sprint-timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.sprint-month {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 32px;
}

.month-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #368BC1;
  margin-bottom: 8px;
}

.month-theme {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

.month-subtitle {
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.6);
  font-style: italic;
  margin-bottom: 24px;
}

.month-items {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.month-items li {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}

.month-items li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #368BC1;
  font-weight: 700;
}

.month-items li:last-child {
  border-bottom: none;
}

.deliverable-box {
  background: rgba(54,139,193,0.15);
  border: 1px solid rgba(54,139,193,0.3);
  border-radius: 8px;
  padding: 16px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
}

.deliverable-box strong {
  color: #368BC1;
  display: block;
  margin-bottom: 4px;
}

@media (max-width: 1024px) {
  .sprint-timeline { grid-template-columns: 1fr; }
}

/* ===========================
   SOV SCORING
   =========================== */
#sov-scoring {
  padding: 96px 0;
}

.sov-scale {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.sov-level {
  display: grid;
  grid-template-columns: 140px 180px 1fr;
  gap: 24px;
  align-items: center;
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.sov-range {
  font-size: 0.875rem;
  font-weight: 700;
  color: #64748b;
}

.sov-status {
  font-weight: 800;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.sov-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
}

.sov-invisible { background: #fef2f2; }
.sov-invisible .sov-status { color: #ef4444; }

.sov-fragmented { background: #fff7ed; }
.sov-fragmented .sov-status { color: #f97316; }

.sov-emerging { background: #fefce8; }
.sov-emerging .sov-status { color: #eab308; }

.sov-authority { background: #f0fdf4; }
.sov-authority .sov-status { color: #22c55e; }

.sov-moat { background: #eff6ff; border-color: #368BC1; }
.sov-moat .sov-status { color: #368BC1; }
.sov-moat .sov-range { color: #368BC1; }

@media (max-width: 640px) {
  .sov-level { grid-template-columns: 1fr; gap: 8px; }
}

/* ===========================
   EXCLUSIVITY CALLOUT
   =========================== */
#exclusivity {
  padding: 80px 0;
  background: #368BC1;
  text-align: center;
}

#exclusivity h2 {
  color: #ffffff;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

#exclusivity p {
  color: rgba(255,255,255,0.85);
  max-width: 620px;
  margin: 0 auto 16px;
  font-size: 1.0625rem;
}

#exclusivity-cta {
  margin-top: 32px;
}

.founding-note {
  margin-top: 20px;
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.7);
}

/* ===========================
   FORMS
   =========================== */
.form-wrapper {
  max-width: 640px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 6px;
}

input[type="text"],
input[type="email"],
input[type="url"],
select,
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  color: #0f172a;
  background: #ffffff;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #368BC1;
  box-shadow: 0 0 0 3px rgba(54,139,193,0.15);
}

textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.6;
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2364748b' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 44px;
}

.form-note {
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 16px;
  text-align: center;
  line-height: 1.6;
}

/* ===========================
   WAITLIST SUCCESS STATE
   =========================== */
#waitlist-success {
  text-align: center;
  padding: 48px 32px;
}

#waitlist-success[hidden] {
  display: none;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: #dcfce7;
  color: #22c55e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 auto 24px;
}

#waitlist-success h2 {
  color: #0f172a;
  margin-bottom: 16px;
}

#waitlist-success p {
  color: #475569;
  max-width: 480px;
  margin: 0 auto 16px;
}

/* ===========================
   FOUNDING MEMBER BAR
   =========================== */
#founding-member-bar {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #ffffff;
  text-align: center;
  padding: 14px 24px;
  font-size: 0.9375rem;
}

#founding-member-bar .founding-icon {
  color: #f59e0b;
  margin-right: 8px;
}

#founding-spots-bar {
  background: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 10px;
  padding: 14px 20px;
  text-align: center;
  font-size: 0.9375rem;
  color: #92400e;
  margin-top: 24px;
}

#founding-spots-bar .founding-icon {
  color: #f59e0b;
}

/* ===========================
   PRICING CARDS
   =========================== */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

.pricing-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 36px 32px;
  position: relative;
  transition: box-shadow 0.2s;
}

.pricing-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}

.pricing-card-featured {
  border-color: #368BC1;
  box-shadow: 0 4px 24px rgba(54,139,193,0.15);
}

.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #368BC1;
  color: #ffffff;
  padding: 6px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.pricing-tier-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 16px;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
}

.price-period {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.pricing-summary {
  font-size: 0.9375rem;
  color: #475569;
  margin-bottom: 24px;
  line-height: 1.6;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
}

.pricing-features li {
  font-size: 0.9375rem;
  color: #475569;
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  border-bottom: 1px solid #f1f5f9;
  line-height: 1.5;
}

.pricing-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #22c55e;
  font-weight: 700;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-card a {
  display: block;
  text-align: center;
}

@media (max-width: 1024px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}

/* ===========================
   TABLES
   =========================== */
#tools-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

#tools-table th {
  background: #f8fafc;
  padding: 14px 20px;
  text-align: left;
  font-weight: 700;
  color: #0f172a;
  border-bottom: 2px solid #e2e8f0;
}

#tools-table td {
  padding: 14px 20px;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
  vertical-align: top;
  line-height: 1.5;
}

#tools-table tr:last-child td {
  border-bottom: none;
}

#tools-table tr:hover td {
  background: #f8fafc;
}

/* ===========================
   FOOTER
   =========================== */
#site-footer {
  background: #0f172a;
  padding: 64px 0 32px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.footer-brand .logo-icon {
  color: #368BC1;
}

.footer-tagline {
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
}

#site-footer nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

#site-footer nav ul li a {
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}

#site-footer nav ul li a:hover {
  color: #ffffff;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

#footer-github {
  font-size: 0.9375rem;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}

#footer-github:hover {
  color: #368BC1;
}

.footer-copy {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .footer-right { align-items: flex-start; }
}

/* ===========================
   FOUNDING BOX (PRICING PAGE)
   =========================== */
.founding-box {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #ffffff;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
}

.founding-box h2 {
  color: #ffffff;
  margin-bottom: 16px;
}

.founding-box p {
  color: rgba(255,255,255,0.75);
  max-width: 580px;
  margin: 0 auto 16px;
}

.founding-box ul {
  list-style: none;
  margin: 24px auto;
  max-width: 400px;
}

.founding-box ul li {
  color: rgba(255,255,255,0.85);
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  font-size: 1.0625rem;
}

.founding-box ul li:last-child {
  border-bottom: none;
}

.founding-box a {
  margin-top: 24px;
}

/* ===========================
   PROCESS STEPS
   =========================== */
.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.process-step {
  padding: 28px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.step-number {
  font-size: 2rem;
  font-weight: 800;
  color: #368BC1;
  margin-bottom: 16px;
  line-height: 1;
}

.process-step h3 {
  margin-bottom: 12px;
  color: #0f172a;
}

.process-step p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .process-steps { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .process-steps { grid-template-columns: 1fr; }
}

/* ===========================
   SERVICE CATEGORIES
   =========================== */
.service-category {
  margin-bottom: 48px;
  padding: 36px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.service-category h3 {
  color: #0f172a;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #368BC1;
}

.service-category ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.service-category ul li {
  font-size: 0.9375rem;
  color: #475569;
  padding: 10px 0;
  padding-left: 20px;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
  line-height: 1.5;
}

.service-category ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #368BC1;
  font-weight: 700;
}

@media (max-width: 640px) {
  .service-category ul { grid-template-columns: 1fr; }
}

/* ===========================
   NEXT STEPS (WAITLIST PAGE)
   =========================== */
.next-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.next-step {
  padding: 28px;
  text-align: center;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.next-step .step-number {
  width: 48px;
  height: 48px;
  background: #368BC1;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 auto 16px;
}

.next-step h3 {
  color: #0f172a;
  margin-bottom: 12px;
  font-size: 1.125rem;
}

.next-step p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.65;
}

@media (max-width: 640px) {
  .next-steps { grid-template-columns: 1fr; }
}

/* ===========================
   ABOUT PAGE
   =========================== */
.beliefs-list {
  list-style: none;
  margin: 24px 0;
}

.beliefs-list li {
  font-size: 1.0625rem;
  color: #475569;
  padding: 14px 0;
  padding-left: 24px;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
  line-height: 1.65;
}

.beliefs-list li::before {
  content: '◎';
  position: absolute;
  left: 0;
  color: #368BC1;
  font-size: 0.875rem;
}

.beliefs-list li:last-child {
  border-bottom: none;
}

/* ===========================
   METHODOLOGY PAGE - SIGNAL DETAILS
   =========================== */
.signal-detail {
  padding: 40px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #368BC1;
  margin-bottom: 32px;
}

.signal-detail h3 {
  color: #0f172a;
  margin-bottom: 16px;
  font-size: 1.375rem;
}

.signal-definition {
  font-size: 1.0625rem;
  color: #1e293b;
  font-weight: 500;
  background: #e0f2fe;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  line-height: 1.6;
}

.signal-detail h4 {
  color: #368BC1;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  margin-top: 20px;
}

.signal-detail ul {
  list-style: none;
  margin-bottom: 16px;
}

.signal-detail ul li {
  font-size: 0.9375rem;
  color: #475569;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
  line-height: 1.55;
}

.signal-detail ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #368BC1;
}

.signal-detail ul li:last-child {
  border-bottom: none;
}

.signal-detail p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.7;
}

/* ===========================
   FAQ
   =========================== */
#methodology-faq {
  padding: 80px 0;
  background: #f8fafc;
}

.faq-item {
  padding: 28px 0;
  border-bottom: 1px solid #e2e8f0;
  max-width: 800px;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h3 {
  color: #0f172a;
  margin-bottom: 12px;
  font-size: 1.125rem;
}

.faq-item p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.7;
}

/* ===========================
   PAGE-SPECIFIC HEROES
   =========================== */
#methodology-hero,
#services-hero,
#pricing-hero,
#about-hero,
#waitlist-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 80px 0;
  text-align: center;
}

#methodology-hero h1,
#services-hero h1,
#pricing-hero h1,
#about-hero h1,
#waitlist-hero h1 {
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto 20px;
}

#methodology-hero .hero-sub,
#services-hero .hero-sub,
#pricing-hero .hero-sub,
#about-hero .hero-sub,
#waitlist-hero .hero-sub {
  color: rgba(255,255,255,0.75);
  font-size: 1.125rem;
  max-width: 620px;
  margin: 0 auto;
}

/* ===========================
   UTILITIES
   =========================== */
.text-center { text-align: center; }
.mt-8 { margin-top: 8px; }
.mt-16 { margin-top: 16px; }
.mt-24 { margin-top: 24px; }
.mt-32 { margin-top: 32px; }
.mt-48 { margin-top: 48px; }
.mt-64 { margin-top: 64px; }
.mb-16 { margin-bottom: 16px; }
.mb-24 { margin-bottom: 24px; }
.mb-32 { margin-bottom: 32px; }
.mb-48 { margin-bottom: 48px; }
.max-width-700 { max-width: 700px; margin-left: auto; margin-right: auto; }
```

---

## SECTION 16: COMPLETE JAVASCRIPT — app.js

```javascript
'use strict';

// ===========================
// MOBILE MENU
// ===========================
(function() {
  var toggle = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-hidden', String(expanded));
    menu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  var menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
})();

// ===========================
// STICKY NAV SHADOW
// ===========================
(function() {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();

// ===========================
// ACTIVE NAV LINK
// ===========================
(function() {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.nav-links a, #mobile-menu a');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '/' && href === '/') || (path !== '/' && href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();

// ===========================
// SMOOTH SCROLL
// ===========================
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// ===========================
// FOUNDING SPOTS COUNTER
// ===========================
var FOUNDING_SPOTS_KEY = 'aeo_founding_spots';
var DEFAULT_SPOTS = 22;

function getFoundingSpots() {
  var stored = localStorage.getItem(FOUNDING_SPOTS_KEY);
  return stored !== null ? parseInt(stored, 10) : DEFAULT_SPOTS;
}

function setFoundingSpots(n) {
  localStorage.setItem(FOUNDING_SPOTS_KEY, String(n));
}

function renderFoundingSpots() {
  var spots = getFoundingSpots();
  var els = document.querySelectorAll(
    '#founding-spots-remaining, #founding-spots-remaining-2, #waitlist-founding-spots'
  );
  els.forEach(function(el) { el.textContent = String(spots); });
}

function decrementFoundingSpots() {
  var spots = getFoundingSpots();
  if (spots > 0) {
    setFoundingSpots(spots - 1);
    renderFoundingSpots();
  }
}

// Initialize counter on page load
document.addEventListener('DOMContentLoaded', renderFoundingSpots);

// ===========================
// WAITLIST FORM
// ===========================
(function() {
  var form = document.getElementById('waitlist-form');
  var success = document.getElementById('waitlist-success');
  if (!form || !success) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    var requiredFields = form.querySelectorAll('[required]');
    var valid = true;
    requiredFields.forEach(function(field) {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      var firstInvalid = form.querySelector('[required]:invalid, [required][style*="ef4444"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var submitBtn = document.getElementById('check-availability');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Checking availability...';

    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) { data[key] = value; });
    data.submitted_at = new Date().toISOString();
    data.page_url = window.location.href;

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Server error');
      }
    })
    .catch(function(err) {
      console.error('Waitlist submission error:', err);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Check My Market Availability';
      alert('Something went wrong. Please try again or email us directly at cartissahenry@gmail.com');
    });
  });

  // Real-time validation feedback
  var fields = form.querySelectorAll('input, select, textarea');
  fields.forEach(function(field) {
    field.addEventListener('blur', function() {
      if (this.hasAttribute('required') && !this.value.trim()) {
        this.style.borderColor = '#ef4444';
      } else {
        this.style.borderColor = '';
      }
    });
    field.addEventListener('input', function() {
      if (this.value.trim()) {
        this.style.borderColor = '';
      }
    });
  });
})();
```

---

*End of Part 2. Continue to Part 3 for all page HTML, form backend, and final build checklist.*
