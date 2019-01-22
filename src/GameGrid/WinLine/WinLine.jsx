import React, { Component } from "react";

class WinLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={"modal " + this.props.isHidden}>Hello, World!</div>
    );
  }
}

export default WinLine;
