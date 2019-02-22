import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CO2({
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
      <g stroke={stroke} strokeWidth={0.1} fill={fill}>
        <path
          d="M0.930308177,8.44440689 C4.60669905,4.09790343 10.1057958,4.30868804 10.1057958,4.30868804 C10.1057958,4.30868804 2.31066754,6.97738765 0.0211893194,12.3289085 C-0.159621672,12.7513696 0.869541386,13.3007772 1.10441695,12.8013158 C1.80546912,11.3130397 2.78235487,10.1968326 2.78235487,10.1968326 C4.22362996,10.7321185 6.71685566,11.3594183 8.48400757,10.1183459 C10.8312738,8.46967725 10.5913344,4.81498731 13.9421463,3.03550739 C14.7248166,2.6200328 7.37412,0.882769259 3.51527982,3.11771042 C0.668921612,4.76608172 0.832306832,7.45098409 0.930308177,8.44440689 Z"
          id="Shape"
        />
      </g>
    </svg>
  );
}

CO2.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CO2.defaultProps = Icon.defaultProps;
