import { FETCH_DATA_SUCCEEDED } from './data.actionConsts.js';

const initialState = [];

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
      newState = action.payload;
      break;
    default:;
  }
  return newState;
}

export {reducer}
