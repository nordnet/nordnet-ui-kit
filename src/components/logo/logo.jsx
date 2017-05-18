import PropTypes from 'prop-types';
import React from 'react';
import NordnetLogo from './nordnetLogo';

function Logo({ onlyIcon, height, iconColor, textColor, ...rest }) {
  const logoProps = {
    height,
    width: onlyIcon ? height : height * 4.89,
    fill: iconColor,
    stroke: textColor,
    viewBox: onlyIcon ? '0 0 64 64' : undefined,
    ...rest,
  };

  return <NordnetLogo {...logoProps} />;
}

Logo.defaultProps = {
  iconColor: '#00A9EC',
  textColor: '#222222',
  onlyIcon: false,
  height: 27,
};

Logo.propTypes = {
  className: PropTypes.string,
  onlyIcon: PropTypes.bool,
  style: PropTypes.object,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.number,
};

export default Logo;
