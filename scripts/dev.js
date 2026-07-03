const { spawn } = require('child_process')
const http = require('http')

function start(name, command, args, cwd) {
  const child = spawn(command, args, {
    cwd,
    stdio: 'inherit',
    shell: true,
  })

  child.on('exit', code => {
    if (code && code !== 0) {
      process.exitCode = code
      shutdown()
    }
  })

  return child
}

const redirectServer = http.createServer((req, res) => {
  const target = `http://localhost:5173${req.url || '/'}`
  res.statusCode = 302
  res.setHeader('Location', target)
  res.end(`Redirecting to ${target}`)
})

redirectServer.on('error', err => {
  console.warn(`localhost redirect server could not start on port 80: ${err.message}`)
})

redirectServer.listen(80, () => {
  console.log('http://localhost now redirects to http://localhost:5173')
})

const frontend = start(
  'frontend',
  'npm',
  ['--prefix', 'frontend', 'run', 'dev'],
  process.cwd(),
)

const backend = start(
  'backend',
  'python',
  ['backend/manage.py', 'runserver'],
  process.cwd(),
)

function shutdown() {
  if (redirectServer.listening) {
    redirectServer.close()
  }

  for (const child of [frontend, backend]) {
    if (child && !child.killed) {
      child.kill('SIGINT')
    }
  }
}

process.on('SIGINT', () => {
  shutdown()
  process.exit(0)
})

process.on('SIGTERM', () => {
  shutdown()
  process.exit(0)
})
