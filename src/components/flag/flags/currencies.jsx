import PropTypes from 'prop-types';
import React from 'react';
import flags from './';

export default function CombinedFlag({ style, primaryCC, secondaryCC, size, ...rest }) {
  const usedStyle = Object.assign(
    {},
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 1.41421,
    },
    style,
  );
  const PrimaryFlag = flags[primaryCC];
  const SecondaryFlag = flags[secondaryCC];
  const primaryX = -24;
  const secondaryX = -primaryX;
  return (
    <svg width="100%" height="100%" style={usedStyle} aria-hidden="true" focusable="false" {...rest}>
      <g id={`${primaryCC}/${secondaryCC}`}>
        <g id={`${secondaryCC}-container`}>
          <circle cx="116.094" cy="68.031" r="68.031" style={{ fill: '#f6f6f6' }} />
          <g id={secondaryCC}>
            <clipPath id="_clip1">
              <ellipse cx="115.969" cy="68.385" rx="60.887" ry="60.945" />
            </clipPath>
            <g clipPath="url(#_clip1)">
              <g>
                <clipPath id="_clip2">
                  <path d="M54.523,7.03l122.875,0l0,122.875l-122.875,0l0,-122.875Z" />
                </clipPath>
                <g transform={`translate(${secondaryX}, 0)`}>
                  {SecondaryFlag ? <SecondaryFlag /> : null}
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id={`${primaryCC}-container`}>
          <circle cx="68.031" cy="68.031" r="68.031" style={{ fill: '#f6f6f6' }} />
          <g id={primaryCC}>
            <clipPath id="_clip3">
              <ellipse cx="67.666" cy="68.145" rx="60.887" ry="60.945" />
            </clipPath>
            <g clipPath="url(#_clip3)">
              <clipPath id="_clip4">
                <rect x="5.541" y="6.213" width="122.88" height="122.88" />
              </clipPath>
              <g transform={`translate(${primaryX}, 0)`}>
                {PrimaryFlag ? <PrimaryFlag /> : null}
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

CombinedFlag.defaultProps = {
  viewBox: '0 0 185 137',
  primaryCC: '',
  secondaryCC: '',
};

CombinedFlag.propTypes = {
  style: PropTypes.object,
  primaryCC: PropTypes.string,
  secondaryCC: PropTypes.string,
  size: PropTypes.number,
};
