import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react'
import ReactDom from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';

import Login from '../imports/ui/Login';
import SignUp from '../imports/ui/SignUp';
import Links from '../imports/ui/Links';
import NotFound from '../imports/ui/NotFound';

const browserHistory = createHistory();

const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/signup" component={SignUp}/>
      <Route path="/links" component={Links}/>
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});
