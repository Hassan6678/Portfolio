'use client'

import { useState } from 'react'
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
      // Plain <img>: these are small, already-optimised brand assets, and the
      // optimiser cannot help a file whose intrinsic size we don't know.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className="client-mark" style={{ color: client.color }}>
      {client.mark}
    </span>
  )
}
