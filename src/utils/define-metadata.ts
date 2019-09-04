export const defineMethodMetadata = (
  target: any,
  key: string,
  eventName: string,
  ...args
) => {
  Reflect.defineMetadata(
    'on:event',
    {
      name: eventName,
      args: args,
    },
    target,
    key
  );
};
