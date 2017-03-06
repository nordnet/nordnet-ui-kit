export default function omit(object = {}, ...keys) {
  return Object.keys(object)
    .filter(objectKey => keys.every(omitKey => objectKey !== omitKey))
    .map(key => ({ [key]: object[key] }))
    .reduce((prev, entry) => Object.assign(prev, entry), {});
}
