export interface SessionFile {
  name: string
  language: string
  active?: boolean
  unsaved?: boolean
  lines: string[]
}

export interface CodeSessionData {
  id: string
  title: string
  files: SessionFile[]
  terminal?: string[]
  statusBar?: {
    branch?: string
    language?: string
    encoding?: string
    position?: string
  }
}

export const codeSessions: CodeSessionData[] = [
  {
    id: 'territory-plan',
    title: 'Territory planning session',
    files: [
      {
        name: 'territory_plan.py',
        language: 'Python',
        active: true,
        lines: [
          'def plan_territories(outlets, n=131, calls=(8, 14)):',
          '    """Weighted clustering + visit-frequency constraints."""',
          '    weights = outlets.sales * outlets.priority',
          '    seeds = weighted_kmeans(outlets.coords, n, weights)',
          '    routes = optimize_routes(seeds, min_c=calls[0], max_c=calls[1])',
          '    return assign_quarter(routes, weeks=12)',
        ],
      },
    ],
    terminal: [
      '$ python territory_plan.py --quarter Q3',
      'Clustering 506 outlets → 131 territories…',
      'Route feasibility 98.4%  ·  mean daily calls 11.2',
    ],
    statusBar: {
      branch: 'main',
      language: 'Python 3.11',
      encoding: 'UTF-8',
      position: 'Ln 4, Col 28',
    },
  },
]

export function getSession(id: string): CodeSessionData | undefined {
  return codeSessions.find((s) => s.id === id)
}
