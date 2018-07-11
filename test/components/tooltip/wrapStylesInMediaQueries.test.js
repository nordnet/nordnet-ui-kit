import { expect } from 'chai';
import { wrapInMobileMediaQuery, wrapInDesktopMediaQuery } from '../../../src/components/tooltip/wrapStylesInMediaQueries';

const mixins = { media: () => 'media', maxMedia: () => 'maxMedia' };

describe('wrapStylesInMediaQueries', () => {
  it('wrapInMobileMediaQuery should wrap all top level keys ', () => {
    const actual = wrapInMobileMediaQuery(mixins, {
      a: {
        a1: 1,
      },
      b: {
        b1: 2,
        b2: { obj: 'asd' },
      },
      c: 0,
    });
    expect(actual.a).to.deep.equal({
      maxMedia: {
        a1: 1,
      },
    });
    // Want it to only wrap top level properties.
    expect(actual.b).to.deep.equal({
      maxMedia: {
        b1: 2,
        b2: { obj: 'asd' },
      },
    });
    expect(actual.c).to.deep.equal({
      maxMedia: 0,
    });
  });

  it('wrapInDesktopMediaQuery should wrap all top level keys ', () => {
    const actual = wrapInDesktopMediaQuery(mixins, {
      a: {
        a1: 1,
      },
      b: {
        b1: 2,
        b2: { obj: 'asd' },
      },
      c: 0,
    });
    expect(actual.a).to.deep.equal({
      media: {
        a1: 1,
      },
    });
    // Want it to only wrap top level properties.
    expect(actual.b).to.deep.equal({
      media: {
        b1: 2,
        b2: { obj: 'asd' },
      },
    });
    expect(actual.c).to.deep.equal({
      media: 0,
    });
  });
});
