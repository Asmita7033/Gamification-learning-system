const { spawn } = require('child_process')

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
