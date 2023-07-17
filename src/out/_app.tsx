import React from "react";
import "../assets/scss/theme.scss";
import { Provider } from "react-redux";
import { configureStore } from "../redux/store";
import { AppProps } from "next/app";
import App from "./index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={configureStore({})}>
      <App />
    </Provider>
  );
}

export default MyApp;
