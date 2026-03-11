export const unitInfo = {
  title: "🦁 Wild Animals",
  subtitle: "Vahşi Hayvanlar",
  grade: 5,
  unit: 4,
}

export const vocab = [
  { en: "lion", tr: "aslan", emoji: "🦁" },
  { en: "elephant", tr: "fil", emoji: "🐘" },
  { en: "giraffe", tr: "zürafa", emoji: "🦒" },
  { en: "zebra", tr: "zebra", emoji: "🦓" },
  { en: "penguin", tr: "penguen", emoji: "🐧" },
  { en: "dolphin", tr: "yunus", emoji: "🐬" },
  { en: "eagle", tr: "kartal", emoji: "🦅" },
  { en: "crocodile", tr: "timsah", emoji: "🐊" },
  { en: "wolf", tr: "kurt", emoji: "🐺" },
  { en: "bear", tr: "ayı", emoji: "🐻" },
  { en: "habitat", tr: "yaşam alanı", emoji: "🌿" },
  { en: "jungle", tr: "cangıl", emoji: "🌴" },
  { en: "desert", tr: "çöl", emoji: "🏜️" },
  { en: "ocean", tr: "okyanus", emoji: "🌊" },
  { en: "forest", tr: "orman", emoji: "🌲" },
  { en: "Arctic", tr: "Kuzey Kutbu", emoji: "🧊" },
]

export const questions = [
  { sentence: "The elephant is ___ than the lion.", answer: "bigger", options: ["smaller", "faster", "bigger", "heavier"] },
  { sentence: "The eagle is the ___ bird in the sky.", answer: "fastest", options: ["biggest", "slowest", "fastest", "smallest"] },
  { sentence: "Penguins live in the ___. It is very cold there.", answer: "Arctic", options: ["jungle", "desert", "ocean", "Arctic"] },
  { sentence: "The crocodile is ___ than the zebra.", answer: "more dangerous", options: ["more dangerous", "more beautiful", "more friendly", "more colourful"] },
  { sentence: "Dolphins live in the ___ and are very intelligent.", answer: "ocean", options: ["forest", "desert", "ocean", "jungle"] },
  { sentence: "The giraffe is the ___ animal in the world.", answer: "tallest", options: ["smallest", "heaviest", "fastest", "tallest"] },
  { sentence: "Wolves live in ___ and hunt in groups.", answer: "forests", options: ["oceans", "deserts", "forests", "jungles"] },
  { sentence: "The bear is ___ than the wolf.", answer: "stronger", options: ["faster", "stronger", "smaller", "lighter"] },
]

export const scrambleWords = [
  { word: "elephant", tr: "fil", emoji: "🐘" },
  { word: "penguin", tr: "penguen", emoji: "🐧" },
  { word: "crocodile", tr: "timsah", emoji: "🐊" },
  { word: "habitat", tr: "yaşam alanı", emoji: "🌿" },
  { word: "dolphin", tr: "yunus", emoji: "🐬" },
  { word: "giraffe", tr: "zürafa", emoji: "🦒" },
]

export const spellWords = [
  { word: "lion", tr: "aslan", emoji: "🦁" },
  { word: "eagle", tr: "kartal", emoji: "🦅" },
  { word: "wolf", tr: "kurt", emoji: "🐺" },
  { word: "desert", tr: "çöl", emoji: "🏜️" },
  { word: "ocean", tr: "okyanus", emoji: "🌊" },
]

export const matchPairs = [
  { en: "lion", tr: "aslan" },
  { en: "elephant", tr: "fil" },
  { en: "penguin", tr: "penguen" },
  { en: "dolphin", tr: "yunus" },
  { en: "jungle", tr: "cangıl" },
  { en: "desert", tr: "çöl" },
  { en: "forest", tr: "orman" },
  { en: "habitat", tr: "yaşam alanı" },
]

export const dragSentences = [
  { tr: "Fil, aslandan daha büyüktür.", words: ["The", "elephant", "is", "bigger", "than", "the", "lion", "."], answer: ["The", "elephant", "is", "bigger", "than", "the", "lion", "."] },
  { tr: "Penguenler Kuzey Kutbu'nda yaşar.", words: ["Penguins", "live", "in", "the", "Arctic", "."], answer: ["Penguins", "live", "in", "the", "Arctic", "."] },
  { tr: "Zürafa dünyanın en uzun boylu hayvanıdır.", words: ["The", "giraffe", "is", "the", "tallest", "animal", "in", "the", "world", "."], answer: ["The", "giraffe", "is", "the", "tallest", "animal", "in", "the", "world", "."] },
]



export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "🌍",
      text: "Selin is at the zoo with her class. Her teacher says: 'Pick one animal to research!'\n\nShe sees:\n🦁 A lion resting in the sun\n🐘 An elephant splashing water\n🐧 A penguin sliding on ice\n\nWhich does she choose?",
      choices: [
        { text: "🦁 The lion", next: 1, good: true, stars: 3 },
        { text: "🐘 The elephant", next: 1, good: true, stars: 3 },
        { text: "🐧 The penguin", next: 1, good: true, stars: 3 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2", emoji: "📖",
      text: "The zookeeper asks: 'Where does your animal live?'\n\nSelin read the habitat board carefully. What does she say?",
      choices: [
        { text: '"It lives in its natural habitat!"', next: 2, good: true, stars: 4 },
        { text: '"I don\'t know..."', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 3", emoji: "🔍",
      text: "The zookeeper smiles. 'Now compare your animal to another one!'\n\nWhich sentence is correct?",
      choices: [
        { text: '"My animal is more interesting than the crocodile!"', next: 4, good: true, stars: 4 },
        { text: '"My animal is more interesting the crocodile!"', next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3 — Tekrar!", emoji: "🤔",
      text: "The zookeeper helps Selin read the board again. Now she understands!\n\nShe tries once more confidently.",
      choices: [
        { text: '"It lives in the jungle / Arctic / ocean!"', next: 4, good: true, stars: 2 },
      ]
    },
    {
      id: 4, chapter: "🏆 Tamamlandı!", emoji: "🎉",
      isEnd: true,
      text: "Selin finished her project! She learned about habitats and used comparatives perfectly.\n\n'Vahşi hayvanlar harika!' she says. 🌟\n\nNow you know all about wild animals!",
      choices: []
    },
  ]
}

export const readingText = {
  title: "Amazing Wild Animals",
  paragraphs: [
    {
      text: "Wild animals live in different habitats around the world. Some animals live in hot jungles, some in cold Arctic regions, and some in deep oceans. Every animal is special in its own way.",
      words: { wild: "vahşi", habitats: "yaşam alanları", jungle: "cangıl", Arctic: "Kuzey Kutbu", ocean: "okyanus" }
    },
    {
      text: "The giraffe is the tallest animal in the world. It lives in Africa and eats leaves from tall trees. The elephant is the biggest land animal. It is stronger than most other animals.",
      words: { tallest: "en uzun boylu", leaves: "yapraklar", biggest: "en büyük", stronger: "daha güçlü" }
    },
    {
      text: "Dolphins live in the ocean. They are more intelligent than many other animals. Penguins live in the Arctic. They cannot fly, but they are faster swimmers than most fish.",
      words: { intelligent: "zeki", fly: "uçmak", swimmers: "yüzücüler" }
    },
    {
      text: "Lions live in grasslands and are called the kings of the jungle. They are more dangerous than wolves, but wolves are faster runners. All wild animals are important for our planet.",
      words: { grasslands: "otlaklar", dangerous: "tehlikeli", runners: "koşucular", planet: "gezegen" }
    },
  ],
  questions: [
    { question: "Which is the tallest animal in the world?", options: ["Elephant", "Lion", "Giraffe", "Dolphin"], answer: "Giraffe" },
    { question: "Where do penguins live?", options: ["Jungle", "Desert", "Ocean", "Arctic"], answer: "Arctic" },
    { question: "Which animal is described as more intelligent?", options: ["Wolf", "Dolphin", "Crocodile", "Eagle"], answer: "Dolphin" },
    { question: "What are lions called?", options: ["Kings of the ocean", "Kings of the jungle", "Kings of the forest", "Kings of the desert"], answer: "Kings of the jungle" },
  ]
}