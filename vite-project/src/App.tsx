import { useState } from 'react'
import  pLogo from './../public/pFavicon.png'
import tpang from './../public/toddpang-modified.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://toddpang.com" target="_blank">
          <img src={tpang} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + ToddPang</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and P logos to learn more
      </p>
    </div>
  )
}

export default App
