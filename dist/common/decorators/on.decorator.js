"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const define_metadata_1 = require("../../utils/define-metadata");
exports.On = (eventName, ...args) => {
    return (target, key) => {
        define_metadata_1.defineMethodMetadata(target, key, eventName, ...args);
    };
};
//# sourceMappingURL=on.decorator.js.map