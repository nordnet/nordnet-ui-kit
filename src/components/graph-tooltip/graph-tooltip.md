Highcharts tooltips

    require('./instrument-tooltip.scss');
    require('./compare-tooltip.scss');
    const data = require('./example-data').default;

    <div>
      <Widget>
        <GraphTooltip type="compare" {...data} />
      </Widget>
      <Widget>
        <GraphTooltip type="instrument" {...data} />
      </Widget>
    </div>
