Radio type:

    <SegmentedControl
      onChange={ console.log }
      value="green" name="colorRadio" type="radio">
      <span value="red">Red</span>
      <span value="green">Green</span>
      <span value="blue">Blue</span>
    </SegmentedControl>

Checkbox type:

    <SegmentedControl
      onChange={ console.log }
      value="green" name="colorCheck" type="checkbox">
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
