
    <SegmentedControl
      onChange={ newValue => { console.debug('new value', newValue); } }
      value="green" name="color">
      <span value="red">Red</span>
      <span value="green">Green</span>
    </SegmentedControl>
