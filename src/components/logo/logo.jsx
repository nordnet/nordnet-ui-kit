import React, { PropTypes } from 'react';
import defaultLogo from './nordnet-logo-default.svg';

function Logo(props) {
  const logos = {
    default: defaultLogo,
  };
  const NordnetLogo = logos[props.type];
  const logoStyle = {
    display: 'inline-flex',
    width: props.width,
  };
  return (<span {...props} style={logoStyle}><NordnetLogo /></span>);
}

Logo.defaultProps = {
  type: 'default',
  width: 130,
};

Logo.propTypes = {
  type: PropTypes.oneOf(['default']),
  width: PropTypes.number,
};

export default Logo;
