
    <SegmentedControl
      onChange={ newValue => { console.log('new segment value', newValue); } }
      value="green" name="color">
      <span value="red">Red</span>
      <span value="green">Green</span>
    </SegmentedControl>


With single option (a toggler):

    <SegmentedControl
      onChange={ newValue => { console.log('new toggle value', newValue); } }
      name="toggler" toggleValue={true}>
      <span value="red">Red</span>
    </SegmentedControl>
