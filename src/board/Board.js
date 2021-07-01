import React, { Component } from "react";
import Boxes from "../boxes/Boxes";
import Players from "../players/Players";
import "./Board.css";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      initialMark: "X",
      clickCounter: 0,
      player1: "player1",
      player2: "player2",
      gamestatus: "player1",
      newGame: true,
    };
  }

  handleClick = (e) => {
    if (this.state.newGame === true) {
      if (e.target.textContent === "") {
        e.target.textContent = this.state.initialMark;

        let changeMark = "O";
        let player = this.state.player2;
        if (this.state.initialMark === "O") {
          changeMark = "X";
          player = this.state.player1;
        }

        this.setState({
          initialMark: changeMark,
          clickCounter: this.state.clickCounter + 1,
          gamestatus: player,
        });

        if (this.checkMatch() === false) {
          this.setState({
            gamestatus: "Game Draw",
            newGame: false,
          });
        }
      }
    }
  };

  checkMatch = () => {
    let tdBoxes = document.querySelectorAll("td");

    //Check Row wise match

    if (
      tdBoxes[0].textContent === tdBoxes[1].textContent &&
      tdBoxes[0].textContent === tdBoxes[2].textContent &&
      tdBoxes[0].textContent !== ""
    ) {
      this.matchResult(tdBoxes[0], tdBoxes[1], tdBoxes[2]);
    } else if (
      tdBoxes[3].textContent === tdBoxes[4].textContent &&
      tdBoxes[3].textContent === tdBoxes[5].textContent &&
      tdBoxes[3].textContent !== ""
    ) {
      this.matchResult(tdBoxes[3], tdBoxes[4], tdBoxes[5]);
    } else if (
      tdBoxes[6].textContent === tdBoxes[7].textContent &&
      tdBoxes[6].textContent === tdBoxes[8].textContent &&
      tdBoxes[6].textContent !== ""
    ) {
      this.matchResult(tdBoxes[6], tdBoxes[7], tdBoxes[8]);
    }

    //check column wise match
    else if (
      tdBoxes[0].textContent === tdBoxes[3].textContent &&
      tdBoxes[0].textContent === tdBoxes[6].textContent &&
      tdBoxes[0].textContent !== ""
    ) {
      this.matchResult(tdBoxes[0], tdBoxes[3], tdBoxes[6]);
    } else if (
      tdBoxes[1].textContent === tdBoxes[4].textContent &&
      tdBoxes[1].textContent === tdBoxes[7].textContent &&
      tdBoxes[1].textContent !== ""
    ) {
      this.matchResult(tdBoxes[1], tdBoxes[4], tdBoxes[7]);
    } else if (
      tdBoxes[2].textContent === tdBoxes[5].textContent &&
      tdBoxes[2].textContent === tdBoxes[8].textContent &&
      tdBoxes[2].textContent !== ""
    ) {
      this.matchResult(tdBoxes[2], tdBoxes[5], tdBoxes[8]);
    }

    //check diagonal wise match
    else if (
      tdBoxes[0].textContent === tdBoxes[4].textContent &&
      tdBoxes[0].textContent === tdBoxes[8].textContent &&
      tdBoxes[0].textContent !== ""
    ) {
      this.matchResult(tdBoxes[0], tdBoxes[4], tdBoxes[8]);
    } else if (
      tdBoxes[6].textContent === tdBoxes[4].textContent &&
      tdBoxes[6].textContent === tdBoxes[2].textContent &&
      tdBoxes[6].textContent !== ""
    ) {
      this.matchResult(tdBoxes[6], tdBoxes[4], tdBoxes[2]);
    } else if (this.state.clickCounter >= 8) {
      return false;
    }
  };

  matchResult = (...args) => {
    //let mark = args[0].textContent;
    args.forEach((box) => {
      box.style.background = "gray";
    });
    let player = this.state.player1;
    if (this.state.initialMark === "O") {
      player = this.state.player2;
    }
    this.setState({
      gamestatus: player + " wins",
      newGame: false,
    });
  };

  newGame = () => {
    if (this.state.newGame === false) {
      location.reload();
    } else {
      let t = confirm("Proceed to new game?");
      if (t) {
        location.reload();
      }
    }
  };

  enterPlayerName = (e) => {
    if (this.state.newGame === true) {
      if (e.target.name === "player1") {
        this.setState({
          player1: e.target.value,
          gamestatus: e.target.value,
        });
      } else {
        this.setState({
          player2: e.target.value,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <h2>Tic Tac Toe</h2>
        <div className="players">
          <Players
            enterPlayerName={this.enterPlayerName}
            playerLabel="player1"
          />
          <Players
            enterPlayerName={this.enterPlayerName}
            playerLabel="player2"
          />
        </div>
        <table>
          <tbody>
            <Boxes handleClick={this.handleClick} />
            <Boxes handleClick={this.handleClick} />
            <Boxes handleClick={this.handleClick} />
          </tbody>
        </table>
        <h4>{this.state.gamestatus}</h4>
        <button className="new-game" onClick={this.newGame}>
          Start New Game
        </button>
      </div>
    );
  }
}

export default Board;
