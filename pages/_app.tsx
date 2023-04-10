import ".././styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <Component {...pageProps} />
        <Analytics />
      </React.StrictMode>
    </>
  );
}
