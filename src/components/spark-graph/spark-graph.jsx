import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import variables from '../../utilities/variables';
import debounce from 'lodash.debounce';
import './spark-graph.scss';
import { interpolateObject, interpolateRgb } from 'd3-interpolate';

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
    const { strokeWidth, transformTime } = this.props;
    const { height, width, pointsFrom, pointsTo, strokeFrom, strokeTo } = this.state;
    const pointInterpolator = this.getPointInterpolation(pointsFrom, pointsTo, height, width, strokeWidth);
    const colorInterpolator = this.getColorInterpolation(pointsFrom, pointsTo, strokeFrom, strokeTo);
    if (pointInterpolator || colorInterpolator) {
      let startTime;
      const draw = (time) => {
        if (!startTime) startTime = time;
        const progress = time - startTime < transformTime ? (time - startTime) / transformTime : 1;
        if (pointInterpolator) {
          const values = pointInterpolator.map(ip => ip(progress));
          this.path.setAttribute('d', this.constructPathString(values));
        }
        if (colorInterpolator) {
          this.path.setAttribute('stroke', colorInterpolator(progress));
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

  getPointInterpolation(pointsFrom, pointsTo, height, width, strokeWidth) {
    if (!pointsFrom || this.arraysEqual(pointsFrom, pointsTo)) {
      return null;
    }
    const pFrom = pointsFrom.length === 1 ? [...pointsFrom, ...pointsFrom] : pointsFrom;
    const pTo = pointsTo.length === 1 ? [...pointsTo, ...pointsTo] : pointsTo;
    const pointChange = this.analyzeDataPattern(pFrom, pTo);
    const coordsFrom = this.transformPoints(pFrom, height, width, strokeWidth);
    const coordsTo = this.transformPoints(pTo, height, width, strokeWidth);
    let res;
    if (pointChange) {
      res = this.addSmoothTransisionPoints(coordsFrom, coordsTo, pointChange.frontDelta, pointChange.backDelta);
    } else {
      res = this.addUndefinedTransitionPoints(coordsFrom, coordsTo);
    }
    return res.from.map((v, i) => interpolateObject(v, res.to[i]));
  }

  getColorInterpolation(pointsFrom, pointsTo, strokeFrom, strokeTo) {
    const fromStroke = this.getStrokeDirection(pointsFrom, strokeFrom);
    const toStroke = this.getStrokeDirection(pointsTo, strokeTo);
    if (fromStroke !== toStroke) {
      return interpolateRgb(fromStroke, toStroke);
    }
    return null;
  }

  getStrokeDirection(points, stroke) {
    if (stroke) {
      return stroke;
    }

    if (points && points[0] > points[points.length - 1]) {
      return variables.colorDanger;
    } else if (points && points[0] < points[points.length - 1]) {
      return variables.colorSuccess;
    }

    return variables.colorText;
  }

  getArrayOfObjectReferences(object, numberOfCopies) {
    const arr = [];
    for (let i = 0; i < numberOfCopies; i++) {
      arr.push(object);
    }
    return arr;
  }

  generateAddDeleteMotionPoints(coordsFrom, coordsTo, frontDelta, backDelta) {
    let from = coordsFrom;
    let to = coordsTo;
    if (frontDelta > 0) {
      from = [...this.getArrayOfObjectReferences(from[0], frontDelta), ...from];
    } else if (frontDelta < 0) {
      to = [...this.getArrayOfObjectReferences(to[0], -frontDelta), ...to];
    }
    if (backDelta > 0) {
      from = [...from, ...this.getArrayOfObjectReferences(from[from.length - 1], backDelta)];
    } else if (backDelta < 0) {
      to = [...to, ...this.getArrayOfObjectReferences(to[to.length - 1], -backDelta)];
    }
    return { from, to };
  }

  addSmoothTransisionPoints(coordsFrom, coordsTo, frontDelta, backDelta) {
    if (-frontDelta === backDelta) {
      return this.generateForwardMotionPoints(coordsFrom, coordsTo, backDelta);
    }
    return this.generateAddDeleteMotionPoints(coordsFrom, coordsTo, frontDelta, backDelta);
  }

  addUndefinedTransitionPoints(coordsFrom, coordsTo) {
    let from = coordsFrom;
    let to = coordsTo;
    if (from.length > to.length) {
      to = this.addPointsToArray(to, from.length - to.length);
    } else if (from.length < to.length) {
      from = this.addPointsToArray(from, to.length - from.length);
    }
    return { from, to };
  }

  findSequencePositionInArray(array, sequence) {
    let start = -1;
    let seqIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[seqIndex]) {
        if (start < 0) {
          start = i;
        }
        if (seqIndex === sequence.length - 1) {
          return { start, stop: i };
        }
        seqIndex++;
      } else {
        if (seqIndex.length - i < sequence.length) {
          return null;
        }
        start = -1;
        seqIndex = 0;
      }
    }
    return null;
  }

  /**
    Checks for 3 special cases of data change:
    1. x Points removed from front or back
    2. x Points added to front or back
    3. x Points added to front and x points removed from back.

    If none of the above criterias are met assume that we
    are dealing with a completely new dataset
  */
  analyzeDataPattern(pointsFrom, pointsTo) {
    if (pointsFrom.length < pointsTo.length) {
      const seqPos = this.findSequencePositionInArray(pointsTo, pointsFrom);
      return seqPos ? { frontDelta: seqPos.start, backDelta: pointsTo.length - seqPos.stop - 1 } : null;
    } if (pointsFrom.length > pointsTo.length) {
      const seqPos = this.findSequencePositionInArray(pointsFrom, pointsTo);
      return seqPos ? { frontDelta: -seqPos.start, backDelta: seqPos.stop + 1 - pointsFrom.length } : null;
    }
    for (let i = 1; i < pointsFrom.length; i++) {
      if (pointsFrom[i] === pointsTo[0]) {
        if (this.arraysEqual(pointsFrom.slice(i), pointsTo.slice(0, pointsTo.length - i))) {
          return { frontDelta: -i, backDelta: i };
        }
      }
    }
    return null;
  }

  generateForwardMotionPoints(coordsFrom, coordsTo, steps) {
    let from = coordsFrom;
    let to = coordsTo;
    const xStep = from[1].x;
    const xMax = from[from.length - 1].x;
    for (let i = steps - 1; i >= 0; i--) {
      from = [...from, Object.assign({}, to[to.length - i - 1], { x: xMax + xStep * (steps - i) })];
      to = [Object.assign({}, from[i], { x: -xStep * (steps - i) }), ...to];
    }
    return { from, to };
  }

  arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = array1.length; i--;) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
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

  transformPoints(points, height, width, strokeWidth) {
    const xScale = width / (points.length - 1);
    const effectiveHeight = height - strokeWidth;
    const strokeCompensation = strokeWidth / 2;
    const min = Math.min(...points);
    const max = Math.max(...points);

    if (min === max) {
      // The line must be exactly horizontal, normalization not possible
      return [{ x: 0, y: height / 2 }, { x: width, y: height / 2 }];
    }


    return points.map((point, index) => (
      {
        x: index * xScale,
        y: (effectiveHeight + strokeCompensation) - (((point - min) / (max - min)) * effectiveHeight),
      }
    ));
  }

  addPointsToArray(points, numberOfPoints) {
    const pointsPerSpace = Math.floor((numberOfPoints - 1) / (points.length - 1)) + 1;
    const pointsOnLast = ((numberOfPoints - 1) % (points.length - 1)) + 1;
    const xDiff = points[1].x - points[0].x;
    const [first, ...rest] = points;

    return rest.reduce((prev, curr, index, arr) => {
      let pointsToAdd;
      if (index < arr.length - pointsOnLast) {
        pointsToAdd = pointsPerSpace - 1;
      } else {
        pointsToAdd = pointsPerSpace;
      }
      const prevPoint = prev[prev.length - 1];
      const currPoint = curr;
      for (let i = 1 / (pointsToAdd + 1); i <= 1; i += 1 / (pointsToAdd + 1)) {
        prev.push({
          x: prevPoint.x + (i * xDiff),
          y: prevPoint.y + (i * (currPoint.y - prevPoint.y)),
        });
      }
      return prev;
    }, [first]);
  }

  constructPathString(points) {
    const [first, ...rest] = points;

    return rest.reduce((prev, curr) => (
      `${prev} L ${curr.x} ${curr.y}`
    ), `M ${first.x} ${first.y}`);
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
    const { width, height, pointsFrom, pointsTo } = this.state;
    // TODO: Polyfill Object.assign because IE
    const styles = Object.assign({
      width: !this.props.width ? '100%' : `${width}px`,
      height: !this.props.height ? '100%' : `${height}px`,
    }, style);
    let pointsToRender;
    if (!pointsFrom || this.arraysEqual(pointsFrom, pointsTo)) {
      pointsToRender = this.transformPoints(points, height, width, strokeWidth);
    }

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
          d={ !pointsFrom ? this.constructPathString(pointsToRender) : '' }
          stroke={ !pointsFrom ? this.getStrokeDirection(points, stroke) : this.getStrokeDirection(pointsFrom, stroke) }
          strokeWidth={ strokeWidth }
          strokeLinecap="square"
          strokeLinejoin="round"
          ref={ (node) => {
            this.path = node;
          } }
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
  /** Transformtime in ms */
  transformTime: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

SparkGraph.defaultProps = {
  strokeWidth: 1,
  transformTime: 500,
};

export default SparkGraph;
