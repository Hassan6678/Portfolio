'use client'

import { useEffect, useRef, useState } from 'react'
import { navLinks, profile, socialLinks } from '@/data/site'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setVisible(y < lastY.current || y < 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          background: scrolled || menuOpen ? 'rgba(246, 243, 236, 0.92)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : undefined,
          borderBottom: scrolled || menuOpen ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <a
            href="#"
            className="font-display text-sm font-bold tracking-tight text-ink"
            onClick={closeMenu}
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8125rem] font-medium text-muted transition-colors hover:text-ink"
            >
              CV
            </a>
            <a href="#contact" className="btn-accent">
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span
                className="block h-[1.5px] w-full bg-ink transition-transform duration-200"
                style={{
                  transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : undefined,
                }}
              />
              <span
                className="block h-[1.5px] w-full bg-ink transition-opacity duration-200"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] w-full bg-ink transition-transform duration-200"
                style={{
                  transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : undefined,
                }}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--bg)] px-6 pb-10 pt-24 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display text-2xl font-bold tracking-tight text-ink"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3">
          <a href="#contact" className="btn-primary w-full" onClick={closeMenu}>
            Hire me
          </a>
          <a
            href={profile.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </div>
        <div className="mt-auto flex gap-5 pt-10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-ink"
              onClick={closeMenu}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
