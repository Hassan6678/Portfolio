export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: "AiSight.ai",
    role: "ML Scientist",
    period: "Jan 2023 - Present",
    bullets: [
      "Engineered an LLM & NLP-powered analytics chatbot for Nielsen and UK enterprise clients -- automating complex market data queries and cutting manual analyst reporting time significantly.",
      "Built a shop-level market intelligence scraping and AI pipeline, capturing footfall, population density, and peak-hour signals to guide FMCG sales strategy across competitive retail regions.",
      "Architected fault-tolerant Apache Airflow ETL pipelines with parallel processing -- integrating 5+ data sources and serving 10+ enterprise clients with consistent, auditable analytics data.",
    ],
    stack: ["Python", "TensorFlow", "Apache Airflow", "NLP", "LLM", "Scrapy"],
  },
  {
    company: "SurveyAuto Inc",
    role: "ML Engineer",
    period: "Jan 2021 - Dec 2022",
    bullets: [
      "Designed a semi-supervised geospatial clustering system for distributor territory definition, embedding time-budget constraints to guarantee operationally feasible daily routes.",
      "Delivered multi-granularity statistical sales forecasting at product, brand, company, and geospatial levels -- directly informing procurement and field planning decisions.",
      "Built a satellite image ML pipeline using computer vision to estimate population density at granular geographic resolution for market opportunity scoring.",
    ],
    stack: ["Python", "Scikit-learn", "GeoPandas", "Satellite API", "Clustering"],
  },
  {
    company: "Code District",
    role: "Software Engineer",
    period: "Jul 2020 - Dec 2020",
    bullets: [
      "Developed backend infrastructure for a US-based EV charging platform -- integrating secure payment processing, real-time API communication, and charging session management across multiple revenue-generating sites.",
    ],
    stack: ["Node.js", "REST APIs", "Payment Gateway"],
  },
]
