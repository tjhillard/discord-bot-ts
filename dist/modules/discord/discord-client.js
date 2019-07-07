"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
class DiscordClient {
    constructor(token) {
        this.token = token;
    }
    login() {
        client.login(this.token);
    }
    initEvent(event, botInstance, handler) {
        if (event.name === 'message') {
            this.initOnMessageEvent(event, botInstance, handler);
        }
    }
    sendMessage(messageObject, response) {
        try {
            messageObject.channel.send(response);
            return true;
        }
        catch (err) {
            // console.error(err); // TOOD Logger Class
            return false;
        }
    }
    initOnMessageEvent(event, botInstance, handler) {
        client.on(event.name, (message) => {
            if (message.content === event.value) {
                handler.call(botInstance, message, message);
            }
        });
    }
}
exports.DiscordClient = DiscordClient;
;
//# sourceMappingURL=discord-client.js.map