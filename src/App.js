import React, { Component } from "react";
import GameGrid from "./GameGrid/GameGrid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Tik-Tak-Toe</h2>
        </header>
        <GameGrid />
      </div>
    );
  }
}

export default App;
