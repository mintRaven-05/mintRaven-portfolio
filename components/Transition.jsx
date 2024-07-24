"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({children}) => {
    const pathname = usePathname();
    return( 
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initital={{opacity: 1}} 
            animate={{
                opacity: 0, 
                transition: {delay: 1, duration: 0.3, ease: "easeInOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            /> 
        </div>
        {children}
    </AnimatePresence>);
};

export default Transition;