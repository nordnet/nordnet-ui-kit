/* eslint global-require: "warn" */
import React from 'react';
import PureComponent from 'react-pure-render/component';
import { elementType } from 'react-prop-types';
import { IconStateless } from 'react-svg-sprite-icon';
import camelCase from 'lodash.camelcase';

const icons = require.context('../../icons/', true, /\.svg$/);

class Icon extends PureComponent {
  constructor(props) {
    super(props);

    this.icons = {};

    icons.keys().forEach((key) => {
      const icon = key.replace(/\.\//, '');
      this.icons[camelCase(icon.replace(/\.svg$/, ''))] = require(`!!svg-icon-template-loader!../../icons/${icon}`);
    });
  }

  render() {
    return <IconStateless { ...this.props } name={ this.props.type } svg={ this.icons[this.props.type] } />;
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  type: React.PropTypes.string,
  fill: React.PropTypes.string,
  stroke: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  style: React.PropTypes.object,
  componentClass: elementType,
};

export default Icon;
