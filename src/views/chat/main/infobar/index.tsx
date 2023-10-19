import React, { ReactNode } from "react";
import { styled } from "styled-components";

export default function InfoBar(props: { children: ReactNode }) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  height: 100%;
  border-left: solid 0.1px #373c3f;
`;
