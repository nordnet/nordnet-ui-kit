Primary button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="primary" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="action" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="danger" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="warning" style= { style }>Click Me</Button>
      <Button variant="primary" modifier="success" style= { style }>Click Me</Button>
    </div>

Primary, disabled:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="primary" disabled style= { style }>Disabled</Button>
      <Button variant="primary" disabled modifier="action" style= { style }>Disabled</Button>
      <Button variant="primary" disabled modifier="danger" style= { style }>Disabled</Button>
      <Button variant="primary" disabled modifier="warning" style= { style }>Disabled</Button>
      <Button variant="primary" disabled modifier="success" style= { style }>Disabled</Button>
    </div>
    
Primary, icon:

    const { Icon } = require('../../');
    const icon = <Icon.Edit fill="currentColor" stroke="currentColor" />;

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="primary" iconButton style= { style }>{icon}</Button>
      <Button variant="primary" modifier="action" iconButton style= { style }>{icon}</Button>
      <Button variant="primary" modifier="danger" iconButton style= { style }>{icon}</Button>
      <Button variant="primary" modifier="warning" iconButton style= { style }>{icon}</Button>
      <Button variant="primary" modifier="success" iconButton style= { style }>{icon}</Button>
    </div>

Secondary button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="secondary" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="action" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="danger" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="warning" style={ style }>Click Me</Button>
      <Button variant="secondary" modifier="success" style={ style }>Click Me</Button>
    </div>

Secondary, disabled:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="secondary" disabled style={ style }>Click Me</Button>
      <Button variant="secondary" disabled modifier="action" style={ style }>Click Me</Button>
      <Button variant="secondary" disabled modifier="danger" style={ style }>Click Me</Button>
      <Button variant="secondary" disabled modifier="warning" style={ style }>Click Me</Button>
      <Button variant="secondary" disabled modifier="success" style={ style }>Click Me</Button>
    </div>
    
Secondary, icon:

    const { Icon } = require('../../');
    const icon = <Icon.Edit fill="currentColor" stroke="currentColor" />;

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="secondary" iconButton style= { style }>{icon}</Button>
      <Button variant="secondary" modifier="action" iconButton style= { style }>{icon}</Button>
      <Button variant="secondary" modifier="danger" iconButton style= { style }>{icon}</Button>
      <Button variant="secondary" modifier="warning" iconButton style= { style }>{icon}</Button>
      <Button variant="secondary" modifier="success" iconButton style= { style }>{icon}</Button>
    </div>

Link button:

    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="link" style={ style }>Click Me</Button>
      <Button variant="link" modifier="action" style={ style }>Click Me</Button>
      <Button variant="link" modifier="danger" style={ style }>Click Me</Button>
      <Button variant="link" modifier="warning" style={ style }>Click Me</Button>
      <Button variant="link" modifier="success" style={ style }>Click Me</Button>
    </div>

Link icon:

    const { Icon } = require('../../');
    const icon = <Icon.Edit fill="currentColor" stroke="currentColor" />;
    
    const style = {
      marginRight: 16,
    };

    <div>
      <Button variant="link" iconButton style={ style }>{icon}</Button>
      <Button variant="link" iconButton modifier="action" style={ style }>{icon}</Button>
      <Button variant="link" iconButton modifier="danger" style={ style }>{icon}</Button>
      <Button variant="link" iconButton modifier="warning" style={ style }>{icon}</Button>
      <Button variant="link" iconButton modifier="success" style={ style }>{icon}</Button>
    </div>

Sizes:

    const { Icon } = require('../../');
    const icon = <Icon.Edit fill="currentColor" stroke="currentColor" height={'1.5em'} width={'1.5em'} />;

    const style = {
      marginRight: 16,
      verticalAlign: 'bottom',
    };

    const groupstyle = {
      marginTop: 16,
    };

    <div>
      <div style={groupstyle}>
        <Button variant="primary" size="xs" style= { style }>Button xs</Button>
        <Button variant="primary" size="sm" style= { style }>Button sm (Default)</Button>
        <Button variant="primary" size="md" style= { style }>Button md</Button>
        <Button variant="primary" size="lg" style= { style }>Button lg</Button>
      </div>
      <div style={groupstyle}>
        <Button variant="secondary" size="xs" style= { style }>Button xs</Button>
        <Button variant="secondary" size="sm" style= { style }>Button sm (Default)</Button>
        <Button variant="secondary" size="md" style= { style }>Button md</Button>
        <Button variant="secondary" size="lg" style= { style }>Button lg</Button>
      </div>
      <div style={groupstyle}>
        <Button variant="primary" iconButton size="xs" style= { style }>{icon}</Button>
        <Button variant="primary" iconButton size="sm" style= { style }>{icon}</Button>
        <Button variant="primary" iconButton size="md" style= { style }>{icon}</Button>
        <Button variant="primary" iconButton size="lg" style= { style }>{icon}</Button>
      </div>
      <div style={groupstyle}>
        <Button variant="secondary" iconButton size="xs" style= { style }>{icon}</Button>
        <Button variant="secondary" iconButton size="sm" style= { style }>{icon}</Button>
        <Button variant="secondary" iconButton size="md" style= { style }>{icon}</Button>
        <Button variant="secondary" iconButton size="lg" style= { style }>{icon}</Button>
      </div>
    </div>
