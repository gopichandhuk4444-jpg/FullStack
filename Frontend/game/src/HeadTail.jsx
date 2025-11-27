import React, { useState } from "react";

export function HeadOrTail() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ["head", "tail"];

  const handlechoice = (choice) => {
    const comp = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(comp);
    determineResult(choice, comp);
  };

  const determineResult = (user, comp) => {
    if (user === comp) {
      setResult("You Win! It's a Match!");
    } else {
      setResult("You Lose! Try Again!");
    }
  };

  return (
    <div>
      <h3>Let's Play Head or Tail</h3>
      <div>
        <button onClick={() => handlechoice("head")}>Head</button>
        <button onClick={() => handlechoice("tail")}>Tail</button>
      </div>
      {userChoice && (
        <div>
          <p>Your Choice <b>{userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}</b></p>
          <p>Computer Choice <b>{computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</b></p>
          <p>Result <b>{result}</b></p>
        </div>
      )}
    </div>
  );
}