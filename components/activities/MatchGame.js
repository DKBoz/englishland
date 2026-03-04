'use client'
import { useState } from 'react'

export default function MatchGame({ pairs }) {
  const [game, setGame] = useState(() => initGame(pairs))
  const [selectedLeft, setSelectedLeft] = useState(null)
  const [selectedRight, setSelectedRight] = useState(null)
  const [shake, setShake] = useState({})

  function initGame(pairs) {
    return {
      left: [...pairs].sort(() => Math.random() - 0.5),
      right: [...pairs].sort(() => Math.random() - 0.5),
      matched: [],
    }
  }

  function handleLeft(i) {
    if (game.matched.includes(game.left[i].en)) return
    setSelectedLeft(i)
    if (selectedRight !== null) checkMatch(i, selectedRight, 'left')
  }

  function handleRight(i) {
    if (game.matched.includes(game.right[i].en)) return
    setSelectedRight(i)
    if (selectedLeft !== null) checkMatch(selectedLeft, i, 'right')
  }

  function checkMatch(li, ri, side) {
    const leftItem = game.left[li]
    const rightItem = game.right[ri]
    if (leftItem.en === rightItem.en) {
      setGame(prev => ({ ...prev, matched: [...prev.matched, leftItem.en] }))
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      const key = `${li}-${ri}`
      setShake({ [key]: true })
      setTimeout(() => {
        setShake({})
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 600)
    }
  }

  const allDone = game.matched.length === pairs.length

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">🧩 Match the Words!</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">İngilizce kelimeyi Türkçe eşiyle eşleştir!</p>

      {allDone && (
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 text-center mb-6">
          <div className="text-4xl mb-2">🎉</div>
          <div className="font-extrabold text-green-700 text-xl">Tebrikler! Hepsini buldun!</div>
          <button onClick={() => { setGame(initGame(pairs)); setSelectedLeft(null); setSelectedRight(null); }}
            className="mt-4 bg-green-400 hover:bg-green-500 text-white font-bold px-6 py-2 rounded-full transition-all">
            🔄 Tekrar Oyna
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          {game.left.map((item, i) => {
            const isMatched = game.matched.includes(item.en)
            const isSelected = selectedLeft === i
            const isShaking = shake[`${i}-${selectedRight}`]
            return (
              <div key={i} onClick={() => handleLeft(i)}
                className={`p-4 rounded-2xl text-center font-bold text-sm cursor-pointer border-2 transition-all
                  ${isMatched ? 'bg-green-100 border-green-400 text-green-700 pointer-events-none'
                    : isSelected ? 'bg-purple-100 border-purple-400 text-purple-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'}
                  ${isShaking ? 'animate-bounce border-red-400 bg-red-50' : ''}`}>
                {item.en}
              </div>
            )
          })}
        </div>

        <div className="flex flex-col gap-3">
          {game.right.map((item, i) => {
            const isMatched = game.matched.includes(item.en)
            const isSelected = selectedRight === i
            const isShaking = shake[`${selectedLeft}-${i}`]
            return (
              <div key={i} onClick={() => handleRight(i)}
                className={`p-4 rounded-2xl text-center font-bold text-sm cursor-pointer border-2 transition-all
                  ${isMatched ? 'bg-green-100 border-green-400 text-green-700 pointer-events-none'
                    : isSelected ? 'bg-purple-100 border-purple-400 text-purple-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'}
                  ${isShaking ? 'animate-bounce border-red-400 bg-red-50' : ''}`}>
                {item.tr}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}