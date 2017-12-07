import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {routes, onAuthChange} from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';
import {Session} from 'meteor/session';

  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
  });

// Session.set('name', 'Joohyong Han ')
// const name = Session.get('name');
// console.log()
Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDom.render(routes, document.getElementById('app'))
})
