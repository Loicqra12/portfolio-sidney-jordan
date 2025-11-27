'use client'

import { motion } from 'framer-motion'
import { skills, certifications } from '@/data/skills'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import { Code, Database, Shield, Zap, Palette, Search, Globe, Brain, Target, Users, TrendingUp, Lightbulb } from 'lucide-react'

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    mobile: skills.filter(skill => skill.category === 'mobile'),
    devops: skills.filter(skill => skill.category === 'devops'),
    design: skills.filter(skill => skill.category === 'design'),
  }

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences & Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mes compétences techniques et mes certifications professionnelles
          </p>
        </motion.div>

        {/* Compétences Techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🔹 Compétences techniques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Développement web & mobile",
                skills: ["React JS", "Flutter", "Dart", "Node.js", "Express", "Laravel", "Vite.js"],
                icon: Code,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                title: "Bases de données",
                skills: ["MySQL", "MongoDB"],
                icon: Database,
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50"
              },
              {
                title: "Cybersécurité & Réseaux",
                skills: ["Kali Linux", "Audit de sécurité", "Gestion des risques", "Bonnes pratiques de protection"],
                icon: Shield,
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50"
              },
              {
                title: "DevOps & Déploiement",
                skills: ["Docker", "CI/CD", "Hébergement et déploiement d'applications web, mobile et back-end"],
                icon: Zap,
                color: "from-purple-500 to-indigo-500",
                bgColor: "from-purple-50 to-indigo-50"
              },
              {
                title: "Intelligence Artificielle & Data",
                skills: ["Outils IA (analyse, automatisation, optimisation)"],
                icon: Brain,
                color: "from-orange-500 to-yellow-500",
                bgColor: "from-orange-50 to-yellow-50"
              },
              {
                title: "UI/UX Design",
                skills: ["Figma", "Prototypage", "Responsive design"],
                icon: Palette,
                color: "from-pink-500 to-rose-500",
                bgColor: "from-pink-50 to-rose-50"
              },
              {
                title: "SEO & Marketing digital",
                skills: ["Yoast SEO", "Google Search Console", "HubSpot", "Mailchimp"],
                icon: Search,
                color: "from-teal-500 to-cyan-500",
                bgColor: "from-teal-50 to-cyan-50"
              },
              {
                title: "Création visuelle & communication digitale",
                skills: ["Design de logos", "Gestion de pages et réseaux sociaux"],
                icon: Globe,
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-50 to-purple-50"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
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
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 border border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center mb-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg mr-4"
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-gray-400 group-hover:text-primary-600 transition-colors">
                      {category.title}
                    </h4>
                  </motion.div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                        <span className="text-sm text-gray-400">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compétences Transversales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🔹 Compétences transversales</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Gestion de projet agile & coordination d'équipes",
              "Analyse et optimisation de processus métiers",
              "Communication, leadership & gestion de talents",
              "Rédaction de business plans et plans financiers",
              "Expérience en tant que COO de Soutrali Deals (pilotage stratégique, organisation interne, recrutement, partenariats)",
              "Intelligence émotionnelle et esprit entrepreneurial"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">🏆 Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
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
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                  
                  <h4 className="font-bold mb-2 text-gray-400 group-hover:text-primary-600 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-4">{formatDate(cert.date)}</p>
                  
                  {cert.url && (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <span>Voir le certificat</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


