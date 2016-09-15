    const icons = require('./icons.js');
    const style = {
      display: 'inline-block',
      textAlign: 'center',
      padding: '1.6rem',
      minWidth: '20%',
    };

    <div>
      {Object.keys(icons.default).map(icon => (
        <div key={ icon } style={ style }>

          <Icon
            type={ icon }
            stroke="#00A9EC"
            fill="#00A9EC"
            renderInline
          />

          <div style={{ fontSize: '1.2rem', fontFamily: '"Hack", monospace' }}>{ icon }</div>
        </div>
      ))}
    </div>
