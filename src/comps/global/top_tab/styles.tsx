import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: $background1;
  width: 100%;
  // height: 40px;
  position: fixed;
  top: 0;
  padding-left: 15px;
  z-index: 2;
  display: flex;
  align-items: baseline;
  border-bottom: solid 0.1px rgb(75, 76, 76);
  @include tabletSS {
    display: block;
  }

  @include mobileSS {
    padding-left: 20px;
    visibility: visible;
  }

  label.brand {
    font-size: smaller;
    font-weight: bold;
    display: inline-block;
    padding-right: 20px;
    a {
      color: #fff;
    }
  }

  .tabs_container {
    align-items: baseline;
    // height: 100%;
    // margin-top: 10px;
    .tab_box {
      display: flex;
      .tab_name {
        width: 150px;
        padding-left: 10px;
        background-color: $primaryColor;
        color: #fff;
        font-size: 13px;
        // border-radius: 8px 8px 0px 0;
        margin: 0px 0.2px;
        line-height: 30px;
        &:hover {
          background-color: $secondaryLightColor;
        }
      }
      .active {
        border-left: solid grey 0.01px;
        background-color: var(--backgroundColor1);
        // background-color: $secondaryLightColor;
      }
    }
  }
`;
