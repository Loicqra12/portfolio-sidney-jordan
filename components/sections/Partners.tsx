'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/* 3 rangées — alternance gros / petit / gros */
const row1 = [
  { src: '/images/companies/partner1.png', alt: 'Partner 1', size: 'large' as const },
  { src: '/images/companies/partner2.png', alt: 'Partner 2', size: 'small' as const },
  { src: '/images/companies/partner3.png', alt: 'Partner 3', size: 'large' as const },
]
const row2 = [
  { src: '/images/companies/partner4.png', alt: 'Partner 4', size: 'small' as const },
  { src: '/images/companies/partner5.png', alt: 'Partner 5', size: 'large' as const },
  { src: '/images/companies/partner6.png', alt: 'Partner 6', size: 'small' as const },
]
const row3 = [
  { src: '/images/companies/partner7.png', alt: 'Partner 7', size: 'large' as const },
  { src: '/images/companies/partner8.png', alt: 'Partner 8', size: 'small' as const },
  { src: '/images/companies/partner9.png', alt: 'Partner 9', size: 'large' as const },
]

const sizeMap = {
  large: { w: 220, h: 100 },
  small: { w: 140, h: 65 },
}

const LogoItem = ({
  src, alt, size, delay,
}: {
  src: string; alt: string; size: 'large' | 'small'; delay: number
}) => {
  const { w, h } = sizeMap[size]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.08, y: -6, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="group flex items-center justify-center cursor-default"
      style={{ flex: size === 'large' ? '0 0 auto' : '0 0 auto' }}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(74,127,165,0.4)]"
        style={{ maxWidth: w, maxHeight: h }}
      />
    </motion.div>
  )
}

const Partners = () => {
  return (
    <section
      id="partners"
      className="section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1520 0%, #111827 50%, #0d1520 100%)',
      }}
    >
      <div className="container-custom">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4"
          >
            Écosystème
          </motion.p>
          <h2 className="section-title mb-6">
            Marques avec lesquelles{' '}
            <span
              className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}
            >
              j'ai collaboré
            </span>
          </h2>
        </motion.div>

        {/* ── Rangée 1 : grand — petit — grand ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {row1.map((p, i) => (
            <LogoItem key={p.src} {...p} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a7fa5]/20 to-transparent mb-16" />

        {/* ── Rangée 2 : petit — grand — petit ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {row2.map((p, i) => (
            <LogoItem key={p.src} {...p} delay={0.3 + i * 0.1} />
          ))}
        </motion.div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a7fa5]/20 to-transparent mb-16" />

        {/* ── Rangée 3 : grand — petit — grand ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {row3.map((p, i) => (
            <LogoItem key={p.src} {...p} delay={0.6 + i * 0.1} />
          ))}
        </motion.div>

        {/* ── Ligne décorative bas ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-[#4a7fa5]/50 via-[#4a7fa5]/20 to-transparent origin-left"
        />
      </div>
    </section>
  )
}

export default Partners
