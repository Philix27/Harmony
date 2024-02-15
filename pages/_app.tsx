import type { AppProps } from "next/app";
// import "../src/styles/index.scss";
import "styles/index";
import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { type Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null }>) {
  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  );
}
