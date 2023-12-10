import React, { useState } from "react";
import FlowContainer from "./FlowContainer";
import { motion } from "framer-motion";

export default function Event() {
  const [isFlowShowing, setIsFlowShowing] = useState(true);

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsFlowShowing(!isFlowShowing)}
        >
          Toggle Flow
        </button>
      </div>
      <motion.div>
        <div>{isFlowShowing && <FlowContainer />}</div>
      </motion.div>
    </div>
  );
}
