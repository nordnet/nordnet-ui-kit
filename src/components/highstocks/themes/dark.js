export default {
  chart: {
    type: 'line',
    marginBottom: 25,
    backgroundColor: '#ffffff',
    borderColor: '#D6D6D6',
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
  }
};
