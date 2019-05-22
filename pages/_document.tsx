import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="msapplication-TileColor" content="#2F2F2C" />
          <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#2F2F2C" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="A JavaScript conference in Linz, Austria"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png"  as="image"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="preload" href="/static/assets/images/emma.jpg" as="image"/>
          <link rel="preload" href="/static/assets/images/harry.jpg" as="image"/>
          <link rel="preload" href="/static/assets/images/vitaly.jpg" as="image"/>
          <link rel="preload" href="/static/assets/images/sara.jpg" as="image"/>
          <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-neu.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Script'19 - The feelgood JavaScript conference" />
          <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-neu.jpg" />
          <meta name="twitter:creator" content="@scriptconf" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
