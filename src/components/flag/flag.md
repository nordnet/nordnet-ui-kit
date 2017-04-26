Classic usage: single flag

    const flags = require('./flags.js');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16
    };

    <div>
      {Object.keys(flags.default).map(flag => (
        <div key={ flag } style={ style }>
          <Flag size={32} countryCode={ flag } />
          <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ flag }</div>
        </div>
      ))}
    </div>

Advanced usage: combined flag

    <div>
      <Flag size={64} countryCode="no" secondaryCountryCode="dk" />
      <Flag size={64} countryCode="dk" secondaryCountryCode="no" />
      <Flag size={64} countryCode="no" secondaryCountryCode="se" />
      <Flag size={64} countryCode="se" secondaryCountryCode="no" />
      <Flag size={64} countryCode="us" secondaryCountryCode="se" />
      <Flag size={64} countryCode="se" secondaryCountryCode="us" />
      <Flag size={64} countryCode="us" secondaryCountryCode="de" />
      <Flag size={64} countryCode="de" secondaryCountryCode="us" />
      <Flag size={64} countryCode="us" secondaryCountryCode="ca" />
      <Flag size={64} countryCode="ca" secondaryCountryCode="us" />
    </div>
