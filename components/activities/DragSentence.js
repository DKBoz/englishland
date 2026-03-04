'use client'
import { useState } from 'react'

export default function DragSentence({ sentences }) {
  const [games, setGames] = useState(() =>
    sentences.map(s => ({
      ...s,
      pool: [...s.words].sort(() => Math.random() - 0.5),
      placed: [],
      solved: false,
      error: false,
    }))
  )

  function placeWord(si, word, fromPool) {
    if (games[si].solved) return
    const updated = [...games]
    const g = { ...updated[si] }
    if (fromPool) {
      g.pool = g.pool.filter((w, i) => {
        if (w === word && !g.placed.includes(w)) return false
        return true
      })
      // remove first occurrence from pool
      const idx = g.pool.indexOf(word)
      g.pool = [...g.pool]
      g.placed = [...g.placed, word]
    }
    updated[si] = { ...g, error: false }
    setGames(updated)
  }

  function removeWord(si, wi) {
    if (games[si].solved) return
    const updated = [...games]
    const g = { ...updated[si] }
    const word = g.placed[wi]
    g.placed = g.placed.filter((_, i) => i !== wi)
    g.pool = [...g.pool, word]
    updated[si] = { ...g, error: false }
    setGames(updated)
  }

  function checkSentence(si) {
    const g = games[si]
    const isCorrect = JSON.stringify(g.placed) === JSON.stringify(g.answer)
    const updated = [...games]
    updated[si] = { ...g, solved: isCorrect, error: !isCorrect }
    setGames(updated)
  }

  function resetSentence(si) {
    const g = games[si]
    const updated = [...games]
    updated[si] = {
      ...g,
      pool: [...g.words].sort(() => Math.random() - 0.5),
      placed: [],
      solved: false,
      error: false,
    }
    setGames(updated)
  }

  function handlePoolClick(si, word) {
    const updated = [...games]
    const g = { ...updated[si] }
    const idx = g.pool.indexOf(word)
    if (idx === -1) return
    g.pool = [...g.pool.slice(0, idx), ...g.pool.slice(idx + 1)]
    g.placed = [...g.placed, word]
    updated[si] = { ...g, error: false }
    setGames(updated)
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">🖱️ Build the Sentence!</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Kelimelere tıkla, doğru cümleyi oluştur!</p>

      <div className="flex flex-col gap-6">
        {games.map((g, si) => (
          <div key={si} className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all
            ${g.solved ? 'border-green-300 bg-green-50' : g.error ? 'border-red-300' : 'border-transparent'}`}>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Cümle {si + 1}</div>
            <div className="font-bold text-slate-500 text-sm mb-4">🇹🇷 {g.tr}</div>

            {/* DROP ZONE */}
            <div className="min-h-14 border-2 border-dashed border-slate-200 rounded-xl p-3 flex flex-wrap gap-2 mb-4 bg-slate-50">
              {g.placed.length === 0 && (
                <span className="text-slate-300 text-sm font-bold self-center">Kelimelere tıkla...</span>
              )}
              {g.placed.map((word, wi) => (
                <div key={wi} onClick={() => removeWord(si, wi)}
                  className="bg-purple-500 text-white font-bold text-sm px-3 py-2 rounded-xl cursor-pointer hover:bg-purple-600 transition-all">
                  {word}
                </div>
              ))}
            </div>

            {/* WORD POOL */}
            <div className="flex flex-wrap gap-2 mb-4">
              {g.pool.map((word, wi) => (
                <div key={wi} onClick={() => handlePoolClick(si, word)}
                  className="bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm px-3 py-2 rounded-xl cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all">
                  {word}
                </div>
              ))}
            </div>

            {!g.solved && (
              <div className="flex gap-2">
                <button onClick={() => checkSentence(si)}
                  className="bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-full transition-all">
                  ✓ Kontrol Et
                </button>
                <button onClick={() => resetSentence(si)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-sm px-4 py-2 rounded-full transition-all">
                  ↩ Sıfırla
                </button>
              </div>
            )}

            {g.error && <div className="text-red-500 font-bold text-sm mt-2">❌ Kelime sırası yanlış, tekrar dene!</div>}
            {g.solved && <div className="text-green-600 font-bold text-sm mt-2">🎉 Mükemmel! Doğru cümle!</div>}
          </div>
        ))}
      </div>
    </div>
  )
}