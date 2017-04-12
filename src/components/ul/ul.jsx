import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';

const styleSheet = createStyleSheet('Ul', () => ({
  ul: {},
}));

// not currently doing anything
function Ul({ children, style, ...rest }, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  return (
    <ul {...rest} className={classes.ul} style={style}>
      { children }
    </ul>
  );
}

Ul.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  className: PropTypes.string,
};

Ul.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default Ul;
