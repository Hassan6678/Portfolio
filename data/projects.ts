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
    image: "/images/projects/surveyauto.png",
    tags: ["Geospatial ML", "Sales Forecasting", "Semi-Supervised", "Clustering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f10 0%, #081208 100%)",
  },
  {
    id: 5, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Retail Footfall Intelligence Engine",
    description: "Built a shop-level intelligence engine using scraped and geospatial signals such as footfall, building context, and population patterns. The resulting models supported market-share analysis, outlet prioritization, and sales planning for FMCG-focused clients.",
    image: "/images/projects/aisight-footfall.png",
    tags: ["Web Scraping", "Feature Engineering", "Explainable AI", "Geospatial Analysis", "Python", "Scrapy"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1f0d 0%, #0f1208 100%)",
  },
  {
    id: 6, category: "enterprise", company: "AiSight.ai", companyColor: "#e8ff47",
    title: "Apache Airflow ETL Platform",
    description: "Designed and deployed production ETL pipelines in Apache Airflow to move data from multiple sources into a reliable analytics environment. The platform improved data consistency, reduced manual handling, and gave client-facing products a stronger operational backbone.",
    image: "/images/projects/aisight-etl.png",
    tags: ["Apache Airflow", "ETL", "Parallel Computing", "Data Engineering", "Python", "Pipeline Automation"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a1a0d 0%, #121208 100%)",
  },
  {
    id: 7, category: "freelance", company: "Upwork Client", companyColor: "#58a6ff",
    title: "Time Series Forecasting Workflow",
    description: "Built a forecasting workflow for an international client working with irregular time series data. The engagement covered preprocessing, feature engineering, model evaluation, and iterative refinement to support more dependable predictive outputs.",
    image: "/images/projects/upwork-timeseries.png",
    tags: ["Time Series", "Forecasting", "Classification", "Python", "Scikit-learn", "TensorFlow"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1b2a 0%, #081520 100%)",
    upworkRating: "5.0",
    earned: "$4,862",
  },
  {
    id: 8, category: "freelance", company: "Upwork Client", companyColor: "#3fb950",
    title: "Manufacturing Defect Prediction System",
    description: "Developed a machine learning system to identify defect-prone conditions in metal additive manufacturing. The project combined supervised models with domain-specific feature engineering to support earlier intervention and more stable production quality.",
    image: "/images/projects/upwork-defect.png",
    tags: ["Defect Prediction", "Manufacturing ML", "Supervised Learning", "Python", "Feature Engineering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f14 0%, #081210 100%)",
    upworkRating: "5.0",
  },
]
