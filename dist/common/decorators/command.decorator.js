"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = (command, options) => {
    return (target, key) => {
        Reflect.defineMetadata('on:command', {
            value: command,
            options,
        }, target, key);
    };
};
//# sourceMappingURL=command.decorator.js.map