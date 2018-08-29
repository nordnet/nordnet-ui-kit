Type: `text`

    function toUpperCase(value) {
      return value.toUpperCase();
    }

    <div>
      <Input
        label="Text input"
        placeholder="Enter text"
      />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <Input placeholder="Enter text with no label" />
        </div>
        <div style={{ width: '48%' }}>
          <Input placeholder="Enter success text with no label" hasSuccess />
        </div>
      </div>

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

      <Input
        label="Text input with success"
        placeholder="Enter text"
        value="text"
        hasSuccess
        variant="secondary"
      />
    </div>

Type: `password`

    <div>
      <Input
        label="Password input"
        placeholder="Enter password"
        type="password"
      />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <Input type="password" placeholder="Enter password with no label" />
        </div>
        <div style={{ width: '48%' }}>
          <Input type="password" placeholder="Enter success password with no label" hasSuccess />
        </div>
      </div>

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

      <Input
        label="Password input with success"
        placeholder="Enter password"
        type="password"
        value="Passw0rd!"
        hasSuccess
        variant="secondary"
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
      label: 'Super mega very long option 3 - this is a test to show that the option is properly cut after a specific length and that the whole option text is shown in a title tag',
      value: 3,
    }];

    const optgroupOptions = [{
      label: 'Optgroup 1',
      options: [{
        label: 'Option 1',
        value: 1,
      }, {
        label: 'Option 2',
        value: 2,
      }],
    }, {
      label: 'Option 3',
      value: 3,
    }, {
      label: 'Optgroup 2',
      options: [],
    }, {
      label: 'Optgroup 3',
      options: [{
        label: 'Option 4',
        value: 4,
      }],
    }];
    <div>
      <Input
        label="Select input"
        placeholder="Pick an option"
        type="select"
        options={ options }
      />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <Input type="select" placeholder="Pick option with no label" options={options} />
        </div>
        <div style={{ width: '48%' }}>
          <Input type="select" placeholder="Pick success option with no label" hasSuccess options={options} />
        </div>
      </div>

      <Input
        label="Select input"
        placeholder="Pick the right option"
        type="select"
        options={ options }
        hasError
      />

      <Input
        label="Select input"
        placeholder="Pick the another option, maybe?"
        type="select"
        options={ options }
        hasWarning
        rightAddon={'USD'}
      />

      <Input
        label="Select input"
        placeholder="Pick whatever works"
        type="select"
        options={ options }
        hasSuccess
      />

      <Input
        label="Secondary select input"
        placeholder="Pick whatever works"
        type="select"
        options={ options }
        hasSuccess
        variant="secondary"
      />

      <Input
        label="Secondary select input with selectable placeholder"
        placeholder="All"
        selectablePlaceholder
        type="select"
        options={ options }
        hasSuccess
        variant="secondary"
      />
      <Input
        label="Select input with optgroups"
        placeholder="Pick option"
        type="select"
        options={ optgroupOptions }
        hasSuccess
        variant="secondary"
      />
    </div>

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

Type: `textarea`

    <div>
      <Input
        label="textarea input"
        type="textarea"
        name="textarea-input"
        placeholder="write a story..."
      />
    </div>
