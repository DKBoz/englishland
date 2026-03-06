'use client'
import { useState } from 'react'

export default function MiniStory({ nodes }) {
  const [currentId, setCurrentId] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [totalStars, setTotalStars] = useState(0)

  const node = nodes.find(n => n.id === currentId)

  function handleChoice(choice) {
    if (chosen) return
    setChosen(choice)
    setTotalStars(prev => prev + (choice.stars || 0))
    setTimeout(() => {
      if (choice.restart) {
        setCurrentId(0)
        setChosen(null)
        setTotalStars(0)
      } else {
        setCurrentId(choice.next)
        setChosen(null)
      }
    }, 900)
  }

  function restart() {
    setCurrentId(0)
    setChosen(null)
    setTotalStars(0)
  }

  if (!node) return null

  return (
    <div>
      <div className="el-section-title">📖 Interactive Story</div>
      <div className="el-section-desc">Seçimlerini yap, hikayeni yaz!</div>

      {/* STARS */}
      <div style={{
        background: '#fff9db', border: '2px solid #ffe066',
        borderRadius: 14, padding: '12px 18px',
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20,
      }}>
        <span style={{ fontSize: '1.4rem' }}>⭐</span>
        <span style={{ fontWeight: 800, color: '#9a6f00' }}>
          {totalStars} yıldız kazandın!
        </span>
      </div>

      {/* SCENE CARD */}
      <div style={{
        background: '#fff', borderRadius: 24,
        boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}>

        {/* CHAPTER HEADER */}
        <div style={{
          background: 'linear-gradient(135deg, #45aaf2, #a55eea)',
          padding: '20px 24px',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
            {node.chapter}
          </div>
          <div style={{ fontSize: '3rem', marginTop: 6 }}>{node.emoji}</div>
        </div>

        <div style={{ padding: '24px' }}>

          {/* STORY TEXT */}
          <div style={{
            fontWeight: 700, color: '#444', lineHeight: 1.8,
            fontSize: '0.97rem', marginBottom: 24, whiteSpace: 'pre-line',
          }}>
            {node.text}
          </div>

          {/* END SCREEN */}
          {node.isEnd ? (
            <div style={{ textAlign: 'center', paddingBottom: 8 }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 10 }}>🏆</div>
              <div style={{
                fontFamily: "'Baloo 2', cursive", fontSize: '1.5rem',
                fontWeight: 800, color: '#1e1e2e', marginBottom: 6,
              }}>
                {totalStars >= 10 ? 'Mükemmel!' : totalStars >= 5 ? 'Çok İyi!' : 'İyi Deneme!'}
              </div>
              <div style={{ color: '#888', fontWeight: 700, marginBottom: 20 }}>
                Toplam: {totalStars} ⭐
              </div>
              <button onClick={restart} className="el-btn el-btn-purple">
                🔄 Tekrar Oyna
              </button>
            </div>
          ) : (
            /* CHOICES */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {node.choices.map((choice, i) => (
                <button key={i} onClick={() => handleChoice(choice)}
                  disabled={!!chosen}
                  className={`el-story-choice ${
                    chosen === choice
                      ? choice.good ? 'good' : 'bad'
                      : chosen ? 'disabled' : ''
                  }`}
                  style={{ opacity: chosen && chosen !== choice ? 0.45 : 1 }}>
                  {choice.text}
                  {chosen === choice && (
                    <span style={{ marginLeft: 8 }}>{choice.good ? '✅' : '❌'}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}