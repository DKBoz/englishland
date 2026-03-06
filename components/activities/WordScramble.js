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
      <div className="el-section-title">🔀 Word Scramble!</div>
      <div className="el-section-desc">Karışık harfleri doğru sıraya diz!</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {gameWords.map((w, wi) => (
          <div key={wi} style={{
            background: w.solved ? '#f0fff6' : '#fff',
            borderRadius: 20,
            padding: '20px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            border: `2.5px solid ${w.solved ? '#26de81' : w.error ? '#FF6B6B' : 'transparent'}`,
            transition: 'all 0.2s',
          }}>
            {/* CLUE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: '2.4rem' }}>{w.emoji}</span>
              <div>
                <div style={{ fontWeight: 800, color: '#444' }}>🇹🇷 {w.tr}</div>
                <div style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: 700 }}>
                  Bu kelimeyi İngilizce yaz!
                </div>
              </div>
              {w.solved && (
                <div style={{ marginLeft: 'auto', color: '#26de81', fontWeight: 800, fontSize: '1rem' }}>
                  ✅ {w.word}
                </div>
              )}
            </div>

            {/* ANSWER ROW */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 8,
              minHeight: 50, borderBottom: '2.5px dashed #e0e0f0',
              paddingBottom: 12, marginBottom: 12,
            }}>
              {w.selected.map((letter, si) => (
                <div key={si} onClick={() => removeLetter(wi, si)}
                  className="el-tile el-tile-placed">
                  {letter}
                </div>
              ))}
            </div>

            {/* LETTER POOL */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {w.shuffled.map((letter, li) => (
                <div key={li} onClick={() => pickLetter(wi, li)}
                  className={`el-tile ${w.usedIndexes.includes(li) ? 'el-tile-used' : 'el-tile-pool'}`}>
                  {letter}
                </div>
              ))}
            </div>

            {!w.solved && (
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => checkWord(wi)} className="el-btn el-btn-green">
                  ✓ Kontrol Et
                </button>
                <button onClick={() => resetWord(wi)} className="el-btn el-btn-ghost">
                  ↩ Sıfırla
                </button>
              </div>
            )}

            {w.error && <div className="el-feedback-bad">❌ Tekrar dene!</div>}
          </div>
        ))}
      </div>
    </div>
  )
}