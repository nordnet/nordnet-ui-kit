import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './animate-styles';
import easings from '../../styles/transitions/easings';
// import durations from '../../styles/transitions/durations';

const items = (children, classNames, timeout) =>
  children.map(child => (
    <CSSTransition key={child.id} classNames={classNames} timeout={timeout}>
      {child}
    </CSSTransition>
  ));

function Animate({
  classes,
  className,
  children,
  type,
  enterTime,
  exitTime /* easingEnterFunction, easingExitFunction, estimatedHeight */,
}) {
  const classNames = {
    enter: classes[`${type}Enter`],
    enterActive: classes[`${type}EnterActive`],
    exit: classes[`${type}Exit`],
    exitActive: classes[`${type}ExitActive`],
  };
  const timeout = { enter: enterTime, exit: exitTime };

  return (
    <TransitionGroup className={cn(classes[type], className)}>
      {items(React.Children.toArray(children), classNames, timeout)}
    </TransitionGroup>
  );
}

Animate.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['height']).isRequired,
  enterTime: PropTypes.number.isRequired,
  exitTime: PropTypes.number.isRequired,
  easingEnterFunction: PropTypes.string,
  easingExitFunction: PropTypes.string,
  estimatedHeight: PropTypes.number,
};

Animate.defaultProps = {
  type: 'height',
  enterTime: 200,
  exitTime: 200,
  easingEnterFunction: easings.easeIn,
  easingExitFunction: easings.easeOut,
  estimatedHeight: 500,
};

export default injectSheet(styles)(Animate);
