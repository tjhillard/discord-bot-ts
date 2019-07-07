"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineMethodMetadata = (target, key, eventName, ...args) => {
    Reflect.defineMetadata('on:event', {
        name: eventName,
        args: args,
    }, target, key);
};
//# sourceMappingURL=define-metadata.js.map