With results:

    const search = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
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
        }]);
      }, 500);
    });

    <Search search={ search } />

With no results:

    const search = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, 500);
    });

    <Search search={ search } />
