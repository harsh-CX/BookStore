import type { AppProps } from "next/app";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// * Exporting the custom App component.
export default App;
