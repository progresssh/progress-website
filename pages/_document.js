import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#" className="h-full w-full">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@300;500&display=swap"
            rel="stylesheet"
          /> */}
          <meta property="og:title" content="Progress" />
          <meta property="og:site_name" content="progress.sh" />
          <meta property="og:url" content="https://www.progress.sh/" />
          <meta
            property="og:description"
            content="A journey to strive for beyond."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://github.com/progresssh/progress-website/blob/main/public/images/arch.png"
          ></meta>

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="progress.sh" />
          <meta property="twitter:url" content="https://progress.sh/" />
          <meta name="twitter:title" content="Progress" />
          <meta
            name="twitter:description"
            content="A journey to strive for beyond."
          />
          <meta
            name="twitter:image"
            content="https://github.com/progresssh/progress-website/blob/main/public/images/arch.png"
          />
        </Head>
        <body className="h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
