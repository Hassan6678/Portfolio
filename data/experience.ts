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
      "Built an LLM and NLP analytics chatbot for Nielsen and UK clients, making market data easier to explore through natural-language workflows.",
      "Developed shop-level intelligence pipelines that combined retail signals, market-share inputs, and spatial context to support commercial decision-making.",
      "Designed Apache Airflow ETL pipelines to move multi-source data into production analytics systems with stronger reliability and traceability.",
    ],
    stack: ["Python", "TensorFlow", "Apache Airflow", "NLP", "LLM", "Scrapy"],
  },
  {
    company: "SurveyAuto Inc",
    role: "ML Engineer",
    period: "Jan 2021 - Dec 2022",
    bullets: [
      "Built a geospatial clustering system for territory definition that balanced operational constraints with realistic field coverage requirements.",
      "Developed multi-level forecasting models across product, brand, company, and regional views to support planning and resource allocation.",
      "Created a satellite-image pipeline for population estimation and market opportunity analysis at fine geographic resolution.",
    ],
    stack: ["Python", "Scikit-learn", "GeoPandas", "Satellite API", "Clustering"],
  },
  {
    company: "Code District",
    role: "Software Engineer",
    period: "Jul 2020 - Dec 2020",
    bullets: [
      "Built backend services for a US EV charging platform, including payment flows, API integrations, and charging-session management.",
      "Supported reliable communication between platform services and external systems used in day-to-day charging operations.",
    ],
    stack: ["Node.js", "REST APIs", "Payment Gateway"],
  },
]
