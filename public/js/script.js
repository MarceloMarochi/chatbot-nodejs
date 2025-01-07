const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');

const user = {message: ''};

const arrayOfPossibleMessages = [
    {message:"hola", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"buenas", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"que tal", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"como estas", response: "¡Hola! Muy bien y vos? Dime en qué puedo ayudarte..."}
];

function sendMessage(userMessage) {
    const messageElement = document.createElement('div');
    messageElement.style.textAlign = 'right';
    messageElement.style.margin = '10px';

    messageElement.innerHTML = "<span>Vos: </span>" + 
    "<span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);
}


function chatbotResponse(userMessage) {

    let chatbotmessage = "¡Hola! somos Dulce Antojo, no entiendo tu mensaje, ¿Podrías ser más específico?";

    if (userMessage == 'hola') {
        chatbotmessage = '¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?';
    } else if (userMessage.length > 5) {        
        let result = arrayOfPossibleMessages.filter(val => 
            userMessage.toLowerCase().includes(val.message.toLowerCase())
        );
        if (result.length > 0) {
            let response = result[0].response;
            chatbotmessage = response;
        }
    }

    const messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" + 
                               "<span>" + chatbotmessage + "</span>";
    chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener('click', (e) => {
    const userMessage = textbox.value;

    if (userMessage == '') {
        alert('Please type in a message');
        return;
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = '';
        sendMessage(userMessageText);
        chatbotResponse(userMessageText.toLowerCase());
    }

    
});