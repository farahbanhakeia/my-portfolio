export interface SkillCategory {
  domain: string
  description: string
  tools: string[]
}

export const skills: SkillCategory[] = [
  {
    domain: 'DATA ANALYTICS',
    description: 'Exploration, visualization, and business intelligence',
    tools: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'DAX', 'Excel', 'Matplotlib', 'Seaborn'],
  },
  {
    domain: 'DATA ENGINEERING',
    description: 'Data pipelines, APIs, and database systems',
    tools: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'REST APIs', 'ETL', 'Spring Boot', 'Express'],
  },
  {
    domain: 'MACHINE LEARNING',
    description: 'Predictive modeling and statistical learning',
    tools: ['Scikit-learn', 'Feature Engineering', 'Model Evaluation', 'Classification', 'Regression'],
  },
  {
    domain: 'DEEP LEARNING & AI',
    description: 'Neural networks and intelligent systems',
    tools: ['PyTorch', 'CNN', 'YOLO', 'ArcFace', 'OR-Tools', 'LLMs'],
  },
  {
    domain: 'COMPUTER VISION',
    description: 'Image processing and visual recognition',
    tools: ['OpenCV', 'YOLO', 'Ultralytics', 'Object Detection', 'Face Recognition'],
  },
  {
    domain: 'SOFTWARE ENGINEERING',
    description: 'Application development and version control',
    tools: ['Git', 'GitHub', 'React', 'Node.js', 'Java', 'Angular'],
  },
]
