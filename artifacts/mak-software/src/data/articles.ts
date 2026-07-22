export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: { title: string; desc: string }[];
};

export type ArticleLink = { label: string; href: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  /** Opening standfirst under the H1. */
  intro: string;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  related: ArticleLink[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'what-are-ai-agents-business-guide',
    title: 'What are AI agents? A business owner’s guide',
    metaTitle: 'What Are AI Agents? A Business Owner’s Guide | MAK Software Solutions',
    metaDescription:
      'AI agents explained without the hype: what they are, what they can and cannot automate, what they cost to run, and how to judge whether your business process is a fit.',
    category: 'AI',
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    readMinutes: 7,
    intro:
      'An AI agent is software that uses a language model to decide what to do next — not just to answer a question. That single difference is why agents can run business processes, and also why they fail in ways chatbots never could. Here is the working understanding we wish every client had before their first agent project.',
    sections: [
      {
        heading: 'Agents vs. chatbots: the difference that matters',
        paragraphs: [
          'A chatbot responds. You ask, it answers, the interaction ends. An agent acts: it is given a goal ("find manufacturing companies in the UAE that fit our customer profile"), decides on steps, uses tools — web search, databases, email, your internal APIs — checks its own results, and keeps going until the goal is met or a rule says stop.',
          'The loop of decide → act → observe → decide again is what makes agents powerful. It is also what makes them risky: a chatbot giving a wrong answer wastes a moment; an agent acting on a wrong decision can send a bad email to a real customer. Engineering an agent is mostly engineering the boundaries of that loop.',
        ],
      },
      {
        heading: 'What agents automate well today',
        paragraphs: [
          'From systems we have shipped and operate, agents are reliably good at work that is high-volume, judgment-light, and verifiable:',
        ],
        list: [
          { title: 'Research and enrichment', desc: 'Reading websites, filings, and directories to build structured profiles — the work behind our MAK OS acquisition pipeline.' },
          { title: 'Classification and routing', desc: 'Reading inbound messages, documents, or leads and deciding which queue, person, or workflow they belong to.' },
          { title: 'Drafting for human review', desc: 'First drafts of outreach, replies, summaries, and reports — with a person approving before anything leaves the building.' },
          { title: 'Data reconciliation', desc: 'Comparing records across systems and flagging (not fixing) mismatches.' },
        ],
      },
      {
        heading: 'What agents still do badly',
        paragraphs: [
          'Anything where a single wrong action is expensive and hard to verify: pricing decisions, legal commitments, irreversible transactions, and communication in situations with emotional stakes. Agents also degrade quietly — a model update or a changed website can drop quality without any error being thrown. Production agents need evaluation harnesses that continuously measure output quality, the same way you monitor server uptime.',
          'The honest rule we use in scoping: full autonomy where mistakes are cheap and detectable, human approval gates where they are not. Our own pipeline runs research and qualification autonomously but a person approves outreach. That split is not a limitation — it is the design.',
        ],
      },
      {
        heading: 'What it costs to run',
        paragraphs: [
          'Agent economics are per-task, not per-seat. A research-and-qualify pass over one lead costs a few rupees to a few tens of rupees in model fees depending on depth and model choice. The engineering work that matters is routing: cheap fast models for simple steps, expensive capable models only where reasoning is genuinely needed. Multi-model routing cut inference cost by an order of magnitude on LeadMine AI compared to sending everything to a frontier model.',
        ],
      },
      {
        heading: 'How to judge if your process is a fit',
        paragraphs: [
          'Three questions. First: is the work repetitive enough that you could write a checklist for a new hire? Second: can a wrong output be caught cheaply — by a human glance, a validation rule, or a test? Third: is there volume — does the task happen tens or hundreds of times a week? Yes to all three and an agent will likely pay for itself in months. A no on the second question means you need approval gates; a no on the third means you probably just need a script.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do AI agents replace employees?',
        a: 'In our experience they replace tasks, not roles. The 20 hours a week a team spent on manual prospecting research disappears; the judgment work — relationships, negotiation, strategy — absorbs the freed time. Headcount changes tend to show up as slower hiring, not layoffs.',
      },
      {
        q: 'How long does it take to build a production AI agent?',
        a: 'A single-purpose agent with proper guardrails and evaluation: 4–8 weeks. Multi-agent pipelines like MAK OS take longer because the orchestration and human checkpoints are most of the work.',
      },
      {
        q: 'Which model should an agent use?',
        a: 'Usually several. Production systems route between models per step — fast cheap models for extraction and classification, stronger models for reasoning steps. Locking into a single provider is both a cost and a reliability mistake.',
      },
    ],
    related: [
      { label: 'AI Development Services', href: '/services/ai-development' },
      { label: 'Case study: MAK OS agent pipeline', href: '/work/mak-os' },
      { label: 'LLM cost guide', href: '/insights/llm-cost-guide' },
    ],
  },
  {
    slug: 'llm-cost-guide',
    title: 'The LLM cost guide: OpenAI vs Claude vs Gemini vs open models',
    metaTitle: 'LLM Cost Guide 2026 — OpenAI vs Claude vs Gemini vs Open Models | MAK Software Solutions',
    metaDescription:
      'How to think about LLM costs in production: token pricing vs real per-task economics, model routing, caching, and when self-hosted open models beat APIs.',
    category: 'AI',
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    readMinutes: 8,
    intro:
      'Model price lists are almost useless for budgeting. What matters is per-task cost — what one lead scored, one document parsed, one reply drafted actually costs — and that is dominated by architecture decisions, not the provider’s rate card. This guide covers how we design LLM economics in systems that run at volume.',
    sections: [
      {
        heading: 'Why the rate card misleads',
        paragraphs: [
          'Providers price per million tokens, but tasks are not tokens. A naive pipeline that stuffs full documents into a frontier model can cost 50× more per task than a designed pipeline producing the same output. The differences come from prompt size discipline, output length control, caching, and — biggest of all — which model handles which step.',
          'When we rebuilt the scoring pipeline in LeadMine AI around routed models, per-lead cost fell by roughly an order of magnitude with no measurable quality loss. Nothing about the providers changed. The architecture did.',
        ],
      },
      {
        heading: 'The routing principle',
        paragraphs: [
          'Every multi-step AI workflow has steps of wildly different difficulty. Extracting a company name from a webpage is trivial; judging whether that company fits a nuanced customer profile is not. Routing means matching each step to the cheapest model that clears the quality bar:',
        ],
        list: [
          { title: 'Frontier APIs (GPT, Claude, Gemini Pro)', desc: 'Reasoning-heavy steps: qualification judgments, complex drafting, multi-document synthesis. Highest cost, use surgically.' },
          { title: 'Fast tiers (mini/flash/haiku-class)', desc: 'Extraction, classification, formatting, summaries. The workhorse tier — most production volume belongs here.' },
          { title: 'Hosted open models (Groq and similar)', desc: 'Very high-volume, latency-sensitive steps. Extremely cheap per token with excellent speed.' },
          { title: 'Self-hosted (Ollama, vLLM)', desc: 'Wins when volume is enormous and steady, data cannot leave your infrastructure, or per-call latency budgets are tiny. You trade API fees for ops burden.' },
        ],
      },
      {
        heading: 'Caching: the cheapest tokens are the ones you never send',
        paragraphs: [
          'Three layers matter in practice. Prompt caching (supported by major providers) makes repeated system prompts nearly free. Response caching — hashing inputs and reusing outputs — eliminates whole calls for repeated work. Semantic caching, reusing answers for near-identical inputs, is powerful but needs care to avoid stale or wrongly-matched results. In back-office automation, response caching alone often removes 30–50% of calls.',
        ],
      },
      {
        heading: 'When open models actually win',
        paragraphs: [
          'The break-even is further out than most teams think. Self-hosting carries GPU cost, ops time, and model-quality lag. Our rule: open models win on privacy requirements first, latency second, and raw cost only at sustained high volume. Below that, a routed mix of API tiers is cheaper once engineering time is priced in.',
          'The strategic reason to keep an open-model path anyway: negotiating leverage and resilience. Systems we build abstract the model layer so providers can be swapped per step — a week of repricing, not a rewrite.',
        ],
      },
      {
        heading: 'Budgeting a project: the numbers to demand',
        paragraphs: [
          'Before committing to any AI system, insist on per-unit economics: cost per lead processed, per document parsed, per conversation handled — at your projected volume, with the routing plan shown. Any builder who cannot produce that table has not designed the system yet. We provide it in every AI proposal because inference cost is a design output, not a surprise on the first invoice.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which LLM is cheapest in 2026?',
        a: 'Per token, hosted open models are cheapest. Per task, whichever architecture routes most of the volume to fast tiers and caches aggressively. A well-routed pipeline on premium APIs regularly beats a naive pipeline on cheap models.',
      },
      {
        q: 'Should we self-host to save money?',
        a: 'Only with sustained high volume, a privacy mandate, or hard latency limits. Below that, GPU and ops costs usually exceed the API bill you are trying to avoid.',
      },
      {
        q: 'How do you prevent runaway API bills?',
        a: 'Hard budget guardrails in code: per-task token ceilings, daily spend caps with alerts, and kill switches on anomalous loops. Agents especially need loop limits — a stuck agent retrying is the classic bill spike.',
      },
    ],
    related: [
      { label: 'AI Development Services', href: '/services/ai-development' },
      { label: 'Case study: LeadMine AI multi-model routing', href: '/work/leadmine-ai' },
      { label: 'What are AI agents?', href: '/insights/what-are-ai-agents-business-guide' },
    ],
  },
  {
    slug: 'custom-erp-vs-off-the-shelf',
    title: 'Custom ERP vs off-the-shelf: the real cost comparison',
    metaTitle: 'Custom ERP vs Off-the-Shelf (SAP, Odoo, Zoho): Real Costs | MAK Software Solutions',
    metaDescription:
      'A practical comparison of custom ERP development against SAP, Odoo, and Zoho: licensing, implementation, change costs, and when each choice actually wins.',
    category: 'Enterprise',
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    readMinutes: 7,
    intro:
      'The ERP decision is usually framed as "build vs buy" — but the real comparison is between three cost curves over five years: licensing, implementation, and the cost of change. Having built custom ERP (7STAR, delivered in six weeks) and integrated around the suites, here is the honest breakdown.',
    sections: [
      {
        heading: 'The three cost curves',
        paragraphs: [
          'Licensing is the visible curve: per-seat, per-module, forever, rising with headcount. Implementation is the painful curve: for the big suites, consultants configuring modules to approximate your processes — routinely 2–5× the first year of licensing. The cost of change is the curve nobody budgets: every process tweak after go-live goes through configuration consultants or waits for the vendor roadmap.',
          'Custom flips the shape: implementation is the main cost, licensing is zero, and change costs are ordinary engineering work on code you own. Which shape wins depends entirely on how standard your operation is.',
        ],
      },
      {
        heading: 'When off-the-shelf genuinely wins',
        paragraphs: [
          'If your processes are standard for your industry — normal purchasing, normal inventory, standard accounting — the suites encode decades of best practice and you should use them. Odoo or Zoho for SMEs with vanilla flows is a good decision. You are buying process maturity, not just software.',
        ],
      },
      {
        heading: 'When custom wins',
        paragraphs: [
          'Custom wins when the way you operate IS your competitive edge, and the suite forces you to abandon it:',
        ],
        list: [
          { title: 'Non-standard flows', desc: 'Approval chains, pricing logic, or logistics no suite models without heavy customization — which is custom development at consultant rates.' },
          { title: 'Multi-entity, multi-country operations', desc: 'Currencies, tax regimes, and inter-company flows where suite editions multiply licensing fast. 7STAR ERP reconciles nine currencies natively because it was built to.' },
          { title: 'Integration-heavy environments', desc: 'When the ERP must talk to machines, marketplaces, or legacy systems, owning the codebase beats fighting a vendor API surface.' },
          { title: 'Seat-count economics', desc: 'Hundreds of users make per-seat licensing alone exceed a custom build within a few years.' },
        ],
      },
      {
        heading: 'The timeline myth',
        paragraphs: [
          'The strongest argument against custom used to be time: 12–18 months versus a suite rollout. Modern tooling has broken that assumption. Building on a proven core — auth, roles, audit trails, reporting reused across projects — the first working module ships in weeks. We delivered 7STAR ERP, covering global inventory, multi-currency finance, and role-based access for a large user base, in six weeks. Iterative delivery also means the system meets reality early, while big-bang suite rollouts meet reality only at go-live.',
        ],
      },
      {
        heading: 'The five-year question',
        paragraphs: [
          'Total the licensing you will pay, the implementation consultants, and — honestly — the workarounds your team will build in spreadsheets around the suite’s rigidities. Compare against a custom build where year-one is the investment and every later rupee buys improvement instead of rent. For standard operations the suite usually still wins. For operations with genuine edge, custom does — and the gap widens every year after the first.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does custom ERP development cost?',
        a: 'Scope-dependent, but the honest comparison is against five years of licensing plus implementation plus change requests for a suite — not against the sticker price. For multi-module, multi-currency operations, custom frequently comes in below the suite’s implementation cost alone.',
      },
      {
        q: 'How long does custom ERP take to build?',
        a: 'First working module: 6–10 weeks on a proven core. Full multi-module coverage: iterative over months, with the system in production use from the first release — not a big-bang at the end.',
      },
      {
        q: 'What about maintenance after launch?',
        a: 'Budget ongoing engineering the way you budget any operational system. The difference from suite "maintenance" is that the spend produces features you asked for, on a codebase you own and can move.',
      },
    ],
    related: [
      { label: 'ERP Development Services', href: '/services/erp' },
      { label: 'Case study: 7STAR ERP in six weeks', href: '/work/7star-erp' },
      { label: 'Business automation services', href: '/services/automation' },
    ],
  },
  {
    slug: 'automate-b2b-lead-generation-with-ai',
    title: 'How to automate B2B lead generation with AI',
    metaTitle: 'How to Automate B2B Lead Generation with AI (Real Architecture) | MAK Software Solutions',
    metaDescription:
      'The actual architecture of AI-automated B2B lead generation: discovery, enrichment, scoring, and outreach — with the human checkpoints that keep it effective.',
    category: 'AI',
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    readMinutes: 8,
    intro:
      'We automated our own B2B pipeline from roughly 20 manual hours a week to near zero, and built the same pattern for clients. This is the actual architecture — four stages, each with a different automation ceiling — and the places where keeping a human in the loop is what makes the automation work.',
    sections: [
      {
        heading: 'Why most “AI lead gen” disappoints',
        paragraphs: [
          'The common failure is automating the last step first: AI-written cold emails sprayed at purchased lists. The writing was never the bottleneck — targeting was. Bad-fit prospects receive fluent irrelevant email, reply rates stay terrible, and the domain’s sending reputation burns. Effective automation runs the pipeline in order: find better companies, know more about them, rank them honestly, and only then write.',
        ],
      },
      {
        heading: 'The four-stage architecture',
        paragraphs: [
          'The pipeline that runs MAK OS, and the client systems derived from it, splits cleanly:',
        ],
        list: [
          { title: '1. Discovery — fully automatable', desc: 'Agents scan directories, registries, job boards, and news for companies emitting signals that match your ideal profile: hiring patterns, tech adoption, expansion announcements.' },
          { title: '2. Enrichment — fully automatable', desc: 'For each candidate: website content, size signals, tech stack, decision-maker roles, assembled into a structured profile. Pure reading work — exactly what LLMs are good at.' },
          { title: '3. Scoring — automatable with calibration', desc: 'Models judge fit against your definition of a good customer, with reasons attached. The scoring rubric needs human calibration in the first weeks — this is where LeadMine AI’s multi-model routing keeps per-lead cost sensible at volume.' },
          { title: '4. Outreach — automate drafting, gate sending', desc: 'Personalized drafts grounded in the enrichment data, queued for human approval. The approval click is cheap; the reputation it protects is not.' },
        ],
      },
      {
        heading: 'The economics',
        paragraphs: [
          'Per-lead processing cost lands in single-digit to low double-digit rupees with routed models — trivial against the value of a qualified B2B conversation. The real saving is time: research that consumed a working day of every week runs continuously in the background. The pipeline never has an empty Monday.',
          'Volume discipline matters more than volume. Because scoring is honest, the system sends fewer, better emails than the manual process did — and reply quality rises accordingly. Automation that increases send volume without increasing fit is a domain-reputation liability wearing an AI costume.',
        ],
      },
      {
        heading: 'Build order for a first system',
        paragraphs: [
          'Start with enrichment and scoring on your existing inbound leads — no sending, no risk, immediate value: your team stops researching manually and starts each day with ranked, documented leads. Add discovery once scoring is calibrated against reality. Add outreach drafting last, gated behind approval. Each stage proves itself before the next one compounds it. A first enrichment-and-scoring system is a 4–6 week build; the full pipeline grows from there against measured results.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is AI-automated outreach legal and safe for deliverability?',
        a: 'Drafting is safe; sending is where discipline lives. Keep human approval on sends, respect regional rules (PECR/GDPR in Europe, CAN-SPAM in the US), warm domains properly, and let honest scoring keep volume low and fit high. Deliverability problems come from volume-without-fit, not from AI.',
      },
      {
        q: 'What does a system like this cost to run?',
        a: 'Model fees per fully-processed lead are small — the design work keeps them that way through routing and caching. Infrastructure is modest. The dominant cost is the build, which is why starting with the enrichment/scoring core makes sense: it pays back while the rest is added.',
      },
      {
        q: 'Can this integrate with our existing CRM?',
        a: 'Yes — the pipeline should feed whatever your team already uses. We typically write scored, enriched leads directly into the existing CRM via its API, with the reasoning attached, rather than forcing a tool migration.',
      },
    ],
    related: [
      { label: 'Case study: MAK OS acquisition pipeline', href: '/work/mak-os' },
      { label: 'Case study: LeadMine AI scoring', href: '/work/leadmine-ai' },
      { label: 'Business automation services', href: '/services/automation' },
      { label: 'CRM development with AI scoring', href: '/services/crm' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
