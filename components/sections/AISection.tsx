'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const Highlight = ({ children, color = '#4a7fa5' }: { children: React.ReactNode; color?: string }) => (
  <span className="relative inline-block px-2 py-0.5 rounded-sm font-bold text-white" style={{ backgroundColor: color }}>
    {children}
  </span>
)

const aiTools = [
  { name: 'ChatGPT', slug: 'chatgpt', color: '74aa9c', label: 'Génération & raisonnement' },
  { name: 'Claude', slug: 'anthropic', color: 'd97706', label: 'Analyse & rédaction' },
  { name: 'Midjourney', slug: 'midjourney', color: 'ffffff', label: 'Création visuelle' },
  { name: 'Cursor', slug: 'cursor', color: 'ffffff', label: 'Dev assisté par IA' },
  { name: 'GitHub Copilot', slug: 'githubcopilot', color: '8957e5', label: 'Autocomplétion code' },
  { name: 'Perplexity', slug: 'perplexity', color: '20b2aa', label: 'Recherche IA' },
  { name: 'Hugging Face', slug: 'huggingface', color: 'FFD21E', label: 'Modèles open source' },
  { name: 'Runway', slug: 'runwayml', color: 'ffffff', label: 'Vidéo & créativité IA' },
]

const visionAxes = [
  {
    num: '01',
    title: 'Souveraineté des données',
    text: "L'Afrique doit contrôler ses propres données. Sans souveraineté sur les données, il n'y a pas de souveraineté tout court. Je milite pour des infrastructures et des modèles IA entraînés sur des corpus africains.",
  },
  {
    num: '02',
    title: "IA au service de l'informel",
    text: "80% de l'économie africaine est informelle. L'IA peut transformer cet informel en formel — automatiser, formaliser, valoriser les savoir-faire locaux et créer des emplois durables.",
  },
  {
    num: '03',
    title: 'Langues & cultures africaines',
    text: "Les LLM actuels sous-représentent massivement les langues africaines. Via Abakoun, je travaille à construire des modèles qui comprennent et valorisent nos langues, histoires et cultures.",
  },
  {
    num: '04',
    title: 'Former la prochaine génération',
    text: "L'IA ne doit pas être un outil réservé à une élite. Je crois en la démocratisation de l'accès à ces outils pour les jeunes africains — développeurs, designers, entrepreneurs.",
  },
]

/* ── Logo tool — Simple Icons CDN ou fallback initiales ── */
const ToolIcon = ({ slug, color, name }: { slug: string; color: string; name: string }) => {
  /* Ces 3 n'existent pas dans Simple Icons — on affiche les initiales */
  const fallbacks = ['ChatGPT', 'Midjourney', 'Runway']
  const fallbackColors: Record<string, string> = {
    ChatGPT: '#10a37f',
    Midjourney: '#ffffff',
    Runway: '#ffffff',
  }
  if (fallbacks.includes(name)) {
    return (
      <span
        className="text-base font-black tracking-tighter"
        style={{ color: fallbackColors[name] }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    )
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={name}
      width={28}
      height={28}
      className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
      loading="lazy"
    />
  )
}
const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const NODES = 55
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.02
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(74,127,165,${(1 - dist / 160) * 0.2})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        const p = 0.6 + Math.sin(n.pulse) * 0.4
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(107,159,196,${p})`; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} />
}

const AISection = () => {
  return (
    <section id="ai" className="relative section-padding overflow-hidden">

      {/* Fond */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#020c18' }}>
        <NeuralBackground />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(2,12,24,0.3) 0%, rgba(2,12,24,0.65) 100%)' }} />
      </div>

      <div className="container-custom relative z-10">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }} viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a7fa5] mb-4">
            Intelligence Artificielle
          </p>
          <h2 className="section-title mb-6">
            IA & <Highlight color="#4a7fa5">Vision</Highlight> Africaine
          </h2>
          <p className="section-subtitle mx-auto">
            J'intègre l'IA dans mes projets au quotidien et je crois fermement en son rôle transformateur pour le continent africain.
          </p>
        </motion.div>

        {/* Outils */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-gray-400 border-white/10">
              Outils que j'utilise
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.07, type: 'spring', stiffness: 150 }}
                whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.2)'
                    ; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
                    ; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)'
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <ToolIcon slug={tool.slug} color={tool.color} name={tool.name} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{tool.name}</p>
                  <p className="text-[11px] text-gray-600 mt-0.5">{tool.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-gray-400 border-white/10">
              Ma vision de l'IA pour l'Afrique
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visionAxes.map((axis, index) => (
              <motion.div
                key={axis.num}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.15)'
                    ; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'
                    ; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)'
                }}
              >
                {/* Numéro en fond */}
                <span className="absolute -top-4 -right-2 text-8xl font-black select-none pointer-events-none text-white/[0.04]">
                  {axis.num}
                </span>

                {/* Barre gauche blanche */}
                <div className="absolute left-0 top-4 bottom-4 w-px bg-white/20 rounded-full" />

                <div className="pl-5">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 block text-gray-500">
                    {axis.num}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {axis.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {axis.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.linkedin.com/company/abakounai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 group"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.1)'
                  ; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
                  ; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              Rejoindre Abakoun
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default AISection
