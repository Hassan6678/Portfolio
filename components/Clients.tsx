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
            {/* Regions, not a market count: the band shows global brands, so a
                number shrinks the claim. All three are named because the work
                spans South Asian RTM, UK field planning, and North American
                clients — "Europe" alone would drop the last of those. */}
            <p>
              Route-to-market, territory design, and retail analytics built for FMCG
              field operations across South Asia, Europe, and North America.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          {/* Two passes of the same list: the track scrolls exactly one pass to
              the left and restarts, so the loop has no seam. The second pass is
              hidden from assistive tech — it is the same thirteen brands. */}
          <div className="clients-marquee">
            <ul className="clients-track">
              {clients.map((client) => (
                <li key={client.slug} className="client-card" title={client.name}>
                  <ClientMark client={client} />
                </li>
              ))}
              {clients.map((client) => (
                <li
                  key={`${client.slug}-echo`}
                  className="client-card is-echo"
                  aria-hidden="true"
                >
                  <ClientMark client={client} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
