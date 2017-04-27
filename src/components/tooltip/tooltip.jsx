/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Questionmark from '../icon/icons/questionmark';
import TooltipStyles from './tooltip-styles';

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
      above: rect => (rect.top > 0),
      left: rect => (rect.left > 0 && this.checkPosition.below(rect) && this.checkPosition.above(rect)),
      right: rect => ((((window.innerWidth || document.documentElement.clientWidth) - rect.right) > 0) &&
        this.checkPosition.below(rect) && this.checkPosition.above(rect)),
      below: rect => (((window.innerHeight || document.documentElement.clientHeight) - rect.bottom) > 0),
    };

    this.placement = props.placement;
    this.classes = this.context.styleManager.render(TooltipStyles);
    this.renderPopup = this.renderPopup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.hover !== this.state.hover || nextState.toggled !== this.state.toggled);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
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
    const style = {
      opacity: (this.state.hover || this.state.toggled) ? 1 : 0,
      pointerEvents: (this.state.hover || this.state.toggled) ? 'all' : 'none',
      ...tooltipStyle,
    };

    if (this.props.fixedWidth) {
      style.width = this.props.fixedWidth;
      style.whiteSpace = 'inherit';
    }

    return (
      <div
        style={style}
        className={classnames(this.classes.popup, placement)}
        ref={(popup) => { this.popup = popup; }}
      >
        <div className="content">
          { content }
        </div>
      </div>
    );
  }

  render() {
    const { children, content, className, placement, style, tooltipStyle } = this.props;
    if (this.container && this.popup && this.state.hover) {
      this.placement = this.getPlacement(placement);

      const rect = this.container.getBoundingClientRect();
      this.contentHeight = (rect.height || 0) - 3;
    }

    return (
      <div
        className={classnames(this.classes.tooltip, className)}
        ref={(element) => { this.onOutsideElement = element; }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        style={style}
      >
        <div
          ref={(container) => { this.container = container; }}
          className={classnames(this.classes.container, this.placement)}
          onClick={this.toggleShow}
        >
          { children }
        </div>
        { this.renderPopup(content, this.placement, tooltipStyle) }
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: <Questionmark fill="#00A9EC" stroke="#00A9EC" width={16} height={16} />,
  placement: 'below',
};

Tooltip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tooltipStyle: PropTypes.object,
  /** The content found in the tooltip */
  content: PropTypes.node,
  /** The container that, when clicked, will show the tooltip */
  children: PropTypes.node,
  placement: PropTypes.oneOf(['above', 'below', 'right', 'left']),
  fixedWidth: PropTypes.number,
};

Tooltip.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Tooltip;
