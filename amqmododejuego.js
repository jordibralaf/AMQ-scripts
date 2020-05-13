// ==UserScript==
// @name         Modo aleatorio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Joordi25/TheSpecialConan
// @match        https://animemusicquiz.com/
// @grant        none
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqScriptInfo.js
// @require      https://raw.githubusercontent.com/TheJoseph98/AMQ-Scripts/master/common/amqWindows.js
// ==/UserScript==
if (!window.setupDocumentDone) return;

let modo = ["openings", "endings", "inserts", "openings y endings", "openings e inserts", "endings e inserts", "openings, endings e inserts"];

let commandListener = new Listener("Game Chat Message", (payload) => {
    if (payload.sender === selfName && payload.message.startsWith("/modo")) {
        if (lobby.inLobby) {
            let message = "";
            sendChatMessage("Se está decidiendo el modo de juego...");


            aleatorio(modo);
            let sec = segundosRandom(5,20);
            let modo_aleatorio = aleatorio(modo);

                message += "se jugarán " + (modo_aleatorio) + " con " + sec + " segundos.";

                sendChatMessage(message);
                message = "";

        }
        else {
            gameChat.systemMessage("Tienes que estar en la lobby para ejecutar este comando");
        }
    }
});


function aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
    }


function segundosRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

}

function sendChatMessage(message) {
    gameChat.$chatInputField.val(message);
    gameChat.sendMessage();
}

commandListener.bindListener();

AMQ_addScriptData({
    name: "Modo aleatorio",
    author: "Joordi25 & TheSpecialConan",
    description: `
        <p>Poniendo el comando /modo se elegirá aleatoriamente un modo de jueg y los segundos con los que jugar.</p>
    `
});
