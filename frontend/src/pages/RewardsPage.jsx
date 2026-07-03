const badges = [
  { name: 'Triangle Explorer', detail: 'Completed your first trigonometry lesson', unlocked: true },
  { name: 'Speed Solver', detail: 'Finished a timed game in under 3 minutes', unlocked: true },
  { name: 'Master of Ratios', detail: 'Answered 10 ratio questions correctly', unlocked: false },
]

function RewardsPage({ currentLevel, xp, nextLevel, onNavigate }) {
  const nextLevelNum = currentLevel < 8 ? currentLevel + 1 : currentLevel
  const levelTitles = {
    1: 'Introduction to Triangles',
    2: 'Right Triangles & Pythagorean Theorem',
    3: 'Introduction to Sine, Cosine, Tangent',
    4: 'Using Trig Ratios to Find Sides',
    5: 'Finding Angles Using Inverse Trig Functions',
    6: 'Real-World Applications of Trigonometry',
    7: 'Special Right Triangles (30-60-90 and 45-45-90)',
    8: 'Advanced Applications & Identities',
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fff7ed_0%,_#fef3c7_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:p-8 mb-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">🎉 Level {currentLevel} Complete!</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Fantastic Work, Maya!</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                You've mastered "{levelTitles[currentLevel]}" and earned awesome rewards!
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 px-5 py-4 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.25em]">Streak</p>
              <p className="mt-2 text-3xl font-bold">7 days 🔥</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">✨ Your Rewards</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-emerald-300 bg-white p-4">
                <p className="font-semibold text-slate-800">XP Earned</p>
                <p className="mt-2 text-3xl font-bold text-emerald-600">+400 XP</p>
              </div>
              <div className="rounded-xl border border-emerald-300 bg-white p-4">
                <p className="font-semibold text-slate-800">Total Progress</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{xp} XP</p>
              </div>
              <div className="rounded-xl border border-emerald-300 bg-white p-4">
                <p className="font-semibold text-slate-800">New Badge Unlocked!</p>
                <p className="mt-2 text-xl">Level {currentLevel} Master 🏆</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Next Level Unlocked</p>
            <div className="mt-4 rounded-xl bg-white/10 p-5 border border-white/20">
              <p className="text-3xl font-black mb-3">Level {nextLevelNum}</p>
              <p className="text-sm leading-6 text-slate-100 mb-4">
                {levelTitles[nextLevelNum] || 'Master Trigonometry!'}
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('learning')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                >
                  Learn Level {nextLevelNum}
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="w-full px-4 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>

        {currentLevel <= 8 && (
          <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">Badges Earned This Level</p>
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
        )}
      </div>
    </div>
  )
}

export default RewardsPage
