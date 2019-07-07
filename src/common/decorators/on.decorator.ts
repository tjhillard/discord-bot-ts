export const On = (eventName: string, filter?: (any) => boolean) => {
  return (target: any, key: string) => {
    Reflect.defineMetadata(
      'on:event',
      {
        name: eventName,
        filter,
      },
      target,
      key,
    );
  };
};
