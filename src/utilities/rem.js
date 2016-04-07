import isNumber from 'lodash.isnumber';

function rem(value) {
  if (__USE_REM__) {
    return convertToRem(value);
  }

  return value;
}

function convertToRem(value) {
  const baselinePx = 10;
  const matchNumber = /(\d*\.?\d+)\s*px/g;

  if (isNumber(value)) {
    return value / baselinePx;
  }

  if (matchNumber.test(value)) {
    const matches = value.match(matchNumber);

    return matches.reduce((result, match) => {
      const inRem = parseFloat(match, 10) / baselinePx;
      return result.replace(match, `${ inRem }rem`);
    }, value);
  }
}

export default rem;
