import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import { getIssueDetail } from '../store-chunk/actions';
import { Alert } from 'reactstrap';
import IssueItem from '../components/IssueItem';

export class IssueItemContainer extends Component {

  componentDidMount() {
    const issueNumber = this.props.match.params.issueNumber;
    if (
      this.hasEnoughInfo(this.props.appInfo) &&
      issueNumber
    ) {
      const { githubUser: user, repo } = this.props.appInfo;
      this.props.getIssueDetail({
        user,
        repo,
        number: issueNumber,
      });
    }
  }

  hasEnoughInfo(appInfo) {
    return appInfo && appInfo.githubUser && appInfo.repo;
  }

  render() {
    const { appInfo, issueDetail } = this.props;
    const noEnoughInfo = !this.hasEnoughInfo(appInfo)
      ?
      (
        <Alert
          color="danger">
          <Trans i18nKey='issue-detail.error.no-enough-info'/>
        </Alert>
      ) : null;
    const hasError = issueDetail.error
      ? 
      ( 
        <Alert color="danger">
          <Trans i18nKey='issue-detail.error.get'/>
        </Alert>
      ) : null;
    return (
      <div style={{ paddingTop: '20px' }}>
        {noEnoughInfo}
        {hasError}
        {issueDetail.loaded && !issueDetail.error ? (
          <IssueItem
            issue={issueDetail.issue}
          />
        ) : null}
      </div>
    );
  }
}

const IssueItemReduxContainer = connect(
  (state) => ({
    appInfo: state.appInfo,
    issueDetail: state.issueDetailPage.issue,
  }),
  { getIssueDetail },
)(IssueItemContainer);

export default withRouter(IssueItemReduxContainer);
