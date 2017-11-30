import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, Switch, withRouter} from 'react-router';
import Login from '../ui/Login';
import SignUp from '../ui/SignUp';
import Links from '../ui/Links';
import NotFound from '../ui/NotFound';
import createHistory from 'history/createBrowserHistory';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/link'];
const browserHistory = createHistory();

let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const ChangeTracker = withRouter(({match, location, history}) => {
    const pathName = location.pathname;
    isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    isAuthenticatedPage = authenticatedPages.includes(pathName);

    return false;
});

export const onAuthChange(isAuthenticated){
  if (isUnauthenticatedPage && isAuthenticated){
    browserHistory.push('/link');
  }
  else if (isAuthenticatedPage && !isAuthenticated){
    browserHistory.push('/');
  }
}

export const routes = (
  <Router history={browserHistory}>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp}/>
        <Route path='/link' component={Links} />
        <Route path='*' component={NotFound} />
      </Switch>
      <ChangeTracker />
    </div>
  </Router>
);
