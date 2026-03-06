'use client'
import Link from 'next/link'

const grades = [
  { num: 5, emoji: '🎒', color: '#FF6B6B', bg: '#fff0f0', href: '/grade5', ready: true },
  { num: 6, emoji: '📐', color: '#FF9F43', bg: '#fff4e6', href: '/grade6', ready: false },
  { num: 7, emoji: '🔭', color: '#26de81', bg: '#f0fff6', href: '/grade7', ready: false },
  { num: 8, emoji: '🏆', color: '#45aaf2', bg: '#f0f8ff', href: '/grade8', ready: false },
]

const features = [
  { icon: '🎮', label: 'Oyunlar' },
  { icon: '🔊', label: 'Dinleme' },
  { icon: '✏️', label: 'Yazma' },
  { icon: '🧩', label: 'Bulmaca' },
  { icon: '⭐', label: 'Rozetler' },
  { icon: '📖', label: 'MEB Müfredatı' },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
      <header className="el-topbar">
        <span style={{ fontSize: '2.2rem' }}>🌍</span>
        <div>
          <div style={{
            color: '#fff', fontFamily: "'Baloo 2', cursive",
            fontSize: '1.6rem', fontWeight: 800, lineHeight: 1
          }}>
            EnglishLand
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, marginTop: 3 }}>
            MEB 2025-2026 • Türkiye Yüzyılı Maarif Modeli
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #1e1e2e 0%, #2d2d4e 100%)',
        padding: '48px 24px 40px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,211,61,0.15)', border: '1.5px solid rgba(255,211,61,0.35)',
          borderRadius: 50, padding: '6px 18px',
          color: '#FFD93D', fontSize: '0.8rem', fontWeight: 800, marginBottom: 20
        }}>
          🚀 Demo Sürümü — Daha fazlası geliyor!
        </div>

        <h1 style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: 'clamp(2rem, 6vw, 3.2rem)',
          fontWeight: 800, color: '#fff', lineHeight: 1.15,
        }}>
          İngilizce öğrenmek<br />
          <span style={{ color: '#FF6B6B' }}>hiç bu kadar eğlenceli</span><br />
          olmamıştı!
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginTop: 14, fontSize: '1rem' }}>
          Sınıfını seç ve öğrenmeye başla 👇
        </p>
      </section>

      {/* GRADE CARDS */}
      <section style={{ padding: '32px 20px', flex: 1 }}>
        <p style={{
          textAlign: 'center', color: '#aaa', fontWeight: 800,
          fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 20
        }}>
          📚 Sınıfını Seç
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          maxWidth: 480,
          margin: '0 auto',
        }}>
          {grades.map(g => (
            g.ready ? (
              <Link key={g.num} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="el-card" style={{
                  textAlign: 'center', cursor: 'pointer',
                  borderColor: 'transparent',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = g.color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                >
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: 10 }}>{g.emoji}</span>
                  <div style={{
                    fontFamily: "'Baloo 2', cursive", fontSize: '1.5rem',
                    fontWeight: 800, color: g.color
                  }}>
                    {g.num}. Sınıf
                  </div>
                  <div style={{ color: '#bbb', fontSize: '0.75rem', fontWeight: 700, marginTop: 2 }}>
                    Ortaokul {g.num - 4}
                  </div>
                  <div className="el-badge el-badge-green" style={{ marginTop: 12 }}>
                    ✅ Demo Hazır
                  </div>
                </div>
              </Link>
            ) : (
              <div key={g.num} className="el-card" style={{
                textAlign: 'center', opacity: 0.45, cursor: 'not-allowed'
              }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: 10 }}>{g.emoji}</span>
                <div style={{
                  fontFamily: "'Baloo 2', cursive", fontSize: '1.5rem',
                  fontWeight: 800, color: '#aaa'
                }}>
                  {g.num}. Sınıf
                </div>
                <div style={{ color: '#bbb', fontSize: '0.75rem', fontWeight: 700, marginTop: 2 }}>
                  Ortaokul {g.num - 4}
                </div>
                <div className="el-badge el-badge-gray" style={{ marginTop: 12 }}>
                  🔒 Yakında
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section style={{
        background: 'linear-gradient(135deg, #1e1e2e, #2d2d4e)',
        padding: '28px 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          maxWidth: 480,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          {features.map(f => (
            <div key={f.label}>
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: 6 }}>{f.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700 }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.2)',
          fontSize: '0.75rem', fontWeight: 700, marginTop: 24
        }}>
          EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
        </p>
      </section>

    </main>
  )
}