export interface SystemStage {
  label: string
  active?: boolean
}

export interface SystemStat {
  value: string
  label: string
}

export interface SystemSeries {
  label: string
  /** Caption under the bars, e.g. the window the series covers. */
  unit: string
  values: number[]
  readout: string
  /** Operating window the run had to stay inside; drawn over the bars. */
  band: { min: number; max: number }
  /** Top of the plot. Sits above band.max so the ceiling reads as a ceiling. */
  axisMax: number
}

export interface SystemPanelData {
  id: string
  /** Screen-reader description of the panel as a whole. */
  title: string
  system: string
  context: string
  stages: SystemStage[]
  stats: SystemStat[]
  series: SystemSeries
}

export const systemPanels: SystemPanelData[] = [
  {
    id: 'territory-engine',
    title: 'Territory planning engine for BAT UK — pipeline state and run metrics',
    system: 'Territory engine',
    context: 'BAT UK · Q3',
    stages: [
      { label: 'Ingest' },
      { label: 'Cluster' },
      { label: 'Route', active: true },
      { label: 'Assign' },
    ],
    stats: [
      { value: '506', label: 'Outlets scored' },
      { value: '131', label: 'Territories' },
      { value: '98.4%', label: 'Route feasible' },
    ],
    series: {
      label: 'Calls / day',
      unit: '12-week quarter · band = 8–14 calls',
      values: [8, 9, 11, 12, 14, 13, 11, 12, 10, 11, 13, 12],
      readout: '11.2 avg',
      band: { min: 8, max: 14 },
      axisMax: 16,
    },
  },
]

export function getSystemPanel(id: string): SystemPanelData | undefined {
  return systemPanels.find((p) => p.id === id)
}
