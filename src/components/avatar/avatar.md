    const { Icon } = require('../../');
    const color = require('../../styles/color').default;

    <div style={{display: 'flex'}}>
      <Avatar>
        Er
      </Avatar>
      <Avatar iconSize={ 'large' }>
        ISK
      </Avatar>
      <Avatar iconColor={ color.blueDarker }>
        Hm
      </Avatar>
      <Avatar style={{ fontSize: 24 }} iconSize={ 'custom' } iconColor={ color.red }>
        <Icon.Trash width={24} height={24} stroke={color.white} />
      </Avatar>
    </div>
