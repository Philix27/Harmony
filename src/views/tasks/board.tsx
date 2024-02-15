import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]);
  const [incompleted, setIncompleted] = useState([]);
  return (
    <DragDropContext>
      <h3>Kanban Board</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      ></div>
    </DragDropContext>
  );
}
