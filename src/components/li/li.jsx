import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

export const styles = theme => ({
  li: {
    ...theme.mixins.basicBoxSizing,
    listStyle: 'none',
    borderBottom: `1px solid ${theme.palette.gray6}`,
    margin: 0,
    '&:last-child': {
      borderBottom: 0,
    },
  },
});

function Li({
  classes,
  children,
  style,
  className,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  return (
    <li {...rest} className={classNames('ul', className, classes.li)} style={style}>
      {children}
    </li>
  );
}

Li.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export { Li as Component };
export default injectSheet(styles)(Li);
