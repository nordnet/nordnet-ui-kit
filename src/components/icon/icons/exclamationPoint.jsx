import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function ExclamationPoint({
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
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g fill={fill}>
          <path
            d="M8.44459971,10.4000001 L7.57323041,10.4000001 L7.1499939,3.45356103 C7.32913335,3.15302336 7.6154404,3.0018418 8.00891506,3.00001633 C8.40238972,2.99819087 8.68869677,3.14937244 8.86783622,3.45356103 L8.44459971,10.4000001 Z M7.2506163,12.2027673 C7.2506163,11.7009198 7.49957647,11.4499998 7.99750427,11.4499998 C8.23816937,11.4499998 8.42385216,11.5145748 8.55455821,11.6437267 C8.68526426,11.7728787 8.7506163,11.9592237 8.7506163,12.2027673 C8.7506163,12.4389309 8.68422693,12.6225084 8.55144618,12.7535053 C8.41866543,12.8845023 8.23401998,12.9499998 7.99750427,12.9499998 C7.78173556,12.9499998 7.6033141,12.8918823 7.46223456,12.7756456 C7.32115502,12.6594088 7.2506163,12.4684513 7.2506163,12.2027673 Z"
            id="shape"
          />
        </g>
      </g>
    </svg>
  );
}

ExclamationPoint.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

ExclamationPoint.defaultProps = Icon.defaultProps;
