const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');

const user = {message: ''};

const arrayOfPossibleMessages = [
    {message:"hola", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"buenas", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"que tal", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"como estas", response: "¡Hola! Muy bien y vos? Dime en qué puedo ayudarte..."},
    {message: "precio de los budines integrales", response: "Los budines integrales cuestan $5500 cada uno. Podes elegir de los siguientes sabores: manzana, banana o carrot cake."},
    {message: "cuestan los budines integrales", response: "Los budines integrales cuestan $5500 cada uno. Podes elegir de los siguientes sabores: manzana, banana o carrot cake."},
    {message: "budines integrales", response: "Contamos con los siguientes budines integrales: manzana, banana o carrot cake. Cuestan $5500 cada uno."},
    {message: "budin integral", response: "Contamos con los siguientes budines integrales: manzana, banana o carrot cake. Cuestan $5500 cada uno."},

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

    let chatbotmessage = "";

    if (userMessage.length > 5 || userMessage == 'hola') {        
        let result = arrayOfPossibleMessages.filter(val => 
            userMessage.toLowerCase().includes(val.message.toLowerCase())
        );
        if (result.length > 0) {
            let response = result[0].response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "Somos Dulce Antojo, no entiendo tu mensaje, ¿Podrías ser más específico?";
        }
    } else {
        chatbotmessage = "Somos Dulce Antojo, no entiendo tu mensaje, ¿Podrías ser más específico?";
    }

    const messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot: </span>" + 
                               "<span>" + chatbotmessage + "</span>";
    
    setTimeout(() => {
        messageElement.animate([{easing: 'ease-in', opacity: 0.4}, {opacity:1}], {duration:1000});
        chatContainer.appendChild(messageElement);

        /* Para que no tener que scrollear cuando hay muchsos mensajes */
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
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