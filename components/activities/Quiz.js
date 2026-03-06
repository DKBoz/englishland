'use client'
import { useState } from 'react'

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  function handleAnswer(qi, chosen, correct) {
    if (answers[qi]) return
    const isCorrect = chosen === correct
    setAnswers(prev => ({ ...prev, [qi]: { chosen, isCorrect } }))
    if (isCorrect) setScore(prev => prev + 1)
  }

  function reset() {
    setAnswers({})
    setScore(0)
  }

  return (
    <div>
      <div className="el-section-title">✏️ Fill in the Blank!</div>
      <div className="el-section-desc">Doğru kelimeyi seç!</div>

      {/* SCORE BAR */}
      <div style={{
        background: '#fff', borderRadius: 16, padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 20,
      }}>
        <span style={{ fontWeight: 700, color: '#888' }}>Puan:</span>
        <span style={{
          fontFamily: "'Baloo 2', cursive", fontSize: '1.8rem',
          fontWeight: 800, color: '#26de81',
        }}>{score}</span>
        <span style={{ color: '#ccc', fontWeight: 700 }}>/ {questions.length}</span>
        <button onClick={reset} className="el-btn el-btn-coral" style={{ marginLeft: 'auto' }}>
          🔄 Yenile
        </button>
      </div>

      {/* QUESTIONS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {questions.map((q, qi) => {
          const answered = answers[qi]
          const parts = q.sentence.split(q.answer)

          return (
            <div key={qi} style={{
              background: '#fff', borderRadius: 20, padding: '20px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: answered
                ? answered.isCorrect
                  ? '2.5px solid #26de81'
                  : '2.5px solid #FF6B6B'
                : '2.5px solid transparent',
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                Soru {qi + 1}
              </div>
              <div style={{ fontWeight: 800, color: '#1e1e2e', fontSize: '1rem', lineHeight: 1.6, marginBottom: 14 }}>
                {parts[0]}
                <span style={{
                  display: 'inline-block',
                  borderBottom: '3px solid #45aaf2',
                  minWidth: 80, textAlign: 'center',
                  color: '#45aaf2', fontFamily: "'Baloo 2', cursive",
                  padding: '0 8px',
                }}>
                  {answered ? q.answer : '______'}
                </span>
                {parts[1]}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {q.options.map(opt => {
                  let bg = '#f5f5ff', border = '#e0e0f0', color = '#555'
                  if (answered) {
                    if (opt === q.answer) { bg = '#e0fff0'; border = '#26de81'; color = '#1a9e5a' }
                    else if (opt === answered.chosen && !answered.isCorrect) { bg = '#fff0f0'; border = '#FF6B6B'; color = '#cc4444' }
                    else { bg = '#fafafa'; border = '#eee'; color = '#ccc' }
                  }
                  return (
                    <button key={opt}
                      onClick={() => handleAnswer(qi, opt, q.answer)}
                      disabled={!!answered}
                      style={{
                        padding: '9px 18px', borderRadius: 50,
                        border: `2.5px solid ${border}`,
                        background: bg, color,
                        fontWeight: 700, fontSize: '0.9rem',
                        cursor: answered ? 'default' : 'pointer',
                        transition: 'all 0.15s',
                        fontFamily: "'Nunito', sans-serif",
                      }}>
                      {opt}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div className={answered.isCorrect ? 'el-feedback-good' : 'el-feedback-bad'}>
                  {answered.isCorrect ? '🎉 Doğru! Great job!' : `❌ Doğru cevap: "${q.answer}"`}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}