/** Will be deprecated. This component will be removed in next major release */
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flags from './flags';
import CurrencyFlag from './flags/currencies';

export const styles = () => ({
  container: {
    display: 'inline-block',
  },
  flagStyle: {
    display: 'block',
    boxSizing: 'border-box',
    left: 0,
  },
  roundFlagContainer: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
  },
});

const Flag = ({ classes, theme, className, style, countryCode, secondaryCountryCode, size, round, hideBorder, borderColor, ...rest }) => {
  const hasBorder = !hideBorder && !round && !secondaryCountryCode;

  const flagStyle = {
    ...style,
    width: size,
    height: size * 0.75,
    marginLeft: round ? -size * 0.125 : null,
    position: round ? 'absolute' : 'relative',
    border: hasBorder ? `1px solid ${borderColor}` : null,
    backgroundColor: borderColor, // "fix" errors with subpixel anti-aliasing between flag and border
  };

  const roundFlagContainerStyle = {
    width: size * 0.75,
    height: size * 0.75,
  };

  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className={cn(classes.flagStyle, className, 'flag')}
        style={flagStyle}
        size={size}
        primaryCC={countryCode.toLowerCase()}
        secondaryCC={secondaryCountryCode.toLowerCase()}
      />
    );
  }
  const SvgFlag = flags[countryCode.toLowerCase()];

  if (!SvgFlag) {
    return null;
  }

  const flag = <SvgFlag className={cn(classes.flagStyle, className, 'flag')} style={flagStyle} {...rest} />;

  if (round) {
    return (
      <span style={roundFlagContainerStyle} className={classes.roundFlagContainer}>
        {flag}
      </span>
    );
  }

  return <div className={classes.container}>{flag}</div>;
};

Flag.defaultProps = {
  countryCode: '',
  size: 32,
  round: false,
  hideBorder: false,
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
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  secondaryCountryCode: PropTypes.oneOf(countryCodes),
  /** Unitless pixel value */
  size: PropTypes.number,
  style: PropTypes.object,
  round: PropTypes.bool,
  hideBorder: PropTypes.bool,
  borderColor: PropTypes.string,
};

export { Flag as Component };
export default injectSheet(styles)(Flag);
