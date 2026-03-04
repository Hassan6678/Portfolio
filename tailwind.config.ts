import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#080a0c',
        surface:  '#0f1115',
        surface2: '#161b22',
        border:   '#21262d',
        accent:   '#e8ff47',
        accent2:  '#47c8ff',
        text:     '#e6edf3',
        muted:    '#6e7681',
        dimmed:   '#8b949e',
      },
      fontFamily: {
        syne:  ['var(--font-syne)', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
