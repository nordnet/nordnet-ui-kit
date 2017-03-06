import React, { PropTypes } from 'react';
import defaultLogo from './nordnet-logo-default.svg';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import './logo.scss';

function Logo(props) {
  const logos = {
    default: defaultLogo,
  };
  const classes = classNames(
    'logo',
    `logo--${kebabCase(props.type)}`,
    props.className
  );

  return <span { ...props } className={ classes } dangerouslySetInnerHTML={ { __html: logos[props.type] } } />;
}

Logo.defaultProps = {
  type: 'default',
};

Logo.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
