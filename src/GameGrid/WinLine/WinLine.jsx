import React, { Component } from "react";
import "./WinLine.scss";

class WinLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={"line " + this.props.position}></div>
    );
  }
}

export default WinLine;
