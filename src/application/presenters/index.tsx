export const LandingPage = (props: JSXTE.ElementProps) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vine | De programadores para empresas</title>
        <link href="/css/style.css" rel="stylesheet"></link>
      </head>
      <body class="c65xn csyyo cnxvz c72sf c36be">
        <div class="co3fs cfi8v cklpe c29n1">
          {props.children}
        </div>
      </body>
    </html>
  )
}
