import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import toArray from 'lodash.toarray';
import './thead.scss';

class Thead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childNodesWidths: [],
      headerSticky: false,
    };

    this.handleScroll = throttle(this.handleScroll.bind(this), 200).bind(this);
    this.addRefToChild = this.addRefToChild.bind(this);
    this.renderClone = this.renderClone.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setChildNodesWidths(this.childNode);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setChildNodesWidths(node) {
    // Make NodeList an array so it can be mapped
    const nodes = toArray(ReactDOM.findDOMNode(node).childNodes);

    this.setState({
      childNodesWidths: nodes.map(child => child.offsetWidth),
    });
  }

  handleScroll() {
    const node = ReactDOM.findDOMNode(this.childNode);
    const top = node.getBoundingClientRect().top;
    const parentHeight = node.closest('table').offsetHeight;

    if (top <= 0 && top > (parentHeight - 21) * -1) {
      this.setState({
        headerSticky: true,
      });
    } else if (this.state.headerSticky !== false) {
      this.setState({
        headerSticky: false,
      });
    }
  }

  capitalizeFirstLetter(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  addRefToChild(children) {
    if (React.Children.count(children) === 1) {
      return React.cloneElement(children, {
        className: 'thead__child',
        ref: node => {
          this.childNode = node;
        },
      });
    }

    return children;
  }

  renderClone(children) {
    const { childNodesWidths } = this.state;

    if (this.childNode && childNodesWidths.length > 0) {
      return React.cloneElement(children, {
        className: 'thead__child--clone',
        'aria-hidden': true,
        ref: node => {
          this.childNodeClone = node;
        },
        children: React.Children.map(children.props.children, (child, i) => (
          React.cloneElement(child, {
            style: {
              width: `${childNodesWidths[i]}px`,
            },
          })
        )),
      });
    }

    return null;
  }

  render() {
    const { className, children, size, ...rest } = this.props;
    const classes = classNames('thead', {
      'thead--xs': size === 'xs',
      'thead--sm': size === 'sm',
      'thead--md': size === 'md',
      'thead--lg': size === 'lg',
      'thead--sticky': this.state.headerSticky,
    }, className);

    return (
      <thead { ...rest } className={ classes }>
        { this.addRefToChild(children) }
        { this.renderClone(children) }
      </thead>
    );
  }
}

Thead.defaultProps = {};

Thead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Thead;
