# Portfolio Personnel

Un portfolio moderne développé avec Next.js, React, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📁 Structure du projet

```
portfolio/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── layout/           # Navigation, Footer
│   └── sections/         # Sections de page
├── data/                 # Données statiques
│   ├── projects.ts       # Projets
│   ├── skills.ts         # Compétences
│   ├── experience.ts     # Expériences
│   └── blog.ts           # Articles de blog
├── lib/                  # Utilitaires
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
    └── images/           # Images et logos
```

## 🎨 Design System

### Couleurs
- **Primary**: Bleu foncé (#1e3a8a)
- **Accent**: Bleu clair (#0ea5e9)
- **Background**: Blanc et gris clair
- **Text**: Gris foncé

### Typographie
- **Sans-serif**: Inter (corps de texte)
- **Display**: Poppins (titres)

## 📱 Responsive Design

- **Mobile First**: Design optimisé pour mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid et Flexbox

## 🚀 Installation et développement

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

## 📂 Où placer vos assets

### Images et logos
```
public/
├── images/
│   ├── projects/         # Images des projets
│   │   ├── soutrali-deals.jpg
│   │   ├── chapechaperesidence.jpg
│   │   ├── onloutou.jpg
│   │   └── abakoun.jpg
│   ├── blog/            # Images des articles
│   │   ├── ethics-tech.jpg
│   │   ├── psychology-ux.jpg
│   │   ├── geopolitics-tech.jpg
│   │   └── future-web-dev.jpg
│   ├── certifications/  # Images des certifications
│   │   ├── aws-certified.jpg
│   │   ├── react-certification.jpg
│   │   └── google-cloud.jpg
│   └── profile/         # Votre photo de profil
│       └── profile.jpg
```

### Formats recommandés
- **Images projets**: 800x600px, format WebP ou JPG
- **Images blog**: 1200x630px, format WebP ou JPG
- **Logo/Photo profil**: 400x400px, format PNG ou JPG
- **Certifications**: 300x200px, format JPG

## 🔧 Personnalisation

### 1. Informations personnelles
Modifiez les fichiers dans `/data/` :
- `projects.ts` - Vos projets
- `skills.ts` - Vos compétences
- `experience.ts` - Vos expériences
- `blog.ts` - Vos articles

### 2. Métadonnées
Modifiez `app/layout.tsx` :
- Titre du site
- Description
- Mots-clés SEO

### 3. Couleurs
Modifiez `tailwind.config.js` :
- Palette de couleurs
- Variables CSS personnalisées

## 🚀 Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement à chaque push

## 📈 Optimisations

- **Performance**: Images optimisées, lazy loading
- **SEO**: Métadonnées complètes, sitemap
- **Accessibilité**: ARIA labels, navigation clavier
- **Core Web Vitals**: Optimisé pour les métriques Google

## 🤝 Contribution

Ce portfolio est personnalisable. N'hésitez pas à :
- Ajouter de nouvelles sections
- Modifier le design
- Améliorer les performances
- Ajouter de nouvelles fonctionnalités




