'use client'
import { useState } from 'react'

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  function handleAnswer(qi, chosen, correct) {
    if (answers[qi]) return
    const isCorrect = chosen === correct
    setAnswers(prev => ({ ...prev, [qi]: { chosen, correct, isCorrect } }))
    if (isCorrect) setScore(prev => prev + 1)
  }

  function reset() {
    setAnswers({})
    setScore(0)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">✏️ Fill in the Blank!</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Doğru kelimeyi seç!</p>

      <div className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-4 mb-6">
        <span className="font-bold text-slate-600">Puan:</span>
        <span className="text-3xl font-extrabold text-green-500">{score}</span>
        <span className="text-slate-400 font-bold">/ {questions.length}</span>
        <button onClick={reset}
          className="ml-auto bg-red-400 hover:bg-red-500 text-white font-bold text-sm px-4 py-2 rounded-full transition-all">
          🔄 Yenile
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {questions.map((q, qi) => {
          const answered = answers[qi]
          return (
            <div key={qi} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Soru {qi + 1}</div>
              <div className="font-extrabold text-slate-800 mb-4 text-lg leading-relaxed">
                {q.sentence.replace(q.answer, '______')}
              </div>
              <div className="flex flex-wrap gap-2">
                {q.options.map(opt => {
                  let style = 'bg-slate-50 border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                  if (answered) {
                    if (opt === q.answer) style = 'bg-green-100 border-2 border-green-400 text-green-800'
                    else if (opt === answered.chosen && !answered.isCorrect) style = 'bg-red-100 border-2 border-red-400 text-red-800'
                    else style = 'bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-50'
                  }
                  return (
                    <button key={opt} onClick={() => handleAnswer(qi, opt, q.answer)}
                      disabled={!!answered}
                      className={`${style} font-bold text-sm px-4 py-2 rounded-full transition-all`}>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {answered && (
                <div className={`mt-3 text-sm font-bold ${answered.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {answered.isCorrect ? '🎉 Doğru! Great job!' : `❌ Doğru cevap: "${q.answer}"`}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}