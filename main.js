const responses = {
    "hello": "Hello! Kumusta?",
    "how are you": "Mabuti naman ako. Ikaw?",
    "goodbye": "Paalam! Hanggang sa muli.",
    "thank you": "Walang anuman! May Ibang bagay pang gusto malaman?",
    // Add more responses as needed
    'kain': 'kumain kana',
    'kamusta': 'all goods',
    'love': 'iloveyou',
    'mahal': 'mahal kita',
    'busy': 'busy ako',
    'gawa': 'busy ako',
    'miss': 'imissyou',
    'ano': 'ano sa tingin mo',
    'bakit': 'ewan',
    'bahala': 'okey',
    'haha': 'haha',
    'morning': 'Goodmorning',
    'goodnight': 'Goodnight',
    'salamat': 'welcome',
    'sorry': 'dont worry',
    'sino': 'malay ko',
    'kailan': 'diko alam',
    'punta': 'ingats',
    'gawin': 'tyt',
    'hi': 'hello',
    'monthsary': '06-27-23',
    'punta': 'sige',
    'gets': 'yup',
    'memories': 'madami diko na tanda ang iba basta alam mo na yun haha',
    'saan': 'ewan',
    'kelan': 'wait iisipin ko',
    '?': 'yup',
    'tanda': 'ano sa tingin mo',
    'ba': 'diko alam',
    'wala': 'ahh',
    'sabi': 'ahh oo diko alam',
    'ewan': 'haha',
    'ulam': 'itlog',
    'kain': 'eatwell',
    'may': 'sige lang',
    'meron': 'ahh'
};

const randomResponses = [
    "wait",
    "Tell me more.",
    "diko gets.",
    "ahh hehe",
    "omsim",
    "Hmmm.",
    "Okay.",
    "Got it.",
    "Understood.",
    "Noted."
];

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');
    userInput.value = '';

    setTimeout(() => {
        generateResponse(message.toLowerCase().trim());
    }, 500);
}

function generateResponse(message) {
    let response = "huh?";

    for (const key in responses) {
        if (message.includes(key)) {
            response = responses[key];
            break;
        }
    }

    if (response === "huh?") {
        response = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }

    appendMessage(response, 'bot');
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('chat-message', sender === 'bot' ? 'bot' : 'user');
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}
