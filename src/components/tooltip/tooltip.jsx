import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import classnames from 'classnames';
import Questionmark from '../icon/icons/questionmark';
import styles from './tooltip-styles';

class Tooltip extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hover: false,
      toggled: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.checkPosition = {
      above: rect => rect.top > 0,
      left: rect => rect.left > 0 && this.checkPosition.below(rect) && this.checkPosition.above(rect),
      right: rect =>
        (window.innerWidth || document.documentElement.clientWidth) - rect.right > 0 &&
        this.checkPosition.below(rect) &&
        this.checkPosition.above(rect),
      below: rect => (window.innerHeight || document.documentElement.clientHeight) - rect.bottom > 0,
    };

    this.placement = props.placement;
    this.classes = this.props.classes;
    this.left = null;
    this.renderPopup = this.renderPopup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('touchstart', this.handleClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.hover !== this.state.hover || nextState.toggled !== this.state.toggled || nextProps.children !== this.props.children;
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('touchstart', this.handleClick);
  }

  getPlacement(placement = 'below') {
    const rect = this.popup.getBoundingClientRect();

    // Try the position last used
    if (this.placement && this.checkPosition[this.placement](rect)) {
      return this.placement;
    }

    // Try the chosen position
    if (this.checkPosition[placement](rect)) {
      return placement;
    }

    // Try figure out a new position that will fit, otherwise use default
    if (this.checkPosition.below(rect)) {
      return 'below';
    } else if (this.checkPosition.above(rect)) {
      return 'above';
    } else if (this.checkPosition.right(rect)) {
      return 'right';
    } else if (this.checkPosition.left(rect)) {
      return 'left';
    }

    return 'below';
  }

  handleClick({ target } = {}) {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.handleClickOutside();
    }
  }

  handleClickOutside() {
    if (this.state.toggled) {
      this.setState({
        toggled: false,
      });
    }
  }

  toggleShow() {
    if (!this.props.sticky) {
      return;
    }

    this.setState({
      toggled: !this.state.toggled,
      hover: false,
    });
  }

  mouseEnter() {
    if (!this.state.toggled) {
      this.setState({
        hover: true,
      });
    }
  }

  mouseLeave() {
    if (!this.state.toggled) {
      this.setState({
        hover: false,
      });
    }
  }

  renderPopup(content, placement, tooltipStyle) {
    if (this.container && this.left === null && (placement === 'below' || placement === 'above')) {
      const popupRect = this.popup.getBoundingClientRect();
      if (popupRect.left < 0) {
        this.left = 10 - popupRect.left;
      } else if (popupRect.right > window.innerWidth) {
        this.left = -(popupRect.right - window.innerWidth + 10);
      }
    }

    const wrapperStyle = {
      opacity: this.state.hover || this.state.toggled ? 1 : 0,
      pointerEvents: this.state.hover || this.state.toggled ? 'all' : 'none',
      ...tooltipStyle,
    };

    const contentStyle = {
      left: this.left,
    };

    return (
      <div className={classnames(this.classes.popup, this.classes[placement])} style={wrapperStyle}>
        <div
          style={contentStyle}
          className={classnames(this.classes.popupContent, this.classes[placement])}
          ref={popup => {
            this.popup = popup;
          }}
        >
          <div>
            {content}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { children, content, className, placement, style, tooltipStyle } = this.props;
    if (this.container && this.popup && this.state.hover) {
      this.placement = placement || this.getPlacement(placement);
    }

    return (
      <div
        className={classnames(this.classes.tooltip, className)}
        ref={element => {
          this.onOutsideElement = element;
        }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        style={style}
      >
        <div
          ref={container => {
            this.container = container;
          }}
          className={classnames(this.classes.container, this.classes[this.placement])}
          onClick={this.toggleShow}
        >
          {children}
        </div>
        {this.renderPopup(content, this.placement, tooltipStyle)}
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: <Questionmark fill="#6A6775" stroke="#6A6775" width={16} height={16} />,
  placement: 'below',
  sticky: true,
};

Tooltip.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  tooltipStyle: PropTypes.object,
  /** The content found in the tooltip */
  content: PropTypes.node,
  /** The container that, when clicked, will show the tooltip */
  children: PropTypes.node,
  /** Tooltip should display when clicked */
  sticky: PropTypes.bool,
  placement: PropTypes.oneOf(['above', 'below', 'right', 'left']),
  fixedWidth: PropTypes.number, //  eslint-disable-line
};

export { Tooltip as Component, styles };
export default injectSheet(styles)(Tooltip);
