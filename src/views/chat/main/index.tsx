import React from "react";
import { styled } from "styled-components";
import InfoBar from "./infobar";
import ChatSection from "./chat";
import TopBar from "./topbar";

export default function MainContent() {
    const showInfo = true;
  return (
    <Wrapper>
      <TopBar />
      <Content showInfo={showInfo}>
        <ChatSection />
        {showInfo && (
          <InfoBar>
            <div>Info Group</div>
          </InfoBar>
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
`;
const Content = styled.div<{ showInfo: boolean }>`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => (props.showInfo ? "1fr 300px;" : "1fr")};
`;
