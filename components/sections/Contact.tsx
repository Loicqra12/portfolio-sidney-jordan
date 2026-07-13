'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Zap, Heart, Star, Globe } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Personnel',
      value: 'jordymelyer15@gmail.com',
      href: 'mailto:jordymelyer15@gmail.com'
    },
    {
      icon: Mail,
      label: 'Email Professionnel',
      value: 'sidney.jordan@soutralideals.net',
      href: 'mailto:sidney.jordan@soutralideals.net'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+225 0748001042',
      href: 'tel:+2250748001042'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Côte d\'Ivoire',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Loicqra12',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sir-sidney-jordan-39587a283/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/jordymelyer',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-4"
          >
            Travaillons ensemble
          </motion.p>
          <h2 className="section-title mb-6">
            <span className="gradient-text animate-gradient">Contactez</span>-moi
          </h2>
          <p className="section-subtitle mx-auto">
            Une idée de projet ? Une collaboration ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-primary-600" />
                Informations de contact
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative overflow-hidden flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
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

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <info.icon className="text-white" size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-medium text-white group-hover:text-primary-600 transition-colors">{info.label}</p>
                      <p className="text-gray-400 group-hover:text-gray-400 transition-colors">{info.value}</p>
                    </div>

                    {/* Particules flottantes */}
                    <motion.div
                      animate={{
                        y: [-3, 3, -3],
                        x: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary-400 rounded-full opacity-60"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <Globe className="w-6 h-6 mr-3 text-accent-600" />
                Réseaux sociaux
              </motion.h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40"
                    aria-label={social.label}
                  >
                    {/* Effet de particules en arrière-plan */}
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    />

                    <social.icon size={20} className={`${social.color} transition-colors`} />

                    {/* Particules flottantes */}
                    <motion.div
                      animate={{
                        y: [-2, 2, -2],
                        x: [-1, 1, -1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-1 right-1 w-1 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="label-dark">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="input-dark"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="label-dark">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="input-dark"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="label-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-dark"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="label-dark">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input-dark"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="label-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input-dark resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact




