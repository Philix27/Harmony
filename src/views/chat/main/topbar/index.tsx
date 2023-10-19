import React, { ReactNode } from 'react'
import styled from 'styled-components';

export default function TopBar() {
    return <Wrapper>Top bar</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: solid 0.1px #373c3f;
`;
