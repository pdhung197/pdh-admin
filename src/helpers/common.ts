export const getObjectWithKey = (object: any, key: string): any => {
  if (!(object instanceof Object)) return null;
  if (!Object.keys(object).length) return null;
  const keys = key.split('.');

  return keys.length - 1 ? getObjectWithKey(object[keys[0]], keys.slice(1).join('.')) : object[key];
};
