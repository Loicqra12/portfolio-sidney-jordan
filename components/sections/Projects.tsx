'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react'
import { projects } from '@/data/projects'
import Image from 'next/image'

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations les plus marquantes et les technologies que j'utilise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              style={{ perspective: 1000 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-500"
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

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icône flottante */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Code className="w-5 h-5 text-white" />
                </motion.div>

                {/* Particules flottantes */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    x: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [5, -5, 5],
                    x: [3, -3, 3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full"
                />

                {/* Boutons d'action avec animations */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-primary-400 transition-colors border border-white/30"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-accent-400 transition-colors border border-white/30"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="p-6 relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-400 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'completed'
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : project.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                            : 'bg-gray-100 text-gray-400 border border-gray-200'
                        }`}
                    >
                      {project.status === 'completed' ? '✅ Terminé' :
                        project.status === 'in-progress' ? '🔄 En cours' : '📋 Planifié'}
                    </motion.span>
                  </div>
                </motion.div>

                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.1
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:border-primary-300 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-400 rounded-full text-sm font-medium border border-gray-300"
                    >
                      +{project.technologies.length - 3}
                    </motion.span>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/40 hover:border-primary-300 hover:bg-primary-50"
                    >
                      <Github size={16} />
                      <span className="font-medium">Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-accent-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/40 hover:border-accent-300 hover:bg-accent-50"
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


