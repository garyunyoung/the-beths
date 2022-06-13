import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!--Font --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/GayaRegular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}