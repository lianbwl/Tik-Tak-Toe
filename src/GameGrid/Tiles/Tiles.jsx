import React, { Component } from "react";
import "./Tiles.scss";

class Tiles extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    let index = this.props.idx;
    this.props.positionClick(index);
  };

  render() {
    return (
      <button className="tiles-bts" onClick={this.handleClick}>
        <div className="tile-value">{this.props.value}</div>
      </button>
    );
  }
}

export default Tiles;
