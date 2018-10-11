import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flags from './flags';
import CurrencyFlag from './flags/currencies';

export const styles = theme => {
  const { palette } = theme;

  return {
    flagStyle: {
      display: 'inline-block',
      width: props => props.size,
      height: props => props.size * 0.75,
      marginLeft: props => (props.round ? -props.size * 0.125 : null),
      position: props => (props.round ? 'absolute' : 'relative'),
      left: 0,
      outline: props => (!props.round && !props.secondaryCountryCode ? `1px solid ${palette.color.grayLighter}` : null),
    },
    roundFlagStyle: {
      display: 'inline-block',
      position: 'relative',
      width: props => props.size * 0.75,
      height: props => props.size * 0.75,
      overflow: 'hidden',
      borderRadius: '50%',
    },
  };
};

const Flag = ({ classes, className, style, countryCode, secondaryCountryCode, size, round, ...rest }) => {
  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className={cn(classes.flagStyle, className)}
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

  const flag = <SvgFlag className={cn(classes.flagStyle, className)} {...rest} />;

  if (round) {
    return <span className={classes.roundFlagStyle}>{flag}</span>;
  }

  return flag;
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
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  secondaryCountryCode: PropTypes.oneOf(countryCodes),
  /** Unitless pixel value */
  size: PropTypes.number,
  style: PropTypes.object,
  round: PropTypes.bool,
};

export default injectSheet(styles)(Flag);
