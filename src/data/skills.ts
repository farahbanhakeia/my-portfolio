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
    subgroups: [
      {
        label: 'Languages & Libraries',
        tools: ['Python', 'Pandas', 'NumPy', 'SQL'],
      },
      {
        label: 'Visualization & BI',
        tools: ['Power BI', 'DAX', 'Excel', 'Matplotlib', 'Seaborn'],
      },
    ],
  },
  {
    domain: 'MACHINE LEARNING',
    description: 'Predictive modeling, feature engineering, statistical learning, and model evaluation',
    subgroups: [
      {
        label: 'Frameworks',
        tools: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face'],
      },
      {
        label: 'Techniques',
        tools: ['Feature Engineering', 'Classification', 'Regression', 'Clustering', 'Hyperparameter Tuning', 'Cross-Validation'],
      },
      {
        label: 'Domains',
        tools: ['Computer Vision', 'NLP', 'Model Evaluation'],
      },
    ],
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
        label: 'ETL / ELT & Pipelines',
        tools: ['ETL', 'ELT', 'Data Pipelines', 'Data Integration', 'Data Transformation', 'Data Cleaning', 'Batch Processing', 'Workflow Automation'],
      },
      {
        label: 'Big Data & Distributed',
        tools: ['Apache Spark', 'PySpark', 'Hadoop', 'HDFS', 'MapReduce', 'Big Data Processing', 'Distributed Computing'],
      },
      {
        label: 'Infrastructure & Tools',
        tools: ['Docker', 'Git', 'Linux', 'Data Warehousing', 'Data Lakes', 'Pipeline Architecture'],
      },
    ],
  },
]
