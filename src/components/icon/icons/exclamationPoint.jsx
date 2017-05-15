import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ExcalmationPoint({
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
        <g transform="translate(-1.000000, 0.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M2,0 L2,5" />
          <path d="M2.0035995,6.0260159 L1.9964005,8" />
        </g>
      </g>
    </svg>
  );
}

ExcalmationPoint.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ExcalmationPoint.defaultProps = {
  ...Icon.defaultProps,
  width: 4,
  height: 16,
  viewBox: '0 0 2 8',
};
