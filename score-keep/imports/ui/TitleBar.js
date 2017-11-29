import React from 'react';

export default class TitleBar extends React.Component {

  renderSubTitle() {
    if (this.props.subtitle){
      return <h2 className="title-bar__subtitle"> {this.props.subtitle}</h2>
    }
  }
  render(){
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h2>{this.props.title}</h2>
            {this.renderSubTitle()}
          </div>
      </div>
    );
  }
}
