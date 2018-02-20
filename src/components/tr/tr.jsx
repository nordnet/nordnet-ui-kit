import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import omit from '../../utilities/omit';
import styles from './tr-styles';

function Tr({ classes, className, children, size, border, borderBottom, sticky, stickyOffset, ...rest }) {
  const usedClassName = classNames(
    classes.tr,
    size,
    { [classes.border]: border, [classes.borderBottom]: borderBottom, [classes.sticky]: sticky },
    className,
  );
  return (
    <tr {...omit(rest, 'theme', 'sheet')} className={usedClassName}>
      {children}
    </tr>
  );
}

Tr.defaultProps = {
  border: false,
  borderBottom: false,
  sticky: false,
  stickyOffset: 0,
};

Tr.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  border: PropTypes.bool,
  borderBottom: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyOffset: PropTypes.number,
};

export default injectSheet(styles)(Tr);
