import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

/*
1. Two Box (Title, Photo, Result)
2. Rock, Paper, Scissors Button
3. Show User Box Image = Button Click Value
4. Show Computer Box Image = Random Value
5. Produce Results with 3, 4.
6. The color of the border changes depending on the result. (Win - Green, Lose - Red, Tie - Black)
*/

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
    img: "https://cdn-icons.flaticon.com/png/512/2542/premium/2542049.png?token=exp=1650629501~hmac=9774332ed1ab9d4e0a14bd4d0dfbcbaa",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(imgChoice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(imgChoice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(imgChoice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return imgChoice[final];
  };

  const judgement = (user, computer) => {
    /*
    Standard = User

    user == computer → Tie

    user == "Rock", computer == "Scissors" → Win
    user == "Rock", computer == "Paper" → Lose

    user == "Paper", computer == "Rock" → Win
    user == "Paper", computer == "Scissors" → Lose

    user == "Scissors", computer == "Paper" → Win
    user == "Scissors", computer == "Rock" → Lose
    */

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

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("rock")} className="button">
          ROCK
        </button>
        <button onClick={() => play("paper")} className="button">
          PAPER
        </button>
        <button onClick={() => play("scissors")} className="button">
          SCISSORS
        </button>
      </div>
    </div>
  );
}

export default App;
