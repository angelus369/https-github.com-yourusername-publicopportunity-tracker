# The Five Systems — Step by Step, Plain English

## SYSTEM 1: THE AEO AUDIT
**"We check under the hood before we touch anything"**

Imagine you bring your car to a mechanic. The first thing they do is not start fixing things. They put it on a lift and check everything. They write down every single problem before they touch a single bolt. That is exactly what the AEO Audit is.

Before we do anything for a client we run four checks on their website. Think of these as four different mechanics each checking a different part of the car.

**Check 1: The robots-auditor.js tool**

Every AI engine sends a little robot to visit websites and read them. That robot is called a crawler. The website has a file called robots.txt that tells those robots what they are allowed to read. Some websites accidentally tell all those robots to go away. They do not even know they did it. It happens all the time.

Our robots-auditor.js tool goes to the client's website, reads the robots.txt file, and checks every single AI crawler one by one. Can ChatGPT's robot in? Can Perplexity's robot in? Can Claude's robot in? For every one that is blocked it tells us exactly what line of text to add to fix it.

Output: A list of every AI crawler — allowed or blocked — plus the exact code fix for every blocked one.

**Check 2: The schema-validator.js tool**

When you look at a website you see words and pictures. When an AI looks at a website it sees code. Schema is special code hidden inside the website that tells AI engines exactly what the business is, what it does, who it serves, and what it costs — in a language AI can read perfectly. Most websites either have no schema at all or they have it set up wrong. When AI engines cannot read the schema they cannot confidently recommend the business.

Our schema-validator.js tool checks the client's website for every type of schema we care about. Is there an Organization schema? Does it have a name, a description, a URL? Does it have sameAs links proving the business is real? Is there an FAQ schema? Does it have pricing information?

Output: A score out of 100 with every missing schema element listed and explained.

**Check 3: The dom-audit.js tool**

Manus AI is not just an AI that talks — it is an AI that can actually use a website like a human. It can click buttons, fill out forms, and buy things. But it can only do that if the website is built correctly. Think of it like being blindfolded and trying to use a website only by hearing someone describe it. If every button just says "button" with no description of what it does, you are lost. If the price is hidden and you have to call someone to find out, you cannot buy anything.

Our dom-audit.js tool checks whether the client's website is built in a way that Manus AI and any autonomous agent can actually use it. Every button needs a label. Every form field needs a name. Every price needs to be visible on the page.

Output: A list of every element that would cause an autonomous agent to fail with the exact fix for each one.

**Check 4: The sov-tracker.js tool**

This is the most important check because it shows us where the client stands right now in the AI world. We go to all six AI engines — ChatGPT, Perplexity, Gemini, Claude, Grok, and Manus — and we ask them six questions about the client's industry. Things like "what is the best [their service] for [their customer]?" and "compare [their brand] vs [competitor A] vs [competitor B]."

We run all six questions on all six engines. That is 36 questions total. For each answer we score the client from 0 to 5. Zero means the AI did not mention them at all. Five means the AI said they are the best option. We add up all 36 scores and calculate a percentage. That percentage is their AI Share of Voice.

Output: A 36-point scoresheet showing exactly where the client stands with every AI engine today. This is the before number. Everything we do for 90 days is measured against it.

**What the client gets at the end of System 1**

A complete before report. Every crawler check. Every schema score. Every machine interactivity failure. Every AI engine score. All of it documented before we touch a single thing. This is what we show them on day one.

## SYSTEM 2: THE CONTENT REWRITING ENGINE
**"We rewrite their website so AI actually understands it"**

Here is the problem most websites have. They were written for humans not for AI. When a human reads a website they read the whole page, look at the pictures, get a feeling, and decide. When an AI reads a website it breaks it into small chunks — usually 100 to 350 words at a time — and tries to find a clear answer to a specific question. If there is no clear answer in that chunk the AI skips it and moves to the next website.

We rewrite the client's website in a way that speaks AI's language.

**Step 1: Answer-First Architecture on every page**

Every heading on the website needs to be immediately followed by a short clear answer. Not a long paragraph. Not a story. A single sentence under 350 characters that answers the question the heading asks.

Here is how most websites are written:

Our Services — At ABC Company we have been serving customers since 2010 with a wide range of solutions designed to meet your needs across multiple industries...

Here is how we rewrite it:

Our Services — ABC Company provides cloud-based accounting software for small businesses starting at $49 per month with a free 30-day trial.

That second version is what AI can grab and cite directly. The first version gets skipped. We do this for every single heading on every core page.

**Step 2: The Citation Magnet Page**

AI engines love to cite original data. If someone publishes research that nobody else has — a survey, a benchmark, a study with real numbers — AI engines will pull from that page over and over because there is no other source for that information.

We build one page for every client that has original data specific to their industry, a clear headline with a number, the data presented in a simple table, and a TL;DR summary at the very top so AI can grab the key finding instantly. This page becomes the most-cited page on the entire website because it is the only source for that specific data.

**Step 3: FAQ Restructuring**

Most FAQ answers are vague and long. AI engines cannot extract anything useful from them. We rewrite every FAQ answer to be under 350 characters and immediately useful.

Bad version: How does your service work? — Great question! Our team of dedicated professionals works with you to understand your unique needs and then crafts a customized solution...

Good version: How does your service work? — You sign up online, connect your bank account in 5 minutes, and our software automatically categorizes your transactions. A certified accountant reviews your books monthly.

Short. Clear. Citable.

**Step 4: HTML Comparison Tables**

Perplexity has a special preference for information presented in tables — not images of tables, actual HTML table code. We build comparison tables showing the client's service vs. competitors side by side, with features, pricing, and who each option is best for, all in clean HTML format that Perplexity can extract directly.

## SYSTEM 3: SCHEMA MARKUP INJECTION
**"We give the website an ID card that AI engines can read"**

Think of schema markup like a business card for AI. When you hand someone a business card they instantly know your name, your title, your company, your phone number, and your email. They do not have to read your entire website to know who you are. Schema is code that sits inside the website and gives AI engines that same instant information. Most businesses have no schema at all which means AI engines have to guess what the business does. When AI engines guess they guess wrong and they recommend someone else instead.

**Organization Schema**

This is the most important one. It tells AI engines the exact legal name of the business, the website URL, a description of what the business does, the founding date, and links to the business's profiles on Wikidata, LinkedIn, Crunchbase, and GitHub.

That last part — the links to other profiles — is called the sameAs array. It is the most powerful piece of the entire schema. When an AI engine sees a business name on a website it thinks "okay, this business says it exists." But when the schema links to Wikidata, LinkedIn, and Crunchbase and all three say the same thing about the same business, the AI engine thinks "this business definitely exists and all three independent sources agree on what it does." That is entity verification. That is what makes AI engines confident enough to recommend the business by name.

**FAQ Schema**

This takes the FAQ page we rewrote in System 2 and marks it up in code so AI engines can extract each question and answer as a direct data point. Without FAQ schema AI might read the page. With FAQ schema AI extracts each Q&A pair individually and stores it for citation.

**Product or Service Schema**

This tells AI engines exactly what the business sells and what it costs. We include pricing tiers directly in the schema code. This is what allows AI engines to answer questions like "how much does ABC Company charge?" with an accurate number instead of "you would need to contact them for pricing." If AI cannot tell a customer what something costs it cannot recommend it confidently.

**LocalBusiness Schema**

For any client with a physical location this schema includes exact GPS coordinates, hours of operation, and service area. This is specifically what Gemini uses to recommend local businesses in local searches.

**BreadcrumbList Schema**

This tells AI engines how the website is organized — which pages are the main pages, which are sub-pages, how they connect. It helps AI understand the full structure of the site instead of just reading individual pages in isolation.

## SYSTEM 4: CITATION BUILDING
**"We get the business talked about everywhere AI looks"**

AI engines do not just read the client's website. They read everything. Reviews. Forum posts. Industry directories. News articles. Reddit threads. When an AI engine is deciding whether to recommend a business it checks whether other independent sources — sources the AI trusts — also say this business is real and good.

If the only place that says the business is great is the business's own website, the AI engine treats it like someone saying they are the best player on their own team. Biased. Unverified. Not citeable. We fix this by building the brand's presence everywhere AI looks.

**Step 1: Review Platform Profiles**

We complete full profiles on G2, Capterra, Trustpilot, and Crunchbase. Not just claim the profile — complete it. Every field filled in. The description uses the exact same language as the website so AI engines recognize it as the same entity. These platforms are trusted by AI engines because they aggregate independent user reviews. A business with a complete verified G2 profile is treated as more real and more trustworthy than a business that only exists on its own website.

**Step 2: Independent Third-Party Mentions**

We place 3 to 5 mentions of the brand on sites the client does not own. Guest posts on industry publications. Listings in niche directories. Podcast show notes. Partner blog posts. The key rule: every mention must use the same language to describe the business. The same name. The same description. The same service category. Consistency is what makes AI engines lock in the entity.

**Step 3: Wikidata Entity Node**

This is the Holy Grail. Wikidata is a free open database that stores facts about real-world things in a format that every major AI engine uses as training data. If a business has a Wikidata entry AI engines treat it as a verified real-world entity. We create and maintain the Wikidata entry for clients who qualify which links back to the website and to all the other profiles we have built.

**Step 4: Reddit Presence**

Reddit is heavily used by AI engines as a source of organic community opinion. Real people talking about real experiences. AI engines weight Reddit heavily because it cannot be easily faked at scale. We build a Reddit presence by first answering questions in relevant subreddits with genuinely helpful answers that establish expertise before ever mentioning the client's brand. Once authority is established in the community, mentions of the brand feel organic and trusted.

**Step 5: X Topical Authority**

Grok pulls directly from X in real time. The only way to get Grok citations is to have an active authoritative presence on X. We post structured threads, data tables, and resource posts consistently. When a major trend breaks in the client's industry we respond within 4 hours with a high-density authoritative post. That speed is the competitive advantage — the brand that responds first owns the Grok citation.

## SYSTEM 5: THE MONITORING DASHBOARD
**"We track whether it is working every single week"**

How do you know if all the work in Systems 1 through 4 is actually moving the needle? You run the same questions you asked at the start and you check whether the answers changed. That is the monitoring dashboard. It is not complicated. It is disciplined.

**Step 1: Run the 6 baseline prompts again**

Every week for Agency clients and every month for Starter and Growth clients we go back to all six AI engines and run the same 6 prompts we ran at the start.

1. What is the best [industry] service for [target audience]?
2. What is [Client Brand] and what do they do?
3. Compare [Client Brand] vs [Competitor A] vs [Competitor B]
4. What are the pros and cons of [Client Brand]?
5. Who are the top [industry] companies for [use case]?
6. Why do people choose [Competitor A] over other services?

**Step 2: Score every response the same way**

Every response gets scored 0 to 5 using the same scale. Zero means not mentioned. One means brief mention with low confidence. Two means mentioned with errors. Three means solid mention mostly accurate. Four means featured prominently and accurately. Five means primary recommended answer.

**Step 3: Compare to the baseline**

We put the new scores next to the baseline scores. Every movement gets documented. If the client was scoring 1 out of 5 on ChatGPT in Month 1 and they are scoring 3 out of 5 in Month 2 that is a documented improvement. We know exactly which work caused it.

**Step 4: Diagnose what is not moving**

If Perplexity citations went up but Gemini citations stayed flat we know Gemini needs more work. Maybe the Google indexing is not complete. Maybe the content architecture needs adjustment. The scores tell us exactly where to focus next.

**Step 5: Deliver the 90-day proof report**

At the end of 90 days we put the original baseline scores side by side with the current scores for all 36 data points. That report is the proof. It shows exactly how far the client moved from invisible to cited. That report is also what closes renewals. When a client sees they went from 12% AI Share of Voice to 67% in 90 days they do not need to be convinced to keep going.

## THE FULL PICTURE

| System | What It Does | When It Happens |
|--------|-------------|-----------------|
| System 1: AEO Audit | Diagnose every problem before touching anything | Day 1 — Week 1 |
| System 2: Content Rewriting | Rewrite the website in AI's language | Week 2 — Week 4 |
| System 3: Schema Injection | Give the website an AI-readable ID card | Week 1 — Week 2 |
| System 4: Citation Building | Get the brand talked about everywhere AI looks | Month 2 |
| System 5: Monitoring | Track every movement and prove the work | Monthly or weekly, ongoing |

Everything is already built. Everything is already documented. The five systems are the 90-Day Visibility Sprint described from a different angle.
