    const { Icon } = require('../../');
    const color = require('../../styles/color').default;

    <div style={{display: 'flex'}}>
      <Avatar size={ 'xs' }>
        xs
      </Avatar>
      <Avatar>
        Aa
      </Avatar>
      <Avatar size={ 'md' }>
        AF
      </Avatar>
      <Avatar size={ 'lg' }>
        ISK
      </Avatar>
      <Avatar color={ color.blueDarker }>
        Hm
      </Avatar>
      <Avatar style={{ width: 40, height: 40 }} color={ color.red }>
        <Icon.Trash width={18} height={18} fill={color.white} />
      </Avatar>
    </div>
