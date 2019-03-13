/*

BRAND

BrandBlue #00C8F5
BrandGreen #D2F500
BrandPink #FF2B83
BrandTurquoise #00F0E1


COMPLEMENTARY BRAND COLOURS

ComplementaryBlue1 #385E9D
ComplementaryBlue2 #131F4F
ComplementaryGreen1 #3A913F
ComplementaryGreen2 #023C00
ComplementaryPink1 #AC135A
ComplementaryPink2 #78013A
ComplementaryTurquoise1 #009195
ComplementaryTurquoise2 #01424C


GRAYSCALE PALETTE

Black #000000
White #FFFFFF
Gray6 #EBEBE8
Gray5 #D7D7D2
Gray4 #BCBCB6
Gray3 #A0A09B
Gray2 #6E6E69
Gray1 #4B4B46
Gray0 #282823
Gray7 #F5F5F5


FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT

Index #FFCF00
Negative #FF1900
Positive #00D200
CTA #0046FF

*/
const colors = {
  // BRAND
  brandBlue: '#00C8F5',
  brandGreen: '#D2F500',
  brandPink: '#FF2B83',
  brandTurquoise: '#00F0E1',

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue2: '#131F4F',
  complementaryGreen1: '#3A913F',
  complementaryGreen2: '#023C00',
  complementaryPink1: '#AC135A',
  complementaryPink2: '#78013A',
  complementaryTurquoise1: '#009195',
  complementaryTurquoise2: '#01424C',

  // GRAYSCALE PALETTE

  black: '#000000',
  white: '#FFFFFF',
  gray6: '#EBEBE8',
  gray5: '#D7D7D2',
  gray4: '#BCBCB6',
  gray3: '#A0A09B',
  gray2: '#6E6E69',
  gray1: '#4B4B46',
  gray0: '#282823',
  gray7: '#F5F5F5',

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT

  index: '#FFCF00',
  negative: '#FF1900',
  positive: '#00D200',
  cta: '#0046FF',
};

const lightScheme = {
  background: colors.gray7, // gray7, black
  text: colors.gray0, // gray0, white <-- page text (!)
  label: colors.gray2, // gray2, Gray4
  buy: colors.cta, // CTA, CTA
  buttonText: colors.white, // white, white <-- buy and sell buttons text (!)
  sell: colors.negative, // Negative, Negative
  cta: colors.cta, // CTA, BrandTurquoise
  positive: colors.positive, // Positive, Positive
  negative: colors.negative, // Negative, Negative
  warning: colors.index, // Index, Index
  module: colors.white, // White, gray0
  divider: colors.gray6, // gray6, gray1
  // maybe wider divider type

  disabledButtonBackgroundPrimary: colors.gray5, // gray5, gray0
  disabledButtonBackgroundSecondary: colors.white, // white, black
  disabledButtonText: colors.white, // white, gray2

  disabledText: colors.gray5, // gray5, gray2, <-- page text (!)

  // HOVER, FOCUS???
};

const darkScheme = {
  background: colors.black, // gray7, black
  text: colors.white, // gray0, white <-- page text (!)
  label: colors.gray4, // gray2, Gray4
  buy: colors.cta, // CTA, CTA
  buttonText: colors.white, // white, white <-- buy and sell buttons text (!)
  sell: colors.negative, // Negative, Negative
  cta: colors.brandTurquoise, // CTA, BrandTurquoise
  positive: colors.positive, // Positive, Positive
  negative: colors.negative, // Negative, Negative
  warning: colors.index, // Index, Index
  module: colors.gray0, // White, gray0
  divider: colors.gray1, // gray6, gray1
  // maybe wider divider type

  disabledButtonBackgroundPrimary: colors.gray0, // gray5, gray0
  disabledButtonBackgroundSecondary: colors.black, // white, black
  disabledButtonText: colors.gray2, // white, gray2

  disabledText: colors.gray2, // gray5, gray2, <-- page text (!)
};

/*
background // gray7, black
text, // gray0, white <-- page text (!)
label,  //gray2, Gray4
buy, // CTA, CTA
buttonText, // white, white <-- buy and sell buttons text (!)
sell, // Negative, Negative
cta, // CTA, BrandTurquoise
positive, // Positive, Positive
negative, // Negative, Negative
warning, // Index, Index
module, // White, gray0
divider, // gray6, gray1
// maybe wider divider type

disabledButtonBackground, // gray5, gray0
disabledButtonText // white, gray2

disabledText, // gray5, gray2, <-- page text (!)




*/
export default {
  // gray0
  black: '#373640', // Black text on white
  // gray0
  grayDarkest: '#4C4A56', // Avatar bg
  // gray0
  grayDarker: '#6A6775', // Text on light gray bg
  // gray0
  grayDark: '#888790', // Gray text on white bg, icon

  // gray4
  gray: '#B9B6C2', // Borders on input fields
  // gray5 (if too light, go with gray4)
  grayLight: '#CFCFD5', // Dividers on gray bg
  // gray6
  grayLighter: '#E4E4E8', // Dividers on white bg
  // gray7
  grayLightest: '#F6F6F6', // Backgrounds

  // cta
  blue: '#00A9EC', // Logo, links, cta
  // complementaryBlue1
  blueDark: '#365299', // Info color
  // complementaryBlue2
  blueDarker: '#2B417A', // Used together with dark in header gradient
  // brandBlue // add comments to clarify with designers
  blueLight: '#E3F2FC', // Background color in alerts
  // positive
  green: '#26A699', // Plus performance, success
  // negative
  red: '#FE6F67', // Minus performance, error
  // negative
  redLight: '#FE6F67', // Sell

  // yellow
  yellow: '#FFD75A', // Notification Logo
  // yellow
  yellowLight: '#FFF1DD', // Notification
  white: '#FFF', // Background
};

export { lightScheme, darkScheme };
