import styled from "styled-components";

export const GoalStyles = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  .section {
    background-color: ${(props) => props.theme.colors.backgroundDark};
    width: 100%;
    color: #fff;
    margin: 5px 5px;
    padding: 10px;
    border-radius: 10px;
    .goal {
      background-color: ${(props) => props.theme.colors.backgroundLight};
      margin-bottom: 10px;
      padding: 10px 10px;
      border-radius: 5px;
      &:hover {
        background-color: ${(props) => props.theme.colors.backgroundDark};
      }
      .title {
        display: flex;
        justify-content: space-between;
      }
      .info {
        display: flex;
        justify-content: space-between;
        p {
          padding-top: 10px;
          font-size: 10px;
        }
      }
    }
  }
`;
