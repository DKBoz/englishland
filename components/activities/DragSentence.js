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

  function placeWord(si, word) {
    if (games[si].solved) return
    const updated = [...games]
    const g = { ...updated[si] }
    const idx = g.pool.indexOf(word)
    if (idx === -1) return
    g.pool = [...g.pool.slice(0, idx), ...g.pool.slice(idx + 1)]
    g.placed = [...g.placed, word]
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

  return (
    <div>
      <div className="el-section-title">🖱️ Build the Sentence!</div>
      <div className="el-section-desc">Kelimelere tıkla, doğru cümleyi oluştur!</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {games.map((g, si) => (
          <div key={si} style={{
            background: g.solved ? '#f0fff6' : '#fff',
            borderRadius: 20, padding: '20px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            border: `2.5px solid ${g.solved ? '#26de81' : g.error ? '#FF6B6B' : 'transparent'}`,
            transition: 'all 0.2s',
          }}>

            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
              Cümle {si + 1}
            </div>
            <div style={{ fontWeight: 700, color: '#888', fontSize: '0.88rem', marginBottom: 14 }}>
              🇹🇷 {g.tr}
            </div>

            {/* DROP ZONE */}
            <div className="el-drop-zone">
              {g.placed.length === 0 && (
                <span style={{ color: '#ccc', fontSize: '0.88rem', fontWeight: 700, alignSelf: 'center' }}>
                  Kelimelere tıkla...
                </span>
              )}
              {g.placed.map((word, wi) => (
                <div key={wi} onClick={() => removeWord(si, wi)}
                  className="el-chip el-chip-placed">
                  {word}
                </div>
              ))}
            </div>

            {/* WORD POOL */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              {g.pool.map((word, wi) => (
                <div key={wi} onClick={() => placeWord(si, word)}
                  className="el-chip el-chip-pool">
                  {word}
                </div>
              ))}
            </div>

            {!g.solved && (
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => checkSentence(si)} className="el-btn el-btn-blue">
                  ✓ Kontrol Et
                </button>
                <button onClick={() => resetSentence(si)} className="el-btn el-btn-ghost">
                  ↩ Sıfırla
                </button>
              </div>
            )}

            {g.error && <div className="el-feedback-bad">❌ Kelime sırası yanlış, tekrar dene!</div>}
            {g.solved && <div className="el-feedback-good">🎉 Mükemmel! Doğru cümle!</div>}
          </div>
        ))}
      </div>
    </div>
  )
}