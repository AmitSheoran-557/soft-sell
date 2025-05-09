"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HEADER_DATA_LIST } from "@/utils/helper";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <div className="flex justify-between w-full items-center z-[150] fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-xl">
            <div className="container px-3 mx-auto max-w-[1440px] w-full ">
                <div className="flex justify-between items-center py-2 lg:px-4 px-1">
                    <Link href="/" className="text-white text-2xl font-semibold">
                        SOFT SELL
                    </Link>
                    <div className={`flex menulist justify-center items-center duration-300 ease-linear text-white w-full min-h-screen fixed top-0 bg-blue z-[100] transition-all lg:relative lg:min-h-fit lg:w-fit lg:flex-row lg:right-0 lg:bg-transparent lg:text-blue ${isMenuOpen ? "right-0 !bg-black" : "-right-full"}`} >
                        <div className="font-medium lg:text-lg text-base xl:gap-10 lg:gap-7 gap-5 flex max-lg:flex-col max-lg:text-center ">
                            {HEADER_DATA_LIST.map((item, index) => (
                                <Link key={index} className="hover:text-blue-500 duration-300 ease-linear" href={item.link} onClick={() => setIsMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            ))}
                            <div className="max-lg:block lg:hidden">
                                <Link href="/quote" target="_blank" onClick={() => setIsMenuOpen(false)} className="flex justify-center items-center hover:text-blue duration-300 ease-linear font-medium border-blue-500 border-1 hover:border-transparent bg-transparent text-white hover:bg-white hover:text-black rounded-md md:text-lg text-base px-3 py-2">
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="max-lg:hidden">
                        <Link href="/quote" target="_blank" onClick={() => setIsMenuOpen(false)} className="flex justify-center items-center duration-300 ease-linear font-medium border-blue-500 border-1 hover:border-transparent bg-transparent text-white hover:bg-white hover:text-black rounded-md md:text-lg sm:text-base text-xs px-4 py-2">
                            Get a Quote
                        </Link>
                    </div>

                    <div onClick={handleToggle} className="flex flex-col lg:hidden justify-between cursor-pointer z-[200] w-[25.5px] h-[21px]">
                        <span className={`w-full min-h-[2px] rounded-md transition-all duration-300 bg-white origin-left ${isMenuOpen ? "rotate-45 translate-y-0" : ""}`} />
                        <span className={`w-full min-h-[2px] rounded-md transition-all duration-300 bg-white origin-left ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full min-h-[2px] rounded-md transition-all duration-300 bg-white origin-left ${isMenuOpen ? "-rotate-45 -translate-y-[1px]" : ""}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
