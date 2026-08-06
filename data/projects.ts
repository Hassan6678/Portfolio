/**
 * Portfolio project data
 * To add a project: copy an entry, increment id, add image to public/images/projects/
 */

export type ProjectCategory =
  | 'enterprise'
  | 'nlp'
  | 'computer-vision'
  | 'freelance'
  | 'research'

export type ProjectKind = 'commercial' | 'research'

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: number
  kind: ProjectKind
  category: ProjectCategory
  company: string
  companyColor: string
  title: string
  subtitle?: string
  description: string
  image: string
  tags: string[]
  metrics?: ProjectMetric[]
  github: string | null
  live: string | null
  placeholderGradient: string
  featured?: boolean
  sessionId?: string
  upworkRating?: string
  earned?: string
}

export const projects: Project[] = [
  {
    id: 0,
    kind: 'commercial',
    category: 'enterprise',
    company: 'AiSight.ai',
    companyColor: '#5a7a1a',
    featured: true,
    sessionId: 'rtm-pipeline',
    title: 'RTM Analytics Platform',
    subtitle: 'Multi-Tenant FMCG Intelligence Platform',
    description:
      'Architected and deployed a production-grade, multi-tenant analytics platform serving field operations across 5 FMCG markets (PAK, IND, BGD, LKA, NPL). Built on FastAPI + HTMX with 20+ geospatial tools — HDBSCAN, Voronoi tessellation, BFS region-growing, LandScan raster analysis — backed by async jobs on SQLite WAL-mode for reliability under concurrent enterprise load.',
    image: '/images/projects/rtm-platform.png',
    tags: [
      'FastAPI',
      'HTMX',
      'Python',
      'HDBSCAN',
      'Voronoi Tessellation',
      'Geospatial AI',
      'SQLite WAL',
      'AWS S3',
      'Docker',
      'Multi-Tenant',
    ],
    metrics: [
      { value: '20+', label: 'Geospatial Tools' },
      { value: '5', label: 'FMCG Markets' },
      { value: 'Daily', label: 'Production Usage' },
      { value: '142+', label: 'Jobs Processed' },
    ],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #e8f0d8 0%, #d4e4c4 40%, #c8d9e8 100%)',
  },
  {
    id: 1,
    kind: 'commercial',
    category: 'enterprise',
    company: 'BAT UK',
    companyColor: '#5a7a1a',
    sessionId: 'territory-plan',
    title: 'Territory Planning & Route Optimization',
    description:
      'Built a geospatial territory planning system for BAT UK to support retail field operations at scale. The solution combined weighted clustering, route logic, and visit-frequency constraints to produce practical territory maps and more consistent field coverage. 131 territories · 12-week quarter scheduling · 8–14 daily call constraints · multi-constraint route optimization across 506+ outlet locations.',
    image: '/images/projects/bat-territory.png',
    tags: [
      'Spatial Clustering',
      'Weighted K-Means',
      'Route Optimization',
      'Google Maps API',
      'Python',
    ],
    metrics: [
      { value: '131', label: 'Territories' },
      { value: '506+', label: 'Outlets' },
      { value: '12wk', label: 'Quarter Cycles' },
      { value: '8–14', label: 'Daily Calls' },
    ],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #e4ecd8 0%, #d0dbc4 100%)',
  },
  {
    id: 2,
    kind: 'commercial',
    category: 'enterprise',
    company: 'EBM',
    companyColor: '#2a6f97',
    title: 'Retail Sales Intelligence Platform',
    description:
      'Developed a sales intelligence platform that combined forecasting, spatial analysis, and computer vision signals to support regional planning. It helped business teams identify market opportunities, monitor changing demand patterns, and make better territory-level decisions.',
    image: '/images/projects/ebm-dashboard.png',
    tags: [
      'Computer Vision',
      'Deep Learning',
      'Satellite Imagery',
      'TensorFlow',
      'Dashboard',
    ],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #d8e4f0 0%, #c4d4e4 100%)',
  },
  {
    id: 3,
    kind: 'commercial',
    category: 'nlp',
    company: 'Nielsen & UK Clients',
    companyColor: '#9b4d3a',
    title: 'LLM Analytics Assistant',
    description:
      'Designed and delivered an LLM-based analytics assistant for market data workflows used by Nielsen and UK clients. The product translated natural language questions into usable business insight, reducing reliance on manual reporting and improving access to analysis. Delivered to 3 enterprise clients · team of 3 engineers · production deployed.',
    image: '/images/projects/nielsen-chatbot.png',
    tags: ['LLM', 'NLP', 'Chatbot', 'Team Lead', 'Python'],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #f0e0d8 0%, #e4d0c8 100%)',
  },
  {
    id: 4,
    kind: 'commercial',
    category: 'enterprise',
    company: 'SurveyAuto',
    companyColor: '#2d6a4f',
    title: 'Territory Definition & Forecasting System',
    description:
      'Built a semi-supervised geospatial system for distributor territory design across dense retail networks. It combined operational route constraints with multi-level forecasting so planning teams could align coverage decisions with expected demand. Multi-level forecasting at product, brand, company and geospatial granularity across urban retail networks.',
    image: '/images/projects/surveyauto-forecasting.png',
    tags: ['Geospatial ML', 'Sales Forecasting', 'Semi-Supervised', 'Clustering'],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #d8ebe0 0%, #c4ddd0 100%)',
  },
  {
    id: 5,
    kind: 'commercial',
    category: 'enterprise',
    company: 'AiSight.ai',
    companyColor: '#5a7a1a',
    title: 'Retail Footfall Intelligence Engine',
    description:
      'Built a shop-level intelligence engine using scraped and geospatial signals such as footfall, building context, and population patterns. The resulting models supported market-share analysis, outlet prioritization, and sales planning for FMCG-focused clients.',
    image: '/images/projects/aisight-footfall-map.png',
    tags: [
      'Web Scraping',
      'Feature Engineering',
      'Explainable AI',
      'Geospatial Analysis',
      'Python',
      'Scrapy',
    ],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #e8ecd8 0%, #d8dcc4 100%)',
  },
  {
    id: 6,
    kind: 'commercial',
    category: 'enterprise',
    company: 'AiSight.ai',
    companyColor: '#5a7a1a',
    title: 'Apache Airflow ETL Platform',
    description:
      'Designed and deployed production ETL pipelines in Apache Airflow to move data from multiple sources into a reliable analytics environment. The platform improved data consistency, reduced manual handling, and gave client-facing products a stronger operational backbone.',
    image: '/images/projects/aisight-etl-airflow.png',
    tags: [
      'Apache Airflow',
      'ETL',
      'Parallel Computing',
      'Data Engineering',
      'Python',
      'Pipeline Automation',
    ],
    github: null,
    live: null,
    placeholderGradient:
      'linear-gradient(135deg, #ece8d8 0%, #dcd8c4 100%)',
  },
  {
    id: 101,
    kind: 'research',
    category: 'research',
    company: 'Upwork Client',
    companyColor: '#2a6f97',
    title: 'Large-Scale Time Series Classification (Hydra + MultiRocket)',
    description:
      'Implemented and optimized state-of-the-art time series classification pipelines using the ROCKET family, including Hydra and MultiRocket, for large benchmark datasets such as UCR109. The work focused on improving classification accuracy while maintaining computational efficiency through feature transformations, kernel-level optimizations, and hybrid modeling strategies.',
    image: '/images/projects/hydra-multirocket.png',
    tags: [
      'Python',
      'Hydra',
      'MultiRocket',
      'Time Series Classification',
      'NumPy',
      'Scikit-learn',
    ],
    github: null,
    live: null,
    upworkRating: '5★',
    placeholderGradient:
      'linear-gradient(135deg, #d8e4f0 0%, #c8d4e4 100%)',
  },
  {
    id: 102,
    kind: 'research',
    category: 'research',
    company: 'Upwork Client',
    companyColor: '#5c4a8a',
    title: 'Self-Supervised Mispronunciation Detection (wav2vec2 + CTC-GOP)',
    description:
      'Developed a speech AI pipeline for phoneme-level mispronunciation detection using wav2vec2 and CTC-based Goodness of Pronunciation (GOP). Built decoding, alignment, threshold sweep, and evaluation workflows to detect pronunciation errors using metrics such as PER, FAR, FRR, and DER in a research-focused evaluation setup.',
    image: '/images/projects/wav2vec2-mdd.png',
    tags: [
      'wav2vec2',
      'Speech AI',
      'CTC-GOP',
      'PyTorch',
      'Hugging Face',
      'Evaluation Pipelines',
    ],
    github: null,
    live: null,
    upworkRating: '5★',
    placeholderGradient:
      'linear-gradient(135deg, #e4dcf0 0%, #d4cce4 100%)',
  },
  {
    id: 103,
    kind: 'research',
    category: 'research',
    company: 'Upwork Client',
    companyColor: '#2a6f97',
    title: 'AI-Assisted Music Composition Engine',
    description:
      'Built an experimental AI-assisted composition workflow for music generation and arrangement support. Explored prompt-guided composition, structured musical outputs, and model-assisted creative iteration for composition and editing tasks.',
    image: '/images/projects/music-composition-engine.png',
    tags: [
      'Generative AI',
      'Music AI',
      'Composition',
      'PyTorch',
      'Sequence Modeling',
    ],
    github: null,
    live: null,
    upworkRating: '5★',
    placeholderGradient:
      'linear-gradient(135deg, #d8e0ec 0%, #c8d4e4 100%)',
  },
]

/** @deprecated Prefer filtering projects by kind === 'research' */
export const researchProjects = projects.filter((p) => p.kind === 'research')

export const commercialProjects = projects.filter((p) => p.kind === 'commercial')
