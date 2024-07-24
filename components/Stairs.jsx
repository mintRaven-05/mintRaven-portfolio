"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
};

const countReverse = (index) => {
    const steps = 6;
    return steps - index - 1;
};

const Animation = () => {
    return (
        <>
        {[...Array(6)].map((_, index) => {
           return (
           <motion.div key={index} 
            variants={StairAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: countReverse(index) * 0.1,    
            }}
            className="h-full w-full bg-white relative"
            />
        );
        })}
        </>
    );
}

const Stairs = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={[pathname]}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Animation />
                </div>
                <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                 initial={{opacity: 1}}
                 animate={{opacity:0, transition:{delay:1, duration: 0.3, ease: "easeInOut"},
                }} />
            </div>
        </AnimatePresence>
    );
};
export default Stairs;