import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import "../styles/index.scss";
import React, { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Layout>
      <Component
        {...pageProps}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Layout>
  );
}

export default MyApp;
