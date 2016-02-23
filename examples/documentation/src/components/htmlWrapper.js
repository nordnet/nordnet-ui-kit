function htmlWrapper(props) {
  console.log(props);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta
      name="viewport"
      content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
    />
    <link rel="stylesheet" href="/styles.css" />
    <title>${ props.title }</title>
  </head>
  <body className="landing-page">
    <div id="react-mount">${ props.body }</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
}

export default htmlWrapper;
