import React from 'react';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import assign from 'lodash.assign';
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
  const styles = assign({
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
  className: React.PropTypes.string,
  /** A valid 2-character country code */
  countryCode: React.PropTypes.string.isRequired,
  /** Unitless pixel value */
  width: React.PropTypes.number,
  /** Unitless pixel value */
  height: React.PropTypes.number,
  style: React.PropTypes.object,
};

export default Flag;
