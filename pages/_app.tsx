import type { AppProps } from "next/app";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { type Session } from "next-auth";
import { AppProviders } from "app/providers";
import { store } from "app/redux";
import { GlobalStyles } from "app/styles";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null }>) {
  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProviders>
          <Component {...pageProps} />
          <GlobalStyles />
        </AppProviders>
      </PersistGate>
    </ReduxProvider>
  );
}
