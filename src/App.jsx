import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> 
      </div>
      <h1>App Test</h1>
      <div className="card">
        <h2>Hey Janak</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          you clicked {count} times
        </button>

      </div>
      <p className="read-the-docs">
        😋 2023 DesignLabs.lk
      </p>
    </>
  )
}

export default App
