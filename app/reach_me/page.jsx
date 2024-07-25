"use client";
import { 
    FaPython, 
    FaReact, 
    FaRaspberryPi,
} from "react-icons/fa"
import { PiFileCpp } from "react-icons/pi";
import { VscTerminalBash } from "react-icons/vsc";
import { TbCircleLetterC, TbBrandNextjs } from "react-icons/tb";
import { GiPlagueDoctorProfile,GiMailbox } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { 
    SiLinkedin,
    SiDjango, 
    SiTailwindcss, 
    SiEspressif, 
    SiTensorflow, 
    SiPytorch, 
    SiNumpy, 
    SiPandas, 
    SiJavascript,
    SiArduino
} from "react-icons/si";
import { GoDot, GoOrganization } from "react-icons/go";

import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import{ ScrollArea } from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

const skills = {
    title: "About Me",
    description: "10+ skills mastered with lots of experience and more to go. Wishing myself luck in this endless journey of learning.",
    skillset: [
        {
            icon: <TbCircleLetterC />,
            name: "C programming",
        },
        {
            icon: <PiFileCpp />,
            name: "C++",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiNumpy />,
            name: "Numpy",
        },
        {
            icon: <SiPandas />,
            name: "Pandas",
        },
        {
            icon: <SiDjango />,
            name: "Django",
        },
        {
            icon: <SiTensorflow />,
            name: "Tensorflow",
        },
        {
            icon: <SiPytorch />,
            name: "PyTorch",
        },
                {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiJavascript />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <TbBrandNextjs />,
            name: "Next.js",
        },
        {
            icon: <VscTerminalBash />,
            name: "Shell script",
        },
        {
            icon: <SiArduino />,
            name: "Arduino",
        },
        {
            icon: <SiEspressif />,
            name: "Espressif",
        },
        {
            icon: <FaRaspberryPi />,
            name: "RaspberryPi",
        },
    ],
    education: [
        {
            sem: "1st Semester",
            period: <span className="text-accent font-extralight text-[14px]">July, 2023</span>,
            course: <span className="text-[20px]">B.E/B.Tech CSE (Core)</span>,
            cgpa: <span>CGPA: <span className="text-accent">9.26</span></span>,
            logo: <GoDot className="text-[30px] text-accent"></GoDot>,
            unv:<span className="text-white/55">UEM, Kolkata</span>
        },
        {
            sem: "2nd Semester",
            period: <span className="text-accent font-extralight text-[14px]">March, 2024</span>,
            course: <span className="text-[20px]">B.E/B.Tech CSE (Core)</span>,
            cgpa: <span>CGPA: <span className="text-accent">9.13</span></span>,
            logo: <GoDot className="text-[30px] text-accent"></GoDot>,
            unv:<span className="text-white/55">UEM, Kolkata</span>
        },
    ]
};

const contact = {
    title: "Reach Me",
    description: "I am open to any project collaborations right now, so feel free to reach me via any of the means mentioned below.",
    info: [
        {
            fieldName: <GiPlagueDoctorProfile className="text-[20px]"/>,
            fieldValue: <span className="text-[15px]">Debjeet Banerjee</span>
        },
        {
            fieldName: <GoOrganization className="text-[30px] md:text-[20px] xl:text-[20px]"/>,
            fieldValue: <span className="text-[15px]">University of Engineering and Management, Kolkata</span>
        },
        {
            fieldName: <GrMapLocation className="text-[35px] md:text-[20px] xl:text-[20px]"/>,
            fieldValue: <span className="text-[15px]">New Town, Action Area-III, North 24-Parganas, Kolkata, West Bengal, India</span>
        },
        {
            fieldName: <GiMailbox className="text-[20px]"/>,
            fieldValue: <span className="text-[15px]">debjeetbanerjee48@gmail.com</span>
        },
        {
            fieldName: <SiLinkedin className="text-[20px]"/>,
            fieldValue: <span className="text-[15px]">in/~debjeetbanerjee</span>
        },
        {
            fieldName: <BsDiscord className="text-[20px]"/>,
            fieldValue: <span className="text-[15px]">._.mintraven</span>
        },
        {
            fieldName: <BsTwitterX className="text-[20px]"/>,
            fieldValue: <span className="text-[15px]">@mintRaven_05</span>
        },
    ]
};

const reach_me = () =>{
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
        > 
            <div className="container mx-auto">
                <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value = "skills">About me</TabsTrigger>
                        <TabsTrigger value = "contact">Contact</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h1 className="text-[40px] font-extrabold border-b-2 border-accent">
                                        {skills.title}<span className="text-accent">.</span>
                                    </h1>
                                    <p className=" text-white/75">
                                        {skills.description}
                                    </p>
                                </div>
                                <div className="h-[25px] w-[90px] border-b-2 border-accent py-10">Education</div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[40px]">
                                    {skills.education.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[225px] px-7 py-3 rounded-xl">

                                                {item.period}<br/>
                                                {item.sem}<br/>
                                                {item.course}<br/>
                                                {item.cgpa}<br/>
                                                <div className="flex flex-rows gap-2">
                                                {item.logo}{item.unv}<br/>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="h-[25px] w-[60px] border-b-2 border-accent py-10">Skills</div>
                                <ScrollArea className="h-[400px]" >
                                    <ul className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                                        {skills.skillset.map((item, index) => {
                                            return(
                                                <li key={index} className="flex flex-rows">
                                                  <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-5xl group-hover:text-accent transition-all duration-500">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="capitalize">
                                                            <p>{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                  </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                                <div className="h-[30px]" />
                            </div>

                        </TabsContent>
                        <TabsContent value="contact" className="w-full">
                            <div>
                                <div className="py-4">
                                    <h1 className="text-[40px] border-b-2 border-accent text-center xl:text-left">{contact.title}<span className="text-accent">.</span></h1>
                                </div>
                                <div>
                                    <p className="text-center xl:text-left text-white/75 my-5">{contact.description}</p>
                                    <ScrollArea className="h-[300px]">
                                        <ul className="py-4 bg-[#232329] rounded-xl px-5">
                                            {contact.info.map((item, index) => {
                                                return (
                                                    <li className="group">
                                                        <div className="flex flex-rows py-2 group-hover:text-accent transition-all duration-500">
                                                        {item.fieldName}&nbsp;{item.fieldValue}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                    <div className="my-8">
                                        <div className="flex flex-rows">
                                            <MdLabelImportantOutline className="text-[30px]"/>
                                            <MdLabelImportant className="text-[30px]"/>
                                            <MdLabelImportantOutline className="text-[30px]"/>
                                        </div>
                                        <p className="text-left text-white/80">Email's best! I'm most responsive there. Avoid using twitter for communication. I am not at all active, i made that account just for the sake of this portfolio. The last choice you could go with is Discord.</p>
                                    </div>        
                                </div>
                            </div>
                        </TabsContent>                        
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );  
};

export default reach_me;
