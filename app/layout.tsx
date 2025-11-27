import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ui/ScrollProgress'

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
  title: 'Sir Sidney Jordan - Portfolio',
  description: 'Développeur Full-Stack & Entrepreneur. Expert en React, Next.js, Flutter et solutions digitales innovantes.',
  keywords: 'portfolio, développeur, React, Next.js, entrepreneur, africa, tech',
  authors: [{ name: 'Sir Sidney Jordan' }],
  metadataBase: new URL('https://portfolio-sidney-jordan.vercel.app'),
  openGraph: {
    title: 'Sir Sidney Jordan - Portfolio',
    description: 'Portfolio professionnel de Sir Sidney Jordan - Développeur Full Stack, Entrepreneur & Think Tank',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
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
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
