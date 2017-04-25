Radio type (using icons):

    const { Icon } = require('../../');
    const color = require('../../styles/color').default;

    <SegmentedControl
      onChange={ console.log }
      value="green"
      name="colorRadio"
      type="radio"
    >
      <span value="red">
        <Icon.Trash  width={18} height={18} stroke={color.red} />
      </span>
      <span value="green">
        <Icon.Trash  width={18} height={18} stroke={color.green} />
      </span>
      <span value="blue">
        <Icon.Trash  width={18} height={18} stroke={color.blue} />
      </span>
    </SegmentedControl>

Checkbox type:

    <SegmentedControl
      onChange={ console.log }
      name="colorCheck" type="checkbox">
      <span value="red" checked={true}>Red</span>
      <span value="green">Green</span>
      <span value="blue" checked={true}>Blue</span>
    </SegmentedControl>


With single option, "checkbox" type:

    <SegmentedControl
      onChange={ console.log }
      name="colors"
      type="checkbox">
      <span value="red" checked={true}>Red</span>
    </SegmentedControl>
