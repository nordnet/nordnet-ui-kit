const SMALL_DEVICE = 360;

const WEIGHTS = {
  regular: 400,
  semiBold: 700,
  bold: 800,
};

export default function createTypography() {
  const ifSmallDevice = (smallFontSize, largeFontSize) => ({
    fontFamily: '"Open Sans", sans',
    fontSize: smallFontSize,
    lineHeight: 1.2, // @todo did we settle on this lineHeight?
    // @todo refactor this to use mixins
    [`@media only screen and (min-width: ${SMALL_DEVICE}px)`]: {
      fontSize: largeFontSize,
    },
  });
  const primary = ({ weight = 'regular' } = {}) => ({
    ...ifSmallDevice(14, 16),
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
  });
  const secondary = ({ weight = 'regular' } = {}) => ({
    ...ifSmallDevice(12, 14),
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
  });
  const tertiary = ({ weight = 'regular' } = {}) => ({
    ...ifSmallDevice(10, 12),
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
  });

  const caption = ({ weight = 'regular', uppercase = false } = {}) => ({
    // @todo discuss lower value with designers
    ...ifSmallDevice(8, 10),
    fontWeight: WEIGHTS[weight] || WEIGHTS.regular,
    ...(uppercase ? { textTransform: 'uppercase' } : {}),
  });

  const hero = () => ({
    ...ifSmallDevice(46, 48),
    fontWeight: WEIGHTS.bold,
  });

  const h1 = ({ weight = 'bold' } = {}) => ({
    ...ifSmallDevice(30, 32),
    fontWeight: WEIGHTS[weight] || WEIGHTS.bold,
  });
  const h2 = ({ weight = 'bold' } = {}) => ({
    ...ifSmallDevice(22, 24),
    fontWeight: WEIGHTS[weight] || WEIGHTS.bold,
  });
  const h3 = ({ weight = 'semiBold' } = {}) => ({
    ...ifSmallDevice(18, 20),
    fontWeight: WEIGHTS[weight] || WEIGHTS.semiBold,
  });

  const newTypography = {
    caption,
    hero,
    h1,
    h2,
    h3,
    primary,
    secondary,
    tertiary,
  };

  const proxyIsAvailable = window ? 'Proxy' in window : true;
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
