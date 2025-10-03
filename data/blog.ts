export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: 'philosophy' | 'psychology' | 'geopolitics' | 'technology' | 'personal'
  readTime: number // en minutes
  featured: boolean
  image: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'philosophy-tech-1',
    title: 'L\'éthique dans le développement : une réflexion personnelle',
    excerpt: 'Comment concilier innovation technologique et valeurs humaines dans nos projets de développement.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-01-15',
    tags: ['éthique', 'développement', 'innovation', 'valeurs'],
    category: 'philosophy',
    readTime: 8,
    featured: true,
    image: '/images/blog/ethics-tech.jpg',
    slug: 'ethique-developpement-reflexion'
  },
  {
    id: 'psychology-1',
    title: 'La psychologie de l\'utilisateur : comprendre pour mieux concevoir',
    excerpt: 'Exploration des mécanismes psychologiques qui influencent l\'expérience utilisateur.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-01-10',
    tags: ['psychologie', 'UX', 'design', 'comportement'],
    category: 'psychology',
    readTime: 12,
    featured: true,
    image: '/images/blog/psychology-ux.jpg',
    slug: 'psychologie-utilisateur-conception'
  },
  {
    id: 'geopolitics-1',
    title: 'L\'impact géopolitique de la souveraineté numérique',
    excerpt: 'Analyse des enjeux géopolitiques liés à la souveraineté technologique des nations.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-01-05',
    tags: ['géopolitique', 'souveraineté', 'technologie', 'enjeux'],
    category: 'geopolitics',
    readTime: 15,
    featured: true,
    image: '/images/blog/geopolitics-tech.jpg',
    slug: 'impact-geopolitique-souverainete-numerique'
  },
  {
    id: 'tech-1',
    title: 'L\'avenir du développement web : tendances et perspectives',
    excerpt: 'Exploration des technologies émergentes et de leur impact sur le développement web.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2023-12-20',
    tags: ['développement', 'web', 'tendances', 'futur'],
    category: 'technology',
    readTime: 10,
    featured: true,
    image: '/images/blog/future-web-dev.jpg',
    slug: 'avenir-developpement-web-tendances'
  },
  {
    id: 'entrepreneurship-1',
    title: 'L\'entrepreneuriat africain à l\'ère du numérique',
    excerpt: 'Comment l\'innovation technologique transforme l\'écosystème entrepreneurial africain.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-02-10',
    tags: ['entrepreneuriat', 'Afrique', 'innovation', 'numérique'],
    category: 'personal',
    readTime: 14,
    featured: true,
    image: '/images/blog/african-entrepreneurship.jpg',
    slug: 'entrepreneuriat-africain-numerique'
  },
  {
    id: 'cybersecurity-1',
    title: 'Cybersécurité en Afrique : défis et opportunités',
    excerpt: 'Analyse des enjeux de sécurité numérique dans le contexte africain.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-02-05',
    tags: ['cybersécurité', 'Afrique', 'sécurité', 'numérique'],
    category: 'technology',
    readTime: 11,
    featured: true,
    image: '/images/blog/cybersecurity-africa.jpg',
    slug: 'cybersecurite-afrique-defis-opportunites'
  },
  {
    id: 'ai-ethics-1',
    title: 'Intelligence Artificielle et éthique : perspectives africaines',
    excerpt: 'Réflexion sur l\'IA éthique et responsable dans le contexte africain.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-01-25',
    tags: ['IA', 'éthique', 'Afrique', 'responsabilité'],
    category: 'philosophy',
    readTime: 13,
    featured: true,
    image: '/images/blog/ai-ethics-africa.jpg',
    slug: 'intelligence-artificielle-ethique-afrique'
  },
  {
    id: 'blockchain-1',
    title: 'Blockchain et transformation digitale en Afrique',
    excerpt: 'Comment la blockchain peut révolutionner les services financiers africains.',
    content: 'Contenu complet de l\'article...',
    author: 'Sir Sidney Jordan',
    publishedAt: '2024-01-20',
    tags: ['blockchain', 'fintech', 'Afrique', 'transformation'],
    category: 'technology',
    readTime: 16,
    featured: true,
    image: '/images/blog/blockchain-africa.jpg',
    slug: 'blockchain-transformation-digitale-afrique'
  }
]



