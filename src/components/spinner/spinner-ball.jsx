import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './spinner-styles';

function SpinnerBall({
  classes,
  className,
  size,
  color,
  gradientStops,
  strokeWidth,
  style,
  theme,
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const wrapperStyle = {
    width: size,
    height: size,
    fontSize: size * 0.8,
    ...style,
  };

  return (
    <span {...rest} className={classNames(classes.spinner, classes.ball, className)} style={wrapperStyle}>
      ⚽️
    </span>
  );
}

SpinnerBall.defaultProps = {
  size: 16,
  gradientStops: 20,
};

SpinnerBall.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  /** Unitless pixel value */
  size: PropTypes.number,
  color: PropTypes.string,
  /** Lower values yield better performance at the risk of more banding */
  gradientStops: PropTypes.number,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
};

export { SpinnerBall as Component, styles };
export default injectSheet(styles)(SpinnerBall);
