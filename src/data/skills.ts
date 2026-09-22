export interface SkillCategory {
  domain: string
  areas: { name: string; tools: string[] }[]
}

export const skills: SkillCategory[] = [
  {
    domain: 'DATA SCIENCE',
    areas: [
      { name: 'Statistics', tools: ['Pandas', 'NumPy'] },
      { name: 'ML', tools: ['Scikit-learn'] },
      { name: 'Data Analysis', tools: ['Matplotlib', 'Seaborn'] },
    ],
  },
  {
    domain: 'DEEP LEARNING',
    areas: [
      { name: 'CNN', tools: ['PyTorch'] },
      { name: 'DL', tools: ['TensorFlow'] },
    ],
  },
  {
    domain: 'COMPUTER VISION',
    areas: [
      { name: 'Detection', tools: ['YOLO'] },
      { name: 'Recognition', tools: ['OpenCV', 'ArcFace'] },
    ],
  },
  {
    domain: 'NLP',
    areas: [
      { name: 'Text Processing', tools: ['LLMs'] },
      { name: 'Translation', tools: ['Transformers'] },
    ],
  },
  {
    domain: 'OPTIMIZATION',
    areas: [
      { name: 'CSP', tools: ['OR-Tools'] },
      { name: 'Metaheuristics', tools: ['GWO', 'CS', 'TS'] },
    ],
  },
  {
    domain: 'DATA ENGINEERING',
    areas: [
      { name: 'ETL', tools: ['Apache Spark'] },
      { name: 'Databases', tools: ['PostgreSQL', 'MongoDB', 'SQL'] },
    ],
  },
  {
    domain: 'PROGRAMMING',
    areas: [
      { name: 'Python (Expert)', tools: ['FastAPI'] },
      { name: 'Java', tools: ['Spring Boot'] },
      { name: 'JavaScript', tools: ['React', 'Node.js'] },
    ],
  },
  {
    domain: 'BI & VISUALIZATION',
    areas: [
      { name: 'Dashboards', tools: ['Power BI'] },
      { name: 'Visualization', tools: ['Matplotlib', 'Seaborn'] },
    ],
  },
  {
    domain: 'MLOPS',
    areas: [
      { name: 'Containers', tools: ['Docker'] },
      { name: 'Tracking', tools: ['MLflow'] },
      { name: 'CI/CD', tools: ['GitHub Actions'] },
      { name: 'Cloud', tools: ['AWS'] },
    ],
  },
]
