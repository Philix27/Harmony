import React from "react";
import styled from "styled-components";

export const SpinnerIcon = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 0px;
  }
`;

const Spinner = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 120px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.primary};
  border-top-color: transparent;
  animation: spin 0.8s infinite linear;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 30px;
    height: 30px;
    border: 4px solid ${(props) => props.theme.colors.primary};
    border-top-color: transparent;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 25px;
    height: 25px;
    margin-top: 350px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-top-color: transparent;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
