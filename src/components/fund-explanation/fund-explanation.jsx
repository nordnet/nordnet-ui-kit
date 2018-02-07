import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon, theme } from '../../';

export const styles = ({ palette, typography }) => ({
  wrapper: {
    position: 'relative',
    width: '100%',
    minWidth: 370,
  },
  lineOverlayWrapper: {
    display: 'flex',
    flex: 1,
  },
  lineWrapper: {
    position: 'absolute',
    top: 2,
    zIndex: 1,
    width: '100%',
  },
  ellipseWrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    flex: 1,
    zIndex: 10,
  },
  dottedLineWrapper: {
    position: 'relative',
    width: '100%',
    height: 22,
  },
  bottomWrapper: {
    position: 'relative',
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  solidEllipseWrapper: {
    justifyContent: 'space-between',
  },
  dottedEllipseWrapper: {
    justifyContent: 'center',
    '& svg': {
      margin: [0, 6],
    },
  },
  bottomItemWrapper: {
    position: 'relative',
    width: 120,
  },
  textBox: {
    background: palette.color.blueDark,
    textAlign: 'center',
    width: '100%',
    borderRadius: 5,
    top: 5,
  },
  textBoxContent: {
    ...typography.primary,
    fontSize: 14,
    color: palette.color.white,
    fontWeight: typography.fontWeightLight,
    padding: 20,
    position: 'relative',
    wordWrap: 'break-word',
  },
  calendarText: {
    position: 'absolute',
    width: '100%',
    ...typography.primary,
    fontSize: 14,
    color: palette.color.grayDark,
    fontWeight: typography.fontWeightLight,
    textAlign: 'center',
    top: 34,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: [10, 'solid', 'transparent'],
    borderRight: [10, 'solid', 'transparent'],
    borderBottom: [10, 'solid', palette.color.blueDark],
    transform: 'rotate(90deg)',
    position: 'absolute',
    top: -4,
    left: 22,
  },
  arrowRight: {
    left: 'auto',
    right: 22,
    transform: 'rotate(-90deg)',
  },
});

function FundExplanation({ leftBoxText, calendarText, rightBoxText, className, classes }) {
  const ellipseProps = {
    width: 22,
    height: 22,
    fill: theme.palette.color.white,
    strokeWidth: 3,
    stroke: theme.palette.color.gray,
    viewBox: '0 0 26 26',
    cx: 13,
    cy: 13,
  };
  return (
    <div className={cn(classes.wrapper, className)}>
      <div className={classes.dottedLineWrapper}>
        <div className={classes.lineOverlayWrapper}>
          <div className={cn(classes.ellipseWrapper, classes.solidEllipseWrapper)}>
            <Icon.Ellipse {...ellipseProps} style={{ marginLeft: 16 }} />
            <Icon.Ellipse {...ellipseProps} style={{ marginRight: 16 }} />
          </div>
          <div className={cn(classes.ellipseWrapper, classes.dottedEllipseWrapper)}>
            <Icon.Ellipse {...ellipseProps} strokeDasharray={'6, 3'} />
            <Icon.Ellipse {...ellipseProps} strokeDasharray={'6, 3'} />
            <Icon.Ellipse {...ellipseProps} strokeDasharray={'6, 3'} />
            <Icon.Ellipse {...ellipseProps} strokeDasharray={'6, 3'} />
          </div>
        </div>
        <div className={classes.lineWrapper}>
          <svg height={10} style={{ width: '100%' }}>
            <rect width={'100%'} height={10} fill={theme.palette.color.grayLight} cx={0} cy={0} rx={5} ry={5} />
          </svg>
        </div>
      </div>
      <div className={classes.bottomWrapper}>
        <div className={classes.bottomItemWrapper}>
          <div className={classes.arrow} />
          <div className={classes.textBox}>
            <div className={classes.textBoxContent}>
              {leftBoxText}
            </div>
          </div>
        </div>
        <div className={classes.bottomItemWrapper}>
          <div className={classes.calendarText}>
            {calendarText}
          </div>
          <svg width="121" height="73" viewBox="0 0 121 73">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M9,4 L112,4 C116.970563,4 121,8.02943725 121,13 L121,64 C121,68.9705627 116.970563,73 112,73 L9,73 C4.02943725,73 6.08718376e-16,68.9705627 0,64 L0,13 C-6.08718376e-16,8.02943725 4.02943725,4 9,4 Z M13,25 L13,62 L107,62 L107,25 L13,25 Z"
                fill="#E4E4E7"
              />
              <rect fill="#CFCED5" x="23" y="0" width="9" height="16" rx="4.5" />
              <rect fill="#CFCED5" x="56" y="0" width="9" height="16" rx="4.5" />
              <rect fill="#CFCED5" x="89" y="0" width="9" height="16" rx="4.5" />
            </g>
          </svg>
        </div>
        <div className={classes.bottomItemWrapper}>
          <div className={cn(classes.arrow, classes.arrowRight)} />
          <div className={classes.textBox}>
            <div className={classes.textBoxContent}>
              {rightBoxText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FundExplanation.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  leftBoxText: PropTypes.string,
  calendarText: PropTypes.string,
  rightBoxText: PropTypes.string,
};

FundExplanation.defaultProps = {
  leftBoxText: '',
  calendarText: '',
  rightBoxText: '',
};

export { FundExplanation as Component };
export default injectSheet(styles)(FundExplanation);
