"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor(config) {
        this.config = config;
    }
    start() {
        for (const module of this.config.modules) {
            try {
                const toInject = Reflect.getMetadata('toInject', module.prototype) || [];
                new module(...toInject);
            }
            catch (err) {
                console.error(err);
            }
        }
        this.config.onStart(this);
    }
}
exports.default = App;
;
//# sourceMappingURL=app.js.map