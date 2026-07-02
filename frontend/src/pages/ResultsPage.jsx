const results = [
  { label: 'Final score', value: '780 XP' },
  { label: 'Accuracy', value: '83%' },
  { label: 'Time taken', value: '4 min' },
  { label: 'Concepts mastered', value: '3/4' },
]

const strengths = ['Right triangle ratios', 'Quick recall of sin/cos']
const needsPractice = ['Tangent with mixed examples', 'Speed under pressure']

function ResultsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fafc_0%,_#ecfeff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Results & progress</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Great work, Maya!</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Your recent practice shows strong progress. Review your results and keep building momentum with the suggested next lesson.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Level up</p>
            <p className="mt-2 text-3xl font-bold">+120 XP</p>
          </div>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {results.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-3 text-2xl font-black text-slate-900">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Progress chart</p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Lesson completion</span>
                  <span>78%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div className="h-3 w-[78%] rounded-full bg-sky-500" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Game mastery</span>
                  <span>84%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div className="h-3 w-[84%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Suggested next lesson</p>
            <div className="mt-4 rounded-2xl bg-white/10 p-4">
              <p className="text-lg font-bold">Using tangent in word problems</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">Practice a few mixed examples and then return to the next challenge set.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Strengths</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {strengths.map((item) => (
                <li key={item} className="rounded-2xl bg-amber-50 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Needs more practice</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {needsPractice.map((item) => (
                <li key={item} className="rounded-2xl bg-rose-50 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResultsPage
