import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ExternalLink({
  fill,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg style={style} {...rest}>
      <g stroke="none" fill={fill} fillRule="evenodd">
        <path
          d="
          M9,11 L9,7 L10,7 L10,11 L10,12 L1,12 L-6.21724894e-15,12 L-6.21724894e-15,2 L1,2 L5,2 L5,3 L1,3 L1,11 L9,11 Z
          M11.0008672,1.70567448 L3.86842712,8.83811458 L3.16132034,8.1310078 L10.2941165,0.998211644 L6.05147581,0.998211644
          L7.05147581,-0.00178835629 L11.0008672,-0.00178835629 L12.0008672,-0.00203651693 L12.0038991,-0.00178835629
          L12.0038991,0.998211644 L12.0008672,0.998211644 L12.0008672,4.94831517 L11.0008672,5.94831517 L11.0008672,1.70567448 Z"
        />
      </g>
    </svg>
  );
}

ExternalLink.propTypes = {
  fill: PropTypes.string,
  ...Icon.propTypes,
};

ExternalLink.defaultProps = Icon.defaultProps;
