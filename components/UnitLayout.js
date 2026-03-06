'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function UnitLayout({ title, subtitle, backHref, backLabel, tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f0f4ff' }}>

      {/* TOPBAR */}
      <header className="el-topbar">
        <Link href={backHref} className="el-back-btn">← {backLabel}</Link>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Baloo 2', cursive", color: '#fff',
            fontSize: '1rem', fontWeight: 800, lineHeight: 1,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
          }}>
            {title}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 700, marginTop: 3 }}>
            {subtitle}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #45aaf2 0%, #a55eea 100%)',
        padding: '28px 24px',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h1 style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
          fontWeight: 800,
        }}>
          {title}
        </h1>
        <p style={{ opacity: 0.82, fontWeight: 600, marginTop: 5, fontSize: '0.9rem' }}>
          {subtitle}
        </p>
      </section>

      {/* TABS */}
      <div style={{
        background: '#fff',
        borderBottom: '2.5px solid #f0f0f0',
        position: 'sticky',
        top: 57,
        zIndex: 40,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '0 8px',
          scrollbarWidth: 'none',
        }}>
          {tabs.map((tab, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{
                padding: '14px 16px',
                fontWeight: 800,
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                border: 'none',
                borderBottom: activeTab === i ? '3px solid #45aaf2' : '3px solid transparent',
                background: 'none',
                color: activeTab === i ? '#45aaf2' : '#aaa',
                cursor: 'pointer',
                transition: 'all 0.18s',
                flexShrink: 0,
              }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section style={{
        flex: 1,
        padding: '28px 16px 60px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}>
        {tabs[activeTab].component}
      </section>

      <footer style={{
        textAlign: 'center', color: '#bbb',
        fontSize: '0.75rem', fontWeight: 700,
        padding: '20px', borderTop: '2px solid #f0f0f0',
      }}>
        EnglishLand © 2025-2026 • MEB Türkiye Yüzyılı Maarif Modeli
      </footer>

    </main>
  )
}