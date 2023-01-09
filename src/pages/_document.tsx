import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import {ServerStyleSheet} from "styled-components";

export default function MyDocument() {
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

MyDocument.getInitialProps = async(ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
}