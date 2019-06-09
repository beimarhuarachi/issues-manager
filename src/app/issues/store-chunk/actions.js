
export const GET_ISSUES = 'GET_ISSUES';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILED = 'GET_ISSUES_FAILED';

export function getIssues(user, repo) {
  return {
    type: GET_ISSUES,
    payload: {
      user,
      repo,
    },
  };
}

export function getIssuesSuccess(issues = []) {
  return {
    type: GET_ISSUES_SUCCESS,
    payload: {
      issues,
    },
  };
}

export function getIssuesFailed(error) {
  return {
    type: GET_ISSUES_FAILED,
    payload: {
      error,
    },
  };
}
