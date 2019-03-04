export default theme => ({
  container: {
    ...theme.typography.secondary(),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  isEditing: {
    flexWrap: 'wrap',
    [theme.mixins.media('md')]: {
      flexWrap: 'nowrap',
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
      borderBottom: `3px solid ${theme.palette.variant.danger}`,
    },
  },
  input: {
    width: '100%',
    marginRight: 9,
  },
  buttons: {
    display: 'flex',
    flexShrink: 0,
    alignSelf: 'center',
  },
  buttonEdit: {
    width: 31,
    height: 31,
    alignSelf: 'center',
  },
});
