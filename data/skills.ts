export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Machine Learning & AI',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'LLM / Chatbots',
      'Explainable AI',
      'Predictive Modelling',
      'Statistical Analysis',
    ],
  },
  {
    label: 'Geospatial & Optimization',
    skills: [
      'Geospatial Analysis',
      'Territory Clustering',
      'Route Optimization',
      'Satellite Imagery Analysis',
      'Google Maps API',
      'K-Means Clustering',
    ],
  },
  {
    label: 'Engineering & Tools',
    skills: [
      'Python3',
      'Pandas',
      'NumPy',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Apache Airflow',
      'Docker',
      'MySQL',
      'MongoDB',
      'Scrapy',
      'Linux',
      'Jupyter Lab',
    ],
  },
]
