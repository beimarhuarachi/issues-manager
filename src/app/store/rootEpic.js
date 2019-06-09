import { combineEpics } from 'redux-observable';

import { chunkEpics as issuesEpics } from '../issues/store-chunk';

const rootEpic = combineEpics(
  issuesEpics,
);

export default rootEpic;
