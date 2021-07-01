import React, { Component } from "react";
import "./players.css";

class Players extends Component {
  render() {
    return (
      <div className="player-name">
        <input
          type="text"
          onBlur={this.props.enterPlayerName}
          name={this.props.playerLabel}
          placeholder={this.props.playerLabel}
        ></input>
      </div>
    );
  }
}

export default Players;
