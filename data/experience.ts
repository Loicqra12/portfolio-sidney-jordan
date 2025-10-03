export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  type: 'work' | 'education' | 'project' | 'competition' | 'hackathon'
}

export const experiences: Experience[] = [
  // Leadership & Entrepreneuriat
  {
    id: 'soutrali-deals-ceo',
    title: 'Co-Founder & CEO/COO',
    company: 'Soutrali Deals',
    location: 'Côte d\'Ivoire',
    startDate: '2023-01-01',
    current: true,
    description: 'Supervision opérationnelle et stratégique : coordination des équipes développement, produit, marketing et communication.',
    achievements: [
      'Pilotage des déploiements (apps mobiles, dashboard, site web)',
      'Recrutement et gestion des partenariats',
      'Coordination des équipes cross-fonctionnelles'
    ],
    technologies: ['Flutter', 'React TSX', 'Material UI', 'Node.js'],
    type: 'work'
  },
  {
    id: 'chapechape-cto',
    title: 'Co-Founder & CTO',
    company: 'ChapeChapeRésidence',
    location: 'Côte d\'Ivoire',
    startDate: '2025-01-01',
    current: true,
    description: 'Conception et réalisation de l\'architecture complète (A → Z) : application mobile (Flutter, BLoC), backend, UI/UX et intégration.',
    achievements: [
      'Déploiement de la plateforme de réservation',
      'Fonctionnalités de réservation à l\'heure',
      'Gestion des annonces et paiement'
    ],
    technologies: ['Flutter', 'BLoC', 'React TS', 'Tailwind CSS', 'MERN Stack'],
    type: 'work'
  },
  {
    id: 'onloutou-cto',
    title: 'CTO / Chef de projet',
    company: 'Onloutou',
    location: 'Côte d\'Ivoire',
    startDate: '2024-06-01',
    current: true,
    description: 'Conception technique et product ownership : architecture Next.js + Tailwind pour l\'interface web, design du dashboard et intégration back-end.',
    achievements: [
      'Mise en place des process de développement',
      'CI/CD et tests automatisés',
      'Architecture scalable et performante'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'React TSX', 'Node.js'],
    type: 'work'
  },
  {
    id: 'terrain-futur-founder',
    title: 'Fondateur',
    company: 'Terrain Futur (Think Tank)',
    location: 'Côte d\'Ivoire',
    startDate: '2023-09-01',
    current: true,
    description: 'Lancement d\'un espace de réflexion et de recherche sur technologies, politique et développement local.',
    achievements: [
      'Organisation d\'ateliers et de publications internes',
      'Recherche sur l\'innovation locale',
      'Formation et sensibilisation'
    ],
    technologies: ['Recherche', 'Formation', 'Innovation'],
    type: 'work'
  },
  // Hackathons & Concours
  {
    id: 'orange-fab',
    title: 'Participant - Orange Fab',
    company: 'Orange Fab (avec Soutrali Deals)',
    location: 'Côte d\'Ivoire',
    startDate: '2023-05-01',
    endDate: '2023-12-31',
    current: false,
    description: 'Participation au programme d\'accélération d\'Orange : scale-up, fintech/paiements mobiles, IoT, services numériques B2B/B2C, e-santé, agritech.',
    achievements: [
      'Relation avec l\'écosystème d\'accélération d\'Orange',
      'Développement de solutions fintech',
      'Réseautage avec investisseurs'
    ],
    technologies: ['Fintech', 'IoT', 'E-santé', 'Agritech'],
    type: 'competition'
  },
  {
    id: 'pejedec-cipme',
    title: 'Participant - PEJEDEC/CIPME',
    company: 'PEJEDEC/CIPME (avec Soutrali Deals)',
    location: 'Côte d\'Ivoire',
    startDate: '2023-03-01',
    endDate: '2023-11-30',
    current: false,
    description: 'Participation aux volets concours & accompagnement entrepreneurial : entrepreneuriat local, formalisation de l\'informel, formation professionnelle, microentreprises numériques.',
    achievements: [
      'Formation en entrepreneuriat',
      'Compétition de business plans',
      'Accompagnement financier et technique'
    ],
    technologies: ['Entrepreneuriat', 'Business Plan', 'Formation'],
    type: 'competition'
  },
  {
    id: 'google-habihack',
    title: 'Participant - Google HabiHack',
    company: 'Google HabiHack / Hackathon IA',
    location: 'Côte d\'Ivoire',
    startDate: '2023-08-01',
    endDate: '2023-08-31',
    current: false,
    description: 'Hackathon orienté IA / solutions d\'impact : détection d\'images, NLP pour services locaux, modèles de recommandation, optimisation de micro-transactions.',
    achievements: [
      'Développement de solutions IA',
      'Prototype fonctionnel',
      'Focus sur l\'impact social'
    ],
    technologies: ['IA/ML', 'NLP', 'Computer Vision', 'Python'],
    type: 'hackathon'
  },
  {
    id: 'crypto-hackathons',
    title: 'Participant - Hackathons Crypto/Blockchain',
    company: '1XBET, Crypto Nomads',
    location: 'Remote',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    current: false,
    description: 'Hackathons crypto portant sur smart contracts, DeFi, NFT, traçabilité, identité décentralisée : DeFi (prêts, staking), traçabilité supply chain, NFT pour économie créative locale.',
    achievements: [
      'Développement de smart contracts',
      'Solutions DeFi innovantes',
      'Sécurité des smart contracts'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'DeFi', 'NFT', 'Solidity'],
    type: 'hackathon'
  },
  {
    id: 'impact-hub-imp-hack',
    title: 'Participant - Imp\'Hack',
    company: 'Impact Hub & JLab Studio',
    location: 'Côte d\'Ivoire',
    startDate: '2023-07-01',
    endDate: '2023-07-31',
    current: false,
    description: 'Participation à un hackathon d\'innovation avec mise en place d\'un prototype fonctionnel.',
    achievements: [
      'Prototype fonctionnel développé',
      'Innovation sociale',
      'Collaboration avec Impact Hub'
    ],
    technologies: ['Innovation', 'Prototypage', 'Impact Social'],
    type: 'hackathon'
  },
  // Collaborations professionnelles
  {
    id: 'jlab-studio-quoridor',
    title: 'Projet Quoridor (Cybersécurité)',
    company: 'JLab Studio',
    location: 'Côte d\'Ivoire',
    startDate: '2023-10-01',
    endDate: '2024-02-29',
    current: false,
    description: 'Sécurisation d\'applications et sensibilisation aux risques numériques.',
    achievements: [
      'Audit de sécurité d\'applications',
      'Formation en cybersécurité',
      'Mise en place de bonnes pratiques'
    ],
    technologies: ['Cybersécurité', 'Audit', 'Formation'],
    type: 'project'
  },
  {
    id: 'djorcy-fullstack',
    title: 'Développement Full Stack',
    company: 'Djorcy',
    location: 'Remote',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    current: true,
    description: 'Conception et déploiement d\'applications web et mobiles pour des besoins clients variés.',
    achievements: [
      'Applications web et mobiles',
      'Solutions sur mesure',
      'Déploiement et maintenance'
    ],
    technologies: ['React', 'Flutter', 'Node.js', 'MongoDB'],
    type: 'work'
  },
  {
    id: 'universite-montreal-marketplace',
    title: 'Marketplace Progiciel',
    company: 'Université de Montréal (collaboration avec Diofevre)',
    location: 'Remote',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    current: true,
    description: 'Création d\'une marketplace progiciel en collaboration avec Diofevre.',
    achievements: [
      'Développement de marketplace',
      'Collaboration internationale',
      'Solutions progiciel'
    ],
    technologies: ['Marketplace', 'Progiciel', 'Collaboration'],
    type: 'project'
  },
  {
    id: 'learnix-aviation-app',
    title: 'App Aviation ATPL/PPL',
    company: 'Learnix (collaboration avec Flyby)',
    location: 'Espagne',
    startDate: '2024-03-01',
    endDate: '2024-12-31',
    current: true,
    description: 'Création d\'une application d\'aviation ATPL/PPL pour Flyby en Espagne.',
    achievements: [
      'Application spécialisée aviation',
      'Formation ATPL/PPL',
      'Collaboration internationale'
    ],
    technologies: ['Aviation', 'Formation', 'Mobile App'],
    type: 'project'
  }
]



