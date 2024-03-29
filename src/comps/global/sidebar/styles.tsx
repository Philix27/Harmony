import styled from "styled-components";

export const StylesWrapper = styled.div`
  height: calc(100vh - 30px);
  background-color: $background1;
  // background-color: var(--backgroundColor2);
  display: flex;
  width: 50px;
  align-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 0.01px rgb(57, 57, 57) solid;
  margin-top: 30px;
  @include mobileSS {
    display: none;
  }
  @include tabletSS {
    display: none;
  }
  .sidebar_start {
    align-items: center;
    display: block;
    width: 100%;
  }
  .sidebar_end {
    align-items: center;
    color: #fff;
  }
  .sidebar_start_list {
    display: flex;
    flex-direction: column;
    color: #fff;
    white-space: nowrap;
    a {
      padding-top: 10px;
    }
  }

  .sidebar_start_list_item {
    padding: 10px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 22px;
      text-align: center;
      align-items: center;
    }
    :hover {
      background-color: #fff;
    }
  }
  .activeItem {
    // border-radius: 0px;
    // background-color: var(--backgroundColor1);
    border-bottom: solid 0.5px #fff;
    color: var(--fontColor);
    padding: 10px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 22px;
      text-align: center;
      align-items: center;
    }
  }
  .bottom_sidebar_start_list {
  }

  .brandName {
    align-items: center;
    padding: 20px 20px;
    margin-bottom: 20px;
    display: block;
    border-bottom: var(--backgroundColor2) solid 1px;
    span {
      // padding-left: 8px;
      padding-right: 15px;
    }
  }

  .sidebar_end {
    color: #fff;
  }

  .sidebar_end_list {
    display: flex;
  }

  .check {
    display: none;
    position: absolute;
  }

  .logo {
    margin-left: 10px;
  }

  .link {
    color: #fff;
    :hover {
      background-color: $secondaryColor;
    }
  }

  .bars,
  .bars_close {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 30px;
    color: #fff;
    font-size: 1.5rem;
  }

  .container {
    grid-template-columns: repeat(1, 1fr);
  }

  .img {
    display: none;
  }

  .sidebar_end {
    display: none;
  }
`;
