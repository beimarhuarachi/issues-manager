
import { combineReducers } from 'redux';

import { chunkReducer as issuesReducer } from '../issues/store-chunk';

function appInfoReducer(state = {}) {
  return state;
}

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
  issuesPage: issuesReducer,
});

export default rootReducer;
