import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { applyFilter, clearFilter } from '../../state/data/data.actions.js';
import { FilterInput } from './FilterInput.jsx';

/**
 * Container for <FilterInput> component.
 *
 * @param {Object} props
 * @param {String} props.placeholder
 */
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

FilterInputContainer.propTypes = {
  placeholder: PropTypes.string,
};
export { FilterInputContainer };
