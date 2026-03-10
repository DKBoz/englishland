export const unitInfo = {
  title: "🏙️ My Town",
  subtitle: "Şehrim ve Çevrem",
  grade: 5,
  unit: 2,
}

export const vocab = [
  { en: "town", tr: "kasaba/şehir", emoji: "🏙️" },
  { en: "street", tr: "sokak", emoji: "🛣️" },
  { en: "bank", tr: "banka", emoji: "🏦" },
  { en: "hospital", tr: "hastane", emoji: "🏥" },
  { en: "school", tr: "okul", emoji: "🏫" },
  { en: "park", tr: "park", emoji: "🌳" },
  { en: "library", tr: "kütüphane", emoji: "📚" },
  { en: "mosque", tr: "cami", emoji: "🕌" },
  { en: "market", tr: "market", emoji: "🛒" },
  { en: "restaurant", tr: "restoran", emoji: "🍽️" },
  { en: "bakery", tr: "fırın", emoji: "🥖" },
  { en: "pharmacy", tr: "eczane", emoji: "💊" },
  { en: "stadium", tr: "stadyum", emoji: "🏟️" },
  { en: "post office", tr: "postane", emoji: "📮" },
  { en: "bus stop", tr: "otobüs durağı", emoji: "🚌" },
  { en: "traffic light", tr: "trafik ışığı", emoji: "🚦" },
]

export const questions = [
  { sentence: "I go to the library to read books.", answer: "library", options: ["library", "market", "bank", "park"] },
  { sentence: "There is a hospital near our school.", answer: "hospital", options: ["mosque", "hospital", "bakery", "stadium"] },
  { sentence: "We buy fresh bread from the bakery every morning.", answer: "bakery", options: ["market", "restaurant", "bakery", "pharmacy"] },
  { sentence: "The bus stop is next to the traffic light.", answer: "bus stop", options: ["park", "street", "bus stop", "bank"] },
  { sentence: "I get my medicine from the pharmacy.", answer: "pharmacy", options: ["pharmacy", "hospital", "market", "bakery"] },
  { sentence: "There is a beautiful park in the centre of our town.", answer: "park", options: ["street", "park", "stadium", "mosque"] },
  { sentence: "We send letters from the post office.", answer: "post office", options: ["bank", "post office", "library", "market"] },
  { sentence: "The restaurant is on the main street.", answer: "street", options: ["town", "street", "park", "bank"] },
]

export const scrambleWords = [
  { word: "library", tr: "kütüphane", emoji: "📚" },
  { word: "hospital", tr: "hastane", emoji: "🏥" },
  { word: "market", tr: "market", emoji: "🛒" },
  { word: "mosque", tr: "cami", emoji: "🕌" },
  { word: "pharmacy", tr: "eczane", emoji: "💊" },
  { word: "stadium", tr: "stadyum", emoji: "🏟️" },
]

export const spellWords = [
  { word: "bank", tr: "banka", emoji: "🏦" },
  { word: "park", tr: "park", emoji: "🌳" },
  { word: "street", tr: "sokak", emoji: "🛣️" },
  { word: "school", tr: "okul", emoji: "🏫" },
  { word: "market", tr: "market", emoji: "🛒" },
]

export const dragSentences = [
  { tr: "Okulun yanında bir park var.", words: ["There", "is", "a", "park", "next", "to", "the", "school", "."], answer: ["There", "is", "a", "park", "next", "to", "the", "school", "."] },
  { tr: "Kütüphane caddenin sonunda.", words: ["The", "library", "is", "at", "the", "end", "of", "the", "street", "."], answer: ["The", "library", "is", "at", "the", "end", "of", "the", "street", "."] },
  { tr: "Markete her Cumartesi gidiyoruz.", words: ["We", "go", "to", "the", "market", "every", "Saturday", "."], answer: ["We", "go", "to", "the", "market", "every", "Saturday", "."] },
]

export const matchPairs = [
  { en: "library", tr: "kütüphane" },
  { en: "hospital", tr: "hastane" },
  { en: "bakery", tr: "fırın" },
  { en: "pharmacy", tr: "eczane" },
  { en: "mosque", tr: "cami" },
  { en: "stadium", tr: "stadyum" },
  { en: "park", tr: "park" },
  { en: "market", tr: "market" },
]

export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "🗺️",
      text: "Ali's grandma calls him. 'Ali, can you go to the market for me? I need some bread and medicine.'\n\nAli looks at the map. He sees two routes:\n\n🔵 Go to the bakery first, then the pharmacy\n🟡 Go to the pharmacy first, then the bakery",
      choices: [
        { text: "🥖 Bakery first, then pharmacy", next: 1, good: true, stars: 3 },
        { text: "💊 Pharmacy first, then bakery", next: 1, good: true, stars: 3 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2", emoji: "🥖",
      text: "At the bakery, the baker asks:\n\n'Hello! What would you like?'\n\nAli needs two loaves of bread. What does he say?",
      choices: [
        { text: '"Two loaves of bread, please!"', next: 2, good: true, stars: 4 },
        { text: '"Bread! Two!"', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 3 — Harika!", emoji: "😊",
      text: "The baker smiles. 'Here you are! That\'s 20 liras.'\n\nAli pays and says thank you. Now he needs to find the pharmacy.\n\nA stranger asks: 'Excuse me, where is the pharmacy?'\n\nHow does Ali give directions?",
      choices: [
        { text: '"It\'s next to the hospital, on the main street."', next: 4, good: true, stars: 4 },
        { text: '"I don\'t know, sorry."', next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3 — Dikkat!", emoji: "😬",
      text: "The baker looks confused. Ali's mum always says: speak politely and in full sentences!\n\nAli tries again. What does he say?",
      choices: [
        { text: '"Sorry! Two loaves of bread, please!"', next: 2, good: true, stars: 2 },
        { text: '"Give me bread."', next: 2, good: false, stars: 0 },
      ]
    },
    {
      id: 4, chapter: "🏆 Görev Tamamlandı!", emoji: "🎉",
      isEnd: true,
      text: "Ali completed all his errands! He found the bakery, the pharmacy, and even helped a stranger with directions!\n\n'Şehrimizi çok iyi tanıyorum!' said Ali proudly. 🌟\n\nNow you know all the places in town too!",
      choices: []
    },
  ]
}

export const readingText = {
  title: "Ali's Neighbourhood",
  paragraphs: [
    {
      text: "Ali lives in a busy town in Turkey. There are many places in his neighbourhood. There is a school, a park, a market and a mosque on his street.",
      words: { town: "şehir", neighbourhood: "mahalle", school: "okul", park: "park", market: "market", mosque: "cami", street: "sokak" }
    },
    {
      text: "Every morning, Ali walks past the bakery and smells fresh bread. The baker always waves hello. Next to the bakery, there is a pharmacy.",
      words: { bakery: "fırın", bread: "ekmek", pharmacy: "eczane", waves: "el sallıyor" }
    },
    {
      text: "On Saturdays, Ali goes to the library with his dad. The library is at the end of the street, next to the hospital. Ali loves reading books there.",
      words: { library: "kütüphane", hospital: "hastane", reading: "okumak" }
    },
    {
      text: "Ali's favourite place is the stadium. His football team plays there every Sunday. 'Our town is the best town!' says Ali happily.",
      words: { stadium: "stadyum", football: "futbol", favourite: "favori", happily: "mutlulukla" }
    },
  ],
  questions: [
    { question: "Where does Ali live?", options: ["A village", "A busy town", "A city", "A farm"], answer: "A busy town" },
    { question: "What does Ali smell every morning?", options: ["Coffee", "Fresh bread", "Flowers", "Medicine"], answer: "Fresh bread" },
    { question: "Where does Ali go on Saturdays?", options: ["The park", "The market", "The library", "The mosque"], answer: "The library" },
    { question: "What is Ali's favourite place?", options: ["The library", "The bakery", "The park", "The stadium"], answer: "The stadium" },
  ]
}