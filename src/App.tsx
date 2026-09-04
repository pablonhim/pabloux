import { useState } from 'react'
import { CheckoutModal } from './components/CheckoutModal'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Store } from './components/Store'
import type { Product } from './data/products'

function App() {
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-svh bg-putty text-ink">
      <Header />
      <Hero />
      <Gallery />
      <Store onBuy={setCheckoutProduct} />
      <Process />
      <FAQ />
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
