import React, { useState } from 'react';

export function RockPaperSciessors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices=['rock','paper','scissors']
  
  
  const handleClick=(choice)=>{
    const comp = choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(comp)
    setUserChoice(choice)
    winner(choice,comp)
  }

  const winner=(user,comp)=>{
    if(user===comp){
      setResult("It's a Tie")
    }
    else if((user === 'rock' && comp === 'scissors')||(user === 'paper' && comp === 'rock')||(user === 'scissors' && comp === 'paper')
    ){
      setResult('User wins the Round')
    }
    else{
      setResult('Computer wins the round')
    }
  }

  return (
    <div>
      <h2>Let's play Rock Paper Scissors</h2>

      <div>

      {choices.map((choice)=>(
        <button key={choice} onClick={()=>handleClick(choice)}>{choice.charAt(0).toUpperCase()+choice.slice(1)}</button>
      ))}

      </div>

      {userChoice && (
        <div>
          <p>Your choice <b>{userChoice}</b></p>
          <p>Computer choice <b>{computerChoice}</b></p>
          <p>Result <b>{result}</b></p>
        </div>
      )}
    </div>
  )
}
