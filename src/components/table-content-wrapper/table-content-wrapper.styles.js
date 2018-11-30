export default ({ mixins, palette }) => ({
  screenReadersOnly: mixins.screenReadersOnly,
  feedback: {
    fontStyle: 'italic',
    padding: 50,
    color: palette.color.black,
    textAlign: 'center',
  },
});
