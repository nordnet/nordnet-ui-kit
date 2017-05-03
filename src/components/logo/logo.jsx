import PropTypes from 'prop-types';
import React from 'react';
import NordnetLogo from './nordnetLogo';

function Logo(props) {
  return (
    <NordnetLogo
      className={props.className}
      style={props.style}
      height="100%"
      width={props.width}
      fill={props.iconColor}
      stroke={props.textColor}
    />
  );
}

Logo.defaultProps = {
  iconColor: '#00A9EC',
  textColor: '#222222',
  width: 130,
};

Logo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.number,
};

export default Logo;
