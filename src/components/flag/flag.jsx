import PropTypes from 'prop-types';
import React from 'react';
import { SvgFlag, CurrencyFlag } from './flags';
import omit from '../../utilities/omit';
import FlagDeprecated from './flag-deprecated';
import color from '../../styles/color';

const addBorder = props => !props.hideBorder && !props.round && !props.secondaryCountryCode;

const Flag = props => {
  /** Will be deprecated. */
  if (typeof props.size === 'number') {
    return <FlagDeprecated {...props} />;
  }

  const { classes, className, style, countryCode, secondaryCountryCode, size, round, hideBorder, borderColor, ...rest } = props;

  /** Will be deprecated. This is here just for backwards compatibility. */
  const extendedStyle = {
    ...style,
    border: addBorder(props) ? `1px solid ${props.borderColor || color.grayLightest}` : null,
  };

  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        style={extendedStyle}
        size={size}
        primaryCC={countryCode.toLowerCase()}
        secondaryCC={secondaryCountryCode.toLowerCase()}
      />
    );
  }

  return <SvgFlag round={round} size={size} countryCode={countryCode.toLowerCase()} style={style} {...omit(rest, 'theme')} />;
};

Flag.defaultProps = {
  countryCode: '',
  size: 32,
  round: false,
  hideBorder: false,
  borderColor: '',
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
  classes: PropTypes.object,
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  secondaryCountryCode: PropTypes.oneOf(countryCodes),
  size: PropTypes.oneOfType([
    /** Unitless pixel value */
    /** Will be deprecated. Size will not be a numerical value and will be predefined with value one of 'xs', 'sm', 'md', 'lg'. */
    PropTypes.number,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  ]),
  style: PropTypes.object,
  round: PropTypes.bool,
  hideBorder: PropTypes.bool,
  /** Will be deprecated. borderColor can be passed together with `styles` object. */
  borderColor: PropTypes.string,
};
export { Flag as Component };
export default Flag;
