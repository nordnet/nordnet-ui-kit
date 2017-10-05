import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, Tooltip } from '../../';

export const styles = theme => {
  const { palette, typography, mixins } = theme;

  return {
    backgroundCircle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: ({ size }) => (size === 'sm' ? 45 : 70),
      width: ({ size }) => (size === 'sm' ? 45 : 70),
      borderRadius: '50%',
      backgroundColor: palette.color.grayLighter,
    },
    wrapper: {
      ...typography.primary,
      ...mixins.basicBoxSizing,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      marginTop: props => (props.size === 'sm' ? 20 : 30),
    },
    subText: {
      color: ({ qualified }) => (qualified ? palette.color.blueDark : palette.color.gray),
      fontSize: ({ size }) => (size === 'sm' ? 10 : 16),
      textAlign: 'center',
    },
  };
};

class InstrumentBadge extends React.Component {
  iconProps = (size, strokeWidth, padding) => ({
    strokeWidth,
    fill: 'currentColor',
    stroke: 'currentColor',
    style: {
      padding: size === 'sm' ? padding.sm : padding.md,
    },
  });

  renderQualifyBadge = () => {
    const { qualified, qualifyBadgeDisabled, size, classes } = this.props;

    if (qualifyBadgeDisabled) {
      return null;
    }
    return (
      <div className={classes.successFail}>
        {qualified
          ? <Icon.Checkmark {...this.iconProps(size, 2, { sm: 1, md: 0 })} />
          : <Icon.Close {...this.iconProps(size, 3, { sm: 3, md: 3 })} />}
      </div>
    );
  };

  renderInstrumentBadge = () => {
    const { qualified, instrumentLvl, subText, theme, size, classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.badge}>
          <Icon.Hexagon
            width={size === 'sm' ? 35 : 55}
            height={size === 'sm' ? 35 : 55}
            fill={qualified ? theme.palette.color.blueDark : theme.palette.color.gray}
          />
          <span className={classes.instrumentLvl}>{instrumentLvl}</span>
        </div>
        {this.renderQualifyBadge()}
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
      <div className={cn({ [classes.backgroundCircle]: showBackgroundCircle })} {...rest}>
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
  showBackgroundCircle: false,
  size: 'sm',
};

export { InstrumentBadge as Component };
export default injectSheet(styles)(InstrumentBadge);
