import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Links} from '../api/links';
import {Tracker} from 'meteor/tracker';

export default class LinksList extends Component {
  constructor(props){
    super(props);
    this.state={
      links:[]
    };
  }

  componentDidMount(){
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find().fetch();
      this.setState({links})
    })
  }

  componentWillUnmount(){
    this.linksTracker.stop();
  }

  renderLinkListItems(){
    return this.state.links.map((link) => {
      return <p key={link._id}> {link.url} </p>;
    })
  }

  render(){
    return (
    <div>
      <p> This is Links list </p>
      <div>
        {this.renderLinkListItems()}
      </div>
    </div>
    )
  }
}
