import React from 'react';

const FilterInput = ({
  placeholder,
  filterStr,
  onFilterItems,
  onClearClicked,
}) => (
  <div>
    <input
      placeholder={placeholder}
      onChange={onFilterItems}
      value={filterStr}
    />
    <button onClick={onClearClicked}>Clear</button>
  </div>
);

export { FilterInput };
