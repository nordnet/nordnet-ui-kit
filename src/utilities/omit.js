export default function omit(object = {}, ...keys) {
  const copy = Object.assign({}, object);
  keys.forEach(key => delete copy[key]);
  return copy;
}
