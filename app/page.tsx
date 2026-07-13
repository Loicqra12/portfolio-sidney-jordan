import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import ThinkTank from '@/components/sections/ThinkTank'
import AISection from '@/components/sections/AISection'
import Events from '@/components/sections/Events'
import Partners from '@/components/sections/Partners'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ThinkTank />
      <AISection />
      <Events />
      <Partners />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}




