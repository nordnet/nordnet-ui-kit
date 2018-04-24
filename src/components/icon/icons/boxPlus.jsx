import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function BoxPlus({
  stroke,
  fill,
  strokeWidth,
  invert,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke={stroke} strokeWidth={strokeWidth} fill={invert ? '#FFF' : fill} fillRule="evenodd">
        <path d="M13.6470588,0.941176471 L2.35294118,0.941176471 C2.09317647,0.941176471 1.88235294,0.730352941 1.88235294,0.470588235 C1.88235294,0.210823529 2.09317647,0 2.35294118,0 L13.6470588,0 C13.9068235,0 14.1176471,0.210823529 14.1176471,0.470588235 C14.1176471,0.730352941 13.9068235,0.941176471 13.6470588,0.941176471" />
        <path d="M14.5882353,2.82352941 L1.41176471,2.82352941 C1.152,2.82352941 0.941176471,2.61270588 0.941176471,2.35294118 C0.941176471,2.09317647 1.152,1.88235294 1.41176471,1.88235294 L14.5882353,1.88235294 C14.848,1.88235294 15.0588235,2.09317647 15.0588235,2.35294118 C15.0588235,2.61270588 14.848,2.82352941 14.5882353,2.82352941" />
        <path d="M14.5882353,19.0588235 L1.41176471,19.0588235 C0.633411765,19.0588235 0,18.4254118 0,17.6470588 L0,5.41176471 C0,4.63341176 0.633411765,4 1.41176471,4 L14.5882353,4 C15.3665882,4 16,4.63341176 16,5.41176471 L16,17.6470588 C16,18.4254118 15.3665882,19.0588235 14.5882353,19.0588235 Z" />
        <path
          d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
          fill={invert ? fill : '#FFF'}
          stroke={invert ? fill : '#FFF'}
          transform="scale(0.35) translate(12, 20)"
        />
      </g>
    </svg>
  );
}

BoxPlus.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  invert: PropTypes.bool,
};

BoxPlus.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 16 20',
};
