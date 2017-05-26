import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { throttle, debounce } from 'lodash';
import omit from '../../utilities/omit';
import TrStyles from './tr-styles';

// Needs to be a class so that a ref can be assigned to it from Thead
class Tr extends React.Component {
  // eslint-disable-line
  constructor(props, context) {
    super(props, context);

    this.state = {
      width: 0,
      sticky: false,
    };

    this.handleScroll = throttle(this.handleScroll.bind(this), 200).bind(this);
    this.handleResize = debounce(this.handleResize.bind(this), 500).bind(this);
    this.setSticky = this.setSticky.bind(this);
    this.addRef = this.addRef.bind(this);
    this.addClone = this.addClone.bind(this);
  }

  componentDidMount() {
    if (this.props.sticky) {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
      this.setWidth(ReactDOM.findDOMNode(this.tr)); // eslint-disable-line react/no-find-dom-node
      this.addClone();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.sticky !== nextState.sticky || this.state.width !== nextState.width || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    if (this.props.sticky) {
      this.setWidth(ReactDOM.findDOMNode(this.tr)); // eslint-disable-line react/no-find-dom-node
    }
  }

  componentWillUnmount() {
    if (this.props.sticky) {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }

  setWidth(node) {
    const { width } = node.getBoundingClientRect();

    if (width !== this.state.width) {
      this.setState({ width });
    }
  }

  getDistanceFromBottom() {
    if (!this.tr.closest('tbody')) {
      return this.tr.closest('table').getBoundingClientRect().bottom;
    }
    return this.tr.closest('tbody').getBoundingClientRect().bottom;
  }

  setSticky() {
    const { top: trTop, height } = this.tr.getBoundingClientRect();
    const offset = this.props.stickyOffset;
    const tableHeight = this.tr.closest('tbody') ? this.tr.closest('tbody').offsetHeight : this.tr.closest('table').offsetHeight;
    const fromBottom = this.getDistanceFromBottom() - offset - height;
    let top;

    if (!this.state.sticky) {
      top = trTop;
    } else {
      // To calculate getBoundingClientRect correct the nextSibling must be visible,
      // but when it is a clone it is not because it gets 'display: none'
      // from clone class. Temporarily setting 'display: block' fixes this.
      // Since it is syncronous it should not cause any flickering.
      this.tr.nextSibling.style.display = 'block';
      top = this.tr.nextSibling.getBoundingClientRect().top;
      this.tr.nextSibling.style.display = '';
    }

    if (fromBottom > 0 && top <= offset && top > (tableHeight - height - offset) * -1) {
      this.setState({
        sticky: true,
      });
    } else if (this.state.sticky) {
      this.setState({
        sticky: false,
      });
    }
  }

  handleScroll() {
    this.setSticky(this.tr);
  }

  handleResize() {
    this.setWidth(this.tr);
    this.setSticky(this.tr);
  }

  addRef(node, name) {
    this[name] = node;
  }

  addClone() {
    // NOTE: Unfortunately it's impossible to wrap a tr so there's no other way to return two sibling elements.
    // Returning sibling elements from render will eventually be supported.
    // https://github.com/facebook/react/issues/2127#issuecomment-232331521
    const clone = this.tr.cloneNode(true);
    clone.classList.remove('sticky');
    clone.classList.add('clone');

    this.tr.parentNode.insertBefore(clone, this.tr.nextSibling);
  }

  render() {
    const { className, children, size, border, variant, stickyOffset, ...rest } = this.props;
    const classes = this.context.styleManager.render(TrStyles);
    const { width, sticky } = this.state;
    const usedClassName = classNames(
      classes.tr,
      size,
      {
        [variant]: variant,
        border,
        sticky,
      },
      className,
    );
    const stickyStyle = {};

    if (sticky && width && typeof stickyOffset !== 'undefined') {
      stickyStyle.top = `${stickyOffset}px`;
      stickyStyle.width = `${width}px`;
    }

    return (
      <tr {...omit(rest, 'sticky')} className={usedClassName} style={stickyStyle} ref={node => this.addRef(node, 'tr')}>
        {children}
      </tr>
    );
  }
}

Tr.defaultProps = {
  sticky: false,
  border: false,
  stickyOffset: 0,
};

Tr.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  border: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  sticky: PropTypes.bool,
  /** Unitless pixel value: if there are other sticky elements at the top of the page, use this to compensate */
  stickyOffset: PropTypes.number,
};

Tr.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Tr;
