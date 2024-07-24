"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

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

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            mint<span className="text-accent">Raven</span>.
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {nav_list.map((link, index) => {
                        return (
                            <Link href = {link.path} 
                            key={index} 
                            className={`${
                                link.path === pathname && 
                                "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav