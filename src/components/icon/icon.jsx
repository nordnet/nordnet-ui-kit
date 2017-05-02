import React, { PropTypes } from 'react';

export default function Icon() {
  return (
    <span>
      Dummy icon used for documentation
    </span>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Unitless pixel value */
  width: PropTypes.number,
  /** Unitless pixel value */
  height: PropTypes.number,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  fill: '#222',
  stroke: '#222',
  strokeWidth: 1,
  height: 16,
  width: 16,
  viewBox: '0 0 16 16',
};
