The UI kit uses [react-select](https://github.com/JedWatson/react-select) and applies a custom theme.

    const options = [{
      label: 'Chocolate',
      value: 'chocolate'
    }, {
      label: 'Vanilla',
      value: 'vanilla'
    }, {
      label: 'Strawberry',
      value: 'strawberry'
    }, {
      label: 'Caramel',
      value: 'caramel'
    }, {
      label: 'Cookies and Cream',
      value: 'cookiescream'
    }, {
      label: 'Peppermint',
      value: 'peppermint'
    }];

    function setValue(value) {
      setState({ value })
    }

    <Select
      name="form-field-name"
      value={state.value}
      options={options}
      multi
      label="Favourite ice cream"
      placeholder="You can pick as many as you want"
      onChange={setValue}
    />
