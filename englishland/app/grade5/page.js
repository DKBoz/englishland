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
    <main className="min-h-screen">

      {/* TOPBAR */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center gap-4 shadow-lg">
        <Link href="/" className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full transition-all">
          ← Ana Sayfa
        </Link>
        <div>
          <h1 className="text-white font-extrabold text-lg leading-none">🎒 5. Sınıf İngilizce</h1>
          <p className="text-slate-400 text-xs font-bold mt-1">MEB 2025-2026 • 8 Tema</p>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-red-400 to-orange-400 px-6 py-10 text-center text-white">
        <h2 className="text-3xl font-extrabold">🎒 5. Sınıf Temaları</h2>
        <p className="mt-2 font-bold opacity-90">Bir tema seç ve öğrenmeye başla!</p>
      </section>

      {/* UNITS GRID */}
      <section className="px-6 py-10 max-w-4xl mx-auto">

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mb-8 flex gap-3 items-center">
          <span className="text-2xl">💡</span>
          <p className="text-sm font-bold text-yellow-800">
            Demo sürümünde sadece <strong>Tema 8</strong> aktif. Diğer temalar yakında eklenecek!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {units.map(u => (
            u.locked ? (
              <div key={u.num} className="bg-white rounded-2xl p-6 shadow-md opacity-50 cursor-not-allowed flex gap-4 items-start">
                <span className="text-4xl">{u.emoji}</span>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Tema {u.num}</div>
                  <div className="font-extrabold text-slate-700">{u.name}</div>
                  <div className="text-xs text-slate-400 font-bold mt-1">{u.tr}</div>
                  <div className="text-xs text-slate-400 mt-2">{u.topics}</div>
                </div>
                <span className="bg-slate-100 text-slate-400 text-xs font-bold px-3 py-1 rounded-full">🔒 Yakında</span>
              </div>
            ) : (
              <Link key={u.num} href={u.href}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-orange-300 hover:scale-102 transition-all flex gap-4 items-start group">
                <span className="text-4xl">{u.emoji}</span>
                <div className="flex-1">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-1">Tema {u.num} • Demo</div>
                  <div className="font-extrabold text-slate-800 group-hover:text-orange-500 transition-colors">{u.name}</div>
                  <div className="text-xs text-slate-400 font-bold mt-1">{u.tr}</div>
                  <div className="text-xs text-slate-500 mt-2">{u.topics}</div>
                </div>
                <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">▶ Başla</span>
              </Link>
            )
          ))}
        </div>
      </section>

      <footer className="text-center text-slate-400 text-xs pb-8 font-bold">
        EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
      </footer>
    </main>
  )
}