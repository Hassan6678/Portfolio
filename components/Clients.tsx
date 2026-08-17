import ClientMark from '@/components/ui/ClientMark'
import Reveal from '@/components/ui/Reveal'
import { clients } from '@/data/clients'

export default function Clients() {
  return (
    <section id="clients" className="clients-section py-20 sm:py-24">
      {/* Dotted equirectangular map, generated into public/images/. It sits
          behind the cards at low opacity and is purely decorative. */}
      <div className="clients-map" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal>
          <div className="clients-head">
            <p className="section-label">Brands reached</p>
            <h2>
              Systems that ran against
              <br />
              <em>these shelves.</em>
            </h2>
            {/* No market count here: the band shows global brands, and naming a
                number shrinks the claim rather than sharpening it. The BAT work
                was UK, so "South Asia" alone was wrong as well. */}
            <p>
              Route-to-market, territory design, and retail analytics built for FMCG
              field operations across South Asia and the UK.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <ul className="clients-grid">
            {clients.map((client) => (
              <li key={client.slug} className="client-card" title={client.name}>
                <ClientMark client={client} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
