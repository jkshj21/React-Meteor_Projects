import React, {Component} from 'react';
import {Players} from './../api/players';


class AddPlayer extends Component{

  handleSubmit(event){
    let playerName = event.target.player.value;
    event.preventDefault();

    if (playerName){
      event.target.player.value = '';
      Players.insert({
        name: playerName,
        score: 0
      })
    }
  }

  render(){
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="player" placeholder="Player Name"/>
          <button className="button">Add Player </button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
