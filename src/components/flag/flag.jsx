import PropTypes from 'prop-types';
import React from 'react';
import { SvgFlag, CurrencyFlag } from './flags';

const Flag = props => {
  const { className, style, countryCode, secondaryCountryCode, size, round, ...rest } = props;

  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className={className}
        style={style}
        size={size}
        primaryCC={countryCode.toLowerCase()}
        secondaryCC={secondaryCountryCode.toLowerCase()}
      />
    );
  }

  return (
    <SvgFlag
      className={className}
      round={round}
      size={size}
      countryCode={countryCode.toLowerCase()}
      style={style}
      {...rest}
    />
  );
};

Flag.defaultProps = {
  countryCode: '',
  size: 32,
  round: false,
};

const countryCodes = [
  'ca',
  'de',
  'fr',
  'ru',
  'gb',
  'dk',
  'fi',
  'no',
  'se',
  'us',
  'jp',
  'cn',
  'eu',
  'CA',
  'DE',
  'FR',
  'RU',
  'GB',
  'DK',
  'FI',
  'NO',
  'SE',
  'US',
  'JP',
  'CN',
  'EU',
];

Flag.propTypes = {
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  secondaryCountryCode: PropTypes.oneOf(countryCodes),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  style: PropTypes.object,
  round: PropTypes.bool,
};

export { Flag as Component };
export default Flag;
