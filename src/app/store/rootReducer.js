
import { combineReducers } from 'redux';

import { chunkReducer as issuesReducer } from '../issues/store-chunk';

import { chunkReducer as issueDetailReducer } from '../issue-detail/store-chunk';

function appInfoReducer(state = {}) {
  return state;
}

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
  issuesPage: issuesReducer,
  issueDetailPage: issueDetailReducer,
});

export default rootReducer;
