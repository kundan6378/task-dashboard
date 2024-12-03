import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button key={filter} onClick={() => onFilterChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
