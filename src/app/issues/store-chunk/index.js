
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { issuesReducer } from './reducer';
import { getIssuesEpic } from './epics';

export const chunkReducer = combineReducers({
  issues: issuesReducer,
});

export const chunkEpics = combineEpics(
  getIssuesEpic,
);
