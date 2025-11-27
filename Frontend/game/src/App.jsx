import { useState } from 'react'
import './App.css'
import { RockPaperSciessors } from './RockPaperSciessors'
import { HeadOrTail } from './HeadTail'
import { Calculate } from './calculator'
import Parent from './formvalidation/form_validation'

function App() {
  const [game, setGame] = useState(null)
  return (
    <>
      <Parent />
      {/* <button onClick={()=>setGame('home')}>Home</button>
      <button onClick={()=>setGame('HT')}>HeadTails</button>
      <button onClick={()=>setGame('RPS')}>RockPaperScissiors</button>
      <button onClick={()=>setGame('Cal')}>Calculator</button>
      {(game==='home') && (
        <h2>Welcome to Home</h2>
      )}
      {(game==='RPS') && <RockPaperSciessors/>}
      {(game==='HT') && <HeadOrTail />}
      {(game==='Cal') && <Calculate />} */}
    </>
  )
}
export default App
