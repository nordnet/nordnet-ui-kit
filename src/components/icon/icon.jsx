import React from 'react';
import PureComponent from 'react-pure-render/component';
import { elementType } from 'react-prop-types';
import { IconStateless } from 'react-svg-sprite-icon';

import iconArrowDown from '!!svg-icon-template-loader!../../icons/arrow-down.svg';
import iconArrowUp from '!!svg-icon-template-loader!../../icons/arrow-up.svg';
import iconCheckmark from '!!svg-icon-template-loader!../../icons/checkmark.svg';
import iconClose from '!!svg-icon-template-loader!../../icons/close.svg';
import iconExclamationPoint from '!!svg-icon-template-loader!../../icons/exclamation-point.svg';

class Icon extends PureComponent {
  constructor(props) {
    super(props);

    this.icons = {
      arrowDown: iconArrowDown,
      arrowUp: iconArrowUp,
      checkmark: iconCheckmark,
      close: iconClose,
      exclamationPoint: iconExclamationPoint,
    };
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
