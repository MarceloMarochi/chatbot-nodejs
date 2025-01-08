const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');

const user = {message: ''};

const arrayOfPossibleMessages = [
    {message:"hola", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"buenas", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"que tal", response: "¡Hola! ¿Cómo estás? Somos Dulce Antojo, ¿En qué puedo ayudarte?"},
    {message:"como estas?", response: "Muy bien! Dime en qué puedo ayudarte..."},
    {message:"como estas", response: "¡Hola! Muy bien y vos? Dime en qué puedo ayudarte..."},
    {message: "precio de los budines integrales", response: "Los budines integrales cuestan $5500 cada uno. Podes elegir de los siguientes sabores: manzana, banana o carrot cake."},
    {message: "cuestan los budines integrales", response: "Los budines integrales cuestan $5500 cada uno. Podes elegir de los siguientes sabores: manzana, banana o carrot cake."},
    {message: "budines integrales", response: "Contamos con los siguientes budines integrales: manzana, banana o carrot cake. Cuestan $5500 cada uno."},
    {message: "budin integral", response: "Contamos con los siguientes budines integrales: manzana, banana o carrot cake. Cuestan $5500 cada uno."},
    {message: "precio de los budines", response: "Los budines cuestan $5500 cada uno. Podes elegir de los siguientes sabores: Vainilla , Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja."}, 
    {message: "cuestan los budines", response: "Los budines cuestan $5500 cada uno. Podes elegir de los siguientes sabores: Vainilla , Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja."}, 
    {message: "tienen budin de vainilla?", response: "Si! El budin de vainilla cuesta $5500. También tenemos de Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja."},  
    {message: "budin de vainilla", response: "El budin de vainilla cuesta $5500. También tenemos de Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja."},  
    {message: "budin de limon", response: "El budin de limón cuesta $5500. También tenemos de Vainilla, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja."}, 
    {message: "budin de chocolate", response: "El budin de chocolate cuesta $5500. También tenemos de Vainilla, Limón, Marmolado, Vainilla con chips de chocolate o Naranja."},
    {message: "budin marmolado", response: "El budin marmolado cuesta $5500. También tenemos de Vainilla, Limón, Chocolate, Vainilla con chips de chocolate o Naranja."},
    {message: "budin de vainilla con chips de chocolate", response: "El budin de vainilla con chips de chocolate cuesta $5500. También tenemos de Vainilla, Limón, Chocolate, Marmolado o Naranja."},
    {message: "budin de naranja", response: "El budin de naranja cuesta $5500. También tenemos de Vainilla, Limón, Chocolate, Marmolado o Vainilla con chips de chocolate."},
    {message: "budines", response: "Contamos con los siguientes budines: Vainilla , Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja. Cuestan $5500 cada uno."},
    {message: "budines?", response: "Contamos con los siguientes budines: Vainilla , Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja. Cuestan $5500 cada uno."},
    {message: "budin", response: "Contamos con los siguientes budines: Vainilla , Limón, Chocolate, Marmolado, Vainilla con chips de chocolate o Naranja. Cuestan $5500 cada uno."},
    {message: "alfajores de maicena", response: "Los alfajores de maicena cuestan $6000 la docena. Y la media docena cuesta $4000."},
    {message: "alfajores", response: "Contamos con alfajores de maicena. La docena cuesta $6000 y la media docena cuesta $4000."},
    {message: "tienen alfajores", response: "Por supuesto! Contamos con alfajores de maicena. La docena cuesta $6000 y la media docena cuesta $4000."},
    {message: "alfajor", response: "Contamos con alfajores de maicena. La docena cuesta $6000 y la media docena cuesta $4000."},
    {message: "precio de los alfajores de maicena", response: "Los alfajores de maicena cuestan $6000 la docena. Y la media docena cuesta $4000."},
    {message: "cuestan los alfajores de maicena", response: "Los alfajores de maicena cuestan $6000 la docena. Y la media docena cuesta $4000."},
    {message: "precio de los alfajores", response: "Los alfajores de maicena cuestan $6000 la docena. Y la media docena cuesta $4000."},
    {message: "cuestan los alfajores", response: "Los alfajores de maicena cuestan $6000 la docena. Y la media docena cuesta $4000."},
    {message: "tienen pastafrola", response: "Por supuesto! La pastaflora entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "pastafrola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "pasta frola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "pastaflora", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "precio de la pastafrola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "cuesta la pastafrola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "precio de la pasta frola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "cuesta la pasta frola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "precio de la pastafrola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "cuesta la pastafrola", response: "La pastafrola entera cuesta $8500. Y la individual cuesta $2000"},
    {message: "precio de los bizcochuelos", response: "Los bizcochuelos cuestan $6000. Contamos con los siguientes sabores: Vainilla, marmolado y chocolate."},
    {message: "cuestan los bizcochuelos", response: "Los bizcochuelos cuestan $6000. Contamos con los siguientes sabores: Vainilla, marmolado y chocolate."}, 
    {message: "bizcochuelo de vainilla", response: "El bizcochuelo de vainilla cuesta $6000. También tenemos de marmolado y chocolate."},
    {message: "bizcochuelo marmolado", response: "El bizcochuelo marmolado cuesta $6000. También tenemos de vainilla y chocolate."},
    {message: "bizcochuelo de chocolate", response: "El bizcochuelo de chocolate cuesta $6000. También tenemos de vainilla y marmolado."}, 
    {message: "bizcochuelos", response: "Contamos con los siguientes bizcochuelos: Vainilla, marmolado y chocolate. Cuestan $6000 cada uno."},
    {message: "bizcochuelo", response: "Contamos con los siguientes bizcochuelos: Vainilla, marmolado y chocolate. Cuestan $6000 cada uno."},
    {message: "que productos ofrecen?", response: "Contamos con los siguientes productos: \n\nBUDINES $5000 (\nVainilla - \nLimón - \nChocolate - \nMarmolado - \nVainilla con chips - \nNaranja) \n\nBUDINES INTEGRALES: $5500 (\nManzana - \nBanana - \nCarrot cake) \n\nALFAJORES DE MAICENA: (\nMedia docena $4000 - \nDocena $6000) \n\nPASTAFROLA: (\nEntera $8500 - \nIndividual $2000 \n(De membrillo o batata)) \n\nBIZCOCHUELO: $6000 (\nVainilla - \nMarmolado - \nChocolate)"},
    {message: "productos", response: "Contamos con los siguientes productos: \n\nBUDINES $5000 (\nVainilla - \nLimón - \nChocolate - \nMarmolado - \nVainilla con chips - \nNaranja) \n\nBUDINES INTEGRALES: $5500 (\nManzana - \nBanana - \nCarrot cake) \n\nALFAJORES DE MAICENA: (\nMedia docena $4000 - \nDocena $6000) \n\nPASTAFROLA: (\nEntera $8500 - \nIndividual $2000 \n(De membrillo o batata)) \n\nBIZCOCHUELO: $6000 (\nVainilla - \nMarmolado - \nChocolate)"},
    {message: "precios", response: "Contamos con los siguientes productos: \n\nBUDINES $5000 (\nVainilla - \nLimón - \nChocolate - \nMarmolado - \nVainilla con chips - \nNaranja) \n\nBUDINES INTEGRALES: $5500 (\nManzana - \nBanana - \nCarrot cake) \n\nALFAJORES DE MAICENA: (\nMedia docena $4000 - \nDocena $6000) \n\nPASTAFROLA: (\nEntera $8500 - \nIndividual $2000 \n(De membrillo o batata)) \n\nBIZCOCHUELO: $6000 (\nVainilla - \nMarmolado - \nChocolate)"},
    {message: "como hago un pedido?", response: "Para realizar un pedido podes comunicarte al XXX-XXX-XXXX por WhatsApp indicando los productos que deseas y la cantidad. A la brevedad te estaremos respondiendo."},
    {message: "gracias", response: "Gracias a vos! Espero haberte ayudado. Cualquier cosa acá estoy."},
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