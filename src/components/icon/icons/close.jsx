import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Close({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="close" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M1.875,1.875 L14.125,14.125" id="Shape" />
          <path d="M14.1249998,1.875 L1.875,14.1249998" id="Shape" />
        </g>
      </g>
    </svg>
  );
}

Close.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Close.defaultProps = Icon.defaultProps;
