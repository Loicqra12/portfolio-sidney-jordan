import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Votre Nom - Portfolio',
  description: 'Développeur passionné, créateur de solutions innovantes',
  keywords: 'portfolio, développeur, React, Next.js, projets',
  authors: [{ name: 'Votre Nom' }],
  openGraph: {
    title: 'Votre Nom - Portfolio',
    description: 'Développeur passionné, créateur de solutions innovantes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}




