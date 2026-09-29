const ChatbotResponses = {
  // Greetings
  'hi': 'Hello! How can I help you?',
  'hey': 'Hey there! How can I help?',
  'good morning': 'Good morning! Hope you have a great day!',
  'good afternoon': 'Good afternoon! How can I help you?',
  'good evening': 'Good evening! What can I do for you?',
  'good night': 'Good night! Sleep well!',
  'whats up': 'Not much! Just here to help. What do you need?',
  'howdy': 'Howdy! What can I do for you?',
  'greetings': 'Greetings! How may I assist you?',
  'sup': 'Hey! What do you need?',
  'yo': 'Yo! What can I help you with?',

  // Farewells
  'bye': 'Goodbye! Have a great day!',
  'goodbye': 'See you later! Take care!',
  'see you later': 'See you! Come back anytime!',
  'take care': 'You too! Goodbye!',
  'talk to you later': 'Sure! Talk to you later!',
  'catch you later': 'Catch you later!',
  'im leaving': 'Okay, goodbye! Hope I was helpful!',
  'farewell': 'Farewell! It was great chatting with you!',

  // About the bot
  'what is your name': 'My name is Chatbot! Nice to meet you.',
  'who are you': 'I am Chatbot, your virtual assistant!',
  'what can you do': 'I can answer questions, flip a coin, roll a dice, tell you the date, and much more!',
  'are you a robot': 'Yes, I am a bot! But I try my best to be helpful.',
  'are you human': 'Nope, I am a chatbot! But I am here to help.',
  'are you real': 'I am as real as code can be!',
  'who made you': 'I was built using the SuperSimpleDev chatbot library!',
  'how old are you': 'I don\'t age like humans do — I\'ve existed since I was coded!',
  'whats your favorite color': 'I\'d say blue — like a clear sky!',
  'do you have feelings': 'I don\'t have feelings, but I\'m always happy to help!',

  // Small talk
  'tell me a joke': 'Why do programmers prefer dark mode? Because light attracts bugs!',
  'another joke': 'Why did the developer go broke? Because he used up all his cache!',
  'make me laugh': 'I told my computer I needed a break. Now it won\'t stop sending me Kit-Kat ads!',
  'say something funny': 'A SQL query walks into a bar, walks up to two tables and asks... "Can I join you?"',
  'tell me something interesting': 'Did you know? Honey never spoils — archaeologists found 3000-year-old honey in Egyptian tombs!',
  'tell me a fact': 'A group of flamingos is called a flamboyance. Pretty fitting!',
  'random fact': 'Octopuses have three hearts and blue blood!',
  'surprise me': 'Bananas are technically berries, but strawberries are not!',
  'tell me something': 'The Eiffel Tower can grow up to 6 inches taller in summer due to heat expansion!',
  'motivate me': 'You\'ve got this! Every expert was once a beginner. Keep going!',

  // Compliments & feelings
  'you are great': 'Thank you so much! You\'re pretty great yourself!',
  'you are amazing': 'Aw, that means a lot! You\'re amazing too!',
  'you are helpful': 'I\'m glad I could help! That\'s what I\'m here for.',
  'you are awesome': 'Thanks! You\'re awesome for saying that!',
  'i love you': 'That\'s sweet! I\'m just a bot, but I appreciate the kind words!',
  'i hate you': 'I\'m sorry to hear that. I\'ll try to do better!',
  'you are smart': 'Thank you! I do my best with what I know.',
  'you are funny': 'Ha, thanks! I\'ve been working on my comedy.',
  'good job': 'Thank you! I appreciate the feedback!',
  'well done': 'Thanks! Let me know if there\'s anything else I can help with.',

  // User feelings
  'i am happy': 'That\'s wonderful to hear! What\'s making you happy?',
  'i am sad': 'I\'m sorry to hear that. I hope things get better soon!',
  'i am bored': 'Let\'s fix that! Want a joke, a fun fact, or maybe a coin flip?',
  'i am tired': 'Make sure to get some rest! You deserve it.',
  'i am angry': 'I\'m sorry you\'re feeling that way. Take a deep breath — things will get better.',
  'i am excited': 'That\'s awesome! What are you excited about?',
  'i am hungry': 'You should grab something to eat! You can\'t focus on an empty stomach.',
  'i am bored what should i do': 'Try learning something new, going for a walk, or building a small project!',
  'i need help': 'Of course! What do you need help with?',
  'i am stressed': 'Take a deep breath. Break things into small steps — you\'ve got this!',

  // Trivia / knowledge
  'how many planets are there': 'There are 8 planets in our solar system.',
  'what is the speed of light': 'The speed of light is approximately 299,792 km/s.',
  'what is the capital of france': 'The capital of France is Paris!',
  'what is the capital of japan': 'The capital of Japan is Tokyo!',
  'what is the largest ocean': 'The Pacific Ocean is the largest ocean on Earth.',
  'what is the tallest mountain': 'Mount Everest is the tallest mountain at about 8,849 meters.',
  'what is the smallest country': 'Vatican City is the smallest country in the world.',
  'how many continents are there': 'There are 7 continents on Earth.',
  'what language is most spoken': 'Mandarin Chinese has the most native speakers, but English is the most widely spoken overall.',
  'what is the longest river': 'The Nile is traditionally considered the longest river in the world.',

  // Tech
  'what is javascript': 'JavaScript is a programming language used to make websites interactive.',
  'what is react': 'React is a JavaScript library for building user interfaces, made by Meta.',
  'what is html': 'HTML stands for HyperText Markup Language — it\'s the structure of web pages.',
  'what is css': 'CSS stands for Cascading Style Sheets — it styles the look of web pages.',
  'what is an api': 'An API (Application Programming Interface) lets different software systems communicate with each other.',
  'what is a bug': 'A bug is an error or unexpected behavior in a program. We all deal with them!',
  'what is debugging': 'Debugging is the process of finding and fixing bugs in your code.',
  'what is a variable': 'A variable is a container for storing data values in programming.',
  'what is a function': 'A function is a reusable block of code that performs a specific task.',
  'what is git': 'Git is a version control system that tracks changes in your code over time.',

  // Fun & games
  'pick a number': function() {
    return `I pick ${Math.floor(Math.random() * 100) + 1}!`;
  },
  'random number': function() {
    return `Here's a random number: ${Math.floor(Math.random() * 1000)}`;
  },
  'pick a color': function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink', 'teal'];
    return `I pick ${colors[Math.floor(Math.random() * colors.length)]}!`;
  },
  'yes or no': function() {
    return Math.random() > 0.5 ? 'Yes!' : 'No!';
  },
  'magic 8 ball': function() {
    const answers = ['Definitely yes!', 'Absolutely not.', 'Ask again later.', 'Signs point to yes!', 'Don\'t count on it.', 'Without a doubt!'];
    return answers[Math.floor(Math.random() * answers.length)];
  },
  'rock paper scissors': function() {
    const choices = ['rock', 'paper', 'scissors'];
    return `I choose ${choices[Math.floor(Math.random() * choices.length)]}!`;
  },

  // Practical
  'what time is it': function() {
    return `The current time is ${new Date().toLocaleTimeString()}.`;
  },
  'what year is it': function() {
    return `It's ${new Date().getFullYear()}!`;
  },
  'what day is it': function() {
    return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}!`;
  },
  'how many days in a year': 'A regular year has 365 days. A leap year has 366!',
  'whats the weather like': 'I\'m not connected to weather data, but you can check Google or a weather app!',
  'tell me a quote': 'Here\'s one: "The only way to do great work is to love what you do." — Steve Jobs',
  'give me advice': 'Here\'s some advice: take breaks, stay hydrated, and don\'t forget to commit your code!',
  'help me focus': 'Try the Pomodoro technique — work for 25 minutes, then take a 5 minute break!',
  'how do i learn coding': 'Start with HTML, CSS, and JavaScript. Build small projects and be consistent!',
  'recommend a language': 'If you\'re just starting out, JavaScript is a great first language — it runs in the browser!',
};

export default ChatbotResponses;