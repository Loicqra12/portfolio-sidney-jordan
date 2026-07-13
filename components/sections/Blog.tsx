'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  philosophy: { label: 'Philosophie', color: '#a78bfa', bg: 'rgba(167,139,250,0.15)' },
  psychology: { label: 'Psychologie', color: '#60a5fa', bg: 'rgba(96,165,250,0.15)' },
  geopolitics: { label: 'Géopolitique', color: '#f87171', bg: 'rgba(248,113,113,0.15)' },
  technology: { label: 'Technologie', color: '#34d399', bg: 'rgba(52,211,153,0.15)' },
  personal: { label: 'Personnel', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)' },
}

const Blog = () => {
  /* On prend exactement 3 articles featured */
  const posts = blogPosts.filter(p => p.featured).slice(0, 3)
  const [main, ...side] = posts

  return (
    <section id="blog" className="section-padding bg-transparent">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4"
          >
            Ma pensée
          </motion.p>
          <h2 className="section-title mb-6">
            Blog &{' '}
            <span
              className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}
            >
              Réflexions
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mes pensées sur la philosophie, la psychologie, la géopolitique et la technologie
          </p>
        </motion.div>

        {/* ── Layout magazine : 1 grande + 2 petites ── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-12">

          {/* ── Card principale (col 1-3) ── */}
          {main && (
            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              viewport={{ once: true }}
              className="lg:col-span-3 group relative overflow-hidden rounded-3xl bg-[#0f1117] border border-[#1e2530] hover:border-[#4a7fa5]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(74,127,165,0.12)]"
            >
              {/* Image grande */}
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <Image
                  src={main.image}
                  alt={main.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Overlay bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/30 to-transparent" />

                {/* Badge catégorie */}
                <div className="absolute top-5 left-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: categoryConfig[main.category]?.bg,
                      color: categoryConfig[main.category]?.color,
                      border: `1px solid ${categoryConfig[main.category]?.color}40`,
                    }}
                  >
                    {categoryConfig[main.category]?.label}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <span>{formatDate(main.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {main.readTime} min de lecture
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#6b9fc4] transition-colors duration-300">
                  {main.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {main.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {main.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-gray-600 bg-white/5 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${main.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#4a7fa5] hover:text-[#6b9fc4] transition-colors group/link"
                  >
                    Lire
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          {/* ── 2 cards secondaires (col 4-5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {side.map((post, index) => {
              const cat = categoryConfig[post.category]
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
                  viewport={{ once: true }}
                  className="group flex-1 relative overflow-hidden rounded-3xl bg-[#0f1117] border border-[#1e2530] hover:border-[#4a7fa5]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,127,165,0.1)]"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: cat?.bg,
                          color: cat?.color,
                          border: `1px solid ${cat?.color}40`,
                        }}
                      >
                        {cat?.label}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime} min
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#6b9fc4] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-xs font-semibold text-[#4a7fa5] hover:text-[#6b9fc4] transition-colors group/link w-fit"
                    >
                      Lire l'article
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        {/* ── Bouton voir tous ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-[#4a7fa5]/40 hover:border-[#4a7fa5] hover:bg-[#4a7fa5]/10 transition-all duration-300 group"
          >
            Voir tous les articles
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Blog
