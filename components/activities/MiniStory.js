'use client'
import { useState } from 'react'

export default function MiniStory({ nodes }) {
  const [currentId, setCurrentId] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [totalStars, setTotalStars] = useState(0)

  const node = nodes.find(n => n.id === currentId)

  function handleChoice(choice) {
    if (chosen) return
    setChosen(choice)
    setTotalStars(prev => prev + (choice.stars || 0))
    setTimeout(() => {
      if (choice.restart) {
        setCurrentId(0)
        setChosen(null)
      } else {
        setCurrentId(choice.next)
        setChosen(null)
      }
    }, 800)
  }

  function restart() {
    setCurrentId(0)
    setChosen(null)
    setTotalStars(0)
  }

  if (!node) return null

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-800 mb-1">📖 Interactive Story</h2>
      <p className="text-slate-400 font-bold text-sm mb-6">Seçimlerini yap, hikayeni yaz!</p>

      {/* STARS */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl px-4 py-3 flex items-center gap-2 mb-6">
        <span className="text-xl">⭐</span>
        <span className="font-extrabold text-yellow-700">{totalStars} yıldız kazandın!</span>
      </div>

      {/* SCENE */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {/* CHAPTER HEADER */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-4">
          <div className="text-white/70 text-xs font-bold uppercase tracking-wide">{node.chapter}</div>
          <div className="text-4xl mt-1">{node.emoji}</div>
        </div>

        <div className="p-6">
          {/* STORY TEXT */}
          <div className="text-slate-700 font-bold leading-relaxed mb-6 whitespace-pre-line">
            {node.text}
          </div>

          {/* END SCREEN */}
          {node.isEnd ? (
            <div className="text-center">
              <div className="text-5xl mb-3">🏆</div>
              <div className="font-extrabold text-slate-800 text-xl mb-2">
                {totalStars >= 10 ? 'Mükemmel!' : totalStars >= 5 ? 'Çok İyi!' : 'İyi Deneme!'}
              </div>
              <div className="text-slate-500 font-bold mb-6">
                Toplam: {totalStars} ⭐
              </div>
              <button onClick={restart}
                className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-extrabold px-8 py-3 rounded-full transition-all hover:scale-105">
                🔄 Tekrar Oyna
              </button>
            </div>
          ) : (
            /* CHOICES */
            <div className="flex flex-col gap-3">
              {node.choices.map((choice, i) => (
                <button key={i} onClick={() => handleChoice(choice)}
                  disabled={!!chosen}
                  className={`text-left p-4 rounded-2xl border-2 font-bold text-sm transition-all
                    ${chosen === choice
                      ? choice.good
                        ? 'bg-green-100 border-green-400 text-green-700'
                        : 'bg-red-100 border-red-400 text-red-700'
                      : chosen
                        ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-50'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-purple-400 hover:bg-purple-50'}`}>
                  {choice.text}
                  {chosen === choice && (
                    <span className="ml-2">{choice.good ? '✅' : '❌'}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}