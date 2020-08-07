import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, clearFilter } from '../../state/data/data.actions.js';
import { FilterInput } from './FilterInput.jsx';

const FilterInputContainer = (props) => {
  const dispatch = useDispatch();
  const filterStr = useSelector((state) => state.data.filterStr);

  const onFilterItems = (e) => {
    // TODO: add debounce
    dispatch(applyFilter(e.target.value));
  };
  const onClearClicked = () => dispatch(clearFilter());

  return FilterInput({
    ...props,
    filterStr,
    onFilterItems,
    onClearClicked,
  });
};

export { FilterInputContainer };
