import { wrapInMobileMediaQuery, wrapInDesktopMediaQuery } from './wrapStylesInMediaQueries';

const mixins = { media: () => 'media', maxMedia: () => 'maxMedia' };

describe('wrapStylesInMediaQueries', () => {
  test('wrapInMobileMediaQuery should wrap all top level keys ', () => {
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
    expect(actual.a).toEqual({
      maxMedia: {
        a1: 1,
      },
    });
    // Want it to only wrap top level properties.
    expect(actual.b).toEqual({
      maxMedia: {
        b1: 2,
        b2: { obj: 'asd' },
      },
    });
    expect(actual.c).toEqual({
      maxMedia: 0,
    });
  });

  test('wrapInDesktopMediaQuery should wrap all top level keys ', () => {
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
    expect(actual.a).toEqual({
      media: {
        a1: 1,
      },
    });
    // Want it to only wrap top level properties.
    expect(actual.b).toEqual({
      media: {
        b1: 2,
        b2: { obj: 'asd' },
      },
    });
    expect(actual.c).toEqual({
      media: 0,
    });
  });
});
