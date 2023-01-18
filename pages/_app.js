import ".././styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Quantico, Rajdhani, Open_Sans } from "@next/font/google";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--quantico-font",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal"],
  variable: "--rajdhani-font",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--opensans-font",
});

// Quantico:ital,wght@0,400;0,700;1,400&family=Rajdhani:wght@300;500&display=swap
export default function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${quantico.variable} ${rajdhani.variable} ${openSans.variable} h-full`}
    >
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
