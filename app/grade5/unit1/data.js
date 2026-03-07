export const unitInfo = {
  title: "👋 Getting to Know You!",
  subtitle: "Tanışma ve Kendini Tanıtma",
  grade: 5,
  unit: 1,
}

export const vocab = [
  { en: "name", tr: "isim", emoji: "🏷️" },
  { en: "surname", tr: "soyisim", emoji: "📋" },
  { en: "age", tr: "yaş", emoji: "🎂" },
  { en: "birthday", tr: "doğum günü", emoji: "🎉" },
  { en: "nationality", tr: "milliyet", emoji: "🌍" },
  { en: "Turkish", tr: "Türk", emoji: "🇹🇷" },
  { en: "student", tr: "öğrenci", emoji: "🎒" },
  { en: "teacher", tr: "öğretmen", emoji: "👩‍🏫" },
  { en: "school", tr: "okul", emoji: "🏫" },
  { en: "classmate", tr: "sınıf arkadaşı", emoji: "👫" },
  { en: "friend", tr: "arkadaş", emoji: "🤝" },
  { en: "hobby", tr: "hobi", emoji: "🎨" },
  { en: "favourite", tr: "favori", emoji: "⭐" },
  { en: "subject", tr: "ders", emoji: "📚" },
  { en: "hello", tr: "merhaba", emoji: "👋" },
  { en: "goodbye", tr: "hoşça kal", emoji: "👋" },
]

export const questions = [
  { sentence: "My name is Ali and I am a student.", answer: "student", options: ["teacher", "student", "friend", "classmate"] },
  { sentence: "What is your favourite subject at school?", answer: "favourite", options: ["favourite", "hobby", "birthday", "nationality"] },
  { sentence: "My birthday is on the 5th of March.", answer: "birthday", options: ["age", "name", "birthday", "surname"] },
  { sentence: "She is Turkish. Her nationality is Turkish.", answer: "nationality", options: ["hobby", "nationality", "subject", "surname"] },
  { sentence: "My hobby is painting. I love art!", answer: "hobby", options: ["hobby", "subject", "friend", "age"] },
  { sentence: "He is my classmate. We sit together.", answer: "classmate", options: ["teacher", "student", "classmate", "friend"] },
  { sentence: "Hello! My name is Ayşe. Nice to meet you!", answer: "Hello", options: ["Goodbye", "Hello", "Sorry", "Thanks"] },
  { sentence: "My favourite subject is Maths.", answer: "subject", options: ["hobby", "name", "subject", "school"] },
]

export const scrambleWords = [
  { word: "hello", tr: "merhaba", emoji: "👋" },
  { word: "friend", tr: "arkadaş", emoji: "🤝" },
  { word: "school", tr: "okul", emoji: "🏫" },
  { word: "birthday", tr: "doğum günü", emoji: "🎉" },
  { word: "hobby", tr: "hobi", emoji: "🎨" },
  { word: "teacher", tr: "öğretmen", emoji: "👩‍🏫" },
]

export const spellWords = [
  { word: "name", tr: "isim", emoji: "🏷️" },
  { word: "school", tr: "okul", emoji: "🏫" },
  { word: "friend", tr: "arkadaş", emoji: "🤝" },
  { word: "hobby", tr: "hobi", emoji: "🎨" },
  { word: "student", tr: "öğrenci", emoji: "🎒" },
]

export const dragSentences = [
  { tr: "Benim adım Ali.", words: ["My", "name", "is", "Ali", "."], answer: ["My", "name", "is", "Ali", "."] },
  { tr: "Ben 11 yaşındayım.", words: ["I", "am", "eleven", "years", "old", "."], answer: ["I", "am", "eleven", "years", "old", "."] },
  { tr: "Favori dersim İngilizcedir.", words: ["My", "favourite", "subject", "is", "English", "."], answer: ["My", "favourite", "subject", "is", "English", "."] },
]

export const matchPairs = [
  { en: "hello", tr: "merhaba" },
  { en: "goodbye", tr: "hoşça kal" },
  { en: "friend", tr: "arkadaş" },
  { en: "school", tr: "okul" },
  { en: "teacher", tr: "öğretmen" },
  { en: "student", tr: "öğrenci" },
  { en: "hobby", tr: "hobi" },
  { en: "birthday", tr: "doğum günü" },
]

export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "👋",
      text: "It's the first day of school! A new student walks into the classroom. The teacher says:\n\n'Class, we have a new student today. Please introduce yourself!'\n\nThe new student looks nervous. What do they say?",
      choices: [
        { text: '"Hello! My name is Zeynep. I am 11 years old."', next: 1, good: true, stars: 3 },
        { text: '"..."  (says nothing)', next: 2, good: false, stars: 0 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2 — Harika!", emoji: "😊",
      text: "Great introduction! Everyone claps. A classmate named Ali wants to be friends.\n\nAli asks: 'What is your favourite subject?'\n\nWhat does Zeynep say?",
      choices: [
        { text: '"My favourite subject is English!"', next: 3, good: true, stars: 4 },
        { text: '"I don\'t know."', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 2 — Dikkat!", emoji: "😬",
      text: "The class is quiet and awkward. The teacher helps:\n\n'Just say: Hello, my name is...'\n\nZeynep tries again. What does she say?",
      choices: [
        { text: '"Hello! My name is Zeynep!"', next: 3, good: true, stars: 2 },
        { text: '"My name... Zeynep..."', next: 3, good: false, stars: 1 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3 — Lunch Time!", emoji: "🍽️",
      text: "At lunch, Ali and Zeynep sit together. Ali asks:\n\n'When is your birthday?'\n\nHow does Zeynep answer correctly?",
      choices: [
        { text: '"My birthday is on the 3rd of May."', next: 4, good: true, stars: 4 },
        { text: '"Birthday... May... 3?"', next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 4, chapter: "🏆 Harika Son!", emoji: "🎉",
      isEnd: true,
      text: "Zeynep had an amazing first day! She made a new friend, introduced herself confidently, and practised her English!\n\n'İngilizce konuşmak çok eğlenceli!' she said happily. 🌟\n\nNow you know how to introduce yourself too!",
      choices: []
    },
  ]
}

export const readingText = {
  title: "A New Student!",
  paragraphs: [
    {
      text: "Zeynep is a new student at Atatürk Middle School. She is eleven years old and her birthday is on the 3rd of May. She is Turkish and she loves her school.",
      words: { student: "öğrenci", birthday: "doğum günü", Turkish: "Türk", school: "okul", loves: "seviyor" }
    },
    {
      text: "Her favourite subject is English. She also likes Science and Art. Her hobby is painting. She paints every day after school.",
      words: { favourite: "favori", subject: "ders", hobby: "hobi", painting: "resim yapma", paints: "resim yapar" }
    },
    {
      text: "On her first day, a classmate named Ali says hello. 'Hello! My name is Ali. What is your name?' Zeynep smiles and says 'My name is Zeynep. Nice to meet you!'",
      words: { classmate: "sınıf arkadaşı", hello: "merhaba", name: "isim", smiles: "gülümser" }
    },
    {
      text: "At the end of the day, Zeynep is happy. She has a new friend. 'Goodbye Ali!' she says. 'See you tomorrow!' says Ali.",
      words: { happy: "mutlu", friend: "arkadaş", goodbye: "hoşça kal", tomorrow: "yarın" }
    },
  ],
  questions: [
    { question: "How old is Zeynep?", options: ["Ten", "Eleven", "Twelve", "Thirteen"], answer: "Eleven" },
    { question: "What is Zeynep's favourite subject?", options: ["Maths", "Science", "English", "Art"], answer: "English" },
    { question: "What is Zeynep's hobby?", options: ["Swimming", "Painting", "Reading", "Cooking"], answer: "Painting" },
    { question: "What is the new classmate's name?", options: ["Ayşe", "Mehmet", "Ali", "Can"], answer: "Ali" },
  ]
}