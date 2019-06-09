import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Issues from './issues/Issues';
import IssueDetail from './issue-detail/IssueDetail';
import NotFound from './common/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/issues'/>}/>
      <Route path='/issues' component={Issues} />
      <Route path='/issueDetail/:issueNumber' component={IssueDetail}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
