'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function UnitLayout({ title, subtitle, backHref, backLabel, tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">

      {/* TOPBAR */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center gap-3 sticky top-0 z-50 shadow-lg">
        <Link href={backHref}
          className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-3 py-2 rounded-xl transition-all whitespace-nowrap">
          ← {backLabel}
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-white font-extrabold text-base leading-none truncate"
            style={{ fontFamily: 'var(--font-baloo)' }}>
            {title}
          </h1>
          <p className="text-slate-400 text-xs font-bold mt-0.5">{subtitle}</p>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-8 text-center text-white">
        <h2 className="text-3xl font-extrabold" style={{ fontFamily: 'var(--font-baloo)' }}>
          {title}
        </h2>
        <p className="mt-1 font-bold opacity-80 text-sm">{subtitle}</p>
      </section>

      {/* TABS */}
      <div className="bg-white border-b-2 border-slate-100 sticky top-14 z-40 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-none px-2">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-4 py-3 font-bold text-sm whitespace-nowrap border-b-4 transition-all flex-shrink-0
                ${activeTab === i
                  ? 'border-blue-400 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
        {tabs[activeTab].component}
      </section>

      <footer className="text-center text-slate-400 text-xs py-6 font-bold border-t border-slate-200">
        EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
      </footer>

    </main>
  )
}