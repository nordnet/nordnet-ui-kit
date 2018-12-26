export default ({ mixins, palette, typography }) => ({
  caption: {
    fontSize: 12,
    fontWeight: typography.fontWeightSemiBold,
    textAlign: 'left',
    padding: [10, 4],
    borderBottom: [2, 'solid', palette.color.grayDarker],
  },
  screenReadersOnly: mixins.screenReadersOnly,
  captionMobileHidden: {
    [mixins.maxMedia('md')]: mixins.screenReadersOnly,
  },
  captionDesktopHidden: {
    [mixins.media('md')]: mixins.screenReadersOnly,
  },
  feedback: {
    fontStyle: 'italic',
    padding: 50,
    color: palette.color.black,
    textAlign: 'center',
  },
});
