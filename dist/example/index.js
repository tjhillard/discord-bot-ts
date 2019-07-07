"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_module_1 = require("./main.module");
const app_1 = require("../core/app/app");
const app = new app_1.default({
    modules: [
        main_module_1.default,
    ],
    onStart() {
        console.log('Application running! 🎉');
    },
});
app.start();
//# sourceMappingURL=index.js.map