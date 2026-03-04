'use client'
import { useState } from 'react'

export default function VocabCards({ words }) {
  const [flipped, setFlipped] = useState({})

  function toggle(i) {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">🔤 Vocabulary</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Kartlara tıkla → Türkçe'yi gör!</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {words.map((w, i) => (
          <div key={i} onClick={() => toggle(i)}
            className={`bg-white rounded-2xl p-4 text-center shadow-md cursor-pointer border-2 transition-all duration-200 hover:scale-105
              ${flipped[i] ? 'border-green-300' : 'border-transparent hover:border-red-200'}`}>
            <span className="text-4xl block mb-2">{w.emoji}</span>
            <div className={`font-extrabold text-lg transition-colors ${flipped[i] ? 'text-red-400' : 'text-slate-800'}`}>
              {w.en}
            </div>
            {flipped[i] && (
              <div className="text-green-500 font-bold text-sm mt-1">🇹🇷 {w.tr}</div>
            )}
            {!flipped[i] && (
              <div className="text-slate-300 text-xs mt-1 font-bold">tap me!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}