import React, { PropTypes } from 'react';

function renderValue(key, value, percentValue) {
  return (
    <td key={ key } className="graph-tooltip__cell graph-tooltip__cell--value">
      { `${value}${percentValue ? '%' : ''}` }
    </td>
  );
}

function PriceListElement({
  name,
  value,
  color,
  open,
  high,
  low,
  close,
  percentValue,
  ohlc,
}) {
  const ohlcValues = [[
    'open', open,
  ], [
    'high', high,
  ], [
    'low', low,
  ], [
    'close', close,
  ]].filter(val => !!val[1]);

  return (
    <tr className="graph-tooltip__item">
      <td className="graph-tooltip__cell graph-tooltip__cell--name">
        <span className="graph-tooltip__indicator" style={ { background: color } } />
        { name }
      </td>
      { ohlc ? ohlcValues.map(([key, val]) => renderValue(key, val, percentValue)) : renderValue(name, value, percentValue) }
    </tr>
  );
}

PriceListElement.defaultProps = {
  percentValue: false,
};

PriceListElement.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  open: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  close: PropTypes.string,
  percentValue: PropTypes.bool,
  ohlc: PropTypes.bool,
};

export default PriceListElement;
