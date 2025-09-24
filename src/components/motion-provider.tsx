"use client";

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      {children}
    </MotionConfig>
  );
}
