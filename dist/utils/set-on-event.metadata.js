"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOnEventMetadata = (target, key, eventName, ...args) => {
    Reflect.defineMetadata('on:event', {
        name: eventName,
        args: args,
    }, target, key);
};
//# sourceMappingURL=set-on-event.metadata.js.map