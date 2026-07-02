import { useMemo, useState } from 'react'

const problem = {
  title: 'Triangle Builder',
  prompt: 'Match the side labels to the correct trigonometric ratio for the highlighted angle.',
  labels: ['Opposite', 'Adjacent', 'Hypotenuse'],
  correct: ['Opposite', 'Adjacent', 'Hypotenuse'],
}

const ratioQuestions = [
  { label: 'sin', expected: 'Opposite / Hypotenuse' },
  { label: 'cos', expected: 'Adjacent / Hypotenuse' },
  { label: 'tan', expected: 'Opposite / Adjacent' },
]

function GameTwoPage() {
  const [selectedLabels, setSelectedLabels] = useState({})
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState(0)

  const currentRatio = useMemo(() => ratioQuestions[0], [])

  const handleSelect = (label) => {
    setSelectedLabels((current) => ({ ...current, [currentRatio.label]: label }))
  }

  const verify = () => {
    const chosen = selectedLabels[currentRatio.label]
    if (chosen === problem.correct[0] || chosen === problem.correct[1] || chosen === problem.correct[2]) {
      setFeedback(`Great! ${currentRatio.label} is ${currentRatio.expected}.`)
      setScore((value) => value + 100)
      return
    }

    setFeedback('Try again by checking the triangle sides carefully.')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#fdf2f8_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-600">Game 2</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Triangle Builder</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Choose the side labels that belong to each ratio and build a stronger understanding of trigonometry.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Score</p>
            <p className="mt-2 text-3xl font-bold">{score}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Challenge</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{problem.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{problem.prompt}</p>

            <div className="mt-6 rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-5">
              <div className="mx-auto flex max-w-xs flex-col items-center">
                <div className="h-28 w-44 rounded-b-[2rem] border-b-[3px] border-r-[3px] border-slate-700" />
                <div className="mt-4 text-sm text-slate-600">Angle marked at the corner</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Ratio match</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Current ratio</p>
                <p className="mt-2 text-xl font-bold">{currentRatio.label}</p>
              </div>
              <div className="grid gap-2">
                {problem.labels.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSelect(label)}
                    className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-left text-sm font-medium text-slate-100"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={verify}
                className="w-full rounded-2xl bg-fuchsia-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Check answer
              </button>
              <div className="rounded-2xl bg-white/10 p-4 text-sm leading-7 text-slate-100">
                {feedback || 'Pick one side label and verify your choice.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameTwoPage
