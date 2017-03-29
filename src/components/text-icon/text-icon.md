    const color = require('../../styles/color').default;

    <div style={{display: 'flex'}}>
      <TextIcon
        text={ 'Er' }
      />
      <TextIcon
        iconSize={ 'large' }
        text={ 'ISK' }
      />
      <TextIcon
        text={ 'Hm' }
        iconColor={ color.blueDarker }
      />
      <TextIcon
        style={{ fontSize: 30 }}
        iconSize={ 'custom' }
        text={ 'CC' }
        iconColor={ color.grayLight }
        textColor={ color.black }
      />
    </div>
