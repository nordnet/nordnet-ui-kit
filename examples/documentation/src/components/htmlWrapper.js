function htmlWrapper(props) {
  const root = props.root || '/';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,700,700italic" type="text/css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css" type="text/css">
    <link rel="stylesheet" href="${ root }prism.css" type="text/css">
    <link rel="stylesheet" href="${ root }styles.css" type="text/css">
    <title>${ props.title }</title>
  </head>
  <body>
    <div id="react-mount">${ props.body }</div>
    <script src="${ root }modernizr-custom.min.js"></script>
    <script src="${ root }prism.js"></script>
    <script src="${ root }${ props.assets.bundle }"></script>
  </body>
</html>`;
}

export default htmlWrapper;
