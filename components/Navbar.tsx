'use client'

import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Work',       href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible]   = useState(true)
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav
          className="flex items-center justify-between px-6 h-[64px]"
          style={{
            background: 'rgba(8,10,12,0.88)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Brand — terminal style */}
          <a
            href="#"
            className="font-mono text-sm font-medium flex items-center gap-0.5 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            <span style={{ color: 'var(--muted)' }}>hassan@portfolio</span>
            <span style={{ color: 'var(--dimmed)' }}>:~$</span>
            <span className="cursor-blink ml-1" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="nav-link font-mono text-xs tracking-wide transition-colors duration-200"
                  style={{ color: 'var(--dimmed)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dimmed)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px transition-all duration-250"
                style={{
                  background: 'var(--text)',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translateY(6px)' :
                    menuOpen && i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(8,10,12,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((l, i) => (
            <li
              key={l.label}
              className="transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'none' : 'translateY(16px)',
              }}
            >
              <a
                href={l.href}
                className="font-syne font-bold text-3xl"
                style={{ color: 'var(--text)' }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p
          className="font-mono text-xs mt-12"
          style={{ color: 'var(--muted)' }}
        >
          Lahore, Pakistan
        </p>
      </div>
    </>
  )
}
