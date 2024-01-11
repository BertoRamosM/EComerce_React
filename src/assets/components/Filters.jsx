import { useState } from 'react';
import './Filters.css'

const Fitlers = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters(prevState => ({
      ...prevState, 
      minPrice : e.target.value
    }))
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor="price">Price from</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1748"
          onChange={handleChangePrice}
        />
        <span>{minPrice}</span>
      </div>
      <label htmlFor="category">Category </label>
      <select id="category">
        <option value="all">All</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
      </select>
    </div>
  );
};
 
export default Fitlers;