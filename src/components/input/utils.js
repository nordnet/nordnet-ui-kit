export const isUndefined = value => value === undefined;

export const hasValue = value => {
  const type = typeof value;
  return (
    type === 'boolean' ||
    type === 'number' ||
    (value && (type === 'object' || type === 'string') && Object.keys(value).length)
  );
};
