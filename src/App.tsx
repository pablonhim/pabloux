import { useState } from 'react'
import { CaseStudies } from './components/CaseStudies'
import { CheckoutModal } from './components/CheckoutModal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Store } from './components/Store'
import type { Product } from './data/products'

function App() {
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-svh bg-bg text-text">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Store onBuy={setCheckoutProduct} />
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
