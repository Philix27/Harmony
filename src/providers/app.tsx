import React from "react";
import { StylesProvider } from "./styles";
// import { ApolloProvider } from "@apollo/client";
// import { AppApolloClient } from "@/libs";

export function AppProviders(props: { children: React.ReactNode }) {
  return (
    // <ApolloProvider client={AppApolloClient}>
    <StylesProvider>{props.children}</StylesProvider>
    // </ApolloProvider>
  );
}
