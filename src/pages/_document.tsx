import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    let url;
    if (process.env.NODE_ENV !== 'production') {
        url = "https://navikt.github.io/internarbeidsflatedecorator"
    } else {
        url = "/api/internarbeidsflatedecorator"

    }
  return (
    <Html lang="en">
      <Head>
        <script src={url} async></script>
        <link
          rel="stylesheet"
          href={`${url}/v2.1/static/css/main.css`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
