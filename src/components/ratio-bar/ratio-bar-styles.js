import { createStyleSheet } from 'jss-theme-reactor';

const merge = (x, y) => Object.assign({}, x, y);

const barBackground = {
  display: 'inline-block',
  width: 'calc(100% - 2px)',
  height: '100%',
};

const directionLabel = {
  display: 'inline-block',
  fontSize: 14,
  padding: '4px 1px 0 1px',
  width: '50%',
};

export default createStyleSheet('RatioBar', (theme) => {
  const { palette } = theme;

  return {
    root: {
      display: 'block',
      margin: '0px -1px',
      fontSize: 0,
      marginBottom: 16,
    },
    label: {
      display: 'block',
      fontSize: 14,
      color: palette.color.grayDarker,
      padding: '0 1px 4px 1px',
    },
    bar: {
      display: 'inline-block',
      height: 16,
      textAlign: 'center',
    },
    'barBg--positive': merge(barBackground, {
      background: palette.variant.success,
      color: palette.variant.success,
    }),
    'barBg--neutral': merge(barBackground, {
      background: palette.color.gray,
      color: palette.color.gray,
    }),
    'barBg--negative': merge(barBackground, {
      background: palette.variant.danger,
      color: palette.variant.danger,
    }),
    danger: {
      backgroundColor: palette.variant.danger,
    },
    'directionLabel--positive': merge(directionLabel, {
      color: palette.variant.success,
      textAlign: 'right',
    }),
    'directionLabel--negative': merge(directionLabel, {
      color: palette.variant.danger,
      textAlign: 'left',
    }),
  };
});
