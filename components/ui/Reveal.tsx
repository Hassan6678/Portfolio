'use client'

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: ElementType
}

export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // Fire as soon as the top edge crosses 88% of the viewport. Requiring 12%
      // of the element to be visible made tall blocks sit blank well into view
      // and then appear all at once.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
