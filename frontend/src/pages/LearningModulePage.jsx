import { useState } from 'react'

const learningContent = {
  1: {
    title: 'Introduction to Triangles',
    topics: [
      {
        name: 'What is a Triangle?',
        content: 'A triangle is a shape with 3 sides, 3 angles, and 3 vertices. Triangles are one of the most important shapes in mathematics. The sum of all angles in any triangle is always 180°.',
        visual: '📐 Three connected line segments forming a closed shape'
      },
      {
        name: 'Types of Triangles',
        content: 'Equilateral: All 3 sides equal, all angles 60°. Isosceles: 2 sides equal, 2 angles equal. Scalene: All sides different, all angles different.',
        visual: '▲ (Equilateral) ◁ (Isosceles) ◿ (Scalene)'
      },
      {
        name: 'Understanding Angles',
        content: 'Angles are measured in degrees (°). A full rotation is 360°. A straight line is 180°. A right angle is 90°. In any triangle, if you know 2 angles, you can find the 3rd by subtracting from 180°.',
        visual: '∠ 90° is called a right angle. We mark it with a small square.'
      }
    ],
    questions: [
      { q: 'What is the sum of all angles in a triangle?', a: '180' },
      { q: 'How many sides does an equilateral triangle have equal?', a: '3' },
      { q: 'What is a right angle?', a: '90' }
    ]
  },
  2: {
    title: 'Right Triangles & Pythagorean Theorem',
    topics: [
      {
        name: 'What is a Right Triangle?',
        content: 'A right triangle has one 90° angle (marked with a small square). The side opposite the right angle is called the hypotenuse and is always the longest side. The other 2 sides are called legs.',
        visual: 'Right angle is at one corner, hypotenuse is the longest side opposite to it.'
      },
      {
        name: 'The Pythagorean Theorem',
        content: 'In a right triangle: a² + b² = c², where a and b are the legs and c is the hypotenuse. Example: If a=3 and b=4, then 3² + 4² = 9 + 16 = 25, so c = 5.',
        visual: '3-4-5 triangle is the most famous right triangle.'
      },
      {
        name: 'Finding Missing Sides',
        content: 'If you know 2 sides, use the Pythagorean theorem to find the 3rd. Example: If legs are 5 and 12, then c² = 25 + 144 = 169, so c = 13. The 5-12-13 triangle is another famous one!',
        visual: 'Always check: Does the longest side equal √(a² + b²)?'
      }
    ],
    questions: [
      { q: 'In a right triangle with legs 6 and 8, what is the hypotenuse?', a: '10' },
      { q: 'What is the longest side of a right triangle called?', a: 'Hypotenuse' },
      { q: 'In the Pythagorean theorem, what does c represent?', a: 'Hypotenuse' }
    ]
  },
  3: {
    title: 'Introduction to Sine, Cosine, Tangent',
    topics: [
      {
        name: 'What Are Trigonometric Ratios?',
        content: 'Trigonometric ratios are comparisons of triangle sides. They help us relate angles to side lengths. Remember SOH-CAH-TOA: Sine=Opposite/Hypotenuse, Cosine=Adjacent/Hypotenuse, Tangent=Opposite/Adjacent.',
        visual: 'These ratios always work the same way for the same angle.'
      },
      {
        name: 'Identifying Opposite and Adjacent',
        content: 'Pick any angle (not the right angle). The opposite side is across from it. The adjacent side is next to it (but not the hypotenuse). Example: If your angle is at the bottom-left, the side across from it is opposite.',
        visual: '∠θ: The opposite side is far away. The adjacent side is close to the angle.'
      },
      {
        name: 'Using SOH-CAH-TOA',
        content: 'SOH: sin(θ) = opposite/hypotenuse. CAH: cos(θ) = adjacent/hypotenuse. TOA: tan(θ) = opposite/adjacent. Example: sin(30°) = 0.5 means the opposite is half the hypotenuse.',
        visual: 'sin, cos, tan are always between -1 and 1 (or 0 and 1 for angles 0-90°).'
      }
    ],
    questions: [
      { q: 'What does SOH stand for?', a: 'Sine' },
      { q: 'If angle θ has opposite=5 and hypotenuse=10, what is sin(θ)?', a: '0.5' },
      { q: 'What does TOA stand for?', a: 'Tangent' }
    ]
  },
  4: {
    title: 'Using Trig Ratios to Find Sides',
    topics: [
      {
        name: 'Finding Opposite When You Know Angle and Hypotenuse',
        content: 'Use sine: opposite = sin(θ) × hypotenuse. Example: If θ=30° and hypotenuse=10, then opposite = sin(30°) × 10 = 0.5 × 10 = 5.',
        visual: 'Remember: sin(θ) = opposite/hypotenuse, so opposite = sin(θ) × hypotenuse'
      },
      {
        name: 'Finding Adjacent When You Know Angle and Hypotenuse',
        content: 'Use cosine: adjacent = cos(θ) × hypotenuse. Example: If θ=60° and hypotenuse=20, then adjacent = cos(60°) × 20 = 0.5 × 20 = 10.',
        visual: 'Remember: cos(θ) = adjacent/hypotenuse, so adjacent = cos(θ) × hypotenuse'
      },
      {
        name: 'Finding One Leg When You Know Other Leg and Angle',
        content: 'Use tangent: If you know opposite and need adjacent, use tan(θ) = opposite/adjacent, so adjacent = opposite/tan(θ). If you know adjacent and need opposite, use opposite = adjacent × tan(θ).',
        visual: 'tan(θ) = opposite/adjacent. Rearrange to find what you need.'
      }
    ],
    questions: [
      { q: 'If sin(45°) = 0.707 and hypotenuse = 10, what is the opposite side approximately?', a: '7' },
      { q: 'Formula to find opposite when given angle and hypotenuse?', a: 'sin' },
      { q: 'If tan(40°) = 0.839 and opposite = 5, what is the adjacent approximately?', a: '5' }
    ]
  },
  5: {
    title: 'Finding Angles Using Inverse Trig Functions',
    topics: [
      {
        name: 'What Are Inverse Trigonometric Functions?',
        content: 'Inverse trig functions work backward. Instead of finding a side given an angle, we find an angle given a ratio. Inverse sine is written sin⁻¹() or arcsin(). Same for cos⁻¹() and tan⁻¹().',
        visual: 'If sin(θ) = 0.5, then θ = sin⁻¹(0.5) = 30°'
      },
      {
        name: 'Using Inverse Sine to Find Angles',
        content: 'If you know opposite and hypotenuse, use sin⁻¹: θ = sin⁻¹(opposite/hypotenuse). Example: If opposite=5 and hypotenuse=10, then θ = sin⁻¹(5/10) = sin⁻¹(0.5) = 30°.',
        visual: 'sin⁻¹ always gives angles between 0° and 90° (for positive values).'
      },
      {
        name: 'Using Inverse Cosine and Tangent',
        content: 'Inverse cosine: θ = cos⁻¹(adjacent/hypotenuse). Inverse tangent: θ = tan⁻¹(opposite/adjacent). Example: If adjacent=4 and hypotenuse=5, then θ = cos⁻¹(4/5) ≈ 36.87°.',
        visual: 'These functions are the reverse of sin, cos, and tan.'
      }
    ],
    questions: [
      { q: 'If opposite=3 and hypotenuse=6, what is the angle approximately using sin⁻¹?', a: '30' },
      { q: 'What does sin⁻¹ mean?', a: 'inverse' },
      { q: 'If tan(θ) = 1, what is θ?', a: '45' }
    ]
  },
  6: {
    title: 'Real-World Applications of Trigonometry',
    topics: [
      {
        name: 'Finding Heights (Angle of Elevation)',
        content: 'When you look up at something, the angle from horizontal is the angle of elevation. To find height: height = distance × tan(angle). Example: If you stand 20m from a building and angle is 60°, height = 20 × tan(60°) = 20 × 1.732 ≈ 34.6m.',
        visual: 'Observer on ground → distance away → looks up at angle'
      },
      {
        name: 'Finding Distances (Angle of Depression)',
        content: 'When you look down from a height, the angle downward is angle of depression. It equals the angle of elevation from the other viewpoint. Example: From a 100m cliff, if angle down is 30°, distance = 100/tan(30°) ≈ 173.2m away.',
        visual: 'Person on hill → looks down at angle → object on ground'
      },
      {
        name: 'Other Real Applications',
        content: 'Engineers use trig for building ramps, bridges, and structures. Surveyors use it to measure land. Pilots use it for navigation. Astronomers use it to measure distances to stars. Video games use it for 3D graphics.',
        visual: '🏗️ 🛣️ ✈️ 🌟 🎮 All use trigonometry!'
      }
    ],
    questions: [
      { q: 'Standing 30m away from a tree at 45° angle up, how tall is the tree approximately?', a: '30' },
      { q: 'From a 50m cliff with 30° angle of depression, how far is the object approximately?', a: '86' },
      { q: 'What profession uses angle of elevation?', a: 'surveyor' }
    ]
  },
  7: {
    title: 'Special Right Triangles (30-60-90 and 45-45-90)',
    topics: [
      {
        name: '45-45-90 Triangle',
        content: 'In a 45-45-90 triangle, the two legs are always equal. If each leg = 1, the hypotenuse = √2 ≈ 1.414. The ratio is 1:1:√2. This makes it easy: both legs equal, hypotenuse = leg × √2.',
        visual: '45° - 45° - 90° triangle looks like a square cut diagonally.'
      },
      {
        name: '30-60-90 Triangle',
        content: 'In a 30-60-90 triangle, the sides are in ratio 1:√3:2. The side opposite 30° is shortest. Side opposite 60° is √3 times longer. Hypotenuse is 2 times the shortest side. Example: If shortest=1, then other leg=1.732, hypotenuse=2.',
        visual: '30° opposite to short side, 60° opposite to medium side, 90° opposite to long side.'
      },
      {
        name: 'Using Special Triangle Ratios',
        content: 'If you recognize a special triangle, you don\'t need a calculator! 45-45-90: sides are a, a, a√2. 30-60-90: sides are a, a√3, 2a. These are super useful in quick problem-solving.',
        visual: 'Memorize these ratios for speed in exams and real situations!'
      }
    ],
    questions: [
      { q: 'In a 45-45-90 triangle with leg=5, what is the hypotenuse approximately?', a: '7' },
      { q: 'In a 30-60-90 triangle with shortest side=3, what is the hypotenuse?', a: '6' },
      { q: 'What is the ratio of sides in 45-45-90?', a: '1:1' }
    ]
  },
  8: {
    title: 'Advanced Applications & Identities',
    topics: [
      {
        name: 'Basic Trigonometric Identities',
        content: 'sin²(θ) + cos²(θ) = 1 (The most important identity!). tan(θ) = sin(θ)/cos(θ). These show relationships between trig functions. Example: If sin(θ)=0.6, then cos(θ)=√(1-0.36)=0.8.',
        visual: 'Identities help solve complex trig problems by substitution.'
      },
      {
        name: 'Solving Triangles Completely',
        content: 'Given some information (sides and/or angles), find everything else about a triangle. For right triangles: know 2 sides → find 3rd with Pythagorean theorem, then find angles with inverse trig. Know 1 side and 1 angle → use trig ratios to find others.',
        visual: 'Every right triangle problem follows the same strategy!'
      },
      {
        name: 'Combining Skills for Complex Problems',
        content: 'Real problems combine multiple steps. Example: A ladder leans at 60° from ground. If ladder is 10m, what height? Solution: height = 10 × sin(60°) = 10 × 0.866 = 8.66m. You\'re using trigonometry, angles, and real-world thinking!',
        visual: 'Break big problems into small steps: identify triangle → label parts → choose strategy → solve.'
      }
    ],
    questions: [
      { q: 'If sin(θ)=0.8, what is cos(θ) approximately?', a: '0.6' },
      { q: 'What is the most important trig identity called?', a: 'identity' },
      { q: 'A 15m ladder at 55° from ground reaches what height approximately?', a: '12' }
    ]
  }
}

export default function LearningModulePage({ onNavigate, currentLevel }) {
  const [selectedTopic, setSelectedTopic] = useState(0)
  const [answers, setAnswers] = useState({})
  const [completed, setCompleted] = useState(false)

  const level = learningContent[currentLevel] || learningContent[1]
  
  const handleAnswerSubmit = (qIndex, answer) => {
    setAnswers({ ...answers, [qIndex]: answer })
  }

  const checkAnswers = () => {
    const allCorrect = level.questions.every((q, i) => {
      const userAnswer = (answers[i] || '').toLowerCase()
      const correctAnswer = q.a.toLowerCase()
      return userAnswer.includes(correctAnswer.slice(0, 3))
    })

    if (allCorrect) {
      setCompleted(true)
    } else {
      alert('Not all correct! Check your answers and try again.')
    }
  }

  return (
    <div className="page-container learning-page">
      <div className="learning-header">
        <h1 className="text-4xl font-black text-slate-900">📚 Level {currentLevel}: {level.title}</h1>
        <p className="mt-2 text-lg text-slate-600">Learn the fundamentals and master this topic step by step.</p>
      </div>

      <div className="learning-layout">
        <div className="topics-sidebar">
          <h3 className="text-lg font-bold mb-4 text-slate-900">Topics</h3>
          {level.topics.map((topic, i) => (
            <button
              key={i}
              className={`topic-btn ${selectedTopic === i ? 'active' : ''}`}
              onClick={() => setSelectedTopic(i)}
            >
              {topic.name}
            </button>
          ))}
        </div>

        <div className="learning-content">
          <div className="topic-section rounded-2xl border border-slate-200 bg-white p-8 shadow-sm mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{level.topics[selectedTopic].name}</h2>
            <div className="topic-visual rounded-xl bg-slate-50 p-6 mb-6 text-center text-xl font-semibold text-sky-600">
              {level.topics[selectedTopic].visual}
            </div>
            <div className="topic-text text-slate-700 leading-relaxed text-lg">
              {level.topics[selectedTopic].content}
            </div>
          </div>

          <div className="practice-section rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">✅ Quick Check: {level.title}</h3>
            {!completed ? (
              <>
                {level.questions.map((question, i) => (
                  <div key={i} className="question-box rounded-xl border border-slate-200 bg-slate-50 p-6 mb-4">
                    <p className="font-semibold text-slate-800 mb-3">{i + 1}. {question.q}</p>
                    <input
                      type="text"
                      placeholder="Your answer..."
                      value={answers[i] || ''}
                      onChange={(e) => handleAnswerSubmit(i, e.target.value)}
                      className="answer-input w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"
                    />
                  </div>
                ))}
                <button className="btn-primary w-full py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold rounded-lg hover:shadow-lg transition mt-6" onClick={checkAnswers}>
                  Check Answers
                </button>
              </>
            ) : (
              <div className="success-box rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-8">
                <p className="text-xl font-bold text-emerald-700 mb-3">🎉 Perfect! You've completed Level {currentLevel}!</p>
                <p className="text-emerald-600 mb-6">You're ready for the games to earn rewards and unlock the next level.</p>
                <button className="btn-primary w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition" onClick={() => onNavigate('game1')}>
                  Play Game to Earn Rewards →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
