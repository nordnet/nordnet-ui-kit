// Warning this component is deprecated and will be removed in the next major release.
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, theme } from '../../';
import Calculator from './calculator';

export const styles = () => ({
  wrapper: {
    position: 'relative',
  },
  outerCircleWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  innerCircleWrapper: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
  },
  calculatorWrapper: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
  },
  shadowWrapper: {
    position: 'absolute',
  },
});

function CostInfoLogo({ width, className, classes }) {
  const shadowX = (width - parseInt(width * 0.68, 10)) / 2;

  return (
    <div
      className={cn(classes.wrapper, className)}
      style={{ width, height: parseInt(width * 1.1, 10) }}
    >
      <Calculator
        width={parseInt(width * 0.36, 10)}
        className={classes.calculatorWrapper}
        fill={theme.palette.color.white}
        operatorFill={theme.palette.color.grayDarkest}
        style={{
          top: parseInt(width * 0.32, 10),
          left: parseInt(width * 0.32, 10),
        }}
      />
      <Icon.Ellipse
        className={classes.innerCircleWrapper}
        style={{
          width: parseInt(width * 0.68, 10),
          height: parseInt(width * 0.68, 10),
          top: parseInt(width * 0.17, 10),
          left: parseInt(width * 0.17, 10),
        }}
        fill={theme.palette.color.blueDark}
      />
      <Icon.Ellipse
        className={classes.outerCircleWrapper}
        style={{ width: parseInt(width, 10), height: parseInt(width, 10) }}
        fill={theme.palette.color.grayLighter}
      />
      <div
        style={{
          position: 'absolute',
          height: parseInt(width * 0.06, 10),
          top: parseInt(width * 1.04, 10),
          left: shadowX,
        }}
      >
        <Icon.Ellipse
          className={classes.shadowWrapper}
          width={parseInt(width * 0.68, 10)}
          height={parseInt(width * 0.07, 10)}
          fill={theme.palette.color.gray}
        />
      </div>
    </div>
  );
}

CostInfoLogo.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
};

CostInfoLogo.defaultProps = {
  width: 100,
};

export { CostInfoLogo as Component };
export default injectSheet(styles)(CostInfoLogo);
