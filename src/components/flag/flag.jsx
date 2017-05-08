import PropTypes from 'prop-types';
import React from 'react';
import flags from './flags';
import CurrencyFlag from './flags/currencies';

function Flag({
  className,
  style,
  countryCode,
  secondaryCountryCode,
  size,
  round,
  ...rest
}) {
  const flagStyle = Object.assign({
    display: 'inline-block',
    width: size,
    marginLeft: round ? -size * 0.125 : null,
  }, style);

  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className="flag"
        style={flagStyle}
        size={size}
        primaryCC={countryCode.toLowerCase()}
        secondaryCC={secondaryCountryCode.toLowerCase()}
      />
    );
  }

  const flagContainerStyle = {
    display: 'inline-block',
    position: 'relative',
    width: size * 0.75,
    height: size * 0.75,
    overflow: 'hidden',
    borderRadius: '50%',
  };

  const SvgFlag = flags[countryCode.toLowerCase()];
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

Flag.propTypes = {
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf([
    'ca', 'de', 'fr', 'ru', 'gb', 'dk', 'fi', 'no', 'se', 'us', 'jp', 'cn', 'eu',
    'CA', 'DE', 'FR', 'RU', 'GB', 'DK', 'FI', 'NO', 'SE', 'US', 'JP', 'CN', 'EU',
  ]),
  secondaryCountryCode: PropTypes.oneOf([
    'ca', 'de', 'fr', 'ru', 'gb', 'dk', 'fi', 'no', 'se', 'us', 'jp', 'cn', 'eu',
    'CA', 'DE', 'FR', 'RU', 'GB', 'DK', 'FI', 'NO', 'SE', 'US', 'JP', 'CN', 'EU',
  ]),
  /** Unitless pixel value */
  size: PropTypes.number,
  style: PropTypes.object,
  round: PropTypes.bool,
};

export default Flag;
