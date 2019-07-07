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
require("dotenv/config");
const discord_js_1 = require("discord.js");
const module_1 = require("../core/module/module");
const client_1 = require("../core/client/client");
const on_decorator_1 = require("../common/decorators/on.decorator");
const events_enum_1 = require("../common/events.enum");
const command_decorator_1 = require("../common/decorators/command.decorator");
const inject_decorator_1 = require("../common/decorators/inject.decorator");
let MainModule = class MainModule extends module_1.Module {
    constructor(weatherService) {
        super(new client_1.Client(process.env.DISCORD_TOKEN), { commandPrefix: '!' });
        this.weatherService = weatherService;
        this.client.login();
        console.log(this.weatherService);
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
};
__decorate([
    on_decorator_1.On(events_enum_1.Event.CLIENT_READY),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainModule.prototype, "onReady", null);
__decorate([
    command_decorator_1.Command('greet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], MainModule.prototype, "greetUser", null);
__decorate([
    on_decorator_1.On(events_enum_1.Event.MESSAGE_REACTION_ADD),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.MessageReaction]),
    __metadata("design:returntype", void 0)
], MainModule.prototype, "onRoleUpdate", null);
__decorate([
    on_decorator_1.On(events_enum_1.Event.MESSAGE_CREATE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], MainModule.prototype, "handleMessageCreate", null);
MainModule = __decorate([
    inject_decorator_1.Inject('foo'),
    __metadata("design:paramtypes", [Object])
], MainModule);
exports.default = MainModule;
;
//# sourceMappingURL=main.module.js.map