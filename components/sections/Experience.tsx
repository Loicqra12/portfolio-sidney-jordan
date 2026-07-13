'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { formatDate } from '@/lib/utils'

/* ── Badge type ── */
const typeConfig: Record<string, { label: string }> = {
  work: { label: 'Poste' },
  hackathon: { label: 'Hackathon' },
  competition: { label: 'Concours' },
  project: { label: 'Projet' },
  education: { label: 'Formation' },
}

/* ── Ordre chronologique + tri par importance ── */
const ordered = [...experiences].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
)

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="container-custom">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4">
            Mon histoire
          </p>
          <h2 className="section-title mb-6">
            Expériences &{' '}
            <span
              className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}
            >
              Réalisations
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mon parcours entrepreneurial, mes participations aux hackathons et mes collaborations
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════ */}
        <div className="relative">

          {/* Ligne centrale verticale */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4a7fa5]/80 via-[#4a7fa5]/40 to-transparent origin-top hidden md:block"
          />

          {/* Ligne mobile (gauche) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4a7fa5]/80 via-[#4a7fa5]/40 to-transparent origin-top md:hidden"
          />

          <div className="space-y-12">
            {ordered.map((exp, index) => {
              const isLeft = index % 2 === 0  /* Alterne gauche / droite sur desktop */
              const year = new Date(exp.startDate).getFullYear()

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.06, type: 'spring', stiffness: 90 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 ${isLeft
                      ? 'md:flex-row-reverse md:text-right'
                      : 'md:flex-row md:text-left'
                    } flex-row pl-16 md:pl-0`}
                >

                  {/* ── Point central + année ── */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-5 flex flex-col items-center gap-1 z-10">
                    {/* Cercle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.06 + 0.2 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full border-2 border-[#4a7fa5] bg-[#0a0a0f]"
                      style={{ boxShadow: '0 0 10px rgba(74,127,165,0.5)' }}
                    />
                    {/* Année */}
                    <span className="text-[10px] font-bold text-[#4a7fa5] hidden md:block whitespace-nowrap">
                      {year}
                    </span>
                  </div>

                  {/* ── Spacer centre (desktop) ── */}
                  <div className="hidden md:block md:w-1/2 flex-shrink-0" />

                  {/* ── Card ── */}
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group w-full md:w-[calc(50%-3rem)] flex-shrink-0"
                  >
                    <div
                      className="relative rounded-2xl p-6 transition-all duration-300"
                      style={{
                        backgroundColor: '#0f1117',
                        border: '1px solid #1e2530',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,127,165,0.4)'
                          ; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(74,127,165,0.08)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#1e2530'
                          ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                      }}
                    >
                      {/* Année mobile */}
                      <span className="text-[10px] font-bold text-[#4a7fa5] mb-2 block md:hidden">
                        {year}
                      </span>

                      {/* Header */}
                      <div className={`flex items-start gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                          {/* Badge type */}
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border mb-2 inline-block"
                            style={{
                              color: 'rgba(255,255,255,0.4)',
                              borderColor: 'rgba(255,255,255,0.1)',
                              backgroundColor: 'rgba(255,255,255,0.03)',
                            }}
                          >
                            {typeConfig[exp.type]?.label}
                          </span>

                          <h4 className="text-base font-bold text-white leading-snug group-hover:text-[#6b9fc4] transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-[#4a7fa5] text-sm font-medium mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        {/* Status pill */}
                        <span
                          className="flex-shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full mt-1"
                          style={{
                            backgroundColor: exp.current
                              ? 'rgba(74,127,165,0.15)'
                              : 'rgba(255,255,255,0.05)',
                            color: exp.current ? '#6b9fc4' : 'rgba(255,255,255,0.3)',
                            border: exp.current
                              ? '1px solid rgba(74,127,165,0.3)'
                              : '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {exp.current ? 'En cours' : 'Terminé'}
                        </span>
                      </div>

                      {/* Dates */}
                      <p className="text-xs text-gray-600 mb-3">
                        {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Présent'}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tech tags */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                          {exp.technologies.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded text-gray-500"
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.07)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>

                </motion.div>
              )
            })}
          </div>

          {/* Fin de timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-12"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: '#4a7fa5',
                boxShadow: '0 0 16px rgba(74,127,165,0.6)',
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Experience
