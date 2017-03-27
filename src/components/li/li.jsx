import React, { PropTypes } from 'react';
import './li.scss';

function Li({ children }) {
  return (<li>{ children }</li>);
}

Li.defaultProps = {
};

Li.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Li;
