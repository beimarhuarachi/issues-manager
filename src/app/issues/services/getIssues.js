import { ajax } from 'rxjs/ajax';

import { GITHUB_API_URL } from '../../common/constants';

export function getIssues(user = 'facebook', repo = 'react') {
  const GITHUB_REPOS_API = `${GITHUB_API_URL}/repos`;
  return ajax.getJSON(`${GITHUB_REPOS_API}/${user}/${repo}/issues`);
}
