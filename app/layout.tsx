import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
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
      'Machine learning systems for retail intelligence, territory planning, forecasting, and NLP — shipped for enterprise teams.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Raza — ML Engineer & Data Scientist',
    description:
      'Machine learning systems for retail intelligence, territory planning, forecasting, and NLP — shipped for enterprise teams.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
