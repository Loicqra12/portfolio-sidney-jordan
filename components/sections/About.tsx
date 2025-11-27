'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { User, Lightbulb, Target, Award, BookOpen, Brain } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours, ma philosophie et ma vision du développement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Photo avec effet glassmorphism */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl"
            >
              <div className="relative w-full h-96">
                <Image
                  src="/images/hero/hero-bg.png"
                  alt="Sir Sidney Jordan - Photo de profil"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Particules flottantes */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [5, -5, 5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-4 left-4 w-2 h-2 bg-accent-400 rounded-full opacity-60"
              />
            </motion.div>

            {/* Citation avec logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <Image
                    src="/images/logo/logo-citation.png"
                    alt="Sir Sidney Jordan - Citation & Logo"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mon parcours */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <User className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-400 group-hover:text-blue-600 transition-colors">Mon parcours</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Passionné par la technologie, la philosophie et l'étude des comportements humains, j'ai construit mon parcours à la croisée des mondes : du développement web et mobile à la sécurité réseau, de la gestion de projets digitaux à la création d'entreprises tech.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Co-fondateur et CEO/COO de <strong>Soutrali Deals</strong>, CTO de <strong>Onloutou</strong>, et co-fondateur de <strong>ChapeChapeRésidence</strong>, fondateur de <strong>Terrain Futur think tank</strong>, j'ai également participé à plusieurs hackathons (Orange Fab, Pejedec/CIPME, Google Habihack, etc.), tout en menant des projets de réflexion stratégique et technologique comme <strong>Terrain Futur</strong> (think tank) et <strong>Abakoun</strong> (souveraineté intellectuelle africaine).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Ma philosophie */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-400 group-hover:text-green-600 transition-colors">Ma philosophie</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Je crois que la technologie doit servir l'humain et non l'inverse. Chaque ligne de code, chaque design, chaque projet est une tentative d'apporter un sens, de transformer l'informel en formel, et de créer des ponts entre savoir, innovation et société.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Mon approche repose sur l'idée que l'interdisciplinarité (informatique, philosophie, psychologie, histoire, géopolitique) est une clé pour bâtir un futur plus équilibré.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Ma vision */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-400 group-hover:text-orange-600 transition-colors">Ma vision</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Mon ambition est de bâtir un écosystème numérique africain qui valorise nos talents, digitalise l'informel et crée des emplois durables. À travers Soutrali Deals, Yaoo, et d'autres projets, je veux contribuer à :
                  </p>
                  <ul className="text-gray-400 leading-relaxed space-y-2">
                    <li>• Transformer les métiers artisanaux et informels grâce à la digitalisation</li>
                    <li>• Créer des écoles techniques pour revaloriser les savoir-faire locaux</li>
                    <li>• Développer une souveraineté intellectuelle africaine via Abakoun et l'IA</li>
                    <li>• Construire "Le Nexus Africain" - la Forge des Savoirs, un écosystème où les talents africains transforment l'informel en puissance technologique et intellectuelle</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

