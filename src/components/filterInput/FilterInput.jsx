import React from 'react';
import './filterInput.styles.scss';

/**
 * Component that implements filter functionality.
 *
 * @param {String} placeholder - The input placeholder.
 * @param {String} filterStr - The string that exposes current filter value.
 * @param {Function} onFilterItems - The input change callback.
 * @param {Function} onClearClicked - The callback for clear button click event.
 */
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
