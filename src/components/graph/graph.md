The UI kit exports two themes for highcharts and a base them for easy overriding.

    const { data } = require('./data.js');

    const config = {
      // settings here will override default theme using deep merge.
      series: [{
        type: 'area',
        data: data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };

    <div>
      <Graph
        name="graph"
        variant="dark"
        config={ config }
      />

      <Graph
        name="graph"
        variant="light"
        config={ config }
      />
    </div>
