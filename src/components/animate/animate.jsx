import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styles from './animate-styles';
import easings from '../../styles/transitions/easings';
import durations from '../../styles/transitions/durations';

function Animate({
  classes,
  className,
  children,
  type,
  enterTime,
  leaveTime,
  transitionEnterTimeout,
  transitionLeaveTimeout,
  easingEnterFunction,
  easingLeaveFunction,
  estimatedHeight,
}) {
  return (
    <CSSTransitionGroup
      component="div"
      className={cn(classes[type], className)}
      transitionName={classes[type]}
      transitionEnterTimeout={enterTime}
      transitionLeaveTimeout={leaveTime}
    >
      {children}
    </CSSTransitionGroup>
  );
}

Animate.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['height']).isRequired,
  enterTime: PropTypes.number.isRequired,
  leaveTime: PropTypes.number.isRequired,
  transitionEnterTimeout: PropTypes.string,
  transitionLeaveTimeout: PropTypes.string,
  easingEnterFunction: PropTypes.string,
  easingLeaveFunction: PropTypes.string,
  estimatedHeight: PropTypes.number,
};

Animate.defaultProps = {
  type: 'height',
  enterTime: 200,
  leaveTime: 200,
  transitionEnterTimeout: durations.shorter,
  transitionLeaveTimeout: durations.shortest,
  easingEnterFunction: easings.easeIn,
  easingLeaveFunction: easings.easeOut,
  estimatedHeight: 500,
};

export default injectSheet(styles)(Animate);
