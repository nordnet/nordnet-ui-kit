import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Folder({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g strokeWidth={strokeWidth} stroke={stroke}>
          <path d="M15,4 L15,14 L1,14 L1,2 L6,2 L8,4 L15,4 Z" />
        </g>
      </g>
    </svg>
  );
}

Folder.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Folder.defaultProps = Icon.defaultProps;
