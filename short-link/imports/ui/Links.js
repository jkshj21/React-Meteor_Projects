import React, {Component} from 'react';

export default class Link extends Component {
  logoutUser(){
    this.props.history.push('/');
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
