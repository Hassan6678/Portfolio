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
    <div className="project-media relative aspect-[16/10] w-full overflow-hidden">
      <div
        className="project-fallback absolute inset-0"
        aria-hidden={failed ? undefined : true}
      >
        <div className="fallback-grid" />
        <div className="fallback-map"><i /><i /><i /><i /><i /></div>
        <span className="fallback-kicker">{project.company} / SYSTEM VIEW</span>
        <p>{project.title}</p>
        <div className="fallback-data">
          {project.metrics?.slice(0, 2).map((m) => <span key={m.label}>{m.value}<small>{m.label}</small></span>)}
        </div>
      </div>

      {!failed ? (
        <Image
          src={project.image}
          alt={`${project.title} project interface`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700"
          priority={priority}
          onError={() => setFailed(true)}
          unoptimized
        />
      ) : null}
    </div>
  )
}
