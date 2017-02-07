
    <ul>
      <li style={{marginBottom: '11px'}}>
        <span>This is some text that requires a tooltip.</span>
        <Tooltip content="This question mark is the default tooltip container." />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Hover to show, click to toggle:</span>
        <Tooltip content="Using text as the container will change the appearance of the text to a link." placement={'right'}>
          <span>Hello world!</span>
        </Tooltip>
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Left of text</span>
        <Tooltip content="Long tooltip left of text" placement={'left'}>
          <span>Left of Hello world!</span>
        </Tooltip>
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>This Tooltip contains some HTML:</span>
        <Tooltip content={ <span>This is a <u>span</u>!</span> } />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>How it looks when having multiple lines in a Tooltip:</span>
        <Tooltip content={
          <span>
            Line 1 with some content
            <br />
            Line 2 with some other content
          </span> } />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>How it looks when using another icon:</span>
        <Tooltip content={ <span>A heart</span> }>
          <Icon type="heart" fill="#00A9EC" stroke="#00A9EC" width={ 16 } height={ 16 } />
        </Tooltip>
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Placement 'above':</span>
        <Tooltip content={ <span>Above</span> } placement={'above'} />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Placement 'right':</span>
        <Tooltip content={ <span>Right</span> } placement={'right'} />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Placement 'left:'</span>
        <Tooltip content={ <span>Left 123</span> } placement={'left'} />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Fixed width 345px:</span>
        <Tooltip content={ <span>Fixed width</span> } fixedWidth={345} />
      </li>
    </ul>
