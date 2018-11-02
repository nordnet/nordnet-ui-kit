import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import CurrencyFlag from './currencies';
import styles from './styles';

const Flag = props => {
  const { size, className, classes, round } = props;

  return (
    <CurrencyFlag
      {...props}
      className={cn(className, classes.common, classes[size], {
        [classes[`rounded${size.toUpperCase()}`]]: round,
      })}
    />
  );
};

Flag.defaultProps = {
  size: 'sm',
  round: false,
};

Flag.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export { Flag as Component };
export default injectSheet(styles)(Flag);
