'use client'
import Spelling from '@/components/activities/Spelling'
import WordScramble from '@/components/activities/WordScramble'
import UnitLayout from '@/components/UnitLayout'
import VocabCards from '@/components/activities/VocabCards'
import Quiz from '@/components/activities/Quiz'
import { unitInfo, vocab, questions, scrambleWords, spellWords } from './data'

export default function Unit8Page() {
  const tabs = [
    { label: "📖 Words", component: <VocabCards words={vocab} /> },
    { label: "✏️ Quiz", component: <Quiz questions={questions} /> },
    { label: "🔀 Scramble", component: <WordScramble words={scrambleWords} /> },
    { label: "🔤 Spelling", component: <Spelling words={spellWords} /> },
  ]

  return (
    <UnitLayout
      title={unitInfo.title}
      subtitle={unitInfo.subtitle}
      backHref="/grade5"
      backLabel="5. Sınıf"
      tabs={tabs}
    />
  )
}