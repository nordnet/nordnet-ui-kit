import React, { PropTypes } from 'react';
import CandleListElement from './list-elements/candle-list-element';
import PriceListElement from './list-elements/price-list-element';
import VolumeListElement from './list-elements/volume-list-element';

import './instrument-tooltip.scss';

function InstrumentTooltip({ date, points, volume, ohlc }) {
  return (
    <div className="instrument-tooltip">
      <b>{ date }</b>
      <table className="instrument-tooltip__list">
        <tbody>
          { points.map(p => <PriceListElement key={ p.name } { ...p } />) }
          { ohlc ? <CandleListElement { ...ohlc } /> : null }
          { volume ? <VolumeListElement { ...volume } /> : null }
        </tbody>
      </table>
    </div>
  );
}

InstrumentTooltip.defaultProps = {
  points: [],
};

InstrumentTooltip.propTypes = {
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

export default InstrumentTooltip;
