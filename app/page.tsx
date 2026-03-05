import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialties'
import About from '@/components/About'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <Hero />
      <Specialties />
      <About />
      <Work />
      <Testimonials />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
