import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import "../styles/index.scss";
import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ReduxStore } from "../redux/store";

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
