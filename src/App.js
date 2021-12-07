import logo from "./logo.svg"
import "./App.css"
import { useEffect } from "react"
import { addAmount } from "./_helper/addAmount.helper"
import SimpleButton from "./components/SimpleButton"

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  
  useEffect(() => {
    addAmount(data)
    return () => addAmount(data)
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to
          reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fail to Learn React
        </a>
        <SimpleButton />
      </header>
    </div>
  )
}

export default App
