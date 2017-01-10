    const divStyle = {
      position: 'relative',
    };

    <div>
      <div style={ divStyle }>
        <span>This is some text that requires a tooltip.</span>
        <Tooltip text="This question mark is the default tooltip container." />
      </div>
      <br />
      <div style={ divStyle }>
        <span>This is a custom tooltip container:</span>
        <Tooltip container="Click me!" text="Text as the container will appear as a link." />
      </div>
    </div>
