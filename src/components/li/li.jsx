import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

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

function Li({ children, style, ...rest }, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  return (
    <li {...rest} className={classes.li} style={style}>
      {children}
    </li>
  );
}

Li.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Li.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Li;
