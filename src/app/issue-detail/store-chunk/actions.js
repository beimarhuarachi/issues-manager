export const GET_ISSUE_DETAIL = 'GET_ISSUE_DETAIL';
export const GET_ISSUE_DETAIL_SUCCESS = 'GET_ISSUE_DETAIL_SUCCESS';
export const GET_ISSUE_DETAIL_FAILED = 'GET_ISSUE_DETAIL_FAILED';

export function getIssueDetail(user, repo, number) {
  return {
    type: GET_ISSUE_DETAIL,
    payload: {
      user,
      repo,
      number,
    },
  };
}

export function getIssueDetailSuccess(issue = {}) {
  return {
    type: GET_ISSUE_DETAIL_SUCCESS,
    payload: {
      issue,
    },
  };
}

export function getIssueDetailFailed(error) {
  return {
    type: GET_ISSUE_DETAIL_FAILED,
    payload: {
      error,
    },
  };
}
