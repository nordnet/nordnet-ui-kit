import isNumber from 'lodash.isnumber';

function rem(value) {
  if (__USE_REM__) {
    const baselinePx = 10;
    const matchNumber = /(\d*\.?\d+)\s*px/g;

    if (isNumber(value)) {
      return value / baselinePx;
    }

    if (matchNumber.test(value)) {
      const matches = value.match(matchNumber);
      let result = value;

      matches.forEach(match => {
        const inRem = parseFloat(match, 10) / baselinePx;
        result = result.replace(match, `${ inRem }rem`);
      });

      return result;
    }
  }

  return value;
}

export default rem;
