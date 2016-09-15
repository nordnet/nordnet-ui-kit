Highcharts tooltips

    const data = require('./example-data').default;
    const style = {
      display: 'inline-block',
      marginRight: '1.6rem',
      boxShadow: '0 .2rem .4rem .2rem rgba(0, 0, 0, .1)',
    };

    <div>
      <div style={ style }>
        <GraphTooltip type="compare" {...data} />
      </div>
      <div style={ style }>
        <GraphTooltip type="instrument" {...data} />
      </div>
    </div>
