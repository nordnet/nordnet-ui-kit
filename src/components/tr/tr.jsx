import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import rem from '../../utilities/rem';
import './tr.scss';

// Needs to be a class so that a ref can be assigned to it from Thead
class Tr extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);

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
      this.setWidth(ReactDOM.findDOMNode(this.tr));
      this.addClone();
    }
  }

  componentDidUpdate() {
    if (this.props.sticky) {
      this.setWidth(ReactDOM.findDOMNode(this.tr));
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

  setSticky() {
    const { top: trTop, height } = this.tr.getBoundingClientRect();
    const offset = this.props.stickyOffset;
    const tableHeight = this.tr.closest('table').offsetHeight;

    let top;

    if (!this.state.sticky) {
      top = trTop;
    } else {
      top = this.tr.nextSibling.getBoundingClientRect().top;
    }

    if (top <= offset && top > (tableHeight - height - offset) * -1) {
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
    clone.classList.remove('tr--sticky');
    clone.classList.add('tr--clone');

    this.tr.parentNode.insertBefore(clone, this.tr.nextSibling);
  }

  render() {
    const { className, children, size, border, variant, stickyOffset, ...rest } = this.props;
    const { width, sticky } = this.state;
    const classes = classNames('tr', {
      'tr--xs': size === 'xs',
      'tr--sm': size === 'sm',
      'tr--md': size === 'md',
      'tr--lg': size === 'lg',
      'tr--primary': variant === 'primary',
      'tr--secondary': variant === 'secondary',
      'tr--border': border,
      'tr--sticky': sticky,
    }, className);
    const stickyStyle = {};

    if (sticky && width && typeof stickyOffset !== 'undefined') {
      stickyStyle.top = rem(`${stickyOffset}px`);
      stickyStyle.width = rem(`${width}px`);
    }

    return (
      <tr
        { ...rest }
        className={ classes }
        style={ stickyStyle }
        ref={ node => this.addRef(node, 'tr') }
      >
        { children }
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

export default Tr;
