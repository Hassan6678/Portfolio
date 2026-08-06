'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/data/projects'

interface ProjectMediaProps {
  project: Project
  priority?: boolean
}

export default function ProjectMedia({ project, priority = false }: ProjectMediaProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 flex items-center justify-center px-6"
        style={{ background: project.placeholderGradient }}
        aria-hidden={failed ? undefined : true}
      >
        <p className="font-display text-center text-base font-semibold text-ink/25">
          {project.title}
        </p>
      </div>

      {!failed ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          onError={() => setFailed(true)}
          unoptimized
        />
      ) : null}
    </div>
  )
}
