import React, {Component} from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class Players extends Component {


  renderPlayers(){
    if (this.props.players === 0){
      return (
        <div className="item">
          <p className="item__message"> Add your first player to get started </p>
        </div>
      )
    }

    else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player} />
      });
    }
  }

  render(){
    return(
      <div>
        <FlipMove easing="cubic-bezier(0,0.7,0.8,0.1)" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}
