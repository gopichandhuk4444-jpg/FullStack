import { useState } from 'react'
import { Counter } from './counter'
import './App.css'
import { LocalStorageExample } from './localstorage'
import { SessionStorageExample } from './sessionstorage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
      <LocalStorageExample/>
      <SessionStorageExample />
    </div>
  )
}

export default App
