"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav_list = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "Reach Me",
        path: "/reach_me",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return(
        <nav className="flex gap-8">
            {nav_list.map((link, index)=>{
                return(
                        <Link href={link.path} key={index} className={`${link.path === pathname && 
                        "text-accent border-b-2  border-accent"} capitalize font-medium
                         hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                ); 
            })}    
        </nav>
    );
};

export default Nav