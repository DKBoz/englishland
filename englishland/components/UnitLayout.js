'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function UnitLayout({ title, subtitle, backHref, backLabel, tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className="min-h-screen">

      {/* TOPBAR */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center gap-4 shadow-lg">
        <Link href={backHref} className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full transition-all">
          ← {backLabel}
        </Link>
        <div>
          <h1 className="text-white font-extrabold text-lg leading-none">{title}</h1>
          <p className="text-slate-400 text-xs font-bold mt-1">{subtitle}</p>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-10 text-center text-white">
        <h2 className="text-3xl font-extrabold">{title}</h2>
        <p className="mt-2 font-bold opacity-90">{subtitle}</p>
      </section>

      {/* TABS */}
      <div className="bg-white border-b-2 border-slate-100 px-4 overflow-x-auto">
        <div className="flex gap-1 max-w-4xl mx-auto">
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`px-4 py-4 font-bold text-sm whitespace-nowrap border-b-3 transition-all
                ${activeTab === i
                  ? 'border-b-4 border-blue-400 text-blue-500'
                  : 'border-b-4 border-transparent text-slate-400 hover:text-slate-600'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE TAB CONTENT */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {tabs[activeTab].component}
      </section>

      <footer className="text-center text-slate-400 text-xs pb-8 font-bold">
        EnglishLand © 2025-2026
      </footer>
    </main>
  )
}