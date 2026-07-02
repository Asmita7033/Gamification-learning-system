import { useEffect, useMemo, useState } from 'react'

const quizQuestions = [
  {
    prompt: 'Which ratio uses opposite and hypotenuse?',
    options: ['sin', 'cos', 'tan'],
    answer: 'sin',
  },
  {
    prompt: 'Which ratio uses adjacent and hypotenuse?',
    options: ['sin', 'cos', 'tan'],
    answer: 'cos',
  },
  {
    prompt: 'Which ratio uses opposite and adjacent?',
    options: ['sin', 'cos', 'tan'],
    answer: 'tan',
  },
]

function GameFourPage() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [feedback, setFeedback] = useState('Answer quickly to beat the clock.')
  const [finished, setFinished] = useState(false)

  const currentQuestion = useMemo(() => quizQuestions[questionIndex], [questionIndex])

  useEffect(() => {
    if (finished || timeLeft === 0) {
      if (!finished && timeLeft === 0) {
        setFinished(true)
        setFeedback('Time is up! Review the ratios and try again.')
      }
      return
    }

    const timer = window.setTimeout(() => setTimeLeft((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [timeLeft, finished])

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setScore((value) => value + 150)
      setFeedback('Correct! You cleared another challenge.')
    } else {
      setFeedback('Not quite. The ratio is still a good concept to review.')
    }

    if (questionIndex === quizQuestions.length - 1) {
      setFinished(true)
      return
    }

    setQuestionIndex((value) => value + 1)
    setTimeLeft(15)
  }

  const restartQuiz = () => {
    setQuestionIndex(0)
    setScore(0)
    setTimeLeft(15)
    setFeedback('Answer quickly to beat the clock.')
    setFinished(false)
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fefce8_0%,_#f0fdf4_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Game 4</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Math Challenge</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              A timed quiz with increasing difficulty and a final score summary at the end.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Time left</p>
            <p className="mt-2 text-3xl font-bold">{timeLeft}s</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {!finished ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Question {questionIndex + 1}</p>
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
              </>
            ) : (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Finished</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Quiz complete</h2>
                <p className="mt-3 leading-7 text-slate-600">You finished the challenge. Review your score and restart any time.</p>
                <button
                  type="button"
                  onClick={restartQuiz}
                  className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Restart quiz
                </button>
              </div>
            )}
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Results</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Score</p>
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

export default GameFourPage
