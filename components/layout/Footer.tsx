import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Loicqra12', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sir-sidney-jordan-39587a283/', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/jordymelyer', icon: Twitter },
    { name: 'Email', href: 'mailto:jordymelyer15@gmail.com', icon: Mail },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sir Sidney Jordan</h3>
            <p className="text-gray-300 mb-4">
              Développeur passionné, créateur de solutions innovantes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projets
              </Link>
              <Link href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                Compétences
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">jordymelyer15@gmail.com</p>
            <p className="text-gray-300 mb-2">sidney.jordan@soutralideals.net</p>
            <p className="text-gray-300">+225 0748001042</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sir Sidney Jordan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer




