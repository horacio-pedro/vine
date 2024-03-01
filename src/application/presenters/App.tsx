export const App = (props: JSXTE.ElementProps) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vine</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/main.js" defer></script>
      </head>
      <body>{props.children}</body>
    </html>
  )
}
