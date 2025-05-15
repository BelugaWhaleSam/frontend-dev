import React from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import Image from "next/image";

const FlipWords = dynamic<{ words: string[] }>(
  () => import("@/components/flip-words").then((mod) => mod.FlipWords),
  {
    ssr: false,
    loading: () => (
      <div className="h-8 w-24 animate-pulse bg-gray-200 rounded" />
    ),
  }
);

const AnimatedModalDemo = dynamic(
  () =>
    import("@/components/animated-modal-demo").then(
      (mod) => mod.AnimatedModalDemo
    ),
  {
    ssr: false,
  }
);

const HomePage = () => {
  const words = React.useMemo(() => ["Dream", "Design", "Deliver"], []);
  return (
    <div className="mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="relative z-10 mx-auto flex flex-col items-center justify-center"
      >
        <div className="w-24 h-24 p-2 rounded-full shadow-inner overflow-hidden bg-black flex items-center justify-center">
          <Image
            src="/logo/Logo.png"
            alt="Club ABC Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <span className="text-lg font-medium text-slate-400 mt-2 mb-2">
          Entrepreneurship Club presents
        </span>
      </motion.div>
      <div className="px-4 py-15 md:py-10">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-slate-300">
          {"You know the business and we know the chemistry 🤫"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-2 text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-slate-300"
        >
          <span className="block mb-4">
            At <span className="text-orange-500">MAVSTHINK 2025</span> we help
            you
            <span className="inline-flex items-center gap-2">
              <FlipWords words={words} />
            </span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mx-auto mt-2 flex flex-col items-center justify-center"
        >
          <span className="text-lg font-medium text-slate-400 mb-2">
            Sponsored by
          </span>
          <Image
            className="mb-2 rounded-full"
            src="/logo/CenterLogo.png"
            alt="Sponsor Logo"
            width={100}
            height={50}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <button className="w-44 transform rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Register Now
          </button>
          <div className="w-44">
            {" "}
            {/* Wrapper to maintain consistent width */}
            <AnimatedModalDemo />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
