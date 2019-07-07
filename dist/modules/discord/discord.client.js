"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class DiscordClient {
    constructor(token) {
        this.token = token;
        this.client = new discord_js_1.Client();
    }
    login() {
        this.client.login(this.token);
    }
    initEvent(event, botInstance, handler) {
        if (event.name === 'message' && event.args.length) {
            this.initOnMessageEvent(event, botInstance, handler);
            return;
        }
        this.client.on(event.name, (...args) => {
            handler.call(botInstance, ...args);
        });
    }
    sendMessage(channel, response) {
        try {
            channel.send(response);
            return true;
        }
        catch (err) {
            // console.error(err); // TOOD Logger Class
            return false;
        }
    }
    initOnMessageEvent(event, botInstance, handler) {
        this.client.on(event.name, (message) => {
            if (message.content === event.args[0]) {
                handler.call(botInstance, message);
            }
        });
    }
}
exports.DiscordClient = DiscordClient;
;
//# sourceMappingURL=discord.client.js.map