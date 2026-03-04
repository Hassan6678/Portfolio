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
      "Built NLP/LLM chatbot for automated business data queries serving Nielsen and UK enterprise clients.",
      "Scraped and analyzed shop-level footfall, population density, and peak-hour data for AI-driven sales strategy.",
      "Led ETL pipeline automation with Apache Airflow using parallel computing for scalable data integrity.",
    ],
    stack: ["Python", "TensorFlow", "Apache Airflow", "NLP", "LLM", "Scrapy"],
  },
  {
    company: "SurveyAuto Inc",
    role: "ML Engineer",
    period: "Jan 2021 - Dec 2022",
    bullets: [
      "Delivered statistical sales forecasting at product, brand, company, and geospatial levels.",
      "Built semi-supervised territory definition system using shop coordinates with time budget constraints.",
      "Developed satellite image ML pipeline for granular population density estimation.",
    ],
    stack: ["Python", "Scikit-learn", "GeoPandas", "Satellite API", "Clustering"],
  },
  {
    company: "Code District",
    role: "Software Engineer",
    period: "Jul 2020 - Dec 2020",
    bullets: [
      "Built backend for a US EV charging platform with payment processing and real-time API integration.",
    ],
    stack: ["Node.js", "REST APIs", "Payment Gateway"],
  },
]
