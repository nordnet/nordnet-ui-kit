Type: `text`

    function toUpperCase(value) {
      return value.toUpperCase();
    }

    <div>
      <Input
        label="Text input"
        placeholder="Enter text"
      />

      <Input
        label="Text input with left addon"
        leftAddon="$"
        placeholder="Enter text with left addon"
      />

      <Input
        label="Text input with right addon"
        rightAddon="USD"
        hasSuccess
        placeholder="Enter text with right addon"
      />

      <Input
        label="Text input with custom formatter"
        placeholder="Enter text to see how the formatter works"
        valueFormatter={toUpperCase}
      />

      <Input
        label="Text input with error"
        placeholder="Enter text"
        value="text"
        hasError
      />

      <Input
        label="Text input with warning"
        placeholder="Enter text"
        value="text"
        hasWarning
      />

      <Input
        label="Text input with success"
        placeholder="Enter text"
        value="text"
        hasSuccess
      />
    </div>

Type: `password`

    <div>
      <Input
        label="Password input"
        placeholder="Enter password"
        type="password"
      />

      <Input
        label="Password input with error"
        placeholder="Enter password"
        type="password"
        value="Passw0rd!"
        hasError
      />

      <Input
        label="Password input with warning"
        placeholder="Enter password"
        type="password"
        value="Passw0rd!"
        hasWarning
      />

      <Input
        label="Password input with success"
        placeholder="Enter password"
        type="password"
        value="Passw0rd!"
        hasSuccess
      />
    </div>

Type: `select`

    const options = [{
      label: 'Option 1',
      value: 1,
    }, {
      label: 'Option 2',
      value: 2,
    }, {
      label: 'Option 3',
      value: 3,
    }];

    <Input
      label="Select input"
      placeholder="Pick an option"
      type="select"
      options={ options }
    />

Type: `checkbox`

    <div>
      <Input
        label="Checkbox input"
        type="checkbox"
      />

      <Input
        label="Checkbox input with success"
        type="checkbox"
        checked
        hasSuccess
        helpText="Well done!"
      />

      <Input
        label="Checkbox input with error"
        type="checkbox"
        checked
        hasError
        helpText="Oh no!"
      />
    </div>

Type: `radio`

    <div>
      <Input
        label="Radio input"
        type="radio"
        name="radio-input"
        value="1"
      />

      <Input
        label="Radio input with success"
        type="radio"
        name="radio-input"
        value="2"
        hasSuccess
      />

      <Input
        label="Radio input with error"
        type="radio"
        name="radio-input"
        value="3"
        hasError
      />
    </div>
