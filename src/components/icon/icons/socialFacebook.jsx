import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialFacebook({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={1} fill={fill} fillRule="evenodd">
        <path d="M15.1169528,0 L0.883047202,0 C0.395243055,0 0,0.395243055 0,0.883047202 L0,15.1169528 C0,15.604637 0.395243055,16 0.883047202,16 L8.54607447,16 L8.54607447,9.80398211 L6.460992,9.80398211 L6.460992,7.38924067 L8.54607447,7.38924067 L8.54607447,5.60845879 C8.54607447,3.54184058 9.80829843,2.4165399 11.6518468,2.4165399 C12.534894,2.4165399 13.2939069,2.48230384 13.5150584,2.51167879 L13.5150584,4.67139763 L12.2364684,4.67199712 C11.2338232,4.67199712 11.0397086,5.14841098 11.0397086,5.84753498 L11.0397086,7.38924067 L13.4308902,7.38924067 L13.1195156,9.80398211 L11.0397086,9.80398211 L11.0397086,16 L15.1169528,16 C15.604637,16 16,15.604637 16,15.1169528 L16,0.883047202 C16,0.395243055 15.604637,0 15.1169528,0" />
      </g>
    </svg>
  );
}

SocialFacebook.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialFacebook.defaultProps = Icon.defaultProps;
