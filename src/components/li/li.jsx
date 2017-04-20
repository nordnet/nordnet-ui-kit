import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';

const styleSheet = createStyleSheet('Li', theme => ({
  li: {
    listStyle: 'none',
    borderBottom: `1px solid ${theme.palette.color.grayLighter}`,
    margin: 0,
    '&:last-child': {
      borderBottom: 0,
    },
  },
}));

function Li({ children, style, className, ...rest }, { styleManager }) {
  const styles = styleManager.render(styleSheet);
  const classes = classNames('ul', className, styles.li);
  return (
    <li {...rest} className={classes} style={style}>
      {children}
    </li>
  );
}

Li.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

Li.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Li;
