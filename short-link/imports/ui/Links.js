import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../api/links';
import LinksList from './LinksList';
import {Meteor} from 'meteor/meteor';

export default class Link extends Component {

  logoutUser(){
    Accounts.logout();
  }

  componentWillMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  }

  onSubmit(event){
    const url = this.refs.url.value.trim();
    event.preventDefault();
    if (url){
      Meteor.call('links.insert', url);
      // Links.insert({url, userId: Meteor.userId()});
      this.refs.url.value = "";
    }
  }

  render() {
    return(
      <div>
        <button
          onClick ={this.logoutUser.bind(this)}
        > Sign Out </button>
        <LinksList />
        <p> Add a Link </p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="url" />
          <button> Add Link </button>
        </form>
      </div>
    )
  }
}
