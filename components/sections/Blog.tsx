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
      default: return 'bg-white/10 text-gray-300 border border-white/10'
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
    <section id="blog" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Réflexions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-gray-300 border border-white/10 text-xs rounded-md"
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



