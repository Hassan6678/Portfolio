import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Credibility from '@/components/Credibility'
import Work from '@/components/Work'
import Research from '@/components/Research'
import Impact from '@/components/Impact'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Navbar />
      <Hero />
      <Credibility />
      <Work />
      <Research />
      <Impact />
      <Expertise />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
