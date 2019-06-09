
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { issueDetailReducer } from './reducer';
import { getIssueDetailEpic } from './epics';

export const chunkReducer = combineReducers({
  issue: issueDetailReducer,
});

export const chunkEpics = combineEpics(
  getIssueDetailEpic,
);
