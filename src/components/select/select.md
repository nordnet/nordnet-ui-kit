The UI kit uses [react-select](https://github.com/JedWatson/react-select) and applies a custom theme.

    const options = [{
      value: 'one',
      label: 'One'
    }, {
      value: 'two',
      label: 'Two'
    }];

    function setValue(value) {
      setState({ value })
    }

    <Select
      name="form-field-name"
      value={state.value}
      options={options}
      onChange={setValue}
    />
