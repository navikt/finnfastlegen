import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script src="https://navikt.github.io/internarbeidsflatedecorator/v2.1/static/js/head.v2.min.js" async></script>
        <link
          rel="stylesheet"
          href="https://navikt.github.io/internarbeidsflatedecorator/v2.1/static/css/main.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
