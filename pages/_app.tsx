import type { AppProps } from "next/app";
import "../src/styles/index.scss";
import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component
          {...pageProps}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </PersistGate>
    </ReduxProvider>
  );
}

export default MyApp;
