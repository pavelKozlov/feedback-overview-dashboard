import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, clearFilter } from '../../state/data/data.actions.js';

const FilterInput = ({placeholder}) => {
  const dispatch = useDispatch();
  const filterStr = useSelector((state) => state.data.filterStr);

  const onFilterItems = (e) => {
    // TODO: add debounce
    dispatch(applyFilter(e.target.value));
  };
  const onClearClicked = () => dispatch(clearFilter());

  return (
    <div>
      <input placeholder={placeholder} onChange={onFilterItems} value={filterStr}/>
      <button onClick={onClearClicked}>CLear</button>
    </div>
  )
};

export { FilterInput };
