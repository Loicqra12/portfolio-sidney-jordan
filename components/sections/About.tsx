'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/* ── Domaines d'expertise — colonne droite ── */
const domains = [
  {
    category: 'Développement',
    items: ['React / Next.js', 'Flutter & Dart', 'Node.js / Laravel', 'UI/UX & Design'],
  },
  {
    category: 'Entrepreneuriat',
    items: ['Soutrali Deals', 'ChapeChapeRésidence', 'Onloutou', 'Djorcy'],
  },
  {
    category: 'Think Tank & IA',
    items: ['Terrain Futur', 'Abakoun AI', 'Souveraineté numérique', 'Prospective africaine'],
  },
]

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#070d18' }}>
      <div className="container-custom">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Qui suis-je
          </p>
          <h2 className="section-title mb-6">
            À propos{' '}
            <span
              className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}
            >
              de moi
            </span>
          </h2>
        </motion.div>

        {/* ══════════════════════════════════════
            LAYOUT 3 COLONNES — inspiré capture 2
            [ Photo ] [ Pitch texte ] [ Domaines ]
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-12 items-start">

          {/* ── COL 1 — Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Glow subtil */}
            <div
              className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full blur-[80px] -z-10 pointer-events-none"
              style={{ backgroundColor: 'rgba(74,127,165,0.12)' }}
            />

            <div className="relative overflow-hidden rounded-3xl bg-[#0f1117]"
              style={{ border: '1px solid #1e2530' }}>
              <Image
                src="/images/hero/about.png"
                alt="Sir Sidney Jordan"
                width={480}
                height={600}
                className="w-full h-auto object-cover object-top"
                priority
                style={{ filter: 'contrast(1.05) brightness(0.9)' }}
              />
              {/* Fade bas */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#070d18] to-transparent" />

              {/* Badge bas */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-5 left-5 right-5 rounded-xl px-4 py-3"
                style={{
                  backgroundColor: 'rgba(10,14,24,0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="text-white font-bold text-sm">Sir Sidney Jordan</p>
                <p className="text-gray-500 text-xs mt-0.5">Côte d'Ivoire · Remote</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── COL 2 — Pitch texte (centre) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Pitch principal */}
            <div>
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                Je suis un développeur full-stack passionné par la technologie,
                la philosophie et l'étude des comportements humains.
              </p>
            </div>

            {/* Séparateur */}
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />

            {/* Corps */}
            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">
                J'ai construit mon parcours à la croisée des mondes — du développement web et mobile
                à la sécurité réseau, de la gestion de projets digitaux à la création d'entreprises tech.
                Co-fondateur et CEO/COO de Soutrali Deals, CTO de Onloutou et ChapeChapeRésidence.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Je crois que la technologie doit servir l'humain. Chaque ligne de code est une tentative
                de transformer l'informel en formel, de créer des ponts entre savoir, innovation et société.
                L'interdisciplinarité est ma méthode.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Mon ambition : bâtir un écosystème numérique africain qui valorise nos talents,
                digitalise l'informel et construit une souveraineté intellectuelle durable à travers
                Terrain Futur et Abakoun.
              </p>
            </div>

            {/* Séparateur bas */}
            <div className="h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

            {/* Méta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <span>Basé à Côte d'Ivoire</span>
              <span>·</span>
              <span>Disponible Remote</span>
              <span>·</span>
              <span>5+ ans d'expérience</span>
            </div>
          </motion.div>

          {/* ── COL 3 — Domaines (droite) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-28"
          >
            {domains.map((domain, dIdx) => (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: dIdx * 0.12 }}
                viewport={{ once: true }}
              >
                {/* Label catégorie */}
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">
                  {domain.category}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {domain.items.map((item, iIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: dIdx * 0.12 + iIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Séparateur entre catégories */}
                {dIdx < domains.length - 1 && (
                  <div className="mt-8 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
