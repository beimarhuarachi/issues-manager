
import { connect } from 'react-redux';

import IssuesList from '../components/IssuesList';

const mapStateToProps = (state) => {
  return {
    issuesState: state.issuesPage.issues,
  };
};

const IssuesListContainer = connect(
  mapStateToProps,
  null,
)(IssuesList);

export default IssuesListContainer;
