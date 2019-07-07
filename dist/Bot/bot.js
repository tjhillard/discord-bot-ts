"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class Bot {
    constructor(client, config) {
        this.client = client;
        this.config = config;
        this.initEvents();
    }
    initEvents() {
        utils_1.getPropertiesOfObjectPrototype(this).forEach((methodName) => {
            if (Reflect.hasMetadata('on:command', this, methodName)) {
                this.client.initCommand(Reflect.getMetadata('on:command', this, methodName), this, this[methodName]);
            }
            if (Reflect.hasMetadata('on:event', this, methodName)) {
                this.client.initEvent(Reflect.getMetadata('on:event', this, methodName), this, this[methodName]);
            }
        });
    }
    loginAllClients() {
        try {
            this.client.login();
        }
        catch (err) {
            // console.log('Logger.logError(client.name, Failed login, err);');
        }
    }
}
exports.Bot = Bot;
;
//# sourceMappingURL=bot.js.map