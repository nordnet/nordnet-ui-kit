import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './tabpanel-styles';

const Tabpanel = ({ classes, selected, singlePanel, id, index, children }) => (
  <section
    className={classes.root}
    id={id || `tabs-tabpanel-${index}`}
    role="tabpanel"
    aria-labelledby={singlePanel ? null : `tabs-tab-${index}`}
    hidden={singlePanel ? null : !selected}
  >
    {children}
  </section>
);

Tabpanel.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
  singlePanel: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
};

Tabpanel.defaultProps = {
  singlePanel: false,
  id: null,
};

export { Tabpanel as Component, styles };
export default injectSheet(styles)(Tabpanel);
