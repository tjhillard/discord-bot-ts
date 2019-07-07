"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_on_event_metadata_1 = require("../../utils/set-on-event.metadata");
exports.OnMessage = (eventName, options) => {
    return (target, key) => {
        set_on_event_metadata_1.setOnEventMetadata(target, key, eventName, options);
    };
};
//# sourceMappingURL=on-message.decorator.js.map