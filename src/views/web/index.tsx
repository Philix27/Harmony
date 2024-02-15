import React, { useMemo } from "react";

import styled from "styled-components";

export default function WebFrame() {
  return (
    <Wrapper>
      <iframe
        onPlay={() => {}}
        onLoad={(e) => {
          e.preventDefault;
        }}
        src="https://www.doow.co"
        // src="https://editor.graphite.rs/"
        name="myFrame"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock"
        className={"frame"}
        allow=""
        allowFullScreen={true}
        allowTransparency={true}
        loading="lazy"
        seamless={true}
      ></iframe>
    </Wrapper>
  );
}
export function WebFrame2() {
  return (
    <Wrapper>
      <iframe
        src="https://editor.graphite.rs/"
        className={"frame"}
        allow=""
        allowFullScreen={true}
        allowTransparency={true}
        loading="lazy"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-pointer-lock"
        seamless={true}
        name="myFrame"
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  // padding: 32px 48px 0;
  margin: 0px auto;
  // max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  margin-top: 30px;
  // overflow: hidden;
  // align-items: center;

  .frame {
    // margin-top: 40px;
    height: 100%;
    width: 100%;
    border: none;
  }
`;
