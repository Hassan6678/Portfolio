import { ImageResponse } from 'next/og'
import { profile } from '@/data/site'

export const runtime = 'edge'
export const alt = 'Hassan Raza — ML Engineer & Data Scientist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** System fonts only — remote font fetches are the usual cause of OG failures. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f1efe7',
          color: '#0b1420',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              background: '#0b1420',
              color: '#c8f135',
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {profile.mark}
          </div>
          <div style={{ fontSize: 20, letterSpacing: 2, textTransform: 'uppercase', color: '#5e6871' }}>
            ML systems · geospatial · NLP
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: -3, lineHeight: 1.02 }}>
            ML systems built to
          </div>
          <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: -3, lineHeight: 1.02 }}>
            move operations.
          </div>
          <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.4, color: '#5e6871', maxWidth: 820 }}>
            Territory engines, FMCG analytics platforms, and NLP tools used by enterprise teams.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #0b1420',
            paddingTop: 24,
            fontSize: 22,
          }}
        >
          <div style={{ fontWeight: 700 }}>{profile.name}</div>
          <div style={{ color: '#5e6871' }}>{profile.role}</div>
        </div>
      </div>
    ),
    size
  )
}
