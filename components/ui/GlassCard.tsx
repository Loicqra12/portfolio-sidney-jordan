import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? {
        scale: 1.02,
        transition: { duration: 0.2 }
      } : undefined}
      className={`glass-card p-6 ${className}`}
    >
      {/* Animated glow effect on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />
    </motion.div>
  )
}
