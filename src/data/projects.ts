export interface ProjectNode {
  id: string
  label: string
}

export interface ProjectEdge {
  from: string
  to: string
}

export interface Project {
  id: string
  number: string
  badge: string
  title: string
  subtitle: string
  description: string
  github: string
  pipeline: { nodes: ProjectNode[]; edges: ProjectEdge[] }
  technologies: string[]
  concepts: string[]
  sections: {
    problem: string
    objective: string
    architecture: string
    methodology: string
    implementation: string
    experiments: string
    results: string
    limitations: string
    futureWork: string
  }
}

export interface SecondaryProject {
  title: string
  description: string
  github: string
  tags: string[]
  category: string
}

export const mainProjects: Project[] = [
  {
    id: 'yolo-benchmark',
    number: '01',
    badge: 'COMPUTER VISION',
    title: 'YOLO Object Detection Benchmarking Platform',
    subtitle: 'YOLO BENCHMARK',
    description:
      'Experimental platform for comparing YOLO object detection models through a unified benchmarking pipeline.',
    github: 'https://github.com/farahbanhakeia/yolo-benchmark',
    pipeline: {
      nodes: [
        { id: 'img', label: 'IMAGE' },
        { id: 'sel', label: 'MODEL SELECTION' },
        { id: 'adp', label: 'ADAPTER' },
        { id: 'inf', label: 'INFERENCE' },
        { id: 'post', label: 'POST-PROCESSING' },
        { id: 'met', label: 'METRICS' },
        { id: 'cmp', label: 'COMPARISON' },
      ],
      edges: [
        { from: 'img', to: 'sel' },
        { from: 'sel', to: 'adp' },
        { from: 'adp', to: 'inf' },
        { from: 'inf', to: 'post' },
        { from: 'post', to: 'met' },
        { from: 'met', to: 'cmp' },
      ],
    },
    technologies: ['Python', 'YOLO', 'OpenCV', 'PyTorch', 'Ultralytics'],
    concepts: ['FPS', 'LATENCY', 'INFERENCE TIME', 'DETECTIONS', 'CONFIDENCE', 'MODEL SIZE'],
    sections: {
      problem:
        'Comparing object detection models requires a unified evaluation framework that controls for variables like input resolution, hardware, and post-processing to ensure fair benchmarking.',
      objective:
        'Build a modular benchmarking platform that can evaluate multiple YOLO model variants under consistent conditions and produce comparable performance metrics.',
      architecture:
        'The platform uses an adapter pattern to abstract model-specific APIs behind a unified interface. Each model variant is loaded through its adapter, enabling consistent inference and metric collection.',
      methodology:
        'Models are evaluated using standardized input pipelines, controlled inference settings, and unified metric computation. Results are aggregated for cross-model comparison.',
      implementation:
        'Built with Python, leveraging PyTorch and Ultralytics for model loading, OpenCV for image processing, and custom adapters for each YOLO variant.',
      experiments:
        'Benchmarks are run across multiple YOLO versions with configurable parameters. Metrics include inference time, FPS, detection count, and confidence distributions.',
      results:
        'The platform provides a structured comparison interface. Experimental metrics are generated from actual model runs and reflect real benchmarking conditions.',
      limitations:
        'Results are hardware-dependent and may vary across different GPU configurations. The current version focuses on single-image inference rather than video streams.',
      futureWork:
        'Extend to video benchmarking, add support for non-YOLO detection models, and integrate automated report generation with visualization exports.',
    },
  },
  {
    id: 'ai-crisis-manager',
    number: '02',
    badge: 'MULTI-AGENT AI',
    title: 'AI Crisis Manager',
    subtitle: 'AI CRISIS MANAGER',
    description:
      'Autonomous multi-agent AI system for urban crisis simulation, decision-making and emergency resource optimization.',
    github: 'https://github.com/farahbanhakeia/AI-CRISIS-MANAGER',
    pipeline: {
      nodes: [
        { id: 'crisis', label: 'CRISIS' },
        { id: 'decision', label: 'DECISION AGENT' },
        { id: 'fire', label: 'FIRE AGENT' },
        { id: 'medical', label: 'MEDICAL AGENT' },
        { id: 'resource', label: 'RESOURCE AGENT' },
        { id: 'opt', label: 'OPTIMIZATION' },
        { id: 'action', label: 'ACTION' },
      ],
      edges: [
        { from: 'crisis', to: 'decision' },
        { from: 'decision', to: 'fire' },
        { from: 'decision', to: 'medical' },
        { from: 'decision', to: 'resource' },
        { from: 'fire', to: 'opt' },
        { from: 'medical', to: 'opt' },
        { from: 'resource', to: 'opt' },
        { from: 'opt', to: 'action' },
      ],
    },
    technologies: ['Python', 'Multi-Agent', 'OR-Tools', 'Dijkstra', 'A*'],
    concepts: [
      'Multi-Agent Systems',
      'Decision Making',
      'Simulation',
      'Dijkstra',
      'A*',
      'OR-Tools',
      'Resource Optimization',
    ],
    sections: {
      problem:
        'Urban crisis scenarios require coordinated response across multiple agencies with limited resources, time-critical decisions, and dynamic evolving situations.',
      objective:
        'Design an autonomous multi-agent system that simulates crisis scenarios, coordinates specialized agents, and optimizes resource allocation for emergency response.',
      architecture:
        'The system uses a hierarchical multi-agent architecture with a central Decision Agent coordinating specialized agents (Fire, Medical, Resource) that operate semi-autonomously.',
      methodology:
        'Agents communicate through a shared event bus. Path optimization uses Dijkstra and A* algorithms. Resource allocation is solved using OR-Tools constraint programming.',
      implementation:
        'Built in Python with custom agent frameworks, graph-based city modeling, and constraint-based optimization for resource dispatch.',
      experiments:
        'Simulated crisis scenarios of varying complexity to evaluate response time, resource utilization, and coordination effectiveness across agent teams.',
      results:
        'The system demonstrates coordinated multi-agent response with optimized resource allocation across simulated urban crisis scenarios.',
      limitations:
        'Current simulations use simplified city models. Real-world deployment would require integration with actual emergency communication systems.',
      futureWork:
        'Add reinforcement learning for adaptive agent policies, integrate real geographic data, and expand agent types for more complex crisis scenarios.',
    },
  },
  {
    id: 'cmc-planning',
    number: '03',
    badge: 'CONSTRAINT OPTIMIZATION',
    title: 'Intelligent Academic Scheduling',
    subtitle: 'CMC PLANNING PLATFORM',
    description:
      'Academic scheduling platform based on constraint satisfaction, resource management and optimization.',
    github: 'https://github.com/farahbanhakeia/cmc-planning-platform',
    pipeline: {
      nodes: [
        { id: 'groups', label: 'GROUPS' },
        { id: 'trainers', label: 'TRAINERS' },
        { id: 'rooms', label: 'ROOMS' },
        { id: 'modules', label: 'MODULES' },
        { id: 'constraints', label: 'CONSTRAINTS' },
        { id: 'csp', label: 'CSP ENGINE' },
        { id: 'schedule', label: 'OPTIMIZED SCHEDULE' },
      ],
      edges: [
        { from: 'groups', to: 'constraints' },
        { from: 'trainers', to: 'constraints' },
        { from: 'rooms', to: 'constraints' },
        { from: 'modules', to: 'constraints' },
        { from: 'constraints', to: 'csp' },
        { from: 'csp', to: 'schedule' },
      ],
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API', 'CSP', 'Express'],
    concepts: [
      'Constraint Satisfaction',
      'Conflict Detection',
      'Resource Allocation',
      'Scheduling',
      'Optimization',
      'REST API',
      'MongoDB',
    ],
    sections: {
      problem:
        'Academic scheduling involves satisfying complex constraints across groups, trainers, rooms, time slots, and module requirements while minimizing conflicts.',
      objective:
        'Build a platform that models academic scheduling as a constraint satisfaction problem and generates conflict-free, optimized timetables.',
      architecture:
        'Full-stack architecture with a React frontend, Node.js/Express backend, MongoDB for data persistence, and a CSP engine for schedule generation.',
      methodology:
        'Constraints are formalized as hard (no conflicts) and soft (preferences). The CSP engine uses backtracking with constraint propagation to find valid schedules.',
      implementation:
        'RESTful API manages resources (groups, trainers, rooms, modules). The scheduling engine processes constraints and generates optimized timetables.',
      experiments:
        'Tested with real academic data from CMC Oriental, handling multiple groups, trainers, and room configurations with various constraint types.',
      results:
        'The platform generates valid schedules that satisfy all hard constraints while optimizing for soft constraints like trainer preferences and room utilization.',
      limitations:
        'Scalability with very large constraint sets requires further optimization. Dynamic rescheduling for mid-semester changes is partially implemented.',
      futureWork:
        'Implement meta-heuristic optimization for soft constraints, add drag-and-drop schedule editing, and integrate notification systems for schedule changes.',
    },
  },
  {
    id: 'secure-face-auth',
    number: '04',
    badge: 'COMPUTER VISION / SECURITY',
    title: 'Secure Face Authentication',
    subtitle: 'SECURE FACE AUTH',
    description:
      'Biometric authentication system combining deep learning face recognition with cryptographic security for secure identity verification.',
    github: 'https://github.com/farahbanhakeia/secure-face-authentication',
    pipeline: {
      nodes: [
        { id: 'face', label: 'FACE' },
        { id: 'detect', label: 'FACE DETECTION' },
        { id: 'arcface', label: 'ARCFACE' },
        { id: 'embed', label: 'EMBEDDING' },
        { id: 'crypto', label: 'AES / RSA' },
        { id: 'store', label: 'SECURE STORAGE' },
        { id: 'auth', label: 'AUTHENTICATION' },
      ],
      edges: [
        { from: 'face', to: 'detect' },
        { from: 'detect', to: 'arcface' },
        { from: 'arcface', to: 'embed' },
        { from: 'embed', to: 'crypto' },
        { from: 'crypto', to: 'store' },
        { from: 'store', to: 'auth' },
      ],
    },
    technologies: ['Python', 'ArcFace', 'OpenCV', 'AES', 'RSA', 'Cryptography'],
    concepts: [
      'Face Detection',
      'Face Recognition',
      'ArcFace Embeddings',
      'AES Encryption',
      'RSA Encryption',
      'Secure Storage',
      'Biometric Authentication',
    ],
    sections: {
      problem:
        'Face authentication systems must balance recognition accuracy with security. Storing raw biometric data creates vulnerability; embeddings need cryptographic protection.',
      objective:
        'Build a face authentication system that combines ArcFace deep learning recognition with AES/RSA cryptographic protection of biometric embeddings.',
      architecture:
        'Pipeline architecture: face detection, ArcFace embedding extraction, cryptographic encryption of embeddings, secure storage, and authenticated comparison.',
      methodology:
        'ArcFace generates high-dimensional face embeddings. These are encrypted with AES for storage and RSA for key exchange, ensuring biometric data is never stored in plaintext.',
      implementation:
        'Python implementation using OpenCV for face detection, ArcFace models for embedding generation, and the cryptography library for AES/RSA operations.',
      experiments:
        'Tested authentication accuracy with various lighting conditions, angles, and the security of the cryptographic pipeline against common attack vectors.',
      results:
        'The system provides accurate face authentication while maintaining cryptographic security of all stored biometric data.',
      limitations:
        'Performance depends on camera quality and lighting. The current implementation is designed for single-user authentication scenarios.',
      futureWork:
        'Add liveness detection to prevent spoofing, implement multi-factor authentication, and optimize for edge deployment on embedded devices.',
    },
  },
]

export const secondaryProjects: SecondaryProject[] = [
  {
    title: 'LLM Document Translator',
    description:
      'Document translation system leveraging Large Language Models for context-aware multilingual translation.',
    github: 'https://github.com/farahbanhakeia/LLM-Document-Translator',
    tags: ['NLP', 'LLM', 'Translation', 'Python'],
    category: 'NLP / AI',
  },
  {
    title: 'TSP UAV Optimization Algorithms',
    description:
      'Metaheuristic optimization algorithms (GWO, CS, TS) for solving the Traveling Salesman Problem in UAV path planning.',
    github:
      'https://github.com/farahbanhakeia/TSP-UAV-Optimization-Algorithms-GWO-CS-TS-',
    tags: ['Optimization', 'Metaheuristics', 'GWO', 'Python'],
    category: 'OPTIMIZATION',
  },
  {
    title: 'Breast Cancer Prediction',
    description:
      'Machine learning classification pipeline for breast cancer diagnosis from clinical features.',
    github: 'https://github.com/farahbanhakeia',
    tags: ['ML', 'Classification', 'Healthcare', 'Scikit-learn'],
    category: 'DATA SCIENCE',
  },
  {
    title: 'Ultra-Marathon Data Analysis',
    description:
      'Exploratory data analysis and statistical modeling of ultra-marathon race data.',
    github: 'https://github.com/farahbanhakeia',
    tags: ['Data Analysis', 'Statistics', 'Pandas', 'Visualization'],
    category: 'DATA ANALYTICS',
  },
]
