import { expect } from 'chai';
import omit from '../../src/utilities/omit';

const obj = { a: 1, b: 2, c: 3 };

describe('omit', () => {
  it('should handle empty object', () => {
    expect(omit({}, 'a')).to.deep.equal({});
  });

  it('should handle no key arguments', () => {
    expect(omit(obj)).to.deep.equal(obj);
  });

  it('should be a pure function', () => {
    expect(omit(obj, 'a')).to.not.equal(obj);
  });

  it('should be able to remove a single key', () => {
    expect(omit(obj, 'a')).to.deep.equal({ b: 2, c: 3 });
  });

  it('should be able to remove multiple keys', () => {
    expect(omit(obj, 'a', 'b')).to.deep.equal({ c: 3 });
  });

  it('should not produce errors for keys not in object', () => {
    expect(omit(obj, 'a', 'b', 'z')).to.deep.equal({ c: 3 });
  });
});
