'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX - 16}px, ${ringY - 16}px)`
      }
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform += ' scale(1.5)'
    }
    const onLeave = () => {}

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#e8ff47',
          pointerEvents: 'none',
          zIndex: 99999,
          top: 0, left: 0,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 32, height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(232,255,71,0.4)',
          pointerEvents: 'none',
          zIndex: 99998,
          top: 0, left: 0,
          transition: 'transform 0.08s linear',
        }}
      />
    </>
  )
}
