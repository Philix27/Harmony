import React from "react";

import styled from "styled-components";

export default function ProjectsSection({ activeIndex, setActiveIndex }) {
  return (
    <Wrapper>
      <div className={activeIndex == 3 ? "container" : "none"}>
        <h2>Projects</h2>
        <div className={"contents"}>
          <div className={"card"}>
            <h3>APCEIMS</h3>
          </div>
          <div className={"card"}>
            <h3>DOOW</h3>
          </div>
          <div className={"card"}>
            <h3>APCAIMS</h3>
          </div>
          <div className={"card"}>
            <h3>SITUATION ROOM</h3>
          </div>
          <div className={"card"}>
            <h3>KOLAB</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #fff;
    margin: 20px auto;
  }
  .contents {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    row-gap: 20px;
    column-gap: 20px;
    padding: 0px 20px 0 20px;

    .card {
      height: 200px;
      background-color: $primaryLight;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      color: #fff;
      border-radius: 10px;
      padding: 20px;
      cursor: pointer;

      &:hover {
        border-color: $secondaryColor;
        border-width: 1px;
        border-style: solid;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
