"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Namaste"];

export const Preloader = ({ dimension, setIsLoading }: { dimension: { width: number; height: number }, setIsLoading: (loading: boolean) => void }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 200); // Wait a short moment on the last word before finishing
            return () => clearTimeout(timer);
        };
        const timeoutId = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 500 : 100); // Faster transition between words
        return () => clearTimeout(timeoutId);
    }, [index, setIsLoading]);


    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 }
        }
    }

    if (!dimension.width) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <motion.p
                className="flex text-4xl items-center text-foreground font-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className="block w-2.5 h-2.5 bg-primary rounded-full mr-2.5"></span>
                {words[index]}
            </motion.p>
            <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                <motion.path
                    d={initialPath}
                    variants={curve}
                    initial="initial"
                    exit="exit"
                    className="fill-current text-background"
                />
            </svg>
        </motion.div>
    );
};
