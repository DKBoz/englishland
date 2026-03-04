export const unitInfo = {
  title: "🏖️ Holiday Time!",
  subtitle: "Tatil yerleri, aktiviteler ve planlar",
  grade: 5,
  unit: 8,
}

export const vocab = [
  { en: "holiday", tr: "tatil", emoji: "🏖️" },
  { en: "travel", tr: "seyahat", emoji: "✈️" },
  { en: "beach", tr: "plaj", emoji: "🏝️" },
  { en: "swim", tr: "yüzmek", emoji: "🏊" },
  { en: "suitcase", tr: "bavul", emoji: "🧳" },
  { en: "sunscreen", tr: "güneş kremi", emoji: "🧴" },
  { en: "camping", tr: "kamp", emoji: "⛺" },
  { en: "museum", tr: "müze", emoji: "🏛️" },
  { en: "souvenir", tr: "hediyelik eşya", emoji: "🎁" },
  { en: "passport", tr: "pasaport", emoji: "🛂" },
  { en: "hotel", tr: "otel", emoji: "🏨" },
  { en: "adventure", tr: "macera", emoji: "🗺️" },
  { en: "relax", tr: "dinlenmek", emoji: "😌" },
  { en: "explore", tr: "keşfetmek", emoji: "🔍" },
  { en: "sunset", tr: "gün batımı", emoji: "🌅" },
  { en: "excited", tr: "heyecanlı", emoji: "🤩" },
]

export const questions = [
  { sentence: "Ali is going to travel to Antalya by plane.", answer: "travel", options: ["travel", "swim", "collect", "relax"] },
  { sentence: "We packed our suitcase before going to the airport.", answer: "suitcase", options: ["souvenir", "suitcase", "passport", "hotel"] },
  { sentence: "You need your passport to travel to another country.", answer: "passport", options: ["sunscreen", "suitcase", "passport", "map"] },
  { sentence: "We stayed at a beautiful hotel near the beach.", answer: "hotel", options: ["museum", "hotel", "camping", "sunset"] },
  { sentence: "She likes to collect seashells on the beach.", answer: "collect", options: ["explore", "build", "collect", "travel"] },
  { sentence: "Always put on sunscreen before going out in the sun!", answer: "sunscreen", options: ["sunscreen", "souvenir", "passport", "suitcase"] },
  { sentence: "We went camping in the mountains and slept in a tent.", answer: "camping", options: ["swimming", "camping", "travelling", "relaxing"] },
  { sentence: "I want to explore the old city and learn its history.", answer: "explore", options: ["collect", "relax", "explore", "pack"] },
]

export const scrambleWords = [
  { word: "holiday", tr: "tatil", emoji: "🏖️" },
  { word: "suitcase", tr: "bavul", emoji: "🧳" },
  { word: "passport", tr: "pasaport", emoji: "🛂" },
  { word: "explore", tr: "keşfetmek", emoji: "🔍" },
  { word: "adventure", tr: "macera", emoji: "🗺️" },
  { word: "sunscreen", tr: "güneş kremi", emoji: "🧴" },
]

export const spellWords = [
  { word: "beach", tr: "plaj", emoji: "🏝️" },
  { word: "hotel", tr: "otel", emoji: "🏨" },
  { word: "museum", tr: "müze", emoji: "🏛️" },
  { word: "camping", tr: "kamp", emoji: "⛺" },
  { word: "souvenir", tr: "hediyelik eşya", emoji: "🎁" },
]

export const dragSentences = [
  { tr: "Ali bu yaz tatile gidecek.", words: ["Ali", "is", "going", "to", "travel", "this", "summer", "."], answer: ["Ali", "is", "going", "to", "travel", "this", "summer", "."] },
  { tr: "Bavulumu uçuştan önce hazırladım.", words: ["I", "packed", "my", "suitcase", "before", "the", "flight", "."], answer: ["I", "packed", "my", "suitcase", "before", "the", "flight", "."] },
  { tr: "Her gün sahilde yüzmek istiyorum.", words: ["I", "want", "to", "swim", "at", "the", "beach", "every", "day", "."], answer: ["I", "want", "to", "swim", "at", "the", "beach", "every", "day", "."] },
]

export const matchPairs = [
  { en: "holiday", tr: "tatil" },
  { en: "beach", tr: "plaj" },
  { en: "travel", tr: "seyahat" },
  { en: "hotel", tr: "otel" },
  { en: "explore", tr: "keşfetmek" },
  { en: "camping", tr: "kamp" },
  { en: "passport", tr: "pasaport" },
  { en: "suitcase", tr: "bavul" },
]

export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "✈️",
      text: "It's the first day of summer holiday! Ali's family arrives at the airport. The plane leaves in 2 hours. Ali sees two signs:\n\n🔵 Duty Free Shop – buy souvenirs!\n🟡 Departure Lounge – relax before your flight!",
      choices: [
        { text: "🛍️ Go to the Duty Free Shop", next: 1, good: true, stars: 3 },
        { text: "😴 Go straight to the lounge", next: 2, good: false, stars: 1 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2 — İyi Seçim!", emoji: "🎁",
      text: "Great choice! Ali buys a souvenir magnet for his teacher. The shopkeeper asks: 'Would you like a bag?' How does Ali answer politely?",
      choices: [
        { text: "\"Yes, please!\"", next: 3, good: true, stars: 4 },
        { text: "\"Give bag now.\"", next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 2 — Dikkat!", emoji: "😴",
      text: "Ali falls asleep and almost misses the flight! His mum wakes him up just in time. At the gate, the officer asks: 'Do you have your passport?'",
      choices: [
        { text: "\"Yes, here it is!\"", next: 3, good: true, stars: 2 },
        { text: "\"I don't know where it is!\"", next: 4, good: false, stars: 0 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3 — On the Plane!", emoji: "🛫",
      text: "The plane takes off! The flight attendant asks: 'What would you like to drink?' Ali wants apple juice. What does he say?",
      choices: [
        { text: "\"Apple juice, please.\"", next: 5, good: true, stars: 4 },
        { text: "\"Apple juice!\"", next: 5, good: false, stars: 2 },
      ]
    },
    {
      id: 4, chapter: "Tekrar Dene!", emoji: "😬",
      text: "Oops! Making mistakes helps us learn. Let's try again! Remember: being polite and prepared is very important when travelling!",
      choices: [
        { text: "🔄 Baştan Başla", next: 0, good: true, stars: 0, restart: true },
      ]
    },
    {
      id: 5, chapter: "🏆 Harika Son!", emoji: "🎉",
      isEnd: true,
      text: "Ali has an AMAZING holiday! He swam in the sea, explored the old city, visited a museum, and even used his English to talk to tourists!\n\n'İngilizce çok işe yaradı!' he said happily. 🌟",
      choices: []
    },
  ]
}