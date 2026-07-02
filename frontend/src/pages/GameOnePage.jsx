import { useMemo, useState } from 'react'

const questions = [
  {
    prompt: 'What does sin(θ) represent?',
    options: ['Opposite / Hypotenuse', 'Adjacent / Hypotenuse', 'Opposite / Adjacent', 'Hypotenuse / Opposite'],
    answer: 'Opposite / Hypotenuse',
  },
  {
    prompt: 'What does tan(θ) represent?',
    options: ['Opposite / Adjacent', 'Adjacent / Hypotenuse', 'Opposite / Hypotenuse', 'Hypotenuse / Adjacent'],
    answer: 'Opposite / Adjacent',
  },
  {
    prompt: 'What is the value of cos(θ) if adjacent = 4 and hypotenuse = 5?',
    options: ['4/5', '3/5', '5/4', '4/3'],
    answer: '4/5',
  },
]

function GameOnePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('Choose the correct answer to move forward.')
  const [selected, setSelected] = useState(null)

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex])

  const handleAnswer = (option) => {
    setSelected(option)

    if (option === currentQuestion.answer) {
      setScore((value) => value + 100)
      setMessage('Correct! You earned 100 XP.')
    } else {
      setMessage('Not quite. Review the ratio and try another round.')
    }
  }

  const goNext = () => {
    if (currentIndex === questions.length - 1) {
      setCurrentIndex(0)
      setSelected(null)
      setMessage('Adventure complete! Your score has been saved.')
      return
    }

    setCurrentIndex((value) => value + 1)
    setSelected(null)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%),linear-gradient(135deg,_#fef3c7_0%,_#f8fafc_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Game 1</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Trigonometry Adventure</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Answer each question to collect XP and move through the adventure levels.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Score</p>
            <p className="mt-2 text-3xl font-bold">{score}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Level {currentIndex + 1}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{currentQuestion.prompt}</h2>

            <div className="mt-5 space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${selected === option ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-700'}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              {currentIndex === questions.length - 1 ? 'Restart Adventure' : 'Next Question'}
            </button>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Mission status</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">XP earned</p>
                <p className="mt-2 text-3xl font-bold">{score}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Feedback</p>
                <p className="mt-2 text-sm leading-7 text-slate-100">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameOnePage
