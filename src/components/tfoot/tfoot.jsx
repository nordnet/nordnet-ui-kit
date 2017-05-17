import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import TfootStyles from './tfoot-styles';

function Tfoot(props, { styleManager }) {
  const { className, children, size, ...rest } = props;
  const classes = styleManager.render(TfootStyles);
  const usedClassName = classNames(classes.tfoot, size, className);
  return <tfoot {...rest} className={usedClassName}>{children}</tfoot>;
}

Tfoot.defaultProps = {};

Tfoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Tfoot.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Tfoot;
