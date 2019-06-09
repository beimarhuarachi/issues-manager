
import { ajax } from 'rxjs/ajax';

import { GITHUB_API_URL } from '../../common/constants';

const defaultIssueConfig = {
  user: 'facebook',
  repo: 'react',
  number: 34,
};

export function getIssueDetail({ user, repo, number } = defaultIssueConfig) {
  const GITHUB_REPOS_API = `${GITHUB_API_URL}/repos`;
  return ajax.getJSON(`${GITHUB_REPOS_API}/${user}/${repo}/issues/${number}`);
}
