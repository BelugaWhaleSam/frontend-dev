"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-[100vh] items-center justify-center bg-blue-900 text-blue-100 dark:bg-gray-950 dark:text-cyan-200 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--aurora:repeating-linear-gradient(115deg,#0f172a_0%,#1e40af_20%,#0284c7_35%,#000000_40%,#0369a1_50%,#06b6d4_65%,#7dd3fc_80%,#ffffff_90%)]
              [background-image:var(--aurora)]
              [background-size:300%_200%]
              [background-position:50%_50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0 
              after:[background-image:var(--aurora)]
              after:[background-size:200%_100%] 
              after:animate-aurora 
              after:[background-attachment:fixed] 
              after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-60 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};