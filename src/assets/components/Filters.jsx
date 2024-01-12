import { useState, useId } from 'react';
import './Filters.css'

const Fitlers = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters(prevState => ({
      ...prevState, 
      minPrice : e.target.value
    }))
  };

  const handleChangeCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <div className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price from</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1500"
          onChange={handleChangePrice}
        />
        <span>{minPrice}</span>
      </div>
      <label htmlFor={categoryFilterId}>Category </label>
      <select
        id={categoryFilterId}
      onChange={handleChangeCategory}>
        <option value="all">All</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
      </select>
    </div>
  );
};
 
export default Fitlers;