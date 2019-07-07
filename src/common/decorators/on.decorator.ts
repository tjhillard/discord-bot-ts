import { defineMethodMetadata } from "../../utils/define-metadata";

export const On = (eventName: string, ...args: any[]) => {
  return (target: any, key: string) => {
    defineMethodMetadata(target, key, eventName, ...args);
  };
};
