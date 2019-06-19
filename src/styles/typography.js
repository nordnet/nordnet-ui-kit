const SMALL_DEVICE = 360;

const WEIGHTS = {
  regular: 400,
  bold: 700,
  extrabold: 800,
};

const FONT_FAMILY = '"Nordnet Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const commonFontStyles = {
  fontFamily: FONT_FAMILY,
  letterSpacing: 'normal'
}

export default function createTypography() {
  const ifSmallDevice = (smallFontSize, largeFontSize) => ({
    ...commonFontStyles,
    fontSize: smallFontSize,
    [`@media only screen and (min-width: ${SMALL_DEVICE}px)`]: {
      fontSize: largeFontSize,
    },
  });
  const primary = ({ weight = 'regular' } = {}) => ({
    ...commonFontStyles,
    fontSize: 16,
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
  });
  const coerceExtraboldToBold = weight => (weight === 'extrabold' ? WEIGHTS.bold : WEIGHTS[weight]);
  const secondary = ({ weight = 'regular' } = {}) => ({
    ...commonFontStyles,
    fontSize: 14,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
  });
  const tertiary = ({ weight = 'regular' } = {}) => ({
    ...commonFontStyles,
    fontSize: 12,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
  });

  const caption = ({ weight = 'regular', uppercase = false } = {}) => ({
    // @todo discuss lower value with designers
    ...commonFontStyles,
    fontSize: 10,
    fontWeight: coerceExtraboldToBold(weight) || WEIGHTS.regular,
    ...(uppercase ? { textTransform: 'uppercase' } : {}),
  });

  const hero = () => ({
    ...ifSmallDevice(46, 48),
    fontWeight: WEIGHTS.extrabold,
  });

  const defaultTitleWeight = 'extrabold';
  const title1 = ({ weight = defaultTitleWeight } = {}) => ({
    ...ifSmallDevice(24, 28),
    fontWeight: WEIGHTS[weight] || WEIGHTS[defaultTitleWeight],
  });
  const title2 = ({ weight = defaultTitleWeight } = {}) => ({
    ...ifSmallDevice(20, 24),
    fontWeight: WEIGHTS[weight] || WEIGHTS[defaultTitleWeight],
  });
  const title3 = ({ weight = defaultTitleWeight } = {}) => ({
    ...ifSmallDevice(18, 20),
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
