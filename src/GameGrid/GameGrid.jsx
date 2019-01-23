import React, { Component } from "react";
import Tiles from "./Tiles/Tiles";
import WinLine from "./WinLine/WinLine";
import "./GameGrid.scss";

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameboard: ["", "", "", "", "", "", "", "", ""],
      usedSquares: [],
      isXturn: true,
      endOfGame: false,
      isWinLineHidden: true,
      winLinePos: ""
    };
  }

  IsEndGame = () => {
    let board = this.state.gameboard;
    let turns = this.state.usedSquares.length;
    console.log(this.state.usedSquares.length);

    for (let i = 0; i <= 6; i = i + 3) {
      if (
        board[i] !== "" &&
        board[i] === board[i + 1] &&
        board[i + 1] == board[i + 2]
      ) {
        this.setState({
          isWinLineHidden: false,
          winLinePos: "r" + i
        }, () => {
          console.log(board[i] + " " + this.state.winLinePos + " -won horizontaly");
          return true;
        })
      }
    }

    for (let i = 0; i <= 2; i = i + 1) {
      if (
        board[i] !== "" &&
        board[i] === board[i + 3] &&
        board[i + 3] == board[i + 6]
      ) {
        this.setState({
          isWinLineHidden: false,
          winLinePos: "c" + i
        }, () => {
          console.log(board[i] + " " + this.state.winLinePos + " -won vertically");
          return true;
        })
      }
    }

    for (let i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
      if (
        board[i] !== "" &&
        board[i] == board[i + j] &&
        board[i + j] === board[i + 2 * j]
      ) {
        this.setState({
          isWinLineHidden: false,
          winLinePos: "d" + i
        }, () => {
          console.log(board[i] + " " + this.state.winLinePos + "-won diagonaly");
          return true;
        })
      }
    }

    if (turns === 9) {
      console.log("draw game");
      return true;
    }

    return false;
  };

  SetPosition = pos => {
    if (this.state.gameboard[pos] === "" && this.state.isXturn) {
      let onPlaygrid = [...this.state.gameboard];
      onPlaygrid[pos] = "X";
      this.setState(
        {
          gameboard: onPlaygrid,
          isXturn: !this.state.isXturn,
          usedSquares: [...this.state.usedSquares, pos]
        },
        () => {
          if (!this.IsEndGame()) {
            console.log(this.state.usedSquares.length);
            this.ChooseOmove();
          }
        }
      );
    }
  };

  ChooseOmove = () => {
    let num = Math.floor(Math.random() * 8);
    return this.state.usedSquares.includes(num)
      ? this.ChooseOmove()
      : this.botPlaying(num);
  };

  botPlaying = Omove => {
    if (this.state.gameboard[Omove] === "") {
      let onPlaygrid = [...this.state.gameboard];
      onPlaygrid[Omove] = "O";
      this.setState(
        {
          gameboard: onPlaygrid,
          isXturn: !this.state.isXturn,
          usedSquares: [...this.state.usedSquares, Omove]
        },
        () => {
          this.IsEndGame();
        }
      );
    } else {
      this.ChooseOmove();
    }
  };

  tileBlock = index => {
    return (
      <Tiles
        key={index}
        positionClick={this.SetPosition}
        idx={index}
        value={this.state.gameboard[index]}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          {!this.state.isWinLineHidden && <WinLine position={this.state.winLinePos}/>}
          {this.state.gameboard.map((i, index) => {
            return this.tileBlock(index);
          })}
        </div>
      </div>
    );
  }
}

export default GameGrid;
