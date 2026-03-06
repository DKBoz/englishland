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
    if (selectedRight !== null) checkMatch(i, selectedRight)
  }

  function handleRight(i) {
    if (game.matched.includes(game.right[i].en)) return
    setSelectedRight(i)
    if (selectedLeft !== null) checkMatch(selectedLeft, i)
  }

  function checkMatch(li, ri) {
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
      }, 500)
    }
  }

  const allDone = game.matched.length === pairs.length

  return (
    <div>
      <div className="el-section-title">🧩 Match the Words!</div>
      <div className="el-section-desc">İngilizce kelimeyi Türkçe eşiyle eşleştir!</div>

      {/* WIN SCREEN */}
      {allDone && (
        <div style={{
          background: '#f0fff6', border: '2.5px solid #26de81',
          borderRadius: 20, padding: '28px', textAlign: 'center', marginBottom: 20,
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>🎉</div>
          <div style={{
            fontFamily: "'Baloo 2', cursive", fontSize: '1.4rem',
            fontWeight: 800, color: '#1a9e5a', marginBottom: 16,
          }}>
            Tebrikler! Hepsini buldun!
          </div>
          <button
            onClick={() => { setGame(initGame(pairs)); setSelectedLeft(null); setSelectedRight(null) }}
            className="el-btn el-btn-green">
            🔄 Tekrar Oyna
          </button>
        </div>
      )}

      {/* GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

        {/* LEFT — English */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {game.left.map((item, i) => {
            const isMatched = game.matched.includes(item.en)
            const isSelected = selectedLeft === i
            const isShaking = shake[`${i}-${selectedRight}`]
            return (
              <div key={i} onClick={() => handleLeft(i)}
                className={`el-match-item ${isMatched ? 'matched' : isSelected ? 'selected' : ''} ${isShaking ? 'wrong-shake' : ''}`}>
                {item.en}
              </div>
            )
          })}
        </div>

        {/* RIGHT — Turkish */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {game.right.map((item, i) => {
            const isMatched = game.matched.includes(item.en)
            const isSelected = selectedRight === i
            const isShaking = shake[`${selectedLeft}-${i}`]
            return (
              <div key={i} onClick={() => handleRight(i)}
                className={`el-match-item ${isMatched ? 'matched' : isSelected ? 'selected' : ''} ${isShaking ? 'wrong-shake' : ''}`}>
                {item.tr}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}