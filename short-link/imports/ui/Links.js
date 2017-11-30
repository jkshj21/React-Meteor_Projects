import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class Link extends Component {
  logoutUser(){
    Accounts.logout();
  }

  componentWillMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  }

  render(){
    return(
      <div>
        <button
          onClick ={this.logoutUser.bind(this)}
        > Sign Out </button>
      </div>
    )
  }
}
