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




let commandListener = new Listener("Game Chat Message", (payload) => {
    if (payload.sender === selfName && payload.message.startsWith("/facha")) {
            let message = "";
            sendChatMessage("Buscando fachas...");


                message += "solo hay un facha y ese es @Jabro";

                sendChatMessage(message);
                message = "";
        }
});


function sendChatMessage(message) {
    gameChat.$chatInputField.val(message);
    gameChat.sendMessage();
}

commandListener.bindListener();

AMQ_addScriptData({
    name: "facha",
    author: "Joordi25",
    description: `
        <p>Para generar aleatoriamente las canciones y los segundos utiliza el comando /modo</p>
    `
})
