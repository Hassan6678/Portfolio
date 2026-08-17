export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  short?: string
}

export interface CredibilityItem {
  label: string
  detail?: string
}

export interface ImpactMetric {
  value: string
  label: string
  detail: string
}

export interface ExpertiseItem {
  title: string
  description: string
}

export interface ProfileLink {
  label: string
  value: string
  href: string
}

export const profile = {
  name: 'Hassan Raza',
  shortName: 'Hassan',
  mark: 'HR',
  role: 'Machine Learning Engineer & Data Scientist',
  location: 'Lahore, Pakistan',
  email: 'hassanrazacs@hotmail.com',
  cvHref: '/cv.pdf',
  availability: 'Available for projects',
} as const

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Hassan6678', short: 'GitHub' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs', short: 'LinkedIn' },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/hassanraza535',
    short: 'Upwork',
  },
]

export const hero = {
  eyebrow: 'ML systems · geospatial · NLP',
  headline: {
    lead: 'ML systems built to move',
    outlined: 'operations.',
  },
  lead: 'Senior machine learning engineer building geospatial, forecasting, and language systems for enterprise teams.',
  support:
    'Territory engines, FMCG analytics platforms, and NLP tools used by enterprise teams — not demos.',
  primaryCta: { label: "Let's work together", href: '#contact' },
  secondaryCta: { label: 'Download CV', href: '/cv.pdf' },
  badges: ['100% Job Success', 'Upwork Top Rated'],
  portrait: {
    src: '/images/hassan-portrait.png',
    alt: 'Hassan Raza',
  },
} as const

export const credibility: CredibilityItem[] = [
  { label: 'BAT UK', detail: 'Territory planning' },
  { label: 'Nielsen', detail: 'LLM analytics' },
  { label: 'AiSight.ai', detail: 'RTM platform' },
  { label: 'EBM', detail: 'Sales intelligence' },
  { label: 'SurveyAuto', detail: 'Forecasting' },
  { label: 'Upwork', detail: 'Top Rated · 100%' },
]

export const impactMetrics: ImpactMetric[] = [
  {
    value: '5',
    label: 'FMCG markets',
    detail: 'Live RTM analytics across PAK, IND, BGD, LKA, and NPL.',
  },
  {
    value: '131',
    label: 'Territories planned',
    detail: 'BAT UK field-force coverage with multi-constraint route logic.',
  },
  {
    value: '55k+',
    label: 'Outlets scored',
    detail: 'Retail prioritization models for global enterprise clients.',
  },
  {
    value: '100%',
    label: 'Job success',
    detail: 'Upwork Top Rated delivery across forecasting, NLP, and ML research.',
  },
]

export const expertiseIntro = {
  label: 'Expertise',
  description:
    'Production ML across geospatial systems, language models, computer vision, and reliable data infrastructure.',
} as const

export const expertise: ExpertiseItem[] = [
  {
    title: 'Machine Learning',
    description:
      'Production pipelines from raw data to deployed models — predictive modelling, classification, ensembles, and forecasting tuned for business constraints.',
  },
  {
    title: 'Geospatial AI',
    description:
      'Territory clustering, route optimization, Voronoi and HDBSCAN tooling, and location intelligence engineered for operational feasibility.',
  },
  {
    title: 'NLP & LLMs',
    description:
      'Analytics assistants, text classification, and natural-language workflows that turn unstructured language into queryable business insight.',
  },
  {
    title: 'Computer Vision',
    description:
      'Satellite imagery analysis, population estimation, and visual signals that feed retail and market opportunity models.',
  },
  {
    title: 'Data Engineering',
    description:
      'Apache Airflow ETL, multi-tenant FastAPI services, and pipelines that keep client-facing analytics reliable under load.',
  },
]

export const aboutContent = {
  label: 'About',
  headline: {
    lead: 'Background that',
    emphasis: 'compounds.',
  },
  paragraphs: [
    "I'm a Machine Learning Engineer and Data Scientist based in Pakistan, building data-driven systems for international clients across retail, FMCG, and analytics products.",
    'My work turns complex datasets into practical tools — forecasting, geospatial modeling, NLP systems, and production ETL. At AiSight.ai I ship analytics platforms that help teams understand market share, route performance, and operational efficiency.',
    'I care about systems that connect machine learning with business value: technically strong, and useful in real decision-making environments.',
  ],
  scopeLabel: 'Worked across projects involving',
  scope:
    'Retail Intelligence, Market Analytics, Territory Planning, Forecasting Systems, NLP Tools, and Production Data Pipelines.',
  basis:
    'Based in Pakistan. Collaborating with international clients across retail, FMCG, research contracts, and analytics products.',
} as const

export const contactContent = {
  label: 'Contact',
  headline: {
    lead: 'Have a hard data problem?',
    emphasis: " Let's make it operational.",
  },
  description:
    "Open to freelance projects, collaborations, and full-time roles in machine learning, geospatial intelligence, forecasting, and AI-driven products.",
  primaryCta: {
    label: 'Email Hassan',
    href: 'mailto:hassanrazacs@hotmail.com?subject=Project%20inquiry',
  },
  links: [
    {
      label: 'Email',
      value: 'hassanrazacs@hotmail.com',
      href: 'mailto:hassanrazacs@hotmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hassan-raza-cs',
      href: 'https://linkedin.com/in/hassan-raza-cs',
    },
    {
      label: 'GitHub',
      value: 'github.com/Hassan6678',
      href: 'https://github.com/Hassan6678',
    },
    {
      label: 'Upwork',
      value: 'upwork.com/freelancers/hassanraza535',
      href: 'https://www.upwork.com/freelancers/hassanraza535',
    },
  ] as ProfileLink[],
} as const

export const footerContent = {
  blurb:
    'Machine Learning Engineer and Data Scientist building practical systems for retail intelligence, forecasting, geospatial analytics, and AI-enabled decision support.',
  copyright: '© 2026 Hassan Raza',
} as const
