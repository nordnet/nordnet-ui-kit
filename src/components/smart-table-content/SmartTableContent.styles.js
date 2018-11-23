export default ({ mixins, palette }) => ({
  root: {
    '& .neutral': {
      color: palette.color.grayDark,
    },
    '& .positive': {
      color: palette.color.green,
    },
    '& .negative': {
      color: palette.color.red,
    },
  },
  screenReadersOnly: mixins.screenReadersOnly,
  feedback: {
    fontStyle: 'italic',
    padding: 50,
    color: palette.color.black,
    textAlign: 'center',
  },
});
