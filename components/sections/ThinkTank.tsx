'use client'

import { motion } from 'framer-motion'
import { Brain, Globe, Lightbulb, ExternalLink, Users, BookOpen, Zap } from 'lucide-react'

const Highlight = ({ children, color = '#4a7fa5' }: { children: React.ReactNode; color?: string }) => (
  <span className="relative inline-block px-2 py-0.5 rounded-sm font-bold text-white" style={{ backgroundColor: color }}>
    {children}
  </span>
)

const orgs = [
  {
    name: 'Terrain Futur',
    role: 'Fondateur',
    color: '#4a7fa5',
    iconBg: '#4a7fa5',
    linkedin: 'https://www.linkedin.com/company/terrain-futur/',
    Icon: Globe,
    tagline: 'Réflexion stratégique & prospective africaine',
    description:
      "Think tank dédié à la réflexion stratégique sur les enjeux technologiques, économiques et géopolitiques de l'Afrique. Terrain Futur produit des analyses, des cadres de pensée et des recommandations pour construire un futur équilibré et souverain.",
    pillars: [
      'Géopolitique & souveraineté',
      'Innovation & technologie',
      "Économie de l'informel",
      'Prospective africaine',
    ],
  },
  {
    name: 'Abakoun',
    role: 'Co-fondateur',
    color: '#d4a843',
    iconBg: '#d4a843',
    linkedin: 'https://www.linkedin.com/company/abakounai/',
    Icon: Brain,
    tagline: "Souveraineté intellectuelle africaine par l'IA",
    description:
      "Initiative dédiée à la construction d'une souveraineté intellectuelle africaine à travers l'intelligence artificielle. Abakoun travaille à valoriser les savoirs, les langues et les cultures africaines dans les systèmes d'IA.",
    pillars: [
      'IA & cultures africaines',
      'Souveraineté des données',
      'Langues & savoirs locaux',
      'Éducation & recherche',
    ],
  },
]

const reasons = [
  {
    Icon: BookOpen,
    title: "L'interdisciplinarité comme méthode",
    text: "Je crois que les problèmes complexes nécessitent des regards croisés — technologie, philosophie, histoire, psychologie, géopolitique.",
    color: '#ffffff',
  },
  {
    Icon: Users,
    title: 'Construire des ponts',
    text: "Entre décideurs et praticiens, chercheurs et entrepreneurs, générations. Un think tank crée des espaces où ces dialogues deviennent possibles.",
    color: '#ffffff',
  },
  {
    Icon: Zap,
    title: 'Transformer la pensée en action',
    text: "La réflexion sans action reste stérile. L'objectif : produire des idées qui ont un impact concret sur les politiques et les communautés africaines.",
    color: '#ffffff',
  },
  {
    Icon: Lightbulb,
    title: 'Le Nexus Africain',
    text: "Ma vision : \"La Forge des Savoirs\" — un écosystème où les talents africains transforment l'informel en puissance technologique mondiale.",
    color: '#ffffff',
  },
]

const ThinkTank = () => {
  return (
    <section
      id="thinktank"
      className="relative section-padding overflow-hidden"
    >
      {/* ══════════════════════════════════════
          FOND GLOBE TERRESTRE — CSS pur
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 -z-10">
        {/* Ciel spatial */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #020818 0%, #041535 40%, #062860 70%, #041535 100%)',
          }}
        />

        {/* Globe — grand cercle en bas centré */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '-55vw',
            width: '130vw',
            height: '130vw',
            maxWidth: '1800px',
            maxHeight: '1800px',
            borderRadius: '50%',
            background: `
              radial-gradient(ellipse at 35% 30%, #1a6b9a 0%, transparent 50%),
              radial-gradient(ellipse at 70% 20%, #0e4d7a 0%, transparent 45%),
              radial-gradient(ellipse at 50% 60%, #0a3a60 0%, transparent 55%),
              linear-gradient(180deg, #1e6fa0 0%, #0d4a75 30%, #083558 60%, #041e35 100%)
            `,
            boxShadow: '0 0 120px 40px rgba(14,100,160,0.25), inset 0 0 80px rgba(0,180,255,0.08)',
          }}
        />

        {/* Atmosphère — halo lumineux sur le bord du globe */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '-55vw',
            width: '132vw',
            height: '132vw',
            maxWidth: '1830px',
            maxHeight: '1830px',
            borderRadius: '50%',
            background: 'transparent',
            boxShadow: '0 0 60px 20px rgba(0,200,255,0.12), 0 0 120px 40px rgba(0,150,220,0.06)',
          }}
        />

        {/* Nuages — taches claires sur le globe */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: '-52vw',
            width: '125vw',
            height: '125vw',
            maxWidth: '1750px',
            maxHeight: '1750px',
            borderRadius: '50%',
            background: `
              radial-gradient(ellipse 20% 8% at 25% 15%, rgba(180,210,240,0.18) 0%, transparent 100%),
              radial-gradient(ellipse 30% 6% at 60% 10%, rgba(200,225,245,0.12) 0%, transparent 100%),
              radial-gradient(ellipse 15% 5% at 80% 25%, rgba(180,210,240,0.10) 0%, transparent 100%),
              radial-gradient(ellipse 25% 7% at 40% 35%, rgba(200,225,245,0.08) 0%, transparent 100%)
            `,
          }}
        />

        {/* Étoiles */}
        {[
          { top: '8%', left: '12%', s: 2 },
          { top: '15%', left: '85%', s: 1.5 },
          { top: '5%', left: '55%', s: 1 },
          { top: '22%', left: '30%', s: 1.5 },
          { top: '10%', left: '70%', s: 2 },
          { top: '18%', left: '45%', s: 1 },
          { top: '3%', left: '90%', s: 1.5 },
          { top: '25%', left: '5%', s: 1 },
        ].map((star, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            className="absolute rounded-full bg-white"
            style={{ top: star.top, left: star.left, width: star.s, height: star.s }}
          />
        ))}

        {/* Overlay sombre en haut pour la lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(2,8,24,0.7) 0%, rgba(2,8,24,0.3) 40%, rgba(2,8,24,0.1) 60%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[#60a5fa] mb-4"
          >
            Au-delà du code
          </motion.p>
          <h2 className="section-title mb-6">
            Think <Highlight color="#4a7fa5">Tank</Highlight>{' '}
            &{' '}
            <Highlight color="#d4a843">Vision</Highlight>
          </h2>
          <p className="section-subtitle mx-auto">
            Je ne suis pas seulement développeur. Je suis aussi penseur, stratège et bâtisseur d'idées pour l'Afrique de demain.
          </p>
        </motion.div>

        {/* ── Les 2 organisations ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {orgs.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 90 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-400"
              style={{
                background: 'rgba(10,14,28,0.75)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${org.color}30`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${org.color}70`
                  ; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 50px ${org.color}20`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${org.color}30`
                  ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              {/* Barre colorée top */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: org.color }} />

              {/* Glow coin */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none"
                style={{ backgroundColor: org.color }} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icône transparente */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      <org.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{org.name}</h3>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ color: org.color, backgroundColor: `${org.color}20` }}
                      >
                        {org.role}
                      </span>
                    </div>
                  </div>

                  <a
                    href={org.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-3 py-2 rounded-xl"
                  >
                    <ExternalLink size={12} />
                    LinkedIn
                  </a>
                </div>

                <p className="text-sm font-semibold mb-4" style={{ color: org.color }}>
                  — {org.tagline}
                </p>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {org.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {org.pillars.map(p => (
                    <span
                      key={p}
                      className="text-xs px-3 py-1.5 rounded-full border font-medium"
                      style={{ color: org.color, borderColor: `${org.color}35`, backgroundColor: `${org.color}10` }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Pourquoi le think tank ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <h3 className="text-lg font-bold text-white px-4">
              Pourquoi le{' '}
              <span style={{ color: '#60a5fa' }}>think tank</span>{' '}
              m'anime
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className="group rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: 'rgba(10,14,28,0.70)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${reason.color}40`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                {/* Icône transparente */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <reason.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {reason.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ThinkTank
