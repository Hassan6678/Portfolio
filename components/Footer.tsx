export default function Footer() {
  return (
    <footer
      className="px-6 py-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
          &copy; 2026 Hassan Raza &middot; ML Engineer &amp; Data Scientist
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
          Lahore, Pakistan
        </p>
      </div>
    </footer>
  )
}
