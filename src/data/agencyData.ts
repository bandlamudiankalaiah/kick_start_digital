import { ServiceItem, CaseStudy, Testimonial, FaqItem, ComparisonRow } from '../types';

export const AGENCY_INFO = {
  name: 'Kickstart Digital',
  location: 'Auckland & Christchurch, New Zealand',
  phone: '+64 9 889 2341',
  email: 'hello@kickstartdigital.co.nz',
  contacts: {
    jana: 'jana@kickstartdigital.co.nz',
    lakshmi: 'lakshmi@kickstartdigital.co.nz',
  },
  stats: {
    totalRevenueGenerated: '$48.5M+',
    averageLeadIncrease: '+312%',
    activeClients: '120+',
    googleRating: '4.9/5.0',
    reviewCount: '64',
    averageRoas: '4.3x',
    clientRetention: '94%',
  },
  accreditations: [
    'Google Premier Partner 2026',
    'Meta Certified Agency',
    'Official Shopify Partner',
    'WordPress VIP & WooCommerce Specialist',
    'HubSpot Certified Solutions Partner',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wordpress-custom-dev',
    title: 'Custom WordPress & Web Development',
    tagline: 'Lightning-fast, high-converting digital storefronts built to scale.',
    icon: 'Code2',
    badge: 'Core Specialty',
    description:
      'We engineer bespoke WordPress websites tailored specifically for speed, conversion rate optimization, and intuitive content management. No bloated multi-purpose themes—just clean, custom blocks, sub-second load times, and structured SEO architecture.',
    deliverables: [
      'Custom Gutenberg Block development & ACF Pro architecture',
      'Ultra-fast performance (<1.2s LCP, 95+ Core Web Vitals score)',
      'Conversion-optimized layout, sticky CTAs, and frictionless forms',
      'Seamless WooCommerce / CRM / ERP / API integrations',
      'Enterprise-grade security hardening & multi-layer caching',
    ],
    metricsHighlight: '+185% Average Form Conversion',
    idealFor: 'Businesses needing a high-performance website that actively generates qualified leads and sales.',
    startingFrom: 'From $3,500 NZD',
    caseStudySnippet: {
      client: 'Apex Commercial NZ',
      result: '340% increase in qualified inquiries within 90 days of launch.',
    },
  },
  {
    id: 'google-ads-ppc',
    title: 'Google Ads & Paid Search (PPC)',
    tagline: 'Capture high-intent buyers at the exact moment they search.',
    icon: 'Target',
    badge: 'High ROI',
    description:
      'Laser-targeted Search, Performance Max, Shopping, and Display campaigns designed to maximize Return on Ad Spend (ROAS) and eliminate wasted ad budget through ruthless negative keyword management and custom landing page funnels.',
    deliverables: [
      'Granular intent-based search structure (SKAG / Single-Theme Ad Groups)',
      'Continuous A/B copy testing and landing page alignment',
      'Server-side Google Tag Manager & offline conversion tracking',
      'Shopping feed optimization for high-margin e-commerce items',
      'Real-time automated live client performance dashboard',
    ],
    metricsHighlight: '4.4x Average ROAS',
    idealFor: 'E-commerce and B2B services wanting predictable, scalable revenue on demand.',
    startingFrom: 'From $1,200 NZD / mo',
    caseStudySnippet: {
      client: 'KiwiEco Store',
      result: '$140k monthly revenue milestone achieved at 5.2x ROAS.',
    },
  },
  {
    id: 'seo-organic-growth',
    title: 'Search Engine Optimisation (SEO)',
    tagline: 'Dominate organic search rankings and build compounding free traffic.',
    icon: 'Search',
    badge: 'Long-term Moat',
    description:
      'A holistic, white-hat SEO methodology combining technical infrastructure audits, keyword intent clustering, high-authority New Zealand link building, and conversion-focused content strategy to capture the #1 position on Google.',
    deliverables: [
      'Comprehensive technical SEO & crawl budget optimization',
      'High-intent commercial keyword mapping & competitive gap analysis',
      'Schema markup, JSON-LD structured data, and local NZ citation building',
      'High-value content production engineered for search and user engagement',
      'Core Web Vitals remediation and mobile indexation tuning',
    ],
    metricsHighlight: '+260% Organic Revenue Growth',
    idealFor: 'Brands looking for durable, high-volume inbound leads without relying purely on ad spend.',
    startingFrom: 'From $1,500 NZD / mo',
    caseStudySnippet: {
      client: 'SouthIsland Adventures',
      result: '#1 ranking for 38 high-volume search terms in 6 months.',
    },
  },
  {
    id: 'meta-social-ads',
    title: 'Meta & Social Paid Advertising',
    tagline: 'Stop the scroll and turn passive viewers into eager buyers.',
    icon: 'Megaphone',
    badge: 'Brand Scaling',
    description:
      'High-performing paid social funnels on Facebook, Instagram, and TikTok. We craft compelling visual hooks, UGC-style creative scripts, and dynamic retargeting audiences that nurture prospects from discovery to checkout.',
    deliverables: [
      'Direct-response creative development (video hooks & static carousels)',
      'Deep audience segmentation & lookalike model training',
      'Conversions API (CAPI) setup for iOS 14+ tracking resilience',
      'Full-funnel remarketing with personalized objection-handling ads',
      'Weekly creative iteration and fatigue prevention',
    ],
    metricsHighlight: '3.9x Blended Social ROAS',
    idealFor: 'D2C e-commerce brands and lifestyle services seeking hyper-scaled audience reach.',
    startingFrom: 'From $1,200 NZD / mo',
    caseStudySnippet: {
      client: 'PureNZ Organics',
      result: 'Lowered customer acquisition cost (CAC) by 41% across Meta.',
    },
  },
  {
    id: 'cro-analytics',
    title: 'Conversion Rate Optimisation (CRO)',
    tagline: 'Extract maximum revenue from your existing website traffic.',
    icon: 'TrendingUp',
    badge: 'Instant Lift',
    description:
      'Double your leads without spending an extra dollar on traffic. We conduct qualitative heatmapping, user session recordings, frictionless funnel redesigns, and scientific A/B split tests to remove every barrier between your visitor and the buy button.',
    deliverables: [
      'Full website heuristic evaluation & drop-off audit',
      'Hotjar heatmap, scroll tracking, and session recording analysis',
      'Checkout / form friction reduction and mobile tap-target redesign',
      'A/B split testing with statistical significance verification',
      'Micro-copy enhancement and social proof placement tuning',
    ],
    metricsHighlight: '+48% Conversion Lift',
    idealFor: 'Websites with solid traffic that are suffering from sluggish checkout or form abandonment.',
    startingFrom: 'From $1,800 NZD audit',
    caseStudySnippet: {
      client: 'Auckland Dental Hub',
      result: 'Direct online bookings jumped from 2.1% to 5.4% of total visitors.',
    },
  },
  {
    id: 'managed-support-hosting',
    title: 'High-Speed WordPress Hosting & Care',
    tagline: 'Enterprise speed, ironclad security, and dedicated NZ developer support.',
    icon: 'ShieldCheck',
    badge: 'Peace of Mind',
    description:
      'Never worry about broken plugins, malware, or slow page loads again. We provide proactive WordPress updates in staging environments, 24/7 uptime monitoring, daily off-site cloud backups, and dedicated monthly developer hours for ongoing improvements.',
    deliverables: [
      'Cloudflare Enterprise CDN & edge caching configuration',
      'Staging-first plugin & WordPress core updates with visual regression tests',
      '24/7 security monitoring, malware scanning & real-time remediation',
      'Daily off-site automated backups (Amazon S3 / Google Cloud)',
      'Monthly developer hours included for content and design updates',
    ],
    metricsHighlight: '99.99% Uptime Guarantee',
    idealFor: 'Businesses whose website is mission-critical to daily revenue generation.',
    startingFrom: 'From $190 NZD / mo',
    caseStudySnippet: {
      client: 'Metro Logistics NZ',
      result: 'Zero downtime in 24 months, average response time reduced to 380ms.',
    },
  },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Contract Terms',
    kickstart: 'Month-to-month rolling agreements based on performance',
    kickstartPositive: true,
    traditional: 'Strict 12-month lock-in contracts with hefty exit fees',
    traditionalPositive: false,
  },
  {
    feature: 'Core Focus',
    kickstart: 'Direct bottom-line revenue, qualified leads & verifiable ROI',
    kickstartPositive: true,
    traditional: 'Vanity metrics (impressions, clicks, rankings with 0 sales)',
    traditionalPositive: false,
  },
  {
    feature: 'Team Working on Your Account',
    kickstart: 'Senior dedicated New Zealand strategists & developers',
    kickstartPositive: true,
    traditional: 'Pitched by senior directors, then outsourced to junior interns',
    traditionalPositive: false,
  },
  {
    feature: 'Website Code Quality',
    kickstart: 'Clean custom WordPress/React architecture, Core Web Vitals 95+',
    kickstartPositive: true,
    traditional: 'Heavy bloated themes stuffed with 45+ unmaintained plugins',
    traditionalPositive: false,
  },
  {
    feature: 'Transparency & Reporting',
    kickstart: '24/7 real-time live BI dashboard + weekly Loom video briefings',
    kickstartPositive: true,
    traditional: 'Confusing 20-page monthly PDF reports sent weeks late',
    traditionalPositive: false,
  },
  {
    feature: 'Asset Ownership',
    kickstart: 'You own 100% of your code, ad accounts, pixels, and creative assets',
    kickstartPositive: true,
    traditional: 'Agency holds ad accounts or website licenses hostage',
    traditionalPositive: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Deep Discovery & 360° Audit',
    timeframe: 'Days 1 – 3',
    description:
      'We dive under the hood of your digital presence: analyzing Google Analytics, ad spend efficiency, Core Web Vitals, competitor gaps, and conversion bottlenecks to build an evidence-backed roadmap.',
    deliverables: ['Conversion leak audit', 'Competitor keyword matrix', 'UX friction teardown', 'Growth action plan'],
  },
  {
    step: '02',
    title: 'High-Conversion Architecture & Copy',
    timeframe: 'Days 4 – 10',
    description:
      'We design high-converting wireframes and write direct-response copy that speaks directly to your ideal customer’s pain points, positioning your offer as the undeniable best choice in the market.',
    deliverables: ['Custom interactive wireframes', 'Direct-response sales copy', 'Visual moodboard & brand system', 'Mobile-first layout design'],
  },
  {
    step: '03',
    title: 'Bespoke Development & Performance Rig',
    timeframe: 'Days 11 – 20',
    description:
      'We build your bespoke WordPress website with zero bloat. Custom blocks, sub-second server response, conversion-optimized forms, and rock-solid tracking pixels connected cleanly.',
    deliverables: ['Custom Gutenberg / React blocks', 'Google Tag Manager server-side tracking', 'Core Web Vitals 95+ score', 'Cross-browser QA testing'],
  },
  {
    step: '04',
    title: 'Launch, Measure & Ongoing Scale',
    timeframe: 'Day 21 onwards',
    description:
      'We launch seamlessly with zero downtime, switch on targeted traffic channels, and continuously A/B test headlines, forms, and ad creatives to compound your return on investment month over month.',
    deliverables: ['Zero-downtime deployment', 'Continuous CRO A/B testing', 'Live client dashboard access', 'Fortnightly strategic review calls'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-commercial',
    client: 'Apex Commercial NZ',
    industry: 'Commercial Construction & Fitouts',
    logoText: 'APEX',
    heroMetric: '+340%',
    heroMetricLabel: 'Increase in Qualified Enquiries',
    secondaryMetrics: [
      { label: 'Cost Per Lead', value: '-48%' },
      { label: 'Page Speed Index', value: '0.8s' },
      { label: 'Pipeline Value Added', value: '$2.8M' },
    ],
    summary:
      'Complete WordPress redesign and Google Search restructuring that transformed a slow legacy website into an automated high-value lead acquisition machine.',
    challenge:
      'Apex had a 6-year-old WordPress site using a bloated theme that loaded in 6.4 seconds. Lead volume had plateaued, and their Google Ads spend was bleeding money on non-commercial search terms.',
    strategy: [
      'Rebuilt the entire site on a lightweight custom Gutenberg architecture with sub-second LCP.',
      'Created high-converting commercial project portfolio pages with clear multi-step quote request modals.',
      'Overhauled Google Ads to focus strictly on high-intent commercial fitout queries with negative keyword filters.',
    ],
    results: [
      'Organic traffic jumped by 210% within 4 months.',
      'Average monthly quote requests surged from 7 to 31 qualified leads per month.',
      'Won two multi-million dollar fitout contracts directly attributed to the new website in Q1.',
    ],
    testimonial: {
      quote:
        'Kickstart Digital didn’t just give us a beautiful website—they gave us a predictable pipeline of high-margin corporate clients. Best investment we have made.',
      author: 'Marcus Vance',
      role: 'Managing Director, Apex Commercial NZ',
    },
    tags: ['Custom WordPress', 'Google Ads', 'Technical SEO', 'Lead Generation'],
  },
  {
    id: 'kiwi-eco-store',
    client: 'KiwiEco Store',
    industry: 'Sustainable E-Commerce',
    logoText: 'KIWI ECO',
    heroMetric: '5.2x',
    heroMetricLabel: 'Blended Return on Ad Spend',
    secondaryMetrics: [
      { label: 'Monthly Revenue', value: '$140k+' },
      { label: 'Checkout Conversion', value: '+62%' },
      { label: 'Customer Retention', value: '38%' },
    ],
    summary:
      'WooCommerce speed overhaul combined with full-funnel Meta and Google Shopping campaigns scaled monthly online sales from $28k to $140k+.',
    challenge:
      'The store was experiencing an 82% cart abandonment rate on mobile and relying solely on word-of-mouth with no scalable paid acquisition system.',
    strategy: [
      'Implemented 1-click Apple Pay / Google Pay express checkout and streamlined mobile cart drawer.',
      'Launched high-ROAS Performance Max Google Shopping campaigns with custom product feed titles.',
      'Deployed dynamic Meta retargeting video ads answering common product durability questions.',
    ],
    results: [
      'Mobile checkout conversion rate rose from 1.8% to 3.9%.',
      'Achieved 5.2x ROAS across all paid channels over a sustained 12-month period.',
      'Lowered customer acquisition cost by 34% through automated email flows.',
    ],
    testimonial: {
      quote:
        'The team at Kickstart are absolute wizards at e-commerce conversion. Their attention to detail on mobile UX completely unlocked our revenue ceiling.',
      author: 'Sarah Jenkins',
      role: 'Founder & Head of Product, KiwiEco',
    },
    tags: ['WooCommerce', 'Google Shopping', 'Meta Ads', 'E-Commerce CRO'],
  },
  {
    id: 'auckland-dental-hub',
    client: 'Auckland Dental Hub',
    industry: 'Healthcare & Specialist Services',
    logoText: 'DENTAL HUB',
    heroMetric: '+215%',
    heroMetricLabel: 'New Patient Bookings',
    secondaryMetrics: [
      { label: 'Local Pack Ranking', value: '#1 in City' },
      { label: 'Mobile Booking Time', value: '<45s' },
      { label: 'Google Review Score', value: '4.9★ (380+)' },
    ],
    summary:
      'Local SEO dominance and frictionless mobile appointment booking system that filled their 4 specialist chairs to 100% booking capacity.',
    challenge:
      'Struggling to stand out against corporate dental chains, with low local search visibility and a cumbersome 7-step booking form.',
    strategy: [
      'Engineered an instant 2-step online appointment booking workflow connected directly to their PMS.',
      'Optimized Google Business Profile and built 80+ geo-targeted local citations across Auckland.',
      'Created high-ranking treatment landing pages for Invisalign, Dental Implants, and Emergency Care.',
    ],
    results: [
      'Ranked in the top 3 Google Maps pack for all key dental search terms across Auckland Central.',
      'New patient acquisition doubled within 90 days of the new site going live.',
      'Patient booking drop-off rate decreased from 68% down to 14%.',
    ],
    testimonial: {
      quote:
        'Our phones and online calendar have not stopped ringing since the new site and local SEO campaigns went live. We had to hire another associate dentist!',
      author: 'Dr. Liam Patterson',
      role: 'Clinical Director, Auckland Dental Hub',
    },
    tags: ['Local SEO', 'Custom Booking Flow', 'WordPress', 'Conversion Design'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'David Harrison',
    role: 'Chief Executive Officer',
    company: 'Vanguard Logistics NZ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '3 weeks ago',
    content:
      'Working with Kickstart Digital was an absolute game changer. They completely redesigned our website from scratch on custom WordPress. Our speed scores went from 38 to 98 on Google PageSpeed, and corporate quote requests doubled in the first month alone.',
    serviceUsed: 'Custom WordPress & SEO',
    verified: true,
  },
  {
    id: 't-2',
    author: 'Elena Rostova',
    role: 'Marketing Director',
    company: 'Zealandia Health Supplements',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '1 month ago',
    content:
      'Unlike other agencies who talk about impressions and clicks, Kickstart focused 100% on ROAS and actual bottom-line revenue. Their Google Ads and Meta campaigns generated over $240,000 in new sales for us this quarter at a 4.8x ROAS.',
    serviceUsed: 'Google Ads & Meta Paid Media',
    verified: true,
  },
  {
    id: 't-3',
    author: 'Callum MacLeod',
    role: 'Founder & Managing Partner',
    company: 'MacLeod & Co. Advisory',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '2 months ago',
    content:
      'Their level of communication and commercial thinking is unmatched. The live dashboard gave us 24/7 visibility into every dollar spent and every lead generated. Jana and Lakshmi’s team exceeded our highest expectations.',
    serviceUsed: 'Full Funnel Digital Growth',
    verified: true,
  },
  {
    id: 't-4',
    author: 'Sophie Tremaine',
    role: 'Operations Director',
    company: 'Kowhai Solar Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '3 months ago',
    content:
      'The multi-step solar quote calculator they built for our website increased our form completions by 140%. Visitors can get an instant estimate, and our sales team receives pre-qualified, warm leads ready to buy.',
    serviceUsed: 'Custom Web Dev & CRO',
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does Kickstart Digital differ from other digital marketing agencies?',
    answer:
      'Most agencies lock you into 12-month retainers, outsource your work to junior interns, and report on vanity metrics like clicks and impressions. Kickstart Digital is built differently: we operate on rolling month-to-month agreements, staff every account with senior New Zealand specialists, and focus exclusively on revenue, qualified leads, and measurable ROAS.',
  },
  {
    id: 'faq-2',
    category: 'WordPress & Tech',
    question: 'Why do you specialize in custom WordPress rather than generic themes?',
    answer:
      'Off-the-shelf multipurpose themes and page builders like bloated visual builders often load 40+ unnecessary stylesheets and scripts, dragging down Core Web Vitals and killing mobile conversion rates. We build custom, lightweight Gutenberg and React-powered blocks that load in under 1 second, rank higher on Google, and give your team an effortless, intuitive editing experience.',
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'How quickly can we expect to see measurable results?',
    answer:
      'For Paid Ads (Google Ads & Meta), results and lead flow typically begin within the first 7 to 14 days of launch as campaigns optimize. For Custom Web Design & CRO, conversion improvements are immediate upon deployment. For Organic SEO, significant ranking and traffic growth compounds strongly within 60 to 120 days.',
  },
  {
    id: 'faq-4',
    category: 'Pricing & Terms',
    question: 'Do you require long-term lock-in contracts?',
    answer:
      'No. We believe client retention should be earned through performance, not legal handcuffs. Our ongoing marketing management is on transparent, rolling 30-day agreements. You stay with us because your campaigns are profitable, not because you are trapped.',
  },
  {
    id: 'faq-5',
    category: 'SEO & Ads',
    question: 'Who owns our website code, Google Ads account, and creative assets?',
    answer:
      'You do. You retain 100% legal ownership of your website codebase, domain, hosting, Google Ads account, Meta Pixel, tracking setups, and design assets. If you ever decide to part ways, everything remains completely yours.',
  },
  {
    id: 'faq-6',
    category: 'WordPress & Tech',
    question: 'Can you integrate our website with our CRM, booking software, or ERP?',
    answer:
      'Yes! We have extensive experience integrating custom WordPress and WooCommerce solutions with HubSpot, Salesforce, ActiveCampaign, Cliniko, Zoho, Xero, Stripe, Unleashed, and custom REST / GraphQL APIs.',
  },
  {
    id: 'faq-7',
    category: 'Pricing & Terms',
    question: 'What is the typical investment for a Kickstart Digital project?',
    answer:
      'Custom high-performance WordPress builds typically range between $3,500 and $12,000+ NZD depending on complexity and functionality. Monthly growth retainers (Paid Search, Social Ads, SEO & CRO) start from $1,200 NZD/month with clear, predictable deliverables.',
  },
];
