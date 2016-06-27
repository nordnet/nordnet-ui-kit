    const { eric, abb } = require('./data.js');

    const style = {
      marginRight: '1.6rem',
      background: '#f5f5f5',
      display: 'inline-block',
      height: 32,
      width: 128,
    };

    <div>
      <div style={ style }>
        <SparkGraph points={ eric }/>
      </div>
      <div style={ style }>
        <SparkGraph points={ abb } />
      </div>
      <div style={ style }>
        <SparkGraph points={ [3, 1, 3, 1, 3] } />
      </div>
      <div style={ style }>
        <SparkGraph points={ [3, 1, 3, 1, 3] } stroke="blue" strokeWidth={5} />
      </div>
      <div style={ style }>
        <SparkGraph points={ [3, 1, 3, 1, 3] } stroke="purple" strokeWidth={10}/>
      </div>
      <SparkGraph points={ [3, 1, 3, 1, 3] } style={ style } />
      <SparkGraph points={ abb } />
    </div>
