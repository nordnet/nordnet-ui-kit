// Warning this component is deprecated and will be removed in the next major release.
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, Tooltip } from '../..';
import omit from '../../utilities/omit';
import { deprecatedComponent } from '../deprecate';

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

      height: 45,
      width: 45,

      [mixins.media('md')]: {
        height: 70,
        width: 70,
      },

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
      alignSelf: 'center',
      justifyContent: 'center',
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 39,
      height: 39,

      [mixins.media('md')]: {
        width: 55,
        height: 55,
      },

      '$sm &': {
        width: 35,
        height: 35,
      },

      '$md &': {
        width: 55,
        height: 55,
      },
    },
    hexagon: {
      color: ({
        qualified,
        qualifiedColor = theme.palette.color.green,
        unqualifiedColor = theme.palette.color.red,
      }) => (qualified ? qualifiedColor : unqualifiedColor),
    },
    iconWrapper: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: palette.color.white,

      '& > svg': {
        width: 15,
        height: 18,
      },

      [mixins.media('md')]: {
        '& > svg': {
          width: 24,
          height: 18,
        },
      },

      '$sm &': {
        '& > svg': {
          width: 15,
          height: 18,
        },
      },

      '$md &': {
        '& > svg': {
          width: 24,
          height: 18,
        },
      },
    },
    exclamationPoint: {
      width: 22,
      height: 22,
      '& > svg': {
        width: 22,
        height: 22,
      },
      [mixins.media('md')]: {
        width: 28,
        height: 34,
        '& > svg': {
          width: 28,
          height: 34,
        },
      },

      '$sm &': {
        width: 22,
        height: 22,
        '& > svg': {
          width: 22,
          height: 22,
        },
      },

      '$md &': {
        width: 28,
        height: 34,
        '& > svg': {
          width: 28,
          height: 34,
        },
      },
    },
    subText: {
      color: ({
        qualified,
        qualifiedColor = palette.color.green,
        unqualifiedColor = palette.color.red,
      }) => (qualified ? qualifiedColor : unqualifiedColor),
      textAlign: ({ subTextPlacement }) => (subTextPlacement === 'below' ? 'center' : 'left'),
      marginLeft: ({ subTextPlacement }) => (subTextPlacement === 'below' ? 0 : 4),
      fontSize: ({ subTextFontSize = 10 }) => subTextFontSize,
      [mixins.media('md')]: {
        fontSize: ({ subTextFontSize = 16 }) => subTextFontSize,
      },
      '$sm &': {
        fontSize: ({ subTextFontSize = 10 }) => subTextFontSize,
      },

      '$md &': {
        fontSize: ({ subTextFontSize = 16 }) => subTextFontSize,
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
    const { qualified, size, classes } = this.props;

    return qualified ? (
      <Icon.Checkmark {...getIconProps({ size, strokeWidth: 1 })} />
    ) : (
      <div className={classes.exclamationPoint}>
        <Icon.ExclamationPoint {...getIconProps({ size, strokeWidth: 2 })} />
      </div>
    );
  };

  renderInstrumentBadge = () => {
    const { subText, classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.badgeWrapper}>
          <div className={classes.iconWrapper}>
            <div className={classes.icon}>{this.renderQualifyBadge()}</div>
          </div>
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
        <span className={classes.subText}>{subText}</span>
      </div>
    );
  };

  render() {
    const {
      tooltipContent,
      tooltipPlacement,
      showBackgroundCircle,
      size,
      className,
      classes,
    } = this.props;
    return (
      <div
        className={cn(classes[size], className, {
          [classes.backgroundCircle]: showBackgroundCircle,
        })}
        {...omit(
          this.props,
          'sheet',
          'classes',
          'theme',
          'qualified',
          'subText',
          'tooltipContent',
          'tooltipPlacement',
          'subTextPlacement',
          'subTextFontSize',
          'showBackgroundCircle',
          'qualifiedColor',
          'unqualifiedColor',
        )}
      >
        {tooltipContent ? (
          <Tooltip
            style={{ display: 'flex', alignItems: 'center' }}
            content={tooltipContent}
            placement={tooltipPlacement}
          >
            {this.renderInstrumentBadge()}
          </Tooltip>
        ) : (
          this.renderInstrumentBadge()
        )}
      </div>
    );
  }
}

InstrumentBadge.propTypes = {
  tooltipContent: PropTypes.node,
  tooltipPlacement: PropTypes.oneOf(['above', 'below', 'right', 'left']),
  qualified: PropTypes.bool,
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
  qualifiedColor: PropTypes.string,
  unqualifiedColor: PropTypes.string,
  /* eslint-enable */
};

InstrumentBadge.defaultProps = {
  tooltipPlacement: 'above',
  qualified: false,
  subTextPlacement: 'below',
  showBackgroundCircle: false,
  size: '',
};

export { InstrumentBadge as Component };
// prettier-ignore
export default 
  injectSheet(styles)(
  deprecatedComponent(
    'InstrumentBadge',
    'See https://github.com/nordnet/nordnet-ui-kit/blob/v3.0.0/docs/migrations/v3.0.0.md for migration guide.',
  )
  (InstrumentBadge));
