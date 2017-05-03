import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function CircleSlash({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Atoms" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Icons" transform="translate(-903.000000, -151.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="Icon-set" transform="translate(56.000000, 151.000000)">
            <g id="stop" transform="translate(847.000000, 0.000000)">
              <circle id="Oval" cx="8" cy="8" r="7" />
              <path d="M12.5,3.5 L3.5,12.5" id="Shape" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

CircleSlash.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

CircleSlash.defaultProps = Icon.defaultProps;
