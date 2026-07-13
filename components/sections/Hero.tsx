'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import Counter from '@/components/ui/Counter'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        {/* Orbe gauche */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [-20, 20, -20] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#4a7fa5]/15 rounded-full blur-[130px]"
        />
        {/* Orbe droite */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], y: [-20, 20, -20] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#2d5f82]/20 rounded-full blur-[140px]"
        />

        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(74,127,165,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,165,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-28">

          {/* ── COLONNE GAUCHE — Texte ── */}
          <div className="flex flex-col justify-center space-y-8">

            {/* Badge disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a7fa5]/30 bg-[#4a7fa5]/10 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#6b9fc4] animate-pulse" />
              <span className="text-sm font-medium text-[#6b9fc4]">Disponible — Freelance & Full-time</span>
            </motion.div>

            {/* Nom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-gray-400 text-lg md:text-xl font-light mb-2 tracking-widest uppercase">
                hi, i'm
              </p>
              <h1 className="font-bold leading-none tracking-tight">
                <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
                  Sir Sidney
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text animate-gradient">
                  Jordan
                </span>
              </h1>
            </motion.div>

            {/* Pill titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f1117] border border-[#1e2530] w-fit"
            >
              <Code2 className="w-4 h-4 text-[#4a7fa5]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                Développeur Full-Stack & Entrepreneur
              </span>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              Je crée des{' '}
              <span className="text-[#6b9fc4] font-semibold">expériences numériques exceptionnelles</span>{' '}
              avec React, Flutter & Next.js. De l'idée au déploiement, je transforme vos visions en réalité.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Voir mes projets
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group"
              >
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Me contacter
                </span>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {[
                { value: 5, suffix: '+', label: 'Projets' },
                { value: 5, suffix: '+', label: 'Années exp.' },
                { value: 10, suffix: '+', label: 'Technologies' },
                { value: 100, suffix: '%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-[#0f1117] border border-[#1e2530] rounded-xl p-4 text-center hover:border-[#4a7fa5]/40 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold gradient-text">
                    <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── COLONNE DROITE — Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 80 }}
            className="relative flex items-end justify-center lg:justify-end h-full"
          >
            {/* Glow derrière la photo */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#4a7fa5]/20 rounded-full blur-[80px]"
            />

            {/* Cadre photo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-[340px] md:w-[420px] lg:w-[480px]"
            >
              {/* Bordure décorative */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#4a7fa5]/40 via-[#2d5f82]/20 to-transparent" />

              <div className="relative overflow-hidden rounded-3xl bg-[#0f1117]">
                <Image
                  src="/images/hero/hero.png"
                  alt="Sir Sidney Jordan — Développeur Full-Stack & Entrepreneur"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover object-top"
                  priority
                  style={{ filter: 'contrast(1.05) brightness(0.95)' }}
                />
                {/* Overlay dégradé bas */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              </div>

              {/* Badge flottant — Disponible */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -left-6 top-12 bg-[#0f1117] border border-[#4a7fa5]/30 rounded-2xl px-4 py-3 shadow-xl hidden sm:flex"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4a7fa5]" />
                  <div>
                    <p className="text-xs font-semibold text-white">Open to work</p>
                    <p className="text-[10px] text-gray-500">Côte d'Ivoire & Remote</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flottant — Stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -right-4 bottom-20 bg-[#0f1117] border border-[#1e2530] rounded-2xl px-4 py-3 shadow-xl hidden sm:block"
              >
                <p className="text-[10px] text-gray-500 mb-1.5">Stack principal</p>
                <div className="flex gap-1.5">
                  {['React', 'Next.js', 'Flutter'].map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-medium bg-[#4a7fa5]/15 text-[#6b9fc4] rounded-md border border-[#4a7fa5]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#4a7fa5] transition-colors"
          aria-label="Scroll vers le bas"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
