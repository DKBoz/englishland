import Link from 'next/link'

const grades = [
  { num: 5, emoji: '🎒', from: 'from-red-400', to: 'to-orange-400', href: '/grade5', ready: true },
  { num: 6, emoji: '📐', from: 'from-orange-400', to: 'to-yellow-400', href: '/grade6', ready: false },
  { num: 7, emoji: '🔭', from: 'from-green-400', to: 'to-teal-400', href: '/grade7', ready: false },
  { num: 8, emoji: '🏆', from: 'from-blue-400', to: 'to-purple-400', href: '/grade8', ready: false },
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
    <main className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center gap-3">
        <span className="text-4xl">🌍</span>
        <div>
          <h1 className="text-white font-extrabold text-2xl leading-none"
            style={{ fontFamily: 'var(--font-baloo)' }}>
            EnglishLand
          </h1>
          <p className="text-slate-400 text-xs font-bold mt-1">MEB 2025-2026 • Türkiye Yüzyılı Maarif Modeli</p>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-sm font-bold px-4 py-2 rounded-full mb-6">
          🚀 Demo Sürümü — Daha fazlası geliyor!
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          style={{ fontFamily: 'var(--font-baloo)' }}>
          İngilizce öğrenmek
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            hiç bu kadar eğlenceli
          </span>
          <br />
          olmamıştı!
        </h2>
        <p className="text-slate-400 font-bold mt-4 text-lg">
          Sınıfını seç ve öğrenmeye başla 👇
        </p>
      </section>

      {/* GRADE CARDS */}
<section className="px-4 py-10 w-full">
  <p className="text-center text-slate-400 font-bold text-sm mb-6 tracking-widest uppercase">
    📚 Sınıfını Seç
  </p>
  <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {grades.map(g => (
            g.ready ? (
              <Link key={g.num} href={g.href}
                className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-orange-200">
                <span className="text-5xl block mb-3">{g.emoji}</span>
                <div className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${g.from} ${g.to}`}
                  style={{ fontFamily: 'var(--font-baloo)' }}>
                  {g.num}. Sınıf
                </div>
                <div className="text-slate-400 text-xs font-bold mt-1">Ortaokul {g.num - 4}</div>
                <div className="mt-3 bg-green-100 text-green-600 text-xs font-bold py-1 px-3 rounded-full inline-block">
                  ✅ Demo Hazır
                </div>
              </Link>
            ) : (
              <div key={g.num}
                className="bg-white/60 rounded-3xl p-6 text-center shadow-md opacity-50 cursor-not-allowed">
                <span className="text-5xl block mb-3">{g.emoji}</span>
                <div className="text-2xl font-extrabold text-slate-400"
                  style={{ fontFamily: 'var(--font-baloo)' }}>
                  {g.num}. Sınıf
                </div>
                <div className="text-slate-400 text-xs font-bold mt-1">Ortaokul {g.num - 4}</div>
                <div className="mt-3 bg-slate-100 text-slate-400 text-xs font-bold py-1 px-3 rounded-full inline-block">
                  🔒 Yakında
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-auto bg-slate-800 px-6 py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center max-w-2xl mx-auto">
          {features.map(f => (
            <div key={f.label}>
              <span className="text-3xl block mb-2">{f.icon}</span>
              <span className="text-slate-400 text-xs font-bold">{f.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-xs mt-6 font-bold">
          EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
        </p>
      </section>

    </main>
  )
}