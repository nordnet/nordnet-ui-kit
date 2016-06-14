import React from 'react';
import Highstocks from 'highcharts/highstock';
import ChartsFactory from './charts-factory';

function ReactHighstocks(props) {
  return (
    <ChartsFactory { ...props } chartType={ 'StockChart' } highcharts={ Highstocks } />
  );
}

export function getHighstocks() {
  return Highstocks;
}

export default ReactHighstocks;
