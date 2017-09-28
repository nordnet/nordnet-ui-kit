import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { Icon } from '../../';

export const styles = theme => {
  const { palette, typography } = theme;

  const getHexBorderLeftRight = ({ size }) => `${size === 'sm' ? 13 : 21}px solid transparent`;
  const getHexBorderTopBottom = ({ size, qualified }) =>
    `${size === 'sm' ? 7 : 12}px solid ${qualified ? palette.color.blueDark : palette.color.gray}`;

  return {
    badgeCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      width: 70,
      borderRadius: 35,
      backgroundColor: palette.color.grayLighter,
    },
    badgeWrapper: {
      ...typography.primary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    badgeSuccess: {
      backgroundColor: '#3DB717',
      color: palette.color.white,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({ size }) => (size === 'sm' ? 13 : 21),
      width: ({ size }) => (size === 'sm' ? 13 : 21),
      borderRadius: ({ size }) => (size === 'sm' ? 7 : 12),
      marginLeft: props => (props.size === 'sm' ? 11 : 17),
      marginTop: props => (props.size === 'sm' ? 16 : 26),
    },
    hex: {
      ...typography.secondary,
      fontSize: ({ size }) => (size === 'sm' ? 12 : 24),
      backgroundColor: ({ qualified }) => (qualified ? palette.color.blueDark : palette.color.gray),
      width: ({ size }) => (size === 'sm' ? 26 : 43),
      height: ({ size }) => (size === 'sm' ? 15 : 25),
      color: palette.color.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hexTop: {
      width: 0,
      borderBottom: getHexBorderTopBottom,
      borderLeft: getHexBorderLeftRight,
      borderRight: getHexBorderLeftRight,
    },
    hexBottom: {
      width: 0,
      borderTop: getHexBorderTopBottom,
      borderLeft: getHexBorderLeftRight,
      borderRight: getHexBorderLeftRight,
    },
    subText: {
      color: palette.color.grayDarker,
      fontSize: ({ size }) => (size === 'sm' ? 10 : 16),
      textAlign: 'center',
    },
  };
};

function InstrumentBadge({ qualified, instrumentLvl, subText, backgroundCircle, size, classes, ...rest }) {
  return (
    <div className={backgroundCircle ? classes.badgeCircle : null} {...rest}>
      <div className={classes.badgeWrapper} classNameProp>
        {qualified ? <div className={classes.badgeSuccess}><Icon.Checkmark fill="white" stroke="white" /></div> : null}
        <div className={classes.badge}>
          <div className={classes.hexTop} />
          <div className={classes.hex}>
            {instrumentLvl}
          </div>
          <div className={classes.hexBottom} />
        </div>
        <span className={classes.subText}>
          {subText}
        </span>
      </div>
    </div>
  );
}

InstrumentBadge.propTypes = {
  qualified: PropTypes.bool,
  instrumentLvl: PropTypes.number,
  subText: PropTypes.string,
  backgroundCircle: PropTypes.bool,
  size: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

InstrumentBadge.defaultProps = {
  qualified: false,
  instrumentLvl: 0,
  subText: '',
  backgroundCircle: false,
  size: 'sm',
};

export { InstrumentBadge as Component };
export default injectSheet(styles)(InstrumentBadge);
