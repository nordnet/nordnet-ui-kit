import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import variables from '../../utilities/variables';
import debounce from 'lodash.debounce';
import './spark-graph.scss';

class SparkGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || 0,
      height: props.height || 0,
      shouldResize: !(typeof window === 'undefined') && (!props.width || !props.height),
    };

    this.handleResize = debounce(this.handleResize.bind(this), 150).bind(this);
  }

  componentDidMount() {
    if (this.state.shouldResize) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillReceiveProps({ width, height }) {
    this.setState({
      width: width !== this.state.width ? width : this.state.width,
      height: height !== this.state.height ? height : this.state.height,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    if (this.state.shouldResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  getStrokeDirection(points, stroke) {
    if (stroke) {
      return stroke;
    }

    if (points[0] > points[points.length - 1]) {
      return variables.colorDanger;
    } else if (points[0] < points[points.length - 1]) {
      return variables.colorSuccess;
    }

    return variables.colorText;
  }

  handleResize() {
    const rect = this.svgNode.getBoundingClientRect();

    if (rect.height !== this.state.height || rect.width !== this.state.width) {
      this.setState({
        width: rect.width,
        height: rect.height,
      });
    }
  }

  transformPoints(points, height, strokeWidth) {
    const effectiveHeight = height - strokeWidth;
    const strokeCompensation = strokeWidth / 2;
    const min = Math.min(...points);
    const max = Math.max(...points);

    if (min === max) {
      // The line must be exactly horizontal, normalization not possible
      return [height / 2, height / 2];
    }

    return points.map(point => (
      (effectiveHeight + strokeCompensation) - (((point - min) / (max - min)) * effectiveHeight)
    ));
  }

  constructPathString(points, width) {
    const [first, ...rest] = points;
    const xScale = width / rest.length;

    return rest.reduce((prev, curr, index) => (
      `${prev} L ${(index + 1) * xScale} ${curr}`
    ), `M 0 ${first}`);
  }

  render() {
    const {
      points,
      stroke,
      strokeWidth,
      className,
      style,
      ...rest,
    } = this.props;
    const { width, height } = this.state;
    const transformedPoints = this.transformPoints(points, height, strokeWidth);
    // TODO: Polyfill Object.assign because IE
    const styles = Object.assign({
      width: !this.props.width ? '100%' : `${width}px`,
      height: !this.props.height ? '100%' : `${height}px`,
    }, style);

    return (
      <svg
        { ...rest }
        className={ classNames('spark-graph', className) }
        style={ styles }
        viewBox={ `0 0 ${width} ${height}` }
        ref={ (node) => {
          this.svgNode = node;
        } }
      >
        <path
          className="spark-graph__path"
          d={ this.constructPathString(transformedPoints, width) }
          stroke={ this.getStrokeDirection(points, stroke) }
          strokeWidth={ strokeWidth }
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

SparkGraph.propTypes = {
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
  /** Stroke color */
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  /** Unitless pixel value */
  width: PropTypes.number,
  /** Unitless pixel value */
  height: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SparkGraph.defaultProps = {
  strokeWidth: 1,
};

export default SparkGraph;
