'use client'

import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  strings: string[]
  charDelay?: number   // ms per character
  pauseDelay?: number  // ms to pause after finishing a string
  deleteDelay?: number // ms per character when deleting
}

export function useTypewriter({
  strings,
  charDelay = 90,
  pauseDelay = 2000,
  deleteDelay = 45,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = strings[stringIndex]

    if (!deleting && charIndex < target.length) {
      const t = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex + 1))
        setCharIndex((i) => i + 1)
      }, charDelay)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === target.length) {
      const t = setTimeout(() => setDeleting(true), pauseDelay)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex - 1))
        setCharIndex((i) => i - 1)
      }, deleteDelay)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setStringIndex((i) => (i + 1) % strings.length)
    }
  }, [charIndex, deleting, stringIndex, strings, charDelay, pauseDelay, deleteDelay])

  return displayed
}
