import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, Tooltip } from '../../';

export const styles = theme => {
  const { palette, typography, mixins } = theme;

  return {
    sm: {},
    md: {},
    backgroundCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      backgroundColor: palette.color.grayLighter,

      '&$sm': {
        height: 45,
        width: 45,
      },

      '&$md': {
        height: 70,
        width: 70,
      },
    },
    wrapper: {
      ...typography.primary,
      ...mixins.basicBoxSizing,
      display: 'flex',
      flexDirection: ({ subTextPlacement }) => (subTextPlacement === 'below' ? 'column' : 'row'),
      alignItems: 'center',
    },
    badgeWrapper: {
      display: 'flex',
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    icon: {
      color: ({ qualified }) => (qualified ? theme.palette.color.blueDark : theme.palette.color.gray),

      '$sm &': {
        width: 35,
        height: 35,
      },

      '$md &': {
        width: 55,
        height: 55,
      },
    },
    instrumentLvl: {
      ...typography.secondary,
      color: palette.color.white,
      position: 'absolute',

      '$sm &': {
        fontSize: 12,
      },

      '$md &': {
        fontSize: 26,
      },
    },
    successFail: {
      backgroundColor: ({ qualified }) => (qualified ? palette.color.green : palette.color.red),
      color: palette.color.white,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',

      '$sm &': {
        height: 13,
        width: 13,
        marginLeft: 21,
        marginTop: 19,
      },

      '$md &': {
        height: 21,
        width: 21,
        marginLeft: 33,
        marginTop: 29,
      },
    },
    subText: {
      color: ({ qualified }) => (qualified ? palette.color.blueDark : palette.color.gray),
      textAlign: 'center',

      '$sm &': {
        fontSize: 10,
      },

      '$md &': {
        fontSize: 16,
      },
    },
  };
};

const getIconProps = ({ size, strokeWidth, padding }) => ({
  strokeWidth,
  fill: 'currentColor',
  stroke: 'currentColor',
  style: {
    padding: size === 'sm' ? padding.sm : padding.md,
  },
});

class InstrumentBadge extends React.Component {
  renderQualifyBadge = () => {
    const { qualified, qualifyBadgeDisabled, size, classes } = this.props;

    if (qualifyBadgeDisabled) {
      return null;
    }
    return (
      <div className={classes.successFail}>
        {qualified
          ? <Icon.Checkmark {...getIconProps({ size, strokeWidth: 2, padding: { sm: 1, md: 0 } })} />
          : <Icon.Close {...getIconProps({ size, strokeWidth: 3, padding: { sm: 3, md: 3 } })} />}
      </div>
    );
  };

  renderInstrumentBadge = () => {
    const { instrumentLvl, subText, classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.badgeWrapper}>
          <div className={classes.badge}>
            <Icon.Hexagon className={classes.icon} stroke="currentColor" fill="currentColor" width="100%" height="100%" strokeWidth={5} />
            <span className={classes.instrumentLvl}>{instrumentLvl}</span>
          </div>
          {this.renderQualifyBadge()}
        </div>
        <span className={classes.subText}>
          {subText}
        </span>
      </div>
    );
  };

  render() {
    const {
      tooltipContent,
      tooltipPlacement,
      qualified,
      qualifyBadgeDisabled,
      instrumentLvl,
      subText,
      showBackgroundCircle,
      size,
      classes,
      theme,
      ...rest
    } = this.props;
    return (
      <div className={cn(classes[size], { [classes.backgroundCircle]: showBackgroundCircle })} {...rest}>
        {tooltipContent
          ? <Tooltip style={{ display: 'flex', alignItems: 'center' }} content={tooltipContent} placement={tooltipPlacement}>
              {this.renderInstrumentBadge()}
            </Tooltip>
          : this.renderInstrumentBadge()}
      </div>
    );
  }
}

InstrumentBadge.propTypes = {
  tooltipContent: PropTypes.node,
  tooltipPlacement: PropTypes.oneOf(['above', 'below', 'right', 'left']),
  qualified: PropTypes.bool,
  qualifyBadgeDisabled: PropTypes.bool,
  instrumentLvl: PropTypes.number,
  subText: PropTypes.string,
  subTextPlacement: PropTypes.oneOf(['below', 'right']),
  showBackgroundCircle: PropTypes.bool,
  size: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
};

InstrumentBadge.defaultProps = {
  tooltipContent: '',
  tooltipPlacement: 'above',
  qualified: false,
  qualifyBadgeDisabled: false,
  instrumentLvl: 0,
  subText: '',
  subTextPlacement: 'below',
  showBackgroundCircle: false,
  size: 'sm',
};

export { InstrumentBadge as Component };
export default injectSheet(styles)(InstrumentBadge);
