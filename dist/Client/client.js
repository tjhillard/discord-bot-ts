"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const events_enum_1 = require("../common/events.enum");
class Client {
    constructor(token) {
        this.token = token;
        /**
         * Public reference to Discord.js client object
         */
        this.discordJsClient = new discord_js_1.Client();
    }
    /**
     * Authenticates bot with given token
     * @returns `true` if successful, `false` if failure.
     */
    login() {
        try {
            this.discordJsClient.login(this.token);
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
    initEvent(event, moduleInstance, handler) {
        this.discordJsClient.on(event.name, (...args) => {
            handler.call(moduleInstance, ...args);
        });
    }
    initCommand(command, moduleInstance, handler) {
        if (!command.value) {
            return;
        }
        const options = command.options;
        const prefix = options && options.prefix ? options.prefix : moduleInstance.config.commandPrefix;
        const stringToMatch = `${prefix}${command.value}`;
        this.discordJsClient.on(events_enum_1.Event.MESSAGE_CREATE, (message) => {
            if (message.content === stringToMatch) {
                handler.call(moduleInstance, message);
            }
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
}
exports.Client = Client;
;
//# sourceMappingURL=client.js.map