Radio type, Primary (using icons):

    const { Icon } = require('../../');
    const color = require('../../styles/color').default;

    <SegmentedControl
      value="green"
      name="colorRadioIcons"
      type="radio"
    >
      <span value="red">
        <Icon.Trash  width={18} height={18} fill={color.red} />
      </span>
      <span value="green">
        <Icon.Trash  width={18} height={18} fill={color.green} />
      </span>
      <span value="blue">
        <Icon.Trash  width={18} height={18} fill={color.blue} />
      </span>
    </SegmentedControl>

Radio type, Primary (using text):

      const { Icon } = require('../../');
      const color = require('../../styles/color').default;

      <SegmentedControl
        value="left"
        name="colorRadioText"
        type="radio"
      >
        <span value="left">
          Left
        </span>
        <span value="right">
          Right
        </span>
      </SegmentedControl>

Radio type, Secondary (using text):

Warning! This variant is deprecated, please use the Tabs component.

      // This is a sample component to enable testing setting value from outside the UI-Kit
      const React = require('react');

      class RadioTypeSample extends React.PureComponent {
        constructor(props) {
          super(props);
          this.state = { value: 'ALL_NEWS' };
        }

        render() {
          return (
            <div>
              <SegmentedControl
                variant="secondary"
                value={this.state.value}
                name="colorRadioText2"
                type="radio"
              >
                <span value="ALL_NEWS">
                  ALL NEWS
                </span>
                <span value="RECOMMENDED_NEWS">
                  RECOMMENDED NEWS
                </span>
                <span value="MY_NEWS">
                  MY NEWS
                </span>
              </SegmentedControl>
              <div style={{padding: '0 20px 20px', marginTop: '50px', border: '1px solid lightgray'}}>
                <h5>Click buttons to simulate select from outside UI-Kit</h5>
                <button onClick={ () => { this.setState({ value:'ALL_NEWS' }); }}>ALL_NEWS</button>
                <button style={{marginLeft: '5px'}} onClick={ () => { this.setState({ value:'RECOMMENDED_NEWS' }); }}>RECOMMENDED_NEWS</button>
                <button style={{marginLeft: '5px'}} onClick={ () => { this.setState({ value:'MY_NEWS' }); }}>MY_NEWS</button>
              </div>
            </div>
          );
        }
      }

      <RadioTypeSample />

Checkbox type:

    <SegmentedControl
      name="colorCheck" type="checkbox">
      <span value="red" checked={true}>Red</span>
      <span value="green">Green</span>
      <span value="blue" checked={true}>Blue</span>
    </SegmentedControl>

With single option, "checkbox" type:

    <SegmentedControl
      name="colors"
      type="checkbox">
      <span value="red" checked={true}>Red</span>
    </SegmentedControl>
