export type Project = {
  number: string
  name: string
  tagline: string
  category: string
  description: string
  technologies: string[]
  highlights: string[]
  role: string
  context: string
  contributions: string[]
  color: string
  overview: string
  problem: string
  solution: string
  architecture: string
  challenges: string
  outcome: string
  links: { github?: string; demo?: string }
}

export type Experience = {
  year: string
  role: string
  organization: string
  description: string
}

export type AdditionalProject = {
  number: string
  name: string
  tagline: string
  category: string
  description: string
  role: string
}

export const personal = {
  name: 'John Paul Cambiado',
  shortName: 'JPC',
  role: 'Software Developer',
  degree: 'BS Computer Science',
  focus: 'Solution Architecture / Full-Stack Development',
  location: 'Naga City, Philippines',
  availability: 'Open to junior software engineer and developer opportunities',
  email: 'ariasampoy414@gmail.com',
  intro: 'I design system architectures and build full-stack, AI, and IoT prototypes for operational problems.',
  about: [
    "I'm a fourth-year BS Computer Science student focused on solution architecture and full-stack development. I translate project requirements into system flows, data models, interfaces, and working prototypes.",
    'My work includes DFDs, ERDs, use-case modeling, database design, web and mobile development, AI, computer vision, IoT integration, UI/UX design, and quality assurance.',
  ],
}

export const socialLinks = {
  github: 'https://github.com/Poyyy414',
  linkedin: 'https://www.linkedin.com/in/john-paul-cambiado-644a9235a/',
  facebook: 'https://www.facebook.com/johnpaul.cambiado.1',
  email: `mailto:${personal.email}`,
  cv: `${import.meta.env.BASE_URL}JohnPaulCambiado_CV_Resume_Final.pdf`, // TODO: Replace this PDF in /public when your CV changes.
}

export const services = [
  { title: 'Define the Problem', icon: 'Search', description: 'Clarify users, requirements, constraints, and the decisions the system needs to support.' },
  { title: 'Model the System', icon: 'Workflow', description: 'Plan system architecture, data flows, entities, use cases, integrations, and failure points.' },
  { title: 'Build the Product', icon: 'Code2', description: 'Turn the design into web, mobile, API, database, AI, and IoT components.' },
  { title: 'Validate & Improve', icon: 'BadgeCheck', description: 'Test core workflows, document defects, refine the interface, and verify that components work together.' },
]

export const skills = {
  'System Design': ['Solution Architecture', 'System Architecture', 'DFD', 'ERD', 'Use Case Modeling'],
  Frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Python', 'Django', 'Node.js', 'Express', 'REST APIs'],
  Mobile: ['Flutter', 'React Native'],
  Database: ['MySQL', 'PostgreSQL'],
  'AI / Computer Vision': ['YOLOv8', 'OpenCV', 'Machine Learning', 'Deep Learning', 'Forecasting Models'],
  Tools: ['Git', 'GitHub', 'Figma', 'Lucidchart'],
}

export const projects: Project[] = [
  {
    number: '01', name: 'OccupAI', tagline: 'AI-Powered Smart Parking Management System', category: 'AI · Computer Vision · Full Stack',
    description: 'A smart parking system combining computer vision, occupancy detection, forecasting, analytics, and real-time monitoring to improve parking management.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'MySQL', 'React', 'Machine Learning'],
    highlights: ['Vehicle detection', 'Parking-slot occupancy monitoring', 'Peak-hour analysis', 'Demand forecasting', 'Revenue forecasting', 'Real-time dashboard'],
    role: 'Full-Stack Developer & AI Engineer', context: 'Academic system prototype',
    contributions: ['Full-stack development', 'Computer-vision integration', 'Backend and frontend implementation'], color: '#b8ff45',
    overview: 'An end-to-end parking intelligence platform that turns live visual data into actionable operational insights.',
    problem: 'Parking operators need a clearer view of live capacity, usage patterns, and likely demand without relying on manual checks.',
    solution: 'OccupAI joins an object-detection pipeline with slot-level status, analytics, and forecasting in one operational dashboard.',
    architecture: 'Camera feed → YOLOv8 / OpenCV pipeline → FastAPI services → MySQL → React dashboard.',
    challenges: 'Maintaining reliable detections across changing light, camera angles, and crowded scenes while keeping dashboard updates responsive.',
    outcome: 'A working academic system prototype demonstrating live occupancy visibility and forecast-driven parking decisions.',
    links: {},
  },
  {
    number: '02', name: 'CoopGuard', tagline: 'Smart Poultry Farm Monitoring System', category: 'IoT · Mobile · Agriculture',
    description: 'An IoT-based poultry monitoring platform connecting environmental sensor nodes to a central farm hub and mobile application.',
    technologies: ['ESP32-S3', 'LoRa', 'React Native', 'IoT Sensors', 'Backend APIs', 'Database'],
    highlights: ['Temperature and humidity', 'Ammonia and CO₂', 'Litter moisture', 'Hub and node management', 'Alerts and analytics'],
    role: 'Project Leader / System Designer', context: 'Agri-tech competition prototype',
    contributions: ['Project direction', 'Solution and system architecture', 'Connected monitoring workflow design'], color: '#70e8ce',
    overview: 'A farm visibility system designed to make environmental conditions easier to monitor and act on.',
    problem: 'Poultry conditions can change quickly, while manual monitoring creates gaps in welfare and farm-management decisions.',
    solution: 'Distributed sensor nodes send environmental readings over LoRa to a hub, API, and React Native experience with alerts and trends.',
    architecture: 'Sensor nodes → ESP32-S3 + LoRa → central hub → backend API → database → React Native application.',
    challenges: 'Designing around long-range connectivity, multi-sensor calibration, resilient node management, and clear alert priorities.',
    outcome: 'Municipal winner in the Young Farmers Challenge with an AI-powered IoT solution for poultry farming.',
    links: {},
  },
  {
    number: '03', name: 'CarbonWatch', tagline: 'Localized Environmental Monitoring Platform', category: 'IoT · Data · Climate',
    description: 'An IoT environmental monitoring concept providing localized heat, air-quality, and carbon-related data for communities and businesses.',
    technologies: ['React Native', 'Node.js', 'MySQL', 'IoT Sensors', 'Mapbox', 'Cloud Services'],
    highlights: ['Live sensor readings', 'Localized map insights', 'Trend prediction', 'Environmental reporting'],
    role: 'Backend Developer & UI/UX Designer', context: 'Environmental monitoring concept',
    contributions: ['Backend development', 'Interface and experience design', 'Environmental-data workflow design'], color: '#ffca70',
    overview: 'A local-first environmental data platform bringing sensor observations and predictive signals into one map-led view.',
    problem: 'Communities and smaller organizations often lack accessible, localized environmental readings for informed action.',
    solution: 'CarbonWatch combines connected sensor data, backend services, prediction, and geospatial presentation for neighborhood-level context.',
    architecture: 'IoT sensors → cloud ingestion → Node.js services → MySQL → Mapbox-powered mobile interface.',
    challenges: 'Representing varied environmental signals without implying false precision, while keeping the experience useful to non-specialists.',
    outcome: 'A system concept connecting IoT data, predictive trends, and map-based environmental reporting.',
    links: {},
  },
  {
    number: '04', name: 'SentryMesh', tagline: 'AI-Powered Disaster Response Application', category: 'AI · Disaster Response · Mobile',
    description: 'An AI-driven disaster response system featuring predictive alerts, safe-route navigation for residents and evacuation centers, and an equity-first approach to rescue prioritization.',
    technologies: ['Flutter', 'AI Prediction', 'Maps & Navigation', 'Backend APIs', 'Figma', 'Lucidchart'],
    highlights: ['Predictive emergency alerts', 'Safe-route navigation', 'Evacuation-center support', 'Risk monitoring', 'Equity-first rescue prioritization'],
    role: 'Frontend Developer, UI/UX Designer & Systems Analyst', context: 'ASEAN AI Hackathon prototype',
    contributions: ['Frontend development', 'UI/UX design', 'Systems analysis and workflow modeling'], color: '#a9a7ff',
    overview: 'A disaster-response platform designed to turn risk signals into clear alerts, safer navigation, and better-informed rescue coordination.',
    problem: 'During emergencies, residents and response teams need timely risk information, accessible evacuation guidance, and a fair way to prioritize people who need help most.',
    solution: 'SentryMesh brings predictive alerts, safe-route guidance, evacuation-center information, and equity-aware rescue prioritization into one coordinated experience.',
    architecture: 'User-facing application → disaster and location data services → AI-assisted risk analysis → alerts, routes, and response coordination.',
    challenges: 'Presenting urgent information clearly, designing dependable navigation flows, and translating equity-first response principles into understandable system behavior.',
    outcome: 'The project advanced to the Top 16 of the ASEAN AI Hackathon in Vietnam within the Climate Change track.',
    links: {},
  },
]

export const additionalProjects: AdditionalProject[] = [
  {
    number: '05',
    name: 'MasterBaker',
    tagline: 'Gamified Baking Learning App',
    category: 'Mobile Learning / Gamification',
    description: 'A mobile learning application that teaches baking through interactive lessons and game-based progression.',
    role: 'UI/UX Designer, Backend Developer & Systems Analyst',
  },
  {
    number: '06',
    name: 'EllaQuest',
    tagline: 'Gamified AI Learning Platform',
    category: 'AI / Education / Gamification',
    description: 'An AI-powered classroom platform with quiz-based engagement features designed to improve student participation.',
    role: 'Backend Developer & Systems Analyst',
  },
  {
    number: '07',
    name: 'TipAId',
    tagline: 'AI-Powered Budgeting Assistant',
    category: 'AI / Finance / Utility',
    description: 'An assistant that helps users calculate fair tips and split shared bills quickly.',
    role: 'Full-Stack Developer',
  },
]

export const experience: Experience[] = [
  { year: 'Work immersion', role: 'Quality Assurance Intern', organization: 'QA in Game · Naga City', description: 'Performed functional and regression testing, documented issues, communicated defects, and verified fixes during a two-week immersion.' },
  { year: '2025–26', role: 'Startup & Hackathon Projects', organization: 'Regional and international competitions', description: 'Built and presented time-bound solutions across disaster response, climate technology, agriculture, geospatial systems, and AI.' },
  { year: 'Current', role: 'Software & Academic Project Leadership', organization: 'Naga College Foundation', description: 'Leading multidisciplinary software projects from problem framing and system design through prototype delivery.' },
  { year: 'Current', role: 'Business Manager', organization: 'College of Computer Studies', description: 'Supporting student initiatives, coordination, and responsible resource planning within the college community.' },
  { year: 'Current', role: 'Treasurer', organization: 'Panthera Tigris Game Dev', description: 'Managing financial records, budgeting, and resource coordination for the organization’s game-development activities.' },
]

export const achievements = [
  { title: 'Cum Laude Candidate', note: 'Academic distinction candidate', category: 'Academic & Certification' },
  { title: "Dean's Lister", note: 'Academic recognition', category: 'Academic & Certification' },
  { title: 'Microsoft Word Certification', note: 'Professional certification', category: 'Academic & Certification' },
  { title: 'ASEAN AI Hackathon', note: 'Top 16 finalist · Vietnam · 2026', category: 'Startup & Hackathon' },
  { title: '1st Naga City Mayoral Hackathon', note: 'Runner-up · 2026', category: 'Startup & Hackathon' },
  { title: 'Young Farmers Challenge', note: 'Municipal winner · 2026', category: 'Startup & Hackathon' },
  { title: 'Arduino Day Philippines', note: 'Top 10 Finalist · 2026', category: 'Startup & Hackathon' },
  { title: 'Geo AI Hackathon', note: 'Semifinalist · Thailand · 2026', category: 'Startup & Hackathon' },
  { title: 'TEKNOFEST', note: 'Semifinalist · Turkey · 2026', category: 'Startup & Hackathon' },
]

