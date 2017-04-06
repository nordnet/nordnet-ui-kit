const constants = {
  fontFamilyOpen: '"Open Sans"',
  fontFamilyBitter: 'Bitter',
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
};

export default {
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
