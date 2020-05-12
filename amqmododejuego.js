// ==UserScript==
// @name         AMQ Modo de juego
// @namespace    https://github.com/jordibralaf/AMQ-scripts
// @version      0.1
// @description  try to take over the world!
// @author       Joordi25
// @match        https://animemusicquiz.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/jordibralaf/AMQ-scripts/master/amqmododejuego.js
// ==/UserScript==

if (!window.setupDocumentDone) return;

let modo = [];
modo = {openings, endings, inserts};


let commandListener = new Listener("Game Chat Message", (payload) => {
    if (payload.sender === selfName && payload.message.startsWith("/modo")) {
        if (lobby.inLobby) {
            let message = "";
            sendChatMessage("Se está decidiendo el modo de juego");

            shuffle(modo);


                message += "Se jugarán " + (modo[1]);

                sendChatMessage(message);
                message = "";


            modo = [];
        }
        else {
            gameChat.systemMessage("Tienes que estar en la lobby para ejecutar este comando");
        }
    }
});


function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
}

function sendChatMessage(message) {
    gameChat.$chatInputField.val(message);
    gameChat.sendMessage();
}

commandListener.bindListener();

AMQ_addScriptData({
    name: "Buscando al tonto",
    author: "Joordi25",
    description: `
        <p>Este script sirve para ver quien es el tonto de la sala</p>
        <p>Escribe /tonto y elige alguien aleatorio</p>
    `
})
