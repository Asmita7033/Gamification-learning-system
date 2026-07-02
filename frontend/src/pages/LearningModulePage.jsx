import { useState } from 'react'

const practiceQuestions = [
  {
    prompt: 'If the opposite side is 3 and the hypotenuse is 5, what is sin(θ)?',
    options: ['3/5', '4/5', '5/3', '3/4'],
    answer: '3/5',
  },
  {
    prompt: 'Which ratio compares adjacent to hypotenuse?',
    options: ['sin', 'cos', 'tan', 'sec'],
    answer: 'cos',
  },
]

function LearningModulePage() {
  const [selected, setSelected] = useState({})
  const [feedback, setFeedback] = useState({})

  const handleAnswer = (questionIndex, option) => {
    const question = practiceQuestions[questionIndex]
    setSelected((current) => ({ ...current, [questionIndex]: option }))
    setFeedback((current) => ({
      ...current,
      [questionIndex]: option === question.answer ? 'Correct! Great job.' : 'Not quite. Try again with the triangle ratios.',
    }))
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fff7ed_0%,_#eef2ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Learning module</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Trigonometry: Ratios in a Right Triangle</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Trigonometry helps us understand the relationship between triangle sides and angles. Today, we will explore sine, cosine, and tangent using simple examples.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Why it matters</h2>
            <p className="mt-3 leading-7 text-slate-600">
              In a right triangle, the side opposite an angle and the side adjacent to that angle help us describe the triangle using ratios. These are called sine, cosine, and tangent.
            </p>

            <div className="mt-6 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Quick explanation</p>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                <li>• sin(θ) = opposite / hypotenuse</li>
                <li>• cos(θ) = adjacent / hypotenuse</li>
                <li>• tan(θ) = opposite / adjacent</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Visual example</p>
            <div className="mt-5 rounded-[1.5rem] bg-white/10 p-5">
              <div className="mx-auto flex max-w-xs flex-col items-center">
                <div className="h-28 w-44 rounded-b-[2rem] border-b-[3px] border-r-[3px] border-white" />
                <div className="mt-2 text-center text-sm text-slate-200">
                  <p>Opposite = 3</p>
                  <p>Adjacent = 4</p>
                  <p>Hypotenuse = 5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Practice</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Try these quick questions</h2>
            </div>
            <p className="text-sm text-slate-500">Pick the correct ratio and check your understanding.</p>
          </div>

          <div className="mt-6 space-y-5">
            {practiceQuestions.map((question, questionIndex) => (
              <div key={question.prompt} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">{question.prompt}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(questionIndex, option)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${selected[questionIndex] === option ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-700'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {feedback[questionIndex] && (
                  <p className={`mt-3 text-sm font-medium ${feedback[questionIndex].includes('Correct') ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {feedback[questionIndex]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default LearningModulePage
