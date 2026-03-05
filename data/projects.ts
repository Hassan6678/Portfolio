/**
 * Portfolio project data
 * To add a project: copy an entry, increment id, add image to public/images/projects/
 */

export type ProjectCategory = "enterprise" | "nlp" | "computer-vision" | "freelance"

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
    title: "Territory Clustering Optimization",
    description: "Engineered a production territory design system restructuring BAT UK's nationwide field force across 167 warehouse hubs serving 506+ retail outlets. The weighted K-means spatial clustering engine balances visit frequency requirements, enforces 8-14 daily call constraints, and generates optimized 4-week route cycles -- cutting manual planning time from days to minutes and improving field coverage consistency.",
    image: "/images/projects/bat-territory.png",
    tags: ["Spatial Clustering", "Weighted K-Means", "Route Optimization", "Google Maps API", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a2614 0%, #0f1a0a 100%)",
  },
  {
    id: 2, category: "enterprise", company: "EBM", companyColor: "#58a6ff",
    title: "AI-Powered Sales Intelligence Platform",
    description: "Built an end-to-end intelligence platform combining deep learning sales pattern detection with satellite imagery analysis. Applied computer vision to identify untapped market opportunities across regions. Integrated real-time demand forecasting alerts that enabled proactive field decisions -- improving forecast accuracy and expanding regional market penetration for one of Pakistan's largest FMCG manufacturers.",
    image: "/images/projects/ebm-dashboard.png",
    tags: ["Computer Vision", "Deep Learning", "Satellite Imagery", "TensorFlow", "Dashboard"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1b2a 0%, #0a1520 100%)",
  },
  {
    id: 3, category: "nlp", company: "Nielsen & UK Clients", companyColor: "#ff7b72",
    title: "LLM Business Insights Chatbot",
    description: "Designed and shipped an LLM-powered analytics chatbot transforming how Nielsen's clients interrogate market data -- replacing manual reporting with natural language queries. Led a team of 3 engineers through full product lifecycle from prototype to production, delivering on time and measurably reducing analyst workload for one of the world's largest market research firms.",
    image: "/images/projects/nielsen-chatbot.png",
    tags: ["LLM", "NLP", "Chatbot", "Team Lead", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #2a0d0d 0%, #1a0808 100%)",
  },
  {
    id: 4, category: "enterprise", company: "SurveyAuto", companyColor: "#3fb950",
    title: "Semi-Supervised Territory Definition",
    description: "Built a semi-supervised geospatial clustering system optimizing distributor coverage across dense urban retail networks. Embedded hard time-budget constraints directly into the clustering objective -- ensuring every generated route is operationally feasible, not just geographically compact. Paired with a multi-level statistical forecasting engine delivering predictions at product, brand, company, and geospatial granularity.",
    image: "/images/projects/surveyauto.png",
    tags: ["Geospatial ML", "Sales Forecasting", "Semi-Supervised", "Clustering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f10 0%, #081208 100%)",
  },
  {
    id: 5, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Retail Footfall & Market Intelligence Engine",
    description: "Scraped and engineered shop-level intelligence across hundreds of retail locations -- capturing footfall patterns, building dimensions, morning/evening population density, and peak rush-hour signals. Fused these features with explainable AI models to produce actionable market insights that directly guided regional sales strategy and competitive positioning for top FMCG clients.",
    image: "/images/projects/aisight-footfall.png",
    tags: ["Web Scraping", "Feature Engineering", "Explainable AI", "Geospatial Analysis", "Python", "Scrapy"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1f0d 0%, #0f1208 100%)",
  },
  {
    id: 6, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Scalable ETL Pipeline with Apache Airflow",
    description: "Architected and deployed fault-tolerant ETL pipelines processing data from 5+ heterogeneous sources for 10+ enterprise clients. Used Apache Airflow orchestration with parallel computing to maximize throughput and minimize latency. Delivered consistent, high-integrity analytics data across the full platform -- replacing fragile manual processes with automated, monitored workflows.",
    image: "/images/projects/aisight-etl.png",
    tags: ["Apache Airflow", "ETL", "Parallel Computing", "Data Engineering", "Python", "Pipeline Automation"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1a0d 0%, #121208 100%)",
  },
  {
    id: 7, category: "freelance", company: "Upwork Client", companyColor: "#58a6ff",
    title: "Time Series Classification & Forecasting System",
    description: "Delivered a long-engagement forecasting project (195 hours, 5-star rated) building and improving time series classifiers for a demanding international client. Developed robust preprocessing, feature extraction, and model evaluation pipelines -- iterating rapidly through multiple approaches to maximize predictive accuracy on real-world irregular datasets.",
    image: "/images/projects/upwork-timeseries.png",
    tags: ["Time Series", "Forecasting", "Classification", "Python", "Scikit-learn", "TensorFlow"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1b2a 0%, #081520 100%)",
    upworkRating: "5.0",
    earned: "$4,862",
  },
  {
    id: 8, category: "freelance", company: "Upwork Client", companyColor: "#3fb950",
    title: "Defect Prediction in Metal Additive Manufacturing",
    description: "Engineered an ML-based defect prediction system for metal additive manufacturing -- a high-stakes industrial application where prediction accuracy directly impacts production quality and material costs. Applied supervised learning with domain-specific feature engineering on manufacturing process data to identify defect-prone conditions before they occur.",
    image: "/images/projects/upwork-defect.png",
    tags: ["Defect Prediction", "Manufacturing ML", "Supervised Learning", "Python", "Feature Engineering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f14 0%, #081210 100%)",
    upworkRating: "5.0",
  },
]
