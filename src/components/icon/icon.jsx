import React from 'react';
import PureComponent from 'react-pure-render/component';
import { elementType } from 'react-prop-types';
import { IconStateless } from 'react-svg-sprite-icon';
import icons from './icons';

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.icons = icons;
  }

  render() {
    return <IconStateless { ...this.props } name={ this.props.type } svg={ this.icons[this.props.type] } />;
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  /** Needs to be a valid colour */
  fill: React.PropTypes.string,
  /** Needs to be a valid colour */
  stroke: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  /** Unitless pixel value */
  width: React.PropTypes.number,
  /** Unitless pixel value */
  height: React.PropTypes.number,
  style: React.PropTypes.object,
  componentClass: elementType,
};

export default Icon;
