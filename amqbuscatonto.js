// ==UserScript==
// @name         AMQ Busca el tonto
// @namespace    https://github.com/jordibralaf
// @version      1.0
// @description  Busca una persona aleatoria para ser el tonto
// @author       Joordi25
// @match        https://animemusicquiz.com/*
// @grant        none
// @require      https://github.com/jordibralaf/AMQ-scripts/blob/master/amqbuscatonto.js
// ==/UserScript==
if (!window.setupDocumentDone) return;

let players = [];


let commandListener = new Listener("Game Chat Message", (payload) => {
    if (payload.sender === selfName && payload.message.startsWith("/tonto")) {
        if (lobby.inLobby) {
            let message = "";
            sendChatMessage("Se ha detectado que hay un tonto en esta sala");
            sendChatMessage("Procedemos a buscar el tonto de la sala");

            for (let playerId in lobby.players) {
                players.push(lobby.players[playerId]._name);
            }

            shuffle(players);


                message += "El tonto de la sala es... @" + (players[1]);

                sendChatMessage(message);
                message = "";


            players = [];
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
    return array;
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
