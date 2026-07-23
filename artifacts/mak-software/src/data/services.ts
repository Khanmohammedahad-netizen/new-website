export type ServiceFaq = { q: string; a: string };

export type CaseLink = { title: string; href: string; note: string };

export type Service = {
  slug: string;
  /** Short name used in nav, cards, footers. */
  name: string;
  /** Card / hub one-liner. */
  tagline: string;
  /** H1 on the detail page. */
  heroTitle: string;
  /** Meta description (140–160 chars). */
  metaDescription: string;
  /** Page <title>. */
  metaTitle: string;
  /** Opening paragraph under the H1. */
  intro: string;
  /** "The problem" copy. */
  problem: string;
  /** "Our approach" copy. */
  approach: string;
  deliverables: { title: string; desc: string }[];
  techStack: string[];
  faqs: ServiceFaq[];
  caseStudies: CaseLink[];
};

export const SERVICES: Service[] = [
  {
    slug: 'ai-development',
    name: 'AI Development',
    tagline: 'LLM-powered systems, agents, and intelligent automation.',
    heroTitle: 'AI development services',
    metaTitle: 'AI Development Services - Agents, LLM Integration | MAK Software Solutions',
    metaDescription:
      'AI development company building autonomous agents, LLM integrations (OpenAI, Claude, Gemini, Groq), RAG pipelines, and intelligent automation for businesses in India, UAE, UK, and USA.',
    intro:
      'We design and ship AI systems that do real work: autonomous agents that run business pipelines, LLM integrations embedded in your products, and retrieval systems grounded in your own data. Not demos - production systems with monitoring, fallbacks, and cost controls built in.',
    problem:
      'Most companies experiment with AI through disconnected chatbots and one-off prompts. The results are unreliable, expensive at scale, and never integrate with actual operations. The gap is engineering: treating LLMs as components inside a properly-architected system rather than magic boxes.',
    approach:
      'We start from the business process, not the model. We map where judgment is needed versus where deterministic code wins, design agent boundaries and human-review checkpoints, then choose models per task - routing between providers by cost, latency, and capability. Everything ships with evaluation harnesses so quality is measured, not assumed.',
    deliverables: [
      { title: 'Autonomous agent systems', desc: 'Multi-agent pipelines that research, decide, and execute with human checkpoints where they matter.' },
      { title: 'LLM product features', desc: 'Summarization, extraction, classification, and generation embedded natively in your software.' },
      { title: 'RAG & knowledge systems', desc: 'Retrieval pipelines grounded in your documents, databases, and internal knowledge.' },
      { title: 'Model routing & cost control', desc: 'Multi-provider routing across OpenAI, Claude, Gemini, Groq, and local models with budget guardrails.' },
      { title: 'Evaluation & monitoring', desc: 'Test suites and dashboards that catch quality regressions before your users do.' },
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Groq', 'Ollama', 'Python', 'TypeScript', 'PostgreSQL', 'pgvector'],
    faqs: [
      {
        q: 'Which AI models do you work with?',
        a: 'OpenAI (GPT family), Anthropic Claude, Google Gemini, Groq-hosted open models, and self-hosted models via Ollama. We route between them per task based on capability, latency, and cost - most production systems we build use more than one provider.',
      },
      {
        q: 'How much does an AI integration project cost to run?',
        a: 'Inference cost depends on volume and model choice. Part of our engineering work is cost design: caching, routing cheaper models for simple steps, and batching. We provide projected per-unit economics before you commit.',
      },
      {
        q: 'Can AI agents really run business processes unattended?',
        a: 'Parts of them, yes - with the right guardrails. We built MAK OS, an autonomous B2B acquisition pipeline that researches and qualifies leads with human approval gates at outreach. Full autonomy where it is safe, human checkpoints where it is not.',
      },
    ],
    caseStudies: [
      { title: 'MAK OS', href: '/work/mak-os', note: 'Autonomous multi-agent B2B acquisition pipeline' },
      { title: 'LeadMine AI', href: '/work/leadmine-ai', note: 'AI lead intelligence with multi-model routing' },
    ],
  },
  {
    slug: 'erp',
    name: 'ERP Development',
    tagline: 'Custom resource planning built around your operations.',
    heroTitle: 'Custom ERP development',
    metaTitle: 'Custom ERP Development Company | MAK Software Solutions',
    metaDescription:
      'Custom ERP software development: inventory, finance, HR, and operations modules built around your workflows - not the other way around. Delivered in weeks, for India, UAE, and global operations.',
    intro:
      'Off-the-shelf ERP forces your business to work the way the vendor imagined. We build ERP systems shaped around how your operation actually runs - your approval chains, your inventory logic, your reporting - and deliver them in weeks, not fiscal years.',
    problem:
      'Growing businesses hit the ceiling of spreadsheets and disconnected tools: inventory in one sheet, invoices in another, approvals over phone calls. Off-the-shelf ERP suites answer with seat licenses, rigid modules, and 18-month implementations that still need consultants to change a field.',
    approach:
      'We map your actual operational flows first - who approves what, where stock moves, what reports leadership reads on Monday. Then we build only the modules you need on a shared core (auth, audit trails, roles, reporting), so the first release lands fast and later modules snap in without rework.',
    deliverables: [
      { title: 'Operations modules', desc: 'Inventory, procurement, production, and logistics tracking matched to your real flow.' },
      { title: 'Finance & invoicing', desc: 'Multi-currency invoicing, expense approval chains, and ledger exports your accountant will accept.' },
      { title: 'HR & workforce', desc: 'Attendance, payroll inputs, and role-based access that mirrors your org chart.' },
      { title: 'Reporting & dashboards', desc: 'Live operational dashboards replacing the Monday-morning spreadsheet ritual.' },
      { title: 'Migration from spreadsheets', desc: 'Structured import of your existing Excel/Sheets data with validation, not retyping.' },
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Supabase', 'Redis'],
    faqs: [
      {
        q: 'How long does custom ERP development take?',
        a: 'The first working release - usually the module causing the most pain - ships in 6–10 weeks. We delivered 7STAR ERP, covering global operations for an international business, in six weeks. Additional modules follow iteratively.',
      },
      {
        q: 'Custom ERP vs. SAP/Odoo/Zoho - when does custom win?',
        a: 'Off-the-shelf wins when your processes are standard. Custom wins when your operation is your edge: unusual approval flows, multi-country logistics, or pricing logic no suite models. You also skip per-seat licensing forever.',
      },
      {
        q: 'Can you migrate our existing spreadsheet data?',
        a: 'Yes - structured migration is part of every ERP project. We import and validate your historical data so the system starts full, not empty.',
      },
    ],
    caseStudies: [
      { title: '7STAR ERP', href: '/work/7star-erp', note: 'Centralized resource planning for global operations' },
    ],
  },
  {
    slug: 'crm',
    name: 'CRM Development',
    tagline: 'Pipelines, lead intelligence, and follow-up that runs itself.',
    heroTitle: 'Custom CRM development',
    metaTitle: 'Custom CRM Development with AI Lead Scoring | MAK Software Solutions',
    metaDescription:
      'Custom CRM development: sales pipelines, AI lead scoring, WhatsApp and email integration, and automated follow-up built around how your team actually sells.',
    intro:
      'Generic CRMs become expensive to-do lists nobody updates. We build CRMs shaped around your actual sales motion - with the data entry automated away, AI scoring what deserves attention, and follow-ups that fire themselves.',
    problem:
      'Sales teams abandon CRMs because the CRM serves management reporting, not the seller. Data entry is manual, lead quality is invisible, and follow-up depends on memory. The pipeline in the tool stops matching reality within a month.',
    approach:
      'We invert the model: the CRM does the clerical work. Leads flow in from your channels automatically, AI enriches and scores them, conversations sync from WhatsApp and email, and the system schedules the next touch. Your team sells; the record keeps itself.',
    deliverables: [
      { title: 'Pipeline & deal management', desc: 'Stages matching your real sales motion, not a template.' },
      { title: 'AI lead scoring & enrichment', desc: 'Automatic qualification and research on every inbound lead.' },
      { title: 'WhatsApp & email integration', desc: 'Conversations captured against the contact automatically - critical for India/UAE sales.' },
      { title: 'Automated follow-up', desc: 'Sequenced touches that fire on schedule with human approval where wanted.' },
      { title: 'Sales analytics', desc: 'Conversion, velocity, and source reporting leadership can trust.' },
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'WhatsApp Business API', 'OpenAI', 'Claude'],
    faqs: [
      {
        q: 'Can the CRM integrate with WhatsApp?',
        a: 'Yes - via the WhatsApp Business API, conversations are captured against contacts automatically. For sales in India and the Gulf, where deals live on WhatsApp, this is usually the single highest-value feature.',
      },
      {
        q: 'How does AI lead scoring work?',
        a: 'Inbound leads are enriched (company data, role, intent signals) and scored by models tuned to your definition of a good customer. We built LeadMine AI on exactly this pattern - routing across Groq, Gemini, and Ollama for cost-efficient scoring at volume.',
      },
      {
        q: 'We already use a CRM. Can you extend it instead of replacing it?',
        a: 'Often, yes. If your current CRM holds the pipeline adequately, we add the missing layer - AI scoring, WhatsApp capture, automation - via its API rather than forcing a migration.',
      },
    ],
    caseStudies: [
      { title: 'LeadMine AI', href: '/work/leadmine-ai', note: 'AI-driven lead intelligence and scoring' },
      { title: 'MAK OS', href: '/work/mak-os', note: 'Autonomous acquisition pipeline with CRM core' },
    ],
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile App Development',
    tagline: 'Native-quality apps for iOS and Android from one codebase.',
    heroTitle: 'Mobile app development',
    metaTitle: 'Mobile App Development - iOS & Android | MAK Software Solutions',
    metaDescription:
      'Cross-platform mobile app development with native feel: consumer apps, location-based platforms, and business tools for iOS and Android from a single codebase.',
    intro:
      'We build mobile apps that feel native, ship to both stores from one codebase, and survive contact with real users - offline states, flaky networks, and all. From consumer discovery platforms to internal operations tools.',
    problem:
      'Mobile projects fail in the gap between the prototype and the store: performance on mid-range Android devices, offline behavior, map rendering at scale, push notification reliability. Agencies demo on flagship phones; users live elsewhere.',
    approach:
      'One React Native/Expo codebase, native modules where performance demands it, and testing on the devices your users actually own. We design the backend and the app together - sync, caching, and API shape decided as one system, not negotiated across teams.',
    deliverables: [
      { title: 'Consumer applications', desc: 'Discovery, social, and marketplace apps with polish users expect.' },
      { title: 'Location-based platforms', desc: 'Custom maps, geofencing, and real-time location features (Mapbox/Google).' },
      { title: 'Business & field tools', desc: 'Internal apps for teams in warehouses, on sites, and on the road - offline-first.' },
      { title: 'Store deployment', desc: 'App Store and Play Store submission, review handling, and release pipelines.' },
      { title: 'Backend & sync', desc: 'APIs, push infrastructure, and offline sync designed with the app, not bolted on.' },
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Mapbox', 'Supabase', 'PostgreSQL'],
    faqs: [
      {
        q: 'Cross-platform or native - which do you recommend?',
        a: 'React Native with Expo covers the large majority of apps at roughly half the cost of dual-native, with native modules added only where profiling shows the need. We recommend pure native only for heavy 3D, AR, or specialized hardware work.',
      },
      {
        q: 'Do you handle App Store and Play Store submission?',
        a: 'Yes - store listings, review compliance, and the rejection-response cycle are part of delivery, plus CI pipelines so later releases ship in minutes.',
      },
      {
        q: 'Have you built location-based apps?',
        a: 'Yes - Third Place is a vibe-based discovery platform for coffee shops and workspaces with custom-styled Mapbox maps, real-time occupancy, and recommendation logic.',
      },
    ],
    caseStudies: [
      { title: 'Third Place', href: '/work/third-place', note: 'Vibe-based discovery platform for remote workers' },
    ],
  },
  {
    slug: 'automation',
    name: 'Business Automation',
    tagline: 'Manual back-office work, engineered away.',
    heroTitle: 'Business process automation',
    metaTitle: 'Business Process Automation Services | MAK Software Solutions',
    metaDescription:
      'Business automation services: workflow engineering, system integration, and AI agents that eliminate manual back-office work - data entry, reporting, follow-ups, and reconciliation.',
    intro:
      'Every business runs on invisible manual work: copying data between systems, chasing approvals, assembling the same weekly report. We engineer that work away with integrations, workflow systems, and AI agents - so headcount goes to judgment, not clerical repetition.',
    problem:
      'The work is death by a thousand cuts: 20 minutes here re-keying an invoice, an hour there building the Monday report. It never justifies a big software project individually, so it compounds for years. Meanwhile "no-code" automations pile up into a fragile tangle nobody dares touch.',
    approach:
      'We audit where hours actually go, then engineer durable automations: proper API integrations over screen-scraping, idempotent workflows that survive retries, logging you can audit, and AI agents for the steps that need reading and judgment. Built as maintained software, not a Zapier junk drawer.',
    deliverables: [
      { title: 'System integrations', desc: 'Your tools talking to each other properly - accounting, CRM, inventory, messaging.' },
      { title: 'Workflow automation', desc: 'Approval chains, document generation, and scheduled jobs with full audit trails.' },
      { title: 'AI-powered steps', desc: 'Agents that read documents, draft responses, and classify work - with human sign-off gates.' },
      { title: 'Automated reporting', desc: 'The reports leadership reads, generated and delivered without anyone assembling them.' },
      { title: 'Legacy bridges', desc: 'Automation around systems that cannot change - including the ones with no API.' },
    ],
    techStack: ['TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Claude', 'OpenAI', 'WhatsApp Business API'],
    faqs: [
      {
        q: 'How do you decide what to automate first?',
        a: 'We audit where hours actually go and rank by (time saved × error cost) ÷ build effort. The first automation ships within weeks and pays for the audit; the roadmap orders the rest.',
      },
      {
        q: 'What is the difference between this and hiring a Zapier consultant?',
        a: 'No-code tools are fine for simple triggers. We build automation as software: version-controlled, tested, logged, and able to handle logic no-code cannot - which is what keeps working two years later.',
      },
      {
        q: 'Where does AI fit into automation?',
        a: 'AI handles steps that need reading and judgment - parsing messy invoices, drafting replies, routing requests. We built MAK OS, an agent pipeline that automated an entire outreach operation from 20 manual hours a week to near zero.',
      },
    ],
    caseStudies: [
      { title: 'MAK OS', href: '/work/mak-os', note: 'From 20 hours/week manual outreach to autonomous' },
    ],
  },
  {
    slug: 'saas',
    name: 'SaaS Development',
    tagline: 'Multi-tenant platforms from architecture to launch.',
    heroTitle: 'SaaS platform development',
    metaTitle: 'SaaS Development Company - Multi-Tenant Platforms | MAK Software Solutions',
    metaDescription:
      'SaaS platform development: multi-tenant architecture, auth, billing, and infrastructure engineered for scale from day one. From founder idea to launched product.',
    intro:
      'We take SaaS products from architecture to launch: multi-tenancy done right, auth and billing that never become rewrites, and infrastructure that scales past your first thousand customers without a panic migration.',
    problem:
      'Most SaaS failures are architectural debts coming due: single-tenant shortcuts that break at customer ten, billing bolted on after launch, auth rebuilt three times. The rewrites arrive exactly when the product finds traction - the worst possible moment.',
    approach:
      'We architect the boring parts correctly the first time. Our own 17-repository shared SaaS ecosystem - auth, billing, tenancy, deployment - means new products start from proven infrastructure, not blank files. Your differentiating features get the engineering time; the plumbing is already load-tested.',
    deliverables: [
      { title: 'Multi-tenant architecture', desc: 'Tenant isolation, per-tenant data controls, and clean upgrade paths.' },
      { title: 'Auth & permissions', desc: 'SSO-ready authentication, roles, and API keys done once, correctly.' },
      { title: 'Billing & subscriptions', desc: 'Plans, trials, metering, and dunning wired to Stripe/Razorpay from day one.' },
      { title: 'Admin & operations', desc: 'The internal tools you need to run the business: support views, feature flags, usage analytics.' },
      { title: 'Launch infrastructure', desc: 'CI/CD, monitoring, and scaling architecture that survives your launch spike.' },
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Stripe'],
    faqs: [
      {
        q: 'How fast can a SaaS MVP launch?',
        a: 'On our shared platform architecture, 6–10 weeks to a launched product with auth, billing, and tenancy production-ready - because that layer is reused, not rebuilt. Time goes to your differentiating features.',
      },
      {
        q: 'What does "multi-tenant done right" actually mean?',
        a: 'Tenant isolation at the data layer (not just a column filter), per-tenant configuration, cross-tenant analytics for you, and the ability to move a big customer to dedicated infrastructure later without a rewrite.',
      },
      {
        q: 'Do you continue after launch?',
        a: 'Yes - most SaaS clients keep us as their engineering partner post-launch for features, scaling, and operations. The architecture phase is designed for that long arc.',
      },
    ],
    caseStudies: [
      { title: 'SaaS Ecosystem', href: '/work/saas-ecosystem', note: '17-repository shared architecture for rapid launches' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
