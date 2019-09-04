export type CommandOptions = {
  prefix?: string;
};

export const Command = (command: string, options?: CommandOptions) => {
  return (target: any, key: string) => {
    Reflect.defineMetadata(
      'on:command',
      {
        value: command,
        options,
      },
      target,
      key
    );
  };
};
