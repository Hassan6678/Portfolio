/**
 * Portfolio project data
 * To add a project: copy an entry, increment id, add image to public/images/projects/
 */

export type ProjectCategory = "enterprise" | "nlp" | "computer-vision" | "freelance" | "research"

export interface Project {
  id: number
  category: ProjectCategory
  company: string
  companyColor: string
  title: string
  description: string
  image: string
  tags: string[]
  github: string | null
  live: string | null
  placeholderGradient: string
  upworkRating?: string
  earned?: string
}

export const projects: Project[] = [
  {
    id: 1, category: "enterprise", company: "BAT UK", companyColor: "#e8ff47",
    title: "Territory Planning & Route Optimization",
    description: "Built a geospatial territory planning system for BAT UK to support retail field operations at scale. The solution combined weighted clustering, route logic, and visit-frequency constraints to produce practical territory maps and more consistent field coverage.",
    image: "/images/projects/bat-territory.png",
    tags: ["Spatial Clustering", "Weighted K-Means", "Route Optimization", "Google Maps API", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a2614 0%, #0f1a0a 100%)",
  },
  {
    id: 2, category: "enterprise", company: "EBM", companyColor: "#58a6ff",
    title: "Retail Sales Intelligence Platform",
    description: "Developed a sales intelligence platform that combined forecasting, spatial analysis, and computer vision signals to support regional planning. It helped business teams identify market opportunities, monitor changing demand patterns, and make better territory-level decisions.",
    image: "/images/projects/ebm-dashboard.png",
    tags: ["Computer Vision", "Deep Learning", "Satellite Imagery", "TensorFlow", "Dashboard"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1b2a 0%, #0a1520 100%)",
  },
  {
    id: 3, category: "nlp", company: "Nielsen & UK Clients", companyColor: "#ff7b72",
    title: "LLM Analytics Assistant",
    description: "Designed and delivered an LLM-based analytics assistant for market data workflows used by Nielsen and UK clients. The product translated natural language questions into usable business insight, reducing reliance on manual reporting and improving access to analysis.",
    image: "/images/projects/nielsen-chatbot.png",
    tags: ["LLM", "NLP", "Chatbot", "Team Lead", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #2a0d0d 0%, #1a0808 100%)",
  },
  {
    id: 4, category: "enterprise", company: "SurveyAuto", companyColor: "#3fb950",
    title: "Territory Definition & Forecasting System",
    description: "Built a semi-supervised geospatial system for distributor territory design across dense retail networks. It combined operational route constraints with multi-level forecasting so planning teams could align coverage decisions with expected demand.",
    image: "/images/projects/surveyauto-forecasting.png",
    tags: ["Geospatial ML", "Sales Forecasting", "Semi-Supervised", "Clustering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f10 0%, #081208 100%)",
  },
  {
    id: 5, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Retail Footfall Intelligence Engine",
    description: "Built a shop-level intelligence engine using scraped and geospatial signals such as footfall, building context, and population patterns. The resulting models supported market-share analysis, outlet prioritization, and sales planning for FMCG-focused clients.",
    image: "/images/projects/aisight-footfall-map.png",
    tags: ["Web Scraping", "Feature Engineering", "Explainable AI", "Geospatial Analysis", "Python", "Scrapy"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1f0d 0%, #0f1208 100%)",
  },
  {
    id: 6, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Apache Airflow ETL Platform",
    description: "Designed and deployed production ETL pipelines in Apache Airflow to move data from multiple sources into a reliable analytics environment. The platform improved data consistency, reduced manual handling, and gave client-facing products a stronger operational backbone.",
    image: "/images/projects/aisight-etl-airflow.png",
    tags: ["Apache Airflow", "ETL", "Parallel Computing", "Data Engineering", "Python", "Pipeline Automation"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1a0d 0%, #121208 100%)",
  },
]

export const researchProjects: Project[] = [
  {
    id: 101,
    category: "research",
    company: "Upwork Client",
    companyColor: "#58a6ff",
    title: "Large-Scale Time Series Classification (Hydra + MultiRocket)",
    description: "Implemented and optimized state-of-the-art time series classification pipelines using the ROCKET family, including Hydra and MultiRocket, for large benchmark datasets such as UCR109. The work focused on improving classification accuracy while maintaining computational efficiency through feature transformations, kernel-level optimizations, and hybrid modeling strategies.",
    image: "/images/projects/hydra-multirocket.png",
    tags: ["Python", "Hydra", "MultiRocket", "Time Series Classification", "NumPy", "Scikit-learn"],
    github: null,
    live: null,
    placeholderGradient: "linear-gradient(135deg, #102133 0%, #0a121b 100%)",
  },
  {
    id: 102,
    category: "research",
    company: "Upwork Client",
    companyColor: "#8b5cf6",
    title: "Self-Supervised Mispronunciation Detection (wav2vec2 + CTC-GOP)",
    description: "Developed a speech AI pipeline for phoneme-level mispronunciation detection using wav2vec2 and CTC-based Goodness of Pronunciation (GOP). Built decoding, alignment, threshold sweep, and evaluation workflows to detect pronunciation errors using metrics such as PER, FAR, FRR, and DER in a research-focused evaluation setup.",
    image: "/images/projects/wav2vec2-mdd.png",
    tags: ["wav2vec2", "Speech AI", "CTC-GOP", "PyTorch", "Hugging Face", "Evaluation Pipelines"],
    github: null,
    live: null,
    placeholderGradient: "linear-gradient(135deg, #111827 0%, #1f1338 55%, #0a101c 100%)",
  },
  {
    id: 103,
    category: "research",
    company: "Upwork Client",
    companyColor: "#58a6ff",
    title: "AI-Assisted Music Composition Engine",
    description: "Built an experimental AI-assisted composition workflow for music generation and arrangement support. Explored prompt-guided composition, structured musical outputs, and model-assisted creative iteration for composition and editing tasks.",
    image: "/images/projects/music-composition-engine.png",
    tags: ["Generative AI", "Music AI", "Composition", "PyTorch", "Sequence Modeling"],
    github: null,
    live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1724 0%, #13263e 48%, #091018 100%)",
  },
]
