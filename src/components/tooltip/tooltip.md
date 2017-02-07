
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
        <span>Position above:</span>
        <Tooltip content={ <span>above</span> } placement={'above'} />
      </li>
      <li style={{marginBottom: '11px'}}>
        <span>Position right:</span>
        <Tooltip content={ <span>right</span> } placement={'right'} />
      </li>
    </ul>
