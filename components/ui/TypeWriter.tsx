'use client'

import { useTypewriter } from '@/hooks/useTypewriter'

interface TypeWriterProps {
  strings: string[]
  className?: string
}

export default function TypeWriter({ strings, className = '' }: TypeWriterProps) {
  const text = useTypewriter({ strings, charDelay: 80, pauseDelay: 2200, deleteDelay: 40 })

  return (
    <span className={className} aria-label={strings[0]}>
      {text}
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  )
}
