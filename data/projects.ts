/**
 * Portfolio project data
 * To add a project: copy an entry, increment id, add image to public/images/projects/
 */

export type ProjectCategory = "enterprise" | "nlp" | "computer-vision" | "open-source"

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
}

export const projects: Project[] = [
  {
    id: 1, category: "enterprise", company: "BAT UK", companyColor: "#e8ff47",
    title: "Territory Clustering Optimization",
    description: "Designed 167 balanced sales territories from 506+ outlet locations using weighted K-means. Implements visit frequency scheduling, daily call constraints (8-14 calls/day), and 4-week route cycles for the UK field force.",
    image: "/images/projects/bat-territory.png",
    tags: ["Spatial Clustering", "Weighted K-Means", "Route Optimization", "Google Maps API", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #1a2614 0%, #0f1a0a 100%)",
  },
  {
    id: 2, category: "enterprise", company: "EBM", companyColor: "#58a6ff",
    title: "AI-Powered Sales Intelligence Platform",
    description: "Interactive dashboards with deep learning for sales pattern detection. Applied satellite imagery and computer vision to identify potential market areas and generate demand forecasting alerts.",
    image: "/images/projects/ebm-dashboard.png",
    tags: ["Computer Vision", "Deep Learning", "Satellite Imagery", "TensorFlow", "Dashboard"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1b2a 0%, #0a1520 100%)",
  },
  {
    id: 3, category: "nlp", company: "Nielsen & UK Clients", companyColor: "#ff7b72",
    title: "LLM Business Insights Chatbot",
    description: "NLP & LLM-based chatbot automating data queries and extracting actionable business insights. Led a team of 2-3 engineers from prototype to production.",
    image: "/images/projects/nielsen-chatbot.png",
    tags: ["LLM", "NLP", "Chatbot", "Team Lead", "Python"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #2a0d0d 0%, #1a0808 100%)",
  },
  {
    id: 4, category: "enterprise", company: "SurveyAuto", companyColor: "#3fb950",
    title: "Semi-Supervised Territory Definition",
    description: "Clustered shop coordinates with time constraints to maximize distributor coverage. Multi-level statistical sales forecasting at product, brand, company, and geospatial granularity.",
    image: "/images/projects/surveyauto.png",
    tags: ["Geospatial ML", "Sales Forecasting", "Semi-Supervised", "Clustering"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1f10 0%, #081208 100%)",
  },
  {
    id: 5, category: "computer-vision", company: "Open Source", companyColor: "#d2a8ff",
    title: "VLC Hand Gesture Controller",
    description: "Real-time VLC media player control via hand gesture recognition. Custom video dataset collected across varied environments. RNN-based unsupervised classification pipeline.",
    image: "/images/projects/vlc-gesture.png",
    tags: ["Computer Vision", "RNN", "OpenCV", "Dataset Collection", "Python"],
    github: "https://github.com/Hassan6678/VLC-Control-using-Hand", live: null,
    placeholderGradient: "linear-gradient(135deg, #1a0d2a 0%, #100820 100%)",
  },
  {
    id: 6, category: "nlp", company: "MS Thesis -- PUCIT", companyColor: "#ffa657",
    title: "Urdu Automatic Speech Recognition",
    description: "Trained recurrent model variations on Urdu speech dataset. Implemented Bi-LSTMs, Local & Global Attention Mechanisms, Copy Mechanism, and Beam Search for text generation from speech spectrograms.",
    image: "/images/projects/urdu-asr.png",
    tags: ["NLP", "Bi-LSTM", "Attention Mechanism", "Beam Search", "Deep Learning"],
    github: null, live: null,
    placeholderGradient: "linear-gradient(135deg, #2a1a0d 0%, #1a1008 100%)",
  },
  {
    id: 7, category: "computer-vision", company: "BS Project -- PUCIT", companyColor: "#79c0ff",
    title: "Urdu Optical Character Recognition",
    description: "Research-driven OCR pipeline for Urdu script. Two-module system: data collection and preprocessing, then a computer vision model using classical image processing and pattern recognition.",
    image: "/images/projects/urdu-ocr.png",
    tags: ["OCR", "Computer Vision", "Image Processing", "Pattern Recognition"],
    github: "https://github.com/Hassan6678/Urdu_dataSet_Created", live: null,
    placeholderGradient: "linear-gradient(135deg, #0d1a2a 0%, #081018 100%)",
  },
]
