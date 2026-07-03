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
  const [currentLevel, setCurrentLevel] = useState(1)
  const [xp, setXp] = useState(1240)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  const handleGameComplete = (xpEarned) => {
    setXp(xp + xpEarned)
    if (currentLevel < 8) {
      setCurrentLevel(currentLevel + 1)
    }
    setCurrentPage('rewards')
  }

  if (!isLoggedIn) {
    return <AuthPage onLogin={handleLogin} />
  }

  const pages = {
    dashboard: <DashboardPage onNavigate={setCurrentPage} currentLevel={currentLevel} xp={xp} />,
    learning: <LearningModulePage onNavigate={setCurrentPage} currentLevel={currentLevel} />,
    game1: <GameOnePage onNavigate={setCurrentPage} onComplete={handleGameComplete} currentLevel={currentLevel} />,
    game2: <GameTwoPage onNavigate={setCurrentPage} onComplete={handleGameComplete} currentLevel={currentLevel} />,
    game3: <GameThreePage onNavigate={setCurrentPage} onComplete={handleGameComplete} currentLevel={currentLevel} />,
    game4: <GameFourPage onNavigate={setCurrentPage} onComplete={handleGameComplete} currentLevel={currentLevel} />,
    results: <ResultsPage onNavigate={setCurrentPage} currentLevel={currentLevel} xp={xp} />,
    rewards: <RewardsPage onNavigate={setCurrentPage} currentLevel={currentLevel} xp={xp} nextLevel={() => setCurrentPage('dashboard')} />,
  }

  return (
    <div className="app-container">
      <nav className="app-nav">
        <div className="nav-brand">🎮 MathQuest</div>
        <div className="nav-level">Level {currentLevel} • {xp} XP</div>
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
