import { ofType } from 'redux-observable';
import {
  debounceTime,
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';
import { of } from "rxjs";

import {
  GET_ISSUES,
  getIssuesSuccess,
  getIssuesFailed,
} from './actions';
import { getIssues } from './../services/getIssues';

export const getIssuesEpic = action$ =>
  action$.pipe(
    ofType(GET_ISSUES),
    debounceTime(100),
    switchMap(
      ({ payload }) => {
        return getIssues(payload.user, payload.repo)
          .pipe(
            map(response => getIssuesSuccess(response)),
            catchError(error => of(getIssuesFailed(error))),
          );
      },
    ),
  );
