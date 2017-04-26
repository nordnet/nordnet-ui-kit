Primary button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="primary" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="danger" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="warning" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="success" style= { style }>Click Me</Button>
    </div>

Secondary button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="secondary" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="danger" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="warning" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="success" style={ style }>Click Me</Button>
    </div>

Link button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="link" style={ style }>Click Me</Button>
      <Button variant="link" modifier="danger" style={ style }>Click Me</Button>
      <Button variant="link" modifier="warning" style={ style }>Click Me</Button>
      <Button variant="link" modifier="success" style={ style }>Click Me</Button>
    </div>

Sizes:

    const style = {
      marginRight: 16,
      verticalAlign: 'bottom',
    };

    <div>
      <Button variant="primary" size="xs" style= { style }>Button xs</Button>
      <Button variant="primary" size="sm" style= { style }>Button sm (Default)</Button>
      <Button variant="primary" size="md" style= { style }>Button md</Button>
      <Button variant="primary" size="lg" style= { style }>Button lg</Button>
    </div>
