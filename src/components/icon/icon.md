    const { Icon } = require('../../'); // nordnet-ui-kit

    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16,
      minWidth: '20%',
    };
    const icons = Object.keys(Icon);

    <div>
      {icons.map(iconName => {
        const IconComponent = Icon[iconName];

        return (
          <div key={ iconName } style={ style }>

            <IconComponent
              stroke="#00A9EC"
              fill="#00A9EC"
            />

            <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ iconName }</div>
          </div>
        );
      })}
    </div>
