import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Film({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-821.000000, -141.000000)" stroke={stroke}>
          <g id="film" transform="translate(821.000000, 141.000000)">
            <rect id="Rectangle-path" strokeWidth={strokeWidth} x="1" y="2" width="14" height="13" />
            <path d="M4.5,3 L4.5,14" id="Shape" />
            <path d="M11.5,3 L11.5,14" id="Shape" />
            <path d="M2,5.5 L4,5.5" id="Shape" />
            <path d="M2,8.5 L4,8.5" id="Shape" />
            <path d="M2,11.5 L4,11.5" id="Shape" />
            <path d="M12,5.5 L14,5.5" id="Shape" />
            <path d="M12,8.5 L14,8.5" id="Shape" />
            <path d="M12,11.5 L14,11.5" id="Shape" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Film.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Film.defaultProps = Icon.defaultProps;
