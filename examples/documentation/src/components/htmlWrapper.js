function htmlWrapper(props) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"/>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css">
    <link rel="stylesheet" href="/prism.css" />
    <link rel="stylesheet" href="/styles.css" />
    <title>${ props.title }</title>
  </head>
  <body>
    <div id="react-mount">${ props.body }</div>
    <script src="/prism.js"></script>
    <script src="/${ props.assets.bundle }"></script>
  </body>
</html>`;
}

export default htmlWrapper;
