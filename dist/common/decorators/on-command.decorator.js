"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCommand = (command, options) => {
    return (target, key) => {
        Reflect.defineMetadata('on:command', {
            value: command,
            options,
        }, target, key);
    };
};
//# sourceMappingURL=on-command.decorator.js.map