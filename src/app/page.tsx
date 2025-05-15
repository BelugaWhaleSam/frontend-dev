"use client";
import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
import Loading from "@/components/loading";

const withMinLoadTime = (
  Component: React.ComponentType,
  minLoadTime = 1000
) => {
  return function WithMinLoadTime(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadTime);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;
    return <Component {...props} />;
  };
};

const HomePage = dynamic(() => import("@/layouts/homepage"), {
  loading: () => <Loading />,
  ssr: false,
});

const StickyBannerDemo = dynamic(
  () =>
    import("@/layouts/sticky-banner-layout").then(
      (mod) => mod.StickyBannerDemo
    ),
  {
    loading: () => (
      <div className="h-12 bg-gradient-to-r from-orange-400/20 to-orange-500/20 animate-pulse" />
    ),
    ssr: false,
  }
);

const FeaturesSectionDemo = dynamic(
  () => import("@/layouts/bento-layout").then((mod) => mod.FeaturesSectionDemo),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const TimelineDemo = dynamic(
  () => import("@/layouts/timeline-layout").then((mod) => mod.TimelineDemo),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const AnimatedTestimonialsDemo = dynamic(
  () =>
    import("@/layouts/team-layout").then((mod) => mod.AnimatedTestimonialsDemo),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const ParallaxScrollDemo = dynamic(
  () =>
    import("@/layouts/sponsors-layout").then((mod) => mod.ParallaxScrollDemo),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

const AnimatedSection: React.FC<{
  delay?: number;
  children?: React.ReactNode;
  className?: string;
}> = ({ children, delay = 0, className }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || isLoading) {
    return <Loading />;
  }

  return (
    <AnimatePresence mode="wait">
      <main className="w-full relative overflow-x-hidden">
        <Suspense fallback={<Loading />}>
          <AnimatedSection delay={0.5}>
            <StickyBannerDemo />
          </AnimatedSection>

          <AnimatedSection>
            <HomePage />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <FeaturesSectionDemo />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <TimelineDemo />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <AnimatedTestimonialsDemo />
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="w-full relative">
            <ParallaxScrollDemo />
          </AnimatedSection>
        </Suspense>
      </main>
    </AnimatePresence>
  );
}
