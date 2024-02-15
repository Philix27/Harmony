import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  width: 400px;
  background-color: $background1;
  border-right: solid 0.1px #373c3f;
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

    h5 {
      color: grey;
      padding-left: 15px;
    }
    .tile {
      display: flex;
      color: #fff;
      font-size: 14px;
      margin-bottom: 10px;
      padding: 2px 10px;
      border-radius: 5px;
      align-items: center;
      &:hover {
        background-color: $secondaryColor;
        padding: 5px 10px;
      }
      svg {
        margin-right: 10px;
        font-size: 12px;
      }
    }
    .heading {
      margin-top: 20px;
    }
  }
`;
