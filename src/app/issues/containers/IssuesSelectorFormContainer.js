import { connect } from 'react-redux';

import { getIssues } from '../store-chunk/actions';
import { updateAppInfo } from '../../store/app-info/actions';

import IssuesSelectorForm from '../components/IssuesSelectorForm';

const IssuesSelectorFormContainer =  connect(
  null,
  { getIssues, updateAppInfo },
)(IssuesSelectorForm);

export default IssuesSelectorFormContainer;
