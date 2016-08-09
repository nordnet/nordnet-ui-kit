import React, { PropTypes } from 'react';
import PriceListElement from './list-elements/price-list-element';

import './compare-tooltip.scss';

function CompareTooltip({ date, points }) {
  return (
    <div className="compare-tooltip">
      <b>{ date }</b>
      <table className="compare-tooltip__list">
        <tbody>
          { points.map(p => <PriceListElement key={ p.name } percentValue { ...p } />) }
        </tbody>
      </table>
    </div>
  );
}

CompareTooltip.defaultProps = {
  points: [],
};

CompareTooltip.propTypes = {
  date: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
  })),
  volume: PropTypes.shape({
    translation: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
  }),
  ohlc: PropTypes.shape({
    color: PropTypes.string,
    open: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    high: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    low: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    close: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
  }),
};

export default CompareTooltip;
