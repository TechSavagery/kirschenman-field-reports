import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/meta'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
         <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/kei-reports-favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/kei-reports-favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/kei-reports-favicon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <meta
        name="description"
        content={`Field Report Data from Kirschenman Enterprises Inc.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
