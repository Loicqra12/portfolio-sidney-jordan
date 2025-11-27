'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { formatDate, formatDateShort } from '@/lib/utils'
import { Trophy, Code, Users, Briefcase, GraduationCap, Award, Target, Zap, Star, Rocket, Globe, Brain } from 'lucide-react'

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'competition': return Trophy
      case 'hackathon': return Code
      case 'project': return Users
      case 'work': return Briefcase
      case 'education': return GraduationCap
      default: return Briefcase
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'competition': return 'Concours'
      case 'hackathon': return 'Hackathon'
      case 'project': return 'Projet'
      case 'work': return 'Travail'
      case 'education': return 'Formation'
      default: return 'Autre'
    }
  }

  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expériences & Réalisations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mon parcours entrepreneurial, mes participations aux hackathons et mes collaborations professionnelles
          </p>
        </motion.div>

        {/* Leadership & Entrepreneuriat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🏢 Leadership & Entrepreneuriat</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.filter(exp => exp.type === 'work').map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Effet de particules en arrière-plan */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                      >
                        <Briefcase size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary-600 transition-colors">{exp.title}</h4>
                        <p className="text-primary-600 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {exp.current ? 'En cours' : 'Terminé'}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Présent'}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons & Concours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🏆 Hackathons & Concours</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.filter(exp => exp.type === 'hackathon' || exp.type === 'competition').map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mr-4">
                      <Trophy size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-accent-600 transition-colors">{exp.title}</h4>
                      <p className="text-accent-600 font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">{formatDate(exp.startDate)}</p>
                    <p className="text-gray-700 text-sm">{exp.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-accent-100 text-accent-800 text-xs rounded-full">
                      {getTypeLabel(exp.type)}
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      Participé
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborations professionnelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🤝 Collaborations professionnelles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.filter(exp => exp.type === 'project').map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-purple-600 transition-colors">{exp.title}</h4>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Présent'}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
