import React from 'react';
import { elementType } from 'react-prop-types';
import { IconStateless } from 'react-svg-sprite-icon';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import omit from '../../utilities/omit';
import icons from './icons';

class Icon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.icons = icons;
  }

  renderInline() {
    const {
      className,
      style,
      type,
      fill,
      stroke,
      strokeWidth,
      width,
      height,
      ...rest,
    } = this.props;

    const icon = this.icons[type]({ rootElement: 'svg', fill, stroke, strokeWidth });
    const classes = classNames('icon', `icon--${kebabCase(type)}`, className);
    const styles = Object.assign({
      display: 'inline-block',
      width: `${(width || icon.info.width) / 10}rem`,
      height: `${(height || icon.info.height) / 10}rem`,
    }, style);

    return (
      <span
        className={ classes }
        style={ styles }
        dangerouslySetInnerHTML={ { __html: icon.data } }
        { ...omit(rest, 'renderInline') }
      />
    );
  }

  render() {
    if (this.props.renderInline) {
      return this.renderInline();
    }

    return <IconStateless { ...this.props } name={ this.props.type } svg={ this.icons[this.props.type] } />;
  }
}

Icon.defaultProps = {
  renderInline: false,
};

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
  /** Useful for server side rendering */
  renderInline: React.PropTypes.bool,
  componentClass: elementType,
};

export default Icon;
