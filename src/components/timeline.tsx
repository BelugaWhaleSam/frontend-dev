"use client";
import { useScroll, useTransform, motion, easeInOut } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easeInOut,
  });

  const heightTransform = useTransform(
    smoothProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    [0, height * 0.1, height * 0.3, height * 0.5, height * 0.7, height * 0.9, height]
  );
  const opacityTransform = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      className="w-full min-h-screen font-sans md:px-10 relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-5xl mb-4 text-slate-300 font-bold tracking-tight">
            Event{" "}
            <span className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 px-2 py-1 text-black font-bold">
              Timeline
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-xl mx-auto max-w-3xl leading-relaxed">
            Join us for a day of innovation and creativity at the Mavs Think
            Business Hackathon!
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 bg-black/30 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-slate-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-300">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[50%] rounded-full"
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};
