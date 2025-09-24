'use client';

import { useState, useEffect } from 'react';
import { MotionProvider } from '@/components/motion-provider';
import { Preloader } from '@/components/preloader';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <MotionProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader dimension={dimension} setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {children}
          <Toaster />
        </>
      )}
    </MotionProvider>
  );
}
