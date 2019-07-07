"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnMessage = (message) => {
    return (target, key, descriptor) => {
        Reflect.defineMetadata('onMessage', message, target, key);
    };
};
//# sourceMappingURL=command.decorator.js.map