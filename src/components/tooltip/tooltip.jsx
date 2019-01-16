import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import classnames from 'classnames';
import Questionmark from '../icon/icons/questionmark';
import styles from './tooltip-styles';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.placement = props.placement;
    this.classes = props.classes;
    this.left = 0;
  }

  state = {
    hover: false,
    toggled: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('touchstart', this.handleClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.hover !== this.state.hover ||
      nextState.toggled !== this.state.toggled ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('touchstart', this.handleClick);
  }

  getPlacement = (placement = 'below') => {
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
  };

  checkPosition = {
    above: rect => rect.top > 0,
    left: rect => rect.left > 0 && this.checkPosition.below(rect) && this.checkPosition.above(rect),
    right: rect =>
      (window.innerWidth || document.documentElement.clientWidth) - rect.right > 0 &&
      this.checkPosition.below(rect) &&
      this.checkPosition.above(rect),
    below: rect => (window.innerHeight || document.documentElement.clientHeight) - rect.bottom > 0,
  };

  handleClick = ({ target } = {}) => {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.handleClickOutside();
    }
  };

  handleClickOutside = () => {
    if (this.state.toggled) {
      this.setState({
        toggled: false,
      });
    }
  };

  toggleShow = () => {
    if (!this.props.sticky) {
      return;
    }

    this.setState({
      toggled: !this.state.toggled,
      hover: false,
    });
  };

  mouseEnter = () => {
    if (!this.state.toggled) {
      this.setState({
        hover: true,
      });
    }
  };

  mouseLeave = () => {
    if (!this.state.toggled) {
      this.setState({
        hover: false,
      });
    }
  };

  renderPopup = (content, placement, tooltipStyle) => {
    if (this.container && (placement === 'below' || placement === 'above')) {
      if (this.state.hover) {
        const popupRect = this.popup.getBoundingClientRect();
        const adjustedLeft = popupRect.left - this.left;
        const adjustedRight = popupRect.right - this.left;

        const pxDiff = Math.min(window.innerWidth - popupRect.width, 20);
        const gutter = pxDiff > 0 ? pxDiff / 2 : 0;

        if (adjustedLeft < 0) {
          this.left = gutter - adjustedLeft;
        } else if (adjustedRight > window.innerWidth) {
          this.left = window.innerWidth - adjustedRight - gutter;
        } else {
          this.left = 0;
        }
      }
    }

    const { fixedWidth, desktopOnly, mobilePlacement } = this.props;
    const { hover, toggled } = this.state;

    const wrapperStyle = {
      opacity: hover || toggled ? 1 : 0,
      pointerEvents: hover || toggled ? 'all' : 'none',
      width: fixedWidth || 'auto',
      ...tooltipStyle,
    };

    const classes = this.classes;
    const wrapperClasses = classnames(
      classes.popup,
      !mobilePlacement && classes[placement],
      mobilePlacement && classes[`${mobilePlacement}Mobile`],
      mobilePlacement && classes[`${placement}Desktop`],
      {
        [classes.popupFixed]: fixedWidth,
        [classes.popupDesktopOnly]: desktopOnly,
      },
    );

    const contentStyle = {
      // don't want to do anything fancy if we're using different placements for mobile and desktop.
      ...(!mobilePlacement ? { left: this.left } : {}),
    };
    const vertical = placement === 'above' || placement === 'below';
    const verticalMobile = mobilePlacement === 'above' || mobilePlacement === 'below';
    return (
      <div className={wrapperClasses} style={wrapperStyle}>
        <div
          style={contentStyle}
          className={classnames(
            classes.popupContent,
            !mobilePlacement && classes[placement],
            mobilePlacement && classes[`${mobilePlacement}Mobile`],
            mobilePlacement && classes[`${placement}Desktop`],
            {
              [classes.popupContentFixed]: fixedWidth,
              [classes.popupContentVertical]: !mobilePlacement && vertical && fixedWidth,
              [classes.popupContentVerticalMobile]: mobilePlacement && verticalMobile && fixedWidth,
              [classes.popupContentVerticalDesktop]: mobilePlacement && vertical && fixedWidth,
              [classes.popupContentAbove]: !mobilePlacement && placement === 'above',
              [classes.popupContentAboveMobile]: mobilePlacement && placement === 'above',
              [classes.popupContentAboveDesktop]: mobilePlacement && placement === 'above',
            },
          )}
          ref={popup => {
            this.popup = popup;
          }}
        >
          <div>{content}</div>
        </div>
      </div>
    );
  };

  render() {
    const {
      children,
      content,
      className,
      placement,
      mobilePlacement,
      style,
      tooltipStyle,
    } = this.props;
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
          className={classnames(
            this.classes.container,
            !mobilePlacement && this.classes[placement],
            mobilePlacement && this.classes[`${mobilePlacement}Mobile`],
            mobilePlacement && this.classes[`${placement}Desktop`],
          )}
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
  children: <Questionmark width={16} height={16} />,
  placement: 'below',
  mobilePlacement: null,
  sticky: true,
  desktopOnly: false,
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
  mobilePlacement: PropTypes.oneOf(['above', 'below', 'right', 'left']),
  fixedWidth: PropTypes.number, //  eslint-disable-line
  desktopOnly: PropTypes.bool,
};

export { Tooltip as Component, styles };
export default injectSheet(styles)(Tooltip);
