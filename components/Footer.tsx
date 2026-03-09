const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hassan-raza-cs' },
  { label: 'GitHub', href: 'https://github.com/Hassan6678' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/hassanraza535' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr_0.9fr] gap-10 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#080a0c' }}>HR</span>
              <span className="font-syne font-bold text-base" style={{ color: 'var(--text)' }}>Hassan Raza</span>
            </div>
            <p className="font-inter text-sm leading-relaxed max-w-md" style={{ color: 'var(--muted)' }}>
              Machine Learning Engineer and Data Scientist building practical systems for retail intelligence, forecasting, geospatial analytics, and AI-enabled decision support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-bold text-sm mb-4" style={{ color: 'var(--text)' }}>Navigate</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-inter text-xs hover:text-accent transition-colors" style={{ color: 'var(--muted)' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-syne font-bold text-sm mb-4" style={{ color: 'var(--text)' }}>Connect</h4>
            <ul className="space-y-2.5 mb-5">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-inter text-xs hover:text-accent transition-colors" style={{ color: 'var(--muted)' }}>{l.label}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 font-inter text-xs" style={{ color: 'var(--muted)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--accent)' }}>&#9993;</span>
                hassanrazacs@hotmail.com
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--accent)' }}>&#9906;</span>
                Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs" style={{ color: 'var(--muted)' }}>&copy; 2026 Hassan Raza</p>
          <p className="font-inter text-xs" style={{ color: 'var(--muted)' }}>Machine Learning Engineer &amp; Data Scientist</p>
        </div>
      </div>
    </footer>
  )
}
