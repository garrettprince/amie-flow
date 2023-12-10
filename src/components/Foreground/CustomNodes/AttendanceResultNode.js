/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

function AttendanceResultNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-lg bg-white rounded-lg">
      <div className="flex">
        <div className="">
          <div className="flex items-center space-x-1">
            <p className="text-xs">Send</p>
            <div className="bg-gray-100/60 rounded-full p-1 flex items-center">
              <img className="h-4 w-4" src={data.applicationPhoto} alt="" />
              <div className="text-xs font-bold  px-1">{data.application}</div>
            </div>
            <div className="text-xs">with body:</div>
          </div>
          <textarea
            className="placeholder:text-xs  placeholder:pl-1 bg-gray-100/60 rounded-lg p-1 mt-1 w-full h-24 resize-none text-xs"
            type="text"
            placeholder="Begin message..."
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-4 !bg-gray-300"
      />
    </div>
  );
}

export default memo(AttendanceResultNode);
