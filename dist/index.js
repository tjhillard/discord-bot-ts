"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const discord_js_1 = require("discord.js");
const bot_1 = require("./Bot/bot");
const client_1 = require("./Client/client");
const on_decorator_1 = require("./common/decorators/on.decorator");
const events_enum_1 = require("./common/events.enum");
const command_decorator_1 = require("./common/decorators/command.decorator");
class FoobarBot extends bot_1.Bot {
    constructor() {
        super(new client_1.Client('NTk3MTU0ODY0NzQ0NzU5MzQ2.XSD93w.Vjpv7i5zGzD3Q-Y7y_U42Ba-z6k'), { commandPrefix: '!' });
        this.client.login();
    }
    /**
     *
     * On client ready
     *
     */
    onReady() {
        console.log('Bot online! 🚀');
    }
    /**
     *
     * On !greet command
     *
     */
    greetUser(message) {
        this.client.sendMessage(message.channel, `Hi ${message.author.username}! 👋`);
    }
    /**
     *
     * On reaction added
     *
     */
    onRoleUpdate(reaction) {
        this.client.sendMessage(reaction.message.channel, `${reaction.emoji.name} reaction added to message_id: \`${reaction.message.id}\``);
    }
    /**
     *
     * On any message received
     *
     */
    handleMessageCreate(message) {
        if (message.content === 'foobar') {
            this.client.sendMessage(message.channel, '0101');
        }
    }
}
__decorate([
    on_decorator_1.On(events_enum_1.Event.CLIENT_READY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FoobarBot.prototype, "onReady", null);
__decorate([
    command_decorator_1.Command('greet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], FoobarBot.prototype, "greetUser", null);
__decorate([
    on_decorator_1.On(events_enum_1.Event.MESSAGE_REACTION_ADD),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.MessageReaction]),
    __metadata("design:returntype", void 0)
], FoobarBot.prototype, "onRoleUpdate", null);
__decorate([
    on_decorator_1.On(events_enum_1.Event.MESSAGE_CREATE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], FoobarBot.prototype, "handleMessageCreate", null);
;
new FoobarBot();
//# sourceMappingURL=index.js.map