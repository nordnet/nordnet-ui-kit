import React, { PropTypes } from 'react';
import classNames from 'classnames';
import variables from '../../utilities/variables';
import rem from '../../utilities/rem';
import './spinner.scss';

function generateRgb(degree, limit) {
  const multiplier = 255 / limit;
  const value = Math.round(degree * multiplier, 10);

  return `rgb(${value}, ${value}, ${value})`;
}

function conicalGradient(size, limit) {
  const sectionSize = size / 2;
  const gradientSectionsA = [];
  const gradientSectionsB = [];
  const rotationMultiplier = Math.round((360 / limit), 10);

  for (let i = 0; i < limit; i++) {
    const rotation = i * rotationMultiplier;
    const item = (
      <rect
        key={ rotation }
        width={ sectionSize }
        height={ sectionSize }
        fill={ generateRgb(i, limit) }
        x={ sectionSize }
        transform={ `rotate(${rotation} ${sectionSize} ${sectionSize})` }
      />
    );

    if (rotation >= 180) {
      gradientSectionsA.push(item);
    } else {
      gradientSectionsB.push(item);
    }
  }

  return (
    <g className="spinner__gradient">
      <g>
        { gradientSectionsA.map(section => section) }
      </g>
      <g clipPath="url(#overlapClip)">
        { gradientSectionsB.map(section => section) }
      </g>
    </g>
  );
}

function Spinner({ className, size, color, gradientStops, strokeWidth }) {
  const stroke = strokeWidth || size / 8;
  const radius = size / 2;
  const maskId = `spinner__mask--${size}`;
  const style = {
    width: rem(`${size}px`),
    height: rem(`${size}px`),
  };

  return (
    <div className={ classNames('spinner', className) } style={ style }>
      <svg className="spinner__element" viewBox={ `0 0 ${size} ${size}` }>
        <defs>
          <clipPath id="overlapClip">
            <rect x={ radius } y="0" width={ radius } height={ size } />
          </clipPath>
          <mask id={ maskId } maskUnits="objectBoundingBox">
            <rect width={ size } height={ size } fill="#fff" />
            { conicalGradient(size, gradientStops) }
            <circle cx={ radius } cy={ radius } r={ radius - stroke } fill="#000" />
            <circle cx={ radius } cy={ stroke / 2 } r={ stroke / 2 } fill="#fff" />
          </mask>
        </defs>
        <circle className="spinner__circle" cx={ radius } cy={ radius } r={ radius } fill={ color } mask={ `url(#${maskId})` } />
      </svg>
    </div>
  );
}

Spinner.defaultProps = {
  size: 16,
  color: variables.colorPrimary,
  gradientStops: 30,
};

Spinner.propTypes = {
  className: PropTypes.string,
  /** Unitless pixel value */
  size: PropTypes.number,
  color: PropTypes.string,
  /** Lower values yield better performance at the risk of more banding */
  gradientStops: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Spinner;
