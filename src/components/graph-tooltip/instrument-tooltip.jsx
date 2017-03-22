import React, { PropTypes } from 'react';
import PriceListElement from './price-list-element';

function InstrumentTooltip({ points }) {
  return (
    <table className="graph-tooltip__items graph-tooltip__items--ohlc">
      <thead className="graph-tooltip__header">
        <tr>
          <th className="graph-tooltip__header-item" />
          <th className="graph-tooltip__header-item">O.</th>
          <th className="graph-tooltip__header-item">H.</th>
          <th className="graph-tooltip__header-item">L.</th>
          <th className="graph-tooltip__header-item">C.</th>
        </tr>
      </thead>
      <tbody>
        { points.map(p => <PriceListElement ohlc key={p.name} {...p} />) }
      </tbody>
    </table>
  );
}

InstrumentTooltip.defaultProps = {
  points: [],
};

InstrumentTooltip.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
  })),
};

export default InstrumentTooltip;
