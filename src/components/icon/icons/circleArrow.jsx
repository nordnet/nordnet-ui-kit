import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CircleArrow({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <path
          d="M15.5294118,5.64705882 L15.5294118,0.470588235 L13.6569412,2.34305882 C12.1458824,0.832235294
          10.1369412,0 8,0 C3.58870588,0 0,3.58870588 0,8 C0,12.4112941 3.58870588,16 8,16 C12.4112941,16 16,12.4112941
          16,8 L14.1176471,8 C14.1176471,11.3731765 11.3734118,14.1176471 8,14.1176471 C4.62658824,14.1176471 1.88235294,11.3731765
          1.88235294,8 C1.88235294,4.62682353 4.62658824,1.88235294 8,1.88235294 C9.63388235,1.88235294 11.1703529,2.51882353
          12.3258824,3.67411765 L10.3529412,5.64705882 L15.5294118,5.64705882 Z" id="circle-arrow" fill={fill}
        />
      </g>
    </svg>
  );
}

CircleArrow.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleArrow.defaultProps = Icon.defaultProps;
