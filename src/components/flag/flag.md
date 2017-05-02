Classic usage: single flag

    const flags = require('./flags.js');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16
    };

    <div>
      { Object.keys(flags.default).map(flag => (
        <div key={ flag } style={ style }>
          <Flag size={32} countryCode={ flag } />
          <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ flag }</div>
        </div>
      )) }
    </div>

Currencies:

    <div>
      <Flag size={64} countryCode="eu" secondaryCountryCode="dk" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="no" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="se" />
      <Flag size={64} countryCode="dk" secondaryCountryCode="se" />
      <Flag size={64} countryCode="no" secondaryCountryCode="se" />
      <Flag size={64} countryCode="us" secondaryCountryCode="se" />
    </div>

At the moment these are all the supported currency combinations, but we can easily create more.
