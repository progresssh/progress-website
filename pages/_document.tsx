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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@300;500&display=swap&family=Rubik:wght@700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="Progress" />
          <meta property="og:site_name" content="progress.sh" />
          <meta property="og:url" content="https://www.progress.sh/" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/progress-sh-6b6d6.appspot.com/o/untitled_00000.jpg?alt=media&token=8a749d4f-dc7d-4011-8bb8-2cf80cd05c5b"
          />
          <meta
            property="og:description"
            content="Progress.sh · Let's all do our best"
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="progress.sh" />
          <meta property="twitter:url" content="https://progress.sh/" />
          <meta name="twitter:title" content="Progress" />
          <meta
            name="twitter:description"
            content="Progress.sh · Let's all do our best"
          />
          <meta
            name="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/progress-sh-6b6d6.appspot.com/o/untitled_00000.jpg?alt=media&token=8a749d4f-dc7d-4011-8bb8-2cf80cd05c5b"
          />

          <meta
            name="description"
            content="Progress.sh · Let's all do our best"
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
