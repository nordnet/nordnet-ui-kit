import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './tr.scss';

// Needs to be a class so that a ref can be assigned to it from Thead
class Tr extends React.Component { // eslint-disable-line
  render() {
    const { className, children, size, ...rest } = this.props;
    const classes = classNames('tr', {
      'tr--xs': size === 'xs',
      'tr--sm': size === 'sm',
      'tr--md': size === 'md',
      'tr--lg': size === 'lg',
    }, className);

    return (
      <tr { ...rest } className={ classes }>
        { children }
      </tr>
    );
  }
}

Tr.defaultProps = {};

Tr.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Tr;
