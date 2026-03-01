import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PageTransitionProps {
    triggerTransition: (targetId: string) => void;
    isAnimating: boolean;
}

const PageTransitionOverlay = ({ isAnimating }: { isAnimating: boolean }) => {
    return (
        <AnimatePresence>
            {isAnimating && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="fixed inset-0 bg-forest z-[100] flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-16 h-16 border-4 border-sand/20 border-t-sand rounded-full animate-spin" />
                        <span className="text-sand font-display text-xl tracking-widest uppercase italic">Explorando...</span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageTransitionOverlay;
