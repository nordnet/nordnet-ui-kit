import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import modifierHeight from './modifierHeight';
import easings from '../../styles/transitions/easings';

class Animate extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.classes = this.context.styleManager.render(
      createStyleSheet(`Animate-${props.animationName}`, () => {
        switch (this.props.type) {
          case 'height':
            return {
              root: {
                ...modifierHeight({
                  classPrefixSpace: true,
                  name: props.animationName,
                  estimatedHeight: this.props.estimatedHeight,
                  transitionEnterTimeout: this.props.enterTime,
                  transitionLeaveTimeout: this.props.leaveTime,
                  easingEnterFunction: this.props.easingEnterFunction,
                  easingLeaveFunction: this.props.easingLeaveFunction,
                }),
              },
            };
          default:
            return { root: {} };
        }
      }),
    );
  }

  render() {
    if (!this.props.animationName) {
      // Force users to set animationName to render anything
      return null;
    }
    return (
      <CSSTransitionGroup
        className={cn(this.classes.root, this.props.className)}
        transitionName={this.props.animationName}
        transitionEnterTimeout={this.props.enterTime}
        transitionLeaveTimeout={this.props.leaveTime}
      >
        {this.props.children ? <div>{this.props.children}</div> : null}
      </CSSTransitionGroup>
    );
  }
}

Animate.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** This needs to be set in order for the component to render anything */
  animationName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['height']).isRequired,
  enterTime: PropTypes.number.isRequired,
  leaveTime: PropTypes.number.isRequired,
  easingEnterFunction: PropTypes.string,
  easingLeaveFunction: PropTypes.string,
  estimatedHeight: PropTypes.number,
};

Animate.defaultProps = {
  type: 'height',
  enterTime: 200,
  leaveTime: 200,
  easingEnterFunction: easings.easeIn,
  easingLeaveFunction: easings.easeOut,
  estimatedHeight: 500,
};

Animate.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Animate;
