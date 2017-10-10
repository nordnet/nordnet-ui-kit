Primary, simple (default):

    <div>
      <ProgressBar value={3} max={20} />
    </div>

Secondary, simple:

    <div>
      <ProgressBar variant="secondary" value={3} max={20} />
    </div>

Bigger, with numbers:

    <div>
      <ProgressBar size="lg" printNumbers value={3} max={5} />
    </div>

Advanced (experimental):

    const clickables = [
      { label: 'A', reached: true, href: '/foo/bar', title: 'A tag' },
      { label: 'B', reached: false, onClick: () => alert('hej'), title: 'BUTTON tag' },
      { label: 'C', reached: true, disabled: true, title: 'Disabled' },
      { label: 'D', reached: false,  disabled: true, title: 'Disabled' },
    ];

    <div>
      <ProgressBar variant="secondary" size="md" printNumbers clickables={clickables} value={6} max={9} />
    </div>

<!--
Debug:

    const clickables = [
      { href: '/foo/bar' },
      { onClick: () => alert('hej')},
      { disabled: true },
      { href: '/foo/bar' },
      { href: '/foo/bar' },
      { disabled: true },
    ];

    const style = {
      margin: '16px 0',
    };

    <div>
      <ProgressBar value={3} max={20} style={ style } className='myClass'/>
      <ProgressBar value={3} max={20} style={ style } />

      <ProgressBar variant="secondary" clickables={clickables} size="xs" value={3} max={20} style={ style } />
      <ProgressBar variant="primary" printNumbers clickables={clickables} size="xs" value={3} max={20} style={ style } />
      <ProgressBar variant="secondary" printNumbers clickables={clickables} size="xs" value={3} max={20} style={ style } />

      <ProgressBar variant="primary" clickables={clickables} size="sm" value={4} max={12} style={ style } />
      <ProgressBar variant="primary" printNumbers clickables={clickables} size="sm" value={4} max={12} style={ style } />
      <ProgressBar variant="secondary" printNumbers clickables={clickables} size="sm" value={4} max={12} style={ style } />

      <ProgressBar variant="primary" clickables={clickables} size="md" value={4} max={12} style={ style } />
      <ProgressBar variant="primary" printNumbers href="a" clickables={clickables} size="md" value={4} max={12} style={ style } />

      <ProgressBar variant="primary" clickables={clickables} size="lg" value={4} max={9} style={ style } />
      <ProgressBar variant="secondary" printNumbers clickables={clickables} size="lg" value={4} max={9} style={ style } />
    </div>
-->