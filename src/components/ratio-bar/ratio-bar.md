    const data = [{
      value: 100,
      change: -20,
    }, {
      value: 1000,
      change: 5,
    }, {
      value: 500,
      change: -2,
    }, {
      value: 10,
      change: 0,
    }];

    const altData = [{
      value: 1000,
      change: -20,
    }, {
      value: 100,
      change: 5,
    }, {
      value: 100,
      change: 2,
    }, {
      value: 100,
      change: 0,
    }];

    <div>
      <RatioBar label="Performance" data={ data } />

      <RatioBar showLabels={ false } data={ altData } />
    </div>
