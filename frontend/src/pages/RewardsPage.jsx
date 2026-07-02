const badges = [
  { name: 'Triangle Explorer', detail: 'Completed your first trigonometry lesson', unlocked: true },
  { name: 'Speed Solver', detail: 'Finished a timed game in under 3 minutes', unlocked: true },
  { name: 'Master of Ratios', detail: 'Answered 10 ratio questions correctly', unlocked: false },
]

const milestones = [
  { label: 'XP', value: '1,240' },
  { label: 'Level', value: '5' },
  { label: 'Next badge', value: '300 XP' },
]

function RewardsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fff7ed_0%,_#fef3c7_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Rewards & achievements</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Keep shining, Maya!</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Every lesson and game helps you unlock badges, grow your level, and celebrate your progress.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Current streak</p>
            <p className="mt-2 text-3xl font-bold">7 days</p>
          </div>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {milestones.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-3 text-2xl font-black text-slate-900">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Badges earned</p>
            <div className="mt-6 space-y-3">
              {badges.map((badge) => (
                <div key={badge.name} className={`rounded-2xl border px-4 py-3 ${badge.unlocked ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-800">{badge.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{badge.detail}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.unlocked ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                      {badge.unlocked ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Achievement message</p>
            <div className="mt-4 rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-black">You are on a roll!</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">Every completed lesson brings you closer to your next badge and a bigger reward.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RewardsPage
