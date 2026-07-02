import { useEffect, useMemo, useState } from 'react'

const rounds = [
  { prompt: 'Find the ratio for the highlighted angle: sin', options: ['Opposite / Hypotenuse', 'Adjacent / Hypotenuse', 'Opposite / Adjacent'], answer: 'Opposite / Hypotenuse' },
  { prompt: 'Find the ratio for the highlighted angle: cos', options: ['Adjacent / Hypotenuse', 'Opposite / Adjacent', 'Opposite / Hypotenuse'], answer: 'Adjacent / Hypotenuse' },
  { prompt: 'Find the ratio for the highlighted angle: tan', options: ['Opposite / Adjacent', 'Adjacent / Hypotenuse', 'Opposite / Hypotenuse'], answer: 'Opposite / Adjacent' },
]

function GameThreePage() {
  const [currentRound, setCurrentRound] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState('Tap the correct ratio before time runs out.')

  const currentQuestion = useMemo(() => rounds[currentRound], [currentRound])

  useEffect(() => {
    if (timeLeft === 0) {
      setFeedback('Time is up! Try the next round and stay quick.')
      return
    }

    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [timeLeft])

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore((value) => value + 120)
      setFeedback('Correct! Quick thinking earns bonus XP.')
    } else {
      setFeedback('Not this time. Keep your eyes on the ratio.')
    }

    if (currentRound < rounds.length - 1) {
      setCurrentRound((value) => value + 1)
      setTimeLeft(10)
    } else {
      setCurrentRound(0)
      setTimeLeft(10)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),linear-gradient(135deg,_#fdf2f8_0%,_#f8fafc_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">Game 3</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Angle Hunter</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Spot the correct ratio quickly to earn bonus points before the timer runs out.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Timer</p>
            <p className="mt-2 text-3xl font-bold">{timeLeft}s</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Round {currentRound + 1}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{currentQuestion.prompt}</h2>
            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Scoreboard</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Points</p>
                <p className="mt-2 text-3xl font-bold">{score}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Feedback</p>
                <p className="mt-2 text-sm leading-7 text-slate-100">{feedback}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameThreePage
