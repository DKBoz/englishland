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
      text: "It's the first day of summer holiday! Ali's family arrives at the airport. A shop assistant sees Ali and says:\n\n'Hello! Can I help you?'\n\nHow does Ali respond politely?",
      choices: [
        { text: '"Yes please! Where is the departure gate?"', next: 1, good: true, stars: 3 },
        { text: '"GATE! WHERE!"', next: 2, good: false, stars: 0 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2 — Harika!", emoji: "😊",
      text: "Great manners! The assistant smiles and points the way.\n\nAt the gift shop, Ali wants to buy a souvenir magnet. It costs 5 euros. He gives the cashier 10 euros. What does he say?",
      choices: [
        { text: '"Here you are. Can I have the change, please?"', next: 3, good: true, stars: 4 },
        { text: '"Give me my money back."', next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 2 — Dikkat!", emoji: "😬",
      text: "The assistant looks confused. Ali's mum reminds him to speak politely.\n\nAt the gate, the officer asks: 'Do you have your passport?'\n\nWhat does Ali say?",
      choices: [
        { text: '"Yes, here it is. Thank you!"', next: 3, good: true, stars: 2 },
        { text: '"I don\'t know where it is!"', next: 4, good: false, stars: 0 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3 — On the Plane!", emoji: "🛫",
      text: "The plane takes off! The flight attendant comes and asks:\n\n'What would you like to drink?'\n\nAli wants apple juice. What does he say?",
      choices: [
        { text: '"Apple juice, please!"', next: 5, good: true, stars: 4 },
        { text: '"Apple juice." (no please)', next: 5, good: false, stars: 2 },
      ]
    },
    {
      id: 4, chapter: "Tekrar Dene!", emoji: "😅",
      text: "Oops! Remember — being polite in English is very important!\n\nKey phrases to remember:\n✅ Please\n✅ Thank you\n✅ Can I have...?\n✅ Here you are\n\nLet's try again!",
      choices: [
        { text: "🔄 Baştan Başla", next: 0, good: true, stars: 0, restart: true },
      ]
    },
    {
      id: 5, chapter: "🏆 Harika Son!", emoji: "🎉",
      isEnd: true,
      text: "Ali arrives in Antalya! 🌊☀️\n\nHe swam in the sea, explored the old city, visited a museum, and used his English to talk to tourists!\n\n'İngilizce çok işe yaradı!' he said happily.\n\nYou helped Ali have an amazing holiday! 🌟",
      choices: []
    },
  ]
}

export const readingText = {
  title: "Ali's Holiday Plan",
  paragraphs: [
    {
      text: "Ali and his family are going on a holiday to Antalya this summer. They are very excited! Ali's mum is packing the suitcase. She puts in sunscreen, clothes, and a camera.",
      words: { holiday: "tatil", summer: "yaz", excited: "heyecanlı", suitcase: "bavul", sunscreen: "güneş kremi" }
    },
    {
      text: "They travel to Antalya by plane. It is Ali's first time on a plane! He looks out of the window and sees the beautiful sunset over the clouds.",
      words: { travel: "seyahat etmek", plane: "uçak", beautiful: "güzel", sunset: "gün batımı", clouds: "bulutlar" }
    },
    {
      text: "At the beach, Ali wants to swim in the sea and collect seashells. His dad wants to explore the old city and visit a museum. His mum just wants to relax!",
      words: { beach: "plaj", swim: "yüzmek", collect: "toplamak", explore: "keşfetmek", museum: "müze", relax: "dinlenmek" }
    },
    {
      text: "Before they leave, Ali buys a souvenir magnet for his teacher. He puts it carefully in his bag next to his passport. 'I can't wait for our adventure!' says Ali happily.",
      words: { souvenir: "hediyelik eşya", passport: "pasaport", adventure: "macera", carefully: "dikkatlice" }
    },
  ],
  questions: [
    { question: "Where is Ali's family going?", options: ["Istanbul", "Antalya", "Ankara", "Izmir"], answer: "Antalya" },
    { question: "How do they travel?", options: ["By car", "By train", "By plane", "By bus"], answer: "By plane" },
    { question: "What does Ali want to do at the beach?", options: ["Build sandcastles", "Swim and collect shells", "Read books", "Take photos"], answer: "Swim and collect shells" },
    { question: "What does Ali buy for his teacher?", options: ["A book", "A souvenir magnet", "Sunscreen", "A camera"], answer: "A souvenir magnet" },
  ]
}