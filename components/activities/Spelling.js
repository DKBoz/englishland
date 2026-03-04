'use client'
import { useState } from 'react'

export default function Spelling({ words }) {
  const [inputs, setInputs] = useState({})
  const [results, setResults] = useState({})

  function handleInput(i, value) {
    setInputs(prev => ({ ...prev, [i]: value }))
  }

  function checkWord(i) {
    const correct = words[i].word.toLowerCase()
    const attempt = (inputs[i] || '').trim().toLowerCase()
    const isCorrect = attempt === correct
    setResults(prev => ({ ...prev, [i]: isCorrect }))
  }

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') checkWord(i)
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">🔤 Spelling Challenge!</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Resme ve Türkçe'ye bakarak İngilizce yaz!</p>

      <div className="flex flex-col gap-4">
        {words.map((w, i) => {
          const result = results[i]
          const checked = result !== undefined

          return (
            <div key={i} className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all
              ${checked ? result ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50' : 'border-transparent'}`}>

              <div className="text-center mb-4">
                <span className="text-5xl block mb-2">{w.emoji}</span>
                <div className="font-extrabold text-slate-600">🇹🇷 {w.tr}</div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputs[i] || ''}
                  onChange={e => handleInput(i, e.target.value)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  disabled={checked && result}
                  placeholder="İngilizce yaz..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className={`flex-1 px-4 py-3 rounded-xl border-2 font-bold text-slate-700 outline-none transition-all
                    ${checked
                      ? result
                        ? 'border-green-400 bg-green-50 text-green-700'
                        : 'border-red-400 bg-red-50 text-red-700'
                      : 'border-slate-200 focus:border-orange-400'}`}
                />
                <button onClick={() => checkWord(i)}
                  disabled={checked && result}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-3 rounded-xl transition-all">
                  ✓
                </button>
              </div>

              {checked && (
                <div className={`mt-2 text-sm font-bold ${result ? 'text-green-600' : 'text-red-600'}`}>
                  {result
                    ? '🎉 Perfect spelling!'
                    : `❌ The answer is "${w.word}" — try again!`}
                </div>
              )}

              {checked && !result && (
                <button onClick={() => {
                  setInputs(prev => ({ ...prev, [i]: '' }))
                  setResults(prev => { const n = {...prev}; delete n[i]; return n })
                }}
                  className="mt-2 text-xs font-bold text-slate-400 hover:text-slate-600">
                  ↩ Tekrar dene
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}