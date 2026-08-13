import { credibility } from '@/data/site'

export default function Credibility() {
  return (
    <section aria-label="Clients and credentials" className="border-y border-[var(--line)] bg-[var(--panel-soft)]">
      <div className="container-page py-8 sm:py-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-dimmed">
          Trusted across markets
        </p>
        <ul className="credibility-list flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-10">
          {credibility.map((item) => (
            <li key={item.label} className="min-w-0">
              <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base">
                {item.label}
              </span>
              {item.detail ? (
                <span className="mt-0.5 block font-mono text-[10px] text-dimmed sm:text-[11px]">
                  {item.detail}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
