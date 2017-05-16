import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import TheadStyles from './thead-styles';

function Thead(
  { className, children, size, variant, ...rest },
  { styleManager },
) {
  const classes = styleManager.render(TheadStyles);
  const usedClassName = classNames(
    classes.thead,
    size,
    variant ? [variant] : [],
    className,
  );

  return (
    <thead {...rest} className={usedClassName}>
      {children}
    </thead>
  );
}

Thead.defaultProps = {};

Thead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Thead.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Thead;
