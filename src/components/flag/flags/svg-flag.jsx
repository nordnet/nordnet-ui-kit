import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flags from '.';
import styles from './styles';

const SvgFlag = ({ className, classes, size, countryCode, round, ...rest }) => {
  const Flag = flags[countryCode];

  if (!Flag) {
    return null;
  }

  if (round) {
    return (
      <span
        className={cn(classes.roundedContainer, classes[`roundedContainer${size.toUpperCase()}`])}
      >
        <Flag
          className={cn(
            className,
            classes.common,
            classes[size],
            classes[`rounded${size.toUpperCase()}`],
          )}
          {...rest}
        />
      </span>
    );
  }

  return (
    <span className={classes.container}>
      <Flag {...rest} className={cn(className, classes.common, classes[size])} />
    </span>
  );
};

SvgFlag.defaultProps = {
  size: 'sm',
  round: false,
};

SvgFlag.propTypes = {
  classes: PropTypes.object.isRequired,
  countryCode: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  round: PropTypes.bool,
};

export { SvgFlag as Component };
export default injectSheet(styles)(SvgFlag);
