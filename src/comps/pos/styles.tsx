import styled from "styled-components";

export const CartWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
  padding: 10px 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundLight};
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
`;
