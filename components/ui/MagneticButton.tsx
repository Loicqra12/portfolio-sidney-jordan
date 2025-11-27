'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Magnetic effect - move button towards cursor (max 20px)
    const maxDistance = 50
    const limitedX = Math.max(-maxDistance, Math.min(maxDistance, distanceX * 0.4))
    const limitedY = Math.max(-maxDistance, Math.min(maxDistance, distanceY * 0.4))

    x.set(limitedX)
    y.set(limitedY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`group relative ${className}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.button>
  )
}
