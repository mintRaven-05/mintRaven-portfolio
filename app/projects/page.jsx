"use client";
import { BsArrowDownRight, BsGithub } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const projects = [
    {
        num: "1",
        title: "Atlas",
        description: "Atlas is a robust ELF parser implemented in C programming language. It has a custom decoder made from scratch. Designed for developers & security researchers",
        href: "https://github.com/mintRaven-05/atlas",
    },
    {
        num: "2",
        title: "ESPionage",
        description: "An advanced ESP8266 and ESP32 firmware analysis toolkit. It can parse & disassemble firmware bins with a custom parser. Built for security researchers and LLDs.",
        href: "https://github.com/serene-brew/ESPionage",
    },
    {
        num: "3",
        title: "Kaizen",
        description: "Kaizen brings your favorite anime directly to the Linux terminal. As streaming websites face bans, it provides a resilient, TUI experience. Also, no ads :D",
        href: "https://github.com/serene-brew/kaizen",
    },
    {
        num: "4",
        title: "MinTorrent",
        description: "A CLI based torrent client for linux based systems with basic features like downloading from a torrent file and magnets along with a new feature of searching magnets.",
        href: "https://github.com/mintRaven-05/MinTorrent",
    },

];



const Projects = () => {

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-9 xl:py-0">
            <div className="container mx-auto">
                <div className="text-5xl text-center xl:text-right font-extrabold border-b-2 border-accent py-6">High<span className="text-transparent text-outline-hover">LIGHTS</span></div>
                <motion.div 
                    initial={{opacity: 0}}
                    animate = {{opacity:1,
                                transition: {delay:2, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid gird-cold-1 md:grid-cols-2 gap-[60px] py-10"
                >
                    {projects.map((item, index) => {
                        return(
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex items-center">
                                    <span className="text-accent text-5xl font-extrabold">0</span>
                                    <div className="flex flex-1 justify-between items-center">
                                        <div 
                                        className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-600">
                                            {item.num}</div>
                                        <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-600 flex justify-center items-center hover:-rotate-45">
                                            <BsArrowDownRight className="text-primary text-2xl"/>
                                        </Link>
                                    </div>
                                </div>
                                
                                <h2 className="text-2xl font-bold">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="border-b border-white/20 w-full" />
                            </div>
                        );
                    })}
                </motion.div>
                <div className="flex flex-2 justify-between items-center gap-5">
                    <div className="py-12">
                        <Link className="w-40 h-14 border border-accent rounded-full flex justify-center items-center text-accent bg-primary 
                            text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 gap-4" href="https://github.com/mintRaven-05">follow me<BsGithub className="text-[20px]"/></Link>
                    </div>
                    <div className="py-12">
                    <Link className="w-40 h-14 border border-accent rounded-full flex justify-center items-center text-accent bg-primary 
                            text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 gap-4" href="https://github.com/mintRaven-05?tab=repositories">uncover<BsGithub className="text-[20px]"/></Link>
                    </div>
                </div>
            </div>

        </section> 
    );  
};

export default Projects; 
