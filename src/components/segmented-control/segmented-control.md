Radio type, Primary (using icons):

    const { Icon } = require('../../');
    const color = require('../../styles/color').default;

    <SegmentedControl
      value="green"
      name="colorRadio"
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
        name="colorRadio"
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

      const { Icon } = require('../../');
      const color = require('../../styles/color').default;

      <SegmentedControl
        variant="secondary"
        value="ALL_NEWS"
        name="colorRadio"
        type="radio"
      >
        <span value="ALL_NEWS">
          ALL NEWS
        </span>
        <span value="MY_NEWS">
          MY NEWS
        </span>
      </SegmentedControl>


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
