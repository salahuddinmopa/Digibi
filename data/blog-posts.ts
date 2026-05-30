export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-website-is-costing-you-clients",
    title: "Why Your Website Is Costing You Clients",
    excerpt:
      "Most businesses invest in advertising, social media, and sales — yet their website silently drives prospects away. Here's how to diagnose and fix the invisible leaks.",
    category: "Web Design",
    date: "12 May 2026",
    readTime: "6 min read",
    author: "Digibly Group",
    content: `
## The First Impression You Don't Control

Before a prospect calls your phone or sends an enquiry, they've already made a judgement about you. They found your website — and in under three seconds, they decided whether you were worth their time.

This isn't sentiment. It's documented in eye-tracking research going back to 2006, and every subsequent study has reinforced it: users make credibility assessments almost instantaneously based on visual design.

So when we ask "is your website costing you clients?", we're really asking: what does your website tell someone about your business in the first three seconds?

## The Four Silent Killers

### 1. Speed — The Invisible Conversion Lever

Google's own research found that a one-second delay in page load time can reduce conversions by up to 20%. Every additional second compounds the problem. Yet most small business websites load in 6–8 seconds on mobile networks.

Run your site through Google PageSpeed Insights right now. If you score below 70 on mobile, you have a problem that no amount of advertising spend can overcome.

### 2. Mobile Neglect

Over 60% of web traffic in Australia now originates from mobile devices. Yet a surprising number of business websites were built primarily for desktop and received only a cursory mobile "optimisation."

This isn't just about looking good on a smaller screen. It's about touch targets being large enough to tap, forms that don't break when you try to fill them on a phone, and content that doesn't require horizontal scrolling.

### 3. Unclear Value Proposition

Within three seconds on your homepage, a visitor should be able to answer: "What does this business do and why is it better than alternatives?"

If your homepage headline is your company name — and nothing else — you've failed this test. If a visitor has to scroll or click to understand what you do, most won't.

### 4. Broken Trust Signals

Reviews, testimonials, case studies, security badges, credentials — these are trust accelerants. Their absence is a trust gap. Their presence, done right, accelerates the decision to contact you.

## What to Do This Week

1. Run a mobile page speed test (Google PageSpeed, GTmetrix)
2. Load your homepage on your phone and ask: is the value prop clear within 3 seconds?
3. Count how many clicks it takes to find your phone number or contact form
4. Check whether your SSL certificate is valid (padlock in the browser bar)

If any of these fail basic standards, you are leaving revenue on the table every single day your site remains unchanged.

## The Investment Calculus

A website rebuild might cost $1,500–$5,000 for a small business. If it improves your conversion rate from 1% to 3% on existing traffic, and your average client value is $2,000 — even 5 additional conversions per month represents $120,000 in annual revenue.

Seen through that lens, a slow or outdated website isn't a minor inconvenience. It's one of the most expensive decisions you're making.
    `.trim(),
  },
  {
    slug: "google-ads-optimisation-guide-australian-businesses",
    title: "Google Ads Optimisation: A Complete Guide for Australian Businesses",
    excerpt:
      "Running Google Ads without proper optimisation is like pouring water into a leaky bucket. This guide covers the essential techniques that separate profitable campaigns from money pits.",
    category: "Marketing",
    date: "28 Apr 2026",
    readTime: "9 min read",
    author: "Digibly Group",
    image: "/images/analytics-reporting.png",
    content: `
## Why Most Australian Google Ads Accounts Underperform

The median Australian small business Google Ads account wastes between 40–60% of its budget. Not because Google Ads doesn't work — it does — but because the platform's complexity rewards expertise, and most accounts are set up once and left to run.

This guide covers the specific optimisations that move the needle for local and national Australian businesses.

## Campaign Structure: Get This Right First

Before you optimise anything, you need a sound campaign structure. The most common mistake is mixing broad match keywords across multiple industries in a single campaign. This makes it impossible to control budget, measure performance by intent, or apply bid adjustments intelligently.

**The right structure:**
- One campaign per core service or product category
- Ad groups segmented by intent (research, comparison, purchase-ready)
- Match types deliberately chosen — start tighter (exact + phrase) and expand based on data

## Negative Keywords: Your Cheapest Optimisation

Review your search terms report weekly. For every relevant search term you're appearing for, there are likely dozens of irrelevant ones consuming budget. Common culprits for Australian businesses:

- "jobs" "career" "how to" (informational intent, not commercial)
- Adjacent industries with overlapping terminology
- Competitor brand terms (unless you're running conquesting campaigns intentionally)

Building a robust negative keyword list takes time, but every irrelevant click you exclude is money redirected to qualified prospects.

## Quality Score: The Multiplier You're Ignoring

Google's Quality Score affects both your cost-per-click and your ad position. A Quality Score of 8–10 can mean paying 30–40% less than a competitor with a score of 4–5, for the same position.

The three components:
1. **Expected click-through rate** — Are your ads compelling enough that people click them?
2. **Ad relevance** — Do your ads closely match the search query's intent?
3. **Landing page experience** — Does your landing page deliver what the ad promises?

Most accounts focus obsessively on bidding and ignore landing page experience, which is often the biggest Quality Score lever.

## Bidding Strategy: The Target CPA Trap

Target CPA and Target ROAS are Google's smart bidding strategies. They work — eventually — but require sufficient conversion data (typically 30–50 conversions per month) before the algorithm has enough signal to optimise intelligently.

For new campaigns or lower-volume accounts, manual CPC or Enhanced CPC often outperforms smart bidding in the early months. Transition to smart bidding once you have the data to support it.

## Australian-Specific Considerations

### Geographic Targeting
Australia's population is highly concentrated. Precise location targeting in Sydney, Melbourne, Brisbane, Perth, and Canberra covers the majority of commercial intent. If you're a national business, consider separate campaigns per major city to allow budget reallocation based on performance.

### Ad Scheduling
Australian business hours and online search behaviour differ from US studies. Run your campaigns for two weeks before applying aggressive ad scheduling — let the data tell you when your specific audience converts.

### GST in Pricing
If you're including pricing in ads or landing pages, remember Australian users expect GST-inclusive prices. Ambiguity here creates friction and abandoned enquiries.

## The Weekly Optimisation Checklist

- Search terms report review (add negatives, identify new keywords)
- Bid adjustments based on device, location, and time performance
- Ad copy A/B test progress review
- Quality Score changes across key terms
- Budget pacing versus results

Google Ads is not a "set and forget" channel. The businesses extracting the best returns treat it as an ongoing discipline, not a one-time setup task.
    `.trim(),
  },
  {
    slug: "cybersecurity-governance-australian-sme",
    title: "Cybersecurity Governance: What Every Australian SME Needs to Know",
    excerpt:
      "The 2023–2030 Australian Cyber Security Strategy has raised the bar for all organisations. This explainer breaks down what governance means in practice — and why SMEs can no longer ignore it.",
    category: "Cybersecurity",
    date: "15 Apr 2026",
    readTime: "8 min read",
    author: "Digibly Group",
    content: `
## Why Governance Is No Longer Optional

"Cybersecurity is only for big companies." This assumption costs Australian businesses millions each year. In 2023, the Australian Cyber Security Centre (ACSC) reported that cybercrime cost Australian businesses over $33 billion annually, with small businesses among the most frequently targeted — and least prepared.

The shift in the policy environment has been deliberate. Australia's Cyber Security Strategy 2023–2030 explicitly includes small and medium enterprises in its scope, establishing expectations around baseline security posture that, while not yet mandatory for most SMEs, are rapidly becoming the standard against which organisations are judged by customers, insurers, and partners.

## What Cybersecurity Governance Actually Means

Governance is not technical security. It's the management layer above the technical controls — the policies, processes, accountability structures, and strategic decisions that ensure cybersecurity efforts are coherent, proportionate, and effective.

Good governance answers questions like:
- Who is responsible for cybersecurity decisions in this organisation?
- How do we identify and prioritise our most significant cyber risks?
- What would we do if we experienced a serious incident?
- How do we verify that our security controls are working?

Without governance, even organisations with good technical controls often fail at the critical moments — because no one knows who decides what, or what the procedure is.

## The Key Frameworks

### NIST Cybersecurity Framework 2.0

The NIST CSF 2.0 (released February 2024) is the most widely adopted cybersecurity framework globally. It organises cybersecurity activities into six functions: Govern, Identify, Protect, Detect, Respond, and Recover.

The addition of "Govern" as a first-class function in version 2.0 is significant — it reflects the global consensus that governance is foundational, not an afterthought.

### Essential Eight

The ACSC's Essential Eight is the Australian government's recommended baseline for organisations. It focuses on eight specific mitigations that address the most common attack vectors: multi-factor authentication, patching, application control, and five others.

For most Australian SMEs, achieving Maturity Level 1 across all eight mitigations is the appropriate initial target.

### ISO 27001

For organisations in regulated industries (financial services, healthcare, critical infrastructure), ISO 27001 certification may be expected by regulators, clients, or insurers. It requires a formal Information Security Management System (ISMS).

## Starting Your Governance Journey

You don't need a CISO or a large IT department to start. A pragmatic approach for SMEs:

1. **Asset inventory** — Know what you have (devices, data, systems, accounts)
2. **Risk assessment** — Identify your most significant threats and vulnerabilities
3. **Policy foundation** — Documented acceptable use, incident response, and password policies
4. **Essential Eight baseline** — Assess your current position against ACSC's framework
5. **Roles and responsibilities** — Clearly assign who owns security decisions

This is work that Digibly Govern specialises in — providing governance advisory services that are practical, proportionate to the size of the organisation, and grounded in internationally recognised frameworks.

## The Cost of Inaction

A small business that falls victim to a ransomware attack faces average recovery costs of $39,000 in Australia, according to 2023 ACSC data. This excludes reputational damage, lost contracts, and the cost of mandatory breach notifications under the Privacy Act 1988.

Cyber insurance premiums are rising sharply, and insurers are increasingly requiring evidence of basic governance controls before issuing policies. Organisations without documented processes are finding themselves either uninsurable or facing exclusions that make their policies close to worthless.

The question is no longer whether governance investment is justified — it's how to make that investment efficiently and proportionately.
    `.trim(),
  },
  {
    slug: "hidden-cost-of-ignoring-brand-identity",
    title: "The Hidden Cost of Ignoring Your Brand Identity",
    excerpt:
      "A weak brand identity doesn't just look unprofessional — it actively costs you revenue. Here's how brand investment pays for itself, and what the research says about consumer trust.",
    category: "Branding",
    date: "2 Apr 2026",
    readTime: "5 min read",
    author: "Digibly Group",
    content: `
## Brand as an Economic Asset

Every purchasing decision, however rational it feels, is influenced by emotional signals — and visual brand identity is one of the most powerful emotional signals a business can send.

This is not a designer's opinion. It's documented consumer psychology. A consistent brand presentation across all platforms increases revenue by an average of 23%, according to Lucidpress research. Yet most small businesses treat their brand as an afterthought — a logo knocked together at launch, never revisited.

## The Trust Gap

When a potential client encounters your business — whether on your website, a business card, or a proposal document — they're unconsciously evaluating your brand's visual consistency as a proxy for your operational consistency.

An inconsistent brand signals inconsistency in how you run your business. It creates doubt, and doubt kills conversions.

Conversely, a coherent, premium brand identity creates what psychologists call a "halo effect" — the perception of quality extends beyond the design itself into assumptions about your product, your team, and your reliability.

## What Happens Without It

Without a defined brand system, you'll find yourself:

- Commissioning a new graphic each time you need marketing material
- Sending proposals with different logos, fonts, and colours depending on who prepared them
- Unable to brief designers, printers, or employees on your visual standards
- Watching competitors with inferior products win business because their brand communicates professionalism

## The Return on Brand Investment

A professional brand identity investment of $900–$2,500 for a small business typically produces:

- Improved proposal acceptance rates (clients perceive greater professionalism)
- Higher average transaction values (premium brand = premium price tolerance)
- More referrals (people are proud to recommend businesses they're associated with)
- Faster team onboarding (brand guidelines eliminate guesswork)

The return is rarely immediate and it's rarely directly attributable to a single piece. But over 12–24 months, businesses with coherent identities consistently outperform those without — not because of the logo, but because of the cumulative effect of consistent professional presentation.

## What a Complete Brand Identity Includes

At a minimum, a professional brand identity system should include:
- Primary and secondary logo variants (with clear/dark/light versions)
- A defined colour palette with exact specifications (HEX, CMYK, Pantone)
- A typography system (two complementary typefaces with size hierarchy)
- A brand guidelines document that anyone in your organisation can follow

This is the foundation. Everything you create — your website, your proposals, your social media, your packaging — should flow from this foundation.

Without it, every piece of marketing is a gamble. With it, every piece of marketing compounds.
    `.trim(),
  },
  {
    slug: "how-social-media-management-drives-business-results",
    title: "How Social Media Management Drives Real Business Results",
    excerpt:
      "Social media done right is one of the highest-ROI marketing investments a small business can make. Here's what separates effective social management from expensive noise.",
    category: "Marketing",
    date: "10 Apr 2026",
    readTime: "6 min read",
    author: "Digibly Group",
    image: "/images/social-media.png",
    content: `
## The Measurement Problem

Most businesses know they should be on social media. Very few know whether their social media is actually working. This is the core problem with how social media is typically managed — it's treated as a brand obligation rather than a measurable marketing channel.

Effective social media management starts with understanding what success looks like in terms your business cares about: enquiries generated, website traffic driven, brand recall in your market.

## Why Consistency Beats Virality

Every social media manager will tell you they want to create viral content. Almost none of them will tell you that virality is largely unpredictable, unrepeatable, and often attracts an audience that doesn't convert.

The most effective social strategies for Australian small businesses are built on consistency — a content calendar that shows up reliably, communicates a coherent point of view, and makes your brand recognisable over time.

A business that posts 12 quality pieces of content per month for 12 months will outperform one that posts 200 pieces over two months and then goes dark. The algorithm rewards consistency. More importantly, your audience does.

## The Platform Question

Not every business needs to be on every platform. The right platforms depend on where your customers actually spend time, what content formats suit your products, and where your competitors are (or aren't).

For most Australian B2B businesses, LinkedIn is non-negotiable. For most consumer brands targeting under-45 Australians, Instagram and increasingly TikTok are the priority. Facebook still has significant reach among 35–60 year olds, making it valuable for service businesses.

The mistake is spreading resources across five platforms and doing all of them poorly. Better to dominate two than to be mediocre on five.

## What Professional Management Delivers

When social media is managed professionally, you're not just getting content. You're getting:

**Brand consistency** — every piece of content reflects your brand guidelines, tone, and values. A professional-looking grid on Instagram signals to every new visitor that you're established and credible.

**Community management** — comments, DMs, and mentions responded to promptly. In an era when consumers expect replies within hours, failing to respond is a brand damage event.

**Strategic content planning** — content mapped to your business calendar, campaigns aligned with product launches or seasonal trends, and audience insights informing what gets made.

**Analytics and iteration** — monthly data review identifying what's performing and what isn't, with content strategy adjusted accordingly. Without this, you're flying blind.

## The Real ROI Calculation

Social media ROI is often dismissed as untrackable. This is partly true for brand-building content, but conversion-focused content — content designed to drive a specific action — absolutely can be tracked.

UTM parameters on links, enquiry source attribution, and pixel tracking on your website can all tell you how much traffic and how many enquiries your social channels are generating.

For the businesses we manage, average results include follower growth of 150–300% in the first 12 months, engagement rates 2–3× above their previous benchmarks, and — crucially — social media becoming a measurable source of inbound enquiries rather than an obligation that consumed time without return.
    `.trim(),
  },
  {
    slug: "how-to-choose-a-digital-agency-in-australia",
    title: "How to Choose a Digital Agency in Australia",
    excerpt:
      "The Australian digital agency market is crowded and murky. This guide gives you the questions to ask, the red flags to watch for, and a framework for making the right decision.",
    category: "Business",
    date: "18 Mar 2026",
    readTime: "7 min read",
    author: "Digibly Group",
    content: `
## The Problem With the Australian Agency Market

Australia has thousands of digital agencies. A large number of them are one or two people operating under an impressive-sounding company name, or they're offshore teams white-labelled by a local broker. Neither is necessarily bad — but you deserve to know what you're buying.

The lack of transparency in the industry makes it easy for agencies to overpromise and underdeliver. This guide helps you cut through the noise.

## The Five Questions Every Good Agency Should Be Able to Answer

### 1. Can I see work you've done for businesses similar to mine?

Not just a portfolio website — actual case studies with real outcomes. A good agency will be able to discuss the brief, the strategy they employed, and the measurable results. Vague claims like "we grew their traffic" without specifics are a red flag.

### 2. Who will actually be working on my account?

Many agencies win work through senior staff and deliver through juniors or offshore contractors. Ask explicitly who your day-to-day contact will be, and ask to meet them during the sales process.

### 3. What do you not do well?

An agency that claims expertise in everything is either very large (unlikely if you're a small business) or not being honest. An honest agency can tell you where their strengths are concentrated — and where they'd recommend you look elsewhere.

### 4. How do you measure success, and how will you report it to me?

Good agencies have clear KPIs and regular reporting. They should be able to show you sample reports. If the answer to this question is vague, reporting will likely be vague.

### 5. What happens if we want to leave?

Contracts that make it difficult to leave, or that retain ownership of assets like your website or your ad account, are red flags. You should own your domain, your website, your ad accounts, and your social media. A reputable agency will confirm this clearly.

## Red Flags to Watch For

- No published pricing (even indicative ranges)
- Guaranteed ranking positions in Google (no one can guarantee this)
- Contracts requiring 12+ months with no performance benchmarks
- Unable to provide direct references from current or recent clients
- Pressure to sign before you've seen detailed proposals or met the team

## What to Prioritise

For Australian businesses, we'd suggest weighting your agency selection criteria as follows:

**Communication and transparency** — This matters more than almost anything else. An agency that responds promptly, explains clearly, and is honest about both successes and challenges will serve you better than a technically superior team that ghosts you for weeks.

**Australian market knowledge** — Consumer behaviour, platform costs, and competitive dynamics in Australia can differ meaningfully from US or UK case studies. An agency with genuine Australian market experience is a distinct advantage.

**Portfolio relevance** — Experience in your industry or adjacent industries reduces your risk substantially. They've already made the mistakes and learned the lessons.

**Cultural fit** — You'll be working closely with this agency. If you find their communication style grating in the sales process, it won't improve.

## Getting Value for Money

Australian digital agency pricing varies enormously. A monthly retainer for a comprehensive digital marketing package might range from $1,500 to $10,000+ per month. The key is understanding what's included and what success looks like at each price point.

Cheap isn't always bad. Expensive isn't always good. What matters is alignment between the scope of work, the expected outcomes, and the fee — and the willingness of both parties to hold each other accountable.
    `.trim(),
  },
  {
    slug: "ai-enabled-threat-detection-public-sector",
    title: "AI-Enabled Threat Detection: What Public Sector Organisations Must Understand",
    excerpt:
      "Artificial intelligence is reshaping cybersecurity defence — but for government and public sector bodies, the adoption journey involves unique governance considerations. Here's what senior leaders need to know.",
    category: "Cybersecurity",
    date: "5 Mar 2026",
    readTime: "8 min read",
    author: "Digibly Group",
    content: `
## The Promise and the Complication

AI-enabled threat detection is no longer experimental. Major security vendors — CrowdStrike, Microsoft Defender, SentinelOne, and others — have been integrating machine learning into their detection capabilities for years. The results are real: AI-driven tools can identify novel threat patterns that would take human analysts days to recognise, operating at a scale and speed that manual processes cannot match.

For public sector organisations, the appeal is obvious. Government agencies face a persistent threat landscape — nation-state actors, criminal ransomware operators, insider threats — against a backdrop of constrained staffing and ageing infrastructure.

But the adoption of AI in a security context for government introduces governance obligations that go beyond traditional cybersecurity frameworks.

## What Changes When AI Is in the Loop

Traditional security controls operate deterministically: if condition X is met, action Y is taken. An AI-driven detection system operates probabilistically: based on patterns across millions of data points, the system determines that activity has a certain probability of being malicious.

This probabilistic nature has governance implications that senior leaders must understand before they authorise AI security tooling:

**Explainability** — If your AI system flags an account as compromised and you take action against a staff member, can you explain to a tribunal or an oversight body exactly why the system made that determination? In most cases, not in the detail you'd hope.

**False positive costs** — AI systems have false positive rates. In a government context, a false positive that triggers an account lockout or an investigation has real consequences for staff, operations, and morale.

**Bias in training data** — Security AI models are trained on historical threat data. If that data skews toward certain geographies, attack types, or actor profiles, the model will be stronger in some areas and weaker in others. Understanding these limitations is an accountability obligation.

**Vendor dependency** — Many AI security tools involve data leaving your environment for cloud-based analysis. For agencies handling sensitive or classified information, this has sovereignty and data handling implications.

## The NIST AI Risk Management Framework

Released in January 2023, the NIST AI RMF 1.0 provides a voluntary framework for identifying, assessing, and managing AI risks across the AI lifecycle. For public sector bodies considering AI security adoption, the framework's "GOVERN" function is particularly relevant — it addresses accountability structures, workforce competence, and organisational processes for responsible AI deployment.

The framework doesn't prohibit AI adoption. It establishes a systematic way of thinking about the risks so that adoption can be done responsibly.

## Practical Governance Steps Before You Deploy

Before deploying AI-enabled security tooling in a government environment, we recommend:

1. **Conduct an AI governance gap assessment** — Evaluate your existing policies against the requirements of responsible AI deployment in your specific context.

2. **Define acceptable use and override policies** — Document the conditions under which human analysts can override AI-generated alerts, and who has that authority.

3. **Establish explainability requirements for procurement** — When evaluating vendor tools, require documentation of how the model reaches decisions and what its known limitations are.

4. **Plan for OAIC notification scenarios** — Under the Privacy Act and Notifiable Data Breaches scheme, understand how AI involvement in a breach detection scenario affects your notification obligations.

5. **Align with ASD Essential Eight** — Ensure AI security tools are layered on top of, not substituted for, the foundational Essential Eight controls.

## The Strategic Opportunity

The agencies that navigate this complexity successfully will have a genuine security advantage. AI-enabled detection, deployed with appropriate governance, can materially improve detection time, reduce analyst workload, and catch threat actors who would evade traditional signature-based tools.

The governance work isn't a barrier to adoption. It's the work that makes adoption defensible — to ministers, to oversight bodies, and to the public whose data the agency holds.

Digibly Govern provides governance advisory services specifically designed to help public sector organisations navigate the intersection of cybersecurity and AI governance, grounded in NIST CSF 2.0, NIST AI RMF 1.0, and the Australian Cyber Security Strategy 2023–2030.
    `.trim(),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export const blogCategories = ["All", "Web Design", "Marketing", "Cybersecurity", "Branding", "Business"];
