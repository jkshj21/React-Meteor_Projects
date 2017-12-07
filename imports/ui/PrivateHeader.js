import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class PrivateHeader extends Component {

  render(){
    return(
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{this.props.title}</h1>
          <button clanssName="button--link-text" onClick ={() => Accounts.logout()}> Sign Out </button>
        </div>
      </div>
      )
    };

  }
