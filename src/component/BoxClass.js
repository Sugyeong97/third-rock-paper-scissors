import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let result;

    if (
      this.props.title === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.title !== ""
    ) {
      result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      result = this.props.result;
    }

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
        />
        <h1>{result}</h1>
      </div>
    );
  }
}
