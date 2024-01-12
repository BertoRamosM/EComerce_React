import {  useId } from 'react';
import './Filters.css'
import { useFilters } from '../../hooks/useFilters';

const Filters = () => {
  const { setFilters, filters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState, 
      minPrice : e.target.value
    }))
  };

  const handleChangeCategory = (e) => {
    setFilters (prevState => ({
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
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
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
 
export default Filters;