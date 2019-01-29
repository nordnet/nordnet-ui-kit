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
      <select defaultValue='md' onChange={(event) => setState({ size: event.target.value })}>
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
        <select defaultValue='md' onChange={(event) => setState({ size: event.target.value })}>
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

Currencies literal size:

    initialState = { size: 'md' };

    <div>
      <div>
        <span>Select size:  </span>
        <select defaultValue='md' onChange={(event) => setState({ size: event.target.value })}>
        <option>xs</option>
        <option>sm</option>
        <option>md</option>
        <option>lg</option>
      </select>
     </div>
     <div>
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="dk" />
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="no" />	
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="se" />	
      <Flag size={state.size} countryCode="dk" secondaryCountryCode="se" />	
      <Flag size={state.size} countryCode="no" secondaryCountryCode="se" />	
      <Flag size={state.size} countryCode="us" secondaryCountryCode="se" />	
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="us" />	
      <Flag size={state.size} countryCode="eu" secondaryCountryCode="gb" />
     </div>
    </div>

At the moment these are all the supported currency combinations, but we can easily create more.
