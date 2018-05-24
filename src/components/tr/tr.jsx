import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import omit from '../../utilities/omit';
import styles, { stickyOffset as stickyOffsetStyles } from './tr-styles';

function Tr({ classes, className, children, size, border, sticky, stickyBorder, stickyOffset, ...rest }) {
  const usedClassName = classNames(
    classes.tr,
    size,
    {
      [classes.border]: border,
      [classes.sticky]: sticky,
      [classes.stickyBorder]: stickyBorder,
    },
    stickyOffset && { [classes.stickyOffset]: stickyOffset }, // classNames will filter out this if false
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
  sticky: false,
  stickyBorder: false,
  stickyOffset: 0,
};

Tr.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  border: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyBorder: PropTypes.bool,
  stickyOffset: PropTypes.number,
};

const Normal = injectSheet(styles)(Tr);
const Sticky = injectSheet(stickyOffsetStyles)(Tr);

const Wrapper = props => (props.stickyOffset ? <Sticky {...props} /> : <Normal {...props} />);

Wrapper.propTypes = { stickyOffset: Tr.propTypes.stickyOffset };
