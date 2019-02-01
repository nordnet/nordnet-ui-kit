import omit from './omit';

const obj = { a: 1, b: 2, c: 3 };

describe('omit', () => {
  test('should handle empty object', () => {
    expect(omit({}, 'a')).toEqual({});
  });

  test('should handle no key arguments', () => {
    expect(omit(obj)).toEqual(obj);
  });

  test('should be a pure function', () => {
    expect(omit(obj, 'a')).not.toBe(obj);
  });

  test('should be able to remove a single key', () => {
    expect(omit(obj, 'a')).toEqual({ b: 2, c: 3 });
  });

  test('should be able to remove multiple keys', () => {
    expect(omit(obj, 'a', 'b')).toEqual({ c: 3 });
  });

  test('should not produce errors for keys not in object', () => {
    expect(omit(obj, 'a', 'b', 'z')).toEqual({ c: 3 });
  });
});
