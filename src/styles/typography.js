const SMALL_DEVICE = 360;

const WEIGHTS = {
  regular: 400,
  bold: 700,
  extrabold: 800,
};

const ifSmallDevice = (smallFontSize, largeFontSize) => ({
  fontFamily: '"Nordnet Sans Mono", "Open Sans", sans',
  fontSize: smallFontSize,
  lineHeight: 1.2,
  letterSpacing: 'normal',
  [`@media only screen and (min-width: ${SMALL_DEVICE}px)`]: {
    fontSize: largeFontSize,
  },
});

const sizes = {
  caption: ifSmallDevice(10, 10),
  hero: ifSmallDevice(46, 48),
  title1: ifSmallDevice(30, 32),
  title2: ifSmallDevice(22, 24),
  title3: ifSmallDevice(18, 20),
  primary: ifSmallDevice(14, 16),
  secondary: ifSmallDevice(12, 14),
  tertiary: ifSmallDevice(10, 12),
};

export { sizes, WEIGHTS as weights };

export default function createTypography() {
  const primary = ({ weight = 'regular' } = {}) => ({
    ...sizes.primary,
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
  });
  const coerceExtraboldToBold = weight => (weight === 'extrabold' ? WEIGHTS.bold : WEIGHTS[weight]);
  const secondary = ({ weight = 'regular' } = {}) => ({
    ...sizes.secondary,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
  });
  const tertiary = ({ weight = 'regular' } = {}) => ({
    ...sizes.tertiary,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
  });

  const caption = ({ weight = 'regular', uppercase = false } = {}) => ({
    // @todo discuss lower value with designers
    ...sizes.caption,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
    ...(uppercase ? { textTransform: 'uppercase' } : {}),
  });

  const hero = () => ({
    ...sizes.hero,
    fontWeight: WEIGHTS.extrabold,
  });

  const defaultTitleWeight = 'extrabold';
  const title1 = ({ weight = defaultTitleWeight } = {}) => ({
    ...sizes.title1,
    fontWeight: WEIGHTS[weight] || WEIGHTS[defaultTitleWeight],
  });
  const title2 = ({ weight = defaultTitleWeight } = {}) => ({
    ...sizes.title2,
    fontWeight: WEIGHTS[weight] || WEIGHTS[defaultTitleWeight],
  });
  const title3 = ({ weight = defaultTitleWeight } = {}) => ({
    ...sizes.title3,
    fontWeight: WEIGHTS[weight] || WEIGHTS[defaultTitleWeight],
  });

  const newTypography = {
    caption,
    hero,
    title1,
    title2,
    title3,
    primary,
    secondary,
    tertiary,
  };

  const proxyIsAvailable = typeof window !== 'undefined' ? 'Proxy' in window : true;
  const legacyTypographyKeys = [
    'fontFamilyOpen',
    'fontFamilyBitter',
    'fontSize',
    'fontWeightLight',
    'fontWeightRegular',
    'fontWeightMedium',
    'fontWeightSemiBold',
    'fontWeightBold',
    'fontWeightExtraBold',
  ];

  // FIXME before final release, release new version without proxy trap
  return proxyIsAvailable
    ? new Proxy(newTypography, {
        get: function get(target, prop) {
          if (legacyTypographyKeys.includes(prop)) {
            // eslint-disable-next-line no-console
            console.error(`Accessing ${prop} on old typography object`);
          }
          return target[prop];
        },
      })
    : newTypography;
}
