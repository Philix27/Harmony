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
    <div className={styles.home}>
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
    </div>
  );
}
