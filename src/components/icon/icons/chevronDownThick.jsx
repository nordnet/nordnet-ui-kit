import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ChevronDownThick({
  fill,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <path
        d="M7.2975097.29267137l1.4137697 1.41465726L4.5021973 5.91377.2931151 1.70732863 1.7068849.29267137 4.5021973 3.08623z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

ChevronDownThick.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

ChevronDownThick.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 9 6',
};
