import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const imgChoice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/3413/3413208.png",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/512/887/887997.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2016/07/29/21/41/school-1555907_960_720.png",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  randomChoice = () => {
    let itemArray = Object.keys(imgChoice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return imgChoice[final];
  };

  play = (userChoice) => {
    let computerChoice = this.randomChoice();

    this.setState({
      userSelect: imgChoice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(imgChoice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    console.log(user.name, computer.name);

    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "Win" : "Lose";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "Win" : "Lose";
    }
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("rock")} className="button">
            ROCK
          </button>
          <button onClick={() => this.play("paper")} className="button">
            PAPER
          </button>
          <button onClick={() => this.play("scissors")} className="button">
            SCISSORS
          </button>
        </div>
      </div>
    );
  }
}
