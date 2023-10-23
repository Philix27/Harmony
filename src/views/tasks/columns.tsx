import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

export default function Column(props: {
  title: string;
  tasks: string;
  id: string;
}) {
  const [completed, setCompleted] = useState([]);
  const [incompleted, setIncompleted] = useState([]);
  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <Droppable droppableId={props.id}>
        {(provided, snapshot) => {
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {provided.placeholder}
          </TaskList>;
        }}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: brown;
  border-radius: 2.5px;
  width: 300px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 1px solid grey;
`;
const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  border-radius: 2.5px;
  flex-grow: 1;
  min-height: 100px;
`;
