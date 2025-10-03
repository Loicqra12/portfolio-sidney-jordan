'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowRight, BookOpen, Brain, Globe, Zap, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'philosophy': return 'bg-purple-100 text-purple-800'
      case 'psychology': return 'bg-blue-100 text-blue-800'
      case 'geopolitics': return 'bg-red-100 text-red-800'
      case 'technology': return 'bg-green-100 text-green-800'
      case 'personal': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'philosophy': return 'Philosophie'
      case 'psychology': return 'Psychologie'
      case 'geopolitics': return 'Géopolitique'
      case 'technology': return 'Technologie'
      case 'personal': return 'Personnel'
      default: return category
    }
  }

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Réflexions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes pensées sur la philosophie, la psychologie, la géopolitique et la technologie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
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
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-100 to-purple-100 flex items-center justify-center">
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
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                    >
                      <span className="text-3xl font-bold text-white">
                        {post.title.charAt(0)}
                      </span>
                    </motion.div>
                    <span className="text-gray-600 text-sm font-medium">Image de l'article</span>
                  </div>
                </div>

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

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 left-4"
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/30 ${getCategoryColor(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
                  <span>{formatDate(post.publishedAt)}</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <span>Lire l'article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Voir tous les articles</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog



