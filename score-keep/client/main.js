import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players'
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {
      sort: {
        score:-1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    const title = "Score Keeper";
    const subtitle = "Created by Joohyong Han";
    ReactDom.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'))
  });
});
