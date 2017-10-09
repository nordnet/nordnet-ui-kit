import PropTypes from 'prop-types';
import React from 'react';

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
  width: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Unitless pixel value */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  fill: '#222',
  stroke: '#222',
  'aria-hidden': 'true',
  focusable: 'false',
  strokeWidth: 1,
  height: 16,
  width: 16,
  viewBox: '0 0 16 16',
  style: { pointerEvents: 'none' },
};
