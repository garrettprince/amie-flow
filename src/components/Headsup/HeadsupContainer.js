import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../../utils/client";
import {
  PlusIcon,
  StopCircleIcon,
  StopIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

export default function HeadsupContainer() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [recordingEnabled, setRecordingEnabled] = useState(false);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.ondataavailable = handleDataAvailable;
          mediaRecorderRef.current.start();
        })
        .catch((err) => console.error(err));
    }
  }, [recordingEnabled]);

  const handleDataAvailable = (e) => {
    if (e.data.size > 0) {
      recordedChunksRef.current.push(e.data);
    }
  };

  const stopRecording = async () => {
    mediaRecorderRef.current.stop();
    const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
    const file = new File([blob], "recordedVideo.webm", { type: "video/webm" });

    let { error } = await supabase.storage
      .from("videos")
      .upload("recordedVideo.webm", file);
    if (error) {
      console.error("Error uploading video: ", error);
    }
  };

  return (
    <div className="h-full">
      {!recordingEnabled && (
        <div
          className="bg-gray-100/60 border-dashed border-2 rounded-lg  p-1 h-20 w-20 flex flex-col items-center justify-between cursor-pointer"
          onClick={() => setRecordingEnabled(true)}
        >
          <PlusIcon className="w-10 h-10 text-black/25" />
          <p className="text-[.63rem] text-center text-black/25">
            Add context with video
          </p>
        </div>
      )}
      {recordingEnabled && (
        <motion.div
          key="headsup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="bg-white h-full rounded-lg shadow-md p-1">
            <div className="h-20 w-20  relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="object-cover w-full h-full rounded-lg"
              ></video>
              <XMarkIcon
                className="h-3 w-3 text-white stroke-whites absolute top-1 right-1 bg-white/20 rounded cursor-pointer"
                onClick={() => setRecordingEnabled(false)}
              />
            </div>
            <section
              id="controls"
              className="pt-1 px-1 flex justify-between items-center"
            >
              <StopIcon
                className="h-4 w-4 text-red-500 cursor-pointer"
                onClick={stopRecording}
              />
            </section>
          </div>
        </motion.div>
      )}
    </div>
  );
}
