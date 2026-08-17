'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Client } from '@/data/clients'

/**
 * A logo when the artwork exists, the brand's wordmark when it doesn't — and it
 * degrades to the wordmark at runtime too, so a missing or broken file never
 * leaves a blank card.
 */
export default function ClientMark({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false)

  if (client.logo && !failed) {
    return (
      // Optimised rather than a plain <img>: the source PNGs run to ~350KB each
      // and render into a 46px-tall box.
      <span className="client-logo">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="180px"
          className="object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    )
  }

  return (
    <span className="client-mark" style={{ color: client.color }}>
      {client.mark}
    </span>
  )
}
