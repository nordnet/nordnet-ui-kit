import PropTypes from 'prop-types';
import React from 'react';
import { SvgFlag, CurrencyFlag } from './flags';
import FlagDeprecated from './flag-deprecated';
import color from '../../styles/color';
import { deprecatedProps } from '../deprecate';

const addBorder = props => !props.hideBorder && !props.round && !props.secondaryCountryCode;

const Flag = props => {
  /** Will be deprecated. This is here just for backwards compatibility. */
  const extendedStyle = {
    ...props.style,
    border: addBorder(props) ? `1px solid ${props.borderColor}` : null,
    backgroundColor: addBorder(props) ? props.borderColor : 'rgba(0,0,0,0)', // "fix" errors with subpixel coloring between flag and border
  };

  /** Will be deprecated. */
  if (typeof props.size === 'number') {
    return <FlagDeprecated {...props} style={extendedStyle} />;
  }

  const {
    className,
    style,
    countryCode,
    secondaryCountryCode,
    size,
    round,
    hideBorder,
    borderColor,
    ...rest
  } = props;

  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className={className}
        style={extendedStyle}
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
      style={extendedStyle}
      {...rest}
    />
  );
};

Flag.defaultProps = {
  countryCode: '',
  size: 32,
  round: false,
  hideBorder: false,
  borderColor: color.grayLightest,
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
export default deprecatedProps('Flag', [
  {
    prop: 'size',
    message:
      "size in Flag as a number is deprecated. Please use one of 'xs', 'sm', 'md', 'lg' instead",
  },
])(Flag);
