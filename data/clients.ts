export interface Client {
  /** Filename stem under public/images/clients/ */
  slug: string
  /** Accessible name, and the alt text when a logo file is present. */
  name: string
  /** Wordmark shown until a logo file is dropped in. Set as the brand writes it. */
  mark: string
  /** Brand colour, used for the wordmark. */
  color: string
  /**
   * Path to a logo file. Drop the artwork into public/images/clients/ and set
   * this — the card swaps from the wordmark to the image with no other change.
   */
  logo?: string
}

/**
 * Brands whose route-to-market, territory, and retail analytics work I've built
 * systems for — mostly through AiSight.ai engagements rather than direct
 * contracts, so the section is labelled as brands reached, not clients billed.
 */
export const clients: Client[] = [
  { slug: 'pepsico', name: 'PepsiCo', mark: 'PepsiCo', color: '#005CB4' },
  { slug: 'packages', name: 'Packages Limited', mark: 'Packages', color: '#0091D2' },
  { slug: 'national-foods', name: 'National Foods', mark: 'National Foods', color: '#D6202A' },
  { slug: 'ebm', name: 'EBM', mark: 'EBM', color: '#0F4C99' },
  { slug: 'bat', name: 'British American Tobacco', mark: 'BAT', color: '#1B2A47' },
  { slug: 'jazz', name: 'Jazz', mark: 'Jazz', color: '#E4002B' },
  { slug: 'suntory', name: 'Suntory', mark: 'SUNTORY', color: '#00A0E9' },
  { slug: 'philip-morris', name: 'Philip Morris International', mark: 'Philip Morris', color: '#005AAB' },
  { slug: 'shan', name: 'Shan Foods', mark: 'Shan', color: '#E32119' },
  { slug: 'pg', name: 'Procter & Gamble', mark: 'P&G', color: '#003DA5' },
  { slug: 'loreal', name: "L'Oréal", mark: "L'ORÉAL", color: '#111111' },
  { slug: 'unilever', name: 'Unilever', mark: 'Unilever', color: '#1F36C7' },
  { slug: 'reckitt', name: 'Reckitt', mark: 'reckitt', color: '#E5006D' },
  { slug: 'red-bull', name: 'Red Bull', mark: 'Red Bull', color: '#DB0A40' },
]
