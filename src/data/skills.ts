export interface SkillSubgroup {
  label: string
  tools: string[]
}

export interface SkillCategory {
  domain: string
  description: string
  tools?: string[]
  subgroups?: SkillSubgroup[]
  featured?: boolean
}

export const skills: SkillCategory[] = [
  {
    domain: 'DATA ANALYTICS',
    description: 'Exploration, visualization, statistical analysis, and business intelligence',
    tools: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'DAX', 'Excel', 'Matplotlib', 'Seaborn'],
  },
  {
    domain: 'DATA ENGINEERING',
    description: 'Data pipelines, ETL/ELT, databases, APIs, Big Data, distributed processing, and data infrastructure',
    featured: true,
    subgroups: [
      {
        label: 'Programming & APIs',
        tools: ['Python', 'SQL', 'REST APIs', 'FastAPI', 'Node.js', 'Express', 'Spring Boot'],
      },
      {
        label: 'Databases',
        tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL databases', 'NoSQL databases'],
      },
      {
        label: 'ETL / ELT & Data Pipelines',
        tools: ['ETL', 'ELT', 'Data Pipelines', 'Data Integration', 'Data Transformation', 'Data Cleaning', 'Batch Processing', 'Workflow Automation'],
      },
      {
        label: 'Big Data & Distributed Processing',
        tools: ['Apache Spark', 'PySpark', 'Hadoop', 'HDFS', 'MapReduce', 'Big Data Processing', 'Distributed Computing'],
      },
      {
        label: 'Infrastructure & Tools',
        tools: ['Docker', 'Git', 'Linux', 'Data Warehousing', 'Data Lakes', 'Pipeline Architecture'],
      },
    ],
  },
  {
    domain: 'MACHINE LEARNING',
    description: 'Predictive modeling, feature engineering, statistical learning, and model evaluation',
    tools: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Feature Engineering', 'Classification', 'Regression', 'Clustering', 'Model Evaluation', 'Hyperparameter Tuning', 'Cross-Validation', 'Computer Vision', 'NLP'],
  },
]
