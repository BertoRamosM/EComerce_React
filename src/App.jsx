import { Products } from "./assets/components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { useFilters } from "./hooks/useFilters"
import Cart from "./assets/components/Cart";
import { CartProvider } from "./context/cart";



function App() {
  const { filterProducts, filters } = useFilters();
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
