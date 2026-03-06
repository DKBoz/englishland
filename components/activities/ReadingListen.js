'use client'
import { useState } from 'react'

const comprehensionQuestions = [
  {
    question: "Where is Ali's family going for their holiday?",
    options: ["Istanbul", "Antalya", "Ankara", "Izmir"],
    answer: "Antalya"
  },
  {
    question: "How does Ali's family travel?",
    options: ["By car", "By train", "By plane", "By bus"],
    answer: "By plane"
  },
  {
    question: "What does Ali want to do at the beach?",
    options: ["Build sandcastles", "Swim and collect shells", "Read books", "Take photos only"],
    answer: "Swim and collect shells"
  },
  {
    question: "What does Ali pack in his suitcase?",
    options: ["Only clothes", "Books and toys", "Sunscreen, passport and souvenirs", "Food and drinks"],
    answer: "Sunscreen, passport and souvenirs"
  },
]

const storyParagraphs = [
  {
    text: "Ali and his family are going on a holiday to Antalya this summer. They are very excited! Ali's mum is packing the suitcase. She puts in sunscreen, clothes, and a camera.",
    words: { holiday: "tatil", summer: "yaz", excited: "heyecanlı", suitcase: "bavul", sunscreen: "güneş kremi" }
  },
  {
    text: "They travel to Antalya by plane. It is Ali's first time on a plane! He looks out of the window and sees the beautiful sunset over the clouds.",
    words: { travel: "seyahat etmek", plane: "uçak", beautiful: "güzel", sunset: "gün batımı", clouds: "bulutlar" }
  },
  {
    text: "At the beach, Ali wants to swim in the sea and collect seashells. His dad wants to explore the old city and visit a museum. His mum just wants to relax!",
    words: { beach: "plaj", swim: "yüzmek", collect: "toplamak", explore: "keşfetmek", museum: "müze", relax: "dinlenmek" }
  },
  {
    text: "Before they leave, Ali buys a souvenir magnet for his teacher. He puts it carefully in his bag next to his passport. 'I can't wait for our adventure!' says Ali happily.",
    words: { souvenir: "hediyelik eşya", passport: "pasaport", adventure: "macera", carefully: "dikkatlice" }
  },
]

export default function ReadingListen() {
  const [highlighted, setHighlighted] = useState(null)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [speaking, setSpeaking] = useState(false)

  function speak(text) {
    if (!window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'en-GB'
    utt.rate = 0.85
    utt.onstart = () => setSpeaking(true)
    utt.onend = () => setSpeaking(false)
    window.speechSynthesis.speak(utt)
  }

  function speakAll() {
    const fullText = storyParagraphs.map(p => p.text).join(' ')
    speak(fullText)
  }

  function stopSpeaking() {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }

  function handleAnswer(qi, opt) {
    if (answers[qi]) return
    const isCorrect = opt === comprehensionQuestions[qi].answer
    setAnswers(prev => ({ ...prev, [qi]: { chosen: opt, isCorrect } }))
    if (isCorrect) setScore(prev => prev + 1)
  }

  function renderParagraph(para, pi) {
    const words = para.text.split(' ')
    return (
      <p key={pi} style={{ lineHeight: 2, marginBottom: 16 }}>
        {words.map((word, wi) => {
          const clean = word.toLowerCase().replace(/[^a-z]/g, '')
          const tr = para.words[clean]
          return (
            <span key={wi}>
              {tr ? (
                <span
                  onClick={() => setHighlighted(highlighted === `${pi}-${wi}` ? null : `${pi}-${wi}`)}
                  style={{
                    background: highlighted === `${pi}-${wi}` ? '#ffe066' : '#fff3b0',
                    borderRadius: 6,
                    padding: '2px 4px',
                    cursor: 'pointer',
                    fontWeight: 800,
                    color: '#7a5f00',
                    position: 'relative',
                    display: 'inline-block',
                  }}>
                  {word}
                  {highlighted === `${pi}-${wi}` && (
                    <span style={{
                      position: 'absolute', bottom: '110%', left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#1e1e2e', color: '#fff',
                      fontSize: '0.75rem', fontWeight: 700,
                      padding: '4px 10px', borderRadius: 8,
                      whiteSpace: 'nowrap', zIndex: 10,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}>
                      🇹🇷 {tr}
                    </span>
                  )}
                </span>
              ) : (
                <span style={{ fontWeight: 600, color: '#444' }}>{word}</span>
              )}{' '}
            </span>
          )
        })}
      </p>
    )
  }

  return (
    <div>
      <div className="el-section-title">🎧 Reading & Listening</div>
      <div className="el-section-desc">Hikayeyi oku, sarı kelimelere tıkla → Türkçe'yi gör!</div>

      {/* AUDIO CONTROLS */}
      <div style={{
        background: 'linear-gradient(135deg, #45aaf2, #a55eea)',
        borderRadius: 20, padding: '20px 24px',
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        color: '#fff',
      }}>
        <span style={{ fontSize: '2rem' }}>🎧</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>Ali's Holiday Plan</div>
          <div style={{ opacity: 0.7, fontSize: '0.78rem', fontWeight: 600 }}>
            {speaking ? '▶ Oynatılıyor...' : 'Dinlemek için tıkla'}
          </div>
        </div>
        {speaking ? (
          <button onClick={stopSpeaking} className="el-btn" style={{
            background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)'
          }}>
            ⏹ Durdur
          </button>
        ) : (
          <button onClick={speakAll} className="el-btn" style={{
            background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)'
          }}>
            ▶ Dinle
          </button>
        )}
      </div>

      {/* STORY */}
      <div style={{
        background: '#fff', borderRadius: 20, padding: '24px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 24,
        fontSize: '0.97rem',
      }}>
        <div style={{
          background: '#fff9db', border: '1.5px solid #ffe066',
          borderRadius: 10, padding: '8px 14px', marginBottom: 16,
          fontSize: '0.78rem', fontWeight: 700, color: '#7a5f00',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          💡 Sarı kelimelere tıkla → Türkçe çevirisini gör!
        </div>
        {storyParagraphs.map((para, pi) => renderParagraph(para, pi))}
      </div>

      {/* COMPREHENSION */}
      <div style={{
        background: '#fff', borderRadius: 20, padding: '24px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          fontFamily: "'Baloo 2', cursive", fontSize: '1.1rem',
          fontWeight: 800, color: '#1e1e2e', marginBottom: 4,
        }}>
          📝 Comprehension Questions
        </div>
        <div style={{ color: '#888', fontSize: '0.82rem', fontWeight: 600, marginBottom: 16 }}>
          Hikayeyi anladın mı? Soruları cevapla!
        </div>

        {/* SCORE */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
          background: '#f5f5ff', borderRadius: 12, padding: '10px 16px',
        }}>
          <span style={{ fontWeight: 700, color: '#888' }}>Puan:</span>
          <span style={{
            fontFamily: "'Baloo 2', cursive", fontSize: '1.5rem',
            fontWeight: 800, color: '#26de81',
          }}>{score}</span>
          <span style={{ color: '#ccc', fontWeight: 700 }}>/ {comprehensionQuestions.length}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {comprehensionQuestions.map((q, qi) => {
            const answered = answers[qi]
            return (
              <div key={qi} style={{
                borderRadius: 16, padding: '16px',
                background: answered
                  ? answered.isCorrect ? '#f0fff6' : '#fff5f5'
                  : '#fafafa',
                border: `2px solid ${answered ? answered.isCorrect ? '#26de81' : '#FF6B6B' : '#eee'}`,
              }}>
                <div style={{ fontWeight: 800, color: '#333', marginBottom: 10, fontSize: '0.92rem' }}>
                  {qi + 1}. {q.question}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {q.options.map(opt => {
                    let bg = '#fff', border = '#e0e0f0', color = '#555'
                    if (answered) {
                      if (opt === q.answer) { bg = '#e0fff0'; border = '#26de81'; color = '#1a9e5a' }
                      else if (opt === answered.chosen && !answered.isCorrect) { bg = '#fff0f0'; border = '#FF6B6B'; color = '#cc4444' }
                      else { bg = '#fafafa'; border = '#eee'; color = '#ccc' }
                    }
                    return (
                      <button key={opt}
                        onClick={() => handleAnswer(qi, opt)}
                        disabled={!!answered}
                        style={{
                          padding: '8px 16px', borderRadius: 50,
                          border: `2px solid ${border}`,
                          background: bg, color,
                          fontWeight: 700, fontSize: '0.85rem',
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
                    {answered.isCorrect ? '🎉 Doğru!' : `❌ Doğru cevap: "${q.answer}"`}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}