import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const authOptions = {
  manifestPath: "/manifest.json",
  redirectTo: "/",
  onFinish: (payload) => console.log(payload),
  appDetails: {
    name: "Vite and Stacks",
    icon: logo,
  },
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Stacks.js!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>

        <button onClick={() => window.stacks.showConnect(authOptions)}>
          Sign in with connect
        </button>
      </header>
    </div>
  )
}

export default App
