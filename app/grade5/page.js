import Link from 'next/link'

const units = [
  { num: 1, name: "Getting to Know You", tr: "Tanışma ve Kendini Tanıtma", emoji: "👋", topics: "Introducing yourself • Greetings • Numbers", locked: true },
  { num: 2, name: "My Town", tr: "Şehrim ve Çevrem", emoji: "🏙️", topics: "Places in town • Directions • There is/are", locked: true },
  { num: 3, name: "Games and Hobbies", tr: "Oyunlar ve Hobiler", emoji: "🎮", topics: "Free time • Can/Can't • How often?", locked: true },
  { num: 4, name: "Wild Animals", tr: "Vahşi Hayvanlar", emoji: "🦁", topics: "Habitats • Comparatives • Animal facts", locked: true },
  { num: 5, name: "My TV", tr: "Televizyon ve Medya", emoji: "📺", topics: "TV shows • Likes & dislikes • Frequency", locked: true },
  { num: 6, name: "Yummy Breakfast", tr: "Lezzetli Kahvaltı", emoji: "🍳", topics: "Food & drinks • Some/Any • Countables", locked: true },
  { num: 7, name: "Biographies", tr: "Biyografiler", emoji: "📜", topics: "Past tense • Famous people • Dates", locked: true },
  { num: 8, name: "Holiday Time!", tr: "Tatil Zamanı", emoji: "🏖️", topics: "Holiday places • Activities • Going to", locked: false, href: "/grade5/unit8" },
]

export default function Grade5Page() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f0f4ff' }}>

      {/* TOPBAR */}
      <header className="el-topbar">
        <Link href="/" className="el-back-btn">← Ana Sayfa</Link>
        <div>
          <div style={{
            fontFamily: "'Baloo 2', cursive", color: '#fff',
            fontSize: '1.1rem', fontWeight: 800, lineHeight: 1
          }}>
            🎒 5. Sınıf İngilizce
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, marginTop: 3 }}>
            MEB 2025-2026 • 8 Tema
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9F43 100%)',
        padding: '32px 24px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h1 style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
          fontWeight: 800,
        }}>
          🎒 5. Sınıf Temaları
        </h1>
        <p style={{ opacity: 0.88, fontWeight: 600, marginTop: 6, fontSize: '0.95rem' }}>
          Bir tema seç ve öğrenmeye başla!
        </p>
      </section>

      {/* TIP */}
      <div style={{ padding: '20px 20px 0', maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div style={{
          background: '#fff9db', border: '2px solid #ffe066',
          borderRadius: 16, padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: '1.4rem' }}>💡</span>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#7a5f00' }}>
            Demo sürümünde sadece <strong>Tema 8</strong> aktif. Diğer temalar yakında eklenecek!
          </p>
        </div>
      </div>

      {/* UNITS */}
      <section style={{ padding: '20px', maxWidth: 700, margin: '0 auto', width: '100%', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {units.map(u => (
            u.locked ? (
              <div key={u.num} style={{
                background: '#fff', borderRadius: 20, padding: '18px 20px',
                display: 'flex', alignItems: 'center', gap: 16,
                opacity: 0.5, cursor: 'not-allowed',
                boxShadow: '0 3px 12px rgba(0,0,0,0.07)',
              }}>
                <span style={{ fontSize: '2.2rem', flexShrink: 0 }}>{u.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Tema {u.num}
                  </div>
                  <div style={{ fontWeight: 800, color: '#444', fontSize: '1rem', marginTop: 2 }}>{u.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#aaa', fontWeight: 700, marginTop: 2 }}>{u.tr}</div>
                  <div style={{ fontSize: '0.72rem', color: '#ccc', marginTop: 4 }}>{u.topics}</div>
                </div>
                <div className="el-badge el-badge-gray">🔒 Yakında</div>
              </div>
            ) : (
              <Link key={u.num} href={u.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', borderRadius: 20, padding: '18px 20px',
                  display: 'flex', alignItems: 'center', gap: 16,
                  boxShadow: '0 4px 20px rgba(255,107,107,0.15)',
                  border: '2.5px solid #FF6B6B',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  <span style={{ fontSize: '2.2rem', flexShrink: 0 }}>{u.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#FF6B6B', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Tema {u.num} • Demo
                    </div>
                    <div style={{ fontWeight: 800, color: '#1e1e2e', fontSize: '1rem', marginTop: 2 }}>{u.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, marginTop: 2 }}>{u.tr}</div>
                    <div style={{ fontSize: '0.72rem', color: '#aaa', marginTop: 4 }}>{u.topics}</div>
                  </div>
                  <div className="el-badge el-badge-green">▶ Başla</div>
                </div>
              </Link>
            )
          ))}
        </div>
      </section>

      <footer style={{
        textAlign: 'center', color: '#bbb', fontSize: '0.75rem',
        fontWeight: 700, padding: '24px',
      }}>
        EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
      </footer>
    </main>
  )
}