import ".././styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </React.StrictMode>
    </>
  );
}
