'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedSLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }}
      className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 pointer-events-none"
    >
      {/* Glow effect pulsant */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
      />

      {/* Logo principal */}
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
        className="relative"
      >
        <Image
          src="/images/logo/logo-mobile.png"
          alt="Sidney Jordan Logo"
          width={120}
          height={120}
          className="drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))'
          }}
        />
      </motion.div>

      {/* Particules orbitales */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-purple-400"
            style={{
              top: `${Math.sin((i * Math.PI) / 1.5) * 60 + 60}px`,
              left: `${Math.cos((i * Math.PI) / 1.5) * 60 + 60}px`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
