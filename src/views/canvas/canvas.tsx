import React, { useLayoutEffect, useCallback } from "react";
import styles from "./canvas.module.scss";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  NodeToolbar,
} from "reactflow";

import "reactflow/dist/style.css";
import styled from "styled-components";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
export default function CanvasFrame() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Wrapper>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        {/* <MiniMap /> */}
        <NodeToolbar isVisible={true} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      {/* <div className={styles.base_home}></div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  margin: 0px auto;
  box-sizing: content-box;
  position: relative;
  padding-top: 30px;
  height: calc(100vh - 30px);
  // overflow: hidden;
  // align-items: center;
`;
