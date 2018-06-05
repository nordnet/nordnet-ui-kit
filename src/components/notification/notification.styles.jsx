const styles = ({ palette }) => ({
  notification: {
    background: palette.color.grayLight,
    width: '100%',
  },
  content: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 8px',
  },
  info: {
    backgroundColor: '#D6DCEA',
  },
  warning: {
    backgroundColor: '#FFEAAC',
  },
  error: {
    backgroundColor: '#FEB7B3',
  },
  success: {
    backgroundColor: '#A8DBD6',
  },
  variant: {
    small: {},
    big: {},
  },
  icon: {
    flex: '0 0 auto',
    width: 20,
    height: 20,
    marginRight: 8,
  },
  close: {
    flex: '0 0 auto',
    marginLeft: 'auto',
    paddingLeft: 8,
    width: 20,
    height: 20,
  },
});

export default styles;
