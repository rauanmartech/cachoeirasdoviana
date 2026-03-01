import React from "react";
import { motion } from "framer-motion";

const LeafBranch = ({ className, style, duration = 10, delay = 0 }: { className?: string; style?: React.CSSProperties; duration?: number; delay?: number }) => (
    <motion.div
        className={className}
        style={style}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 2, 0],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main branch stroke */}
            <motion.path
                d="M300 380C300 380 280 250 150 150C80 96 20 80 20 80"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="text-forest/30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2 }}
            />

            {/* Leaf 1 (Top Left) */}
            <motion.g transform="translate(40, 60) rotate(-45)">
                <path
                    d="M0 0C30 -10 60 10 70 40C40 50 10 30 0 0Z"
                    fill="var(--forest-light)"
                    fillOpacity="0.15"
                    transform="translate(5, 5)"
                />
                <path
                    d="M0 0C30 -10 60 10 70 40C40 50 10 30 0 0Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-forest/40"
                />
                <path d="M0 0L70 40" stroke="currentColor" strokeWidth="0.8" className="text-forest/20" />
            </motion.g>

            {/* Leaf 2 (Middle Left) */}
            <motion.g transform="translate(100, 140) rotate(-20)">
                <path
                    d="M0 0C40 -5 70 20 80 50C50 60 10 40 0 0Z"
                    fill="var(--forest-light)"
                    fillOpacity="0.1"
                    transform="translate(-5, 8)"
                />
                <path
                    d="M0 0C40 -5 70 20 80 50C50 60 10 40 0 0Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-forest/40"
                />
                <path d="M0 0L80 50" stroke="currentColor" strokeWidth="0.8" className="text-forest/20" />
            </motion.g>

            {/* Leaf 3 (Bottom Left) */}
            <motion.g transform="translate(180, 240) rotate(10)">
                <path
                    d="M0 0C45 0 75 25 85 55C55 65 15 45 0 0Z"
                    fill="var(--forest-light)"
                    fillOpacity="0.15"
                    transform="translate(8, -5)"
                />
                <path
                    d="M0 0C45 0 75 25 85 55C55 65 15 45 0 0Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-forest/40"
                />
                <path d="M0 0L85 55" stroke="currentColor" strokeWidth="0.8" className="text-forest/20" />
            </motion.g>

            {/* Leaf 4 (Right Side) */}
            <motion.g transform="translate(220, 160) rotate(60)">
                <path
                    d="M0 0C35 -15 65 5 75 35C45 45 15 25 0 0Z"
                    fill="var(--forest-light)"
                    fillOpacity="0.1"
                    transform="translate(-3, -3)"
                />
                <path
                    d="M0 0C35 -15 65 5 75 35C45 45 15 25 0 0Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-forest/40"
                />
                <path d="M0 0L75 35" stroke="currentColor" strokeWidth="0.8" className="text-forest/20" />
            </motion.g>
        </svg>
    </motion.div>
);

const LeavesBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#fdfbf6]">
            {/* Top Left Branch */}
            <LeafBranch className="absolute -top-20 -left-20 w-[400px] h-[400px] rotate-[120deg] opacity-60" duration={12} delay={0} />

            {/* Middle Right Branch */}
            <LeafBranch className="absolute top-1/3 -right-32 w-[500px] h-[500px] -rotate-[45deg] opacity-40" duration={15} delay={-5} />

            {/* Bottom Left Branch */}
            <LeafBranch className="absolute bottom-20 -left-40 w-[600px] h-[600px] rotate-[15deg] opacity-50" duration={18} delay={-10} />

            {/* Bottom Right Branch */}
            <LeafBranch className="absolute -bottom-32 -right-20 w-[450px] h-[450px] -rotate-[160deg] opacity-60" duration={14} delay={-15} />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest/[0.02] to-transparent" />
        </div>
    );
};

export default LeavesBackground;
