import React from "react";
import type {AppProps} from "next/app";

import "../styles/main.scss";
import "../styles/Calendar.scss";
import "../styles/windows.scss";

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
