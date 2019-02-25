/**
 *
* Hero title - 48px - Bold Only
H1 - 32px - Bold & Regular
H2 - 24px - Bold & Regular
H3 - 20px - Bold & Regular
Primary - 16px - Bold & Regular
Secondary- 14px - Bold & Regular
Tertiary - 12px - Bold & Regular
Caption - 10px - Bold & Regular
 */

const SMALL_DEVICE = 360;
const WEIGHTS = {
  normal: 400,
  semiBold: 700,
  bold: 800,
};
const FONT_FAMILY_NORMAL = '';
const FONT_FAMILY_SEMIBOLD = '';
const FONT_FAMILY_BOLD = '';
const FONT_FAMILY_ITALIC = '';
export default function createTypography(mixins) {
  // @todo rename me
  const ifSmallDevice = (smallFontSize, largeFontSize) => ({
    fontSize: smallFontSize,
    lineHeight: 1,
    // @todo define media query
    [mixins.media(`TARGET MORE THAN SMALL_DEVICE`)]: {
      fontSize: largeFontSize,
    },
  });

  const primary = ({ weight = 'normal' } = { weight: 'normal' }) => ({
    ...ifSmallDevice(14, 16),
    fontWeight: WEIGHTS[weight] || WEIGHTS.normal,
  });
  const secondary = ({ weight = 'normal' } = { weight: 'normal' }) => ({
    ...ifSmallDevice(12, 14),
    fontWeight: WEIGHTS[weight] || WEIGHTS.normal,
  });
  const tertiary = ({ weight = 'normal' } = { weight: 'normal' }) => ({
    ...ifSmallDevice(10, 12),
    fontWeight: WEIGHTS[weight] || WEIGHTS.normal,
  });

  const caption = (
    { weight = 'normal', uppercase = false } = { weight: 'normal', uppercase: false },
  ) => ({
    ...ifSmallDevice(8, 10),
    fontWeight: WEIGHTS[weight] || WEIGHTS.normal,
    ...(uppercase ? { textTransform: 'uppercase' } : {}),
    /** letterSpacing: 1, */ // @todo CLARIFY LETTER SPACING
  });

  const hero = () => ({
    ...ifSmallDevice(46, 48),
    fontWeight: WEIGHTS.bold,
  });

  const h1 = ({ weight = 'bold' } = { weight: 'bold' }) => ({
    ...ifSmallDevice(30, 32),
    fontWeight: WEIGHTS[weight] || WEIGHTS.bold,
  });
  const h2 = ({ weight = 'bold' } = { weight: 'bold' }) => ({
    ...ifSmallDevice(22, 24),
    fontWeight: WEIGHTS[weight] || WEIGHTS.bold,
  });
  const h3 = ({ weight = 'semiBold' } = { weight: 'semiBold' }) => ({
    ...ifSmallDevice(18, 20),
    fontWeight: WEIGHTS[weight] || WEIGHTS.semiBold,
  });

  return {
    caption,
    hero,
    h1,
    h2,
    h3,
    primary,
    secondary,
    tertiary,
  };
}
