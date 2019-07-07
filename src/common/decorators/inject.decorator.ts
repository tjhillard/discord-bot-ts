export function Inject(toInject: any | any[]): (constructor: Function) => void {
  return (constructor: Function) => {
    if (Array.isArray(toInject)) {
      Reflect.defineMetadata('toInject', toInject, constructor.prototype);
    } else {
      Reflect.defineMetadata('toInject', [toInject], constructor.prototype);
    }
  };
}