export const unitInfo = {
  title: "🎮 Games and Hobbies",
  subtitle: "Oyunlar ve Hobiler",
  grade: 5,
  unit: 3,
}

export const vocab = [
  { en: "hobby", tr: "hobi", emoji: "🎨" },
  { en: "football", tr: "futbol", emoji: "⚽" },
  { en: "basketball", tr: "basketbol", emoji: "🏀" },
  { en: "swimming", tr: "yüzme", emoji: "🏊" },
  { en: "painting", tr: "resim yapma", emoji: "🎨" },
  { en: "reading", tr: "okuma", emoji: "📚" },
  { en: "cooking", tr: "yemek yapma", emoji: "🍳" },
  { en: "dancing", tr: "dans etme", emoji: "💃" },
  { en: "singing", tr: "şarkı söyleme", emoji: "🎤" },
  { en: "cycling", tr: "bisiklet sürme", emoji: "🚴" },
  { en: "gaming", tr: "oyun oynama", emoji: "🎮" },
  { en: "camping", tr: "kamp yapma", emoji: "⛺" },
  { en: "chess", tr: "satranç", emoji: "♟️" },
  { en: "photography", tr: "fotoğrafçılık", emoji: "📷" },
  { en: "gardening", tr: "bahçecilik", emoji: "🌱" },
  { en: "collecting", tr: "koleksiyon yapma", emoji: "🏆" },
]

export const questions = [
  { sentence: "My hobby is painting. I love drawing pictures.", answer: "painting", options: ["dancing", "painting", "cooking", "reading"] },
  { sentence: "She can play football very well.", answer: "football", options: ["chess", "football", "basketball", "cycling"] },
  { sentence: "I go cycling in the park every weekend.", answer: "cycling", options: ["swimming", "cycling", "gaming", "camping"] },
  { sentence: "He loves singing. He sings every day.", answer: "singing", options: ["dancing", "singing", "cooking", "reading"] },
  { sentence: "We go camping in the mountains in summer.", answer: "camping", options: ["gardening", "camping", "collecting", "chess"] },
  { sentence: "My sister's hobby is photography. She takes great photos.", answer: "photography", options: ["photography", "painting", "reading", "gaming"] },
  { sentence: "Can you play chess? It is a difficult game.", answer: "chess", options: ["football", "chess", "basketball", "gaming"] },
  { sentence: "I enjoy cooking. I make dinner for my family.", answer: "cooking", options: ["cooking", "dancing", "singing", "cycling"] },
]

export const scrambleWords = [
  { word: "football", tr: "futbol", emoji: "⚽" },
  { word: "painting", tr: "resim yapma", emoji: "🎨" },
  { word: "cycling", tr: "bisiklet sürme", emoji: "🚴" },
  { word: "dancing", tr: "dans etme", emoji: "💃" },
  { word: "camping", tr: "kamp yapma", emoji: "⛺" },
  { word: "reading", tr: "okuma", emoji: "📚" },
]

export const spellWords = [
  { word: "hobby", tr: "hobi", emoji: "🎨" },
  { word: "chess", tr: "satranç", emoji: "♟️" },
  { word: "singing", tr: "şarkı söyleme", emoji: "🎤" },
  { word: "cooking", tr: "yemek yapma", emoji: "🍳" },
  { word: "gaming", tr: "oyun oynama", emoji: "🎮" },
]

export const dragSentences = [
  { tr: "Hobilerim yüzme ve dans etmedir.", words: ["My", "hobbies", "are", "swimming", "and", "dancing", "."], answer: ["My", "hobbies", "are", "swimming", "and", "dancing", "."] },
  { tr: "Her hafta sonu bisiklete biniyorum.", words: ["I", "go", "cycling", "every", "weekend", "."], answer: ["I", "go", "cycling", "every", "weekend", "."] },
  { tr: "O futbol oynamayı seviyor.", words: ["He", "loves", "playing", "football", "."], answer: ["He", "loves", "playing", "football", "."] },
]

export const matchPairs = [
  { en: "football", tr: "futbol" },
  { en: "painting", tr: "resim yapma" },
  { en: "cycling", tr: "bisiklet sürme" },
  { en: "dancing", tr: "dans etme" },
  { en: "chess", tr: "satranç" },
  { en: "cooking", tr: "yemek yapma" },
  { en: "singing", tr: "şarkı söyleme" },
  { en: "camping", tr: "kamp yapma" },
]

export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "🎮",
      text: "It's Saturday! Ali's mum says: 'You have free time today. What do you want to do?'\n\nAli thinks about his hobbies. What does he say?",
      choices: [
        { text: '"I want to go cycling in the park!"', next: 1, good: true, stars: 3 },
        { text: '"I don\'t know."', next: 2, good: false, stars: 0 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2 — Harika!", emoji: "🚴",
      text: "Great choice! At the park, Ali meets his friend Mehmet. Mehmet asks:\n\n'What are your hobbies, Ali?'\n\nHow does Ali answer?",
      choices: [
        { text: '"My hobbies are cycling and painting."', next: 3, good: true, stars: 4 },
        { text: '"I like... things."', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 2 — Dikkat!", emoji: "😕",
      text: "Ali's mum helps him. 'Think about what you enjoy doing!'\n\nAli remembers he loves painting. What does he tell his mum?",
      choices: [
        { text: '"I want to do some painting, please!"', next: 3, good: true, stars: 2 },
        { text: '"Painting... yes."', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3", emoji: "♟️",
      text: "Later, Mehmet challenges Ali to a game of chess.\n\n'Can you play chess?' asks Mehmet.\n\nAli has never played before. What does he say?",
      choices: [
        { text: '"No, I can\'t. But I want to learn!"', next: 4, good: true, stars: 4 },
        { text: '"No."', next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 4, chapter: "🏆 Harika Gün!", emoji: "🎉",
      isEnd: true,
      text: "Ali had an amazing Saturday! He went cycling, talked about his hobbies, and even started learning chess!\n\n'Yeni hobiler edinmek çok eğlenceli!' said Ali. 🌟\n\nNow you can talk about YOUR hobbies too!",
      choices: []
    },
  ]
}

export const readingText = {
  title: "Hobbies at School",
  paragraphs: [
    {
      text: "At Atatürk Middle School, students have a hobby club every Friday afternoon. Students can choose their favourite hobby and join a group.",
      words: { hobby: "hobi", club: "kulüp", favourite: "favori", choose: "seçmek", join: "katılmak" }
    },
    {
      text: "Ali loves cycling and painting. He joins the art club on Fridays. His friend Zeynep loves dancing and singing. She joins the music club.",
      words: { cycling: "bisiklet sürme", painting: "resim yapma", dancing: "dans etme", singing: "şarkı söyleme", music: "müzik" }
    },
    {
      text: "Mehmet can play chess very well. He teaches other students how to play. He also loves camping and goes to the mountains every summer.",
      words: { chess: "satranç", teaches: "öğretiyor", camping: "kamp yapma", mountains: "dağlar", summer: "yaz" }
    },
    {
      text: "At the end of the year, students show their hobbies at a school fair. Ali paints a picture of his town. Everyone loves it!",
      words: { show: "sergilemek", fair: "şenlik", paints: "resim yapar", picture: "resim", everyone: "herkes" }
    },
  ],
  questions: [
    { question: "When is the hobby club?", options: ["Monday", "Wednesday", "Friday", "Saturday"], answer: "Friday" },
    { question: "What club does Ali join?", options: ["Music club", "Chess club", "Art club", "Sports club"], answer: "Art club" },
    { question: "What can Mehmet do very well?", options: ["Paint", "Dance", "Sing", "Play chess"], answer: "Play chess" },
    { question: "What does Ali paint at the fair?", options: ["A portrait", "A picture of his town", "A flower", "A football"], answer: "A picture of his town" },
  ]
}