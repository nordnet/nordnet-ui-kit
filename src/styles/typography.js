const defaultConstants = {
  fontFamilyOpen: '"Open Sans", sans-serif',
  fontFamilyBitter: 'Bitter, serif',
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
};

export default function createTypography(constants = defaultConstants) {
  return {
    ...constants,
    primary: {
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamilyOpen,
    },
    secondary: {
      fontWeight: constants.fontWeightRegular,
      fontFamily: constants.fontFamilyBitter,
    },
  };
}
