"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const loadingStates = [
  { text: "Setting up innovative workspace 🚀" },
  { text: "Preparing mentorship platform 👥" },
  { text: "Welcome to MavsThink Hackathon 🎉" },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const LoaderCore = ({ value = 0 }: { value?: number }) => {
  return (
    <div className="flex relative justify-start max-w-xl mx-auto flex-col mt-40">
      {loadingStates.map((loadingState, index) => {
        const distance = Math.abs(index - value);
        const opacity = Math.max(1 - distance * 0.2, 0);

        return (
          <motion.div
            key={index}
            className={cn("text-left flex items-center gap-4 mb-6")} // Increased gap and margin
            initial={{ opacity: 0, y: -(value * 40) }}
            animate={{ opacity: opacity, y: -(value * 40) }}
            transition={{ duration: 0.1 }}
          >
            <div>
              {index > value && (
                <CheckIcon className="w-8 h-8 text-white" /> // Bigger white icon
              )}
              {index <= value && (
                <CheckFilled
                  className={cn(
                    "w-8 h-8", // Bigger icon
                    value === index
                      ? "text-green-500" // Green when active
                      : "text-white" // White otherwise
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                "text-xl font-medium", // Bigger text
                value === index
                  ? "text-green-500 opacity-100" // Green when active
                  : "text-white", // White otherwise
                index < value && "text-white/50" // Dimmed white for completed items
              )}
            >
              {loadingState.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function Loading() {
  const [currentState, setCurrentState] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Faster interval (reduced from 2000ms to 800ms)
    const interval = setInterval(() => {
      setCurrentState((prev) =>
        prev === loadingStates.length - 1 ? 0 : prev + 1
      );
    }, 800); // Faster state transitions

    // Adjusted total duration for all states
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, loadingStates.length * 800); // Matches the new interval

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="w-full h-full fixed inset-0 z-[150] flex items-center justify-center backdrop-blur-2xl" // Increased z-index
        >
          <div className="h-96 relative">
            <LoaderCore value={currentState} />
          </div>

          <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-black dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
