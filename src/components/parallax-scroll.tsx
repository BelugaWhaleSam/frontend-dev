"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const distributeImages = (images: string[]) => {
    const columns = isLargeScreen ? 3 : 2;
    const distributed = Array.from({ length: columns }, () => [] as string[]);

    images.forEach((img, index) => {
      const columnIndex = index % columns;
      distributed[columnIndex].push(img);
    });

    return {
      first: distributed[0],
      second: distributed[1],
      third: isLargeScreen ? distributed[2] : [],
    };
  };

  const {
    first: firstPart,
    second: secondPart,
    third: thirdPart,
  } = distributeImages(images);

  return (
    <>
      <div className="text-center mx-auto max-w-4xl mb-5">
        <h2 className="text-2xl md:text-5xl font-bold text-slate-300 tracking-tight">
          Meet Our{" "}
          <span className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 px-2 py-1 text-black font-bold">
            Sponsors
          </span>
        </h2>
        <p className="mt-4 text-slate-300/70 text-base md:text-lg">
          The incredible partners making this hackathon possible
        </p>
      </div>

      <div className={cn("w-full", className)} ref={gridRef}>
        <div className="grid grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-5">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
                <div className="relative h-80 w-full">
                  <Image
                    src={el}
                    alt="sponsor image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center rounded-lg"
                    quality={75}
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMj44Li4wMzQ7PDQ0QDk2Nzw6Ri5KODM8S01CQj1JOTU+Ozk/Qz3/2wBDAQoLCw8NDhwQEBw9JyInPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <img
                  src={el}
                  className="h-80 w-full object-cover object-center rounded-lg"
                  height="400"
                  width="400"
                  alt="sponsor thumbnail"
                />
              </motion.div>
            ))}
          </div>
          {isLargeScreen && (
            <div className="grid gap-10">
              {thirdPart.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <img
                    src={el}
                    className="h-80 w-full object-cover object-center rounded-lg"
                    height="400"
                    width="400"
                    alt="sponsor thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
