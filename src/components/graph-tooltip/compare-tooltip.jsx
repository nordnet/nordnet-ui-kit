import React, { PropTypes } from 'react';
import PriceListElement from './price-list-element';

function CompareTooltip({ points }) {
  return (
    <table className="graph-tooltip__items">
      <tbody>
        { points.map(p => <PriceListElement key={ p.name } percentValue { ...p } />) }
      </tbody>
    </table>
  );
}

CompareTooltip.defaultProps = {
  points: [],
};

CompareTooltip.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
  })),
};

export default CompareTooltip;
