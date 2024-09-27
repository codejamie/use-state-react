import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Activity: React useState</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count -= 1)}>-   
          </button>
          <h2 className='counter'>{count}</h2>
          <button onClick={() => setCount((count) => count += 1)}>+  
          </button>
        </div>
      </div>
    </>
  )
}

export default App
