Highcharts tooltips

    require('./instrument-tooltip.scss');
    require('./compare-tooltip.scss');

    const data = {
      date: '24 May',
      points: [{
        name: 'OMX',
        color: 'black',
        value: '13',
      }, {
        name: 'NIKKEI',
        color: 'blue',
        value: '37',
      }],
      volume: {
        translation: 'Volym',
        color: 'green',
        value: '4711',
      },
      ohlc: {
        color: 'orange',
        open: {
          translation: 'Öppning',
          value: '1',
        },
        high: {
          translation: 'Högsta',
          value: '13',
        },
        low: {
          translation: 'Lägsta',
          value: '2',
        },
        close: {
          translation: 'Stängning',
          value: '13',
        },
      },
    };
    <div>
      <Widget>
        <GraphTooltip type="compare" {...data} />
      </Widget>
      <Widget>
        <GraphTooltip type="instrument" {...data} />
      </Widget>
    </div>
