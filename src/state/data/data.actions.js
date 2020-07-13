import {fetchItems} from '../../services/feedbackService.js';
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCEEDED } from './data.actionConsts.js';

/**
 * Action that fetches the data from the service and populates the result into redux.
 *
 * @returns {function(*): Q.Promise<any> | Promise<void> | undefined}
 */
const fetchData = () => (dispatch) => fetchItems.then(data =>
  dispatch(FETCH_DATA_SUCCEEDED, {payload: data})
).catch(() => dispatch(FETCH_DATA_FAILED));

export {
  fetchData
}
