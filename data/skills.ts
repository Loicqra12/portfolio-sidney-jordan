export interface Skill {
  id: string
  name: string
  level: number // 1-5
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'design' | 'other'
  icon?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  image: string
}

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', level: 5, category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', level: 5, category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', level: 4, category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', level: 5, category: 'frontend' },
  { id: 'html', name: 'HTML5', level: 5, category: 'frontend' },
  { id: 'css', name: 'CSS3', level: 5, category: 'frontend' },

  // Backend
  { id: 'nodejs', name: 'Node.js', level: 4, category: 'backend' },
  { id: 'express', name: 'Express.js', level: 4, category: 'backend' },
  { id: 'python', name: 'Python', level: 3, category: 'backend' },
  { id: 'php', name: 'PHP', level: 4, category: 'backend' },
  { id: 'laravel', name: 'Laravel', level: 4, category: 'backend' },

  // Mobile
  { id: 'react-native', name: 'React Native', level: 4, category: 'mobile' },
  { id: 'flutter', name: 'Flutter', level: 3, category: 'mobile' },

  // Databases
  { id: 'mongodb', name: 'MongoDB', level: 4, category: 'backend' },
  { id: 'mysql', name: 'MySQL', level: 4, category: 'backend' },
  { id: 'postgresql', name: 'PostgreSQL', level: 3, category: 'backend' },

  // DevOps
  { id: 'git', name: 'Git', level: 5, category: 'devops' },
  { id: 'docker', name: 'Docker', level: 3, category: 'devops' },
  { id: 'aws', name: 'AWS', level: 3, category: 'devops' },

  // Design
  { id: 'figma', name: 'Figma', level: 4, category: 'design' },
  { id: 'adobe-xd', name: 'Adobe XD', level: 3, category: 'design' },
]

export const certifications: Certification[] = [
  {
    id: 'freecodecamp-backend',
    title: 'Back End Development and APIs',
    issuer: 'freeCodeCamp',
    date: '2026-04-29',
    url: 'https://freecodecamp.org/certification/sidney-jordan-yao-bindedou/back-end-development-and-apis',
    image: '/images/certifications/freecodecamp.png'
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2025-06-20',
    url: 'https://coursera.org/verify/professional-cert/V4YMOPRHC38U',
    image: '/images/certifications/meta.png'
  },
  {
    id: 'ibm-generative-ai',
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM (Coursera)',
    date: '2026-02-11',
    url: 'https://coursera.org/verify/DEHSS463452D',
    image: '/images/certifications/ibm.png'
  },
  {
    id: 'google-play-it-safe',
    title: 'Play It Safe: Manage Security Risks',
    issuer: 'Google (Coursera)',
    date: '2024-01-15',
    url: 'https://www.coursera.org/',
    image: '/images/certifications/coursera.png'
  },
  {
    id: 'michigan-emotional-intelligence',
    title: 'Emotional Intelligence: Cultivating Immensely Human Interactions',
    issuer: 'University of Michigan',
    date: '2023-12-10',
    url: 'https://www.coursera.org/',
    image: '/images/certifications/michigan.png'
  },
  {
    id: 'cisco-cyber-threat',
    title: 'Cyber Threat Management',
    issuer: 'Cisco',
    date: '2023-11-20',
    url: 'https://www.cisco.com/',
    image: '/images/certifications/cisco.png'
  },
  {
    id: 'hubspot-digital-marketing',
    title: 'Digital Marketing',
    issuer: 'HubSpot Academy',
    date: '2023-10-15',
    url: 'https://academy.hubspot.com/',
    image: '/images/certifications/marketing.png'
  },
]


