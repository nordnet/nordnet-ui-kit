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
    fontSize: 14,
    paddingTop: 11,
    paddingBottom: 8,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    marginRight: 9,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonEdit: {
    width: 24,
    height: 24,
    marginTop: 9,
  },
});
