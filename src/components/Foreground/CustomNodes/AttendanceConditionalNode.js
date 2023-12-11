/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function AttendanceConditionalNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-lg bg-white rounded-lg">
      <div className="flex">
        <div className="">
          <div className="flex items-center space-x-1">
            <div className="text-xs ">If</div>
            <div className="bg-gray-100/60 rounded-full p-1 flex items-center">
              <img className="h-4 w-4" src={data.userPhoto} alt="" />
              <div className="text-xs font-bold  px-1">{data.user}</div>
            </div>
            <div className="text-xs">attends:</div>
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 !bg-gray-300"
      />
    </div>
  );
}

export default memo(AttendanceConditionalNode);
