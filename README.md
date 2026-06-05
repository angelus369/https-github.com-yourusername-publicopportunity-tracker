# AEO Clarify

**Answer Engine Optimization for the AI-First Era**

AEO Clarify is an Answer Engine Optimization agency that helps businesses get cited — by name — as the definitive answer across every major AI engine: ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI.

Website: [aeoclarify.com](https://aeoclarify.com)

---

## What Is AEO?

Search Engine Optimization (SEO) optimizes for Google's blue links. Answer Engine Optimization (AEO) optimizes for AI engine citations — the responses that ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI generate when someone asks a question in your industry.

When a potential customer asks an AI engine *"What is the best [service] for [my problem]?"* — is your business the answer?

If not, AEO Clarify fixes that.

---

## The Six Signal System™

Our proprietary methodology targets all six major AI engines simultaneously. Each engine has a distinct indexing architecture — one strategy does not fit all.

| Signal | Engine | What It Needs |
|--------|--------|---------------|
| Entity Clarity Signal | ChatGPT | Clear crawlable entity + third-party corroboration |
| Citability Signal | Perplexity | Quote-ready, extractable content with original data |
| Google Ecosystem Signal | Gemini | Technical Google eligibility + evidence-grounded content |
| Depth Signal | Claude | Dense, well-structured, source-rich comprehensive content |
| Real-Time Citation Signal | Grok | Active X presence + 4-hour trend response protocol |
| Machine Interactivity Signal | Manus AI | Semantic HTML + transparent pricing + self-serve signup |

**Core Principle:** *Consistency plus corroboration.*

When all six signals point to the same brand with the same facts, the same authority, and the same story — AI engines stop guessing and start recommending.

---

## The Five Spheres of AI Consensus

Every client goes through a full Five Sphere Audit before we touch anything.

**Sphere 1: Owned Property** — robots.txt, JSON-LD schema, Answer-First content architecture, original research

**Sphere 2: Third-Party Validation** — G2, Capterra, Trustpilot, Crunchbase, digital PR, earned media, NAP consistency

**Sphere 3: Community & Sentiment** — Reddit, Quora, Facebook, Instagram, YouTube transcript analysis

**Sphere 4: Shared Knowledge Base** — Wikidata entity graph, Wikipedia, GitHub, Knowledge Graph verification

**Sphere 5: Real-Time & Social** — X (Twitter) brand mentions, Grok citation velocity, trending topic positioning

---

## Internal Tool Suite

This repository contains AEO Clarify's internal audit tools. These are the same tools we run for every client baseline.

### `tools/robots-auditor.js`

Tests a client website's robots.txt against all major AI crawlers.

```bash
node tools/robots-auditor.js https://example.com
```

**Checks:** GPTBot, ChatGPT-User, PerplexityBot, Googlebot, Google-Extended, anthropic-ai, ClaudeBot, Twitterbot, CCBot, bingbot, facebookexternalhit

**Output:** Per-engine access status, technical score, exact robots.txt lines to add for any blocked crawler.

---

### `tools/schema-validator.js`

Audits a client website for JSON-LD schema completeness and AEO readiness.

```bash
node tools/schema-validator.js https://example.com
```

**Checks:** Organization schema, sameAs entity links, name/URL/description, FAQ schema, answer length under 350 characters, Product/Service schema, pricing in schema, BreadcrumbList, parse errors

**Grading:** MOAT STATUS / GOOD / FRAGMENTED / INVISIBLE

---

### `tools/dom-audit.js`

Tests a client website for Manus AI machine interactivity readiness.

```bash
node tools/dom-audit.js https://example.com
```

**Checks:** Semantic button labels, form input labels, descriptive CTA links, no div-based buttons, transparent pricing, self-serve signup, native HTML forms, server-side rendered content

**Grading:** MOAT STATUS / GOOD / FRAGMENTED / INVISIBLE TO AGENTS

---

### `tools/sov-tracker.js`

Generates a complete AI Share of Voice baseline scoresheet for a client.

```bash
# Default (fill in your client details)
node tools/sov-tracker.js

# With client config file
node tools/sov-tracker.js client-config.json
```

**Output:** 36-point scoresheet (6 prompts × 6 engines), competitor intelligence section, next actions template. Saves as a dated `.txt` file.

**Client config format:**
```json
{
  "clientName": "Brand Name",
  "industry": "SaaS / Legal / Healthcare / etc.",
  "targetAudience": "small business owners",
  "useCase": "project management",
  "competitors": ["Competitor A", "Competitor B", "Competitor C"]
}
```

---

## The 90-Day Visibility Sprint

**Month 1 — Foundation:** Technical fix (robots.txt, schema, crawler access) + Answer-First content architecture

**Month 2 — Authority:** Third-party platform optimization, Wikidata entity node, X presence, community monitoring

**Month 3 — Velocity:** Real-Time Citation Response System, Citation Magnet assets, DOM audit, weekly AI SoV tracking

**Deliverable at 90 days:** Before vs. after AI Share of Voice scores across all 6 engines.

---

## AI Share of Voice Scoring

We score each client's AI presence 0-5 per engine per prompt:

| Score | Status | AI Impact |
|-------|--------|-----------|
| 0 | Not mentioned | Invisible to this engine |
| 1 | Brief/incorrect mention | Low confidence |
| 2 | Mentioned with errors | Not featured |
| 3 | Solid mention | Mostly accurate |
| 4 | Featured prominently | Accurate |
| 5 | Primary recommended answer | Cited as definitive |

**Overall grade:**
- 0–20% = INVISIBLE
- 21–50% = FRAGMENTED
- 51–75% = EMERGING
- 76–90% = AUTHORITY
- 91%+ = MOAT STATUS

---

## Pricing

**Starter — $1,997/month**
Five Sphere Audit, AI SoV Baseline, Technical Foundation Fix, Answer-First content restructuring (10 pages), vertical registry optimization, monthly tracking report

**Growth — $2,497/month**
Everything in Starter + Real-Time Citation Response System, Reddit/Facebook/Instagram monitoring, Citation Magnet asset (1/quarter), DOM accessibility audit, X topical authority management, competitor intelligence reporting

**Agency — $4,997/month**
Everything in Growth + Full Six Signal System, Wikidata entity graph injection, co-branded content cluster strategy, weekly AI SoV tracking, priority 2-hour response window, multiple brand/location coverage, dedicated account lead

---

## Client Conflict Filter

One client per industry vertical per geographic market. We cannot build an AI moat for Client A and Client A's direct competitor simultaneously. Clients pay more knowing our loyalty is exclusive to their market.

---

## Methodology Documentation

Full proprietary methodology: [AEO_CLARIFY_METHODOLOGY.md](./AEO_CLARIFY_METHODOLOGY.md)

---

## The AEO Clarify Promise

*"We make your business visible to every major AI engine in 90 days — or we keep working until we do."*

**Consistency plus corroboration. That is how you become unciteable.**

---

*AEO Clarify — Version 1*  
*Built on research from ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus AI*
