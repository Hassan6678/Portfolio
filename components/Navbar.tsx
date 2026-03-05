'use client'

import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home',         href: '#' },
  { label: 'Projects',     href: '#work' },
  { label: 'About',        href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY.current || y < 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ background: 'rgba(8,10,12,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — terminal style */}
          <a href="#" className="font-mono text-sm font-medium flex items-center gap-0.5 hover:opacity-80 transition-opacity" style={{ color: 'var(--accent)' }}>
            <span style={{ color: 'var(--muted)' }}>hassan</span>
            <span style={{ color: 'var(--dimmed)' }}>@portfolio</span>
            <span style={{ color: 'var(--muted)' }}>:~$</span>
            <span className="cursor-blink ml-1" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-mono text-xs tracking-wide transition-colors duration-200 hover:text-accent" style={{ color: 'var(--dimmed)' }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA — pill button */}
          <a href="#contact" className="hidden md:inline-flex btn-nav-cta">
            Discuss for Projects
          </a>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-[2px] rounded-full transition-all duration-250"
                style={{
                  background: 'var(--text)',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(8,10,12,0.97)' }}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((l, i) => (
            <li key={l.label} style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'none' : 'translateY(12px)', transition: 'all 0.3s ease' }}>
              <a href={l.href} className="font-syne font-bold text-2xl hover:text-accent transition-colors" style={{ color: 'var(--text)' }} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-nav-cta mt-8" onClick={() => setMenuOpen(false)}>Discuss for Projects</a>
      </div>
    </>
  )
}
