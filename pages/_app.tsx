import type { AppProps } from "next/app";
import Layout from "../src/comps/Layout";
import "../src/styles/index.scss";
import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ReduxStore } from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <ReduxProvider store={ReduxStore}>
      <Layout>
        <Component
          {...pageProps}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </Layout>
    </ReduxProvider>
  );
}

export default MyApp;
