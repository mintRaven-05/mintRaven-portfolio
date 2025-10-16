"use client";
import { ReactTyped } from "react-typed";

import { GrContact } from "react-icons/gr";
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";


const socials = [
  { icon: <FaGithub />, path: "https://github.com/mintRaven-05"},
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/debjeetbanerjee48/"},
  { icon: <FaXTwitter />, path: "https://x.com/mintRaven_05"},
  {icon: <MdAttachEmail />, path: "mailto:debjeet.banerjee2023@uem.edu.in"},
];

const stats= [
  {
    num: 10,
    text: "Projects Done",
  },
  {
    num: 15,
    text: "Techs Mastered",
  },
  {
    num: 999,
    text: "GitHub Commits",
  },
  {
    num: 999,
    text: "GitHub Contributions",
  },
];

const Social = ({ContainerStyles, iconStyles}) => {
  return( 
    <div className={ContainerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        );
      })}
    </div>
  );
};

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[30vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className= "flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                <CountUp 
                  end={item.num} 
                  duration = {5} 
                  delay = {2} 
                  className="text-4xl xl:text-6xl font-extrabold" 
                  suffix={`${item.text === "GitHub Commits" ? "+" : "" || item.text === "Techs Mastered" ? "+" : "" || item.text === "GitHub Contributions" ? "+" : "" }`}

                  />
                  <p className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}>{item.text}</p>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}

const Photo = () => {
  return( 
    <div className="w-full h-full relative">
      <motion.div 
      initial={{opacity:0}} 
      animate={{opacity: 1, 
                transition:{delay:2, duration: 0.4, ease: "easeIn"},
      }}>
        <motion.div 
      initial={{opacity:0}} 
      animate={{opacity: 1, 
                transition:{delay:2.4, duration: 0.4, ease: "easeInOut"},
      }} 
        className="w-[180px] h-[180px] xl:w-[370px] xl:h-[370px] mix-blend-lighten absolute">
          <Image src="/cropped_image.png" priority quality={100} fill alt="" className="object-contain" />
        </motion.div>
        <motion.svg className="w-[185px] xl:w-[380px] h-[185px] xl:h-[380px]" 
        fill="tranasparent" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
            cx="253" 
            cy="253" 
            r="255" 
            stroke="#00ff99" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ strokeDasharray: "24 10 0 0" }} 
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], 
              rotate: [120, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}/>
        </motion.svg>
      </motion.div>
    </div>
  );
}

const Home = () => {
  return( 
  <section className="h-full w-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="text-white text-4xl font-bold">Hey<span className="text-accent">,</span></h1>
          <h2 className="text-white text-3xl font-semibold"><span className="text-accent">@</span>mint<span className="text-accent">Raven</span><span className="text-accent">,</span></h2>
          <h2 className="text-white text-2xl font-semibold">aka Debjeet <span className="text-accent">Banerjee</span></h2>
          
          <ReactTyped
              strings={[
                "AI/ML developer,^500",
                "^1000embedded systems developer,^500",
                "and of course a tech geek.^3000",
              ]}

            typeSpeed={30}
            backSpeed={30}
            loop
            className="text-xl xl:text-2xl text-bold text-accent text-center"
          />
          <p className="max-w-[550px] mb-9 text-white/80">
          Low level programmer by day<span className="text-accent">,</span> making toasters think they're Teslas<span className="text-accent">.</span><br/>
          <span className="text-accent">C</span>, <span className="text-accent">C++</span>, <span className="text-accent">As</span>se<span className="text-accent">m</span>bly, <span className="text-accent">Py</span>thon - you name it, I've probably written a love letter to it.<br/>
          And in my spare time (what's that?), I dabble in machine learning, teaching robots who's the boss.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link className="w-40 h-14 border border-accent rounded-full flex justify-center items-center text-accent bg-primary 
                            text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 gap-4" href="/reach_me">Let's Talk <GrContact />
            </Link>
            <div className="mb-8 xl:mb-0">
              <Social 
              ContainerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent bg-primary 
                          text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
              </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
}

export default Home;
