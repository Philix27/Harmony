import React from "react";
import styled from "styled-components";

export function TasksSection() {
  return (
    <Wrapper>
      <h2>All Tasks</h2>
      <div className={"tableSection"}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Project</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Assignee</th>
            </tr>
          </thead>
        </table>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  // background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px 20px;
  margin-top: 50px;
  // width: 90%;
  h2 {
    color: #fff;
    margin: 20px auto;
  }
  .tableSection {
    border-style: solid;
    border-radius: 10px;
    margin: 0 auto;

    .deleted {
      position: fixed;
      top: 30px;
      padding: 15px 20px;
      background-color: $primaryColor;
      color: #fff;
      font-weight: 600;
    }
    table {
      min-width: 70vw;
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 0.9em;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
      border-color: $secondaryColor;
      border-width: 0.5px;
      border-width: 1px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    table tr th {
      background-color: $primaryColor;
      color: #fff;
      padding: 10px;
      text-align: left;
    }

    table tr {
      border-bottom: 1px solid #dddddd;
      background-color: $primaryColor;
      color: #fff;
    }

    table tr:hover {
      background-color: #fff;
      color: $secondaryColor;
      font-weight: 600;
    }

    tr:nth-of-type(even) {
      background-color: $secondaryColor;
    }

    tr:last-of-type {
      border-bottom: 2px solid $primaryColor;
    }
    td {
      padding: 10px 12px;
    }
  }
`;
