import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';


Meteor.startup( () => {
  // Players.insert({
  //   name:'Kevin',
  //   score: 100
  // });
  console.log(Players.find().fetch());
});
