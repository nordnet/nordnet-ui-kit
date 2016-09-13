    const flags = require('./flags.js');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: '1.6rem'
    };

    <div>
      {Object.keys(flags.default).map(flag => (
        <div key={ flag } style={ style }>
          <Flag width={34} countryCode={ flag } />
          <div style={{ fontSize: '1.2rem', fontFamily: '"Hack", monospace' }}>{ flag }</div>
        </div>
      ))}
    </div>
