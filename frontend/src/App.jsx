import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import LearningModulePage from './pages/LearningModulePage'
import GameOnePage from './pages/GameOnePage'
import GameTwoPage from './pages/GameTwoPage'
import GameThreePage from './pages/GameThreePage'
import GameFourPage from './pages/GameFourPage'
import ResultsPage from './pages/ResultsPage'
import RewardsPage from './pages/RewardsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  if (!isLoggedIn) {
    return <AuthPage onLogin={handleLogin} />
  }

  const pages = {
    dashboard: <DashboardPage onNavigate={setCurrentPage} />,
    learning: <LearningModulePage onNavigate={setCurrentPage} />,
    game1: <GameOnePage onNavigate={setCurrentPage} />,
    game2: <GameTwoPage onNavigate={setCurrentPage} />,
    game3: <GameThreePage onNavigate={setCurrentPage} />,
    game4: <GameFourPage onNavigate={setCurrentPage} />,
    results: <ResultsPage onNavigate={setCurrentPage} />,
    rewards: <RewardsPage onNavigate={setCurrentPage} />,
  }

  return (
    <div className="app-container">
      <nav className="app-nav">
        <div className="nav-brand">🎮 MathQuest</div>
        <div className="nav-buttons">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={currentPage === 'dashboard' ? 'active' : ''}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('learning')}
            className={currentPage === 'learning' ? 'active' : ''}
          >
            Learn
          </button>
          <button
            onClick={() => setCurrentPage('game1')}
            className={currentPage === 'game1' ? 'active' : ''}
          >
            Game 1
          </button>
          <button
            onClick={() => setCurrentPage('game2')}
            className={currentPage === 'game2' ? 'active' : ''}
          >
            Game 2
          </button>
          <button
            onClick={() => setCurrentPage('game3')}
            className={currentPage === 'game3' ? 'active' : ''}
          >
            Game 3
          </button>
          <button
            onClick={() => setCurrentPage('game4')}
            className={currentPage === 'game4' ? 'active' : ''}
          >
            Game 4
          </button>
          <button
            onClick={() => setCurrentPage('results')}
            className={currentPage === 'results' ? 'active' : ''}
          >
            Results
          </button>
          <button
            onClick={() => setCurrentPage('rewards')}
            className={currentPage === 'rewards' ? 'active' : ''}
          >
            Rewards
          </button>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="app-main">
        {pages[currentPage] || pages.dashboard}
      </main>
    </div>
  )
}

export default App
