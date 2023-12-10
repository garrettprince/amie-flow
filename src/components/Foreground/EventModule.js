/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import FlowContainer from "./FlowContainer";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  EllipsisHorizontalIcon,
  LockClosedIcon,
  LockOpenIcon,
  XMarkIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import ColorPicker from "./ColorPicker";
import { useAtom } from "jotai";
import {
  eventModalVisibility,
  showColorPicker,
  selectedColor,
  flowVisibility,
} from "../../utils/store";

export default function EventModule() {
  const [isFlowShowing, setIsFlowShowing] = useAtom(flowVisibility);
  const [color, setColor] = useAtom(selectedColor);
  const [isColorPickerShown, setIsColorPickerShown] = useAtom(showColorPicker);
  const [locked, setLocked] = useState(true);
  const [eventModalVisible, setEventModalVisible] =
    useAtom(eventModalVisibility);

  return (
    <AnimatePresence>
      <div>
        {eventModalVisible && (
          <motion.main
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="shadow-xl rounded-xl p-2 space-y-1"
          >
            {/* Information Section */}
            {/* Header */}
            <div className="p-2 font-bold flex space-x-2 items-center justify-between">
              <div className="flex space-x-2 items-center">
                <CheckCircleIcon className="h-6 w-6 text-black/25" />
                <div>Weekly Meeting</div>
              </div>
              <XMarkIcon
                onClick={() => {
                  setEventModalVisible(false);
                  setIsFlowShowing(false);
                }}
                className="h-4 w-4 text-black/50 cursor-pointer"
              />
            </div>
            {/* Guests */}
            <div className="bg-gray-100/60 rounded-lg p-2 space-y-1">
              <p className="text-xs font-bold text-black/25">GUESTS</p>
              <div className="flex space-x-1">
                <img className="w-4 h-4" src="/account-a@2x.webp" alt="" />
                <img className="w-4 h-4" src="/account-b@2x.webp" alt="" />
                <img className="w-4 h-4" src="/account-c@2x.webp" alt="" />
              </div>
            </div>
            {/* Where */}
            <div className="bg-gray-100/60 rounded-lg p-2 space-y-1">
              <p className="text-xs font-bold text-black/25">WHERE</p>
              <p className="text-sm">https://meet.google.com/qwn-fdskk-...</p>
            </div>
            {/* Duration */}
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
            {/* Flow Section */}
            <section id="reactFlow">
              <AnimatePresence>
                {isFlowShowing && (
                  <motion.div
                    key="flow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FlowContainer />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
            {/* Options Section */}
            <section
              id="options"
              className="w-80 flex items-center p-2 justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <motion.div
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setIsColorPickerShown(!isColorPickerShown);
                      setColor(color);
                    }}
                  ></motion.div>
                  {isColorPickerShown && <ColorPicker />}
                </div>
                {locked ? (
                  <LockClosedIcon
                    onClick={() => setLocked(false)}
                    className="h-4 w-4 text-black/50 cursor-pointer"
                  />
                ) : (
                  <LockOpenIcon
                    onClick={() => setLocked(true)}
                    className="h-4 w-4 text-black/50 cursor-pointer"
                  />
                )}
                <ArrowPathIcon className="h-4 w-4 text-black/50" />
                <p className="text-xs font-bold text-black/60">24h</p>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setIsFlowShowing(!isFlowShowing)}
                >
                  <BoltIcon className="h-3 w-3 text-black/60 hover:scale-105 hover:text-yellow-300 transition-all duration-200" />
                  <p className="text-black/60 font-bold text-xs transition-all duration-100">
                    {isFlowShowing ? "Close Flow" : "Flow"}
                  </p>
                </div>
                <EllipsisHorizontalIcon className="h-4 w-4 text-black/60" />
              </div>
            </section>
          </motion.main>
        )}
      </div>
    </AnimatePresence>
  );
}
