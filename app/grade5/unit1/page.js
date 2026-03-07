'use client'
import UnitLayout from '@/components/UnitLayout'
import VocabCards from '@/components/activities/VocabCards'
import Quiz from '@/components/activities/Quiz'
import WordScramble from '@/components/activities/WordScramble'
import Spelling from '@/components/activities/Spelling'
import MatchGame from '@/components/activities/MatchGame'
import DragSentence from '@/components/activities/DragSentence'
import MiniStory from '@/components/activities/MiniStory'
import ReadingListen from '@/components/activities/ReadingListen'
import { unitInfo, vocab, questions, scrambleWords, spellWords, matchPairs, dragSentences, story, readingText } from './data'

export default function Unit1Page() {
  const tabs = [
    { label: "📖 Words", component: <VocabCards words={vocab} /> },
    { label: "🎧 Listen", component: <ReadingListen title={readingText.title} paragraphs={readingText.paragraphs} questions={readingText.questions} /> },
    { label: "✏️ Quiz", component: <Quiz questions={questions} /> },
    { label: "🔀 Scramble", component: <WordScramble words={scrambleWords} /> },
    { label: "🔤 Spelling", component: <Spelling words={spellWords} /> },
    { label: "🧩 Match", component: <MatchGame pairs={matchPairs} /> },
    { label: "🖱️ Sentences", component: <DragSentence sentences={dragSentences} /> },
    { label: "📖 Story", component: <MiniStory nodes={story.nodes} /> },
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