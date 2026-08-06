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
      {
        name: 'constraints.yaml',
        language: 'YAML',
        lines: [
          'markets: [UK]',
          'territories: 131',
          'outlets: 506+',
          'daily_calls: [8, 14]',
        ],
      },
    ],
    terminal: [
      '$ python territory_plan.py --quarter Q3',
      'Clustering 506 outlets → 131 territories…',
      'Route feasibility 98.4%  ·  mean daily calls 11.2',
      'Wrote territories_q3.geojson',
    ],
    statusBar: {
      branch: 'main',
      language: 'Python 3.11',
      encoding: 'UTF-8',
      position: 'Ln 4, Col 28',
    },
  },
  {
    id: 'rtm-pipeline',
    title: 'RTM geospatial tools',
    files: [
      {
        name: 'voronoi_regions.py',
        language: 'Python',
        active: true,
        lines: [
          'async def build_regions(job_id: str, market: str):',
          '    points = await load_outlets(market)',
          '    tess = voronoi_tessellation(points)',
          '    clusters = hdbscan_labels(points, min_size=12)',
          '    await store_job(job_id, tess, clusters)  # SQLite WAL',
          '    return {"status": "ready", "regions": len(tess)}',
        ],
      },
      {
        name: 'job_142.json',
        language: 'JSON',
        lines: [
          '{',
          '  "job_id": 142,',
          '  "market": "PAK",',
          '  "tools": ["hdbscan", "voronoi", "landscan"],',
          '  "status": "200 OK"',
          '}',
        ],
      },
    ],
    terminal: [
      'INFO  job=142 market=PAK tools=20+',
      'INFO  wal checkpoint ok · tenants=5',
      'READY regions=84  elapsed=2.1s',
    ],
    statusBar: {
      branch: 'feat/rtm-tools',
      language: 'Python 3.11',
      encoding: 'UTF-8',
      position: 'Ln 6, Col 41',
    },
  },
]

export function getSession(id: string): CodeSessionData | undefined {
  return codeSessions.find((s) => s.id === id)
}
