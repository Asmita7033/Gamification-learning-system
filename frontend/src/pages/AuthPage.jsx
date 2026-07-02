import { useState } from 'react'

function AuthPage() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (mode === 'register') {
      setMessage(`Welcome aboard, ${form.name || 'student'}! Your account is ready for the next lesson.`)
      return
    }

    setMessage(`Welcome back! You can continue your trigonometry adventure.`)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.16),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#fff7ed_100%)] px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">MathQuest</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Learn maths with a fun, friendly login experience.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              Students can register, sign in, and begin their journey into trigonometry through a playful and motivating experience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Feature 2</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Simple register and login flow</li>
              <li>• Friendly onboarding copy for students</li>
              <li>• Ready for future backend authentication</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-2xl">
          <div className="mb-6 flex rounded-full bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-white text-slate-900' : 'text-slate-200'}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'register' ? 'bg-white text-slate-900' : 'text-slate-200'}`}
            >
              Register
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0"
                  placeholder="Ava"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0"
                placeholder="student@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none ring-0"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              {mode === 'register' ? 'Create account' : 'Continue learning'}
            </button>
          </form>

          {message && <p className="mt-5 rounded-2xl bg-emerald-500/20 px-4 py-3 text-sm text-emerald-200">{message}</p>}
        </section>
      </div>
    </div>
  )
}

export default AuthPage
