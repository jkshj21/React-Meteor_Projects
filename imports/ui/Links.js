import React, {Component} from 'react';
import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class Link extends Component {

  componentWillMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  }

  render() {
    return(
      <div>
        <PrivateHeader title="Your Links" />
        <div className="page-content">
          <LinksListFilters />
          <AddLink />
          <LinksList />
        </div>
      </div>
    )
  }
}
