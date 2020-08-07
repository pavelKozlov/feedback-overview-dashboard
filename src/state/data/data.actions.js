import { fetchItems } from '../../services/feedbackService.js';
import {
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCEEDED,
  APPLY_FILTER,
} from './data.actionConsts.js';

/**
 * Action that fetches the data from the service and populates the result into redux.
 *
 * @returns {function(*): Q.Promise<any> | Promise<void> | undefined}
 */
const fetchData = () => async (dispatch) => {
  try {
    const data = await fetchItems();
    await dispatch({ type: FETCH_DATA_SUCCEEDED, payload: data.items });
  } catch (e) {
    dispatch({ type: FETCH_DATA_FAILED });
  }
};

/**
 * Filter items.
 *
 * @returns {function(*): *}
 */
const applyFilter = (filterStr) => (dispatch) =>
  dispatch({ type: APPLY_FILTER, payload: filterStr });

/**
 * Clears items filter.
 *
 * @returns {function(*): *}
 */
const clearFilter = () => (dispatch) =>
  dispatch({ type: APPLY_FILTER, payload: '' });

export { fetchData, applyFilter, clearFilter };
