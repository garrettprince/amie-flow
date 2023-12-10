/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function ConditionalColorNode({ data }) {
  return (
    <div
      className={`${
        data.boolean === true
          ? "px-4 py-2 shadow-lg bg-green-100 rounded-lg text-xs font-bold text-green-500"
          : "px-4 py-2 shadow-lg bg-red-100 rounded-lg text-xs font-bold text-red-500"
      }`}
    >
      {data.info}
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 !bg-gray-300"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 !bg-gray-300"
      />
    </div>
  );
}

export default memo(ConditionalColorNode);
