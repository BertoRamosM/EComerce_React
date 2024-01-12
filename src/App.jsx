import { Products } from "./assets/components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { useContext } from "react";
import { FiltersContext } from "./context/filters";

function useFilters() {
  /* const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
 */
  
  //consume the context from the useContext 
  const filters = useContext(FiltersContext)
  console.log(filters)
  const setFilters = () => { }


  
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price > filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filters, setFilters, filterProducts };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
