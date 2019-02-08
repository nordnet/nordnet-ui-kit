import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function MediumArrowDown({
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
        d="M14 .0814404l1.414214 1.3889597L7.707107 9.03988 0 1.4704001 1.414214.0814404l6.292893 6.1805201z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
}

MediumArrowDown.propTypes = {
  ...Icon.propTypes,
  fill: PropTypes.string,
};

MediumArrowDown.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 16 9',
};
