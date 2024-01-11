import { Products } from "./assets/components/Products"
import { products as initialProducts } from './mocks/products.json'
import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all', 
    minPrice: 0
  }
  )
  
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price > filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
      )
      )
    })
  }

  const filteredProducts = filterProducts(products)


  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>);
}

export default App
