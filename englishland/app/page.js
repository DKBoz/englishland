import Link from 'next/link'

const grades = [
  { num: 5, emoji: '🎒', color: 'from-red-400 to-orange-400', shadow: 'shadow-red-200', href: '/grade5', ready: true },
  { num: 6, emoji: '📐', color: 'from-orange-400 to-yellow-400', shadow: 'shadow-orange-200', href: '/grade6', ready: false },
  { num: 7, emoji: '🔭', color: 'from-green-400 to-teal-400', shadow: 'shadow-green-200', href: '/grade7', ready: false },
  { num: 8, emoji: '🏆', color: 'from-blue-400 to-purple-400', shadow: 'shadow-blue-200', href: '/grade8', ready: false },
]

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center gap-3 shadow-lg">
        <span className="text-4xl">🌍</span>
        <div>
          <h1 className="text-white font-extrabold text-2xl leading-none">EnglishLand</h1>
          <p className="text-slate-400 text-xs font-bold mt-1">MEB 2025-2026 • Türkiye Yüzyılı Maarif Modeli</p>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-16">
        <div className="inline-block bg-yellow-100 border-2 border-yellow-300 text-yellow-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
          🚀 Demo Sürümü — Daha fazlası geliyor!
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
          İngilizce öğrenmek<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            hiç bu kadar eğlenceli
          </span>{' '}
          olmamıştı!
        </h2>
        <p className="text-slate-500 font-bold mt-4 text-lg">
          Sınıfını seç ve öğrenmeye başla 👇
        </p>
      </section>

      {/* GRADE CARDS */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <p className="text-center text-slate-400 font-bold text-sm mb-6 tracking-wide uppercase">📚 Sınıfını Seç</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {grades.map(g => (
            g.ready ? (
              <Link key={g.num} href={g.href}
                className={`bg-white rounded-3xl p-6 text-center shadow-lg ${g.shadow} border-2 border-transparent hover:scale-105 hover:border-red-300 transition-all duration-200 cursor-pointer`}>
                <span className="text-5xl block mb-3">{g.emoji}</span>
                <div className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${g.color}`}>
                  {g.num}. Sınıf
                </div>
                <div className="text-slate-400 text-xs font-bold mt-1">Ortaokul {g.num - 4}</div>
                <div className="mt-3 bg-green-100 text-green-600 text-xs font-bold py-1 px-3 rounded-full inline-block">
                  ✅ Demo Hazır
                </div>
              </Link>
            ) : (
              <div key={g.num}
                className="bg-white rounded-3xl p-6 text-center shadow-md opacity-50 cursor-not-allowed">
                <span className="text-5xl block mb-3">{g.emoji}</span>
                <div className="text-2xl font-extrabold text-slate-400">{g.num}. Sınıf</div>
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
      <section className="bg-slate-800 mx-6 rounded-3xl p-8 max-w-4xl md:mx-auto mb-16">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {[
            { icon: '🎮', label: 'Oyunlar' },
            { icon: '🔊', label: 'Dinleme' },
            { icon: '✏️', label: 'Yazma' },
            { icon: '🧩', label: 'Bulmaca' },
            { icon: '⭐', label: 'Rozetler' },
            { icon: '📖', label: 'MEB Müfredatı' },
          ].map(f => (
            <div key={f.label}>
              <span className="text-3xl block mb-2">{f.icon}</span>
              <span className="text-slate-400 text-xs font-bold">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-slate-400 text-xs pb-8 font-bold">
        EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
      </footer>

    </main>
  )
}