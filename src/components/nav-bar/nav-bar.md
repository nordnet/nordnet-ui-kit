The nav bar has some responsive behaviour, the breakpoints for this behaviour are available in the `src/components/nav-bar/nav-bar.scss` file.

The variables you'll probably want to overwrite are the following:
```scss
$breakpoints: (
  sm: '48em',
  md: '64em',
  lg: '75em',
) !default;

$wrapper-max-width: 120rem;
```

    const items = [{
      label: 'Overview',
      onClick: () => {
        setState({
          subItems: [{
            label: 'Overview item 1'
          }, {
            label: 'Overview item 2'
          }, {
            label: 'Overview item 3'
          }],
        });
      },
    }, {
      label: 'Invest',
      onClick: () => {
        setState({
          subItems: [{
            label: 'Invest item 1'
          }, {
            label: 'Invest item 2'
          }, {
            label: 'Invest item 3'
          }],
        });
      },
    }, {
      label: 'Discover',
      url: '#Discover',
      onClick: () => {
        setState({
          subItems: [],
        });
      },
    }, {
      label: 'News',
      onClick: () => {
        setState({
          subItems: [],
        });
      },
    }, {
      label: 'Shareville',
      onClick: () => {
        setState({
          subItems: [],
        });
      },
    }];

    const initialState = {
      subItems: [],
    };

    const other = <Button variant="secondary">Log out</Button>;

    <NavBar items={ items } subItems={ state.subItems } other={ other } />
