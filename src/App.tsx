import { useState } from 'react'
import { CaseStudies } from './components/CaseStudies'
import { CheckoutModal } from './components/CheckoutModal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Store } from './components/Store'
import type { Product } from './data/products'

function App() {
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-svh bg-bg text-ink">
      <Header />
      <Hero />
      <CaseStudies />
      <Store onBuy={setCheckoutProduct} />
      <Process />
      <Contact />
      <Footer />

      {checkoutProduct && (
        <CheckoutModal
          product={checkoutProduct}
          onClose={() => setCheckoutProduct(null)}
        />
      )}
    </div>
  )
}

export default App
