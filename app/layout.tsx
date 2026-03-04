import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hassan Raza — ML Engineer & Data Scientist',
  description:
    'Portfolio of Hassan Raza, Machine Learning Engineer and Data Scientist specializing in geospatial optimization, NLP, computer vision, and scalable data pipelines.',
  metadataBase: new URL('https://hassanraza.vercel.app'),
  openGraph: {
    title: 'Hassan Raza — ML Engineer & Data Scientist',
    description:
      'Portfolio of Hassan Raza, Machine Learning Engineer and Data Scientist specializing in geospatial optimization, NLP, computer vision, and scalable data pipelines.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Raza — ML Engineer & Data Scientist',
    description:
      'Portfolio of Hassan Raza, Machine Learning Engineer and Data Scientist specializing in geospatial optimization, NLP, computer vision, and scalable data pipelines.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
