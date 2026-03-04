'use client'
import { useState } from 'react'

export default function WordScramble({ words }) {
  const [gameWords, setGameWords] = useState(() =>
    words.map(w => ({
      ...w,
      shuffled: w.word.split('').sort(() => Math.random() - 0.5),
      selected: [],
      usedIndexes: [],
      solved: false,
      error: false,
    }))
  )

  function pickLetter(wi, li) {
    if (gameWords[wi].solved) return
    const word = gameWords[wi]
    if (word.usedIndexes.includes(li)) return
    const updated = [...gameWords]
    updated[wi] = {
      ...word,
      selected: [...word.selected, word.shuffled[li]],
      usedIndexes: [...word.usedIndexes, li],
      error: false,
    }
    setGameWords(updated)
  }

  function removeLetter(wi, si) {
    const word = gameWords[wi]
    if (word.solved) return
    const updated = [...gameWords]
    const newSelected = [...word.selected]
    const newUsed = [...word.usedIndexes]
    newSelected.splice(si, 1)
    newUsed.splice(si, 1)
    updated[wi] = { ...word, selected: newSelected, usedIndexes: newUsed, error: false }
    setGameWords(updated)
  }

  function checkWord(wi) {
    const word = gameWords[wi]
    const attempt = word.selected.join('')
    const updated = [...gameWords]
    if (attempt.toLowerCase() === word.word.toLowerCase()) {
      updated[wi] = { ...word, solved: true, error: false }
    } else {
      updated[wi] = { ...word, error: true }
    }
    setGameWords(updated)
  }

  function resetWord(wi) {
    const word = gameWords[wi]
    const updated = [...gameWords]
    updated[wi] = { ...word, selected: [], usedIndexes: [], error: false }
    setGameWords(updated)
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">🔀 Word Scramble!</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Karışık harfleri doğru sıraya diz!</p>

      <div className="flex flex-col gap-4">
        {gameWords.map((w, wi) => (
          <div key={wi} className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all
            ${w.solved ? 'border-green-300 bg-green-50' : w.error ? 'border-red-300' : 'border-transparent'}`}>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{w.emoji}</span>
              <div>
                <div className="font-extrabold text-slate-700">🇹🇷 {w.tr}</div>
                <div className="text-xs text-slate-400 font-bold">Bu kelimeyi İngilizce yaz!</div>
              </div>
              {w.solved && <span className="ml-auto text-green-500 font-extrabold text-lg">✅ {w.word}</span>}
            </div>

            {/* ANSWER ROW */}
            <div className="flex flex-wrap gap-2 min-h-12 border-b-2 border-dashed border-slate-200 pb-3 mb-3">
              {w.selected.map((letter, si) => (
                <div key={si} onClick={() => removeLetter(wi, si)}
                  className="w-10 h-10 rounded-xl bg-purple-500 text-white font-extrabold text-lg flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-all uppercase">
                  {letter}
                </div>
              ))}
            </div>

            {/* LETTER TILES */}
            <div className="flex flex-wrap gap-2 mb-4">
              {w.shuffled.map((letter, li) => (
                <div key={li} onClick={() => pickLetter(wi, li)}
                  className={`w-10 h-10 rounded-xl border-2 font-extrabold text-lg flex items-center justify-center transition-all uppercase
                    ${w.usedIndexes.includes(li)
                      ? 'opacity-0 pointer-events-none'
                      : 'border-slate-200 bg-slate-50 cursor-pointer hover:border-purple-400 hover:bg-purple-50'}`}>
                  {letter}
                </div>
              ))}
            </div>

            {!w.solved && (
              <div className="flex gap-2">
                <button onClick={() => checkWord(wi)}
                  className="bg-green-400 hover:bg-green-500 text-white font-bold text-sm px-4 py-2 rounded-full transition-all">
                  ✓ Kontrol Et
                </button>
                <button onClick={() => resetWord(wi)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-sm px-4 py-2 rounded-full transition-all">
                  ↩ Sıfırla
                </button>
              </div>
            )}

            {w.error && (
              <div className="text-red-500 font-bold text-sm mt-2">❌ Tekrar dene!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}