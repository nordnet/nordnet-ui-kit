import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, Tooltip } from '../../';
import omit from '../../utilities/omit';

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
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    hexagon: {
      color: ({ qualified }) => (qualified ? theme.palette.color.green : theme.palette.color.red),

      '$sm &': {
        width: 35,
        height: 35,
      },

      '$md &': {
        width: 55,
        height: 55,
      },
    },
    icon: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      color: palette.color.white,

      '$sm &': {
        '& > svg': {
          // Need to work out a way to control height and width for both
        },
      },

      '$md &': {
        '& > svg': {
          // Need to work out a way to control height and width for both
        },
      },
    },
    subText: {
      color: ({ qualified }) => (qualified ? palette.color.blueDark : palette.color.gray),
      textAlign: ({ subTextPlacement }) => (subTextPlacement === 'below' ? 'center' : 'left'),
      marginLeft: ({ subTextPlacement }) => (subTextPlacement === 'below' ? 0 : 4),

      '$sm &': {
        fontSize: ({ subTextFontSize }) => subTextFontSize || 10,
      },

      '$md &': {
        fontSize: ({ subTextFontSize }) => subTextFontSize || 16,
      },
    },
  };
};

const getIconProps = ({ strokeWidth }) => ({
  strokeWidth,
  fill: 'currentColor',
  stroke: 'currentColor',
});

class InstrumentBadge extends React.Component {
  renderQualifyBadge = () => {
    const { qualified, qualifyBadgeDisabled, size, classes } = this.props;

    if (qualifyBadgeDisabled) {
      return <Icon.ExclamationPoint {...getIconProps({ size, strokeWidth: 2 })} />;
    }
    return qualified
      ? <Icon.Checkmark {...getIconProps({ size, strokeWidth: 2 })} />
      : <Icon.ExclamationPoint className={classes.exclamationPoint} {...getIconProps({ size, strokeWidth: 2 })} />;
  };

  renderInstrumentBadge = () => {
    const { subText, classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.badgeWrapper}>
          <div className={classes.icon}>{this.renderQualifyBadge()}</div>
          <div className={classes.badge}>
            <Icon.Hexagon
              className={classes.hexagon}
              stroke="currentColor"
              fill="currentColor"
              width="100%"
              height="100%"
              strokeWidth={5}
            />
          </div>
        </div>
        <span className={classes.subText}>
          {subText}
        </span>
      </div>
    );
  };

  render() {
    const { tooltipContent, tooltipPlacement, showBackgroundCircle, size, className, classes } = this.props;
    return (
      <div
        className={cn(classes[size], className, { [classes.backgroundCircle]: showBackgroundCircle })}
        {...omit(
          this.props,
          'sheet',
          'classes',
          'theme',
          'qualified',
          'subText',
          'tooltipContent',
          'tooltipPlacement',
          'qualifyBadgeDisabled',
          'subTextPlacement',
          'subTextFontSize',
          'showBackgroundCircle',
        )}
      >
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
  subText: PropTypes.string,
  showBackgroundCircle: PropTypes.bool,
  size: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  // Props below used in dynamic stylesheets
  /* eslint-disable */
  theme: PropTypes.object.isRequired,
  subTextPlacement: PropTypes.oneOf(['below', 'right']),
  subTextFontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /* eslint-enable */
};

InstrumentBadge.defaultProps = {
  tooltipPlacement: 'above',
  qualified: false,
  qualifyBadgeDisabled: false,
  instrumentLvl: 0,
  subTextPlacement: 'below',
  showBackgroundCircle: false,
  size: 'sm',
};

export { InstrumentBadge as Component };
export default injectSheet(styles)(InstrumentBadge);
