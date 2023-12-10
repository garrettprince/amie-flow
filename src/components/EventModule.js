import React, { useState } from "react";
import FlowContainer from "./FlowContainer";
import { AnimatePresence, motion } from "framer-motion";

export default function Event() {
  const [isFlowShowing, setIsFlowShowing] = useState(true);

  return (
    <div>
      <main className=" shadow-xl rounded-xl p-2 space-y-1">
        <div className="p-2 font-bold flex space-x-2 items-center">
          <div className="h-5 w-5 bg-gray-100 rounded-full"></div>
          <div>Dennis x Garrett</div>
        </div>
        <div className="bg-gray-100/60 rounded-lg p-2 space-y-1">
          <p className="text-xs font-bold text-black/25">GUESTS</p>
          <div className="flex space-x-1">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <div className="h-3 w-3 bg-black rounded-full"></div>
          </div>
        </div>
        <div className="bg-gray-100/60 rounded-lg p-2 space-y-1">
          <p className="text-xs font-bold text-black/25">WHERE</p>
          <p className="text-sm">https://meet.google.com/qwn-fdskk-...</p>
        </div>
        <div className="flex space-x-1">
          <div className="bg-gray-100/60 rounded-lg p-2 space-y-1 w-full">
            <p className="text-xs font-bold text-black/25">FROM</p>
            <p className="text-sm">10:00 AM</p>
            <p className="text-xs font-bold text-black/25">07 Feb 2022</p>
          </div>
          <div className="bg-gray-100/60 rounded-lg p-2 space-y-1 w-full">
            <p className="text-xs font-bold text-black/25">TO</p>
            <p className="text-sm">10:30 AM</p>
            <p className="text-xs font-bold text-black/25">07 Feb 2022</p>
          </div>
        </div>

        <AnimatePresence>
          {isFlowShowing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.5 },
                height: { duration: 0.2 },
              }}
            >
              <FlowContainer />
            </motion.div>
          )}
        </AnimatePresence>
        <section className="w-80 flex items-center p-1 justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <p className="text-xs font-bold text-black/60">24h</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="text-xs font-bold text-white bg-gradient-to-br from-red-500 to-purple-500 rounded-md px-2 py-1 "
              onClick={() => setIsFlowShowing(!isFlowShowing)}
            >
              {isFlowShowing ? "Exit Flow" : "Flow"}
            </button>
            <p className="text-xs font-extrabold text-black/60">⋯</p>
          </div>
        </section>
      </main>

      {/* <motion.div>
        <div>{isFlowShowing && <FlowContainer />}</div>
      </motion.div> */}
    </div>
  );
}
