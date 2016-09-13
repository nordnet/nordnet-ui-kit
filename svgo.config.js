module.exports = JSON.stringify({
  plugins: [
    { removeTitle: true },
    { removeComments: true },
    { removeDesc: true },
    { removeDimensions: true },
    { convertColors: { shorthex: true } },
  ],
});
