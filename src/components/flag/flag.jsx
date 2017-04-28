import React, { PropTypes } from 'react';
import flags from './flags';

function Flag({
  className,
  style,
  countryCode,
  secondaryCountryCode,
  size,
  ...rest
}) {
  const PrimarySvgFlag = flags[countryCode.toLowerCase()];
  const SecondarySvgFlag = secondaryCountryCode ? flags[secondaryCountryCode.toLowerCase()] : null;
  // width / height ratio of our SVGs are 4 / 3
  const width = size * (4 / 3);
  const height = size;
  const circleSize = size / 2.1;
  const canadianLeftPos = -size * (3 / 16);

  const styles = Object.assign({
    display: 'inline-block',
    position: 'relative',
    width: size,
    height: size,
    clipPath: `circle(${circleSize}px)`,
  }, style);

  const primaryStyling = Object.assign({
    width,
    height,
    position: 'absolute',
    top: '0',
    left: countryCode === 'ca' ? `${canadianLeftPos}px` : 0, // Position canadian flag better
  });

  const secondaryStyling = Object.assign(
    {},
    primaryStyling,
    {
      clipPath: `polygon(${size}px ${size}px, 0px ${size}px, ${size}px 0px, ${size}px ${size}px)`,
      left: secondaryCountryCode === 'ca' ? `${canadianLeftPos}px` : 0,
    },
  );

  return (
    <span
      className="flag"
      style={styles}
      {...rest}
    >
      <PrimarySvgFlag style={primaryStyling} />
      { SecondarySvgFlag ? <SecondarySvgFlag style={secondaryStyling} /> : null }
    </span>
  );
}

Flag.defaultProps = {
  size: 32,
};

const unNest = (acc, i) => acc.concat(i);
const dupInUpperCase = arr => arr.map(code => [code, code.toUpperCase()]).reduce(unNest, []);

const countryCodes = dupInUpperCase(['ca', 'de', 'dk', 'fi', 'no', 'se', 'us']);


Flag.propTypes = {
  className: PropTypes.string,
  /** A valid 2-character country code */
  countryCode: PropTypes.oneOf(countryCodes),
  /** A valid 2-character country code */
  secondaryCountryCode: PropTypes.oneOf(countryCodes),
  /** Unitless pixel value */
  size: PropTypes.number,
  style: PropTypes.object,
};

export default Flag;
