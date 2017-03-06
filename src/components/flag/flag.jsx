import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import flags from './flags';

function Flag({
  className,
  style,
  countryCode,
  width,
  height,
  ...rest,
}) {
  const flag = flags[countryCode.toLowerCase()];
  const classes = classNames('flag', `flag--${kebabCase(countryCode)}`, className);
  const styles = Object.assign({
    display: 'inline-block',
    width: `${width / 10}rem`,
    height: `${height / 10}rem`,
  }, style);

  return (
    <span
      className={ classes }
      style={ styles }
      dangerouslySetInnerHTML={ { __html: flag } }
      { ...rest }
    />
  );
}

Flag.defaultProps = {
  width: 16,
  height: 12,
};

Flag.propTypes = {
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.string.isRequired,
  /** Unitless pixel value */
  width: PropTypes.number,
  /** Unitless pixel value */
  height: PropTypes.number,
  style: PropTypes.object,
};

export default Flag;
