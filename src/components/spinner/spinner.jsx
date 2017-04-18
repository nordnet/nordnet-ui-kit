import React, { PropTypes } from 'react';
import classNames from 'classnames';
import SpinnerStyles from './spinner-styles';

function generateRgb(degree, limit) {
  const multiplier = 255 / limit;
  const value = Math.round(degree * multiplier, 10);

  return `rgb(${value}, ${value}, ${value})`;
}

function conicalGradient(size, limit, clipPathId) {
  const sectionSize = size / 2;
  const gradientSectionsA = [];
  const gradientSectionsB = [];
  const rotationMultiplier = 360 / limit;

  for (let i = 0; i < limit; i += 1) {
    const rotation = i * rotationMultiplier;
    const item = (
      <rect
        key={rotation}
        width={sectionSize}
        height={sectionSize}
        fill={generateRgb(i, limit)}
        x={sectionSize}
        transform={`rotate(${rotation} ${sectionSize} ${sectionSize})`}
      />
    );

    if (i > (limit / 2)) {
      gradientSectionsB.push(item);
    } else {
      gradientSectionsA.push(item);
    }
  }

  return (
    <g className="spinner__gradient">
      <g>
        { gradientSectionsA.map(section => section) }
      </g>
      <g clipPath={`url(#${clipPathId})`}>
        { gradientSectionsB.map(section => section) }
      </g>
    </g>
  );
}

function renderCircleAsHtml(radius, color, maskId) {
  return {
    __html: `<circle class="spinner__circle" cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" mask="url(#${maskId})"></circle>`,
  };
}

function Spinner({ className, size, color, gradientStops, strokeWidth, style, ...rest }, { styleManager }) {
  const classes = styleManager.render(SpinnerStyles);
  const usedColor = color || styleManager.theme.palette.variant.primary;
  const stroke = strokeWidth || size / 8;
  const radius = size / 2;
  const maskId = `spinner__mask--${size}-${stroke}-${gradientStops}`;
  const clipPathId = `spinner__clip-path--${size}`;
  const wrapperStyle = {
    width: size,
    height: size,
    ...style,
  };

  return (
    <div {...rest} className={classNames(classes.spinner, className)} style={wrapperStyle}>
      <svg className={classes.element} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <clipPath id={clipPathId}>
            <rect x="0" y="0" width={radius} height={size} />
          </clipPath>
          <mask id={maskId} maskUnits="objectBoundingBox">
            <rect width={size} height={size} fill="#fff" />
            { conicalGradient(size, gradientStops, clipPathId) }
            <circle cx={radius} cy={radius} r={radius - stroke} fill="#000" />
            <circle cx={radius} cy={stroke / 2} r={stroke / 2} fill="#fff" />
          </mask>
        </defs>
        <g dangerouslySetInnerHTML={renderCircleAsHtml(radius, usedColor, maskId)} />
      </svg>
    </div>
  );
}

Spinner.defaultProps = {
  size: 16,
  gradientStops: 20,
};

Spinner.propTypes = {
  className: PropTypes.string,
  /** Unitless pixel value */
  size: PropTypes.number,
  color: PropTypes.string,
  /** Lower values yield better performance at the risk of more banding */
  gradientStops: PropTypes.number,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
};

Spinner.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Spinner;
