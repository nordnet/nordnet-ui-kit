import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import { debounce } from 'lodash';
import arrayEqual from 'array-equal';
import bezierEasing from 'bezier-easing';
import {
  pointInterpolator,
  colorInterpolator,
  getStrokeColor,
  transformPoints,
} from './interpolate';
import omit from '../../utilities/omit';

function constructPathString(points) {
  const [first, ...rest] = points;

  return rest.reduce((prev, curr) => (
    `${prev} L ${curr.x} ${curr.y}`
  ), `M ${first.x} ${first.y}`);
}

class SparkGraph extends React.Component {
  constructor(props) {
    super(props);
    const width = props.width || 0;
    const height = props.height || 0;
    this.state = {
      width,
      height,
      shouldResize: !(typeof window === 'undefined') && (!props.width || !props.height),
      pointsFrom: null,
      pointsTo: null,
      strokeFrom: null,
      strokeTo: null,
    };

    this.handleResize = debounce(this.handleResize.bind(this), 150).bind(this);
  }

  componentDidMount() {
    if (this.state.shouldResize) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillReceiveProps({ width, height, points, stroke }) {
    const state = {};
    if (width) state.width = width;
    if (height) state.height = height;
    state.pointsFrom = this.props.points;
    state.pointsTo = points;
    state.strokeFrom = this.props.stroke;
    state.strokeTo = stroke;
    this.setState(state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate() {
    const { strokeWidth, transitionDuration } = this.props;
    const { height, width, pointsFrom, pointsTo, strokeFrom, strokeTo } = this.state;
    const pInterpolator = pointInterpolator(pointsFrom, pointsTo, width, height, strokeWidth);
    const cInterpolator = colorInterpolator(pointsFrom, pointsTo, strokeFrom, strokeTo);

    if (pInterpolator || cInterpolator) {
      const easing = bezierEasing(0.6, 0.04, 0.98, 0.335);
      let startTime;

      const draw = (time) => {
        if (!startTime) startTime = time;
        const progress = time - startTime < transitionDuration ? (time - startTime) / transitionDuration : 1;

        if (pInterpolator) {
          const values = pInterpolator.map(ip => ip(easing(progress)));
          this.path.setAttribute('d', constructPathString(values));
        }

        if (cInterpolator) {
          this.path.setAttribute('stroke', cInterpolator(easing(progress)));
        }

        if (progress < 1) {
          requestAnimationFrame(draw);
        }
      };

      requestAnimationFrame(draw);
    }
  }

  componentWillUnmount() {
    if (this.state.shouldResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize() {
    const rect = this.svgNode.getBoundingClientRect();

    if (rect.height !== this.state.height || rect.width !== this.state.width) {
      this.setState({
        width: rect.width,
        height: rect.height,
        pointsFrom: null, // Avoid animation on resize
        strokeFrom: null, // Avoid animation on resize
      });
    }
  }

  render() {
    const {
      points,
      stroke,
      strokeWidth,
      className,
      style,
      ...rest
    } = this.props;
    const { width, height, pointsFrom, pointsTo } = this.state;
    const styles = Object.assign({
      width: !this.props.width ? '100%' : `${width}px`,
      height: !this.props.height ? '100%' : `${height}px`,
    }, style);
    let pointsToRender;

    if (!pointsFrom || arrayEqual(pointsFrom, pointsTo)) {
      pointsToRender = transformPoints(points, width, height, strokeWidth);
    }

    return (
      <svg
        {...omit(rest, 'transitionDuration')}
        className={classNames('spark-graph', className)}
        style={styles}
        viewBox={`0 0 ${width} ${height}`}
        ref={(node) => {
          this.svgNode = node;
        }}
      >
        <path
          style={{ fill: 'none' }}
          d={pointsFrom ? '' : constructPathString(pointsToRender)}
          stroke={pointsFrom ? getStrokeColor(pointsFrom, stroke) : getStrokeColor(points, stroke)}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="round"
          ref={(node) => {
            this.path = node;
          }}
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
  /** Transition duration in ms */
  transitionDuration: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SparkGraph.defaultProps = {
  strokeWidth: 1,
  transitionDuration: 500,
};

export default SparkGraph;
