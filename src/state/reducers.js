import { combineReducers } from 'redux';

import { reducer as data } from './data/data.reducer.js';

const rootReducer = combineReducers({
  data,
});

export { rootReducer };
