import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/base.css";
import "/tailwind.config.js";

import AttendanceConditionalNode from "./CustomNodes/AttendanceConditionalNode";
import AttendanceResultNode from "./CustomNodes/AttendanceResultNode";
import ConditionalColorNode from "./CustomNodes/ConditionalColorNode";

const nodeTypes = {
  attendanceConditional: AttendanceConditionalNode,
  attendanceResult: AttendanceResultNode,
  conditionalColor: ConditionalColorNode,
};

const initialNodes = [
  {
    id: "1",
    type: "attendanceConditional",
    data: {
      userPhoto: "/account-a@2x.webp",
      user: "Garrett",
    },
    position: { x: 75, y: 20 },
  },
  {
    id: "2",
    type: "conditionalColor",
    data: {
      boolean: true,
      info: "On Time",
    },
    position: { x: -35, y: 210 },
  },
  {
    id: "3",
    type: "conditionalColor",
    data: {
      boolean: false,
      info: "Late",
    },
    position: { x: 210, y: 110 },
  },
  {
    id: "4",
    type: "attendanceResult",
    data: {
      applicationPhoto: "/account-a@2x.webp",
      application: "Garrett",
    },
    position: { x: 35, y: 400 },
  },
  {
    id: "5",
    type: "attendanceResult",
    data: {
      applicationPhoto: "/account-a@2x.webp",
      application: "Garrett",
    },
    position: { x: 175, y: 200 },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
];

export default function FlowContainer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className=" w-80 h-80 rounded-xl p-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls style={{ scale: "0.75" }} position="bottom-left" />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
