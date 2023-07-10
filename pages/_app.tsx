import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";

export default function StudyWebsiteApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
