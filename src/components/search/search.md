Note: onOutsideClick doesn't work with Styleguidist atm. Known issue with HOCs.

With results:

    const search = () => {}

    const results=[{
      name: 'Hennes & Mauritz AB',
      market: 'Nasdaq Stockholm',
      href: 'https://www.nordnet.se/mux/web/marknaden/aktiehemsidan/index.html?identifier=992',
      countryCode: 'se',
      development: 5,
    }, {
      name: 'Apple Inc.',
      market: 'Nasdaq',
      href: 'https://www.nordnet.se/mux/web/marknaden/aktiehemsidan/index.html?identifier=992',
      countryCode: 'us',
      development: 1,
    }];

    <Search search={ search } results={ results } value={"Test"} />

With no results:

    <Search search={ search } />
