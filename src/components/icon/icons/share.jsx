import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Share({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-1009.000000, -282.000000)" stroke={stroke}>
          <g id="share" transform="translate(1009.000000, 282.000000)">
            <circle id="Oval" strokeWidth="1.5" cx="12.75" cy="3.25" r="2.5" />
            <circle id="Oval" strokeWidth="1.5" cx="3.25" cy="8" r="2.5" />
            <circle id="Oval" strokeWidth="1.5" cx="12.75" cy="12.75" r="2.5" />
            <path d="M11,4 L5,7" id="Path-503" strokeWidth={strokeWidth} />
            <path d="M11,12 L5,9" id="Path-504" strokeWidth={strokeWidth} />
          </g>
        </g>
      </g>
    </svg>
  );
}

Share.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Share.defaultProps = Icon.defaultProps;
