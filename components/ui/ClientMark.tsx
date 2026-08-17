'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Client } from '@/data/clients'

export default function ClientMark({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false)

  if (client.logo && !failed) {
    return (
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
