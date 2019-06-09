import React from 'react';

import IssuesListContainer from './containers/IssuesListContainer';
import IssuesSelectorFormContainer from './containers/IssuesSelectorFormContainer';

const Issues = () => {
  return (
    <div className='issues'>
      <IssuesSelectorFormContainer/>
      <IssuesListContainer/>
    </div>
  );
};

export default Issues;
