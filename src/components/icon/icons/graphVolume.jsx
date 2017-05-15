import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function GraphVolume({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g transform="translate(-1.0, 0)" stroke={stroke}>
          <rect x="11.5" y="6.5" width="3" height="9" rx="0.7" />
          <rect x="6.5" y="10.5" width="3" height="5" rx="0.7" />
          <rect x="1.5" y="0.5" width="3" height="15" rx="0.7" />
        </g>
      </g>
    </svg>
  );
}

GraphVolume.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

GraphVolume.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 14 16',
  width: 14,
  height: 16,
};
