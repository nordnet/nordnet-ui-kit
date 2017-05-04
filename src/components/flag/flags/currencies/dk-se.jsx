import PropTypes from 'prop-types';
import React from 'react';

export default function CurrencyDKSe({
  style,
  ...rest
}) {
  const usedStyle = Object.assign({}, {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.41421,
  }, style);
  return (
    <svg
      width="100%"
      height="100%"
      style={usedStyle}
      {...rest}
    >
      <g id="DKK-.--SEK">
        <g id="SE">
          <circle cx="116.094" cy="68.031" r="68.031" style={{ fill: '#f6f6f6' }} />
          <g id="Sweden">
            <clipPath id="_clip1">
              <ellipse cx="115.969" cy="68.385" rx="60.887" ry="60.945" />
            </clipPath>
            <g clipPath="url(#_clip1)">
              <g>
                <clipPath id="_clip2">
                  <path d="M54.523,7.03l122.875,0l0,122.875l-122.875,0l0,-122.875Z" />
                </clipPath>
                <g clipPath="url(#_clip2)">
                  <path
                    d="M25.461,7.103l61.438,0l0,49.15l-61.438,0l0,-49.15Zm0,73.648l61.438,0l0,49.151l-61.438,0l0,-49.151Z"
                    style={{ fill: '#006aa7' }}
                  />
                  <path
                    d="M25.461,56.225l61.438,0l0,24.576l-61.438,0l0,-24.576Z"
                    style={{ fill: '#fecc00' }}
                  />
                  <path
                    d="M86.646,7.033l24.575,0l0,122.876l-24.575,0l0,-122.876Z"
                    style={{ fill: '#fecc00' }}
                  />
                  <path
                    d="M110.442,56.232l110.589,0l0,24.576l-110.589,0l0,-24.576Z"
                    style={{ fill: '#fecc00' }}
                  />
                  <path
                    d="M111.2,80.759l110.589,0l0,49.15l-110.589,0l0,-49.15Zm0,-73.656l110.589,0l0,49.15l-110.589,0l0,-49.15Z"
                    style={{ fill: '#006aa7' }}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="NO">
          <circle cx="68.031" cy="68.031" r="68.031" style={{ fill: '#f6f6f6' }} />
          <g id="USA">
            <clipPath id="_clip3">
              <ellipse cx="67.666" cy="68.145" rx="60.887" ry="60.945" />
            </clipPath>
            <g clipPath="url(#_clip3)">
              <clipPath id="_clip4">
                <rect x="6.021" y="6.558" width="122.88" height="122.88" />
              </clipPath>
              <g clipPath="url(#_clip4)">
                <path d="M6.021,6.558l122.904,0l0,122.88l-122.904,0l0,-122.88Z" style={{ fill: '#c60c30', fillRule: 'nonzero' }} />
                <path d="M40.581,6.558l17.554,0l0,122.88l-17.554,0l0,-122.88Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
                <path d="M6.021,59.221l122.904,0l0,17.554l-122.904,0l0,-17.554Z" style={{ fill: '#fff', fillRule: 'nonzero' }} />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

CurrencyDKSe.defaultProps = {
  viewBox: '0 0 185 137',
};

CurrencyDKSe.propTypes = {
  style: PropTypes.object,
};
