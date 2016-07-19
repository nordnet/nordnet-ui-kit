import React, { PropTypes } from 'react';
import classNames from 'classnames';
import rem from '../../utilities/rem';

import './spinner.scss';

function Spinner({ className, height, width }) {
  const style = {
    height: rem(height),
    width: rem(width),
  };
  return (
    <div style={ style } className={ classNames('sk-cube-grid', className) }>
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  );
}

Spinner.defaultProps = {
  height: 16,
  width: 16,
};

Spinner.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spinner;
