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

export const onAuthChange = (isAuthenticated) => {

  const {pathname} = browserHistory.location;
  let isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  let isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/link');
  }
  else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }
}



export const routes =  (
  <Router history={browserHistory}>
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp}/>
        <Route path='/link' component={Links} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  </Router>
);











//
//
//
//
// import  { Meteor } from 'meteor/meteor';
// import React  from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Switch, Route, withRouter } from 'react-router';
// import createHistory from 'history/createBrowserHistory'
// import { Tracker } from 'meteor/tracker';
//
// import Signup from '../imports/ui/Signup';
// import Link from '../imports/ui/Link';
// import NotFound from '../imports/ui/NotFound';
// import Login from '../imports/ui/Login';
//
// const history = createHistory();
//
// const unauthenticatedPages = ['/','/signup'];
// const authenticatedPages = ['/links']
// let isUnauthenticatedPage = true;
// let isAuthenticatedPage = false;
//
// const ChangeTracker = withRouter(({match, location, history}) => {
//     const pathName = location.pathname;
//     isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
//     isAuthenticatedPage = authenticatedPages.includes(pathName);
//
//     return false;
// });
//
// const routes = (
//   <Router history={history}>
//     <div>
//     <Switch>
//     <Route exact path="/" component={Login}/>
//     <Route path="/signup" component={Signup}/>
//     <Route path="/links" component={Link}/>
//     <Route component={NotFound}/>
//     </Switch>
//     <ChangeTracker/>
//     </div>
//   </Router>
// );
//
// Tracker.autorun(()=>{
//   const isAuthenticated = !!Meteor.userId();
//     if (isAuthenticated){
//       if (isUnauthenticatedPage){
//         history.push('/links');
//       }
//     }else{
//       if (isAuthenticatedPage) {
//         history.push('/');
//       }
//     }
// });
//
//
// Meteor.startup(() => {
//   ReactDOM.render(routes, document.getElementById('app'));
// });
