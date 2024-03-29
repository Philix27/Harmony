import React from "react";
import SideBar from "./sidebar";
import MainContent from "./main";
import styled from "styled-components";

export default function ChatApp() {
  return (
    <Wrapper>
      <SideBar />
      <MainContent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  .sidebar {
    min-height: 100%;
    width: 500px;
    background-color: $background1;

    .top {
      height: 40px;
      background-color: $accentColor;

      display: flex;
      justify-content: space-around;
      color: #fff;
      .icon {
        padding: 10px;
        svg {
          font-size: larger;
        }
      }
      .active {
        padding: 10px;
        border-bottom: solid 1px #fff;
        svg {
          margin-bottom: 10px;
        }
      }
    }
    .contents {
      padding: 10px;
    }
  }
`;
