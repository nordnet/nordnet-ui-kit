import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import variables from '../../utilities/variables';
import debounce from 'lodash.debounce';
import './spark-graph.scss';

class SparkGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      isBrowser: !(typeof window === 'undefined'),
    };
    this.handleResize = debounce(this.handleResize.bind(this), 150).bind(this);
  }

  componentDidMount() {
    if (this.state.isBrowser && (!this.props.height || !this.props.width)) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (this.state.isBrowser && (!this.props.height || !this.props.width)) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  getMinMax(points) {
    return {
      min: Math.min(...points),
      max: Math.max(...points),
    };
  }

  handleResize() {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    if (rect.height !== this.state.height || rect.width !== this.state.width) {
      this.setState({
        width: rect.width,
        height: rect.height,
      });
    }
  }

  transformPoints(points, height, strokeWidth) {
    const effectiveHeight = height - strokeWidth;
    const horizontalPadding = strokeWidth / 2;
    const { min, max } = this.getMinMax(points);
    if (min === max) {
      // The line must be exactly horizontal, normalization not possible
      return [height / 2, height / 2];
    }
    return points.map(point => horizontalPadding + effectiveHeight -
      (((point - min) / (max - min)) * effectiveHeight));
  }

  buildPathString(points, width) {
    const xInc = width / (points.length - 1);
    return `M 0 ${points[0]} ${points.slice(1).reduce((prev, curr, index) =>
      `${prev} L ${(index + 1) * xInc} ${curr}`, '')}`;
  }

  render() {
    const {
      points,
      stroke,
      strokeWidth,
      width,
      height,
      className,
      style,
      ...rest,
    } = this.props;
    const targetWidth = !width ? this.state.width : width;
    const targetHeight = !height ? this.state.height : height;
    const classes = classNames('spark-graph', className);
    const styles = Object.assign({
      width: !width ? '100%' : `${targetWidth}px`,
      height: !height ? '100%' : `${targetHeight}px`,
    }, style);
    let actualStroke = stroke;
    if (!stroke) {
      if (points[0] > points[points.length - 1]) {
        actualStroke = variables.colorDanger;
      } else if (points[0] < points[points.length - 1]) {
        actualStroke = variables.colorSuccess;
      } else {
        actualStroke = variables.colorText;
      }
    }
    const transformedPoints = this.transformPoints(points, targetHeight, strokeWidth);
    return (
      <svg
        { ...rest }
        className={ classes }
        style={ styles }
        viewBox={ `0 0 ${targetWidth} ${targetHeight}` }
      >
        <path
          className="spark-graph__path"
          d={ this.buildPathString(transformedPoints, targetWidth) }
          stroke={ actualStroke }
          strokeWidth={ strokeWidth }
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

SparkGraph.propTypes = {
  /**
    Needs to be an array of at least 2 numbers
  */
  points: (props, propName, componentName) => {
    const points = props[propName];
    if (!points) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Points undefined`
      );
    }
    if (!Array.isArray(points)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Points need to be array`
      );
    }
    if (points.length < 2) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Need more than 2 points`
      );
    }
    if (points.some(isNaN)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Need to be an array of numbers`
      );
    }
    return null;
  },
  /**
    Stroke color
  */
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  /**
    Width in px or leave blank to fill parent
  */
  width: PropTypes.number,
  /**
    Height in px or leave blank to fill parent
  */
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SparkGraph.defaultProps = {
  strokeWidth: 1,
};

export default SparkGraph;
