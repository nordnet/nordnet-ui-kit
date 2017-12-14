    const { Icon } = require('../../'); // nordnet-ui-kit

    <ul>
      <li style={{marginBottom: '11px'}}>
        <span>Hover to show, click to toggle:</span>
        <Tooltip content="Using text as the container will change the appearance of the text to a link." placement={'right'}>
          <span>Hello world!</span>
        </Tooltip>
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>Placement 'above':</span>
        <Tooltip content="Above" placement={'above'}><span style={{fontSize: '30px'}}>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content="Above" placement={'above'}><span>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content={ <span>Above</span> } placement={'above'}  containerStyle={{ display: 'flex', alignItems: 'center', backgroundColor: 'red' }}/>
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>Placement 'below':</span>
        <Tooltip content="Below" placement={'below'}><span style={{fontSize: '30px'}}>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content="Below" placement={'below'}><span>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content={ <span>Below</span> } placement={'below'} />
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>Placement 'left':</span>
        <Tooltip content="Left" placement={'left'}><span style={{fontSize: '30px'}}>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content="Left" placement={'left'}><span>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content={ <span>Left</span> } placement={'left'} />
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>Placement 'right':</span>
        <Tooltip content="Right" placement={'right'}><span style={{fontSize: '30px'}}>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content="Right" placement={'right'}><span>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content={ <span>Right</span> } placement={'right'} />
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>No placement given:</span>
        <Tooltip content="The component found out the best placement for me!"><span style={{fontSize: '30px'}}>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content="The component found out the best placement for me!"><span>Hello world!</span></Tooltip>
        <span> ••• </span>
        <Tooltip content={ <span>The component found out the best placement for me!</span> } />
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
          <Icon.Heart fill="tomato" stroke="tomato" width={ 16 } height={ 16 } />
        </Tooltip>
      </li>

      <li style={{marginBottom: '11px'}}>
        <span>Fixed width 345px:</span>
        <Tooltip content={ <span>Fixed width</span> } fixedWidth={345} />
      </li>
    </ul>
