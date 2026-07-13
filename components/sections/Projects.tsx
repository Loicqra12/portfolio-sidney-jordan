'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { Github, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react'

const statusConfig = {
  completed: { label: 'Terminé', color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  'in-progress': { label: 'En cours', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)' },
  planned: { label: 'Planifié', color: '#6b7280', bg: 'rgba(107,114,128,0.1)', border: 'rgba(107,114,128,0.3)' },
}

const featured = projects.filter(p => p.featured)

/* ── Positions des cartes en éventail ── */
const getFanStyle = (index: number, active: number, total: number) => {
  const offset = index - active
  const absOffset = Math.abs(offset)

  /* Carte active : grande, au centre */
  if (offset === 0) return {
    zIndex: 10,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
  }

  /* Cartes adjacentes */
  const dir = offset > 0 ? 1 : -1
  return {
    zIndex: 10 - absOffset,
    x: dir * absOffset * 90,
    y: absOffset * 18,
    rotate: dir * absOffset * 7,
    scale: 1 - absOffset * 0.1,
    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.15,
  }
}

const Projects = () => {
  const [active, setActive] = useState(0)
  const total = featured.length
  const current = featured[active]
  const st = statusConfig[current.status]

  const prev = () => setActive(a => (a - 1 + total) % total)
  const next = () => setActive(a => (a + 1) % total)

  /* Auto-play toutes les 3 secondes */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % total)
    }, 3000)
    return () => clearInterval(timer)
  }, [total])

  return (
    <section id="projects" className="section-padding bg-transparent overflow-hidden">
      <div className="container-custom">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4">
            Ce que j'ai bâti
          </p>
          <h2 className="section-title mb-6">
            Mes{' '}
            <span className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}>
              Projets
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez mes réalisations les plus marquantes et les technologies que j'utilise
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            LAYOUT 2 COLONNES
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── COL GAUCHE — Infos projet ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Status */}
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6"
                  style={{ color: st.color, backgroundColor: st.bg, border: `1px solid ${st.border}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.color }} />
                  {st.label}
                </span>

                {/* Titre */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  {current.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: 'rgba(74,127,165,0.1)',
                        border: '1px solid rgba(74,127,165,0.25)',
                        color: '#6b9fc4',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex gap-4">
                  {current.githubUrl && (
                    <a
                      href={current.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                      style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(74,127,165,0.5)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e2530' }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {current.liveUrl && (
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                      style={{ backgroundColor: '#4a7fa5' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3a6a8a' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4a7fa5' }}
                    >
                      <ExternalLink size={16} />
                      Voir le projet
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,127,165,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2530')}
              >
                <ArrowLeft size={16} className="text-gray-400" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 6,
                      height: 6,
                      backgroundColor: i === active ? '#4a7fa5' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,127,165,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2530')}
              >
                <ArrowRight size={16} className="text-gray-400" />
              </button>

              <span className="text-xs text-gray-700 font-medium ml-2">
                {active + 1} / {total}
              </span>
            </div>
          </motion.div>

          {/* ── COL DROITE — Éventail de screenshots ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
            style={{ height: 'clamp(280px, 50vw, 420px)' }}
          >
            {featured.map((project, index) => {
              const style = getFanStyle(index, active, total)
              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: style.x,
                    y: style.y,
                    rotate: style.rotate,
                    scale: style.scale,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
                  onClick={() => setActive(index)}
                  className="absolute cursor-pointer"
                  style={{ width: 'min(280px, 75vw)', transformOrigin: 'bottom center' }}
                >
                  <div
                    className="overflow-hidden rounded-2xl shadow-2xl"
                    style={{
                      border: index === active
                        ? '2px solid rgba(74,127,165,0.6)'
                        : '1px solid rgba(255,255,255,0.08)',
                      boxShadow: index === active
                        ? '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(74,127,165,0.2)'
                        : '0 10px 30px rgba(0,0,0,0.4)',
                    }}
                  >
                    <div className="relative" style={{ height: 180 }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                      {/* Overlay sur les cartes non actives */}
                      {index !== active && (
                        <div className="absolute inset-0 bg-black/40" />
                      )}
                    </div>

                    {/* Footer card */}
                    <div
                      className="px-4 py-3"
                      style={{ backgroundColor: index === active ? '#0f1117' : '#0a0d14' }}
                    >
                      <p className="text-white font-bold text-sm truncate">{project.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 truncate">
                        {project.technologies.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects
