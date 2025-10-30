import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YukemuriClient } from '@yukemuri/api'
import type { User } from '../types/user'

function App() {
  const [count, setCount] = useState(0)

  const api = new YukemuriClient('https://dummyjson.com');
  
  async function testFetch() {
    try {
      const res = await api.get<User[]>("/users");
      console.log("✅ 成功:", res);
      console.log(api);
    } catch (err) {
      console.error("❌ エラー:", err);
    }
  }

  testFetch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
