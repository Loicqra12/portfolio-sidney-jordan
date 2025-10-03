export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'other'
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'chapechape-residence',
    title: 'ChapeChape Résidence',
    description: 'Application mobile et site web pour la gestion de résidences et logements',
    longDescription: 'Solution complète de gestion résidentielle avec application mobile Flutter et site web React, permettant la gestion des logements, la communication et les services résidentiels.',
    image: '/images/projects/chape-1.png',
    technologies: ['Flutter', 'Bloc', 'React TS', 'Tailwind CSS', 'MERN Stack'],
    category: 'mobile',
    status: 'completed',
    githubUrl: 'https://github.com/sir-sidney-jordan/chapechape-residence',
    liveUrl: 'https://chapechape-residence.com',
    featured: true
  },
  {
    id: 'onloutou',
    title: 'Onloutou',
    description: 'Plateforme de location et vente de biens de tout type',
    longDescription: 'Application web complète avec dashboard pour la location et vente de biens, développée avec Next.js et Tailwind CSS.',
    image: '/images/projects/onloutou-1.png',
    technologies: ['Next.js', 'Tailwind CSS', 'React TSX', 'Node.js'],
    category: 'web',
    status: 'in-progress',
    githubUrl: 'https://github.com/sir-sidney-jordan/onloutou',
    featured: true
  },
  {
    id: 'apa-allo-pieces-auto',
    title: 'APA (Allo Pièces Auto)',
    description: 'Application web & mobile pour la gestion des pièces automobiles',
    longDescription: 'Écosystème marketplace complet pour la gestion des pièces automobiles avec interface utilisateur moderne et système de gestion avancé.',
    image: '/images/projects/apa-1.png',
    technologies: ['React TSX', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    category: 'web',
    status: 'in-progress',
    githubUrl: 'https://github.com/sir-sidney-jordan/apa',
    featured: true
  },
  {
    id: 'ovpr-objets-voles',
    title: 'OVPR (Objets Volés/Perdus/Retrouvés)',
    description: 'Application web & mobile pour signaler et retrouver des objets',
    longDescription: 'Plateforme innovante utilisant la géolocalisation pour permettre aux utilisateurs de signaler et retrouver des objets perdus ou volés.',
    image: '/images/projects/ovpr-1.png',
    technologies: ['React JS', 'Tailwind CSS', 'Laravel', 'PHP'],
    category: 'web',
    status: 'in-progress',
    githubUrl: 'https://github.com/sir-sidney-jordan/ovpr',
    featured: true
  },
  {
    id: 'soutrali-deals',
    title: 'Soutrali Deals',
    description: 'Écosystème numérique africain - freelance, marketplace, digitalisation',
    longDescription: 'Écosystème complet de digitalisation de l\'informel africain avec plateforme freelance, marketplace et outils de digitalisation pour les entrepreneurs.',
    image: '/images/projects/soutrali-1.png',
    technologies: ['Flutter', 'Bloc/Cubit', 'React TSX', 'Material UI'],
    category: 'mobile',
    status: 'in-progress',
    githubUrl: 'https://github.com/sir-sidney-jordan/soutrali-deals',
    liveUrl: 'https://soutrali-deals.com',
    featured: true
  }
]


