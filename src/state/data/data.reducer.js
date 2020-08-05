import { FETCH_DATA_SUCCEEDED, APPLY_FILTER } from './data.actionConsts.js';

const initialState = {
  allItems: [],
  items: [],
  filterStr: '',
};

const getFilteredItems = (allItems, filterStr) => allItems.filter((item) =>
  // eslint-disable-next-line eqeqeq
  item.rating == filterStr || item.comment.includes(filterStr)
);

/**
 * Data reducer.
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case FETCH_DATA_SUCCEEDED:
      newState = {
        ...state,
        allItems: action.payload,
        items: getFilteredItems(action.payload, state.filterStr)
      };
      break;
    case APPLY_FILTER:
      newState = {
        ...state,
        filterStr: action.payload,
        items: getFilteredItems(state.allItems, action.payload)
      };
      break;
    default:;
  }
  return newState;
};

export { reducer };
