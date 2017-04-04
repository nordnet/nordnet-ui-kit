    const icons = require('./icons.js');
    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: 16,
      minWidth: '20%',
    };

    <div>
      {Object.keys(icons.default).map(icon => (
        <div key={ icon } style={ style }>

          <Icon
            type={ icon }
            stroke="#00A9EC"
            fill="#00A9EC"
          />

          <div style={{ fontSize: 12, fontFamily: '"Hack", monospace' }}>{ icon }</div>
        </div>
      ))}
    </div>
