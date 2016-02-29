import React, { PropTypes } from 'react';
import defaultLogo from './nordnet-logo-default.svg';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import './logo.scss';

function Logo(props) {
  const type = 'default' || props.type;
  const logos = {
    default: defaultLogo,
  };
  const classes = classNames(
    'logo',
    `logo--${ kebabCase(type) }`,
    props.className
  );

  return <span { ...props } className={ classes } dangerouslySetInnerHTML={{ __html: logos[type] }} />;
}

Logo.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
