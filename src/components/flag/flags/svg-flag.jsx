import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import flags from '../flags';
import styles from './styles';

const SvgFlag = props => {
  const Flag = flags[props.countryCode];

  if (!Flag) {
    return null;
  }

  const { size, className, classes, round } = props;

  if (round) {
    return (
      <span className={cn(classes.roundedContainer, classes[`roundedContainer${size.toUpperCase()}`])}>
        <Flag {...props} className={cn(className, classes.common, classes[size], classes[`rounded${size.toUpperCase()}`])} />
      </span>
    );
  }

  return (
    <span className={classes.container}>
      <Flag {...props} className={cn(className, classes.common, classes[size])} />
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
