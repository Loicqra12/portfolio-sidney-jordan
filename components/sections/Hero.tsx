'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2, Rocket } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import GradientText from '@/components/ui/GradientText'
import Counter from '@/components/ui/Counter'
import AnimatedSLogo from '@/components/ui/AnimatedSLogo'

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0f0a2e] to-[#030014]" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated S Logo */}
        <AnimatedSLogo />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Available for Freelance & Full-time</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="block mb-2">Développeur</span>
              <GradientText>
                Full-Stack
              </GradientText>
              <span className="block mt-2">& Entrepreneur</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Je crée des <span className="text-primary-400 font-semibold">expériences numériques exceptionnelles</span> avec React, Flutter & Next.js.
            De l'idée au déploiement, je transforme vos visions en réalité.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Voir mes projets
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="btn-secondary group"
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Me contacter
              </span>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 5, suffix: '+', label: 'Projets Réalisés' },
              { value: 5, suffix: '+', label: 'Années d\'Expérience' },
              { value: 10, suffix: '+', label: 'Technologies' },
              { value: 100, suffix: '%', label: 'Satisfaction Client' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-card p-3 rounded-full cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-6 h-6 text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
