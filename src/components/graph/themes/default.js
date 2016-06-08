export default {
  chart: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    spacingLeft: 8,
    spacingRight: 8,
    animation: false,
    style: {
      fontFamily: 'Verdana, Arial, sans-serif',
      fontSize: '10px'
    },
    resetZoomButton: {
      position: {
        x: 0,
        y: 0
      },
      theme: {
        fill: '#EBEAEA',
        stroke: '#D5D3D4',
        r: 0,
        states: {
          hover: {
            fill: '#D5D3D4',
            stroke: '#D5D3D4',
            style: {
              color: '#26282F'
            }
          }
        }
      }
    }
  },

  navigation: {
    buttonOptions: {
      enabled: false
    }
  },

  scrollbar: {
    enabled: false
  },

  legend: {
    enabled: false
  },

  loading: {
    hideDuration: 0,
    showDuration: 0,
    style: {
      backgroundColor: 'white',
      opacity: 0.5,
      display: 'block'
    },
    labelStyle: {
      position: 'absolute',
      left: '50%',
      top: '40%',
      width: '50px',
      height: '50px',
      display: 'block'
    }
  },

  title: {
    text: '',
    color: '#000000',
    align: 'center',
    verticalAlign: 'top',
    style: {
      font: '12px Verdana, arial, sans-serif'
    }
  },

  subtitle: {
    text: '',
    floating: true,
    align: 'center',
    verticalAlign: 'top'
  },

  credits: {
    enabled: false
  }
};
