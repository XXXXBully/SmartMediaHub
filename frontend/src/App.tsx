import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PlatformAccounts from './pages/PlatformAccounts';
import ContentPublish from './pages/ContentPublish';
import ScheduledPublish from './pages/ScheduledPublish';
import DataStatistics from './pages/DataStatistics';
import DependencyManager from './pages/DependencyManager';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/platform-accounts" element={<PlatformAccounts />} />
        <Route path="/content-publish" element={<ContentPublish />} />
        <Route path="/scheduled-publish" element={<ScheduledPublish />} />
        <Route path="/data-statistics" element={<DataStatistics />} />
        <Route path="/dependency-manager" element={<DependencyManager />} />
        {/* 其他路由可以在这里添加 */}
      </Routes>
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
    </Router>
  )
}

export default App
