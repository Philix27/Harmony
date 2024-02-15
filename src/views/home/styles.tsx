import styled from "styled-components";

export const HomeStyles = styled.div`
  .home {
    justify-content: center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    padding: 32px 48px 0;
    margin: 50px auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    align-items: center;

    .inner_container {
      background-color: var(--backgroundColor2);
      width: 60vw;
      height: 70vh;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      h3 {
        padding-top: 30px;
      }
      input {
        padding: 12px 10px;
        margin: 10px;
        width: 60%;
        border: none;
        border-radius: 10px;
        outline: none;
      }

      .icon_tray {
        // background-color: aqua;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        padding-top: 20px;
        div {
          padding: 10px;
          margin: 10px;
          background-color: $secondaryColor;
          width: 100px;
          height: 100px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          svg {
            font-size: 50px;
          }
          p {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
