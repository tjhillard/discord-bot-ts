export const getPropertiesOfObjectPrototype = (object: object) => {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(object));
};
