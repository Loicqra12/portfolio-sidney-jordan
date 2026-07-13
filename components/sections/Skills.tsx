'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { certifications } from '@/data/skills'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

/* ── Logo Simple Icons ── */
const TechLogo = ({ slug, color, size = 28 }: { slug: string; color: string; size?: number }) => (
  <img
    src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
    alt={slug}
    width={size}
    height={size}
    style={{ width: size, height: size }}
    className="object-contain"
    loading="lazy"
  />
)

const Highlight = ({ children, color = '#4a7fa5' }: { children: React.ReactNode; color?: string }) => (
  <span className="relative inline-block px-3 py-1 rounded-sm font-bold text-white" style={{ backgroundColor: color }}>
    {children}
  </span>
)

/* ── Logos flottants ── */
const floatingTools = [
  { name: 'React', slug: 'react', color: '61DAFB', size: 44, top: 8, left: 8 },
  { name: 'Next.js', slug: 'nextdotjs', color: 'ffffff', size: 38, top: 5, left: 20 },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6', size: 40, top: 8, left: 32 },
  { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4', size: 36, top: 4, left: 44 },
  { name: 'Vite', slug: 'vite', color: '646CFF', size: 34, top: 8, left: 56 },
  { name: 'Flutter', slug: 'flutter', color: '54C5F8', size: 44, top: 5, left: 68 },
  { name: 'Dart', slug: 'dart', color: '0175C2', size: 36, top: 9, left: 80 },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933', size: 42, top: 38, left: 4 },
  { name: 'Express', slug: 'express', color: 'ffffff', size: 34, top: 50, left: 2 },
  { name: 'Laravel', slug: 'laravel', color: 'FF2D20', size: 38, top: 62, left: 5 },
  { name: 'PHP', slug: 'php', color: '777BB4', size: 32, top: 74, left: 3 },
  { name: 'MySQL', slug: 'mysql', color: '4479A1', size: 40, top: 36, left: 88 },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248', size: 38, top: 48, left: 90 },
  { name: 'Docker', slug: 'docker', color: '2496ED', size: 44, top: 60, left: 87 },
  { name: 'Git', slug: 'git', color: 'F05032', size: 36, top: 72, left: 91 },
  { name: 'GitHub', slug: 'github', color: 'ffffff', size: 36, top: 84, left: 10 },
  { name: 'Linux', slug: 'linux', color: 'FCC624', size: 34, top: 88, left: 22 },
  { name: 'Figma', slug: 'figma', color: 'F24E1E', size: 38, top: 84, left: 36 },
  { name: 'HubSpot', slug: 'hubspot', color: 'FF7A59', size: 32, top: 85, left: 64 },
  { name: 'Kali Linux', slug: 'kalilinux', color: '557C94', size: 36, top: 88, left: 76 },
]

const cats = [
  { label: 'Frontend', color: '#61DAFB' },
  { label: 'Mobile', color: '#54C5F8' },
  { label: 'Backend', color: '#339933' },
  { label: 'Database', color: '#4479A1' },
  { label: 'DevOps', color: '#2496ED' },
  { label: 'Design', color: '#F24E1E' },
  { label: 'Security', color: '#557C94' },
]

const softSkills = [
  "Gestion de projet agile",
  "Leadership & gestion de talents",
  "Business plan & finances",
  "Communication & coordination",
  "Intelligence émotionnelle",
  "Esprit entrepreneurial",
]

/* ══════════════════════════════════════
   CARROUSEL — grande image + nom en bas
══════════════════════════════════════ */
const CertCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = certifications.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + total) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const cert = certifications[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  }

  return (
    <div className="relative">
      {/* Image + infos */}
      <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={cert.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center"
          >
            {/* Grande image sans encadré */}
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src={cert.image}
                alt={cert.title}
                width={800}
                height={560}
                className="w-full h-auto rounded-2xl"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  filter: 'brightness(0.96)',
                }}
              />
              {/* Glow bas */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-xl rounded-full"
                style={{ backgroundColor: 'rgba(74,127,165,0.15)' }}
              />
            </div>

            {/* Nom en bas */}
            <div className="mt-8 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4a7fa5] mb-2">
                {cert.issuer}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{formatDate(cert.date)}</p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a7fa5] hover:text-[#6b9fc4] transition-colors"
                >
                  Vérifier le certificat
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrôles */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,127,165,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2530')}
        >
          <ChevronLeft size={16} className="text-gray-400" />
        </button>

        <div className="flex gap-2 items-center">
          {certifications.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                backgroundColor: i === current ? '#4a7fa5' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,127,165,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2530')}
        >
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Barre progression */}
      <div className="mt-4 mx-auto max-w-2xl h-px bg-white/5 rounded-full overflow-hidden">
        <motion.div
          key={current}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full bg-[#4a7fa5]"
        />
      </div>

      <p className="text-center text-xs text-gray-700 mt-3 font-medium">
        {current + 1} / {total}
      </p>
    </div>
  )
}

/* ══════════════════════════════════════
   SECTION PRINCIPALE
══════════════════════════════════════ */
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-transparent overflow-hidden">
      <div className="container-custom">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4">
            Mon arsenal
          </p>
          <h2 className="section-title mb-6">
            Outils & <Highlight color="#4a7fa5">Technologies</Highlight>
          </h2>
          <p className="section-subtitle mx-auto">
            Les technologies que je maîtrise
          </p>
        </motion.div>

        {/* Grille logos — mobile uniquement */}
        <div className="md:hidden grid grid-cols-4 gap-4 mb-20">
          {floatingTools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#0f1117', border: '1px solid rgba(255,255,255,0.07)' }}>
                <TechLogo slug={tool.slug} color={tool.color} size={28} />
              </div>
              <span className="text-[9px] text-gray-600 text-center font-medium leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Zone pieuvre + logos — desktop uniquement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block relative mx-auto mb-20"
          style={{ height: '520px', maxWidth: '900px' }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ background: 'radial-gradient(ellipse at center, rgba(74,127,165,0.06) 0%, transparent 70%)' }}
          />

          {/* Pieuvre SVG */}
          <div className="absolute z-10" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 220, height: 220 }}>
            <motion.svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', height: '100%', opacity: 0.55 }}
            >
              <ellipse cx="100" cy="80" rx="42" ry="50" fill="none" stroke="rgba(74,127,165,0.7)" strokeWidth="1.5" />
              <ellipse cx="100" cy="62" rx="30" ry="36" fill="rgba(74,127,165,0.08)" stroke="rgba(74,127,165,0.5)" strokeWidth="1.2" />
              <circle cx="89" cy="58" r="5" fill="none" stroke="rgba(107,159,196,0.8)" strokeWidth="1.2" />
              <circle cx="111" cy="58" r="5" fill="none" stroke="rgba(107,159,196,0.8)" strokeWidth="1.2" />
              <circle cx="89" cy="58" r="2" fill="rgba(107,159,196,0.6)" />
              <circle cx="111" cy="58" r="2" fill="rgba(107,159,196,0.6)" />
              <path d="M72 115 C55 130 40 140 35 160 C32 175 40 185 38 195" fill="none" stroke="rgba(74,127,165,0.6)" strokeWidth="2" strokeLinecap="round" />
              <path d="M82 118 C70 138 65 155 60 170 C55 185 60 192 55 200" fill="none" stroke="rgba(74,127,165,0.5)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M92 120 C88 142 85 158 82 175 C80 188 85 195 82 200" fill="none" stroke="rgba(74,127,165,0.55)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M100 122 C98 145 97 162 95 178 C93 190 97 196 95 200" fill="none" stroke="rgba(74,127,165,0.5)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M108 120 C112 143 115 160 118 175 C121 188 116 195 118 200" fill="none" stroke="rgba(74,127,165,0.55)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M118 118 C130 138 135 155 140 170 C145 185 140 192 145 200" fill="none" stroke="rgba(74,127,165,0.5)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M128 115 C145 130 160 140 165 160 C168 175 160 185 162 195" fill="none" stroke="rgba(74,127,165,0.6)" strokeWidth="2" strokeLinecap="round" />
              <path d="M75 105 C58 110 45 108 35 115" fill="none" stroke="rgba(74,127,165,0.4)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M125 105 C142 110 155 108 165 115" fill="none" stroke="rgba(74,127,165,0.4)" strokeWidth="1.5" strokeLinecap="round" />
              {([
                [52, 133], [42, 152], [38, 168],
                [148, 133], [158, 152], [162, 168],
                [86, 148], [83, 168], [114, 148], [117, 168],
              ] as [number, number][]).map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="2.5" fill="none" stroke="rgba(107,159,196,0.5)" strokeWidth="0.8" />
              ))}
            </motion.svg>
          </div>

          {/* Logos flottants */}
          {floatingTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.04, type: 'spring', stiffness: 180 }}
              animate={{ y: [0, -4 + (index % 3) * 2, 0] }}
              // @ts-ignore
              whileInViewTransition={{}}
              style={{ position: 'absolute', top: `${tool.top}%`, left: `${tool.left}%` }}
              whileHover={{ scale: 1.2, zIndex: 20, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-1 cursor-default z-10"
            >
              <div
                className="rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{ width: tool.size + 20, height: tool.size + 20, backgroundColor: '#0f1117', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,127,165,0.5)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px rgba(74,127,165,0.2)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
              >
                <TechLogo slug={tool.slug} color={tool.color} size={tool.size - 8} />
              </div>
              <span className="text-[9px] text-gray-600 group-hover:text-gray-300 transition-colors whitespace-nowrap font-medium">{tool.name}</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </motion.div>
          ))}

          {/* Légende */}
          <div className="absolute bottom-0 right-0 flex flex-wrap gap-2 justify-end">
            {cats.map(cat => (
              <span key={cat.label} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded border"
                style={{ color: cat.color, borderColor: `${cat.color}40` }}>
                {cat.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills sans icônes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-white/15" />
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-gray-500 border-white/10">
              Compétences transversales
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-xl px-5 py-4 transition-all duration-300"
                style={{ backgroundColor: '#0f1117', border: '1px solid #1e2530' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,127,165,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e2530' }}
              >
                <p className="text-gray-300 font-medium text-sm">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications — Carrousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-10 bg-white/15" />
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-gray-500 border-white/10">
              Certifications
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <CertCarousel />
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
