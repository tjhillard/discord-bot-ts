"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOnEventMetadata = (target, key, eventName, value) => {
    Reflect.defineMetadata('on:event', {
        name: eventName,
        value,
    }, target, key);
};
//# sourceMappingURL=set-onevent.metadata.js.map