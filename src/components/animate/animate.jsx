import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import modifierHeight from './modifierHeight';

class Animate extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.idNbr = Math.round(Math.random() * 1000);
    this.animationName = `${this.props.type}-animation-${this.idNbr}`;
    this.classes = this.context.styleManager.render(
      createStyleSheet(`Animate_${this.animationName}`, () => {
        switch (this.props.type) {
          case 'height':
            return {
              root: {
                ...modifierHeight({
                  classPrefixSpace: true,
                  name: this.animationName,
                  estimatedHeight: this.props.estimatedHeight,
                  transitionEnterTimeout: this.props.enterTime,
                  transitionLeaveTimeout: this.props.leaveTime,
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
    return (
      <CSSTransitionGroup
        className={cn(this.classes.root, this.props.className)}
        transitionName={this.animationName}
        transitionEnterTimeout={this.props.enterTime}
        transitionLeaveTimeout={this.props.leaveTime}
      >
        {this.props.children}
      </CSSTransitionGroup>
    );
  }
}

Animate.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['height']).isRequired,
  enterTime: PropTypes.number.isRequired,
  leaveTime: PropTypes.number.isRequired,
  estimatedHeight: PropTypes.number,
};

Animate.defaultProps = {
  type: 'height',
  enterTime: 200,
  leaveTime: 200,
  estimatedHeight: 500,
};

Animate.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Animate;
