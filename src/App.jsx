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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          you clicked {count} times.
        </button>

      </div>
      <p className="read-the-docs">
        Copyright DesignLabs.lk
      </p>
    </>
  )
}

export default App
