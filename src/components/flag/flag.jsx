import React, { PropTypes } from 'react';
import flags from './flags';
import currencyFlags from './currencyFlags';

function Flag({
  className,
  style,
  countryCode,
  secondaryCountryCode,
  size,
  ...rest
}) {
  let SvgFlag;
  if (secondaryCountryCode) {
    const currencyKey = `${countryCode.toLowerCase()}-${secondaryCountryCode.toLowerCase()}`;
    if (!currencyFlags[currencyKey]) {
      // This combination does not exist
      return null;
    }
    SvgFlag = currencyFlags[currencyKey];
  } else {
    SvgFlag = flags[countryCode.toLowerCase()];
  }

  const flagStyle = Object.assign({
    display: 'inline-block',
    width: size,
  }, style);

  return (
    <SvgFlag className="flag" style={flagStyle} {...rest} />
  );
}

Flag.defaultProps = {
  size: 32,
};

const unNest = (acc, i) => acc.concat(i);
const dupInUpperCase = arr => arr.map(code => [code, code.toUpperCase()]).reduce(unNest, []);

const countryCodes = dupInUpperCase(['ca', 'de', 'fr', 'ru', 'gb', 'dk', 'fi', 'no', 'se', 'us', 'jp', 'cn', 'eu']);
const currencyCountryCodes = dupInUpperCase(['dk', 'no', 'se', 'us', 'eu']);

Flag.propTypes = {
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  secondaryCountryCode: PropTypes.oneOf(currencyCountryCodes),
  /** Unitless pixel value */
  size: PropTypes.number,
  style: PropTypes.object,
};

export default Flag;
