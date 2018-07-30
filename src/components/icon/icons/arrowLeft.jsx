import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ArrowLeft({
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
        <g transform="translate(0, 2.7)" fillRule="nonzero" fill={fill}>
          <g>
            <path
              d="M0.589263762,5.00241556 L5.47287655,0.118802768 C5.63159397,-0.0399146481 5.88961151,-0.0399146481
              6.04832893,0.118802768 C6.20704634,0.277520183 6.20704634,0.535537726 6.04832893,0.694255142
              L1.85981702,4.88276705 L15.1212676,4.88276705 C15.3459137,4.88276705 15.5282353,5.06508859
              15.5282353,5.28973478 C15.5282353,5.51438097 15.3459137,5.69670251 15.1212676,5.69670251
              L1.85981702,5.69670251 L6.04832893,9.88521442 C6.20704634,10.0439318 6.20704634,10.3019494
              6.04832893,10.4606668 C5.96856325,10.5404325 5.86437951,10.5795014 5.76019577,10.5795014
              C5.65601203,10.5795014 5.55182829,10.5396185 5.47206262,10.4606668 L0.588449827,5.577054
              C0.429732411,5.41833658 0.429732411,5.16031904 0.588449827,5.00160162 L0.589263762,5.00241556 Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

ArrowLeft.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...Icon.propTypes,
};

ArrowLeft.defaultProps = Icon.defaultProps;
