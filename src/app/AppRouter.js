import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Issues = lazy(() => import('./issues/Issues'));
const IssueDetail = lazy(() => import('./issue-detail/IssueDetail'));
const NotFound = lazy(() => import('./common/NotFound'));

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
