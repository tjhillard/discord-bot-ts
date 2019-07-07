"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Inject(toInject) {
    return (constructor) => {
        if (Array.isArray(toInject)) {
            Reflect.defineMetadata('toInject', toInject, constructor.prototype);
        }
        else {
            Reflect.defineMetadata('toInject', [toInject], constructor.prototype);
        }
    };
}
exports.Inject = Inject;
//# sourceMappingURL=inject.decorator.js.map