import React, {Component} from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './Players';
export default class App extends Component {

  render(){
    return(
      <div>
        <TitleBar
          title={this.props.title}
          subtitle={this.props.subtitle}
          />
          <div className="wrapper">
            <PlayersList players={this.props.players} />
            <AddPlayer />
          </div>
      </div>
    )
  }
}
