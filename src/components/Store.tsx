import { products, type Product } from '../data/products'
import { TicketCard } from './TicketCard'

export function Store({ onBuy }: { onBuy: (product: Product) => void }) {
  return (
    <section id="store" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Digital asset store
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text">
            Take the playbooks with you
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Tear-off templates and frameworks pulled directly from the case
            studies above. Pay with Bakong KHQR — the file unlocks
            automatically once payment is confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <TicketCard key={product.id} product={product} onBuy={onBuy} />
          ))}
        </div>
      </div>
    </section>
  )
}
