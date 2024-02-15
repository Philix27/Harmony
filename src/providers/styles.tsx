import { AppToastContainer } from "comps";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themeLight } from "styles";

export function StylesProvider(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={themeLight}>
      {props.children}
      <AppToastContainer />
    </ThemeProvider>
  );
}
