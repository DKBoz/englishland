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
    setResults(prev => ({ ...prev, [i]: attempt === correct }))
  }

  function retry(i) {
    setInputs(prev => ({ ...prev, [i]: '' }))
    setResults(prev => { const n = { ...prev }; delete n[i]; return n })
  }

  return (
    <div>
      <div className="el-section-title">🔤 Spelling Challenge!</div>
      <div className="el-section-desc">Resme ve Türkçe'ye bakarak İngilizce yaz!</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {words.map((w, i) => {
          const result = results[i]
          const checked = result !== undefined

          return (
            <div key={i} style={{
              background: checked ? result ? '#f0fff6' : '#fff5f5' : '#fff',
              borderRadius: 20, padding: '20px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: `2.5px solid ${checked ? result ? '#26de81' : '#FF6B6B' : 'transparent'}`,
              transition: 'all 0.2s',
            }}>

              {/* PROMPT */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: '3.2rem', display: 'block', marginBottom: 6 }}>{w.emoji}</span>
                <div style={{ fontWeight: 800, color: '#666', fontSize: '0.9rem' }}>🇹🇷 {w.tr}</div>
              </div>

              {/* INPUT */}
              <div style={{ display: 'flex', gap: 10 }}>
                <input
                  type="text"
                  value={inputs[i] || ''}
                  onChange={e => handleInput(i, e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && checkWord(i)}
                  disabled={checked && result}
                  placeholder="İngilizce yaz..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className={`el-input ${checked ? result ? 'correct' : 'wrong' : ''}`}
                />
                <button onClick={() => checkWord(i)}
                  disabled={checked && result}
                  className="el-btn el-btn-orange">
                  ✓
                </button>
              </div>

              {/* FEEDBACK */}
              {checked && (
                <div className={result ? 'el-feedback-good' : 'el-feedback-bad'}>
                  {result ? '🎉 Perfect spelling!' : `❌ The answer is "${w.word}"`}
                </div>
              )}

              {checked && !result && (
                <button onClick={() => retry(i)}
                  style={{
                    marginTop: 8, background: 'none', border: 'none',
                    color: '#aaa', fontWeight: 700, fontSize: '0.8rem',
                    cursor: 'pointer', textDecoration: 'underline',
                  }}>
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