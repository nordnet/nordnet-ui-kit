import { interpolateObject, interpolateRgb } from 'd3-interpolate';
import arrayEqual from 'array-equal';
import variables from '../../utilities/variables';

function findSequencePositionInArray(array, sequence) {
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

function analyzeDataPattern(pointsFrom, pointsTo) {
  // Checks for 3 special cases of data change:

  // 1. x Points removed from front or back
  // 2. x Points added to front or back
  // 3. x Points added to front and x points removed from back.

  // If none of the above criterias are met assume that we
  // are dealing with a completely new dataset

  if (pointsFrom.length < pointsTo.length) {
    const seqPos = findSequencePositionInArray(pointsTo, pointsFrom);
    return seqPos ? { frontDelta: seqPos.start, backDelta: pointsTo.length - seqPos.stop - 1 } : null;
  }

  if (pointsFrom.length > pointsTo.length) {
    const seqPos = findSequencePositionInArray(pointsFrom, pointsTo);
    return seqPos ? { frontDelta: -seqPos.start, backDelta: seqPos.stop + 1 - pointsFrom.length } : null;
  }

  for (let i = 1; i < pointsFrom.length; i++) {
    if (pointsFrom[i] === pointsTo[0]) {
      if (arrayEqual(pointsFrom.slice(i), pointsTo.slice(0, pointsTo.length - i))) {
        return { frontDelta: -i, backDelta: i };
      }
    }
  }

  return null;
}

function getStrokeColor(points, stroke) {
  if (stroke) {
    return stroke;
  }

  if (points) {
    const first = points[0];
    const last = points[points.length - 1];

    if (first > last) {
      return variables.colorDanger;
    }

    if (first < last) {
      return variables.colorSuccess;
    }
  }

  return variables.colorText;
}

function getArrayOfObjectReferences(object, numberOfCopies) {
  return Array(numberOfCopies).fill(object);
}

function generateAddDeleteMotionPoints(coordsFrom, coordsTo, frontDelta, backDelta) {
  let from = coordsFrom;
  let to = coordsTo;

  if (frontDelta > 0) {
    from = [...getArrayOfObjectReferences(from[0], frontDelta), ...from];
  } else if (frontDelta < 0) {
    to = [...getArrayOfObjectReferences(to[0], -frontDelta), ...to];
  }

  if (backDelta > 0) {
    from = [...from, ...getArrayOfObjectReferences(from[from.length - 1], backDelta)];
  } else if (backDelta < 0) {
    to = [...to, ...getArrayOfObjectReferences(to[to.length - 1], -backDelta)];
  }

  return { from, to };
}

function generateForwardMotionPoints(coordsFrom, coordsTo, steps) {
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

function addSmoothTransisionPoints(coordsFrom, coordsTo, frontDelta, backDelta) {
  if (-frontDelta === backDelta) {
    return generateForwardMotionPoints(coordsFrom, coordsTo, backDelta);
  }

  return generateAddDeleteMotionPoints(coordsFrom, coordsTo, frontDelta, backDelta);
}

function addPointsToArray(points, numberOfPoints) {
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

function addUndefinedTransitionPoints(coordsFrom, coordsTo) {
  let from = coordsFrom;
  let to = coordsTo;

  if (from.length > to.length) {
    to = addPointsToArray(to, from.length - to.length);
  } else if (from.length < to.length) {
    from = addPointsToArray(from, to.length - from.length);
  }

  return { from, to };
}

function transformPoints(points, width, height, strokeWidth) {
  const xScale = width / (points.length - 1);
  const effectiveHeight = height - strokeWidth;
  const strokeCompensation = strokeWidth / 2;
  const min = Math.min(...points);
  const max = Math.max(...points);

  if (min === max) {
    // The line must be exactly horizontal, normalization not possible
    return [
      { x: 0, y: height / 2 },
      { x: width, y: height / 2 },
    ];
  }

  return points.map((point, index) => ({
    x: index * xScale,
    y: (effectiveHeight + strokeCompensation) - (((point - min) / (max - min)) * effectiveHeight),
  }));
}

function pointInterpolator(pointsFrom, pointsTo, width, height, strokeWidth) {
  if (!pointsFrom || arrayEqual(pointsFrom, pointsTo)) {
    return null;
  }

  const from = pointsFrom.length === 1 ? [...pointsFrom, ...pointsFrom] : pointsFrom;
  const to = pointsTo.length === 1 ? [...pointsTo, ...pointsTo] : pointsTo;
  const pointChange = analyzeDataPattern(from, to);
  const coordsFrom = transformPoints(from, width, height, strokeWidth);
  const coordsTo = transformPoints(to, width, height, strokeWidth);
  let res;

  if (pointChange) {
    res = addSmoothTransisionPoints(coordsFrom, coordsTo, pointChange.frontDelta, pointChange.backDelta);
  } else {
    res = addUndefinedTransitionPoints(coordsFrom, coordsTo);
  }

  return res.from.map((v, i) => interpolateObject(v, res.to[i]));
}

function colorInterpolator(pointsFrom, pointsTo, strokeFrom, strokeTo) {
  if (!pointsFrom || arrayEqual(pointsFrom, pointsTo)) {
    return null;
  }

  const from = getStrokeColor(pointsFrom, strokeFrom);
  const to = getStrokeColor(pointsTo, strokeTo);

  if (from !== to) {
    return interpolateRgb(from, to);
  }

  return null;
}

export { pointInterpolator, colorInterpolator, getStrokeColor, transformPoints };
