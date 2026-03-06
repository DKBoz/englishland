'use client'
import { useState } from 'react'

export default function VocabCards({ words }) {
  const [flipped, setFlipped] = useState({})

  function toggle(i) {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div>
      <div className="el-section-title">🔤 Vocabulary</div>
      <div className="el-section-desc">Kartlara tıkla → Türkçe'yi gör!</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: 14,
      }}>
        {words.map((w, i) => (
          <div key={i} onClick={() => toggle(i)}
            style={{
              background: flipped[i] ? '#f5eeff' : '#fff',
              borderRadius: 20,
              padding: '18px 12px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: `2.5px solid ${flipped[i] ? '#a55eea' : 'transparent'}`,
              cursor: 'pointer',
              transition: 'all 0.2s cubic-bezier(.34,1.56,.64,1)',
              transform: flipped[i] ? 'scale(1.04)' : 'scale(1)',
            }}>
            <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: 8 }}>{w.emoji}</span>
            <div style={{
              fontFamily: "'Baloo 2', cursive",
              fontSize: '1rem',
              fontWeight: 800,
              color: flipped[i] ? '#a55eea' : '#1e1e2e',
              transition: 'color 0.2s',
            }}>
              {w.en}
            </div>
            {flipped[i] ? (
              <div style={{ color: '#26de81', fontWeight: 800, fontSize: '0.8rem', marginTop: 5 }}>
                🇹🇷 {w.tr}
              </div>
            ) : (
              <div style={{ color: '#ddd', fontSize: '0.65rem', fontWeight: 700, marginTop: 5 }}>
                tap!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}