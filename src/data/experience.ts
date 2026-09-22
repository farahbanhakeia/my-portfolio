export interface Experience {
  period: string
  current: boolean
  title: string
  company: string
  location: string
  description: string
  bullets: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    period: '2026 — PRESENT',
    current: true,
    title: 'AI & Optimization Engineer (Internship)',
    company: 'CMC',
    location: 'Oriental, Morocco',
    description:
      'Designing and implementing a constraint satisfaction engine for academic scheduling within an Agile team.',
    bullets: [
      'Algorithmic Modeling: Analysis of complex business constraints and design of a CSP-based optimization engine for academic planning.',
      'Architecture & Data: Development of secure REST APIs with Python and integration of data pipelines with MongoDB.',
      'Collaborative Development: Active participation in integrating the intelligent solution into the user interface (React, Node.js).',
    ],
    technologies: [
      'Python',
      'CSP',
      'MongoDB',
      'REST API',
      'Git',
      'Node.js',
      'React',
      'Agile',
    ],
  },
  {
    period: '2025 — 6 MONTHS',
    current: false,
    title: 'Data Analyst & Developer (Internship)',
    company: 'Marsa Maroc',
    location: 'Morocco',
    description:
      'Analyzed maritime operational data and developed analytical dashboards for key performance indicators.',
    bullets: [
      'Data Analysis: Exploration, preprocessing and analysis of maritime flow and route data to extract key indicators.',
      'Business Intelligence: Design and deployment of interactive dashboards with Power BI.',
      'Data Engineering: Design of REST APIs with Spring Boot and PostgreSQL.',
    ],
    technologies: [
      'Power BI',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'SQL',
      'Angular',
    ],
  },
]

export interface Certification {
  title: string
  provider: string
  status: 'completed' | 'in-progress'
}

export const certifications: Certification[] = [
  {
    title: 'Machine Learning & Deep Learning',
    provider: 'Udemy',
    status: 'completed',
  },
  {
    title: 'Microsoft Power BI',
    provider: 'Udemy',
    status: 'completed',
  },
  {
    title: 'AWS Cloud Practitioner',
    provider: 'AWS',
    status: 'in-progress',
  },
]

export const languages = [
  { name: 'French', level: 'Bilingual' },
  { name: 'English', level: 'Professional' },
  { name: 'Arabic', level: 'Native' },
]
