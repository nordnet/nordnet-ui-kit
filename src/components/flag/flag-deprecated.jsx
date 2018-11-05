/** Will be deprecated. This component will be removed in next major release */
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flags from './flags';
import CurrencyFlag from './flags/currencies';
import omit from '../../utilities/omit';

const addBorder = props => !props.hideBorder && !props.round && !props.secondaryCountryCode;

export const styles = theme => {
  const { palette } = theme;
  return {
    container: {
      display: 'inline-block',
    },
    flagStyle: {
      display: 'block',
      width: props => props.size,
      height: props => (addBorder(props) ? (props.size - 2) * 0.75 + 2 : props.size * 0.75),
      marginLeft: props => (props.round ? -props.size * 0.125 : null),
      position: props => (props.round ? 'absolute' : 'relative'),
      boxSizing: 'border-box',
      left: 0,
      border: props => (addBorder(props) ? `1px solid ${props.borderColor || palette.color.grayLightest}` : null),
    },
    roundFlagContainer: {
      display: 'inline-block',
      position: 'relative',
      width: props => props.size * 0.75,
      height: props => props.size * 0.75,
      overflow: 'hidden',
      borderRadius: '50%',
    },
  };
};

const Flag = ({ classes, className, style, countryCode, secondaryCountryCode, size, round, hideBorder, borderColor, ...rest }) => {
  if (secondaryCountryCode) {
    return (
      <CurrencyFlag
        className={cn(classes.flagStyle, className, 'flag')}
        style={style}
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

  const flag = (
    <SvgFlag className={cn(classes.flagStyle, className, 'flag')} style={style} {...omit(rest, 'theme', 'round', 'countryCode')} />
  );

  if (round) {
    return <span className={classes.roundFlagContainer}>{flag}</span>;
  }

  return <div className={classes.container}>{flag}</div>;
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
