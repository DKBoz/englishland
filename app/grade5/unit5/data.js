export const unitInfo = {
  title: "📺 My TV",
  subtitle: "Televizyon",
  grade: 5,
  unit: 5,
}

export const vocab = [
  { en: "cartoon", tr: "çizgi film", emoji: "🎨" },
  { en: "documentary", tr: "belgesel", emoji: "🎥" },
  { en: "news", tr: "haberler", emoji: "📰" },
  { en: "sports programme", tr: "spor programı", emoji: "⚽" },
  { en: "comedy", tr: "komedi", emoji: "😂" },
  { en: "quiz show", tr: "yarışma programı", emoji: "🏆" },
  { en: "TV series", tr: "dizi", emoji: "🎬" },
  { en: "cooking show", tr: "yemek programı", emoji: "👨‍🍳" },
  { en: "weather forecast", tr: "hava durumu", emoji: "🌤️" },
  { en: "remote control", tr: "uzaktan kumanda", emoji: "📱" },
  { en: "channel", tr: "kanal", emoji: "📡" },
  { en: "screen", tr: "ekran", emoji: "🖥️" },
  { en: "boring", tr: "sıkıcı", emoji: "😴" },
  { en: "exciting", tr: "heyecan verici", emoji: "🤩" },
  { en: "favourite", tr: "favori", emoji: "⭐" },
  { en: "turn off", tr: "kapatmak", emoji: "🔴" },
]

export const questions = [
  { sentence: "I love watching ___ on Saturday mornings.", answer: "cartoons", options: ["news", "cartoons", "documentaries", "weather forecast"] },
  { sentence: "My dad never misses the ___ — he watches football every week.", answer: "sports programme", options: ["comedy", "quiz show", "sports programme", "cooking show"] },
  { sentence: "A ___ teaches you about nature, history or science.", answer: "documentary", options: ["cartoon", "TV series", "documentary", "comedy"] },
  { sentence: "We use the ___ to change the channel.", answer: "remote control", options: ["screen", "channel", "remote control", "TV series"] },
  { sentence: "The ___ tells us if it will rain tomorrow.", answer: "weather forecast", options: ["news", "weather forecast", "quiz show", "documentary"] },
  { sentence: "That film was so ___! I couldn't stop watching.", answer: "exciting", options: ["boring", "exciting", "funny", "short"] },
  { sentence: "I don't like the ___. It's too serious for me.", answer: "news", options: ["cartoon", "comedy", "news", "cooking show"] },
  { sentence: "My favourite ___ is on every Tuesday at 8 pm.", answer: "TV series", options: ["channel", "TV series", "screen", "remote control"] },
]

export const scrambleWords = [
  { word: "cartoon", tr: "çizgi film", emoji: "🎨" },
  { word: "documentary", tr: "belgesel", emoji: "🎥" },
  { word: "channel", tr: "kanal", emoji: "📡" },
  { word: "exciting", tr: "heyecan verici", emoji: "🤩" },
  { word: "comedy", tr: "komedi", emoji: "😂" },
  { word: "forecast", tr: "tahmin", emoji: "🌤️" },
]

export const spellWords = [
  { word: "boring", tr: "sıkıcı", emoji: "😴" },
  { word: "screen", tr: "ekran", emoji: "🖥️" },
  { word: "news", tr: "haberler", emoji: "📰" },
  { word: "channel", tr: "kanal", emoji: "📡" },
  { word: "favourite", tr: "favori", emoji: "⭐" },
]

export const matchPairs = [
  { en: "cartoon", tr: "çizgi film" },
  { en: "documentary", tr: "belgesel" },
  { en: "comedy", tr: "komedi" },
  { en: "quiz show", tr: "yarışma programı" },
  { en: "boring", tr: "sıkıcı" },
  { en: "exciting", tr: "heyecan verici" },
  { en: "channel", tr: "kanal" },
  { en: "remote control", tr: "uzaktan kumanda" },
]

export const dragSentences = [
  { tr: "Cumartesi sabahları çizgi film izlemeyi severim.", words: ["I", "love", "watching", "cartoons", "on", "Saturday", "mornings", "."], answer: ["I", "love", "watching", "cartoons", "on", "Saturday", "mornings", "."] },
  { tr: "Favori dizim her Salı akşamı yayınlanıyor.", words: ["My", "favourite", "TV", "series", "is", "on", "every", "Tuesday", "evening", "."], answer: ["My", "favourite", "TV", "series", "is", "on", "every", "Tuesday", "evening", "."] },
  { tr: "Belgeseller doğa hakkında bize öğretir.", words: ["Documentaries", "teach", "us", "about", "nature", "."], answer: ["Documentaries", "teach", "us", "about", "nature", "."] },
]

export const story = {
  nodes: [
    {
      id: 0, chapter: "Bölüm 1", emoji: "📺",
      text: "It's Friday evening. Mert and his sister Ayşe fight over the remote control!\n\nMert wants to watch a football match ⚽\nAyşe wants to watch her favourite cartoon 🎨\n\nWhat should they do?",
      choices: [
        { text: "⚽ Mert watches football, Ayşe waits", next: 2, good: false, stars: 1 },
        { text: "🤝 Take turns — football first, cartoon after", next: 1, good: true, stars: 4 },
        { text: "🎨 Ayşe watches cartoon, Mert waits", next: 2, good: false, stars: 1 },
      ]
    },
    {
      id: 1, chapter: "Bölüm 2", emoji: "😊",
      text: "Great choice! They agree to take turns.\n\nDuring the break, their mum puts on a nature documentary 🌿\n\nMert says: 'Boring!'\nAyşe says: 'Wait — it's about sharks! 🦈'\n\nWhat do they do?",
      choices: [
        { text: "📺 Give it a chance — watch together", next: 3, good: true, stars: 4 },
        { text: "🔴 Turn it off immediately", next: 4, good: false, stars: 1 },
      ]
    },
    {
      id: 2, chapter: "Bölüm 2 — Dikkat!", emoji: "😤",
      text: "One person wins, the other is unhappy. The evening is ruined!\n\nTheir dad says: 'In this house, we share and take turns.'\n\nThey decide to try again.",
      choices: [
        { text: "🤝 OK, let's share the remote!", next: 1, good: true, stars: 2 },
      ]
    },
    {
      id: 3, chapter: "Bölüm 3", emoji: "🦈",
      text: "They watch the documentary together. It's actually amazing!\n\nThe presenter says: 'The shark is faster than the dolphin and more dangerous than any other sea animal!'\n\nAyşe asks: 'What's your favourite type of TV programme?'\n\nWhat does Mert say?",
      choices: [
        { text: '"I like sports programmes because they are exciting!"', next: 5, good: true, stars: 4 },
        { text: '"I don\'t know."', next: 5, good: false, stars: 1 },
      ]
    },
    {
      id: 4, chapter: "Bölüm 3 — Kaçırdın!", emoji: "😔",
      text: "They turn it off and argue again. Later their friend tells them the shark documentary was incredible!\n\nMert says: 'I wish we watched it...'\n\nLesson: Always give new things a chance!",
      choices: [
        { text: "📺 Next time I'll be more open-minded!", next: 5, good: true, stars: 2 },
      ]
    },
    {
      id: 5, chapter: "🏆 İyi Seyirler!", emoji: "🎉",
      isEnd: true,
      text: "What a great Friday evening! Mert and Ayşe shared the remote, discovered a new favourite show, and learned that trying new things is exciting!\n\n'Televizyon izlemek çok eğlenceli!' they say together. 🌟",
      choices: []
    },
  ]
}

export const readingText = {
  title: "What's On TV?",
  paragraphs: [
    {
      text: "There are many types of TV programmes. Some people like cartoons, some prefer documentaries, and others love sports programmes. Everyone has a favourite!",
      words: { types: "türler", prefer: "tercih etmek", documentary: "belgesel", favourite: "favori" }
    },
    {
      text: "Cartoons are very popular with children. They are funny and colourful. Documentaries are different — they teach us about animals, nature, history and science. They can be very exciting!",
      words: { popular: "popüler", colourful: "renkli", nature: "doğa", history: "tarih", science: "bilim" }
    },
    {
      text: "Quiz shows are fun to watch with your family. Everyone can answer the questions together! Cooking shows are also popular. You can learn new recipes and try them at home.",
      words: { quiz: "yarışma", recipes: "tarifler", together: "birlikte" }
    },
    {
      text: "How much TV do you watch? Experts say children should watch a maximum of two hours per day. It is also important to choose good programmes. Turn off the TV and read a book sometimes!",
      words: { experts: "uzmanlar", maximum: "en fazla", important: "önemli", sometimes: "bazen" }
    },
  ],
  questions: [
    { question: "What are cartoons described as?", options: ["Boring and long", "Funny and colourful", "Serious and educational", "Short and quiet"], answer: "Funny and colourful" },
    { question: "What do documentaries teach us about?", options: ["Cooking only", "Sport and games", "Animals, nature, history and science", "Cartoons and comedy"], answer: "Animals, nature, history and science" },
    { question: "How many hours of TV per day do experts recommend for children?", options: ["One hour", "Two hours", "Three hours", "Four hours"], answer: "Two hours" },
    { question: "What does the text suggest doing instead of watching TV?", options: ["Play outside", "Read a book", "Cook a meal", "Watch a documentary"], answer: "Read a book" },
  ]
}