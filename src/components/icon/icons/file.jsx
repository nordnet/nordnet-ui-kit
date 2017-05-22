import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function File({
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
        <g transform="translate(-2, 0)" fillRule="nonzero" fill={fill}>
          <path d="M14.881375,3.91242105 L11.225125,0.122947368 C11.14875,0.0437894737 11.0455625,0 10.9375,0 L3.21875,0 C2.5468125,0 2,0.566736842 2,1.26315789 L2,14.7368421 C2,15.4332632 2.5468125,16 3.21875,16 L13.78125,16 C14.4531875,16 15,15.4332632 15,14.7368421 L15,4.21052632 C15,4.09852632 14.9569375,3.99157895 14.881375,3.91242105 Z M14.0193125,4.21052632 L11.34375,4.21052632 C11.1195,4.21052632 10.9375,4.02189474 10.9375,3.78947368 L10.9375,1.01642105 L14.0193125,4.21052632 Z M14.1875,14.7368421 C14.1875,14.9692632 14.0055,15.1578947 13.78125,15.1578947 L3.21875,15.1578947 C2.9945,15.1578947 2.8125,14.9692632 2.8125,14.7368421 L2.8125,1.26315789 C2.8125,1.03073684 2.9945,0.842105263 3.21875,0.842105263 L10.125,0.842105263 L10.125,3.78947368 C10.125,4.48589474 10.6718125,5.05263158 11.34375,5.05263158 L14.1875,5.05263158 L14.1875,14.7368421 Z" />
        </g>
      </g>
    </svg>
  );
}

File.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...Icon.propTypes,
};

File.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 13 16',
};
