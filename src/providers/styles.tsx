import { AppToastContainer } from "app/comps";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "app/styles";

export function StylesProvider(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={themeDark}>
      {props.children}
      <AppToastContainer />
    </ThemeProvider>
  );
}
