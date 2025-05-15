import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Transform Ideas into Reality",
      description:
        "Join us for 48 hours of innovation, collaboration, and problem-solving at UTA's premier business hackathon. Experience workshops, mentorship sessions, and networking opportunities.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Global Connections",
      description:
        "Connect with participants and mentors from around the world. Our event brings together diverse perspectives and talents to create innovative business solutions.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative py-5 lg:py-10 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="max-w-5xl mx-auto text-center tracking-tight text-2xl md:text-5xl mb-4 text-slate-300 font-bold tracking-tight">
          About the{" "}
          <span className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 px-2 py-1 text-black font-bold">
            Ideathon
          </span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-slate-300 text-center font-normal">
          Transform your innovative ideas into reality at Mavs Think Business
          Hackathon. Work alongside industry experts, receive mentorship, and
          compete for exciting prizes.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export const SkeletonTwo = () => {
  const images = [
    "https://imgs.search.brave.com/AY1-__rRWeAoz6gETe15814fOL6qqXlwOIkFbFn-uZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbmFwc2hvdC10/ZWFtLXBhcnRpY2lw/YXRpbmctc3RhcnR1/cC13ZWVrZW5kLWhh/Y2thdGhvbi1ldmVu/dF8xMzE0NDY3LTE4/NzgzLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
    "https://imgs.search.brave.com/aKiFDYPZYGHOIDcjyO_-dAfjDER32UZTUafMkSL9i-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9weXhp/cy5ueW1hZy5jb20v/djEvaW1ncy83ODIv/M2ZiLzQ2NGU0YjU1/OGNjM2Y5NjQ4OGI1/YzFjNGRkMjc0MDgx/Njctc2lsaWNvbi12/YWxsZXkucmhvcml6/b250YWwudzYwMC5q/cGc",
    "https://imgs.search.brave.com/YhDJLn6h_I1Sgav6d8o4In3L1xy1uHP8CzHxR_qgBmI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM3LzA1LzI4/LzM2MF9GXzgzNzA1/Mjg4MF9BSFVReEh2/T285dkxXVTBTN2NP/d3VTMFk5aGtYcVFn/YS5qcGc",
    "https://imgs.search.brave.com/aTmsXn4Iy7f0RnMy7FtN42-x3UA8EKiS6aUqpNGFzTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYWNrYXRob24t/ZXZlbnQtd2l0aC1k/ZXZlbG9wZXJzLWJy/YWluc3Rvcm1pbmct/Y29kaW5nLXRvZ2V0/aGVyXzEzMTQ0Njct/MTE5OTguanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA",
    "https://imgs.search.brave.com/oa3QwQi94YxfD_XKwoOnGVC1NzDvdE-ZCyC38CQ1Wy8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/ODQ5ODE5NC9waG90/by9oYWNrZXJzLXdp/dGgtbGFueWFyZC1j/b2RpbmctZm9yLWNo/YXJpdHktYXQtaGFj/a2F0aG9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ZOUJl/SVhZZ0pyV2htZkV3/VDA3WFBpR0tfRmsx/djYzWDBVS0NtX2NB/VnlVPQ",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 h-full pointer-events-none" />
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-slate-300 text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-slate-300 font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
