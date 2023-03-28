import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
  <>
    <Header setFilters={setFilters} />
    <Products products={filteredProducts}/>
  </>
  )
}

export default App
