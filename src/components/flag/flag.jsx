import PropTypes from 'prop-types';
import React from 'react';
import flags from './flags';
import currencyFlags from './flags/currencies';

function Flag({
  className,
  style,
  countryCode,
  secondaryCountryCode,
  size,
  round,
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
    marginLeft: round ? -size * 0.25 * 0.5 : null,
  }, style);

  const flagContainerStyle = {
    display: 'inline-block',
    position: 'relative',
    width: size * 0.75,
    height: size * 0.75,
    overflow: 'hidden',
    borderRadius: '50%',
  };

  const flag = <SvgFlag className="flag" style={flagStyle} {...rest} />;

  if (round) {
    return <span style={flagContainerStyle}>{flag}</span>;
  }

  return flag;
}

Flag.defaultProps = {
  size: 32,
  round: false,
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
  round: PropTypes.bool,
};

export default Flag;
