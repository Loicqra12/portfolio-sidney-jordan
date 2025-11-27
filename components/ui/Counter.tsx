'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface CounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
}

export default function Counter({ from = 0, to, duration = 2, suffix = '' }: CounterProps) {
  const count = useMotionValue(from)
  const rounded = useSpring(count, { stiffness: 100, damping: 50 })
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    count.set(to)

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })

    return () => unsubscribe()
  }, [to, count, rounded])

  return <span>{displayValue}{suffix}</span>
}
