Classic usage: single flag numeric size

    const flags = require('./flags');

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

Classic usage: single flag literal size

    const flags = require('./flags');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16
    };

    initialState = { size: 'md' };
  
    <div>
      <span>Select size:  </span>
      <select value='md' onChange={(event) => setState({ size: event.target.value })}>
       <option>xs</option>
       <option>sm</option>
       <option>md</option>
       <option>lg</option>
     </select>
     <div>
      { Object.keys(flags.default).map(flag => (
          <div key={ flag } style={ style }>
            <Flag size={state.size} countryCode={ flag } />
            <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ flag }</div>
          </div>
        )) }
     </div>
    </div>

Rounded flags numeric size:

    const flags = require('./flags');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16
    };

    <div>
      { Object.keys(flags.default).map(flag => (
        <div key={ flag } style={ style }>
          <Flag size={32} countryCode={ flag } round />
          <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ flag }</div>
        </div>
      )) }
    </div>

Rounded flags literal size:

    const flags = require('./flags');

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16
    };

    initialState = { size: 'md' };

    <div>
      <div>
        <span>Select size:  </span>
        <select value='md' onChange={(event) => setState({ size: event.target.value })}>
        <option>xs</option>
        <option>sm</option>
        <option>md</option>
        <option>lg</option>
      </select>
     </div>
     <div>
      { Object.keys(flags.default).map(flag => (
        <div key={ flag } style={ style }>
          <Flag size={state.size} countryCode={ flag } round />
          <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ flag }</div>
        </div>
      )) }
      </div>
    </div>

Currencies numeric size:

    <div>
      <Flag size={64} countryCode="eu" secondaryCountryCode="dk" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="no" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="se" />
      <Flag size={64} countryCode="dk" secondaryCountryCode="se" />
      <Flag size={64} countryCode="no" secondaryCountryCode="se" />
      <Flag size={64} countryCode="us" secondaryCountryCode="se" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="us" />
      <Flag size={64} countryCode="eu" secondaryCountryCode="gb" />
    </div>

Currencies literal size:

    initialState = { size: 'md' };

    <div>
      <div>
        <span>Select size:  </span>
        <select value='md' onChange={(event) => setState({ size: event.target.value })}>
        <option>xs</option>
        <option>sm</option>
        <option>md</option>
        <option>lg</option>
      </select>
     </div>
     <div>
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="dk" />
     </div>
    </div>

At the moment these are all the supported currency combinations, but we can easily create more.
