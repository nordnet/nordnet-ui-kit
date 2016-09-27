With results:

    const search = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          name: 'Hennes & Mauritz AB',
          market: 'Nasdaq Stockholm',
          countryCode: 'se',
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
