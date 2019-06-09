
import { combineReducers } from 'redux';

import { chunkReducer as issuesReducer } from '../issues/store-chunk';

import { chunkReducer as issueDetailReducer } from '../issue-detail/store-chunk';
import { appInfoReducer } from './app-info/reducer';

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
  issuesPage: issuesReducer,
  issueDetailPage: issueDetailReducer,
});

export default rootReducer;
