"use client";

import React, { createContext, useContext, useState } from "react";
import Loading from "@/components/loading";

type LoadingContextType = {
  forceLoading: () => void;
  setLoaded: () => void;
  isLoading: boolean;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const forceLoading = () => setIsLoading(true);
  const setLoaded = () => setIsLoading(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ forceLoading, setLoaded, isLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
