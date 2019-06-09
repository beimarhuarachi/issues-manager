import { combineEpics } from 'redux-observable';

import {
  chunkEpics as issuesEpics,
} from '../issues/store-chunk';

import {
  chunkEpics as issueDetailEpic,
} from '../issue-detail/store-chunk';

const rootEpic = combineEpics(
  issuesEpics,
  issueDetailEpic,
);

export default rootEpic;
