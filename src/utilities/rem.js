function convertToRem(value) {
  const baselinePx = 10;
  const matchNumber = /(\d*\.?\d+)\s*px/g;

  if (Number.isFinite(value)) {
    return value / baselinePx;
  }

  if (matchNumber.test(value)) {
    const matches = value.match(matchNumber);

    return matches.reduce((result, match) => {
      const inRem = parseFloat(match, 10) / baselinePx;
      return result.replace(match, `${inRem}rem`);
    }, value);
  }

  return value;
}

function rem(value) {
  if (process.env.__USE_REM__) { // eslint-disable-line no-underscore-dangle
    return convertToRem(value);
  }

  return value;
}

export default rem;
