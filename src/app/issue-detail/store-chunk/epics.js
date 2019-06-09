import { ofType } from 'redux-observable';
import {
  debounceTime,
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';
import { of } from "rxjs";

import {
  GET_ISSUE_DETAIL,
  getIssueDetailSuccess,
  getIssueDetailFailed,
} from './actions';
import { getIssueDetail } from './../services/getIssueDetail';

export const getIssueDetailEpic = action$ =>
  action$.pipe(
    ofType(GET_ISSUE_DETAIL),
    debounceTime(100),
    switchMap(
      ({user, repo, number}) => {
        return getIssueDetail(user, repo, number)
          .pipe(
            map(response => getIssueDetailSuccess(response)),
            catchError(error => of(getIssueDetailFailed(error))),
          );
      },
    ),
  );