import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function File({
  stroke,
  fill,
  strokeWidth,
  extension,
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
        <path
          d="M17.0526316,16.5789474 C17.0526316,16.8404211 16.8404211,17.0526316 16.5789474,17.0526316 L4.26315789,17.0526316 C4.00168421,17.0526316 3.78947368,16.8404211 3.78947368,16.5789474 L3.78947368,1.42105263 C3.78947368,1.15957895 4.00168421,0.947368421 4.26315789,0.947368421 L12.3157895,0.947368421 L12.3157895,4.26315789 C12.3157895,5.04663158 12.9533684,5.68421053 13.7368421,5.68421053 L17.0526316,5.68421053 L17.0526316,16.5789474 Z M16.8565263,4.73684211 L13.7368421,4.73684211 C13.4753684,4.73684211 13.2631579,4.52463158 13.2631579,4.26315789 L13.2631579,1.14347368 L16.8565263,4.73684211 Z M17.8616842,4.40147368 L13.5985263,0.138315789 C13.5094737,0.0492631579 13.3891579,0 13.2631579,0 L4.26315789,0 C3.47968421,0 2.84210526,0.637578947 2.84210526,1.42105263 L2.84210526,16.5789474 C2.84210526,17.3624211 3.47968421,18 4.26315789,18 L16.5789474,18 C17.3624211,18 18,17.3624211 18,16.5789474 L18,4.73684211 C18,4.61084211 17.9497895,4.49052632 17.8616842,4.40147368 Z"
          fill={fill}
        />
        {extension && (
          <g transform="translate(0.000000, 7.578947)">
            <rect
              fill={fill}
              x="0"
              y="0"
              width={1.9 * 2 + 3.6 * extension.length}
              height="8"
              rx="1"
            />
            <text fontFamily="monospace" fontSize="6" fontWeight="500" fill="#FFFFFF">
              <tspan x="1.9" y="6">
                {extension}
              </tspan>
            </text>
          </g>
        )}
      </g>
    </svg>
  );
}

File.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  extension: PropTypes.string,
};

File.defaultProps = {
  ...Icon.defaultProps,
  viewBox: '0 0 18 18',
};
