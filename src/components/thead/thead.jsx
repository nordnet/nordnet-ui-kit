import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles, { stickyOffset as stickyOffsetStyles } from './thead-styles';

function Thead({
  classes,
  className,
  children,
  size,
  hiddenOnMobile,
  sticky,
  stickyBorder,
  stickyOffset,
  borderBottom,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.thead,
    size,
    {
      [classes.hiddenOnMobile]: hiddenOnMobile,
      [classes.sticky]: sticky,
      [classes.stickyBorder]: stickyBorder,
      [classes.stickyOffset]: stickyOffset,
      [classes.borderBottom]: borderBottom,
    },
    className,
  );

  return (
    <thead {...rest} className={usedClassName}>
      {children}
    </thead>
  );
}

Thead.defaultProps = {
  hiddenOnMobile: false,
  sticky: false,
  stickyBorder: false,
  stickyOffset: 0,
  borderBottom: false,
};

Thead.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  hiddenOnMobile: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyBorder: PropTypes.bool,
  stickyOffset: PropTypes.number,
  borderBottom: PropTypes.bool,
};

const Normal = injectSheet(styles)(Thead);
const Sticky = injectSheet(stickyOffsetStyles)(Thead);

const Wrapper = props => (props.stickyOffset ? <Sticky {...props} /> : <Normal {...props} />);

Wrapper.propTypes = { stickyOffset: Thead.propTypes.stickyOffset };

export default Wrapper;
