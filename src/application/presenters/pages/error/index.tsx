export const Exception = (props: JSXTE.ElementProps) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vine | {props.title}</title>
        <link rel="stylesheet" href="/libs/@fontawesome/fontawesome-pro/css/all.min.css" />
        <link rel="stylesheet" href="/css/skylab.css" />
        <script src="/js/skylab.core.js"></script>
        <script src="/js/skylab.min.js"></script>
        <script src="/js/app.js" async></script>
        <script src="/libs/websocket/socket.io.min.js"></script>
        <script src="/js/app/websocket.js"></script>
      </head>
      <body class="sidenav-pinned ready">
        {props.children}
      </body>
    </html>
  )
}
