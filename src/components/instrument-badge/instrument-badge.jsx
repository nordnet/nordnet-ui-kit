import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { Icon } from '../../';

export const styles = theme => {
  const { palette, typography } = theme;

  return {
    backgroundCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      width: 70,
      borderRadius: 35,
      backgroundColor: palette.color.grayLighter,
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    instrumentLvl: {
      ...typography.secondary,
      fontSize: ({ size }) => (size === 'sm' ? 12 : 24),
      width: ({ size }) => (size === 'sm' ? 26 : 43),
      height: ({ size }) => (size === 'sm' ? 15 : 25),
      color: palette.color.white,
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      ...typography.primary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    successFail: {
      backgroundColor: ({ qualified }) => (qualified ? palette.color.green : palette.color.red),
      color: palette.color.white,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({ size }) => (size === 'sm' ? 13 : 21),
      width: ({ size }) => (size === 'sm' ? 13 : 21),
      borderRadius: ({ size }) => (size === 'sm' ? 7 : 12),
      marginLeft: props => (props.size === 'sm' ? 10 : 16),
      marginTop: props => (props.size === 'sm' ? 16 : 26),
    },
    subText: {
      color: palette.color.grayDarker,
      fontSize: ({ size }) => (size === 'sm' ? 10 : 16),
      textAlign: 'center',
      paddingTop: 2,
    },
  };
};

const iconProps = (size, strokeWidth, padding) => ({
  strokeWidth,
  fill: 'white',
  stroke: 'white',
  style: {
    padding: size === 'sm' ? padding.sm : padding.md,
  },
});

function InstrumentBadge({ qualified, instrumentLvl, subText, backgroundCircle, size, classes, theme, ...rest }) {
  return (
    <div className={backgroundCircle ? classes.backgroundCircle : null} {...rest}>
      <div className={classes.wrapper}>
        <div className={classes.badge}>
          <Icon.Hexagon
            text={instrumentLvl}
            fontFamily={theme.typography.primary.fontFamily}
            fontFill={theme.palette.color.white}
            width={size === 'sm' ? 27 : 45}
            height={size === 'sm' ? 27 : 45}
            fill={qualified ? theme.palette.color.blueDark : theme.palette.color.gray}
          />
        </div>
        <div className={classes.successFail}>
          {qualified
            ? <Icon.Checkmark {...iconProps(size, 2, { sm: 2, md: 4 })} />
            : <Icon.Close {...iconProps(size, 3, { sm: 3, md: 6 })} />}
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
  theme: PropTypes.object.isRequired,
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
