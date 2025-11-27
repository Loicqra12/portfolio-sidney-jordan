import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animated?: boolean
}

export default function GradientText({ children, className = '', animated = true }: GradientTextProps) {
  return (
    <motion.span
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`gradient-text ${className}`}
    >
      {children}
    </motion.span>
  )
}
