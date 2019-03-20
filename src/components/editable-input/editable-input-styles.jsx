export default theme => ({
  container: {
    ...theme.typography.secondary(),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  isEditing: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.mixins.media('md')]: {
      alignItems: 'flex-end',
    },
    [theme.mixins.media('lg')]: {
      flexDirection: 'row',
    },
  },
  form: {
    width: '100%',
  },
  readOnly: {
    width: '100%',
    position: 'relative',
    marginBottom: 4,
    ...theme.typography.secondary(),
  },
  value: {
    paddingTop: 11,
    paddingBottom: 9,
  },
  hasLabel: {
    marginBottom: 23,
  },
  hasError: {
    marginBottom: 20,
    '& $value': {
      borderBottom: `3px solid ${theme.palette.negative}`,
    },
  },
  input: {
    width: '100%',
    marginRight: 9,
  },
  buttons: {
    display: 'flex',
    flexShrink: 0,
    [theme.mixins.media('lg')]: {
      alignSelf: 'flex-start',
    },
  },
  buttonEdit: {
    alignSelf: 'flex-start',
  },
});
