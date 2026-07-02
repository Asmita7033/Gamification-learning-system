const stats = [
  { label: 'XP Points', value: '1,240', hint: '+180 this week' },
  { label: 'Lessons Done', value: '8', hint: '2 more to unlock a badge' },
  { label: 'Games Played', value: '12', hint: 'Goal: 15 this month' },
  { label: 'Accuracy', value: '87%', hint: 'Steady improvement' },
]

const achievements = [
  'Triangle Explorer Badge',
  'Speed Solver Star',
  'Quiz Champion',
]

const recentActivity = [
  { title: 'Solved right triangle ratios', time: '10 min ago' },
  { title: 'Completed angle hunter challenge', time: '1 hour ago' },
  { title: 'Unlocked a new lesson', time: '2 hours ago' },
]

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fafc_0%,_#eff6ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Student dashboard</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Welcome back, Maya!</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                You are making great progress in trigonometry. Keep practicing and your next reward is just around the corner.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Level 5</p>
              <p className="mt-2 text-3xl font-bold">⭐ Explorer</p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-black text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-emerald-600">{item.hint}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">Progress</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Current learning streak</h2>
              </div>
              <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">7 days</div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Trigonometry basics</span>
                  <span>82%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div className="h-3 w-[82%] rounded-full bg-sky-500" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Angles and ratios</span>
                  <span>64%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div className="h-3 w-[64%] rounded-full bg-emerald-500" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Challenge mode</span>
                  <span>91%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100">
                  <div className="h-3 w-[91%] rounded-full bg-violet-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Badges</p>
            <div className="mt-4 space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Recent activity</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Your latest wins</h2>
            </div>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              View all
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {recentActivity.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="text-sm text-slate-500">Completed just now</p>
                </div>
                <span className="text-sm font-medium text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardPage
