export default theme => ({
  container: {
    ...theme.typography.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  form: {
    width: '100%',
  },
  readOnly: {
    width: '100%',
    position: 'relative',
    fontSize: 14,
    marginBottom: 4,
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
    flexDirection: 'row',
    flexShrink: 0,
  },
  buttonEdit: {
    width: 31,
    height: 31,
  },
});
