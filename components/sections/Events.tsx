'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const events = [
  {
    src: '/images/events/event-imphack-2023.jpg',
    title: 'ImpHack 2023',
    year: '2023',
    rotate: -3,
  },
  {
    src: '/images/events/event-orange-fab-2025.jpg',
    title: 'Orange Fab 2025',
    year: '2025',
    rotate: 2,
  },
  {
    src: '/images/events/event-pejedec-cipme3.jpg',
    title: 'Pejedec / CIPME',
    year: '2023',
    rotate: -1.5,
  },
]

const Events = () => {
  return (
    <section id="events" className="section-padding bg-transparent overflow-hidden">
      <div className="container-custom">

        {/* ── Titre ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4"
          >
            Sur le terrain
          </motion.p>
          <h2 className="section-title">
            Événements{' '}
            <span
              className="relative inline-block px-3 py-1 rounded-sm font-bold text-white"
              style={{ backgroundColor: '#4a7fa5' }}
            >
              auxquels j'ai participé
            </span>
          </h2>
        </motion.div>

        {/* ── Photos Polaroid ── */}
        <div className="flex flex-wrap items-start justify-start gap-8 md:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.src}
              initial={{ opacity: 0, y: 60, rotate: event.rotate * 3 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: event.rotate,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 14,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -12,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              className="relative cursor-default flex-shrink-0"
              style={{
                marginTop: [0, 24, 10][index % 3],
              }}
            >
              {/* Cadre Polaroid */}
              <div
                className="bg-[#f5f0e8] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-sm"
                style={{ padding: '12px 12px 48px 12px' }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ width: 'min(260px, 75vw)', height: 200 }}>
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Légende Polaroid */}
                <div className="pt-3 text-center" style={{ width: 'min(260px, 75vw)' }}>
                  <p
                    className="text-[#1a1a1a] font-medium text-sm tracking-wide"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {event.title}
                  </p>
                  <p
                    className="text-[#666] text-xs mt-0.5"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {event.year}
                  </p>
                </div>
              </div>

              {/* Pin décoratif en haut */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#4a7fa5] shadow-md border-2 border-white/20" />

              {/* Ombre portée sous le Polaroid */}
              <div className="absolute -bottom-2 inset-x-4 h-4 bg-black/30 blur-md rounded-full -z-10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Events
