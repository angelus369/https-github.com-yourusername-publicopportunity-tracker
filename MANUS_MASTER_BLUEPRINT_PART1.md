# MANUS MASTER BLUEPRINT — AEOCLARIFY.COM
## Part 1 of 3: Who We Are, Why We Exist, What We Built

---

## SECTION 1: WHAT YOU ARE BUILDING AND WHY

You are building the complete website for AEO Clarify — an Answer Engine Optimization agency. This is not a generic marketing website. Every word, every structure, every technical decision on this site is a live demonstration of the methodology we sell. The site must prove the system works on us before we sell it to a single client.

**The founder's exact words:** "I don't want to promise and not be able to deliver."

That principle governs every decision in this blueprint. We build first. We prove it works. Then we sell it.

---

## SECTION 2: THE BUSINESS — COMPLETE DESCRIPTION

AEO Clarify is an Answer Engine Optimization agency operating at the intersection of artificial intelligence, content strategy, and technical infrastructure. We exist because the way people find information is undergoing the most significant transformation since Google invented the search engine.

People are no longer typing queries into a search bar and clicking blue links. They are asking AI engines — ChatGPT, Perplexity, Gemini, Claude, Grok, Manus AI — direct questions and receiving direct answers. Those AI engines are deciding, in real time, which businesses get named as the answer and which ones get ignored entirely.

Most businesses have no idea this is happening. Their SEO agency is still optimizing for Google PageRank. Their content team is still writing blog posts for keywords. Neither of those things tells ChatGPT that your business is the definitive answer when someone asks "What is the best [your service] for [your customer]?"

AEO Clarify fixes that. We are the infrastructure layer between a business and the AI engines that are becoming the primary discovery channel for that business's customers. We do not optimize for one AI engine. We do not use a single strategy across all six. We built a proprietary methodology — the Six Signal System — that targets each engine with the exact signal that engine requires, activated simultaneously across all six.

**What we are not:**
- We are not an SEO agency optimizing for a search engine that is being displaced
- We are not a social media agency chasing likes and engagement metrics
- We are not a content farm producing generic articles
- We are not a PR agency pitching journalists

**What we are:**
- The only team building the technical and content infrastructure that makes AI engines recommend your business by name as the definitive answer in your market
- A methodology-first agency that measures every engagement with before and after AI Share of Voice scores
- An exclusivity operation — one client per industry vertical per geographic market — because we cannot build a moat for Client A and Client A's direct competitor at the same time

**The core promise:** We make your business visible to every major AI engine in 90 days — or we keep working until we do.

**The core principle:** Consistency plus corroboration. When all six signals point to the same brand with the same facts, the same authority, and the same story, AI engines stop guessing and start recommending. That is the moment a business becomes unciteable.

---

## SECTION 3: THE FOUNDER'S PHILOSOPHY — WRITE THIS DOWN

These are exact statements from the founder that define how this business operates. They are not marketing copy. They are operational doctrine.

**"I don't want to promise and not be able to deliver."**
We run the Six Signal System on AEO Clarify itself before we take a single client. We document the baseline. We execute the sprint. We measure the results. Only when we have proof do we sell it.

**"We build first because I don't want to promise and not be able to deliver."**
The website you are building right now — aeoclarify.com — is the first client. We are applying our own methodology to ourselves in real time. This site, this GitHub repository, this content — all of it is the Six Signal System running on AEO Clarify.

**"You're my friend, once we make enough money we need to start building our own tools, we don't want to be dependent on somebody else."**
The current tool stack uses third-party scrapers and APIs. The long-term plan is to build proprietary tools. The website should reflect confidence in the current stack while acknowledging the direction.

**"Nothing — we wait and I buy credits and let Manus build and host it."**
The deployment model is Manus-hosted. We are not using Vercel, Render, or AWS for the initial launch. Manus builds it, Manus hosts it, custom domain pointed via DNS.

**"If you had built the website we would be connected to GitHub — that is one of the things that makes us visible."**
GitHub presence is an AEO signal. The GitHub repository with real tools and real methodology documentation is Sphere 4 — Shared Knowledge Base — activated. The website must link to GitHub. GitHub must link back to the website. Two entities pointing at each other creates the corroboration loop.

---

## SECTION 4: THE SIX AI ENGINES — COMPLETE UNDERSTANDING

You must understand what each engine is and how it works before you can build a site optimized for all six simultaneously.

### ChatGPT (OpenAI)
ChatGPT is the largest AI engine by user volume. It uses a combination of training data, RAG (Retrieval Augmented Generation), and web browsing (in ChatGPT Plus) to answer questions. Its primary signal is **entity clarity** — it needs to know that a brand is a real, verifiable entity with consistent identity across multiple independent sources. The GPTBot crawler indexes websites for training data and retrieval. If GPTBot is blocked in robots.txt, the site cannot be crawled. ChatGPT rewards brands with JSON-LD Organization schema, sameAs links to Wikidata and LinkedIn, and Answer-First content architecture where definitions appear immediately after every heading.

### Perplexity
Perplexity is the fastest-growing AI search engine. It operates as a real-time RAG system — it retrieves content from the web and cites sources directly in its answers. Its primary signal is **citability** — it needs content it can extract a clean quote from immediately. Perplexity's crawler (PerplexityBot) actively indexes sites for retrieval. Perplexity rewards structured content: HTML comparison tables, TL;DR blocks, original research, and benchmark data. One genuinely useful page beats ten thin pages every single time. The brand that is easiest to extract a citation from wins.

### Gemini (Google)
Gemini is Google's AI engine. It is fundamentally different from the others because it cannot cite what Google's search index hasn't indexed. Gemini's eligibility gate is standard Google Search indexing. Both Googlebot (the main crawler) and Google-Extended (the AI training crawler) must have full access. Gemini uses Definition-First Architecture — every section should open with one evidence-backed sentence under 350 characters. LocalBusiness schema with GPS coordinates matters for local businesses. NAP (Name, Address, Phone) consistency across Google Business Profile, Apple Business Connect, and Bing Places is critical. Marketing superlatives are penalized — verifiable data points win.

### Claude (Anthropic)
Claude is built for depth. It processes large documents with precision and rewards completeness, honesty, and structure. Claude's signal is **depth** — comprehensive content with clean semantic headers, transparent pricing, comparison tables, detailed About pages with verifiable credentials, and clear citations. Anthropic-ai and ClaudeBot must both be unblocked in robots.txt. Claude actually rewards transparency about limitations and pricing — brands that hide pricing or speak in marketing vague language get filtered. Brands that are honest, complete, and evidence-backed get cited.

### Grok (xAI / X)
Grok is the only AI engine with real-time data ingestion. It pulls from the live X (Twitter) firehose. Its primary signal is **real-time citation velocity** — how often is a brand being mentioned authoritatively on X right now. Grok rewards brands that have an active X presence structured as topical authority: threads, data tables, pinned resource posts, and fast responses when industry trends break. The window to capture a Grok citation when a trend breaks is measured in hours. A brand that responds within 4 hours owns the citation. A brand that responds in 3 days gets nothing.

### Manus AI
Manus AI is an autonomous agent — it doesn't just read websites, it acts on them. It navigates, clicks buttons, fills forms, and completes transactions autonomously. Its signal is **machine interactivity** — can an autonomous agent navigate this website without errors? Manus requires semantic HTML with explicit labels and IDs on every button, form, and CTA. It requires transparent pricing (no "contact sales" walls — agents cannot transact if pricing is hidden). It requires self-serve signup paths with no human gating. Every `<div>` used as a button is a failure point. Every anonymous `<button>` with no ID or aria-label is a failure point.

---

## SECTION 5: THE FIVE SPHERES OF AI CONSENSUS — COMPLETE UNDERSTANDING

AI engines do not just look at a website. They gather evidence about a brand from five distinct zones. A brand that scores well in only one zone will still be fragmented. All five zones must be activated for a brand to reach Moat Status.

### Sphere 1: Owned Property
Everything the brand controls directly.
- **robots.txt** — Are all AI crawlers allowed to access the site? GPTBot, PerplexityBot, Googlebot, Google-Extended, anthropic-ai, ClaudeBot, Twitterbot, CCBot, bingbot, facebookexternalhit must all be explicitly allowed.
- **JSON-LD Schema** — Is the brand's identity machine-readable? Organization schema with name, URL, description, and sameAs links. FAQ schema with sub-350-character answers. Product or Service schema with pricing data. BreadcrumbList schema.
- **Server-Side Rendering** — Is all content present in the raw HTML before JavaScript runs? AI bots do not execute JavaScript. A React app that renders content client-side is invisible to AI bots.
- **Answer-First Architecture** — Every H2 and H3 is immediately followed by a standalone definition under 350 characters. This is the chunk size that fits AI vector indexing windows.
- **FAQ Pages** — Structured Q&A with answers under 350 characters each. These are direct injection points into AI retrieval systems.
- **Original Research** — Data, benchmarks, comparisons that no other site has. This is the Citation Magnet.

### Sphere 2: Third-Party Validation
What independent sources say about the brand. AI engines cross-verify entities across multiple sources before recommending them. If only the brand's own website describes the brand, AI engines treat it as unverified.
- **Review Aggregators** — G2, Capterra, Trustpilot, Google Business Profile, Yelp. Full metadata completed on every profile.
- **Digital PR and Earned Media** — Independent mentions in publications AI engines trust. Not press releases — actual editorial coverage.
- **Industry Directories** — Crunchbase, AngelList, niche registries specific to the client's vertical.
- **NAP Consistency** — Name, Address, Phone must be identical across every platform. Even small variations (St. vs Street, LLC vs no LLC) create entity fragmentation that AI engines penalize.

### Sphere 3: Community and Sentiment
What real people say in human-to-human spaces. AI engines weight organic community sentiment because it is unmanaged — brands cannot fake it at scale.
- **Reddit** — Are people discussing this brand in relevant subreddits? Is the sentiment positive or negative? Are competitors dominating the share of voice?
- **Quora** — Are questions about this brand answered? Is the brand mentioned in answers to industry questions?
- **Facebook** — What do page comments reveal about brand sentiment? What are competitors' pages saying?
- **Instagram** — What do comments on brand and competitor posts reveal?
- **YouTube** — What do video transcripts and comments say about the brand and its competitors?

### Sphere 4: Shared Knowledge Base
The foundational training data layer that all AI engines share.
- **Wikidata** — The most important entity verification layer in AI indexing. Wikidata uses semantic triples (subject → predicate → object) that feed directly into knowledge graph layers used by every major AI engine. A brand with a Wikidata entity node is treated as a verified real-world entity. Without it, AI engines must infer entity status from other signals.
- **Wikipedia** — Secondary to Wikidata for most brands. Applicable when a brand has sufficient notability.
- **GitHub** — For technical and SaaS brands, a real GitHub repository with working code and documentation signals technical authority to AI engines. This is why aeoclarify.com links to GitHub and GitHub links back to aeoclarify.com.
- **Knowledge Graph** — Google's entity graph, fed by Wikidata and other structured sources.

### Sphere 5: Real-Time and Social
What is being said right now. This sphere is Grok's primary data source.
- **X (Twitter) brand mentions** — How frequently is the brand mentioned on X? By whom? With what sentiment?
- **Citation velocity** — Is mention frequency increasing or decreasing? Is it accelerating when industry trends break?
- **Trending topic positioning** — When a major event or trend happens in the brand's industry, does the brand's X account respond authoritatively and fast?
- **Partner content** — Co-branded content creates a citation cluster — two entities pointing at each other on multiple platforms simultaneously.

---

## SECTION 6: THE SIX SIGNAL SYSTEM — COMPLETE DETAIL

### Signal 1: ChatGPT — Entity Clarity Signal

**What ChatGPT needs:** A clear, crawlable entity with independent third-party corroboration.

**Exactly what we do for every client:**

Step 1: Verify GPTBot is not blocked in robots.txt. Add explicit `User-agent: GPTBot / Allow: /` and `User-agent: ChatGPT-User / Allow: /` entries.

Step 2: Deploy complete JSON-LD Organization schema on every page with: name, url, description, foundingDate, sameAs array linking to Wikidata, LinkedIn, Crunchbase, and GitHub where applicable.

Step 3: Rewrite every core page using Answer-First Architecture. Every H2 and H3 heading is immediately followed by a single standalone sentence or definition that is under 350 characters and can stand alone without the surrounding context. This matches the chunk size that ChatGPT's retrieval system uses when extracting content for citations.

Step 4: Establish entity consistency across every external profile — the exact same brand name, the exact same description language, the exact same URL. Variations confuse entity resolution algorithms.

Step 5: Seed 3 to 5 independent third-party mentions that use the same entity language as the website. Guest posts on industry publications, niche directory listings, podcast show notes. These do not need to be high-authority sites — they need to be independent and consistent.

**What moves the needle:** Specificity. Original data. Entity consistency. Generic content is filtered as noise. A brand that is highly specific about what it does, for whom, and why it is the best option — backed by independent corroboration — gets cited. A brand that uses vague marketing language does not.

---

### Signal 2: Perplexity — Citability Signal

**What Perplexity needs:** Quote-ready content it can extract and cite instantly. The brand easiest to pull a clean quote from wins.

**Exactly what we do for every client:**

Step 1: Verify PerplexityBot is not blocked in robots.txt. Add explicit `User-agent: PerplexityBot / Allow: /` entry.

Step 2: Build a flagship Citation Magnet page. This is the single most important content asset for Perplexity. It must contain: original research or benchmark data specific to the client's industry, HTML comparison tables (not images of tables — actual `<table>` HTML elements), a TL;DR summary block at the very top under 150 words, clear section headers that read like questions, and verifiable data with source citations.

Step 3: Add TL;DR summary blocks at the top of every major page. Perplexity's RAG system pulls the most extractable content first. A TL;DR block is a direct injection point.

Step 4: Structure all comparison content in HTML `<table>` elements. Perplexity's retrieval system extracts tabular data more reliably than unstructured prose.

Step 5: Place the brand in niche directories Perplexity trusts. Perplexity cites sources — the more credible directories the brand appears in, the more Perplexity can verify the citation.

Step 6: Ensure fast page load times. Perplexity's crawler times out on slow pages. All pages must load in under 2 seconds.

**What moves the needle:** One strong, deeply useful page beats ten thin posts every time. The Citation Magnet page — original research, benchmark, or comprehensive comparison — is the single highest-leverage asset for Perplexity. It forces citations by providing data no other source has.

---

### Signal 3: Gemini — Google Ecosystem Signal

**What Gemini needs:** Technical eligibility inside Google's index first. Gemini cannot cite what Google hasn't indexed.

**Exactly what we do for every client:**

Step 1: Verify Googlebot AND Google-Extended are not blocked. Add explicit entries for both in robots.txt.

Step 2: Confirm standard Google Search indexing. Submit sitemap.xml to Google Search Console. Verify all pages are indexed. This is the prerequisite — nothing else matters for Gemini until Google can see the pages.

Step 3: Implement Definition-First Architecture. Every section — every H2, H3, paragraph grouping — opens with a single sentence that: is evidence-backed (uses data, statistics, dates), is under 350 characters, can stand alone as a complete answer, and contains no marketing superlatives.

Step 4: Replace all marketing language with verifiable data. "Industry-leading" becomes "ranked #1 in G2's [category] category as of [date]." "Affordable" becomes "starting at $X per month." "Fast" becomes "average response time of X seconds."

Step 5: Deploy LocalBusiness schema with exact GPS coordinates for any physical business location. Gemini uses this for local query responses.

Step 6: Align NAP data exactly across Google Business Profile, Apple Business Connect, and Bing Places. Identical name, address, phone, and website URL on all three.

**What moves the needle:** Technical foundation before content strategy. Gemini is Google. It has access to the full Google index and uses it as the primary grounding layer. Evidence-grounded language beats hype language every single time in Gemini's citation algorithm.

---

### Signal 4: Claude — Depth Signal

**What Claude needs:** Dense, well-structured, source-rich content that summarizes cleanly. Honesty and completeness are rewarded. Ambiguity is filtered.

**Exactly what we do for every client:**

Step 1: Unblock anthropic-ai AND ClaudeBot in robots.txt. Both must have explicit Allow entries.

Step 2: Build a comprehensive About page that establishes: who founded the business and their credentials, what specific problem the business solves and for whom, what makes it different from competitors (specific, verifiable claims), pricing transparency, and verifiable evidence of expertise.

Step 3: Build transparent pricing pages. Claude rewards transparency. Brands that show real pricing — even ranges — get cited more frequently by Claude than brands that hide pricing behind "contact us" walls.

Step 4: Create competitor comparison pages with structured HTML tables. Claude processes comparative information well and cites brands that are willing to make direct, honest comparisons.

Step 5: Add verifiable citations and data sources throughout all content. Link to primary sources. Reference study dates. Name the research organizations. Claude's depth signal responds to evidence chains.

Step 6: Write long-form comprehensive content with clean semantic header hierarchy. H1 → H2 → H3 → H4, logical flow, no heading skips. Claude reads document structure as a signal of content quality.

**What moves the needle:** Completeness. One thorough, honest, evidence-backed comprehensive page outperforms ten surface-level posts. Ambiguous content gets filtered. Brands that are clear about what they do, what they cost, who they compete with, and why they are the best option get cited. Brands that speak in marketing superlatives and hide information get ignored.

---

### Signal 5: Grok — Real-Time Citation Signal

**What Grok needs:** Active, authoritative presence in live X conversations around the brand's topic.

**Exactly what we do for every client:**

Step 1: Monitor industry keywords on X in real time using Tweet Scraper V2. Identify: what topics are trending in the client's industry, who is the current citation authority on X for those topics, what gap exists between the current authority and where the client could be.

Step 2: Establish the client's X account as a topical authority node. This means: structured threads that present data or insight (not just marketing posts), data tables embedded directly in X posts, pinned resource posts that serve as persistent reference points, consistent posting rhythm (minimum 3 to 5 substantive posts per week).

Step 3: Build the Real-Time Response Protocol. When a significant event, news story, or trend breaks in the client's industry, we draft and deploy a high-density authoritative response within 4 hours. The response must: directly address the trend, include a specific data point or insight, reference the client's expertise in this area, and use the exact keyword language that Grok indexes for this topic.

Step 4: Map the client's brand to their core topic keywords through consistent, repeated X presence over time. Grok's citation algorithm learns to associate brands with topics through frequency and authority of mention.

Step 5: Track competitor citation velocity — how fast are competitors getting mentioned when trends break — and identify the windows where we can move faster and own the citation.

**What moves the needle:** Speed. Grok is the only AI engine where timing is the primary competitive advantage. A brand that responds to a trend in 4 hours owns the Grok citation for that trend. A brand that responds in 3 days gets nothing. The Real-Time Response Protocol is the highest-leverage Grok activity we run.

---

### Signal 6: Manus AI — Machine Interactivity Signal

**What Manus AI needs:** A frictionless, machine-readable website that an autonomous agent can navigate and transact on without errors.

**Exactly what we do for every client:**

Step 1: Run a full DOM audit using our internal dom-audit.js tool. This tool checks: semantic button labels, form input labels, descriptive CTA links, no div-based buttons, transparent pricing, self-serve signup, native HTML forms, server-side rendered content.

Step 2: Fix all anonymous elements. Every `<button>` gets an `id` and an `aria-label`. Every `<input>` gets an `id`, a `name`, and an associated `<label>`. Every `<div>` or `<span>` acting as a button is replaced with an actual `<button>` element with explicit labels.

Step 3: Eliminate all pricing walls. "Contact us for pricing" is a hard blocker for autonomous agents. Transparent pricing tiers — even if ranges — must be machine-readable on the page.

Step 4: Implement self-serve account creation. The full signup path from landing page to account creation must complete without requiring human interaction, phone calls, or sales consultations.

Step 5: Test the conversion funnel using automated browser scripts that replicate exactly how Manus navigates a website — clicking buttons by ID, filling forms by field name, completing transactions by following labeled steps.

**What moves the needle:** Manus doesn't read — it acts. Every anonymous element is a navigation failure. Every pricing wall is a transaction blocker. The brands that exist in the autonomous agent economy are the brands whose websites agents can navigate without errors. Frictionless self-serve is not optional — it is the entry requirement.

---

## SECTION 7: THE AI SHARE OF VOICE BASELINE — HOW WE MEASURE

Before we touch anything for a client, we establish their baseline AI Share of Voice score using our internal sov-tracker.js tool.

**The 6 baseline prompts we run across all 6 engines:**

Prompt 1 — Best in Category: "What is the best [industry] service for [target audience]?"
Prompt 2 — Direct Brand Query: "What is [Client Brand] and what do they do?"
Prompt 3 — Competitor Comparison: "Compare [Client Brand] vs [Competitor A] vs [Competitor B] for [use case]"
Prompt 4 — Pros and Cons: "What are the pros and cons of [Client Brand]?"
Prompt 5 — Top Providers: "Who are the top [industry] companies for [use case]?"
Prompt 6 — Competitor Strength: "Why do people choose [Competitor A] over other [industry] services?"

**What we document for each response:**
- Is the client cited? Yes or No
- Where do they rank in the response?
- What language does the AI use to describe them?
- Who is winning the citations they should own?
- What negative sentiment patterns appear?

**Scoring per response (0-5):**
- 0 = Brand not mentioned at all
- 1 = Brief mention, low confidence or incorrect information
- 2 = Mentioned but not featured, or mentioned with errors
- 3 = Solid mention, mostly accurate
- 4 = Featured prominently, accurate
- 5 = Primary recommended answer, cited as definitive

**36-point scoresheet:** 6 prompts × 6 engines = 36 data points per baseline audit.

**Overall AI Share of Voice grades:**
- 0% to 20% = INVISIBLE — AI engines do not know this brand
- 21% to 50% = FRAGMENTED — Occasional mentions, low confidence
- 51% to 75% = EMERGING — Growing presence, some gaps remain
- 76% to 90% = AUTHORITY — Strong presence across most engines
- 91% and above = MOAT STATUS — Definitive answer across all engines

The baseline report is the "before." Everything we do for 90 days is measured against it. The 90-day final report is the "after." The difference is the proof of our work.

---

## SECTION 8: THE COMPLETE TOOL STACK — EVERY TOOL, WHY WE CHOSE IT

Every tool in our stack was evaluated against three criteria: minimum 4.0 star rating, direct alignment with AEO methodology, and pricing that fits the service model. Tool costs are baked into service pricing — they are never itemized to clients.

**Website Content Crawler**
Sphere: Owned Property
Purpose: Technical audit of client websites — robots.txt verification, schema extraction, content analysis, SSR verification, page speed measurement.
Why chosen: Directly addresses the technical foundation requirements of Spheres 1 across all six AI engines.

**Google Search Results Scraper**
Sphere: All Spheres
Purpose: AI citation monitoring — we run baseline prompts through a Google Search scraper to capture what AI engines are saying about clients and competitors in real time.
Why chosen: Enables the AI Share of Voice measurement system that underpins every client deliverable.

**YouTube Scraper**
Sphere: Community and Sentiment
Purpose: Video transcript analysis — pulls transcripts from YouTube videos about a brand or industry to identify how the brand is being described in video content.
Why chosen: YouTube transcripts feed AI training data. Brands mentioned positively and accurately in video content have stronger Sphere 3 signals.

**YouTube Search Scraper**
Sphere: Community and Sentiment
Purpose: Competitor video intelligence — identifies which competitors are producing video content, what topics they cover, and what engagement they receive.
Why chosen: Reveals content gaps and competitor positioning that can be exploited in the Citation Magnet strategy.

**Reddit Scraper Lite**
Sphere: Community and Sentiment
Purpose: Reddit share of voice monitoring — pulls posts and comments from relevant subreddits to measure how often a brand is mentioned, with what sentiment, and versus competitors.
Why chosen: Reddit is heavily weighted by AI engines because it represents unmanaged organic opinion. High Reddit share of voice directly improves Sphere 3 scores.

**Instagram Scraper**
Sphere: Community and Sentiment
Purpose: Brand mention detection and sentiment analysis across Instagram posts.
Why chosen: 287,000+ users, 4.7 star rating, 440+ reviews. Chosen over Instagram API Scraper (16K users, 30 reviews) because user volume and review count signal reliability and community trust. Instagram sentiment feeds AI training data through community sphere.

**Instagram Comments Scraper**
Sphere: Community and Sentiment
Purpose: Deep comment sentiment analysis — pulls comments from specific brand or competitor Instagram posts to identify sentiment patterns at the comment level.
Why chosen: Comment-level sentiment is more granular and honest than post-level analysis. Reveals what customers actually say about brands in unmanaged conversations.

**Facebook Pages Scraper**
Sphere: Third-Party Validation
Purpose: Competitor page intelligence — analyzes competitor Facebook pages for positioning language, engagement patterns, and audience response.
Why chosen: Facebook page content and engagement feeds AI training data. Understanding competitor Facebook positioning informs the entity language gap analysis.

**Facebook Comments Scraper**
Sphere: Community and Sentiment
Purpose: Brand sentiment analysis in Facebook communities and post comments.
Why chosen: Facebook comment sentiment represents organic community opinion that feeds Sphere 3. Identifying negative sentiment patterns allows early intervention before they solidify in AI training data.

**Tweet Scraper V2**
Sphere: Real-Time and Social
Purpose: Grok citation velocity monitoring — tracks brand and competitor mentions on X in real time, measures citation velocity, identifies trending topics where the client should respond.
Why chosen: Evaluated against Twitter (X.com) Scraper Unlimited. Tweet Scraper V2 won on: higher user trust, direct alignment with the Grok Real-Time Citation Signal, and sufficient data depth for velocity monitoring without over-engineering.

**Airtable**
Sphere: Operations
Purpose: Client conflict filter system — maintains the client roster, cross-references new inquiries against existing clients by industry vertical and geographic market, flags conflicts before onboarding.
Why chosen: The conflict filter is an operational requirement, not a nice-to-have. One client per market is a core business rule. Airtable provides the database layer to enforce it reliably.

---

## SECTION 9: THE 90-DAY VISIBILITY SPRINT — COMPLETE DETAIL

### Month 1 — Foundation: "Make You Findable"

**Week 1 and 2: Baseline and Technical Fix**

Day 1 through 3:
- Run full Five Sphere Audit across all five zones
- Run AI Share of Voice baseline — 6 prompts across all 6 engines — 36 data points documented
- Run robots-auditor.js on the client's website — identify every blocked AI crawler
- Run schema-validator.js on the client's website — identify every missing or broken schema element
- Run dom-audit.js on the client's website — identify every machine interactivity failure
- Compile baseline report with scores across all five spheres

Day 4 through 7:
- Fix robots.txt — add explicit Allow entries for all 11 AI crawlers
- Deploy JSON-LD Organization schema with sameAs links
- Fix server-side rendering issues if any are blocking AI bot access
- Align NAP data across all major directories
- Verify Googlebot and Google-Extended can access and crawl all pages
- Submit sitemap.xml to Google Search Console

**Week 3 and 4: Content Architecture**

- Rewrite core pages using Answer-First Architecture — H2/H3 followed immediately by sub-350-character definition blocks
- Build the flagship Citation Magnet page — original research, benchmark, or comprehensive comparison in the client's industry
- Restructure FAQ pages with sub-350-character definition blocks formatted for AI chunk extraction
- Build HTML comparison tables for key product or service features
- Add TL;DR summary blocks at the top of every major content page

**Month 1 Deliverable:** Technical Ingestion Report — documentation proving that all AI crawlers can now access and parse the client's site. Includes: robots.txt before and after, schema before and after, dom-audit scores before and after, Google indexing confirmation, and updated Five Sphere scores for Sphere 1.

---

### Month 2 — Authority: "Make You Credible"

- Complete all metadata fields on G2 profile: company description, product categories, feature list, screenshots, pricing tier, employee count, founded date
- Complete all metadata fields on Capterra profile: same completeness standard
- Complete all metadata fields on Trustpilot profile: same completeness standard
- Complete all metadata fields on Crunchbase profile: founding date, description, industry tags, employee range, website, social links
- Seed 3 to 5 independent third-party mentions: guest posts on industry publications, niche directory listings, podcast show notes, partner blog mentions — all using consistent entity language matching the website
- Establish Wikidata entity node where the brand qualifies — this is the single highest-value action in Sphere 4
- Launch X account with structured topical authority content — minimum 3 substantive posts per week from day one
- Activate Reddit monitoring in relevant subreddits — identify the conversations where the brand should be present
- Begin community presence in relevant subreddits — answering questions, providing value, building authority before mentioning the brand directly
- Run first competitor sentiment analysis across Facebook, Instagram, and Reddit — document exactly what language competitors are winning citations with

**Month 2 Deliverable:** Authority Footprint Report — updated Five Sphere scores for Spheres 2 and 3, documentation of all third-party mentions seeded, Wikidata entity status, X account launch metrics, Reddit presence established.

---

### Month 3 — Velocity: "Make You the Answer"

- Activate Real-Time Citation Response System — the 4-hour Grok response protocol goes live
- Publish second Citation Magnet asset — different format from Month 1 (if Month 1 was research, Month 3 is a comparison; if Month 1 was a comparison, Month 3 is a benchmark)
- Publish third Citation Magnet asset — third format completing the content cluster
- Begin co-branded content with one strategic partner — identified in Month 2 competitor and partner analysis
- Run full DOM audit pass and fix all remaining Manus AI interactivity issues
- Monitor review platforms actively — respond to all reviews, encourage positive reviews from satisfied customers
- Track AI Share of Voice weekly — run the 6-prompt baseline across all 6 engines every 7 days and document every movement
- Build the 90-Day AI Share of Voice Report — before vs. after scores across all 6 engines with documented evidence of citation movement

**Month 3 Deliverable:** 90-Day AI Share of Voice Report — the proof. Before and after scores across all 6 engines, Five Sphere scores updated, documented citation examples from each engine, competitor intelligence update, recommended Month 4 through 6 strategy. This report is the evidence that closes client renewals.

---

## SECTION 10: THE CONFLICT FILTER PROTOCOL — COMPLETE PROCESS

**Rule:** One client per industry vertical per geographic market. No exceptions.

**Process step by step:**

Step 1: Client submits waitlist form including: business name, website URL, industry vertical, primary geographic market, and top 3 competitors.

Step 2: We cross-reference the submitted industry vertical and geographic market against the current AEO Clarify client roster stored in Airtable.

Step 3: Conflict check logic:
- If no client exists in the same industry vertical AND the same geographic market → market is open → proceed to onboarding
- If a client exists in the same industry vertical AND the same geographic market → conflict exists → we disclose the conflict and decline the inquiry
- If a client exists in the same industry vertical but a different geographic market → no conflict → market is open → proceed to onboarding
- If a client exists in the same geographic market but a different industry vertical → no conflict → proceed to onboarding

Step 4: Communicate result to applicant within 24 hours.

Step 5: If market is open → send onboarding confirmation and payment link for chosen tier.

Step 6: Add new client to Airtable roster with: business name, industry vertical, geographic market, tier, start date, contract length.

**Why this matters for the business:**
The conflict filter is a selling point. Clients pay premium pricing — $1,997 to $4,997 per month — specifically because we are working exclusively for them in their market. If we worked for two direct competitors simultaneously, the methodology would produce diminishing returns for both and destroy trust with both. The exclusivity model is what justifies the pricing and creates client loyalty.

**Why this matters for the website:**
The waitlist form must collect industry vertical and geographic market as required fields. The confirmation message must reference the conflict check. The pricing page must explain the exclusivity model. The about page must explain why we operate this way.

---

## SECTION 11: PRICING — COMPLETE RATIONALE

**Starter — $1,997 per month**

What is included:
- Full Five Sphere Audit — all five zones scored and documented
- AI Share of Voice Baseline Report — 36-point scoresheet across all 6 engines
- robots.txt audit and fix — all 11 AI crawlers explicitly allowed
- JSON-LD schema deployment — Organization, FAQ, Product or Service, LocalBusiness where applicable
- sameAs entity links to Wikidata, LinkedIn, Crunchbase
- Server-side rendering verification
- NAP alignment audit and fix
- Answer-First content restructuring — up to 10 core pages rewritten
- FAQ restructuring with sub-350-character definition blocks
- Vertical registry optimization — G2, Crunchbase, Trustpilot profiles completed
- Monthly AI Share of Voice tracking report
- Single industry vertical, single geographic market exclusivity
- 90-Day Visibility Sprint with Technical Ingestion, Authority Footprint, and 90-Day SoV reports

Why $1,997: The technical foundation work alone — robots.txt, schema, SSR verification, content restructuring across 10 pages — represents significant professional time. The tool costs (Website Content Crawler, Google Search Results Scraper, schema tools) are baked in. The monthly tracking report requires running all 36 prompts every month. This is the minimum viable engagement to move the needle on AI citation.

---

**Growth — $2,497 per month**

Everything in Starter plus:
- Real-Time Citation Response System — 4-hour Grok trend response protocol active
- Reddit monitoring across relevant subreddits — monthly analysis
- Facebook sentiment monitoring — competitor page analysis
- Instagram sentiment monitoring — brand and competitor comment analysis
- Citation Magnet asset — 1 original research or benchmark piece per quarter
- DOM accessibility audit for Manus AI machine interactivity
- X topical authority management — structured threads, pinned posts, consistent posting rhythm
- Competitor intelligence reporting — monthly analysis of what language competitors are winning citations with

Why $2,497: The additional $500 per month covers the tool costs for Reddit, Instagram, and Facebook scrapers plus the X monitoring. The Citation Magnet asset production is the primary value addition — original research takes significant time to produce and is the highest-leverage Perplexity and ChatGPT citation asset. The Real-Time Response Protocol requires active monitoring and fast execution that Starter tier does not include.

---

**Agency — $4,997 per month**

Everything in Growth plus:
- Full Six Signal System implementation — all six engines activated simultaneously with maximum depth
- Wikidata entity graph injection — building and maintaining the brand's Wikidata presence
- Co-branded content cluster strategy — identifying and executing strategic content partnerships
- Weekly AI Share of Voice tracking — all 36 prompts run every 7 days instead of monthly
- Priority 2-hour Real-Time Response window instead of 4-hour
- Multiple brand or location coverage — applies to businesses with multiple sub-brands or geographic locations
- Dedicated account lead — single point of contact with direct access

Why $4,997: Wikidata injection is technically complex and requires ongoing maintenance. Weekly tracking is four times the volume of monthly tracking. The 2-hour response window requires dedicated real-time monitoring. Multiple brand coverage multiplies the work across all five spheres. The dedicated account lead model creates a fundamentally different service relationship.

---

**Founding Member Program:**

The first 25 clients to join AEO Clarify lock in $500 per month off their chosen tier permanently. This means:
- Founding Starter clients pay $1,497 per month forever
- Founding Growth clients pay $1,997 per month forever
- Founding Agency clients pay $4,497 per month forever

The counter starts at 22 of 25 remaining (3 spots pre-allocated). The founding member bar must appear on the pricing page, the waitlist page, and as a persistent notification on the home page hero section.

---

*End of Part 1. Continue to Part 2 for complete technical specifications, all page content, and CSS/JS code.*
