import React from 'react';
import './filterInput.styles.scss';

const FilterInput = ({
  placeholder,
  filterStr,
  onFilterItems,
  onClearClicked,
}) => (
  <div className="filter-input">
    <input
      placeholder={placeholder}
      onChange={onFilterItems}
      value={filterStr}
      className="filter-input__input"
    />
    <button onClick={onClearClicked} className="filter-input__clear-button">
      Clear
    </button>
  </div>
);

export { FilterInput };
