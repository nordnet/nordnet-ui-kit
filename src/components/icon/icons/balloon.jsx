import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Balloon({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="icons" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-165.000000, -7.000000)" fillRule="nonzero" fill={fill}>
          <g id="bubble" transform="translate(165.000000, 7.000000)">
            <path
              d="M0.421052632,15.1578947 C0.231578947,15.1578947 0.0656842105,15.0315789 0.0151578947,14.8488421
              C-0.0353684211,14.6661053 0.0421052632,14.4724211 0.204631579,14.3755789 C1.62863158,13.5216842
              2.21894737,12.2795789 2.42863158,11.6985263 C0.880842105,10.5136842 2.71050543e-20,8.87410526
              2.71050543e-20,7.15789474 C2.71050543e-20,6.29136842 0.217263158,5.45178947 0.646736842,4.66189474
              C1.056,3.90905263 1.64042105,3.23452632 2.38231579,2.65684211 C3.88715789,1.48631579 5.88210526,0.841263158
              8,0.841263158 C10.1178947,0.841263158 12.1128421,1.48631579 13.6176842,2.65684211 C14.3595789,3.23368421
              14.944,3.90821053 15.3532632,4.66189474 C15.7827368,5.45094737 16,6.29052632 16,7.15789474 C16,8.02526316
              15.7827368,8.864 15.3532632,9.65389474 C14.944,10.4067368 14.3595789,11.0812632 13.6176842,11.6589474
              C12.1128421,12.8294737 10.1178947,13.4745263 8,13.4745263 C7.13010526,13.4745263 6.27621053,13.3658947
              5.46021053,13.1503158 C5.09894737,13.3911579 4.42357895,13.8181053 3.61684211,14.2197895 C2.36378947,14.8429474
              1.28926316,15.1587368 0.421894737,15.1587368 L0.421052632,15.1578947 Z M8,1.68421053 C4.05305263,1.68421053
              0.842105263,4.13978947 0.842105263,7.15789474 C0.842105263,8.68631579 1.68842105,10.1574737 3.16294737,11.1932632
              C3.30778947,11.2951579 3.37347368,11.4762105 3.328,11.6471579 C3.22947368,12.0143158 2.89431579,13.0223158
              1.99747368,13.9949474 C3.09389474,13.6109474 4.27452632,12.9448421 5.14610526,12.3452632 C5.24968421,12.2736842
              5.37936842,12.2526316 5.50063158,12.2871579 C6.29894737,12.5153684 7.14021053,12.6315789 8,12.6315789
              C11.9469474,12.6315789 15.1578947,10.176 15.1578947,7.15789474 C15.1578947,4.13978947 11.9469474,1.68421053 8,1.68421053 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

Balloon.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Balloon.defaultProps = Icon.defaultProps;
